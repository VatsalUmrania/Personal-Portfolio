export interface Project {
    tag: string;
    title: string;
    date: string;
    description: string;
    tech: string[];
    link: string;
    side: 'left' | 'right';
    icon: string; // SVG path data
}
