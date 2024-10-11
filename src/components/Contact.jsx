import React from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaUser } from 'react-icons/fa'; 
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <motion.h2
          className="text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaUser className="inline-block text-green-400 mr-4" /> Contact Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <motion.h3
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's Talk
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg"
            >
              I'm open to discussing web development projects or partnership opportunities.
            </motion.p>

            <div className="mb-6 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <FaEnvelope className="inline-block text-green-400 text-2xl mr-3" />
                <a href="mailto:youremail@example.com" className="hover:underline text-xl">
                  parvati23@navgurukul.org
                </a>
              </motion.div>
            </div>

            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <FaPhone className="inline-block text-green-400 text-2xl mr-3" />
                <span className="text-xl">+8087458201</span>
              </motion.div>
            </div>

            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <FaMapMarkedAlt className="inline-block text-green-400 text-2xl mr-3" />
                <span className="text-xl">Pune, Maharashtra</span>
              </motion.div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <label htmlFor="name" className="block mb-2 text-xl">Your Name</label>
                <input
                  type="text"
                  className="w-full p-4 rounded bg-gray-800 border border-gray-600 text-lg focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <label htmlFor="email" className="block mb-2 text-xl">Email</label>
                <input
                  type="email"
                  className="w-full p-4 rounded bg-gray-800 border border-gray-600 text-lg focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <label htmlFor="message" className="block mb-2 text-xl">Message</label>
                <textarea
                  className="w-full p-4 rounded bg-gray-800 border border-gray-600 text-lg focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                />
              </motion.div>

              <motion.button
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg px-8 py-3 rounded-full transform transition-transform duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Send
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
