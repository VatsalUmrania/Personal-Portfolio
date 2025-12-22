import { Project } from '../types/project';
import {
    SiNextdotjs,
    SiReact,
    SiSocketdotio,
    SiPrisma,
    SiMongodb,
    SiSolidity,
    SiWeb3Dotjs,
    SiTypescript,
    SiDocker
} from 'react-icons/si';
import { FiCpu, FiCode, FiCloud } from 'react-icons/fi';

export const projects: Project[] = [
    {
        id: 1,
        title: 'Vibe AI Builder',
        subtitle: 'Autonomous React App Generation Engine',
        techStack: [
            { name: 'Next.js 14', icon: SiNextdotjs },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'Inngest', icon: FiCpu },
            { name: 'E2B Sandbox', icon: FiCloud },
        ],
        tags: ['system-design', 'ai-agents', 'infrastructure'],
        githubUrl: 'https://github.com/VatsalUmrania/vibe',
        liveUrl: 'https://vibe-drab-ten.vercel.app/', // Optional: add real link if available
        architecture: {
            nodes: [
                { id: '1', position: { x: 0, y: 0 }, data: { label: 'User Prompt' } },
                { id: '2', position: { x: 0, y: 100 }, data: { label: 'Orchestrator (Inngest)' } },
                { id: '3', position: { x: -100, y: 200 }, data: { label: 'LLM (Context Gen)' } },
                { id: '4', position: { x: 100, y: 200 }, data: { label: 'E2B Sandbox (Linux)' } },
                { id: '5', position: { x: 0, y: 300 }, data: { label: 'Preview URL' }, type: 'output' },
            ],
            edges: [
                { id: 'e1-2', source: '1', target: '2' },
                { id: 'e2-3', source: '2', target: '3' },
                { id: 'e2-4', source: '2', target: '4' },
                { id: 'e4-5', source: '4', target: '5' },
            ],
        },
        caseStudy: {
            category: 'Distributed Systems',
            metrics: [
                { value: '45s', label: 'Avg Gen Time' },
                { value: '100%', label: 'Type Safety' },
            ],
            summary: 'An engine that converts natural language into deployed, interactive Next.js applications in real-time using sandboxed remote execution environments.',
            details: {
                problemStatement: 'LLMs are capable of generating code snippets, but fail at scaffolding full-stack project structures with consistent dependency trees and file systems. Existing solutions hallucinate non-existent imports or time out during package installation.',
                constraints: [
                    'Context Window Limits: Cannot feed entire repo context back to LLM.',
                    'Security: Generated code cannot run on the host server.',
                    'Timeouts: App generation takes longer than Vercel serverless function limits (10s).'
                ],
                technicalDecisions: [
                    {
                        decision: 'Inngest for Orchestration',
                        rationale: 'Replaced standard cron jobs/queues with Inngest step functions. This allowed us to handle long-running LLM chains (up to 5 mins) without managing a raw Redis/BullMQ instance, reducing ops overhead.'
                    },
                    {
                        decision: 'E2B Sandboxes',
                        rationale: 'Needed an ephemeral Linux environment for "npm install" and "npm run dev" that cleans up automatically. Docker-in-Docker was too heavy for the MVP; E2B provided micro-VMs with sub-second boot times.'
                    }
                ],
                tradeoffs: [
                    'Latency vs. Reliability: Using durable workflows adds overhead compared to raw WebSockets, but guarantees completion even if the edge function crashes.',
                    'Cost: Sandboxed environments are expensive per-minute compared to simple containerization.'
                ],
                mistakes: [
                    'Initially tried to stream file writes over simple HTTP, leading to partial writes on network failure. Switched to transactional writes.',
                    'Underestimated the cold-start time of sandboxes, resulting in perceived lag. Added a warm-pool strategy to mitigate.'
                ]
            }
        },
    },
    {
        id: 2,
        title: 'VeriChain Platform',
        subtitle: 'Decentralized Identity & Verification',
        techStack: [
            { name: 'Solidity', icon: SiSolidity },
            { name: 'Web3.js', icon: SiWeb3Dotjs },
            { name: 'React', icon: SiReact },
            { name: 'MongoDB', icon: SiMongodb },
        ],
        tags: ['blockchain', 'cryptography', 'web3'],
        githubUrl: 'https://github.com/VatsalUmrania/blockchain-document-verification',
        architecture: {
             nodes: [
                { id: '1', position: { x: 0, y: 0 }, data: { label: 'Client App' } },
                { id: '2', position: { x: 0, y: 100 }, data: { label: 'MetaMask Provider' } },
                { id: '3', position: { x: -100, y: 200 }, data: { label: 'Eth Smart Contract' } },
                { id: '4', position: { x: 100, y: 200 }, data: { label: 'Off-chain DB (Mongo)' } },
            ],
            edges: [
                { id: 'e1-2', source: '1', target: '2' },
                { id: 'e2-3', source: '2', target: '3', label: 'Hash Write' },
                { id: 'e2-4', source: '2', target: '4', label: 'Metadata' },
            ],
        },
        caseStudy: {
            category: 'Decentralized Tech',
            metrics: [
                { value: '~$0.05', label: 'Cost per Tx' },
                { value: '0', label: 'Central Points of Failure' },
            ],
            summary: 'A trustless document verification system that anchors document hashes to the Ethereum blockchain, removing centralized intermediaries.',
            details: {
                problemStatement: 'Traditional document verification relies on slow, centralized authorities that are single points of failure and prone to tampering or database corruption.',
                constraints: [
                    'Gas Costs: Storing full documents on-chain is prohibitively expensive.',
                    'Immutability: Smart contract logic cannot be patched easily once deployed.',
                ],
                technicalDecisions: [
                    {
                        decision: 'Hybrid Storage Model',
                        rationale: 'We only store the cryptographic hash (SHA-256) on-chain for immutability, while keeping the actual document metadata in MongoDB for fast, free queries.'
                    },
                    {
                        decision: 'Event Logs for Data Retrieval',
                        rationale: 'Instead of storing array history in contract state (expensive), we emit Events and query them from the frontend to reconstruct history cheaply.'
                    }
                ],
                tradeoffs: [
                    'Finality Speed: Users must wait for block confirmations (~12s) unlike instant centralized DB writes.',
                    'Privacy: All verification transactions are publicly visible on the ledger.'
                ],
                mistakes: [
                    'Originally implemented a linear search in the smart contract which caused Out of Gas errors on large datasets. Refactored to O(1) mappings.'
                ]
            }
        },
    },
    {
        id: 3,
        title: 'CollabIDE',
        subtitle: 'Real-Time Conflict Resolution Engine',
        techStack: [
            { name: 'Socket.IO', icon: SiSocketdotio },
            { name: 'Docker', icon: SiDocker },
            { name: 'Prisma', icon: SiPrisma },
            { name: 'PostgreSQL', icon: FiCode }, // Fallback icon
        ],
        tags: ['real-time', 'websockets', 'concurrency'],
        githubUrl: 'https://github.com/VatsalUmrania/collabide',
        architecture: {
             nodes: [
                { id: '1', position: { x: 0, y: 0 }, data: { label: 'User A' } },
                { id: '2', position: { x: 200, y: 0 }, data: { label: 'User B' } },
                { id: '3', position: { x: 100, y: 100 }, data: { label: 'WebSocket Server' } },
                { id: '4', position: { x: 100, y: 200 }, data: { label: 'Redis (Pub/Sub)' } },
            ],
            edges: [
                { id: 'e1-3', source: '1', target: '3' },
                { id: 'e2-3', source: '2', target: '3' },
                { id: 'e3-4', source: '3', target: '4' },
            ],
        },
        caseStudy: {
            category: 'Real-Time Systems',
            metrics: [
                { value: '<50ms', label: 'Broadcast Latency' },
                { value: 'Live', label: 'Presence Sync' },
            ],
            summary: 'A browser-based IDE enabling multiple developers to edit the same file simultaneously with conflict resolution and presence detection.',
            details: {
                problemStatement: 'Building a collaborative editor requires managing distributed state where multiple users send conflicting updates simultaneously, leading to race conditions.',
                constraints: [
                    'Latency: Updates must feel instant (<100ms) to prevent "typing in mud" feel.',
                    'Consistency: All clients must eventually converge to the same state.',
                ],
                technicalDecisions: [
                    {
                        decision: 'Socket.IO Rooms',
                        rationale: 'Utilized Socket.IO namespaces to isolate project sessions, preventing event broadcasting noise across different active documents.'
                    },
                    {
                        decision: 'Operational Transforms (Lite)',
                        rationale: 'Instead of full OT/CRDT complexity (too heavy for MVP), we used a "Last-Write-Wins" strategy with field locking for simplicity.'
                    }
                ],
                tradeoffs: [
                    'Complexity: Stateful WebSockets require sticky sessions or a Redis adapter for scaling.',
                    'Offline Support: Currently relies on constant connection; no local-first implementation yet.'
                ],
                mistakes: [
                    'Failed to handle "ghost cursors" initially—when a user hard-refreshed, their previous cursor remained. Added heartbeat checks to clean up stale connections.'
                ]
            }
        },
    },
];