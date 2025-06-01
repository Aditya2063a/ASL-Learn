// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="text-center py-8">
//       <h1 className="text-4xl font-bold text-gray-800">Welcome to ASL Learn</h1>
//       <p className="text-lg text-gray-600 mt-2">
//         Learn and practice American Sign Language (ASL) letters (A-Y, excluding J and Z) with interactive lessons and real-time testing.
//       </p>
//       <div className="mt-6 space-x-4">
//         <Link
//           to="/learn"
//           className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//         >
//           Start Learning
//         </Link>
//         <Link
//           to="/test"
//           className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
//         >
//           Take a Test
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;



import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center bg-gradient-to-r from-blue-50 to-green-50">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 animate-slide-in">
          Welcome to ASL Learn
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 max-w-3xl animate-slide-in-delayed">
          Learn and practice American Sign Language (ASL) letters (A-Y, excluding J and Z) with interactive lessons and real-time testing.
        </p>
        <div className="flex justify-center gap-6">
          <Link
            to="/learn"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            aria-label="Start learning ASL letters"
          >
            Start Learning
          </Link>
          <Link
            to="/test"
            className="inline-block bg-green-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-green-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            aria-label="Take a test on ASL letters"
          >
            Take a Test
          </Link>
        </div>
      </section>

      {/* ASL Information Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Learn About American Sign Language (ASL)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: What is ASL? */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">What is ASL?</h3>
              <p className="text-gray-600 leading-relaxed">
                American Sign Language (ASL) is a visual language used by the Deaf community in the U.S. and parts of Canada. It uses hand gestures, facial expressions, and body movements to communicate, with its own unique grammar distinct from spoken English.
              </p>
            </div>
            {/* Card 2: Why Learn ASL? */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Learn ASL?</h3>
              <p className="text-gray-600 leading-relaxed">
                Learning ASL fosters inclusivity, improves cognitive skills, and opens doors to connect with the Deaf community. It’s also a valuable skill for careers in education, interpreting, and social services, promoting a more accessible world.
              </p>
            </div>
            {/* Card 3: Fun Fact */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fun Fact</h3>
              <p className="text-gray-600 leading-relaxed">
                Did you know? The ASL letter 'A' is similar to the letter 'A' in the manual alphabet used in British Sign Language (BSL), but the two languages are not mutually intelligible due to differences in grammar and vocabulary!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional ASL Information Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">More About ASL</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            ASL has a rich history, originating in the early 1800s at the American School for the Deaf. It was influenced by French Sign Language (LSF) and has since developed into a distinct language with regional variations.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Beyond communication, ASL plays a vital role in Deaf culture, fostering community and identity. It’s also used in various settings, from education at places like Gallaudet University to entertainment, with interpreters at concerts and events.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;