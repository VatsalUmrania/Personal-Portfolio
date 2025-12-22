import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Project } from '../../types/project';
import { FiArrowLeft, FiGithub, FiGlobe } from 'react-icons/fi';

interface FocusModeProps {
    project: Project | null;
    onClose: () => void;
}

const FocusMode = ({ project, onClose }: FocusModeProps) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 bg-bg-primary overflow-y-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            >
                {/* Top Navigation Bar */}
                <div className="sticky top-0 z-10 w-full bg-bg-primary/80 backdrop-blur-md border-b border-border-subtle">
                    <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                        <button 
                            onClick={onClose}
                            className="text-sm font-mono text-text-secondary hover:text-text-primary flex items-center gap-2 transition-colors"
                        >
                            <FiArrowLeft /> Back to Index <span className="text-text-tertiary opacity-50">[ESC]</span>
                        </button>
                        <div className="flex gap-4">
                            <a href={project.githubUrl} target="_blank" className="text-text-secondary hover:text-text-primary transition-colors">
                                <FiGithub size={18} />
                            </a>
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" className="text-text-secondary hover:text-text-primary transition-colors">
                                    <FiGlobe size={18} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-[1fr_280px] gap-16 md:gap-24">
                    
                    {/* LEFT: Main Narrative */}
                    <main className="space-y-24">
                        
                        {/* Title Section */}
                        <header>
                            <span className="font-mono text-sm text-text-accent-glow mb-4 block">Case Study: {project.id.toString().padStart(2, '0')}</span>
                            <h1 className="text-4xl md:text-5xl font-medium text-text-primary mb-8 leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-xl text-text-secondary leading-relaxed text-balance border-l-2 border-border-subtle pl-6">
                                {project.caseStudy.summary}
                            </p>
                        </header>

                        {/* The Problem */}
                        <section>
                            <h3 className="text-sm font-mono text-text-tertiary uppercase tracking-widest mb-6">01 — The Challenge</h3>
                            <p className="text-lg text-text-secondary leading-relaxed mb-8">
                                {project.caseStudy.details.problemStatement}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {project.caseStudy.details.constraints.map((c, i) => (
                                    <div key={i} className="p-4 border border-border-subtle bg-bg-secondary rounded-sm">
                                        <span className="text-xs font-mono text-text-tertiary block mb-2">Constraint</span>
                                        <p className="text-sm text-text-primary">{c}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Technical Decisions - The "Meat" */}
                        <section>
                            <h3 className="text-sm font-mono text-text-tertiary uppercase tracking-widest mb-8">02 — Architecture & Decisions</h3>
                            <div className="space-y-12">
                                {project.caseStudy.details.technicalDecisions.map((dec, i) => (
                                    <div key={i} className="group">
                                        <h4 className="text-xl text-text-primary mb-3 group-hover:text-text-accent-glow transition-colors">
                                            {dec.decision}
                                        </h4>
                                        <p className="text-text-secondary leading-relaxed">
                                            {dec.rationale}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Tradeoffs - The "Senior" Section */}
                        <section>
                            <h3 className="text-sm font-mono text-text-tertiary uppercase tracking-widest mb-8">03 — Reflection</h3>
                            <div className="bg-bg-surface border border-border-subtle p-8 rounded-sm space-y-8">
                                <div>
                                    <h4 className="font-mono text-sm text-text-secondary mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-yellow-500/50"></span>
                                        Tradeoffs Accepted
                                    </h4>
                                    <ul className="list-disc list-inside space-y-2 text-text-secondary text-sm">
                                        {project.caseStudy.details.tradeoffs.map((t, i) => (
                                            <li key={i}>{t}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="border-t border-border-subtle pt-8">
                                    <h4 className="font-mono text-sm text-text-secondary mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-red-500/50"></span>
                                        Mistakes & Lessons
                                    </h4>
                                    <ul className="list-disc list-inside space-y-2 text-text-secondary text-sm">
                                        {project.caseStudy.details.mistakes.map((m, i) => (
                                            <li key={i}>{m}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </main>

                    {/* RIGHT: Sidebar Data */}
                    <aside className="hidden md:block">
                        <div className="sticky top-32 space-y-12">
                            {/* Tech Stack List */}
                            <div>
                                <h5 className="font-mono text-xs text-text-tertiary uppercase tracking-widest mb-6">Tech Stack</h5>
                                <div className="flex flex-col gap-3">
                                    {project.techStack.map(tech => (
                                        <div key={tech.name} className="flex items-center gap-3 text-sm text-text-secondary">
                                            {tech.icon && <tech.icon />}
                                            <span>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Metrics - Big Numbers */}
                            <div>
                                <h5 className="font-mono text-xs text-text-tertiary uppercase tracking-widest mb-6">Impact</h5>
                                <div className="space-y-6">
                                    {project.caseStudy.metrics.map((m, i) => (
                                        <div key={i} className="pb-6 border-b border-border-subtle last:border-0">
                                            <div className="text-3xl font-light text-text-primary mb-1">{m.value}</div>
                                            <div className="text-xs font-mono text-text-tertiary">{m.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default FocusMode;