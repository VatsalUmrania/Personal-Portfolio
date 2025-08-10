import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, User, Code, FolderOpen, Mail, Award, TrendingUp,
  MapPin, Phone, Github, Linkedin, Globe, Download,
  ChevronLeft, ChevronRight, Menu, X, ExternalLink,
  ArrowLeft, ArrowRight
} from 'lucide-react';
import {
  personalInfo,
  education,
  experience,
  skills,
  projects,
  stats
} from '../../data/portfolioData';

const CardStackPortfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const cards = [
    {
      id: 'hero',
      title: 'Home',
      subtitle: 'Introduction',
      icon: Home,
      component: <HeroCard />
    },
    {
      id: 'about',
      title: 'About',
      subtitle: 'My Journey',
      icon: User,
      component: <AboutCard />
    },
    {
      id: 'skills',
      title: 'Skills',
      subtitle: 'Programming',
      icon: Code,
      component: <SkillsCard />
    },
    {
      id: 'projects',
      title: 'Projects',
      subtitle: 'Portfolio',
      icon: FolderOpen,
      component: <ProjectsCard />
    },
    {
      id: 'contact',
      title: 'Contact',
      subtitle: 'Get In Touch',
      icon: Mail,
      component: <ContactCard />
    }
  ];

  const handleNavigate = (direction) => {
    setActiveIndex((prev) => {
      let newIndex = prev + direction;
      if (newIndex < 0) newIndex = cards.length - 1;
      if (newIndex >= cards.length) newIndex = 0;
      return newIndex;
    });
  };

  const goToCard = (index) => {
    setActiveIndex(index);
    setIsMobileMenuOpen(false);
  };

  // Get previous and next card info for navigation labels
  const getPreviousCard = () => {
    return activeIndex > 0 ? cards[activeIndex - 1] : cards[cards.length - 1];
  };

  const getNextCard = () => {
    return activeIndex < cards.length - 1 ? cards[activeIndex + 1] : cards[0];
  };

  // Touch handlers for mobile swipe
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) handleNavigate(1);
    if (isRightSwipe) handleNavigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black overflow-hidden">
      
      {/* Fixed Navigation Header with Proper Z-Index */}
      <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-xl border-b border-gray-700/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 relative">
            
            {/* Mobile Logo */}
            <div className="flex items-center space-x-2 md:hidden">
              <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-300 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-sm">V</span>
              </div>
              <div className="text-white font-bold text-sm">Vatsal</div>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-1 lg:space-x-2 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-2 shadow-xl">
                {cards.map((card, index) => {
                  const IconComponent = card.icon;
                  const isActive = index === activeIndex;
                  
                  return (
                    <button
                      key={card.id}
                      onClick={() => goToCard(index)}
                      className={`relative flex items-center space-x-1 lg:space-x-2 px-3 lg:px-6 py-2 lg:py-3 rounded-xl font-medium transition-all duration-300 group ${
                        isActive 
                          ? 'bg-white text-black shadow-lg scale-105' 
                          : 'text-gray-300 hover:text-white hover:bg-white/20'
                      }`}
                    >
                      <IconComponent 
                        size={16} 
                        className={`transition-all duration-300 ${
                          isActive ? 'text-black' : 'text-gray-300 group-hover:text-white'
                        }`} 
                      />
                      <span className="text-xs lg:text-sm font-semibold whitespace-nowrap hidden lg:block">
                        {card.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu Container - Fixed Position */}
            <div className="md:hidden relative">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-300 hover:text-white rounded-xl hover:bg-white/20 transition-all duration-300 relative z-[10001]"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </button>

              {/* Mobile Dropdown Menu - Positioned relative to button */}
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-2 w-64 bg-black/98 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl z-[10000]"
                  >
                    <div className="p-4 space-y-2 max-h-[70vh] overflow-y-auto">
                      {cards.map((card, index) => {
                        const IconComponent = card.icon;
                        const isActive = index === activeIndex;
                        
                        return (
                          <motion.button
                            key={card.id}
                            onClick={() => goToCard(index)}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 text-left group ${
                              isActive 
                                ? 'bg-white text-black shadow-xl' 
                                : 'text-gray-300 hover:text-white hover:bg-white/10'
                            }`}
                          >
                            <div className={`p-2 rounded-lg transition-all duration-300 ${
                              isActive 
                                ? 'bg-black/10' 
                                : 'bg-white/10 group-hover:bg-white/20'
                            }`}>
                              <IconComponent size={18} />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-sm">{card.title}</div>
                              <div className={`text-xs transition-colors duration-300 ${
                                isActive 
                                  ? 'text-black/70' 
                                  : 'text-gray-400 group-hover:text-gray-300'
                              }`}>
                                {card.subtitle}
                              </div>
                            </div>
                            {isActive && (
                              <div className="w-2 h-2 bg-black rounded-full"></div>
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998] md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Card Stack - Adjusted Z-Index */}
      <div className="pt-16 md:pt-20 h-screen flex items-center justify-center p-2 sm:p-4">
        <div className="relative w-full max-w-7xl h-full max-h-[85vh] sm:max-h-[80vh] md:max-h-[75vh]">
          
          {/* Card Counter - Responsive Position */}
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-30 bg-black/90 backdrop-blur-xl px-3 py-2 rounded-lg border border-gray-700/50 shadow-xl">
            <span className="text-white font-bold text-xs sm:text-sm">
              {activeIndex + 1} of {cards.length}
            </span>
          </div>

          {/* Card Stack Container with Touch Support */}
          <div 
            className="relative w-full h-full flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {cards.map((card, index) => {
              const isActive = index === activeIndex;
              const position = index - activeIndex;
              const absPosition = Math.abs(position);
              
              // Responsive spacing
              const zIndex = isActive ? 20 : 10 - absPosition;
              const scale = isActive ? 1 : Math.max(0.85, 1 - (absPosition * 0.05));
              const yOffset = isActive ? 0 : absPosition * (isMobile ? 15 : 20);
              const xOffset = isActive ? 0 : Math.sign(position) * (Math.sqrt(absPosition) * (isMobile ? 60 : 80));
              const opacity = isActive ? 1 : Math.max(0.6, 1 - (absPosition * 0.2));
              
              return (
                <motion.div
                  key={card.id}
                  className="absolute inset-0 cursor-pointer"
                  style={{ zIndex }}
                  animate={{
                    scale,
                    y: yOffset,
                    x: xOffset,
                    opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.6
                  }}
                  onClick={() => !isActive && goToCard(index)}
                >
                  {/* Responsive Card Design */}
                  <div 
                    className={`w-full h-full rounded-2xl sm:rounded-3xl border overflow-hidden backdrop-blur-xl transition-all duration-500 ${
                      isActive 
                        ? 'border-gray-400/60 shadow-2xl' 
                        : 'border-gray-600/40 hover:border-gray-500/60'
                    }`}
                    style={{
                      background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
                      boxShadow: isActive 
                        ? "0 40px 80px -20px rgba(0,0,0,0.9), 0 0 60px rgba(255, 255, 255, 0.1), inset 0 2px 0 rgba(255, 255, 255, 0.05)"
                        : '0 25px 50px -15px rgba(0,0,0,0.8)',
                    }}
                  >
                    {/* Minimal overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-3xl"
                      style={{
                        background: "rgba(10, 10, 10, 0.1)",
                        backdropFilter: "blur(0.5px)",
                        zIndex: 1,
                      }}
                    />

                    {/* Card Content */}
                    <div className="relative z-10 w-full h-full">
                      {isActive ? (
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full"
                          >
                            {card.component}
                          </motion.div>
                        </AnimatePresence>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center p-4 sm:p-8">
                          <div className="text-center space-y-3 sm:space-y-4">
                            <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-white to-gray-300 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                              <card.icon size={isMobile ? 24 : 32} className="text-black" />
                            </div>
                            <div>
                              <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2">{card.title}</h3>
                              <p className="text-gray-300 text-xs sm:text-sm">{card.subtitle}</p>
                            </div>
                            <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 rounded-full border border-white/20">
                              <span className="text-xs text-white font-medium">Click to explore</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Fixed Navigation Buttons with Section Names */}
          
          <motion.button
            onClick={() => handleNavigate(-1)}
            className="fixed left-4 lg:left-6 bottom-6 z-30 flex items-center space-x-3 px-4 py-3 bg-black/90 backdrop-blur-xl border border-gray-700/50 rounded-full text-white shadow-xl hover:bg-gray-900/90 hover:border-white/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Icon and Text */}
            <ArrowLeft size={18} className="group-hover:animate-pulse mr-2" />
            <div className="flex flex-col items-start text-left">
              <div className="text-sm font-medium flex items-center space-x-2">
                {React.createElement(getPreviousCard().icon, { size: 14 })}
                <span>{getPreviousCard().title}</span>
              </div>
            </div>
          </motion.button>


          {/* Next Button - Bottom Right */}
          <motion.button
            onClick={() => handleNavigate(1)}
            className="fixed right-4 lg:right-6 bottom-6 z-30 flex items-center space-x-3 px-4 py-3 bg-black/90 backdrop-blur-xl border border-gray-700/50 rounded-full text-white shadow-xl hover:bg-gray-900/90 hover:border-white/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Text content */}
            <div className="flex flex-col items-end text-right">
              <div className="text-sm font-medium flex items-center space-x-2">
                <span>{getNextCard().title}</span>
                {React.createElement(getNextCard().icon, { size: 14 })}
              </div>
            </div>

            {/* Arrow icon */}
            <ArrowRight size={18} className="group-hover:animate-pulse ml-2" />
          </motion.button>


          {/* Responsive Dot Navigation */}
          <div className="fixed bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-black/90 backdrop-blur-xl px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-gray-700/50 shadow-xl">
            {cards.map((card, index) => (
              <motion.button
                key={index}
                onClick={() => goToCard(index)}
                className={`relative transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-3 h-3 bg-white rounded-full shadow-lg' 
                    : 'w-2 h-2 bg-gray-600 hover:bg-gray-400 rounded-full'
                }`}
                whileHover={{ scale: index === activeIndex ? 1 : 1.5 }}
                whileTap={{ scale: 0.8 }}
                title={card.title}
              >
                {/* Active dot glow effect */}
                {index === activeIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white"
                    animate={{ 
                      boxShadow: ['0 0 0px rgba(255, 255, 255, 0.5)', '0 0 8px rgba(255, 255, 255, 0.8)', '0 0 0px rgba(255, 255, 255, 0.5)']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// [All the other card components remain the same as previous code...]
// Hero Card Component
const HeroCard = () => (
  <div className="h-full flex items-center justify-center px-4 sm:px-8 py-8 sm:py-12">
    <div className="text-center space-y-6 sm:space-y-8 max-w-4xl">
      <motion.h1 
        className="font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, I'm{' '}
        <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
          Vatsal
        </span>
      </motion.h1>
      
      <motion.p 
        className="text-lg sm:text-2xl text-white/90 font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Software Developer
      </motion.p>
      
      <motion.p 
        className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {personalInfo.bio.short}
      </motion.p>

      <motion.div 
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <a
          href={personalInfo.social?.github}
          className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg shadow-xl hover:scale-105 transition-transform flex items-center justify-center space-x-2 hover:bg-gray-200"
        >
          <Github size={18} />
          <span>View My Work</span>
        </a>
        
        <a
          href={`mailto:${personalInfo.email}`}
          className="border-2 border-white/60 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white transition-all flex items-center justify-center space-x-2"
        >
          <Mail size={18} />
          <span>Get In Touch</span>
        </a>
      </motion.div>
    </div>
  </div>
);

// Responsive About Card Component
const AboutCard = () => (
  <div className="h-full overflow-y-auto px-4 sm:px-8 py-6 sm:py-12 scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-600">
    <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
      <div className="text-center space-y-4 sm:space-y-6">
        <h2 className="font-black text-2xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-sm sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {personalInfo.bio.long}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
        <div className="bg-white/5 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
          <h3 className="font-bold text-lg sm:text-2xl text-white mb-4 sm:mb-6 flex items-center space-x-2">
            <User className="text-gray-300" size={20} />
            <span>Education</span>
          </h3>
          {education.map((edu, index) => (
            <div key={index} className="mb-4 sm:mb-6">
              <h4 className="text-base sm:text-xl font-bold text-white">{edu.degree}</h4>
              <p className="text-gray-300 text-sm sm:text-lg">{edu.institution}</p>
              <p className="text-gray-400 text-xs sm:text-sm">{edu.duration}</p>
              <p className="text-gray-400 text-xs sm:text-sm">{edu.gpa}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4 sm:space-y-6">
          {Object.entries(stats).map(([key, value], index) => (
            <div
              key={key}
              className="bg-white/5 backdrop-blur-xl border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:scale-105 transition-transform hover:bg-white/10"
            >
              <div className="text-2xl sm:text-4xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-1 sm:mb-2">
                {value}
              </div>
              <div className="text-gray-300 capitalize font-semibold text-xs sm:text-base">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Responsive Skills Card Component
const SkillsCard = () => {
  if (!skills?.technical || typeof skills.technical !== 'object') {
    return (
      <div className="h-full flex items-center justify-center px-4 sm:px-8 py-6 sm:py-12">
        <div className="text-center text-white">
          <h2 className="text-lg sm:text-2xl font-bold mb-4">Skills data not available</h2>
          <p className="text-gray-400 text-sm">Please check your portfolio data configuration.</p>
        </div>
      </div>
    );
  }

  const skillEntries = Object.entries(skills.technical);

  // Real skill logos mapping
  const getSkillLogo = (skillName) => {
    const logos = {
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      '.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
      'REST APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      'MySQL Server': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'Socket.IO': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
      'Arduino/IoT': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg'
    };
    return logos[skillName] || null;
  };

  return (
    <div className="h-full overflow-y-auto px-4 sm:px-8 py-6 sm:py-12 scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-600">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="font-black text-2xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-xl text-gray-300">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillEntries.map(([category, skillList], categoryIndex) => {
            const skills = Array.isArray(skillList) ? skillList : [];
            
            return (
              <div
                key={category}
                className="bg-white/5 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:scale-105 transition-transform hover:bg-white/10"
              >
                <h3 className="font-bold text-lg sm:text-2xl text-white mb-6 sm:mb-8 flex items-center space-x-2">
                  <Code className="text-gray-300" size={20} />
                  <span>{category}</span>
                </h3>
                
                {skills.length > 0 ? (
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    {skills.map((skill, skillIndex) => {
                      const logoUrl = getSkillLogo(skill.name);
                      
                      return (
                        <div
                          key={`${category}-${skillIndex}`}
                          className="p-3 sm:p-4 bg-black/20 border border-gray-600/30 rounded-xl hover:bg-black/40 hover:border-gray-400/50 transition-all group text-center"
                        >
                          <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                            {logoUrl ? (
                              <img 
                                src={logoUrl} 
                                alt={skill.name}
                                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                                style={{ filter: skill.name === 'Next.js' ? 'invert(1)' : 'none' }}
                              />
                            ) : (
                              <span className="text-lg sm:text-2xl">{skill.icon || '🔧'}</span>
                            )}
                            <span className="text-white font-medium group-hover:text-gray-200 transition-colors text-xs sm:text-sm">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center text-gray-400 py-6 sm:py-8">
                    <p className="text-sm">No skills listed in this category</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Responsive Projects Card Component
const ProjectsCard = () => (
  <div className="h-full overflow-y-auto px-4 sm:px-8 py-6 sm:py-12 scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-600">
    <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
      <div className="text-center space-y-4 sm:space-y-6">
        <h2 className="font-black text-2xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-sm sm:text-xl text-gray-300">
          A showcase of my recent work and technical capabilities
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.slice(0, 6).map((project, index) => (
          <div
            key={project.id || index}
            className="bg-white/5 backdrop-blur-xl border border-gray-700/50 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform group hover:bg-white/10"
          >
            <div className="h-32 sm:h-48 bg-gradient-to-br from-gray-800/20 to-gray-900/20 flex items-center justify-center">
              <div className="text-4xl sm:text-6xl opacity-90">
                {project.image || '📦'}
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <h3 className="text-sm sm:text-xl font-bold text-white group-hover:text-gray-200 transition-colors">
                {project.title || `Project ${index + 1}`}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                {project.description || "Advanced project solution with modern technologies."}
              </p>

              <div className="flex flex-wrap gap-1 sm:gap-2">
                {(project.technologies || ['React', 'Node.js', 'IoT']).slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-3 py-1 text-xs bg-black/20 text-gray-200 rounded-lg border border-gray-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-2 sm:space-x-3 pt-3 sm:pt-4 border-t border-gray-700/50">
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    className="flex-1 bg-white text-black py-2 px-3 sm:px-4 rounded-lg text-center font-bold hover:scale-105 transition-transform hover:bg-gray-200 text-xs sm:text-sm"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.links?.github || "#"}
                  className="flex-1 border border-gray-600 text-white py-2 px-3 sm:px-4 rounded-lg text-center font-bold hover:border-gray-400 hover:text-gray-200 transition-colors text-xs sm:text-sm"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Fixed Contact Card Component with Better Text Handling
const ContactCard = () => (
  <div className="h-full overflow-y-auto px-3 sm:px-6 py-4 sm:py-8 scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-600">
    <div className="max-w-4xl mx-auto h-full flex flex-col justify-center space-y-4 sm:space-y-8">
      
      {/* Header Section - Reduced spacing */}
      <div className="text-center space-y-2 sm:space-y-4">
        <motion.h2 
          className="font-black text-xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Let's Work Together
        </motion.h2>
        <motion.p 
          className="text-xs sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          I'm always open to discussing new opportunities
        </motion.p>
      </div>
      
      {/* Contact Cards Grid - Compact */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {[
          { 
            icon: Mail, 
            label: 'Email', 
            text: personalInfo.email || 'vbumrania@gmail.com',
            href: `mailto:${personalInfo.email || 'vbumrania@gmail.com'}`,
            color: 'from-blue-600 to-blue-700'
          },
          { 
            icon: Phone, 
            label: 'Phone', 
            text: personalInfo.phone || '+91 7045780082',
            href: `tel:${personalInfo.phone || '+917045780082'}`,
            color: 'from-green-600 to-green-700'
          },
          { 
            icon: MapPin, 
            label: 'Location', 
            text: personalInfo.location || 'Mumbai, India',
            href: '#',
            color: 'from-purple-600 to-purple-700'
          }
        ].map((contact, index) => {
          const IconComponent = contact.icon;
          return (
            <motion.a
              key={index}
              href={contact.href}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-gray-700/50 rounded-lg sm:rounded-2xl p-3 sm:p-6 hover:scale-105 transition-all duration-300 group shadow-xl hover:bg-white/10 hover:border-gray-500/50"
            >
              <div className={`w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r ${contact.color} rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <IconComponent size={16} className="text-white sm:w-5 sm:h-5" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-300 mb-1 text-xs sm:text-sm">{contact.label}</div>
                <div className="font-bold text-white group-hover:text-gray-200 transition-colors text-xs sm:text-sm break-words">
                  {contact.text}
                </div>
              </div>
            </motion.a>
          );
        })}
      </motion.div>
      
      {/* CTA Button - Compact */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href={`mailto:${personalInfo.email || 'vbumrania@gmail.com'}`}
          className="inline-flex items-center bg-white text-black px-4 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg shadow-xl hover:scale-105 transition-transform space-x-2 sm:space-x-3 hover:bg-gray-200"
        >
          <Mail size={16} />
          <span>Send Message</span>
          <ExternalLink size={14} />
        </a>
      </motion.div>
      
      {/* Social Links - Compact */}
      <motion.div 
        className="flex justify-center space-x-2 sm:space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
      >
        {[
          { platform: 'GitHub', url: personalInfo.social?.github, icon: Github },
          { platform: 'LinkedIn', url: personalInfo.social?.linkedin, icon: Linkedin },
          { platform: 'Portfolio', url: personalInfo.social?.portfolio, icon: Globe }
        ].map(({ platform, url, icon: IconComponent }) => (
          <a
            key={platform}
            href={url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 bg-white/5 backdrop-blur-xl border border-gray-700/50 rounded-lg sm:rounded-xl text-white hover:scale-110 hover:text-gray-200 transition-all shadow-lg hover:bg-white/10 hover:border-gray-500/50"
            title={platform}
          >
            <IconComponent size={16} className="sm:w-5 sm:h-5" />
          </a>
        ))}
      </motion.div>
    </div>
  </div>
);

export default CardStackPortfolio;
