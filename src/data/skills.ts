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
            { name: 'JavaScript (ES6+)', filterTag: 'react', icon: SiJavascript, proficiency: 95 },
            { name: 'TypeScript', filterTag: 'node', icon: SiTypescript, proficiency: 90 },
            { name: 'Python', filterTag: 'ai', icon: SiPython, proficiency: 75 },
            { name: 'Solidity', filterTag: 'blockchain', icon: SiSolidity, proficiency: 70 },
        ],
    },
    {
        category: 'Web Stack',
        skills: [
            { name: 'React / Next.js', filterTag: 'nextjs', icon: SiReact, proficiency: 95 },
            { name: 'Node.js', filterTag: 'node', icon: SiNodedotjs, proficiency: 90 },
            { name: 'tRPC', filterTag: 'trpc', icon: SiTrpc, proficiency: 80 },
            { name: 'Socket.IO', filterTag: 'socketio', icon: SiSocketdotio, proficiency: 85 },
            { name: 'Tailwind CSS', filterTag: 'react', icon: SiTailwindcss, proficiency: 95 },
        ],
    },
    {
        category: 'Cloud & Databases',
        skills: [
            { name: 'AWS / Docker', filterTag: 'cloud', icon: SiAmazonwebservices, proficiency: 80 },
            { name: 'PostgreSQL / Prisma', filterTag: 'postgres', icon: SiPostgresql, proficiency: 85 },
            { name: 'MongoDB', filterTag: 'blockchain', icon: SiMongodb, proficiency: 85 },
            { name: 'Redis', filterTag: 'real-time', icon: SiRedis, proficiency: 75 },
        ],
    },
];