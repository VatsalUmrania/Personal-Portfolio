import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Home, User, Code, FolderOpen, Mail } from 'lucide-react';


const NavigationHeader = ({ 
  cards, 
  activeIndex, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen, 
  goToCard 
}) => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for mobile
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Icon mapping for cards
  const getCardIcon = (cardId) => {
    const iconMap = {
      'hero': Home,
      'about': User,
      'skills': Code,
      'projects': FolderOpen,
      'contact': Mail
    };
    return iconMap[cardId] || Home;
  };

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'shadow-lg' : ''
        }`}
        style={{
          backgroundColor: scrolled ? 'var(--bg-card)' : 'rgba(var(--bg-card-rgb), 0.95)',
          borderBottom: '1px solid var(--border-primary)'
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Enhanced Mobile Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center font-bold text-sm shadow-lg"
                style={{
                  backgroundColor: 'var(--accent-primary)',
                  color: 'var(--text-inverse)'
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                V
              </motion.div>
              <div className="ml-3 hidden sm:block">
                <motion.span 
                  className="font-bold text-lg"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Vatsal Umrania
                </motion.span>
                <motion.p 
                  className="text-xs -mt-1"
                  style={{ color: 'var(--text-tertiary)' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Software Developer
                </motion.p>
              </div>
            </motion.div>

            {/* Desktop navigation (unchanged) */}
            <div className="hidden md:flex items-center space-x-8">
              {cards.map((card, index) => {
                const isActive = index === activeIndex;
                
                return (
                  <button
                    key={card.id}
                    onClick={() => goToCard(index)}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isActive ? 'font-semibold' : 'hover:font-medium'
                    }`}
                    style={{
                      color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                      backgroundColor: isActive ? 'var(--bg-secondary)' : 'transparent'
                    }}
                  >
                    {card.title}
                    
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                        style={{ backgroundColor: 'var(--accent-primary)' }}
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Enhanced Mobile Controls */}
            <div className="flex items-center space-x-2">
              {/* Progress indicator for mobile */}
              <div className="md:hidden flex justify-center items-center space-x-3 mr-3">
                <span 
                  className="text-xs font-medium"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  {activeIndex + 1}/{cards.length}
                </span>
                <div 
                  className="w-8 h-1 rounded-full"
                  style={{ backgroundColor: 'var(--bg-tertiary)' }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: 'var(--accent-primary)' }}
                    initial={{ width: 0 }}
                    animate={{ width: `${((activeIndex + 1) / cards.length) * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </div>
              </div>

              {/* Theme toggle for mobile */}
              
              
              {/* Enhanced Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden relative p-3 rounded-xl transition-all duration-300 touch-manipulation"
                style={{
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-primary)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isMobileMenuOpen ? 'close' : 'menu'}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>

                {/* Active state ring */}
                {isMobileMenuOpen && (
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{ backgroundColor: 'var(--accent-primary)', opacity: 0.1 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ 
                opacity: 0, 
                height: 0,
                y: -20 
              }}
              animate={{ 
                opacity: 1, 
                height: 'auto',
                y: 0 
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                y: -20 
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeOut"
              }}
              className="md:hidden border-t backdrop-blur-xl"
              style={{ 
                borderColor: 'var(--border-primary)',
                backgroundColor: 'var(--bg-card)'
              }}
            >
              {/* Mobile Menu Header */}
              

              {/* Mobile Navigation Items */}
              <div className="px-4 py-4 space-y-2">
                {cards.map((card, index) => {
                  const isActive = index === activeIndex;
                  const IconComponent = getCardIcon(card.id);
                  
                  return (
                    <motion.button
                      key={card.id}
                      onClick={() => {
                        goToCard(index);
                        setIsMobileMenuOpen(false);
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 300
                      }}
                      className="flex items-center justify-between w-full p-4 rounded-xl font-medium transition-all duration-300 text-left group relative overflow-hidden touch-manipulation"
                      style={{
                        backgroundColor: isActive ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                        color: isActive ? 'var(--text-inverse)' : 'var(--text-primary)',
                        border: `1px solid ${isActive ? 'var(--accent-primary)' : 'var(--border-secondary)'}`,
                        boxShadow: isActive ? 'var(--shadow-lg)' : 'var(--shadow-sm)'
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Shimmer effect for non-active items */}
                      {!isActive && (
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: 'linear-gradient(90deg, transparent, var(--bg-glass), transparent)'
                          }}
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                      )}
                      
                      <div className="flex items-center space-x-4 relative z-10">
                        {/* Icon with background */}
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                          style={{
                            backgroundColor: isActive ? 'var(--bg-overlay)' : 'var(--accent-primary)',
                            color: isActive ? 'var(--text-inverse)' : 'var(--text-inverse)'
                          }}
                        >
                          <IconComponent size={18} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-base">{card.title}</span>
                            {isActive && (
                              <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: 'var(--text-inverse)' }}
                              />
                            )}
                          </div>
                          <p 
                            className="text-sm mt-1"
                            style={{ 
                              color: isActive ? 'rgba(255, 255, 255, 0.8)' : 'var(--text-tertiary)' 
                            }}
                          >
                            {card.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <motion.div
                        className="relative z-10"
                        animate={{ 
                          x: isActive ? 0 : 5,
                          opacity: isActive ? 1 : 0.5
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ChevronRight size={16} />
                      </motion.div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Mobile Menu Footer */}
              <div className="px-4 py-4 border-t" style={{ borderColor: 'var(--border-primary)' }}>
                <div className="flex items-center justify-between text-xs" style={{ color: 'var(--text-tertiary)' }}>
                  <span>Swipe cards to navigate</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-0.5 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
                    <span>Tap to jump</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Enhanced Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ 
              backgroundColor: 'var(--bg-overlay)',
              backdropFilter: 'blur(8px)'
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationHeader;
