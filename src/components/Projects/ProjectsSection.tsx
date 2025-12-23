import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import ProjectSystemView from './ProjectSystemView';
import { FiMaximize2, FiX, FiArrowRight } from 'react-icons/fi';
import { ScrollReveal } from '../UI/ScrollReveal';

const ProjectsSection = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <section className="px-container-x py-24 bg-bg-primary relative">
            <ScrollReveal>
                <div className="flex items-end justify-between mb-12 border-b border-border-color pb-4">
                    <h2 className="text-2xl font-medium text-text-primary">
                        Selected Work
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            layoutId={`project-${project.id}`}
                            onClick={() => setSelectedId(project.id)}
                            className="group cursor-pointer bg-surface border border-border-color p-6 relative hover:border-accent/50 transition-colors duration-200 flex flex-col h-full rounded-sm"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div /> 
                                <FiMaximize2 className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
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
                                <button className="flex items-center gap-2 text-sm text-text-muted group-hover:text-text-primary transition-colors">
                                    <span>View Details</span>
                                    <FiArrowRight />
                                </button>
                            </div>
                        </motion.div>
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
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-bg-primary/90 backdrop-blur-sm pointer-events-auto"
                        />
                        
                        <motion.div
                            layoutId={`project-${selectedId}`}
                            className="w-full max-w-5xl max-h-full overflow-y-auto bg-bg-primary border border-border-color shadow-2xl relative pointer-events-auto rounded-md custom-scrollbar"
                        >
                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                className="sticky top-4 right-4 float-right z-50 p-2 bg-surface hover:bg-error hover:text-white text-text-muted transition-colors border border-border-color rounded-full"
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