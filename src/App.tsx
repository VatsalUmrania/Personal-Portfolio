import { useState, useRef } from 'react';
import Hero from './components/Hero/Hero';
import ProjectsSection from './components/Projects/ProjectsSection';
import FocusMode from './components/FocusMode/FocusMode';
import SkillsSection from './components/Skills/SkillsSection';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { Project } from './types/project';
import EngineeringPhilosophy from './components/Engineering/EngineeringPhilosophy';

function App() {
    const [focusProject, setFocusProject] = useState<Project | null>(null);
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    const handleScrollToProjects = () => {
        const projectsElement = document.getElementById('project-scroll-trigger');
        if (projectsElement) {
            projectsElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleOpenCaseStudy = (project: Project) => {
        setFocusProject(project);
    };

    const handleCloseFocusMode = () => {
        setFocusProject(null);
    };

    const handleSkillHover = (tag: string) => {
        setActiveFilter(tag);
    };

    const handleSkillLeave = () => {
        setActiveFilter(null);
    };

    return (
        <>
            <Hero onScrollToProjects={handleScrollToProjects} />
            <div ref={projectsRef}>
                <ProjectsSection activeFilter={activeFilter} onOpenCaseStudy={handleOpenCaseStudy} />
            </div>
            <SkillsSection onSkillHover={handleSkillHover} onSkillLeave={handleSkillLeave} />
            <EngineeringPhilosophy />
            <About />
            <Contact />
            <FocusMode project={focusProject} onClose={handleCloseFocusMode} />
        </>
    );
}

export default App;
