
import React from 'react';

// Importing necessary components from react-router-dom for routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Nav-Page/Navbar'; 
import Home from './Home-Page/Home'; 
import AboutUs from './About-Page/AboutUs'; 
import Departments from './Depart-Page/Departments';
import Admissions from './Admission-Page/Admissions'; 
import Faculty from './Faculty-Page/Faculty'; 
import ContactUs from './Contact-Page/ContactUs'; 
import Footer from './Footer-Page/Footer'; 


function App() {
  return (
    // Router component to handle routing
    <Router>
      
      <Navbar />
      
      {/* Routes component to define all the routes in the application */}
      <Routes>
        {/* Route components to map URLs to components */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/departments" element={<Departments />} /> 
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/contact-us" element={<ContactUs />} /> 
      </Routes>

      
      <Footer/>
    </Router>
  );
}


export default App;
