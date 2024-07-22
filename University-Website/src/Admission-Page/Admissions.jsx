import React from "react"; 
import pi1 from "../HomeBage/images/uni14.png"; 
import pi2 from "../HomeBage/images/uni15.png"; 
import pi3 from "../HomeBage/images/uni4.png"; 
import pi5 from "../HomeBage/images/uni5.png"; 

const Admissions = () => {
  return (
    <>
    
      <br />
      <br />

      {/* Header Section with a gradient background and center-aligned text */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-16">
        <h1 className="text-5xl font-extrabold">Admissions</h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto">
          Welcome to our Admissions Office. We are excited to help you through
          the process of joining our vibrant university community.
        </p>
      </header>

      {/* Main Container for Admission Requirements and Application Process */}
      <div className="container mx-auto my-16 px-4">
        
        {/* Admission Requirements Section */}
        <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden mb-12">
          <div className="md:w-1/2">
            <img
              src={pi1}
              alt="Admission Requirements"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text Content for Admission Requirements */}
          <div className="p-8 md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Admission Requirements</h2>
            <p className="text-gray-700 mb-4">
              Our admission process is designed to identify students who will
              thrive in our academic environment.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Completed application form</li>
              <li>Official high school transcripts</li>
              <li>Letters of recommendation</li>
              <li>Personal statement</li>
              <li>SAT/ACT scores (optional)</li>
            </ul>
          </div>
        </div>

        {/* Application Process Section */}
        <div className="flex flex-col md:flex-row-reverse bg-white shadow-xl rounded-lg overflow-hidden mb-12">
          <div className="md:w-1/2">
            <img
              src={pi2}
              alt="Application Process"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text Content for Application Process */}
          <div className="p-8 md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Application Process</h2>
            <p className="text-gray-700 mb-4">
              Follow these steps to apply to our university:
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Submit your application online.</li>
              <li>Send your transcripts and test scores.</li>
              <li>Provide letters of recommendation.</li>
              <li>Write and submit your personal statement.</li>
              <li>Schedule an interview (if required).</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions Section */}
      <div className="container mx-auto my-16 px-4">
        <div className="mb-12">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {/* FAQ Item 1 */}
                <details className="bg-gray-100 rounded-lg p-4 shadow-inner">
                  <summary className="font-semibold cursor-pointer text-lg">
                    What is the application deadline?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    Our application deadline is January 15th for the fall
                    semester and November 1st for the spring semester.
                  </p>
                </details>
                {/* FAQ Item 2 */}
                <details className="bg-gray-100 rounded-lg p-4 shadow-inner">
                  <summary className="font-semibold cursor-pointer text-lg">
                    Are scholarships available?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    Yes, we offer a variety of merit-based and need-based
                    scholarships. Please visit our scholarships page for more
                    information.
                  </p>
                </details>
                {/* FAQ Item 3 */}
                <details className="bg-gray-100 rounded-lg p-4 shadow-inner">
                  <summary className="font-semibold cursor-pointer text-lg">
                    Can I schedule a campus tour?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    Absolutely! We encourage prospective students to visit our
                    campus. Please contact the admissions office to schedule a
                    tour.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admissions; 
