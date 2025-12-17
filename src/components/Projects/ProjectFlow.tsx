import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Project } from '../../types/project';

interface ProjectFlowProps {
    project: Project;
}

const ProjectFlow = ({ project }: ProjectFlowProps) => {
    return (
        <div style={{ height: '300px', width: '100%' }}>
            <ReactFlow
                nodes={project.architecture.nodes}
                edges={project.architecture.edges}
                fitView
                nodesDraggable={false}
                nodesConnectable={false}
                elementsSelectable={false}
                zoomOnScroll={false}
                panOnDrag={false}
                attributionPosition="bottom-right"
            >
                <Background />
                <Controls showInteractive={false} />
            </ReactFlow>
        </div>
    );
};

export default ProjectFlow;
