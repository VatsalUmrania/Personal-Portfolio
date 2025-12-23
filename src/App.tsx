import { Navbar } from './components/Layout/Navbar';
import Hero from './components/Hero/Hero';
import ProjectsSection from './components/Projects/ProjectsSection';
import SkillsSection from './components/Skills/SkillsSection';
import EngineeringPhilosophy from './components/Engineering/EngineeringPhilosophy';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
    return (
        <main className="min-h-screen bg-bg-primary selection:bg-accent selection:text-white pb-24">
            <Navbar />
            
            <div id="hero">
                <Hero />
            </div>
            
            <div id="projects">
                <ProjectsSection />
            </div>
            
            <div id="skills">
                <SkillsSection />
            </div>
            
            <EngineeringPhilosophy />

            <div id="contact" className="px-container-x max-w-7xl mx-auto mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <About />
                    <Contact />
                </div>
            </div>
        </main>
    );
}

export default App;