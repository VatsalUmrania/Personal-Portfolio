import { useEffect, useRef, useState } from 'react';
import { projects } from '../../data/projects';
import { Project } from '../../types/project';
import ProjectCard from './ProjectCard';

interface ProjectsSectionProps {
    activeFilter: string | null;
    onOpenCaseStudy: (project: Project) => void;
}

const ProjectsSection = ({ activeFilter, onOpenCaseStudy }: ProjectsSectionProps) => {
    const scrollTriggerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth <= 768) {
                return;
            }

            const scrollTrigger = scrollTriggerRef.current;
            const track = trackRef.current;
            if (!scrollTrigger || !track) return;

            const rect = scrollTrigger.getBoundingClientRect();
            const triggerTop = rect.top;
            const triggerHeight = rect.height;
            const viewportHeight = window.innerHeight;
            const end = triggerHeight - viewportHeight;

            let progress = -triggerTop;
            if (progress < 0) progress = 0;
            if (progress > end) progress = end;

            const percentage = progress / end;
            const trackWidth = track.scrollWidth;
            const windowWidth = window.innerWidth;
            const maxTranslate = -(trackWidth - windowWidth + windowWidth * 0.06);
            const translateX = percentage * maxTranslate;

            track.style.transform = `translateX(${translateX}px)`;

            // Update active index
            let newActiveIndex = Math.ceil(percentage * (projects.length - 1));
            if (newActiveIndex < 0) newActiveIndex = 0;
            if (newActiveIndex >= projects.length) newActiveIndex = projects.length - 1;
            setActiveIndex(newActiveIndex);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <div className="h-[350vh] relative" ref={scrollTriggerRef}>
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center border-t border-b border-[rgb(var(--border-color-rgb))]">
                <div className="absolute top-12 left-container-x right-container-x flex justify-between font-mono text-[rgb(var(--text-secondary-rgb))] z-10 pointer-events-none px-container-x max-w-[1600px] mx-auto">
                    <span>PROJECT HIGHLIGHTS</span>
                    <span>
                        {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                    </span>
                </div>
                <div className="flex gap-container-x pl-container-x items-center will-change-transform" ref={trackRef}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            isActive={index === activeIndex}
                            isDimmed={activeFilter !== null && !project.tags.includes(activeFilter)}
                            isHighlighted={activeFilter !== null && project.tags.includes(activeFilter)}
                            onOpenCaseStudy={onOpenCaseStudy}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;
