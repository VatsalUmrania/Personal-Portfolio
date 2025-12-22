import { Project } from '../types/project';
import {
    SiNextdotjs,
    SiReact,
    SiSocketdotio,
    SiPrisma,
    SiPostgresql,
    SiMongodb,
    SiSolidity,
    SiWeb3Dotjs
} from 'react-icons/si';
import { FiCpu, FiCloud, FiCode, FiDatabase, FiLock, FiGlobe } from 'react-icons/fi';

export const projects: Project[] = [
    {
        id: 1,
        title: 'Vibe AI Builder',
        subtitle: 'Autonomous React App Generation Engine',
        techStack: [
            { name: 'Next.js 14', icon: SiNextdotjs },
            { name: 'tRPC', icon: FiCode },
            { name: 'Inngest', icon: FiCpu },
            { name: 'E2B Sandboxes', icon: FiCloud },
        ],
        tags: ['system-design', 'ai-agents', 'infrastructure'],
        githubUrl: 'https://github.com/VatsalUmrania/vibe',
        architecture: {
            nodes: [
                { id: '1', position: { x: 150, y: 0 }, data: { label: 'User Prompt' }, type: 'input' },
                { id: '2', position: { x: 100, y: 80 }, data: { label: 'tRPC / Inngest' } },
                { id: '3', position: { x: 70, y: 160 }, data: { label: 'LLM Context Gen' } },
                { id: '4', position: { x: 100, y: 240 }, data: { label: 'E2B Sandbox' }, type: 'output' },
            ],
            edges: [
                { id: 'e1-2', source: '1', target: '2', animated: true },
                { id: 'e2-3', source: '2', target: '3', animated: true },
                { id: 'e3-4', source: '3', target: '4', animated: true },
            ],
        },
        caseStudy: {
            category: 'Distributed Systems & AI',
            metrics: [
                { value: '45s', label: 'Avg Gen Time' },
                { value: '100%', label: 'Type Safety' },
            ],
            summary: 'An engine that converts natural language into deployed, interactive Next.js applications in real-time.',
            details: {
                problemStatement: 'LLMs are good at generating code snippets but terrible at scaffolding full-stack project structures with consistent dependency trees and file systems.',
                constraints: [
                    'Context Window Limits: Cannot feed entire repo context back to LLM.',
                    'Security: Generated code cannot run on the host server.',
                    'Timeouts: App generation takes longer than Vercel serverless function limits (10s).'
                ],
                technicalDecisions: [
                    {
                        decision: 'Inngest for Orchestration',
                        rationale: 'Replaced standard cron jobs/queues with Inngest step functions to handle long-running LLM chains without managing Redis directly.'
                    },
                    {
                        decision: 'E2B Sandboxes',
                        rationale: 'Needed an ephemeral Linux environment for "npm install" and "npm run dev" that cleans up automatically, isolating user code execution.'
                    }
                ],
                tradeoffs: [
                    'Latency: Using durable workflows adds overhead compared to raw WebSockets, but guarantees completion.',
                    'Cost: Sandboxed environments are expensive per-minute compared to simple containerization.'
                ],
                mistakes: [
                    'Initially tried to stream file writes over simple HTTP, leading to partial writes on network failure. Switched to transactional writes.'
                ]
            },
            architectureDiagram: `[User Prompt]
    ↓
[Next.js App Router] --(tRPC)--> [Inngest Workflow]
                                       |
                                   (Orchestration)
                                       |
                                       v
                                 [E2B Sandbox]
                                 (Code Execution & Preview)`
        },
    },
    {
        id: 2,
        title: 'VeriChain Platform',
        subtitle: 'Decentralized Identity & Document Verification',
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
                { id: '1', position: { x: 100, y: 0 }, data: { label: 'Client (React/Web3)' }, type: 'input' },
                { id: '2', position: { x: 100, y: 80 }, data: { label: 'MetaMask Wallet' } },
                { id: '3', position: { x: 80, y: 160 }, data: { label: 'Smart Contract' } },
                { id: '4', position: { x: 80, y: 240 }, data: { label: 'Verification Status' }, type: 'output' },
            ],
            edges: [
                { id: 'e1-2', source: '1', target: '2', animated: true },
                { id: 'e2-3', source: '2', target: '3', animated: true },
                { id: 'e3-4', source: '3', target: '4', animated: true },
            ],
        },
        caseStudy: {
            category: 'Decentralized Tech',
            metrics: [
                { value: '70%', label: 'Faster Verification' },
                { value: '$0.00', label: 'Central Infra Cost' },
            ],
            summary: 'A trustless document verification system that anchors document hashes to the Ethereum blockchain, removing centralized intermediaries.',
            details: {
                problemStatement: 'Traditional document verification relies on slow, centralized authorities that are single points of failure and prone to tampering or database corruption.',
                constraints: [
                    'Gas Costs: Storing full documents on-chain is prohibitively expensive.',
                    'Immutability: Smart contract logic cannot be patched easily once deployed.',
                    'User Experience: Non-technical users struggle with wallet interactions.'
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
            },
            architectureDiagram: `[Document Upload]
    ↓
[React Client] --(Web3.js)--> [MetaMask]
                                   |
                                (Sign Tx)
                                   |
                                   v
                            [Smart Contract]
                            (Store Hash on Chain)`
        },
    },
    {
        id: 3,
        title: 'CollabIDE',
        subtitle: 'Real-Time Collaborative Code Editor',
        techStack: [
            { name: 'Socket.IO', icon: SiSocketdotio },
            { name: 'Monaco Editor', icon: FiCode },
            { name: 'Prisma', icon: SiPrisma },
            { name: 'PostgreSQL', icon: SiPostgresql },
        ],
        tags: ['real-time', 'websockets', 'concurrency'],
        githubUrl: 'https://github.com/VatsalUmrania/collabide',
        architecture: {
            nodes: [
                { id: '1', position: { x: 100, y: 0 }, data: { label: 'User Typing' }, type: 'input' },
                { id: '2', position: { x: 100, y: 80 }, data: { label: 'Monaco Editor' } },
                { id: '3', position: { x: 100, y: 160 }, data: { label: 'Node.js Server' } },
                { id: '4', position: { x: 100, y: 240 }, data: { label: 'Connected Peers' }, type: 'output' },
            ],
            edges: [
                { id: 'e1-2', source: '1', target: '2', animated: true },
                { id: 'e2-3', source: '2', target: '3', animated: true },
                { id: 'e3-4', source: '3', target: '4', animated: true },
            ],
        },
        caseStudy: {
            category: 'Real-Time Systems',
            metrics: [
                { value: '<200ms', label: 'Sync Latency' },
                { value: 'Live', label: 'Presence' },
            ],
            summary: 'A browser-based IDE that enables multiple developers to edit the same file simultaneously with conflict resolution and presence detection.',
            details: {
                problemStatement: 'Building a collaborative editor requires managing distributed state where multiple users send conflicting updates simultaneously, leading to race conditions and overwritten code.',
                constraints: [
                    'Latency: Updates must feel instant (<100ms) to prevent "typing in mud" feel.',
                    'Consistency: All clients must eventually converge to the same state.',
                    'Scalability: Socket connections are stateful and difficult to load balance.'
                ],
                technicalDecisions: [
                    {
                        decision: 'Socket.IO Rooms',
                        rationale: 'Utilized Socket.IO namespaces to isolate project sessions, preventing event broadcasting noise across different active documents.'
                    },
                    {
                        decision: 'Monaco Delta Decorations',
                        rationale: 'Instead of full text replacement (which resets scroll position), we broadcast strict operational deltas and apply them using Monaco APIs to preserve cursor state.'
                    }
                ],
                tradeoffs: [
                    'Complexity: Stateful WebSockets require sticky sessions or a Redis adapter for scaling, unlike stateless REST APIs.',
                    'Offline Support: Currently relies on constant connection; no local-first CRDT implementation yet.'
                ],
                mistakes: [
                    'Failed to handle "ghost cursors" initially—when a user hard-refreshed, their previous cursor remained on other screens. Added heartbeat checks to clean up stale connections.'
                ]
            },
            architectureDiagram: `[User Typing]
    ↓
[Monaco Editor]--(Socket Event)--> [Node.js Server]
    |
    (Broadcast)
    |
    v
    [Connected Peers]`
        },
    },
];