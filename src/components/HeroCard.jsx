// import React from 'react';
// import { motion } from 'framer-motion';
// import { Github, Mail } from 'lucide-react';
// import { personalInfo } from '../data/portfolioData';

// const HeroCard = () => (
//   <div className="h-full flex items-center justify-center px-4 sm:px-8 py-8 sm:py-12">
//     <div className="text-center space-y-6 sm:space-y-8 max-w-4xl">
//       <motion.h1 
//         className="font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         Hello, I'm{' '}
//         <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
//           Vatsal
//         </span>
//       </motion.h1>
      
//       <motion.p 
//         className="text-lg sm:text-2xl text-white/90 font-light"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//       >
//         Software Developer
//       </motion.p>
      
//       <motion.p 
//         className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-4"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4 }}
//       >
//         {personalInfo.bio.short}
//       </motion.p>

//       <motion.div 
//         className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6 }}
//       >
//         <a
//           href={personalInfo.social?.github}
//           className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg shadow-xl hover:scale-105 transition-transform flex items-center justify-center space-x-2 hover:bg-gray-200"
//         >
//           <Github size={18} />
//           <span>View My Work</span>
//         </a>
        
//         <a
//           href={`mailto:${personalInfo.email}`}
//           className="border-2 border-white/60 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white transition-all flex items-center justify-center space-x-2"
//         >
//           <Mail size={18} />
//           <span>Get In Touch</span>
//         </a>
//       </motion.div>
//     </div>
//   </div>
// );

// export default HeroCard;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, ArrowRight, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const HeroCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-full flex items-center justify-center px-6 sm:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Clean, focused introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          
          {/* Simple, readable header */}
          <div className="space-y-4">
            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Hi, I'm{' '}
              <span 
                className="relative inline-block"
                style={{ color: 'var(--accent-primary)' }}
              >
                Vatsal
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 rounded-full"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl font-light leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Software Developer focused on creating beautiful, functional digital experiences.
            </motion.p>
          </div>

          {/* Clean location and status */}
          <motion.div
            className="flex items-center space-x-6 text-sm"
            style={{ color: 'var(--text-tertiary)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Mumbai, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: 'var(--accent-success)' }}
              />
              <span>Available for work</span>
            </div>
          </motion.div>

          {/* Clean, simple buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <motion.a
              href={personalInfo.social?.github}
              className="group inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'var(--text-inverse)'
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github size={20} className="mr-3" />
              View Projects
              <motion.div
                className="ml-2"
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={16} />
              </motion.div>
            </motion.a>
            
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              style={{
                border: '2px solid var(--border-secondary)',
                color: 'var(--text-primary)',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ 
                scale: 1.02,
                borderColor: 'var(--accent-primary)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={20} className="mr-3" />
              Get in touch
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default HeroCard;
