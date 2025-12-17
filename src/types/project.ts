import { Node, Edge } from '@xyflow/react';

export interface Project {
    id: number;
    title: string;
    problem: string;
    techStack: string[];
    tags: string[];
    githubUrl: string;
    architecture: {
        nodes: Node[];
        edges: Edge[];
    };
    caseStudy: CaseStudy;
}

export interface CaseStudy {
    category: string;
    metrics: Metric[];
    challenge: string;
    solution: string;
    architectureDiagram: string;
}

export interface Metric {
    value: string;
    label: string;
}
