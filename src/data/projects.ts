import { Project } from '../types/project';

export const projects: Project[] = [
    {
        id: 1,
        title: 'Vibe AI Builder',
        problem: 'Converting natural language prompts into deployable Next.js apps with real-time preview.',
        techStack: ['Next.js', 'tRPC', 'Inngest', 'E2B'],
        tags: ['nextjs', 'ai', 'trpc', 'cloud'],
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
            category: 'AI Engineering',
            metrics: [
                { value: 'Secure', label: 'Sandboxed Execution' },
                { value: 'Durable', label: 'Multi-step Workflows' },
            ],
            challenge:
                'Generating functional, deployable code from natural language is complex. It requires not just LLM prompts, but a secure environment to execute code, handle file systems, and manage long-running tasks without timeouts.',
            solution:
                'Built a platform using E2B for secure remote code execution and Inngest to orchestrate durable AI workflows. The backend ensures full type safety via tRPC and Prisma, while Clerk handles validated authentication.',
            architectureDiagram: `[User Prompt]
    ↓
[Next.js App Router] --(tRPC)--> [Inngest Workflow]
                                      |
                                  (Orchestration)
                                      |
                                      v
                                [E2B Sandbox]
                                (Code Execution & Preview)`,
        },
    },
    {
        id: 2,
        title: 'Blockchain Based Verification System',
        problem: 'Decentralized document verification to prevent tampering and eliminate centralized intermediaries.',
        techStack: ['Solidity', 'Web3.js', 'React', 'MongoDB'],
        tags: ['blockchain', 'react', 'solidity', 'web3'],
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
                { value: '100+', label: 'Concurrent Users' },
            ],
            challenge:
                'Traditional document verification is slow, prone to tampering, and relies on centralized authorities. A trustless, immutable solution was needed to validate authenticity efficiently.',
            solution:
                'Developed a dApp using React and Web3.js that interacts with custom Solidity smart contracts. The system anchors document hashes to the blockchain for tamper-proof validation, backed by a scalable MongoDB backend.',
            architectureDiagram: `[Document Upload]
    ↓
[React Client] --(Web3.js)--> [MetaMask]
                                   |
                                (Sign Tx)
                                   |
                                   v
                            [Smart Contract]
                            (Store Hash on Chain)`,
        },
    },
    {
        id: 3,
        title: 'CollabIDE',
        problem: 'Enabling real-time collaborative code editing with low latency synchronization.',
        techStack: ['Socket.IO', 'Monaco Editor', 'Prisma', 'PostgreSQL'],
        tags: ['socketio', 'real-time', 'postgres', 'node'],
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
                { value: 'Live', label: 'Presence Indicators' },
            ],
            challenge:
                'Building a code editor that supports multiple users typing simultaneously requires handling concurrency conflicts and maintaining low-latency state synchronization across different clients.',
            solution:
                'Implemented a WebSocket server using Socket.IO to broadcast operational transforms. Integrated Monaco Editor for a VS Code-like experience and secured the platform with OAuth + JWT role-based access.',
            architectureDiagram: `[User Typing]
    ↓
[Monaco Editor] --(Socket Event)--> [Node.js Server]
                                         |
                                     (Broadcast)
                                         |
                                         v
                                  [Connected Peers]`,
        },
    },
];
