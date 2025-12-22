import { useState } from 'react';
import { projects } from '../../data/projects';
import ProjectLogEntry from './ProjectLogEntry';

const ProjectsSection = () => {
    // State to track which "Log" (Project) is currently expanded
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    // Toggle logic: clicking an open project closes it; clicking a closed one opens it
    const handleToggle = (id: number) => {
        setExpandedId(prev => prev === id ? null : id);
    };

    return (
        <section className="px-container-x max-w-[1400px] mx-auto py-24 bg-bg-primary">
            {/* Section Header: strictly mono, purely informational */}
            <div className="flex items-end justify-between mb-8 border-b border-border-color pb-4">
                <h2 className="text-xs font-mono text-accent tracking-widest uppercase">
                    System Logs
                </h2>
                <div className="font-mono text-xs text-text-muted">
                    {projects.length} RECORDS FOUND
                </div>
            </div>

            {/* The Vertical Log List */}
            <div 
                className="border-t border-border-color"
                onMouseLeave={() => setHoveredId(null)}
            >
                {projects.map((project) => (
                    <div 
                        key={project.id}
                        onMouseEnter={() => setHoveredId(project.id)}
                    >
                        <ProjectLogEntry
                            project={project}
                            isExpanded={expandedId === project.id}
                            onToggle={() => handleToggle(project.id)}
                            isDimmed={hoveredId !== null && hoveredId !== project.id}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;