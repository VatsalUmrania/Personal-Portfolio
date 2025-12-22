import { useState } from 'react';
import { Project } from '../../types/project';
import ProjectFlow from './ProjectFlow'; // Your existing component
import clsx from 'clsx';
import { FiArrowUpRight, FiLayers } from 'react-icons/fi';

interface ProjectCardProps {
    project: Project;
    onOpenCaseStudy: (project: Project) => void;
}

const ProjectCard = ({ project, onOpenCaseStudy }: ProjectCardProps) => {
    const [isArchOpen, setArchOpen] = useState(false);

    return (
        <article className="min-w-[85vw] md:min-w-150 h-[70vh] flex flex-col justify-between border-r border-border-subtle bg-bg-primary pr-12 md:pr-24 pl-6 snap-center">
            
            {/* Top: Header */}
            <div className="flex justify-between items-start">
                <div>
                    <span className="font-mono text-xs text-text-tertiary mb-3 block">
                        0{project.id} — {project.caseStudy.category}
                    </span>
                    <h3 className="text-3xl font-medium text-text-primary mb-2">
                        {project.title}
                    </h3>
                    <p className="text-text-secondary text-lg max-w-md leading-relaxed">
                        {project.subtitle}
                    </p>
                </div>
                
                {/* Tech Stack Pills - Minimal */}
                <div className="hidden md:flex flex-wrap gap-2 max-w-50 justify-end">
                    {project.techStack.map((tech) => (
                        <span key={tech.name} className="px-2 py-1 text-[10px] font-mono text-text-tertiary border border-border-subtle rounded-sm uppercase tracking-wider">
                            {tech.name}
                        </span>
                    ))}
                </div>
            </div>

            {/* Middle: Architecture Visualization */}
            <div className="flex-1 my-12 relative group">
                <div className={clsx(
                    "w-full h-full border border-border-subtle bg-bg-secondary/50 transition-all duration-500",
                    isArchOpen ? "opacity-100" : "opacity-40 grayscale group-hover:opacity-60"
                )}>
                    {isArchOpen ? (
                        <ProjectFlow project={project} />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button 
                                onClick={() => setArchOpen(true)}
                                className="flex items-center gap-2 px-4 py-2 bg-bg-surface border border-border-subtle text-text-secondary hover:text-text-primary hover:border-text-secondary transition-all text-sm font-mono"
                            >
                                <FiLayers />
                                Reveal Architecture
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom: Actions */}
            <div className="flex items-center justify-between border-t border-border-subtle pt-6">
                <div className="flex gap-6">
                    <button 
                        onClick={() => onOpenCaseStudy(project)}
                        className="text-text-primary hover:text-accent-glow transition-colors flex items-center gap-2 group/btn"
                    >
                        <span className="font-medium">Read Case Study</span>
                        <FiArrowUpRight className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    </button>
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" className="text-text-tertiary hover:text-text-secondary transition-colors text-sm flex items-center gap-2">
                            Live Demo
                        </a>
                    )}
                </div>
                
                {/* Metrics Teaser */}
                <div className="hidden md:flex gap-8">
                    {project.caseStudy.metrics.slice(0, 2).map((m, i) => (
                        <div key={i} className="text-right">
                            <div className="text-lg font-mono text-text-primary">{m.value}</div>
                            <div className="text-[10px] uppercase tracking-wider text-text-tertiary">{m.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;