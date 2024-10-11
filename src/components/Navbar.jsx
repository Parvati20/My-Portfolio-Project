import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
      className='bg-gradient-to-r from-blue-700 to-purple-600 text-white px-8 md:px-16 lg:px-24' 
    >
      <div className='container py-4 flex justify-center md:justify-between items-center'>
        
        <motion.div 
          className='text-3xl font-bold hidden md:inline' 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          My Portfolio
        </motion.div>

        <motion.div 
          className='space-x-8' 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#home" className='text-lg hover:text-gray-300'>Home</a> 
          <a href="#about" className='text-lg hover:text-gray-300'>About Me</a> 
          <a href="#Education" className='text-lg hover:text-gray-300'>Education</a> 
          <a href="#project" className='text-lg hover:text-gray-300'>Projects</a> 
          <a href="#contact" className='text-lg hover:text-gray-300'>Contact</a> 
        </motion.div>

    
        <motion.button
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full text-lg' // Increased font size
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Connect Me
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
