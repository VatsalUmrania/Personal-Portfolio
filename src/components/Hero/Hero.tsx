import { motion } from 'framer-motion';

// Animation variants
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
};

const Hero = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center px-container-x pt-32 pb-16 relative overflow-hidden">
            {/* Background Grid Decoration */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2229_1px,transparent_1px),linear-gradient(to_bottom,#1f2229_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full border-l-2 border-accent/50 pl-6 md:pl-12 relative z-10"
            >
                <motion.div variants={item} className="font-mono text-xs text-accent mb-6 tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full animate-ping" />
                    INITIALIZING: VATSAL UMRANIA 
                </motion.div>
                
                <motion.h1 variants={item} className="text-4xl md:text-7xl font-medium leading-tight mb-8 text-text-primary max-w-5xl">
                    <span className="block text-text-muted text-2xl md:text-3xl mb-2 font-mono">
                        &gt; role: full-stack engineer | systems-focused
                    </span>
                    I build scalable distributed<br />
                    systems & <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-white">intelligent agents.</span>
                </motion.h1>

                <motion.p variants={item} className="text-lg text-text-muted max-w-2xl leading-relaxed mb-12 border-l border-border-color pl-4">
                    I design and ship production-grade systems — from frontend architecture to backend orchestration and AI-driven workflows.
                    Focused on <span className="text-accent">observability</span> and <span className="text-accent">deterministic state</span>.
                </motion.p>

                <motion.div variants={item} className="flex gap-4">
                     <a href="#projects" className="bg-surface border border-border-color px-6 py-3 font-mono text-xs hover:bg-accent hover:text-bg-primary hover:border-accent transition-all duration-300">
                        VIEW SYSTEM LOGS
                     </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;