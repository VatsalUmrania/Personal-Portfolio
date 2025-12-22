import { motion } from 'framer-motion';
import { siteConfig } from '../../data/site';

const Hero = () => {
    return (
        <section className="min-h-[60vh] flex flex-col justify-center items-start px-container-x max-w-350 mx-auto pt-32 pb-16">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full border-l-2 border-accent pl-6"
            >
                <div className="font-mono text-xs text-accent mb-4 tracking-wider">
                    [ RFC-2025 // VATSAL UMRANIA ]
                </div>
                
                <h1 className="text-4xl md:text-6xl font-medium leading-tight mb-8 text-text-primary max-w-4xl">
                    Building scalable full-stack applications & distributed systems.
                </h1>

                <p className="text-lg text-text-muted max-w-2xl leading-relaxed mb-8">
                    Focused on type-safe architectures, AI integrations, and decentralized verification platforms. 
                    Prioritizing boring code, predictable state, and observability.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-xs text-text-muted border-t border-border-color pt-8 w-full max-w-3xl">
                    <div>
                        <span className="block text-accent mb-1">LOCATION</span>
                        Mumbai, IN
                    </div>
                    <div>
                        <span className="block text-accent mb-1">STATUS</span>
                        Open to Work
                    </div>
                    <div>
                        <span className="block text-accent mb-1">CORE STACK</span>
                        Next.js / Solidity
                    </div>
                    <div>
                        <span className="block text-accent mb-1">CONTACT</span>
                        <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-text-primary transition-colors underline decoration-dotted underline-offset-4">
                            Email ↗
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;