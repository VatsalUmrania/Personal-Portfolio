import { Navbar } from './components/Layout/Navbar';
import Hero from './components/Hero/Hero';
import ProjectsSection from './components/Projects/ProjectsSection';
import SkillsSection from './components/Skills/SkillsSection';
import EngineeringPhilosophy from './components/Engineering/EngineeringPhilosophy';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
    return (
        <main className="min-h-screen bg-noise bg-bg-primary selection:bg-accent selection:text-white pb-12">
            <Navbar />
            <div id="top" />
            <Hero />
            <ProjectsSection />
            <SkillsSection />
            <EngineeringPhilosophy />
            
            {/* Footer Grid */}
            <section id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-7xl mx-auto border-t border-border-color">
                <About />
                <Contact />
            </section>
        </main>
    );
}

export default App;