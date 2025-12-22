import Hero from './components/Hero/Hero';
import ProjectsSection from './components/Projects/ProjectsSection';
import SkillsSection from './components/Skills/SkillsSection';
import EngineeringPhilosophy from './components/Engineering/EngineeringPhilosophy';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
    return (
        <main className="min-h-screen bg-bg-primary selection:bg-accent selection:text-white">
            {/* Phase 1: Authority */}
            <Hero />
            
            {/* Phase 2 & 3: The System Log (Index + Deep Dive) */}
            <ProjectsSection />
            
            {/* Phase 5: Capability Audit */}
            <SkillsSection />
            
            {/* Phase 4: Directives */}
            <EngineeringPhilosophy />
            
            {/* Phase 6: Grid Footer */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-350 mx-auto border-t border-border-color">
                <About />
                <Contact />
            </div>
        </main>
    );
}

export default App;