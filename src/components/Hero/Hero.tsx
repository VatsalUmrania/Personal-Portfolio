import { motion } from 'framer-motion';
import { siteConfig } from '../../data/site';

interface HeroProps {
    onScrollToProjects: () => void;
}

const Hero = ({ onScrollToProjects }: HeroProps) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 16 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
            },
        },
    };

    return (
        <motion.section
            className="h-[85vh] flex flex-col justify-center items-start px-container-x max-w-[1600px] mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.span
                className="mb-8 block font-mono text-sm text-[rgb(var(--accent-rgb))]"
                variants={itemVariants}
            >
                {siteConfig.role}
            </motion.span>
            <motion.h1 variants={itemVariants}>
                {siteConfig.headline.split('\n').map((line, i) => (
                    <span key={i}>
                        {line}
                        {i === 0 && <br />}
                    </span>
                ))}
            </motion.h1>
            <motion.p
                className="mt-8 text-lg text-[rgb(var(--text-secondary-rgb))] border-l border-[rgb(var(--border-color-rgb))] pl-6"
                variants={itemVariants}
            >
                {siteConfig.valueProposition}
            </motion.p>
            <motion.div className="mt-16 flex gap-10 font-mono text-sm" variants={itemVariants}>
                <button
                    className="text-[rgb(var(--text-secondary-rgb))] transition-colors hover:text-[rgb(var(--text-primary-rgb))] hover:underline underline-offset-4"
                    onClick={onScrollToProjects}
                >
                    Index
                </button>
                <a
                    href={siteConfig.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(var(--text-secondary-rgb))] transition-colors hover:text-[rgb(var(--text-primary-rgb))] hover:underline underline-offset-4"
                >
                    GitHub
                </a>
                <a
                    href={siteConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(var(--text-secondary-rgb))] transition-colors hover:text-[rgb(var(--text-primary-rgb))] hover:underline underline-offset-4"
                >
                    LinkedIn
                </a>
            </motion.div>
        </motion.section>
    );
};

export default Hero;
