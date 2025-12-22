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

// MANDATORY: The "Senior Engineer" fields
export interface EngineeringDetails {
    problemStatement: string; // The specific user pain point
    constraints: string[];    // e.g., "Must run on Edge", "API rate limits"
    technicalDecisions: {
        decision: string;
        rationale: string;    // Why X instead of Y?
    }[];
    tradeoffs: string[];      // What did we sacrifice? (e.g. "Consistency for Availability")
    mistakes: string[];       // Humble-brag: What broke and how you fixed it
}

export interface CaseStudy {
    category: string;
    metrics: Metric[];
    // We merge the old strings into the new structure or keep them for summary
    summary: string; 
    details: EngineeringDetails;
    architectureDiagram?: string; // ASCII or image ref
}

export interface Project {
    id: number;
    title: string;
    subtitle: string; // High-level "hook"
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