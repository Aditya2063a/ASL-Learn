from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import cv2
from cvzone.HandTrackingModule import HandDetector
from cvzone.ClassificationModule import Classifier
import numpy as np
import math
import h5py
from io import BytesIO
from PIL import Image
import base64

app = FastAPI()

# Update CORS to allow requests from http://localhost:5173
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Updated to match frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rest of your backend code remains unchanged
# ... (include the rest of the code from your original main.py)
f = h5py.File("converted_keras/keras_model.h5", mode="r+")
model_config_string = f.attrs.get("model_config")
if model_config_string.find('"groups": 1,') != -1:
    model_config_string = model_config_string.replace('"groups": 1,', '')
    f.attrs.modify('model_config', model_config_string)
    f.flush()
f.close()

detector = HandDetector(maxHands=1)
classifier = Classifier(
    "converted_keras/keras_model.h5",
    "converted_keras/labels.txt"
)
labels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"]
offset = 20
imgSize = 300

def draw_stylish_bbox(img, x, y, w, h, offset=20, color=(255, 255, 255), thickness=2, radius=20):
    x1, y1 = x - offset, y - offset
    x2, y2 = x + w + offset, y + h + offset
    overlay = img.copy()
    cv2.line(overlay, (x1 + radius, y1), (x2 - radius, y1), color, thickness)
    cv2.line(overlay, (x1, y1 + radius), (x1, y2 - radius), color, thickness)
    cv2.line(overlay, (x2, y1 + radius), (x2, y2 - radius), color, thickness)
    cv2.line(overlay, (x1 + radius, y2), (x2 - radius, y2), color, thickness)
    cv2.ellipse(overlay, (x1 + radius, y1 + radius), (radius, radius), 180, 0, 90, color, thickness)
    cv2.ellipse(overlay, (x2 - radius, y1 + radius), (radius, radius), 270, 0, 90, color, thickness)
    cv2.ellipse(overlay, (x1 + radius, y2 - radius), (radius, radius), 90, 0, 90, color, thickness)
    cv2.ellipse(overlay, (x2 - radius, y2 - radius), (radius, radius), 0, 0, 90, color, thickness)
    return cv2.addWeighted(overlay, 1, img, 0, 0)

@app.post("/predict")
async def predict_sign(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        nparr = np.frombuffer(contents, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        imgOutput = img.copy()
        hands, img = detector.findHands(img)

        if hands:
            hand = hands[0]
            x, y, w, h = hand['bbox']
            imgWhite = np.ones((imgSize, imgSize, 3), np.uint8) * 255
            y1 = max(0, y - offset)
            y2 = min(img.shape[0], y + h + offset)
            x1 = max(0, x - offset)
            x2 = min(img.shape[1], x + w + offset)
            imgCrop = img[y1:y2, x1:x2]

            if imgCrop.size != 0:
                aspectRatio = h / w
                if aspectRatio > 1:
                    k = imgSize / h
                    wCal = math.ceil(k * w)
                    imgResize = cv2.resize(imgCrop, (wCal, imgSize))
                    wGap = math.ceil((imgSize - wCal) / 2)
                    imgWhite[:, wGap:wGap + wCal] = imgResize
                else:
                    k = imgSize / w
                    hCal = math.ceil(k * h)
                    imgResize = cv2.resize(imgCrop, (imgSize, hCal))
                    hGap = math.ceil((imgSize - hCal) / 2)
                    imgWhite[hGap:hGap + hCal, :] = imgResize

                prediction, index = classifier.getPrediction(imgWhite, draw=False)
                label = labels[index]
                imgOutput = draw_stylish_bbox(imgOutput, x, y, w, h, offset, color=(255, 255, 255))
                
                _, buffer = cv2.imencode('.jpg', imgOutput)
                img_base64 = base64.b64encode(buffer).decode('utf-8')

                return {
                    "prediction": label,
                    "image": f"data:image/jpeg;base64,{img_base64}",
                    "success": True
                }
            else:
                return {"error": "Invalid crop area", "success": False}
        else:
            return {"error": "No hand detected", "success": False}
    except Exception as e:
        return {"error": str(e), "success": False}