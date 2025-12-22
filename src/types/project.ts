import { Node, Edge } from '@xyflow/react';
import { IconType } from 'react-icons';

export interface TechStackItem {
    name: string;
    icon?: IconType;
}

export interface Metric {
    value: string;
    label: string;
}

export interface EngineeringDetails {
    problemStatement: string;
    constraints: string[];
    technicalDecisions: {
        decision: string;
        rationale: string;
    }[];
    tradeoffs: string[];
    mistakes: string[];
}

export interface CaseStudy {
    category: string;
    metrics: Metric[];
    summary: string;
    details: EngineeringDetails;
}

export interface Project {
    id: number;
    title: string;
    subtitle: string;
    techStack: TechStackItem[];
    tags: string[];
    githubUrl: string;
    liveUrl?: string;
    architecture: {
        nodes: Node[];
        edges: Edge[];
    };
    caseStudy: CaseStudy;
}