import { SkillGroup } from '../types/skill';
import {
    SiJavascript,
    SiTypescript,
    SiPython,
    SiSolidity,
    SiReact,
    SiNodedotjs,
    SiTrpc,
    SiSocketdotio,
    SiTailwindcss,
    SiAmazonwebservices,
    SiPostgresql,
    SiMongodb,
    SiRedis
} from 'react-icons/si';

export const skillGroups: SkillGroup[] = [
    {
        category: 'Languages & Core',
        skills: [
            { name: 'JavaScript (ES6+)', filterTag: 'react', icon: SiJavascript },
            { name: 'TypeScript', filterTag: 'node', icon: SiTypescript },
            { name: 'Python', filterTag: 'ai', icon: SiPython },
            { name: 'Solidity', filterTag: 'blockchain', icon: SiSolidity },
        ],
    },
    {
        category: 'Web Stack',
        skills: [
            { name: 'React / Next.js', filterTag: 'nextjs', icon: SiReact },
            { name: 'Node.js', filterTag: 'node', icon: SiNodedotjs },
            { name: 'tRPC', filterTag: 'trpc', icon: SiTrpc },
            { name: 'Socket.IO', filterTag: 'socketio', icon: SiSocketdotio },
            { name: 'Tailwind CSS', filterTag: 'react', icon: SiTailwindcss },
        ],
    },
    {
        category: 'Cloud & Databases',
        skills: [
            { name: 'AWS / Docker', filterTag: 'cloud', icon: SiAmazonwebservices },
            { name: 'PostgreSQL / Prisma', filterTag: 'postgres', icon: SiPostgresql },
            { name: 'MongoDB', filterTag: 'blockchain', icon: SiMongodb },
            { name: 'Redis', filterTag: 'real-time', icon: SiRedis },
        ],
    },
];
