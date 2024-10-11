import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import HeroImage from '../assets/Parvati.jpg';

const Hero = () => {
  useEffect(() => {
    const options = {
      strings: ["Frontend Developer", "UI Designer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    };

    const typingEffect = new Typed(".typedtext", options);

    return () => {
      typingEffect.destroy();
    };
  }, []);

  return (
    <div className="bg-black text-white p-12 flex items-center justify-between min-h-screen">
      <div className="text-left w-1/2 pr-8 ml-8">
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          I'm{' '}
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Parvati Awrul
          </span>
          , <span className="typedtext" /> 
        </motion.h1>

        <motion.p
          className="text-2xl text-gray-400 mb-6" 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Full-stack developer proficient in React.js, Node.js, and MongoDB, experienced in creating e-commerce platforms, cryptocurrency dashboards, and feedback report generators. Possesses strong expertise in JavaScript and excels in collaborative team environments, bringing a problem-solving mindset to dynamic projects.
        </motion.p>

        <motion.div
          className="flex justify-start items-center gap-6 mb-4" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a
            href="https://www.linkedin.com/in/parvati-awrul-900680307/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors duration-300 hover:text-blue-500"
          >
            <FaLinkedin size={42} /> 
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors duration-300 hover:text-pink-500"
          >
            <FaInstagram size={42} /> 
          </a>
          <a
            href="https://github.com/Parvati20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors duration-300 hover:text-gray-400"
          >
            <FaGithub size={42} /> 
          </a>
        </motion.div>

        
        <motion.a
          href="https://drive.google.com/file/d/1TLY-5HlhfU-AIX_l0l4nhKUVEgsZZw2b/view"
          download
          className="bg-blue-600 text-white py-3 px-8 rounded-full text-xl transition-transform duration-300 transform hover:scale-110 mt-4" // Increased button size
        >
          Resume
        </motion.a>
      </div>

    
      <motion.div
        className="inline-block rounded-full overflow-hidden shadow-lg relative"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.img
          src={HeroImage}
          alt="Hero"
          className="w-96 h-96 rounded-full object-cover border-4 border-white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
