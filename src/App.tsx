import React from 'react';
import { useGSAP } from './hooks/useGSAP';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';
import { CustomCursor } from './components/effects/CustomCursor';
import { FilmGrain } from './components/effects/FilmGrain';
import { Vignette } from './components/effects/Vignette';
import { TransitionOverlay } from './components/effects/TransitionOverlay';

const App: React.FC = () => {
  // Initialize GSAP
  useGSAP();

  // Initialize Smooth Scroll
  useSmoothScroll();

  return (
    <>
      {/* Effects */}
      <CustomCursor />
      <FilmGrain />
      <Vignette />
      <TransitionOverlay />

      {/* Smooth Scroll Wrapper */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Navigation />

          <main id="main-content">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
