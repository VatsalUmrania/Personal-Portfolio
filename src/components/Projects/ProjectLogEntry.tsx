import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../types/project';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import ProjectSystemView from './ProjectSystemView';
import clsx from 'clsx';

interface ProjectLogEntryProps {
    project: Project;
    isExpanded: boolean;
    onToggle: () => void;
    isDimmed: boolean;
}

const ProjectLogEntry = ({ project, isExpanded, onToggle, isDimmed }: ProjectLogEntryProps) => {
    return (
        <div 
            className={clsx(
                "border-b border-border-color transition-opacity duration-300",
                isDimmed ? "opacity-30" : "opacity-100"
            )}
        >
            {/* The Clickable Header Row */}
            <button 
                onClick={onToggle}
                className={clsx(
                    "w-full flex items-center py-6 px-4 md:px-6 cursor-pointer transition-all duration-200 group text-left",
                    isExpanded ? "bg-surface" : "hover:bg-surface"
                )}
            >
                {/* 1. ID Column */}
                <span className="font-mono text-xs text-text-muted w-12 md:w-20 shrink-0">
                    {String(project.id).padStart(2, '0')}
                </span>

                {/* 2. Title & Hook */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 items-center min-w-0">
                    <div className="min-w-0">
                        <h3 className="text-lg font-medium text-text-primary group-hover:text-accent transition-colors truncate">
                            {project.title}
                        </h3>
                    </div>
                    <div className="hidden md:block font-mono text-xs text-text-muted truncate">
                        // {project.subtitle}
                    </div>
                </div>

                {/* 3. Tech Icons (Grayscale) */}
                <div className="hidden lg:flex gap-3 mx-8">
                    {project.techStack.map((tech, i) => (
                        <div key={i} className="text-text-muted opacity-40" title={tech.name}>
                            {tech.icon && <tech.icon size={14} />}
                        </div>
                    ))}
                </div>

                {/* 4. Interaction Indicator */}
                <div className="text-accent opacity-60 group-hover:opacity-100 shrink-0 ml-4">
                    {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                </div>
            </button>

            {/* Expanded Content (The Engineering Report) */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden bg-surface"
                    >
                        <ProjectSystemView project={project} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectLogEntry;