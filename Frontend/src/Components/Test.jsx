// import React, { useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Webcam from 'react-webcam';
// import axios from 'axios';

// const Test = () => {
//   const webcamRef = useRef(null);
//   const [prediction, setPrediction] = useState('');
//   const [imageSrc, setImageSrc] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isWebcamOn, setIsWebcamOn] = useState(true);
//   const [score, setScore] = useState(0);
//   const [totalAttempts, setTotalAttempts] = useState(0);
//   const navigate = useNavigate();

//   const toggleWebcam = () => {
//     setIsWebcamOn(!isWebcamOn);
//     setError('');
//     setPrediction('');
//     setImageSrc('');
//   };

//   const capture = async () => {
//     if (!isWebcamOn) {
//       setError('Please turn on the webcam first');
//       return;
//     }

//     setIsLoading(true);
//     setError('');
//     const imageSrc = webcamRef.current.getScreenshot();
//     if (!imageSrc) {
//       setError('Failed to capture image');
//       setIsLoading(false);
//       return;
//     }

//     try {
//       // Convert base64 to blob
//       const response = await fetch(imageSrc);
//       const blob = await response.blob();
//       const formData = new FormData();
//       formData.append('file', blob, 'capture.jpg');

//       // Send to backend
//       const result = await axios.post('http://localhost:8000/predict', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       if (result.data.success) {
//         setPrediction(result.data.prediction);
//         setImageSrc(result.data.image);
//         setTotalAttempts(totalAttempts + 1);
//       } else {
//         setError(result.data.error || 'Prediction failed');
//       }
//     } catch (err) {
//       setError('Error connecting to server');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const markCorrect = () => {
//     setScore(score + 1);
//     setPrediction('');
//     setImageSrc('');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//       <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6">
//         <h1 className="text-3xl font-bold text-center mb-6">Test Your Sign Language</h1>
//         <div className="flex flex-col items-center">
//           <div className="mb-4">
//             <p className="text-lg font-semibold">Score: {score} / {totalAttempts}</p>
//             {totalAttempts > 0 && (
//               <p className="text-sm text-gray-600">
//                 Accuracy: {((score / totalAttempts) * 100).toFixed(2)}%
//               </p>
//             )}
//           </div>
//           {isWebcamOn ? (
//             <Webcam
//               audio={false}
//               ref={webcamRef}
//               screenshotFormat="image/jpeg"
//               width={640}
//               height={480}
//               className="rounded-lg mb-4"
//             />
//           ) : (
//             <div className="w-[640px] h-[480px] bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
//               <p className="text-gray-600">Webcam is off</p>
//             </div>
//           )}
//           <div className="flex space-x-4">
//             <button
//               onClick={toggleWebcam}
//               className="px-4 py-2 rounded-lg text-white font-semibold bg-green-600 hover:bg-green-700 transition-colors"
//             >
//               {isWebcamOn ? 'Turn Off Webcam' : 'Turn On Webcam'}
//             </button>
//             <button
//               onClick={capture}
//               disabled={isLoading || !isWebcamOn}
//               className={`px-6 py-2 rounded-lg text-white font-semibold ${
//                 isLoading || !isWebcamOn
//                   ? 'bg-gray-400 cursor-not-allowed'
//                   : 'bg-blue-600 hover:bg-blue-700'
//               } transition-colors`}
//             >
//               {isLoading ? 'Processing...' : 'Capture & Predict'}
//             </button>
//           </div>
//           {error && <p className="text-red-500 mt-4">{error}</p>}
//           {prediction && (
//             <div className="mt-6 text-center">
//               <h2 className="text-2xl font-semibold">Predicted Sign: {prediction}</h2>
//               {imageSrc && (
//                 <img
//                   src={imageSrc}
//                   alt="Processed hand sign"
//                   className="mt-4 rounded-lg max-w-full h-auto"
//                 />
//               )}
//               <button
//                 onClick={markCorrect}
//                 className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//               >
//                 Mark as Correct
//               </button>
//             </div>
//           )}
//           <button
//             onClick={() => navigate('/')}
//             className="mt-6 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
//           >
//             Back to Home
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Test;



import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import axios from 'axios';

const letters = 'ABCDEFGHIKLMNOPQRSTUVWXY'.split('');

const Test = () => {
  const webcamRef = useRef(null);
  const [isWebcamOn, setIsWebcamOn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [quizLetters, setQuizLetters] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [prediction, setPrediction] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // Initialize quiz with 5 random letters
  useEffect(() => {
    const shuffled = letters.sort(() => 0.5 - Math.random());
    setQuizLetters(shuffled.slice(0, 5));
  }, []);

  const toggleWebcam = () => {
    setIsWebcamOn(!isWebcamOn);
    setError('');
    setPrediction('');
    setImageSrc('');
  };

  const capture = async () => {
    if (!isWebcamOn) {
      setError('Please turn on the webcam first');
      return;
    }

    setIsLoading(true);
    setError('');
    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) {
      setError('Failed to capture image');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(imageSrc);
      const blob = await response.blob();
      const formData = new FormData();
      formData.append('file', blob, 'capture.jpg');

      const result = await axios.post('https://4c00-2401-4900-8849-5928-a880-a392-18d7-8f93.ngrok-free.app/predict', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (result.data.success) {
        const predictedLetter = result.data.prediction;
        setPrediction(predictedLetter);
        setImageSrc(result.data.image);
        const isCorrect = predictedLetter === quizLetters[currentQuestion];
        setResults([...results, { letter: quizLetters[currentQuestion], prediction: predictedLetter, isCorrect }]);
        setTimeout(() => {
          setPrediction('');
          setImageSrc('');
          setCurrentQuestion(currentQuestion + 1);
        }, 2000); // Show prediction for 2 seconds before moving to next question
      } else {
        setError(result.data.error || 'Prediction failed');
      }
    } catch (err) {
      setError('Error connecting to server');
    } finally {
      setIsLoading(false);
    }
  };

  const restartQuiz = () => {
    const shuffled = letters.sort(() => 0.5 - Math.random());
    setQuizLetters(shuffled.slice(0, 5));
    setCurrentQuestion(0);
    setResults([]);
    setPrediction('');
    setImageSrc('');
    setError('');
  };

  const score = results.filter((result) => result.isCorrect).length;
  const totalQuestions = 5;

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8 animate-slide-in">
          Test Your Sign Language
        </h1>

        {currentQuestion < totalQuestions ? (
          <div className="flex flex-col items-center">
            {/* Progress Indicator */}
            <div className="mb-6 text-center">
              <p className="text-lg font-semibold text-gray-800">
                Question {currentQuestion + 1} of {totalQuestions}
              </p>
              <p className="text-xl font-bold text-blue-600 mt-2">
                Please sign the letter: <span className="text-3xl">{quizLetters[currentQuestion]}</span>
              </p>
              <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: totalQuestions }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index < currentQuestion ? 'bg-blue-600' : 'bg-gray-300'
                    } ${index === currentQuestion ? 'ring-2 ring-blue-400' : ''}`}
                  />
                ))}
              </div>
            </div>

            {/* Webcam or Placeholder */}
            {isWebcamOn ? (
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={640}
                height={480}
                className="rounded-lg shadow-md mb-6"
              />
            ) : (
              <div className="w-[640px] h-[480px] bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <p className="text-gray-600 text-lg">Webcam is off</p>
              </div>
            )}

            {/* Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={toggleWebcam}
                className="px-6 py-3 rounded-full text-white font-semibold bg-green-600 hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                {isWebcamOn ? 'Turn Off Webcam' : 'Turn On Webcam'}
              </button>
              <button
                onClick={capture}
                disabled={isLoading || !isWebcamOn}
                className={`px-6 py-3 rounded-full text-white font-semibold ${
                  isLoading || !isWebcamOn
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1'
                } transition-all duration-300`}
              >
                {isLoading ? 'Processing...' : 'Capture & Predict'}
              </button>
            </div>

            {/* Error and Prediction */}
            {error && <p className="text-red-500 mt-4 text-lg">{error}</p>}
            {prediction && (
              <div className="mt-6 text-center animate-fade-in">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Predicted Sign: <span className="text-blue-600">{prediction}</span>
                </h2>
                <p className={`text-lg mt-2 ${prediction === quizLetters[currentQuestion] ? 'text-green-600' : 'text-red-600'}`}>
                  {prediction === quizLetters[currentQuestion] ? 'Correct!' : `Incorrect. Expected: ${quizLetters[currentQuestion]}`}
                </p>
                {imageSrc && (
                  <img
                    src={imageSrc}
                    alt="Processed hand sign"
                    className="mt-4 rounded-lg shadow-md max-w-[300px] h-auto mx-auto"
                  />
                )}
              </div>
            )}
          </div>
        ) : (
          /* Results Modal */
          <div className="flex flex-col items-center animate-fade-in">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Quiz Results</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md w-full max-w-md border border-gray-200">
              <p className="text-2xl font-bold text-gray-800 text-center">
                Score: {score} / {totalQuestions}
              </p>
              <p className="text-lg text-gray-600 text-center mt-2">
                Accuracy: {((score / totalQuestions) * 100).toFixed(2)}%
              </p>
              <div className="mt-6">
                {results.map((result, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-800">Letter: {result.letter}</span>
                    <span className={result.isCorrect ? 'text-green-600' : 'text-red-600'}>
                      {result.isCorrect ? 'Correct' : `Predicted: ${result.prediction}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex space-x-4 mt-8">
              <button
                onClick={restartQuiz}
                className="px-6 py-3 rounded-full text-white font-semibold bg-blue-600 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Retake Quiz
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 rounded-full text-white font-semibold bg-gray-600 hover:bg-gray-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Back to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Test;