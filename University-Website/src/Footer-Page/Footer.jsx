// Importing the Link component from react-router-dom to create navigation links within the application.
import { Link } from "react-router-dom";

// Defining the Footer functional component.
function Footer() {
  return (
    <div>
      {/* The footer element with padding, margin, background gradient, and shadow */}
      <footer className="py-8 mt-8 bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-500 shadow-lg">
        
        {/* Container for the content within the footer, centered and padded */}
        <div className="container mx-auto px-4">
          
          {/* Flexbox container to arrange child elements horizontally and wrap them as needed */}
          <div className="flex flex-wrap">
            
            {/* First column: About University section */}
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h5 className="text-lg font-semibold mb-4">About University</h5>
              <p>
                Welcome to our university,place of learning, growth, excellence.
                We are committed to providing high-quality education and fostering
                an inclusive and supportive community.
              </p>
            </div>
            
            {/* Second column: Quick Links section */}
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="list-none">
                
                {/* List of navigation links to various pages within the site */}
                <li className="mb-2">
                  <Link to="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about-us" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="departments" className="hover:text-white">
                    Departments
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/admissions" className="hover:text-white">
                    Admissions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/faculty" className="hover:text-white">
                    Faculty
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact-us" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Third column: Contact Us section */}
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
              <ul className="list-none">
                
                {/* Contact details for the university */}
                <li className="mb-2">University, Mogadishu, Hodan</li>
                <li className="mb-2">Email: info@university.com</li>
                <li className="mb-2">Phone: (252) 617380043</li>
              </ul>
              
              {/* Follow Us section with social media links */}
              <h5 className="text-lg font-semibold mt-4">Follow Us</h5>
              <ul className="flex space-x-4 mt-2">
                
                {/* Social media icons with links to respective platforms */}
                <li>
                  <a href="https://www.facebook.com" className="hover:text-white">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" className="hover:text-white">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" className="hover:text-white">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com" className="hover:text-white">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Copyright section with copyright information and link to University's website */} 
          <div className="mt-8 text-center">
            <p>&copy; 2024 University. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
