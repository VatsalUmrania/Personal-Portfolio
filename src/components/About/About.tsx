import { motion } from 'framer-motion';
import { siteConfig } from '../../data/site';
import profileImg from '../../../assests/photo1.jpg'; // Ensure path is correct

const About = () => {
    return (
        // 1. Outer Container: Centers the card
        <div className="border-r border-border-color p-8 md:p-12 flex items-center justify-center h-full bg-bg-primary/50">
            
            {/* 2. The Physical Card Object */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-lg bg-[#151921] border border-white/10 p-8 rounded-xl shadow-2xl overflow-hidden group hover:border-accent/30 transition-colors"
            >

                {/* Card Header: Photo + Info */}
                <div className="flex items-start gap-5 mb-8 relative z-10">
                    <div className="relative shrink-0">
                        {/* Photo Container */}
                        <div className="w-20 h-20 rounded-md overflow-hidden border border-white/20 grayscale group-hover:grayscale-0 transition-all duration-500">
                            <img 
                                src={profileImg} 
                                alt="Profile" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="pt-1">
                        <span className="font-mono text-[10px] text-accent tracking-widest uppercase block mb-1.5">
                            // PERSONNEL_ID
                        </span>
                        <h3 className="text-xl font-medium text-text-primary leading-none mb-2">
                            {siteConfig.name}
                        </h3>
                        <div className="inline-flex items-center px-2 py-0.5 rounded border border-white/10 bg-white/5 text-[10px] font-mono text-text-muted">
                            LOC: MUMBAI, IN
                        </div>
                    </div>
                </div>

                {/* Bio Content */}
                <div className="text-sm text-text-muted leading-relaxed space-y-4 relative z-10 font-sans border-t border-dashed border-white/10 pt-6">
                    {siteConfig.about.map((paragraph, index) => (
                        <p key={index}>
                            {paragraph}
                        </p>
                    ))}
                </div>
                
                {/* Card Footer: Holographic Strip */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-accent/50 to-transparent opacity-50" />
            </motion.div>
        </div>
    );
};

export default About;