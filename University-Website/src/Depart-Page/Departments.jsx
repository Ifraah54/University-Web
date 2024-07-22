import React, { useState } from "react"; 
import pi1 from "../HomeBage/images/img1.png"; 
import pi2 from "../HomeBage/images/img2.png";
import pi3 from "../HomeBage/images/img3.png";
import pi4 from "../HomeBage/images/img4.png";
import pi5 from "../HomeBage/images/uni5.png";
import pi6 from "../HomeBage/images/img5.png";

const Departments = () => {
  const [departments, setDepartments] = useState([ // Using useState hook to manage departments state
    {
      name: "Computer Science", // Initial department data: name
      description: "Explore the world of computing and software development.", // Initial department data: description
      imageUrl: pi5, // Initial department data: image URL
    },
    {
      name: "Business Administration",
      description: "Study the principles governing the universe and matter.",
      imageUrl: pi3,
    },
    {
      name: "Medicine",
      description: "Delve into advanced medical theories and applications.",
      imageUrl: pi2,
    },
    {
      name: "Engineering",
      description: "Explore the world of computing and software development.",
      imageUrl: pi1,
    },
    {
      name: "Nursing",
      description: "Study the principles and practice of nursing.",
      imageUrl: pi4,
    },
    {
      name: "Midwifery",
      description:
        "Focus on the care of women during pregnancy, childbirth, and the postpartum period, ensuring safe and healthy experiences for mothers and babies.",
      imageUrl: pi6,
    },
  ]);

  const [newDepartment, setNewDepartment] = useState({ // State for new department form
    name: "",
    description: "",
    imageUrl: "",
  });

  const handleInputChange = (e) => { // Handler for input changes in form fields
    const { name, value } = e.target;
    setNewDepartment({ ...newDepartment, [name]: value }); // Updating newDepartment state with new input values
  };

  const handleFileChange = (e) => { // Handler for file input change (image upload)
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewDepartment({ ...newDepartment, imageUrl: reader.result }); // Setting imageUrl to base64 data URL after file is read
    };
    if (file) {
      reader.readAsDataURL(file); // Reading file as data URL
    }
  };

  const addDepartment = (e) => { // Handler for adding a new department
    e.preventDefault(); // Preventing default form submission behavior
    setDepartments([...departments, newDepartment]); // Adding new department to departments array
    setNewDepartment({ name: "", description: "", imageUrl: "" }); // Resetting form fields after submission
  };

  return (
    <>
      <br />
      <br />

      {/* Header Section */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-16">
        <h1 className="text-5xl font-extrabold">Our Departments</h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto">
          Discover the diverse range of departments at our university.
        </p>
      </header>

      {/* Main Content Section */}
      <div className="container mx-auto my-16 px-4">
        {/* Displaying Existing Departments */}
        <h1 className="my-8 text-3xl font-bold text-center">Departments</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              {dept.imageUrl && (
                <img
                  src={dept.imageUrl}
                  alt={dept.name}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {dept.name}
                </h2>
                <p className="text-indigo-600 mt-2">{dept.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Department Form Section */}
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Add New Department
        </h2>
        <form
          onSubmit={addDepartment}
          className="space-y-6 bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto"
        >
          <div>
            <label
              htmlFor="formDeptName"
              className="block text-sm font-medium text-gray-700"
            >
              Department Name
            </label>
            <input
              type="text"
              id="formDeptName"
              name="name"
              value={newDepartment.name}
              onChange={handleInputChange}
              placeholder="Enter department name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="formDeptDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="formDeptDescription"
              name="description"
              value={newDepartment.description}
              onChange={handleInputChange}
              placeholder="Enter department description"
              rows={3}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="formDeptImage"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <input
              type="file"
              id="formDeptImage"
              name="imageUrl"
              onChange={handleFileChange}
              required
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Department
          </button>
        </form>
      </div>
    </>
  );
};

export default Departments; 
