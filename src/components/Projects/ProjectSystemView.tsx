import { motion } from 'framer-motion';
import { Project } from '../../types/project';
import { FiAlertTriangle, FiCheckCircle, FiXCircle, FiGithub, FiExternalLink, FiCpu, FiDatabase, FiGlobe, FiLayers, FiCloud, FiTerminal } from 'react-icons/fi';
import { IconType } from 'react-icons';

const getIconForNode = (label: string): IconType => {
    const lowerLabel = label.toLowerCase();
    if (lowerLabel.includes('llm') || lowerLabel.includes('ai')) return FiCpu;
    if (lowerLabel.includes('db') || lowerLabel.includes('mongo')) return FiDatabase;
    if (lowerLabel.includes('user')) return FiGlobe;
    if (lowerLabel.includes('sandbox') || lowerLabel.includes('vm')) return FiTerminal;
    if (lowerLabel.includes('contract') || lowerLabel.includes('blockchain')) return FiLayers;
    return FiCloud;
};

const ProjectSystemView = ({ project }: { project: Project }) => {
    const renderArchitectureDiagram = () => {
        const { nodes, edges } = project.architecture;

        return (
            <div className="bg-surface/50 border border-border-color rounded-sm p-6 mb-8">
                <h4 className="text-sm font-medium text-text-primary mb-4">System Architecture</h4>
                <div className="relative">
                    <svg className="w-full h-64" viewBox="0 0 800 250">
                        <defs>
                            <marker id={`arrowhead-${project.id}`} markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#647a96" />
                            </marker>
                        </defs>

                        {edges.map((edge) => {
                            const source = nodes.find(n => n.id === edge.source);
                            const target = nodes.find(n => n.id === edge.target);
                            if (!source || !target) return null;

                            const startX = source.position.x + 400;
                            const startY = source.position.y + 40;
                            const endX = target.position.x + 400;
                            const endY = target.position.y + 40;

                            return (
                                <motion.path
                                    key={edge.id}
                                    d={`M ${startX} ${startY} Q ${(startX + endX) / 2} ${startY} ${endX} ${endY}`}
                                    stroke="#647a96"
                                    strokeWidth="2"
                                    fill="none"
                                    markerEnd={`url(#arrowhead-${project.id})`}
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                            );
                        })}

                        {nodes.map((node) => {
                            const Icon = getIconForNode(String(node.data.label));
                            const x = node.position.x + 400;
                            const y = node.position.y;

                            return (
                                <g key={node.id}>
                                    <motion.rect
                                        x={x - 60}
                                        y={y}
                                        width={120}
                                        height={80}
                                        rx={8}
                                        fill="#14171c"
                                        stroke="#242830"
                                        strokeWidth="2"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                    />
                                    <foreignObject x={x - 50} y={y + 10} width={100} height={60}>
                                        <div className="flex flex-col items-center justify-center h-full text-center">
                                            <Icon size={24} className="text-accent mb-2" />
                                            <span className="text-xs text-text-primary font-medium">
                                                {String(node.data.label)}
                                            </span>
                                        </div>
                                    </foreignObject>
                                </g>
                            );
                        })}
                    </svg>
                </div>
            </div>
        );
    };

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

                {/* Architecture Diagram */}
                {renderArchitectureDiagram()}

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