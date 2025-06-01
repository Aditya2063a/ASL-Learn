// import React, { useState } from 'react';

// const letters = 'ABCDEFGHIKLMNOPQRSTUVWXY'.split('');

// const Learn = () => {
//   const [selectedLetter, setSelectedLetter] = useState(null);

//   return (
//     <section id="learn" className="my-8">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">Learn ASL Letters</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//         {letters.map((letter) => (
//           <div
//             key={letter}
//             className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
//             onClick={() => setSelectedLetter(letter)}
//           >
//             <img
//               src={`/asl-images/${letter}.png`}
//               alt={`ASL Letter ${letter}`}
//               className="w-full h-32 object-cover rounded"
//             />
//             <p className="text-center mt-2 font-medium">{letter}</p>
//           </div>
//         ))}
//       </div>
//       {selectedLetter && (
//         <div className="mt-8 bg-white p-6 rounded-lg shadow">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">ASL Letter {selectedLetter}</h3>
//           <img
//             src={`/asl-images/${selectedLetter}.png`}
//             alt={`ASL Letter ${selectedLetter}`}
//             className="w-64 h-64 object-cover rounded mx-auto"
//           />
//           {/* Optional video */}
//           <video
//             src={`/asl-videos/${selectedLetter}.mp4`}
//             controls
//             className="w-full max-w-md mx-auto mt-4"
//             onError={() => console.log(`No video available for ${selectedLetter}`)}
//           >
//             Your browser does not support the video tag.
//           </video>
//           <button
//             onClick={() => setSelectedLetter(null)}
//             className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Close
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Learn;

import React, { useState } from 'react';

const letters = 'ABCDEFGHIKLMNOPQRSTUVWXY'.split('');

// Instructions for each ASL letter (A-Y, excluding J and Z)
const letterInstructions = {
  A: "Position: Hand closed into a fist with thumb resting on the side of the index finger, palm facing outward. Tip: Keep fingers tucked tightly and thumb flat against the side.",
  B: "Position: Hand open, fingers together, palm facing outward, thumb tucked across the palm. Tip: Ensure fingers are straight and not spread apart.",
  C: "Position: Hand curved into a 'C' shape, palm facing outward. Tip: Keep the curve smooth and fingers slightly separated to form a clear arc.",
  D: "Position: Index finger extended upward, other fingers folded down, thumb resting on middle finger, palm outward. Tip: Point the index finger straight up.",
  E: "Position: Fingers bent inward, thumb under fingers, palm facing outward. Tip: Keep fingers compact and avoid spreading them.",
  F: "Position: Index finger and thumb form a circle, other fingers extended upward, palm outward. Tip: Keep the circle tight and other fingers straight.",
  G: "Position: Index and middle fingers extended, separated, thumb on ring finger, palm outward. Tip: Ensure only index and middle fingers are extended.",
  H: "Position: Index and middle fingers extended together, thumb on ring finger, palm outward. Tip: Keep fingers close together, not spread.",
  I: "Position: Pinky extended upward, other fingers folded, thumb on middle finger, palm outward. Tip: Point pinky straight up and keep other fingers tucked.",
  K: "Position: Index and middle fingers extended in a 'V' shape, thumb resting on ring finger, palm outward. Tip: Angle the fingers slightly to form a clear 'K'.",
  L: "Position: Index finger and thumb extended to form an 'L' shape, other fingers folded, palm outward. Tip: Keep the angle between thumb and index finger sharp.",
  M: "Position: First three fingers folded over thumb, pinky folded down, palm facing outward. Tip: Tuck thumb under fingers for a compact shape.",
  N: "Position: Index and middle fingers folded over thumb, other fingers down, palm outward. Tip: Ensure thumb is visible under the two fingers.",
  O: "Position: Hand forms a circular 'O' shape, fingers touching thumb, palm outward. Tip: Keep the circle tight and fingers rounded.",
  P: "Position: Index and middle fingers extended, thumb on ring finger, hand tilted downward, palm facing down. Tip: Tilt hand to differentiate from 'K'.",
  Q: "Position: Index and middle fingers extended downward, thumb on ring finger, palm down. Tip: Point fingers downward to distinguish from 'G'.",
  R: "Position: Index and middle fingers extended and crossed, thumb on ring finger, palm outward. Tip: Cross fingers tightly for a clear 'R'.",
  S: "Position: Hand closed into a fist, thumb wrapped over fingers, palm outward. Tip: Keep thumb over fingers, not on the side like 'A'.",
  T: "Position: Index finger folded over thumb, other fingers down, palm outward. Tip: Keep thumb visible under the index finger.",
  U: "Position: Index and middle fingers extended together, thumb on ring finger, palm outward. Tip: Keep fingers straight and close together.",
  V: "Position: Index and middle fingers extended and separated in a 'V' shape, thumb on ring finger, palm outward. Tip: Spread fingers clearly to form the 'V'.",
  W: "Position: Index, middle, and ring fingers extended and separated, thumb on pinky, palm outward. Tip: Spread fingers evenly for a clear 'W'.",
  X: "Position: Index finger bent into a hook, other fingers folded, thumb on middle finger, palm outward. Tip: Keep the hook shape distinct.",
  Y: "Position: Pinky and thumb extended, other fingers folded, palm outward. Tip: Keep pinky and thumb spread wide for a clear 'Y'."
};

const Learn = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);

  const closeModal = () => setSelectedLetter(null);

  return (
    <section id="learn" className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 animate-slide-in">
          Learn ASL Letters
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {letters.map((letter) => (
            <div
              key={letter}
              className="bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center"
              onClick={() => setSelectedLetter(letter)}
            >
              <img
                src={`/asl-images/${letter}.png`}
                alt={`ASL Letter ${letter}`}
                className="w-[75px] h-[99px] object-cover rounded-md mb-4"
              />
              <p className="text-lg font-semibold text-gray-800 text-center">
                {letter}
              </p>
            </div>
          ))}
        </div>
      </div>

      {selectedLetter && (
        <div
          className="fixed inset-0 bg-[#a39f9f] backdrop-blur-lg bg-opacity-50 flex items-center justify-center z-50 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-2xl w-full mx-4 animate-slide-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              ASL Letter {selectedLetter}
            </h3>
            <img
              src={`/asl-images/${selectedLetter}.png`}
              alt={`ASL Letter ${selectedLetter}`}
              className="w-75 h-99 object-cover rounded-lg mx-auto shadow-md"
            />
            <div className="mt-6 text-gray-600 text-lg leading-relaxed">
              <p><strong>Instructions:</strong> {letterInstructions[selectedLetter]}</p>
            </div>
            <div className="flex justify-center mt-6">
              <button
                onClick={closeModal}
                className="bg-green-600 p-10 text-white px-10 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-green-700 hover:cursor-auto hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Learn;