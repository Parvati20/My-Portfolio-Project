import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaUser,        
  FaTools,       
} from "react-icons/fa"; 
import AboutImage from "../assets/Parvati.jpg";

const About = () => {
  return (
    <div className="bg-black text-white py-20 min-h-screen" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-6xl font-bold text-center mb-12 flex items-center justify-center">
          <FaUser className="text-green-400 mr-3" /> About Me 
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <motion.div
            className="relative inline-block rounded overflow-hidden shadow-lg border-4 border-green-400"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={AboutImage}
              alt="About Me"
              className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
          <div className="flex-1">
            <p className="text-2xl mb-8"> 
            I am a student at NavGurukul, passionate about full-stack development, currently learning technologies like React.js, Node.js, and MongoDB. With hands-on experience in building projects such as e-commerce platforms and cryptocurrency dashboards, I am developing a strong foundation in JavaScript. I am driven by a love for problem-solving and collaboration, constantly pushing myself to improve and grow in dynamic, real-world environments.
            </p>

            <h3 className="text-4xl font-bold text-center mb-6 flex items-center justify-center">
              <FaTools className="text-green-400 mr-3" /> Skills 
            </h3>
            <div className="flex flex-col md:flex-row space-x-4">
              
              <div className="flex-1 bg-gray-800 border-2 border-green-400 px-6 pb-6 rounded-lg hover:shadow-lg transition-shadow duration-300 h-96"> 
                <h4 className="text-3xl font-bold mb-4 text-center">Frontend Skills</h4> 
                <div className="space-y-6">
                  {[ 
                    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> }, 
                    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
                    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
                    { name: "React.js", icon: <FaReact className="text-cyan-400 text-4xl" /> },
                    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600 text-4xl" /> },
                  ].map((skill) => (
                    <div className="flex items-center" key={skill.name}>
                      <span className="mr-3">{skill.icon}</span> 
                      <label className="text-2xl font-semibold text-yellow-300">{skill.name}</label> 
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 bg-gray-800 border-2 border-green-400 px-6 pb-6 rounded-lg hover:shadow-lg transition-shadow duration-300 h-96"> 
                <h4 className="text-3xl font-bold mb-4 text-center">Backend Skills</h4> 
                <div className="space-y-6">
                  {[ 
                    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
                    { name: "Express.js", icon: <FaDatabase className="text-green-700 text-4xl" /> },
                    { name: "MongoDB", icon: <FaDatabase className="text-green-800 text-4xl" /> },
                    { name: "Mongoose", icon: <FaDatabase className="text-green-900 text-4xl" /> },
                    { name: "RESTful APIs", icon: <FaDatabase className="text-green-600 text-4xl" /> },
                  ].map((skill) => (
                    <div className="flex items-center" key={skill.name}>
                      <span className="mr-3">{skill.icon}</span> 
                      <label className="text-2xl font-semibold text-yellow-300">{skill.name}</label> 
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
