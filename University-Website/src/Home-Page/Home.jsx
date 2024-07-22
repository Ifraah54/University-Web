import React from 'react';

import pic1 from '../HomeBage/images/un1.png';
import pic2 from '../HomeBage/images/uni2.png';
import pic3 from '../HomeBage/images/uni3.png';
import pic4 from '../HomeBage/images/uni4.png';
import pic5 from '../HomeBage/images/uni5.png';
import pic6 from '../HomeBage/images/uni6.png';
import pic7 from '../HomeBage/images/uni7.png';

// Importing the Link component from react-router-dom to create navigation links.
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
      {/* Main banner section with background image */}
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${pic1})` }}>
        
        {/* Overlay with a black background and opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-700">
          
          {/* Text content centered on the banner */}
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our University</h1>
            <p className="text-lg mb-6">Your journey to excellence starts here.</p>
            
            {/* Button that links to the About Us page */}
            <Link as={Link} to="/about-us">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main content container */}
      <div className="container mx-auto mt-16 px-4">
        
        {/* Section for discovering the campus */}
        <section>
          <h2 className="text-center text-3xl font-bold mb-8">Discover Our Campus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Campus Life block with image and overlay text */}
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <img className="w-full h-64 object-cover rounded-lg shadow-lg" src={pic2} alt="Campus Life" />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 rounded-b-lg">
                <h3 className="text-xl font-bold">Campus Life</h3>
                <p>Experience the vibrant campus life.</p>
              </div>
            </div>
            
            {/* State-of-the-Art Facilities block */}
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <img className="w-full h-64 object-cover rounded-lg shadow-lg" src={pic6} alt="State-of-the-Art Facilities" />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 rounded-b-lg">
                <h3 className="text-xl font-bold">State-of-the-Art Facilities</h3>
                <p>Our facilities are among the best in the country.</p>
              </div>
            </div>
            
            {/* World-Class Faculty block */}
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <img className="w-full h-64 object-cover rounded-lg shadow-lg" src={pic4} alt="World-Class Faculty" />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 rounded-b-lg">
                <h3 className="text-xl font-bold">World-Class Faculty</h3>
                <p>Learn from the best in the field.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section for exploring programs */}
        <section className="mt-16">
          <h2 className="text-center text-3xl font-bold mb-8">Explore Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Our Programs block */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img className="w-full h-48 object-cover" src={pic5} alt="Our Programs" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">Our Programs</h3>
                <p className="text-gray-700 mt-2">Explore the diverse range of programs we offer.</p>
              </div>
            </div>
            
            {/* Research block */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img className="w-full h-48 object-cover" src={pic3} alt="Research" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">Research</h3>
                <p className="text-gray-700 mt-2">Discover our cutting-edge research initiatives.</p>
              </div>
            </div>
            
            {/*/ Community block */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img className="w-full h-48 object-cover" src={pic7} alt="Community" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">Community</h3>
                <p className="text-gray-700 mt-2">Join our inclusive and supportive community.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};


export default Home;
