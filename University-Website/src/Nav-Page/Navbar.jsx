import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import pic8 from "../HomeBage/images/uni8.png"; 

// Reducer function to handle state changes.
function reducer(state, action) {
  switch (action.type) {
    // Toggles the menu open/closed state.
    case "TOGGLE_MENU":
      return { ...state, isMenuOpen: !state.isMenuOpen }
    // Returns the current state if the action type is not recognized.
    default:
      return state;
  }
}

function Navbar() {
  // Using the useReducer hook to manage the isMenuOpen state.
  const [state, dispatch] = useReducer(reducer, { isMenuOpen: false });

  return (
    // Navbar container with a fixed position at the top and full width.
    <div className="bg-pink-300 fixed top-0 w-full z-50">
      {/* Gradient background for the Navbar */}
      <div className="bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-500 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              {/* Logo image with a link to the homepage */}
              <Link to="/">
                <img src={pic8} alt="University Logo" className="h-12 mr-2" />
              </Link>
              {/* University name with a link to the homepage */}
              <Link to="/">
                <span className="text-white text-3xl font-bold tracking-wide">
                  UNIVERSITY
                </span>
              </Link>
            </div>
            {/* Navigation links for larger screens */}
            <div className="hidden md:flex md:items-center">
              <nav>
                <ul className="flex space-x-6 text-lg">
                  {/* Navigation link to the Home page */}
                  <li>
                    <Link
                      to="/"
                      className="text-white hover:text-yellow-300 focus:text-yellow-300 transition-colors duration-300"
                    >
                      Home
                    </Link>
                  </li>
                  {/* Navigation link to the About Us page */}
                  <li>
                    <Link
                      to="/about-us"
                      className="text-white hover:text-yellow-300 focus:text-yellow-300 transition-colors duration-300"
                    >
                      About Us
                    </Link>
                  </li>
                  {/* Navigation link to the Departments page */}
                  <li>
                    <Link
                      to="/departments"
                      className="text-white hover:text-yellow-300 focus:text-yellow-300 transition-colors duration-300"
                    >
                      Departments
                    </Link>
                  </li>
                  {/* Navigation link to the Admissions page */}
                  <li>
                    <Link
                      to="/admissions"
                      className="text-white hover:text-yellow-300 focus:text-yellow-300 transition-colors duration-300"
                    >
                      Admissions
                    </Link>
                  </li>
                  {/* Navigation link to the Faculty page */}
                  <li>
                    <Link
                      to="/faculty"
                      className="text-white hover:text-yellow-300 focus:text-yellow-300 transition-colors duration-300"
                    >
                      Faculty
                    </Link>
                  </li>
                  {/* Navigation link to the Contact Us page */}
                  <li>
                    <Link
                      to="/contact-us"
                      className="text-white hover:text-yellow-300 focus:text-yellow-300 transition-colors duration-300"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                className="mobile-menu-button focus:outline-none rounded p-2 text-white hover:bg-blue-700 transition-colors duration-300"
                onClick={() => dispatch({ type: "TOGGLE_MENU" })}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile menu that toggles based on isMenuOpen state */}
          {state.isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-lg mt-2">
              <nav>
                <ul className="flex flex-col space-y-2 p-4">
                  {/* Mobile navigation link to the Home page */}
                  <li>
                    <Link
                      to="/"
                      className="text-black hover:text-cyan-500 transition-colors duration-300"
                    >
                      Home
                    </Link>
                  </li>
                  {/* Mobile navigation link to the About Us page */}
                  <li>
                    <Link
                      to="/about-us"
                      className="text-black hover:text-cyan-500 transition-colors duration-300"
                    >
                      About Us
                    </Link>
                  </li>
                  {/* Mobile navigation link to the Departments page */}
                  <li>
                    <Link
                      to="/departments"
                      className="text-black hover:text-cyan-500 transition-colors duration-300"
                    >
                      Departments
                    </Link>
                  </li>
                  {/* Mobile navigation link to the Admissions page */}
                  <li>
                    <Link
                      to="/admissions"
                      className="text-black hover:text-cyan-500 transition-colors duration-300"
                    >
                      Admissions
                    </Link>
                  </li>
                  {/* Mobile navigation link to the Faculty page */}
                  <li>
                    <Link
                      to="/faculty"
                      className="text-black hover:text-cyan-500 transition-colors duration-300"
                    >
                      Faculty
                    </Link>
                  </li>
                  {/* Mobile navigation link to the Contact Us page */}
                  <li>
                    <Link
                      to="/contact-us"
                      className="text-black hover:text-cyan-500 transition-colors duration-300"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
