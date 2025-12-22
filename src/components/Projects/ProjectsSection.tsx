import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import ProjectSystemView from './ProjectSystemView';
import { FiMaximize2, FiX } from 'react-icons/fi';
import { ScrollReveal } from '../UI/ScrollReveal';

const ProjectsSection = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <section id="projects" className="px-container-x py-24 bg-bg-primary relative">
            <ScrollReveal>
                <div className="flex items-end justify-between mb-12 border-b border-border-color pb-4">
                    <h2 className="text-sm font-mono text-accent tracking-widest uppercase">
                        // Active Modules
                    </h2>
                </div>

                {/* Grid View */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            layoutId={`project-${project.id}`}
                            onClick={() => setSelectedId(project.id)}
                            className="group cursor-pointer bg-surface border border-border-color p-6 relative hover:border-accent transition-colors duration-300"
                            whileHover={{ y: -5 }}
                        >
                            {/* Card Content */}
                            <div className="flex justify-between items-start mb-8">
                                <span className="font-mono text-xs text-text-muted">ID_{String(project.id).padStart(2, '0')}</span>
                                <FiMaximize2 className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            
                            <h3 className="text-xl font-medium text-text-primary mb-2 group-hover:text-accent transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-sm text-text-muted font-mono mb-4">
                                {project.subtitle}
                            </p>
                            
                            <div className="flex gap-2 mt-auto">
                                {project.tags.slice(0, 3).map(tag => (
                                    <span key={tag} className="text-[10px] uppercase font-mono border border-border-color px-2 py-1 text-text-muted">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </ScrollReveal>

            {/* Expanded Modal View */}
            <AnimatePresence>
                {selectedId && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-12 py-12 pointer-events-none">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-bg-primary/90 backdrop-blur-sm pointer-events-auto"
                        />
                        
                        {/* Expanded Card */}
                        <motion.div
                            layoutId={`project-${selectedId}`}
                            className="w-full max-w-5xl max-h-full overflow-y-auto bg-bg-primary border border-accent/50 shadow-2xl relative pointer-events-auto"
                        >
                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                className="absolute top-4 right-4 z-50 p-2 bg-surface hover:bg-accent hover:text-bg-primary transition-colors border border-border-color"
                            >
                                <FiX />
                            </button>
                            
                            {/* Reuse existing System View but inside the modal */}
                            <div className="pt-12">
                                <div className="px-6 md:px-12 mb-8">
                                    <h2 className="text-3xl font-medium text-text-primary mb-2">
                                        {projects.find(p => p.id === selectedId)?.title}
                                    </h2>
                                    <div className="font-mono text-xs text-accent">
                                        // SYSTEM_ARCHITECTURE_VIEW
                                    </div>
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