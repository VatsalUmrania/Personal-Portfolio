import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Project } from '../../types/project';
import { FiX, FiGithub, FiExternalLink, FiAlertTriangle, FiCheckCircle } from 'react-icons/fi';

interface FocusModeProps {
    project: Project | null;
    onClose: () => void;
}

const FocusMode = ({ project, onClose }: FocusModeProps) => {
    // Prevent background scrolling
    useEffect(() => {
        if (project) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
        return () => { document.body.style.overflow = ''; };
    }, [project]);

    // Close on Escape
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex flex-col bg-[rgb(var(--bg-primary-rgb))]"
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '100%' }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            >
                {/* Header Navigation */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-[rgb(var(--border-color-rgb))] bg-[rgb(var(--bg-primary-rgb))] z-10">
                    <div className="flex flex-col">
                        <span className="text-xs font-mono text-[rgb(var(--accent-rgb))] uppercase tracking-wider">Engineering Case Study</span>
                        <h2 className="text-lg font-medium text-[rgb(var(--text-primary-rgb))]">{project.title}</h2>
                    </div>
                    <button 
                        onClick={onClose}
                        className="p-2 hover:bg-[rgb(var(--card-rgb))] rounded-full transition-colors border border-transparent hover:border-[rgb(var(--border-color-rgb))]"
                    >
                        <FiX className="text-xl" />
                    </button>
                </div>

                {/* Main Scrollable Content */}
                <div className="flex-1 overflow-y-auto">
                    <div className="max-w-250 mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 p-6 lg:p-12">
                        
                        {/* LEFT COLUMN: The Narrative */}
                        <div className="space-y-12">
                            
                            {/* 1. Problem & Context */}
                            <section>
                                <h3 className="text-2xl font-light mb-4 text-[rgb(var(--text-primary-rgb))]">The Challenge</h3>
                                <p className="text-lg leading-relaxed text-[rgb(var(--text-secondary-rgb))]">
                                    {project.caseStudy.details.problemStatement}
                                </p>
                                
                                <div className="mt-6 flex flex-wrap gap-3">
                                    {project.caseStudy.details.constraints.map((c, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-[rgb(var(--card-rgb))] border border-[rgb(var(--border-color-rgb))] text-xs font-mono text-[rgb(var(--text-secondary-rgb))] rounded">
                                            ⚠️ {c}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            {/* 2. Architecture & Decisions */}
                            <section>
                                <h4 className="text-sm font-mono text-[rgb(var(--accent-rgb))] uppercase mb-6">Technical Architecture</h4>
                                <div className="space-y-6">
                                    {project.caseStudy.details.technicalDecisions.map((dec, i) => (
                                        <div key={i} className="pl-4 border-l-2 border-[rgb(var(--border-color-rgb))] hover:border-[rgb(var(--accent-rgb))] transition-colors">
                                            <h5 className="text-[rgb(var(--text-primary-rgb))] font-medium mb-1">{dec.decision}</h5>
                                            <p className="text-sm text-[rgb(var(--text-secondary-rgb))] leading-relaxed">{dec.rationale}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 3. Tradeoffs & Mistakes (The "Senior" Section) */}
                            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 bg-[rgba(255,100,100,0.03)] border border-[rgba(255,100,100,0.1)] rounded-sm">
                                    <div className="flex items-center gap-2 mb-4 text-red-400">
                                        <FiAlertTriangle />
                                        <span className="text-xs font-mono uppercase tracking-wide">Hard Lessons</span>
                                    </div>
                                    <ul className="space-y-3">
                                        {project.caseStudy.details.mistakes.map((m, i) => (
                                            <li key={i} className="text-sm text-[rgb(var(--text-secondary-rgb))] list-disc list-inside">
                                                {m}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="p-6 bg-[rgba(100,255,150,0.03)] border border-[rgba(100,255,150,0.1)] rounded-sm">
                                    <div className="flex items-center gap-2 mb-4 text-emerald-400">
                                        <FiCheckCircle />
                                        <span className="text-xs font-mono uppercase tracking-wide">Tradeoffs Accepted</span>
                                    </div>
                                    <ul className="space-y-3">
                                        {project.caseStudy.details.tradeoffs.map((t, i) => (
                                            <li key={i} className="text-sm text-[rgb(var(--text-secondary-rgb))] list-disc list-inside">
                                                {t}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        </div>

                        {/* RIGHT COLUMN: Sticky Metrics & Links */}
                        <div className="hidden lg:block">
                            <div className="sticky top-0 space-y-8">
                                {/* Links */}
                                <div className="flex gap-4">
                                    <a href={project.githubUrl} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-3 bg-[rgb(var(--text-primary-rgb))] text-[rgb(var(--bg-primary-rgb))] font-mono text-sm font-bold hover:opacity-90 transition-opacity">
                                        <FiGithub /> Source
                                    </a>
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-3 border border-[rgb(var(--border-color-rgb))] text-[rgb(var(--text-primary-rgb))] font-mono text-sm hover:bg-[rgb(var(--card-rgb))] transition-colors">
                                            <FiExternalLink /> Live
                                        </a>
                                    )}
                                </div>

                                {/* Metrics */}
                                <div className="bg-[rgb(var(--card-rgb))] p-6 border border-[rgb(var(--border-color-rgb))]">
                                    <h5 className="text-xs font-mono text-[rgb(var(--text-secondary-rgb))] uppercase mb-4">Key Metrics</h5>
                                    <div className="space-y-6">
                                        {project.caseStudy.metrics.map((m, i) => (
                                            <div key={i}>
                                                <div className="text-3xl font-light text-[rgb(var(--text-primary-rgb))]">{m.value}</div>
                                                <div className="text-xs text-[rgb(var(--text-secondary-rgb))] font-mono mt-1">{m.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* ASCII Arch Diagram Fallback (if no image) */}
                                <div className="p-4 bg-black border border-[rgb(var(--border-color-rgb))] font-mono text-[10px] leading-tight text-[rgb(var(--text-secondary-rgb))] overflow-hidden whitespace-pre opacity-60">
                                    {project.caseStudy.architectureDiagram}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default FocusMode;