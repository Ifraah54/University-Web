import React from 'react'; 
import missionImage from '../HomeBage/images/MissionPic.png'; 
import visionImage from '../HomeBage/images/VisionPic.png'; 
import valuesImage from '../HomeBage/images/ValuesPic.png';
import pic1 from '../HomeBage/images/Person1.png'; 
import pic2 from '../HomeBage/images/Person2.png';  
import pic3 from '../HomeBage/images/Person3.png';  
import pic4 from '../HomeBage/images/Person4.png'; 
import pic5 from '../HomeBage/images/Person5.png'; 

const AboutUs = () => {
    const teamMembers = [
        { name: "Ifrah Hussein", position: "President", image: pic1 },
        { name: "Mahad Adan", position: "Vice President", image: pic2 },
        { name: "Fardowsa A.", position: "Dean of Students", image: pic3 },
        { name: "Haboon Hussein", position: "Director of Admissions", image: pic4 },
        { name: "Mustaf Bashiir", position: "Chief Financial Officer", image: pic5 }
    ];

    return (
        <div>
            <br />
            <br />
            <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-16">
                <h1 className="text-5xl font-extrabold">About Us</h1>
                <p className="mt-4 text-xl max-w-2xl mx-auto">Learn more about our university's mission, vision, and values.</p>
            </header>

            <div className="container mx-auto my-16 px-4">
                {/* Mission Section */}
                <section className="mb-16">
                    <div className="flex flex-col md:flex-row items-start mb-12">
                        <div className="md:w-1/3 mb-4 md:mb-0 md:pr-8">
                            <img src={missionImage} alt="Mission" className="w-full h-48 object-cover rounded-lg shadow-lg" />
                        </div>
                        <div className="md:w-2/3 mt-4 md:mt-0 md:pl-8">
                            <h2 className="text-4xl font-bold text-purple-600">Mission</h2>
                            <p className="text-lg text-gray-700 mt-4">Our mission is to provide quality education that transforms students into responsible global citizens.</p>
                        </div>
                    </div>
                </section>

                {/* Vision Section */}
                <section className="mb-16">
                    <div className="flex flex-col md:flex-row items-start mb-12">
                        <div className="md:w-1/3 mb-4 md:mb-0 md:pr-8">
                            <img src={visionImage} alt="Vision" className="w-full h-48 object-cover rounded-lg shadow-lg" />
                        </div>
                        <div className="md:w-2/3 mt-4 md:mt-0 md:pl-8">
                            <h2 className="text-4xl font-bold text-purple-600">Vision</h2>
                            <p className="text-lg text-gray-700 mt-4">Our vision is to be a leading university recognized for excellence in teaching, research, and community engagement.</p>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="mb-16">
                    <div className="flex flex-col md:flex-row items-start mb-12">
                        <div className="md:w-1/3 mb-4 md:mb-0 md:pr-8">
                            <img src={valuesImage} alt="Values" className="w-full h-48 object-cover rounded-lg shadow-lg" />
                        </div>
                        <div className="md:w-2/3 mt-4 md:mt-0 md:pl-8">
                            <h2 className="text-4xl font-bold text-purple-600">Values</h2>
                            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mt-4">
                                <li>Integrity</li>
                                <li>Excellence</li>
                                <li>Innovation</li>
                                <li>Diversity</li>
                                <li>Community</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section>
                    <h2 className="text-center text-4xl font-bold text-purple-600 mb-12">Our Team</h2>
                    <div className="flex flex-wrap justify-center -mx-4">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="w-full md:w-1/3 lg:w-1/5 px-4 mb-8 md:mb-0 transform hover:scale-105 transition-transform duration-300">
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <img className="w-full h-64 object-cover" src={member.image} alt={member.name} />
                                    <div className="p-6 text-center">
                                        <h3 className="text-xl font-bold">{member.name}</h3>
                                        <p className="text-gray-600">{member.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AboutUs;
