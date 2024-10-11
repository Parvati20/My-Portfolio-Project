import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa"; 


const educationData = [
  {
    id: 1,
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Swami Ramanand Teerth Marathwada University, Nanded",
    duration: "07/2023 – present",
    location: "Sagroli, India",
  },
  {
    id: 2,
    title: "Software Development Diploma",
    institution: "Navgurukul",
    duration: "01/2023 – present",
    location: "Pune, India",
  },
  {
    id: 3,
    title: "Frontend Bootcamp",
    institution: "Meraki",
    duration: "01/2024 – present",
    location: "Pune, India",
  },
  {
    id: 4,
    title: "Higher Secondary Education",
    institution: "Shri Chhatrapati Shivaji Junior College",
    duration: "Completed",
    location: "Sagroli, India",
  },
];

const Education = () => {
  return (
    <div className="bg-black text-white py-32 min-h-screen" id="education">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-6xl font-bold text-center mb-12 flex items-center justify-center">
          <FaGraduationCap className="text-green-400 mr-4" /> Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {educationData.map((education) => (
            <motion.div
              key={education.id}
              className="bg-gray-800 border-4 border-green-400 px-12 py-12 rounded-lg hover:shadow-lg min-h-[300px] min-w-[350px]" // Reduced padding and box size
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            >
              <h3 className="mt-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {education.title}
              </h3>
              <p className="mt-4 text-2xl text-gray-300">{education.institution}</p>
              <p className="mt-3 text-xl text-gray-400">{education.duration}</p>
              <p className="mt-3 text-xl text-gray-400">{education.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
