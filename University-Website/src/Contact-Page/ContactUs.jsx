import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons'; 
import backgroundImage from '../HomeBage/images/contactimg.png'; 

const ContactUs = () => {
    const [formData, setFormData] = useState({ // Using useState hook to manage form data
        name: '', 
        email: '',   
        message: ''  
    });

    const handleChange = (e) => { // Event handler for input change
        const { id, value } = e.target; // Destructuring id and value from event target
        setFormData((prevState) => ({ // Updating form data using functional state update
            ...prevState, // Spread previous state
            [id]: value   // Update specific field with new value
        }));
    };

    const handleSubmit = (e) => { // Event handler for form submission
        e.preventDefault(); // Preventing default form submission behavior
        console.log('Form submitted!', formData); // Logging form data to console (replace with actual submission logic)
    };

    return (
        <>
            <br />
            <br />

            {/* Header Section */}
            <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-16">
                <h1 className="text-5xl font-bold">Contact Us</h1>
                <p className="mt-4 text-lg">Get in touch with us for any inquiries or feedback.</p>
            </header>

            {/* Contact Us Section with Background Image */}
            <div
                className="min-h-screen py-12 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }} // Setting background image dynamically
            >
                <div className="container mx-auto px-4">
                    <section className="flex flex-wrap -mx-4">

                        {/* Contact Form Section */}
                        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                            <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
                                <form onSubmit={handleSubmit}>
                                    <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block mb-2 text-gray-700">Name:</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block mb-2 text-gray-700">Email:</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="message" className="block mb-2 text-gray-700">Message:</label>
                                        <textarea
                                            id="message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 rounded-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Information Section */}
                        <div className="w-full md:w-1/2 px-4">
                            <section className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Information</h2>
                                <div className="mb-6">
                                    <h3 className="text-2xl font-semibold mb-3">Admissions Office</h3>
                                    <ul className="text-gray-700">
                                        <li className="mb-2"><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> admissions@university.edu</li>
                                        <li className="mb-2"><FontAwesomeIcon icon={faPhone} className="mr-2" /> (252) 617-789045</li>
                                        <li><FontAwesomeIcon icon={faClock} className="mr-2" /> Monday - Friday, 9 AM - 5 PM</li>
                                    </ul>
                                </div>
                                <div className="mb-6">
                                    <h3 className="text-2xl font-semibold mb-3">Support Services</h3>
                                    <ul className="text-gray-700">
                                        <li className="mb-2"><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> support@university.edu</li>
                                        <li className="mb-2"><FontAwesomeIcon icon={faPhone} className="mr-2" /> (252) 617-380043</li>
                                        <li><FontAwesomeIcon icon={faClock} className="mr-2" /> Monday - Friday, 9 AM - 6 PM</li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default ContactUs; 
