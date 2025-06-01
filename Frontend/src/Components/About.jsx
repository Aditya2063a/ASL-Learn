// import React, { useState } from 'react';

// const About = () => {
//   const [isFunFactOpen, setIsFunFactOpen] = useState(false);

//   return (
//     <section id="about" className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 animate-slide-in-down">
//           About ASL Learn
//         </h2>
//         <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-4">What is ASL Learn?</h3>
//           <p className="text-gray-600 mb-6 leading-relaxed">
//             ASL Learn is an interactive platform designed to help users learn and practice American Sign Language (ASL) letters (A-Y, excluding J and Z). The website offers a Learning page with images and videos to demonstrate each letter’s sign, and a Test page where users can practice their skills using real-time webcam input. The Test feature leverages a custom-trained machine learning model to recognize signs and provide instant feedback.
//           </p>

//           <h3 className="text-2xl font-semibold text-gray-800 mb-4">About American Sign Language</h3>
//           <p className="text-gray-600 mb-6 leading-relaxed">
//             American Sign Language (ASL) is a visual language used primarily by the Deaf and hard-of-hearing communities in the United States and parts of Canada. It uses hand gestures, facial expressions, and body movements to convey meaning. ASL has its own grammar and syntax, distinct from spoken English, and is a rich, expressive language. This website focuses on teaching the ASL alphabet (excluding J and Z, which involve motion) to make learning accessible to beginners.
//           </p>

//           <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Machine Learning Model</h3>
//           <p className="text-gray-600 mb-6 leading-relaxed">
//             The real-time sign recognition in the Test page is powered by a machine learning model trained using Google’s Teachable Machine. The model was trained on a dataset of images representing ASL letters A-Y (excluding J and Z) and exported as a TensorFlow.js model. It analyzes webcam input to predict the letter being signed, providing users with immediate feedback on their performance.
//           </p>

//           <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Goal</h3>
//           <p className="text-gray-600 mb-6 leading-relaxed">
//             The goal of ASL Learn is to make ASL education engaging and accessible. By combining visual learning resources with interactive testing, we aim to help users build confidence in signing the ASL alphabet and foster greater understanding of this important language.
//           </p>

//           <h3 className="text-2xl font-semibold text-gray-800 mb-4">Credits</h3>
//           <p className="text-gray-600 mb-6 leading-relaxed">
//             This project was developed using React, Vite, Tailwind CSS, and TensorFlow.js. The machine learning model was created with Teachable Machine. ASL images and videos are sourced from publicly available resources or created for this project (replace with actual credits if applicable).
//           </p>

//           {/* Fun Fact Section */}
//           <div className="mt-8">
//             <button
//               onClick={() => setIsFunFactOpen(!isFunFactOpen)}
//               className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex justify-between items-center"
//             >
//               <span>Fun Fact about ASL</span>
//               <span>{isFunFactOpen ? '▲' : '▼'}</span>
//             </button>
//             {isFunFactOpen && (
//               <div className="mt-4 p-6 bg-gray-50 rounded-lg border border-gray-200 animate-fade-in">
//                 <p className="text-gray-600 leading-relaxed">
//                   Did you know? ASL is not just a simplified version of English. It’s a complete language with its own grammar and even regional dialects, much like spoken languages! For example, the sign for "mother" can vary slightly between different parts of the U.S., just like accents in spoken English.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React, { useState } from 'react';
import Sign from "/public/asl-images/Sign.png";


const About = () => {
  const [isFunFactOpen, setIsFunFactOpen] = useState(false);

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Image Behind Heading */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="relative text-center">
          {/* Image behind the heading */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <img
              src={Sign}
              alt="ASL Sign Background"
              className="w-3/4 md:w-1/2 filter blur-xs opacity-70"
            />
          </div>
          {/* Heading on top */}
          <h1 className="relative text-6xl md:text-8xl  font-bold text-black animate-fade-in tracking-tight drop-shadow-lg z-10">
            About ASL Learn
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">

          <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl animate-fade-in-up">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6 tracking-tight">What is ASL Learn?</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
                ASL Learn is an interactive platform designed to help users learn and practice American Sign Language (ASL) letters (A-Y, excluding J and Z). The website offers a Learning page with images and videos to demonstrate each letter’s sign, and a Test page where users can practice their skills using real-time webcam input. The Test feature leverages a custom-trained machine learning model to recognize signs and provide instant feedback.
            </p>

            <h2 className="text-4xl font-semibold text-gray-900 mb-6 tracking-tight">About American Sign Language</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              American Sign Language (ASL) is a visual language used primarily by the Deaf and hard-of-hearing communities in the United States and parts of Canada. It uses hand gestures, facial expressions, and body movements to convey meaning. ASL has its own grammar and syntax, distinct from spoken English, and is a rich, expressive language. This website focuses on teaching the ASL alphabet (excluding J and Z, which involve motion) to make learning accessible to beginners.
            </p>

            <h2 className="text-4xl font-semibold text-gray-900 mb-6 tracking-tight">The Machine Learning Model</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              The real-time sign recognition in the Test page is powered by a machine learning model trained using Google’s Teachable Machine. The model was trained on a dataset of images representing ASL letters A-Y (excluding J and Z) and exported as a TensorFlow.js model. It analyzes webcam input to predict the letter being signed, providing users with immediate feedback on their performance.
            </p>

            <h2 className="text-4xl font-semibold text-gray-900 mb-6 tracking-tight">Our Goal</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              The goal of ASL Learn is to make ASL education engaging and accessible. By combining visual learning resources with interactive testing, we aim to help users build confidence in signing the ASL alphabet and foster greater understanding of this important language.
            </p>

            <h2 className="text-4xl font-semibold text-gray-900 mb-6 tracking-tight">Credits</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              This project was developed using React, Vite, Tailwind CSS, and TensorFlow.js. The machine learning model was created with Teachable Machine. ASL images and videos are sourced from publicly available resources or created for this project.
            </p>

            {/* Fun Fact Section */}
            <div className="mt-10 flex items-center justify-center flex-col">
              <button
                onClick={() => setIsFunFactOpen(!isFunFactOpen)}
                className="flex items-center justify-center w-4/12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-lg">Fun Fact about ASL</span>
                <span className="text-2xl px-3">{isFunFactOpen ? '▲' : '▼'}</span>
              </button>
              {isFunFactOpen && (
                <div className="w-7/12 mt-4 p-8 bg-gray-50 rounded-xl border border-gray-100 animate-fade-in">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    <span className='font-semibold'>Did you know?</span> ASL is not just a simplified version of English. It’s a complete language with its own grammar and even regional dialects, much like spoken languages! For example, the sign for "mother" can vary slightly between different parts of the U.S., just like accents in spoken English.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-24 px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Email Address</h3>
            <p className="text-gray-700 text-lg">support@asllearn.com</p>
          </div>
          <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Office Location</h3>
            <p className="text-gray-700 text-lg">New Delhi, India</p>
          </div>
          <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Contact Number</h3>
            <p className="text-gray-700 text-lg">+91 XXXXX-XXXXX</p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default About;