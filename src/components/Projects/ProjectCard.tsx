import { useState } from 'react';
import { Project } from '../../types/project';
import ProjectFlow from './ProjectFlow';
import clsx from 'clsx';

interface ProjectCardProps {
    project: Project;
    isActive: boolean;
    isDimmed: boolean;
    isHighlighted: boolean;
    onOpenCaseStudy: (project: Project) => void;
}

const ProjectCard = ({ project, isActive, isDimmed, isHighlighted, onOpenCaseStudy }: ProjectCardProps) => {
    const [archOpen, setArchOpen] = useState(false);

    const toggleArch = () => {
        setArchOpen(!archOpen);
    };

    return (
        <article
            className={clsx(
                'min-w-[clamp(350px,45vw,600px)] bg-[rgb(var(--card-rgb))] border border-[rgb(var(--border-color-rgb))] p-12',
                'flex flex-col justify-between h-[65vh]',
                'transition-all duration-500 ease-in-out',
                {
                    'opacity-100': isActive,
                    'opacity-40': !isActive && !isDimmed && !isHighlighted,
                    'opacity-20': isDimmed,
                    'border-[rgb(var(--accent-rgb))]! -translate-y-0.5': isHighlighted,
                }
            )}
            data-tech={project.tags.join(' ')}
        >
            <div>
                <div className="mb-8">
                    <h3 className="text-2xl mb-4 text-[rgb(var(--text-primary-rgb))]">{project.title}</h3>
                    <p className="text-base leading-relaxed mb-8 text-[rgb(var(--text-secondary-rgb))]">{project.problem}</p>
                </div>
                <div className="flex flex-wrap gap-4 mb-auto">
                    {project.techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="flex items-center gap-1.5 font-mono text-xs text-[rgb(var(--text-secondary-rgb))]"
                        >
                            {tech.icon && (
                                <tech.icon
                                    className="text-xs opacity-50"
                                    aria-hidden="true"
                                />
                            )}
                            <span>{tech.name}</span>
                        </span>
                    ))}
                </div>
                <button
                    className="mt-8 text-[rgb(var(--accent-rgb))] text-left opacity-80 hover:opacity-100 transition-opacity font-mono text-sm"
                    onClick={toggleArch}
                >
                    {archOpen ? '[-] Hide Architecture' : '[+] Architecture View'}
                </button>
                <div
                    className={clsx(
                        'overflow-hidden transition-all duration-300 ease-out',
                        {
                            'max-h-0 opacity-0': !archOpen,
                            'max-h-[400px] opacity-100 mt-6': archOpen,
                        }
                    )}
                >
                    {archOpen && <ProjectFlow project={project} />}
                </div>
            </div>
            <div className="mt-12 pt-6 border-t border-[rgb(var(--border-color-rgb))] flex justify-between items-center">
                <button
                    className="font-mono text-sm text-[rgb(var(--text-secondary-rgb))] transition-colors hover:text-[rgb(var(--text-primary-rgb))] hover:underline underline-offset-4"
                    onClick={() => onOpenCaseStudy(project)}
                >
                    View Case Study
                </button>
            </div>
        </article>
    );
};

export default ProjectCard;
