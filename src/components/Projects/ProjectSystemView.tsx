import { motion } from 'framer-motion';
import { Project } from '../../types/project';
import { FiAlertTriangle, FiCheckCircle, FiXCircle, FiGithub, FiExternalLink } from 'react-icons/fi';

const itemVars = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
};

const ProjectSystemView = ({ project }: { project: Project }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
            {/* LEFT COLUMN: CONTEXT & METRICS */}
            <div className="space-y-8">
                {/* Metrics */}
                <div className="grid grid-cols-1 gap-4">
                    {project.caseStudy.metrics.map((m, i) => (
                        <div key={i} className="p-4 border border-border-color bg-surface/30 rounded-sm">
                            <div className="text-xs text-text-muted mb-1 uppercase tracking-wide">{m.label}</div>
                            <div className="text-xl font-medium text-text-primary font-mono">{m.value}</div>
                        </div>
                    ))}
                </div>

                {/* Constraints */}
                <div>
                    <h4 className="font-medium text-sm text-text-primary mb-4">Constraints</h4>
                    <ul className="space-y-3">
                        {project.caseStudy.details.constraints.map((c, i) => (
                            <li key={i} className="flex gap-3 text-sm text-text-muted items-start">
                                <FiAlertTriangle className="text-warning shrink-0 mt-0.5" size={14} />
                                <span className="leading-relaxed">{c}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Links */}
                <div className="flex flex-col gap-3 pt-4 border-t border-border-color">
                    <a href={project.githubUrl} target="_blank" className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors">
                        <FiGithub /> Source Code
                    </a>
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors">
                            <FiExternalLink /> Live Deployment
                        </a>
                    )}
                </div>
            </div>

            {/* RIGHT COLUMN: DETAILS */}
            <div className="space-y-12">
                {/* Summary */}
                <div>
                    <h3 className="text-lg font-medium text-text-primary mb-3">Project Overview</h3>
                    <p className="text-text-muted leading-relaxed">
                        {project.caseStudy.summary}
                    </p>
                </div>

                {/* Technical Decisions */}
                <div className="space-y-6">
                    <h3 className="text-lg font-medium text-text-primary border-b border-border-color pb-2">Technical Decisions</h3>
                    {project.caseStudy.details.technicalDecisions.map((dec, i) => (
                        <div key={i} className="pl-4 border-l-2 border-accent/30">
                            <h5 className="text-sm font-semibold text-text-primary mb-1">{dec.decision}</h5>
                            <p className="text-sm text-text-muted leading-relaxed">{dec.rationale}</p>
                        </div>
                    ))}
                </div>

                {/* Retrospective */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-surface/30 border border-border-color rounded-sm">
                        <div className="flex items-center gap-2 mb-3 text-text-primary">
                            <FiCheckCircle size={16} />
                            <span className="text-sm font-medium">Tradeoffs</span>
                        </div>
                        <ul className="space-y-2">
                            {project.caseStudy.details.tradeoffs.map((t, i) => (
                                <li key={i} className="text-sm text-text-muted list-disc list-inside">
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-5 bg-surface/30 border border-border-color rounded-sm">
                        <div className="flex items-center gap-2 mb-3 text-text-primary">
                            <FiXCircle size={16} />
                            <span className="text-sm font-medium">Challenges</span>
                        </div>
                        <ul className="space-y-2">
                            {project.caseStudy.details.mistakes.map((m, i) => (
                                <li key={i} className="text-sm text-text-muted list-disc list-inside">
                                    {m}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSystemView;