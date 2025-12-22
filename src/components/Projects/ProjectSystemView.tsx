import { motion } from 'framer-motion';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Project } from '../../types/project';
import { FiAlertTriangle, FiCheckCircle, FiXCircle } from 'react-icons/fi';

// Variants for staggered entry of internal content
const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVars = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
};

const ProjectSystemView = ({ project }: { project: Project }) => {
    return (
        <motion.div 
            variants={containerVars}
            initial="hidden"
            animate="show"
            className="p-6 md:p-12 border-t border-dashed border-border-color grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12"
        >
            {/* LEFT COLUMN: CONTEXT & METRICS */}
            <div className="space-y-12">
                {/* Metrics Cards */}
                <div className="grid grid-cols-2 gap-4">
                    {project.caseStudy.metrics.map((m, i) => (
                        <motion.div variants={itemVars} key={i} className="p-4 border border-border-color bg-surface/50">
                            <div className="text-xs font-mono text-text-muted mb-2 uppercase">{m.label}</div>
                            <div className="text-xl font-medium text-text-primary font-mono">{m.value}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Constraints List */}
                <motion.div variants={itemVars}>
                    <h4 className="font-mono text-xs text-accent mb-4 uppercase tracking-wider">System Constraints</h4>
                    <ul className="space-y-3">
                        {project.caseStudy.details.constraints.map((c, i) => (
                            <li key={i} className="flex gap-3 text-sm text-text-muted items-start">
                                <FiAlertTriangle className="text-warning shrink-0 mt-0.5" size={14} />
                                <span className="leading-relaxed">{c}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
                
                {/* Action Links */}
                <motion.div variants={itemVars} className="flex flex-col gap-3 font-mono text-xs pt-4 border-t border-dashed border-border-color">
                    <a href={project.githubUrl} target="_blank" className="hover:text-accent transition-colors">
                        [ VIEW_SOURCE_CODE ]
                    </a>
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" className="hover:text-accent transition-colors">
                            [ OPEN_DEPLOYMENT ]
                        </a>
                    )}
                </motion.div>
            </div>

            {/* RIGHT COLUMN: ARCHITECTURE */}
            <div className="space-y-12 min-w-0">
                
                {/* ReactFlow Diagram Wrapper */}
                <motion.div 
                    variants={itemVars}
                    className="h-80 w-full border border-border-color bg-bg-primary relative rounded-sm overflow-hidden group"
                >
                    <div className="absolute top-3 left-3 z-10 font-mono text-xs text-text-muted bg-bg-primary px-2 py-1 border border-border-color">
                        FIG 1.0 - SYSTEM ARCHITECTURE
                    </div>
                    
                    {/* ReactFlow Component */}
                    <ReactFlow
                        nodes={project.architecture.nodes}
                        edges={project.architecture.edges}
                        fitView
                        colorMode="dark"
                        proOptions={{ hideAttribution: true }}
                        nodesConnectable={false}
                        nodesDraggable={false}
                        zoomOnScroll={false}
                        panOnDrag={true}
                    >
                        <Background gap={24} size={1} color="#1f2229" />
                        <Controls showInteractive={false} className="bg-surface! border-border-color!" />
                    </ReactFlow>
                </motion.div>

                {/* Technical Decisions */}
                <motion.div variants={itemVars} className="space-y-6">
                    <h4 className="font-mono text-xs text-accent uppercase border-b border-border-color pb-2">Technical Decisions</h4>
                    {project.caseStudy.details.technicalDecisions.map((dec, i) => (
                        <div key={i} className="pl-4 border-l-2 border-accent/50 hover:border-accent transition-colors">
                            <h5 className="text-sm font-medium text-text-primary mb-1">{dec.decision}</h5>
                            <p className="text-sm text-text-muted leading-relaxed">{dec.rationale}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Retrospective Grid */}
                <motion.div variants={itemVars} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-error/5 border border-error/20 rounded-sm">
                        <div className="flex items-center gap-2 mb-3 text-error">
                            <FiXCircle size={16} />
                            <span className="font-mono text-xs uppercase tracking-wide">Mistakes</span>
                        </div>
                        <ul className="space-y-2">
                            {project.caseStudy.details.mistakes.map((m, i) => (
                                <li key={i} className="text-sm text-text-muted list-disc list-inside marker:text-error">
                                    {m}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-5 bg-surface border border-border-color rounded-sm">
                        <div className="flex items-center gap-2 mb-3 text-accent">
                            <FiCheckCircle size={16} />
                            <span className="font-mono text-xs uppercase tracking-wide">Tradeoffs</span>
                        </div>
                        <ul className="space-y-2">
                            {project.caseStudy.details.tradeoffs.map((t, i) => (
                                <li key={i} className="text-sm text-text-muted list-disc list-inside marker:text-accent">
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProjectSystemView;