import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const NavigationControls = ({ cards, activeIndex, handleNavigate, goToCard }) => {
  // Get previous and next card info for navigation labels
  const getPreviousCard = () => {
    return activeIndex > 0 ? cards[activeIndex - 1] : cards[cards.length - 1];
  };

  const getNextCard = () => {
    return activeIndex < cards.length - 1 ? cards[activeIndex + 1] : cards[0];
  };

  return (
    <>
      {/* Previous Button - Bottom Left */}
      <motion.button
        onClick={() => handleNavigate(-1)}
        className="fixed left-4 lg:left-6 bottom-6 z-30 flex items-center space-x-3 px-4 py-3 bg-black/90 backdrop-blur-xl border border-gray-700/50 rounded-full text-white shadow-xl hover:bg-gray-900/90 hover:border-white/50 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
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
        <div className="flex flex-col items-end text-right">
          <div className="text-sm font-medium flex items-center space-x-2">
            <span>{getNextCard().title}</span>
            {React.createElement(getNextCard().icon, { size: 14 })}
          </div>
        </div>
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
    </>
  );
};

export default NavigationControls;
