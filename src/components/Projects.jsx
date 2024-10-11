import React from "react";
import { motion } from "framer-motion"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'; 
import weatherAppImage from "../assets/weather-app.png"; 
import employeeMSImage from "../assets/Feedback Form.png"; 
import cryptoImage from "../assets/cryptocurrency-dashboard.png"; 

const projects = [
  {
    id: 1,
    name: "Weather App",
    technologies: "React.js, WeatherMap API",
    image: weatherAppImage,
    github: "https://github.com/Parvati20/Wether_Application-Pro", 
    liveDemo: "https://wether-application-pro.vercel.app/", 
  },
  {
    id: 2,
    name: "Feedback Form",
    technologies: "React.js, Gemini API, Google Sheets, responsive UI.",
    image: employeeMSImage,
    github: "https://github.com/Parvati20/Feedback-_Genrator", 
    liveDemo: "https://feedback-genrator.vercel.app/", 
  },
  {
    id: 3,
    name: "Cryptocurrency Dashboard",
    technologies: "React.js, CoinGecko API",
    image: cryptoImage,
    github: "https://github.com/Parvati20/Cryptocurrency_Dahboard", 
    liveDemo: "https://crypto-dashboard-one-wheat.vercel.app/", 
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center">
          <FontAwesomeIcon icon={faLaptopCode} className="text-green-400 mr-4" /> My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 p-8 rounded-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 min-h-[500px]" // Increased height and hover effect
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-6 w-full h-56 object-cover" 
              />
              <h3 className="text-3xl font-bold mb-2 flex items-center">
                <FontAwesomeIcon icon={faLaptopCode} className="text-green-400 mr-2" /> {project.name}
              </h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex justify-between items-center mt-auto">
                <a
                  href={project.github}
                  className="flex items-center bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  GitHub
                </a>
                <a
                  href={project.liveDemo}
                  className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
