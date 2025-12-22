import { motion } from 'framer-motion';
import { siteConfig } from '../../data/site';

const Hero = ({ onScrollToProjects }: { onScrollToProjects: () => void }) => {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12 max-w-350 mx-auto pt-20">
            {/* Header: Name & Role - purely functional */}
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-between items-end border-b border-border-subtle pb-6 mb-16"
            >
                <h1 className="text-sm font-mono text-text-secondary tracking-widest uppercase">
                    {siteConfig.name}
                </h1>
                <span className="text-sm font-mono text-text-tertiary">
                    Based in Mumbai • IST
                </span>
            </motion.div>

            {/* Main Statement */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <motion.div 
                    className="lg:col-span-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                >
                    <h2 className="text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] text-text-primary mb-8 text-balance">
                        Building scalable <span className="text-text-secondary">distributed systems</span> & <span className="text-text-secondary">type-safe</span> architectures.
                    </h2>
                </motion.div>

                {/* Description & CTA */}
                <motion.div 
                    className="lg:col-span-4 flex flex-col justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <p className="text-lg text-text-secondary leading-relaxed mb-12">
                        I engineer heavy-lifting web applications. My work prioritizes system resilience, predictability, and "boring" code that survives production at scale.
                    </p>
                    
                    <div className="flex gap-8 font-mono text-sm">
                        <button 
                            onClick={onScrollToProjects}
                            className="text-text-primary border-b border-transparent hover:border-text-primary transition-colors pb-0.5"
                        >
                            ↓ Selected Work
                        </button>
                        <a 
                            href={siteConfig.contact.github} 
                            target="_blank"
                            className="text-text-tertiary hover:text-text-primary transition-colors"
                        >
                            GitHub ↗
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;