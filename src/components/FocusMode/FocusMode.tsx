import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Project } from '../../types/project';

interface FocusModeProps {
    project: Project | null;
    onClose: () => void;
}

const FocusMode = ({ project, onClose }: FocusModeProps) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && project) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [project, onClose]);

    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [project]);

    const contentVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (delay: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: delay * 0.08,
                ease: 'easeOut' as const,
            },
        }),
    };

    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 w-full h-full bg-[rgb(var(--bg-primary-rgb))] z-100 overflow-y-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <button
                    className="fixed top-8 right-8 px-4 py-2 border border-[rgb(var(--border-color-rgb))] bg-[rgb(var(--bg-primary-rgb))] z-101 transition-colors hover:bg-[rgb(var(--card-rgb))] font-mono text-sm"
                    onClick={onClose}
                >
                    CLOSE [ESC]
                </button>
                <div className="max-w-[720px] mx-auto px-8 py-24 pb-40">
                    <motion.h1
                        className="mb-2 text-[rgb(var(--text-primary-rgb))]"
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={contentVariants}
                    >
                        {project.title}
                    </motion.h1>
                    <motion.div
                        className="mb-16 flex gap-8 text-[rgb(var(--text-secondary-rgb))] text-sm font-mono"
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={contentVariants}
                    >
                        <span>{project.caseStudy.category}</span>
                        <a
                            href={project.githubUrl}
                            className="text-[rgb(var(--accent-rgb))] ml-auto"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Repo ↗
                        </a>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 gap-8 mb-16 p-8 bg-[rgb(var(--card-rgb))] border border-[rgb(var(--border-color-rgb))]"
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={contentVariants}
                    >
                        {project.caseStudy.metrics.map((metric, index) => (
                            <div key={index}>
                                <strong className="block text-2xl text-[rgb(var(--text-primary-rgb))] mb-2">{metric.value}</strong>
                                <span className="text-sm text-[rgb(var(--text-secondary-rgb))] font-mono">{metric.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="mb-16"
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={contentVariants}
                    >
                        <h3 className="text-[rgb(var(--accent-rgb))] font-mono text-xs mb-6 uppercase">Challenge</h3>
                        <p className="text-[rgb(var(--text-secondary-rgb))]">{project.caseStudy.challenge}</p>
                    </motion.div>

                    <motion.div
                        className="mb-16"
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={contentVariants}
                    >
                        <h3 className="text-[rgb(var(--accent-rgb))] font-mono text-xs mb-6 uppercase">Solution Strategy</h3>
                        <p className="text-[rgb(var(--text-secondary-rgb))]">{project.caseStudy.solution}</p>
                    </motion.div>

                    <motion.div
                        className="mb-16"
                        custom={3}
                        initial="hidden"
                        animate="visible"
                        variants={contentVariants}
                    >
                        <h3 className="text-[rgb(var(--accent-rgb))] font-mono text-xs mb-6 uppercase">System Architecture</h3>
                        <div className="arch-diagram">{project.caseStudy.architectureDiagram}</div>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default FocusMode;
