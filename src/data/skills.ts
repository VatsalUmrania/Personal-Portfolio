import type { SkillCategory } from '../types/skill';

export const skillsData: SkillCategory[] = [
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
            { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
            { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
            { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
            { name: "GSAP", icon: "https://cdn.simpleicons.org/greensock/88CE02" }
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
            { name: "Express.js", icon: "https://cdn.simpleicons.org/express/000000" },
            { name: "tRPC", icon: "https://cdn.simpleicons.org/trpc/2596BE" },
            { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/2D3748" },
            { name: "WebSockets", icon: "https://cdn.simpleicons.org/socketdotio/010101" }
        ]
    },
    {
        title: "Database",
        skills: [
            { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
            { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
            { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
            { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" }
        ]
    },
    {
        title: "DevOps & Cloud",
        skills: [
            { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
            { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/232F3E" },
            { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000" },
            { name: "CI/CD", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
            { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" }
        ]
    }
];
