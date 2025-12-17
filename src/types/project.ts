import { Node, Edge } from '@xyflow/react';
import { IconType } from 'react-icons';

export interface TechStackItem {
    name: string;
    icon?: IconType;
}

export interface Project {
    id: number;
    title: string;
    problem: string;
    techStack: TechStackItem[];
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
