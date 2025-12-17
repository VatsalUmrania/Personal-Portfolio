import { SkillGroup } from '../types/skill';

export const skillGroups: SkillGroup[] = [
    {
        category: 'Languages & Core',
        hint: 'Hover to filter work',
        skills: [
            { name: 'JavaScript (ES6+)', filterTag: 'react' },
            { name: 'TypeScript', filterTag: 'node' },
            { name: 'Python', filterTag: 'ai' },
            { name: 'Solidity', filterTag: 'blockchain' },
        ],
    },
    {
        category: 'Web Stack',
        hint: 'Hover to filter work',
        skills: [
            { name: 'React / Next.js', filterTag: 'nextjs' },
            { name: 'Node.js / Express', filterTag: 'node' },
            { name: 'tRPC', filterTag: 'trpc' },
            { name: 'Tailwind CSS', filterTag: 'real-time' },
        ],
    },
    {
        category: 'Cloud & Databases',
        hint: 'Hover to filter work',
        skills: [
            { name: 'AWS (EC2, S3) / Docker', filterTag: 'cloud' },
            { name: 'PostgreSQL / Prisma', filterTag: 'node' },
            { name: 'MongoDB / Redis', filterTag: 'blockchain' },
            { name: 'Inngest / CI/CD', filterTag: 'ai' },
        ],
    },
];
