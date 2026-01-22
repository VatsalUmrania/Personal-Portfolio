import type { Project } from '../types/project';

export const projectsData: Project[] = [
    {
        tag: "AI Platform",
        title: "Vibe — AI Web Application Builder",
        date: "Jul - Oct 2025",
        description: "Converts natural language prompts into deployable Next.js applications with real-time preview and virtual file system. Implements sandboxed remote code execution via E2B and orchestrates multi-step AI workflows using Inngest for durable, long-running task handling. Backend is fully type-safe with tRPC and Prisma, with Clerk handling authentication.",
        tech: ["Next.js", "TypeScript", "tRPC", "Prisma", "Inngest", "E2B", "Clerk Auth"],
        link: "https://github.com/VatsalUmrania",
        side: "right",
        icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    },
    {
        tag: "Blockchain",
        title: "Blockchain Document Verification Platform",
        date: "Jun - Sep 2025",
        description: "Decentralized platform for tamper-proof document validation using Ethereum smart contracts. Solidity contracts handle on-chain verification with MetaMask wallet integration. MongoDB backend scales to handle concurrent verification requests with optimized document indexing.",
        tech: ["React", "Web3.js", "Solidity", "MetaMask", "MongoDB"],
        link: "https://github.com/VatsalUmrania",
        side: "left",
        icon: "M7 11V7a5 5 0 0 1 10 0v4"
    },
    {
        tag: "Real-time",
        title: "CollabIDE — Real-Time Collaborative Code Editor",
        date: "Dec 2024 - Feb 2025",
        description: "Real-time collaborative code editor achieving sub-200ms synchronization using Socket.IO bidirectional communication. Implements OAuth + JWT authentication with role-based access control via Prisma and PostgreSQL. Monaco Editor integration provides multi-language syntax highlighting with live presence indicators.",
        tech: ["React", "Socket.IO", "Node.js", "PostgreSQL", "Prisma", "Monaco Editor", "JWT"],
        link: "https://github.com/VatsalUmrania",
        side: "right",
        icon: "M16 18 L22 12 L16 6"
    }
];
