// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Home, User, Code, FolderOpen, Mail } from 'lucide-react';
// import NavigationHeader from '../components/NavigationHeader';
// import CardStack from '../components/CardStack';
// import NavigationControls from '../components/NavigationControls';
// import HeroCard from '../components/HeroCard';
// import AboutCard from '../components/AboutCard';
// import SkillsCard from '../components/SkillsCard';
// import ProjectsCard from '../components/ProjectsCard';
// import ContactCard from '../components/ContactCard';

// const CardStackPortfolio = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect screen size
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);
//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);

//   const cards = [
//     {
//       id: 'hero',
//       title: 'Home',
//       subtitle: 'Introduction',
//       icon: Home,
//       component: <HeroCard />
//     },
//     {
//       id: 'about',
//       title: 'About',
//       subtitle: 'My Journey',
//       icon: User,
//       component: <AboutCard />
//     },
//     {
//       id: 'skills',
//       title: 'Skills',
//       subtitle: 'Programming',
//       icon: Code,
//       component: <SkillsCard />
//     },
//     {
//       id: 'projects',
//       title: 'Projects',
//       subtitle: 'Portfolio',
//       icon: FolderOpen,
//       component: <ProjectsCard />
//     },
//     {
//       id: 'contact',
//       title: 'Contact',
//       subtitle: 'Get In Touch',
//       icon: Mail,
//       component: <ContactCard />
//     }
//   ];

//   const handleNavigate = (direction) => {
//     setActiveIndex((prev) => {
//       let newIndex = prev + direction;
//       if (newIndex < 0) newIndex = cards.length - 1;
//       if (newIndex >= cards.length) newIndex = 0;
//       return newIndex;
//     });
//   };

//   const goToCard = (index) => {
//     setActiveIndex(index);
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black overflow-hidden">
//       <NavigationHeader
//         cards={cards}
//         activeIndex={activeIndex}
//         isMobileMenuOpen={isMobileMenuOpen}
//         setIsMobileMenuOpen={setIsMobileMenuOpen}
//         goToCard={goToCard}
//       />

//       <CardStack
//         cards={cards}
//         activeIndex={activeIndex}
//         isMobile={isMobile}
//         goToCard={goToCard}
//         handleNavigate={handleNavigate}
//       />

//       <NavigationControls
//         cards={cards}
//         activeIndex={activeIndex}
//         handleNavigate={handleNavigate}
//         goToCard={goToCard}
//       />
//     </div>
//   );
// };

// export default CardStackPortfolio;


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code, FolderOpen, Mail } from 'lucide-react';
import { ThemeProvider } from '../contexts/ThemeContext';
import NavigationHeader from '../components/NavigationHeader';
import CardStack from '../components/CardStack';
import NavigationControls from '../components/NavigationControls';
import HeroCard from '../components/HeroCard';
import AboutCard from '../components/AboutCard';
import SkillsCard from '../components/SkillsCard';
import ProjectsCard from '../components/ProjectsCard';
import ContactCard from '../components/ContactCard';
// Import the CSS file
import '../styles/themes.css'; // Adjust the path as necessary

const CardStackPortfolioContent = () => {
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

  return (
    <div 
      className="min-h-screen overflow-hidden transition-all duration-300"
      style={{ 
        background: 'var(--bg-gradient)',
        color: 'var(--text-primary)'
      }}
    >
      <NavigationHeader
        cards={cards}
        activeIndex={activeIndex}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        goToCard={goToCard}
      />

      <CardStack
        cards={cards}
        activeIndex={activeIndex}
        isMobile={isMobile}
        goToCard={goToCard}
        handleNavigate={handleNavigate}
      />

      <NavigationControls
        cards={cards}
        activeIndex={activeIndex}
        handleNavigate={handleNavigate}
        goToCard={goToCard}
      />
    </div>
  );
};

const CardStackPortfolio = () => {
  return (
    
      <CardStackPortfolioContent />
    
  );
};

export default CardStackPortfolio;
