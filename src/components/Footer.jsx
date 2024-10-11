import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-16" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center">
        
        <p className="text-gray-400 text-xl"> 
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>

        
        <div className="social-icons flex space-x-8 my-6 md:my-0"> 
          <a
            href="https://www.linkedin.com/in/parvati-awrul-900680307/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <FaLinkedin size={32} /> 
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <FaInstagram size={32} /> 
          </a>
          <a
            href="https://github.com/Parvati20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <FaGithub size={32} /> 
          </a>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy
          </a>
          <a href="#" className="text-gray-400 hover:text-white ml-6"> 
            Terms of Service
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
