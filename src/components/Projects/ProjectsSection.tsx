import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import ProjectSystemView from './ProjectSystemView';
import { FiMaximize2, FiX, FiArrowRight } from 'react-icons/fi';
import { ScrollReveal } from '../UI/ScrollReveal';
import ProjectFilter from '../UI/ProjectFilter';

const ProjectsSection = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [activeFilter, setActiveFilter] = useState<string>('all');

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.tags.includes(activeFilter));

    const handleKeyDown = (event: React.KeyboardEvent, projectId: number) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setSelectedId(projectId);
        }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && selectedId !== null) {
            setSelectedId(null);
        }
    };

    useEffect(() => {
        if (selectedId !== null) {
            document.addEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'hidden';
        } else {
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'unset';
        };
    }, [selectedId]);

    return (
        <section className="px-container-x py-24 bg-bg-primary relative">
            <ScrollReveal>
                <div className="flex items-end justify-between mb-8 border-b border-border-color pb-4">
                    <h2 className="text-2xl font-medium text-text-primary">
                        Selected Work
                    </h2>
                </div>

                <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <motion.button
                            key={project.id}
                            layoutId={`project-${project.id}`}
                            onClick={() => setSelectedId(project.id)}
                            onKeyDown={(e) => handleKeyDown(e, project.id)}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className="group cursor-pointer bg-surface border border-border-color p-6 relative hover:shadow-lg transition-all duration-200 flex flex-col h-full rounded-sm text-left focus:outline-none focus:ring-2 focus:ring-accent"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div /> 
                                <FiMaximize2 className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            </div>
                            
                            <div className="mb-6">
                                <h3 className="text-xl font-medium text-text-primary mb-2 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-text-muted leading-relaxed">
                                    {project.subtitle}
                                </p>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.slice(0, 3).map(tag => (
                                    <span key={tag} className="text-xs border border-border-color px-2 py-1 text-text-muted bg-bg-primary/50 rounded-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto pt-4 border-t border-border-color/50 flex items-center justify-end">
                                <span className="flex items-center gap-2 text-sm text-text-muted group-hover:text-text-primary transition-colors duration-200 opacity-50 group-hover:opacity-100">
                                    <span>View Case Study</span>
                                    <FiArrowRight />
                                </span>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </ScrollReveal>

            <AnimatePresence>
                {selectedId && (
                    <div className="fixed inset-0 z-60 flex items-center justify-center px-4 md:px-12 py-12 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-bg-primary/90 backdrop-blur-sm pointer-events-auto cursor-pointer"
                        />
                        
                        <motion.div
                            layoutId={`project-${selectedId}`}
                            transition={{ duration: 0.3 }}
                            className="w-full max-w-5xl max-h-full overflow-y-auto bg-bg-primary border border-border-color shadow-2xl relative pointer-events-auto rounded-md custom-scrollbar"
                        >
                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                className="sticky top-4 right-4 float-right z-50 p-2 bg-surface text-text-muted hover:text-text-primary hover:bg-white/10 hover:rotate-90 transition-all duration-200 border border-border-color rounded-full"
                                aria-label="Close modal"
                            >
                                <FiX size={20} />
                            </button>
                            
                            <div className="pt-12 px-6 md:px-12 pb-8">
                                <div className="mb-8 border-b border-border-color pb-6">
                                    <h2 className="text-3xl md:text-4xl font-medium text-text-primary mb-2">
                                        {projects.find(p => p.id === selectedId)?.title}
                                    </h2>
                                    <p className="text-text-muted text-lg">
                                        {projects.find(p => p.id === selectedId)?.subtitle}
                                    </p>
                                </div>
                                <ProjectSystemView project={projects.find(p => p.id === selectedId)!} />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProjectsSection;