# ASL Learn - Interactive American Sign Language Learning Platform

ASL Learn is a comprehensive, interactive web application designed to help users learn and practice American Sign Language (ASL) letters. The platform combines educational content with real-time machine learning-powered sign recognition to provide an engaging learning experience.

## 🌐 Live Demo
**Website Link**: [https://americansignlanguage.netlify.app/](https://americansignlanguage.netlify.app/)

## 🌟 Features

- **Interactive Learning Module**: Visual guides and instructions for ASL letters A-Y (excluding J and Z)
- **Real-time Sign Recognition**: AI-powered webcam testing using a custom-trained TensorFlow model
- **Progress Tracking**: Quiz system with scoring and accuracy tracking
- **Responsive Design**: Modern, accessible interface built with React and Tailwind CSS
- **Educational Content**: Comprehensive information about ASL and deaf culture

## 🛠️ Technology Stack

### Frontend
- **React 19.1.0** - Modern UI library
- **Vite 6.3.5** - Fast build tool and dev server
- **Tailwind CSS 4.1.8** - Utility-first CSS framework
- **React Router DOM 7.6.1** - Client-side routing
- **TensorFlow.js 4.22.0** - Machine learning in the browser
- **React Webcam 7.2.0** - Webcam capture functionality
- **Axios 1.9.0** - HTTP client for API requests

### Backend
- **FastAPI** - Modern, fast web framework for building APIs
- **OpenCV (cv2)** - Computer vision library
- **CVZone** - Computer vision utility library
- **NumPy** - Numerical computing
- **Pillow (PIL)** - Image processing
- **Uvicorn** - ASGI web server

### Machine Learning
- **Custom Keras Model** - Trained for ASL letter recognition
- **Hand Tracking** - Real-time hand detection and tracking
- **Image Classification** - Sign language letter classification

## 📁 Project Structure

```
ASL-Learn/
├── Frontend/                    # React frontend application
│   ├── public/
│   │   ├── asl-images/         # ASL letter images (A-Y)
│   │   └── model/              # TensorFlow.js model files
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Home.jsx        # Landing page with ASL information
│   │   │   ├── Learn.jsx       # Interactive learning module
│   │   │   ├── Test.jsx        # Real-time sign recognition testing
│   │   │   ├── About.jsx       # Project information and credits
│   │   │   └── Navbar.jsx      # Navigation component
│   │   ├── App.jsx             # Main application component
│   │   └── main.jsx            # Application entry point
│   ├── package.json            # Frontend dependencies
│   └── vite.config.js          # Vite configuration
├── Backend/                     # FastAPI backend
│   ├── converted_keras/
│   │   ├── keras_model.h5      # Trained ML model
│   │   └── labels.txt          # Model labels (A-Y)
│   ├── main.py                 # FastAPI server and prediction logic
│   └── requirements.txt        # Python dependencies
├── Data_Collection.ipynb       # Jupyter notebook for dataset creation
└── README.md                   # Project documentation
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- Python 3.8+
- Git

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ASL-Learn.git
   cd ASL-Learn/Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`

### Backend Setup

1. **Navigate to the Backend directory**
   ```bash
   cd ASL-Learn/Backend
   ```

2. **Create a virtual environment (recommended)**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Start the FastAPI server**
   ```bash
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```
   The API will be available at `http://localhost:8000`

## 📚 How to Use

### Learning Module
1. Navigate to the **Learn** page
2. Click on any ASL letter (A-Y) to view:
   - High-quality reference image
   - Detailed hand positioning instructions
   - Tips for correct formation

### Testing Module
1. Go to the **Test** page
2. Allow webcam access when prompted
3. The system will present 5 random letters to sign
4. Position your hand in front of the camera
5. Click "Capture & Predict" to test your sign
6. View real-time feedback and scoring

### Features Available:
- **Progress Tracking**: See your accuracy percentage
- **Detailed Results**: Review correct/incorrect predictions
- **Retake Options**: Practice unlimited times
- **Visual Feedback**: Processed images with hand detection

## 🧠 Machine Learning Model

### Model Details
- **Architecture**: Custom Keras/TensorFlow model
- **Training Data**: Hand-collected ASL letter dataset
- **Classes**: 24 letters (A-Y, excluding J and Z)
- **Input**: 300x300 RGB images
- **Output**: Letter classification with confidence scores

### Data Collection Process
The `Data_Collection.ipynb` notebook demonstrates:
- Webcam capture setup
- Hand detection and cropping
- Image preprocessing and normalization
- Dataset organization for model training

### Model Pipeline
1. **Hand Detection**: Uses CVZone HandTrackingModule
2. **Image Preprocessing**: 
   - Crop hand region with 20px offset
   - Resize to 300x300 pixels
   - Normalize to white background
3. **Classification**: TensorFlow model predicts letter
4. **Visualization**: Draws bounding box on original image

## 🎨 Design & User Experience

### Visual Design
- **Modern Interface**: Clean, accessible design with intuitive navigation
- **Responsive Layout**: Optimized for desktop and mobile devices
- **Accessibility**: High contrast, clear typography, and keyboard navigation
- **Animations**: Smooth transitions and hover effects

### User Experience
- **Guided Learning**: Step-by-step instructions for each letter
- **Immediate Feedback**: Real-time prediction results
- **Progress Visualization**: Clear scoring and accuracy metrics
- **Error Handling**: Helpful error messages and troubleshooting

## 📊 Supported ASL Letters

The application supports the following ASL letters:
**A, B, C, D, E, F, G, H, I, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y**

*Note: Letters J and Z are excluded as they require motion, which is not suitable for static image recognition.*

## 🔧 Configuration

### Backend Configuration
- **CORS Settings**: Configured for `http://localhost:5173`
- **Model Path**: `converted_keras/keras_model.h5`
- **Labels Path**: `converted_keras/labels.txt`
- **Image Processing**: 300x300 input size with 20px offset

### Frontend Configuration
- **API Endpoint**: Configurable in `Test.jsx`
- **Webcam Settings**: 640x480 resolution
- **Quiz Length**: 5 random letters per test

## 🤝 Contributing

We welcome contributions to improve ASL Learn! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Areas for Contribution
- Adding support for more ASL signs
- Improving model accuracy
- Enhancing UI/UX design
- Adding new educational content
- Performance optimizations
- Bug fixes and improvements

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Credits & Acknowledgments

- **Development**: Built with React, FastAPI, and TensorFlow
- **Machine Learning**: Model trained using custom dataset
- **Hand Tracking**: Powered by CVZone library
- **UI Framework**: Tailwind CSS for responsive design
- **ASL Resources**: Educational content sourced from ASL learning materials

## 🔮 Future Enhancements

- [ ] Support for dynamic signs (J and Z)
- [ ] Word and sentence recognition
- [ ] Multi-user progress tracking
- [ ] Mobile app development
- [ ] Advanced analytics and learning paths
- [ ] Integration with ASL dictionaries
- [ ] Real-time conversation practice

---

**ASL Learn** - Making American Sign Language education accessible, interactive, and engaging for everyone. 🤟

*Built with ❤️ for the deaf and hard-of-hearing community and ASL learners worldwide.*
