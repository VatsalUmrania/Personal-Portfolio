import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
};

const Hero = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center px-container-x pt-32 pb-16 relative overflow-hidden">
            <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full pl-6 md:pl-12 relative z-10"
            >
                <motion.h1 variants={item} className="text-4xl md:text-7xl font-medium leading-tight mb-8 text-text-primary max-w-5xl font-sans">
                    <span className="block text-text-muted text-2xl md:text-3xl mb-4 font-sans font-normal">
                        Full-Stack Engineer
                    </span>
                    I build scalable distributed<br />
                    systems & <span className="text-accent">intelligent agents.</span>
                </motion.h1>

                <motion.p variants={item} className="text-lg text-text-muted max-w-2xl leading-relaxed mb-12">
                    I design and ship production-grade systems — from frontend architecture to backend orchestration and AI-driven workflows.
                    Focused on <span className="text-text-primary">observability</span> and <span className="text-text-primary">deterministic state</span>.
                </motion.p>

                <motion.div variants={item} className="flex gap-4">
                     <a href="#projects" className="bg-surface border border-border-color px-6 py-3 text-sm font-medium hover:bg-accent hover:text-bg-primary hover:border-accent transition-colors duration-200 rounded-sm">
                        View Projects
                     </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;