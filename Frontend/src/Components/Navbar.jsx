// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-blue-600 p-4 shadow">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-white text-2xl font-bold">ASL Learn</h1>
//         <div className="space-x-4">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? 'text-white font-semibold' : 'text-gray-200 hover:text-white'
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/learn"
//             className={({ isActive }) =>
//               isActive ? 'text-white font-semibold' : 'text-gray-200 hover:text-white'
//             }
//           >
//             Learn
//           </NavLink>
//           <NavLink
//             to="/test"
//             className={({ isActive }) =>
//               isActive ? 'text-white font-semibold' : 'text-gray-200 hover:text-white'
//             }
//           >
//             Test
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive ? 'text-white font-semibold' : 'text-gray-200 hover:text-white'
//             }
//           >
//             About
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white p-2 shadow-md rounded-full mx-4 sticky top-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-gray-800 text-2xl font-bold">ASL Learn</h1>
        <div className="flex w-full max-w-md justify-start items-center pl-4 gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative flex items-center px-4 py-2 rounded-full text-base font-medium transition-colors duration-300 ${
                isActive
                  ? 'bg-green-100 text-green-800'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
              }`
            }
          >
            Home
            {({ isActive }) =>
              isActive && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-green-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  4
                </span>
              )
            }
          </NavLink>
          <NavLink
            to="/learn"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full text-base font-medium transition-colors duration-300 ${
                isActive
                  ? 'bg-green-100 text-green-800'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
              }`
            }
          >
            Learn
          </NavLink>
          <NavLink
            to="/test"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full text-base font-medium transition-colors duration-300 ${
                isActive
                  ? 'bg-green-100 text-green-800'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
              }`
            }
          >
            Test
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full text-base font-medium transition-colors duration-300 ${
                isActive
                  ? 'bg-green-100 text-green-800'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
              }`
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;