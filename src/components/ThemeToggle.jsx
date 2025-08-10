import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = ({ variant = 'simple', className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    console.log('Theme toggle clicked, current theme:', theme); // Debug
    toggleTheme();
  };

  if (variant === 'simple') {
    return (
      <motion.button
        onClick={handleToggle}
        className={`p-3 rounded-lg transition-all duration-300 hover:scale-105 ${className}`}
        style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-primary)',
          color: 'var(--text-primary)'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        <motion.div
          key={theme}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </motion.div>
      </motion.button>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={handleToggle}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-primary)',
          color: 'var(--text-primary)'
        }}
      >
        {theme === 'light' ? <Sun size={16} /> : <Moon size={16} />}
        <span className="text-sm font-medium">
          {theme === 'light' ? 'Light' : 'Dark'} Mode
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
