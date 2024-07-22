import React from "react"; 
import faculty1 from "../HomeBage/images/uni11.png"; 
import faculty2 from "../HomeBage/images/uni12.png"; 
import faculty3 from "../HomeBage/images/uni13.png";
import faculty4 from "../HomeBage/images/uni9.png"; 
import faculty5 from "../HomeBage/images/uni10.png"; 

const Faculty = () => {
  // Array of faculty members with their details
  const facultyMembers = [
    {
      name: "Eng. Ifrah Hussein",
      title: "Professor of Computer Science",
      imageUrl: faculty1,
      description:
        "Eng. Ifrah is an expert in artificial intelligence and machine learning with over 20 years of experience.",
    },
    {
      name: "Eng. Mahad Adan",
      title: "Associate Professor of Business Administration",
      imageUrl: faculty2,
      description:
        "Eng. Mahad specializes in marketing and has published numerous papers in top-tier journals.",
    },
    {
      name: "Eng. Mustaf Bashiir",
      title: "Assistant Professor of Engineering",
      imageUrl: faculty3,
      description:
        "Eng. Mustaf focuses on sustainable engineering practices and innovative design solutions.",
    },
    {
      name: "Dr. Fardowsa Abdulkadir",
      title: "Professor of Medicine",
      imageUrl: faculty4,
      description:
        "Dr. Fardowsa leads research in infectious diseases and clinical epidemiology.",
    },
    {
      name: "Dr. Haboon Hussein",
      title: "Associate Professor of Public Health",
      imageUrl: faculty5,
      description:
        "Dr. Haboon specializes in community health and epidemiology, focusing on disease prevention.",
    },
  ];

  return (
    <>
      <br />
      <br />
      {/* Header section with background gradient */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-16">
        <h1 className="text-5xl font-extrabold">Our Faculty</h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto">
          Meet the esteemed faculty members of our university who are dedicated
          to excellence in teaching and research.
        </p>
      </header>

      {/* Main content section */}
      <div className="container mx-auto my-16 px-4">
        {/* Grid layout for displaying faculty members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Mapping over faculty members array to display each member */}
          {facultyMembers.map((faculty, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              {/* Faculty member image */}
              <img
                src={faculty.imageUrl}
                alt={faculty.name}
                className="w-full h-64 object-cover"
              />
              {/* Faculty member details */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                  {faculty.name}
                </h2>
                <p className="text-purple-600 mb-4">{faculty.title}</p>
                <p className="text-gray-700">{faculty.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faculty;
