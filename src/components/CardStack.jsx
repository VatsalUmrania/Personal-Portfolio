import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CardStack = ({ cards, activeIndex, isMobile, goToCard, handleNavigate }) => {
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
    <div className="pt-16 md:pt-20 h-screen flex items-center justify-center p-2 sm:p-4">
      <div className="relative w-full max-w-7xl h-full max-h-[85vh] sm:max-h-[80vh] md:max-h-[75vh]">
        
        {/* Card Counter */}
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
                  <div
                    className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-3xl"
                    style={{
                      background: "rgba(10, 10, 10, 0.1)",
                      backdropFilter: "blur(0.5px)",
                      zIndex: 1,
                    }}
                  />

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
      </div>
    </div>
  );
};

export default CardStack;
