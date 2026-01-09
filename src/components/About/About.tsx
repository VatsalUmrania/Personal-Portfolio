import { motion } from 'framer-motion';
import { siteConfig } from '../../data/site';
import profileImg from '../../../assests/photo1.jpg';

const About = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-full bg-surface border border-border-color p-8 rounded-xl shadow-2xl overflow-hidden group hover:border-accent/30 transition-colors"
        >
            {/* Header: Photo + Info */}
            <div className="flex items-start gap-6 mb-8 relative z-10">
                <div className="relative shrink-0">
                    {/* Photo Frame */}
                    <div className="w-20 h-20 rounded-md overflow-hidden border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500">
                        <img
                            src={profileImg}
                            alt="Vatsal Umrania - Profile Photo"
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-b from-transparent via-accent/10 to-transparent h-[200%] w-full animate-scanline pointer-events-none" />
                    </div>
                    {/* Status Dot */}
                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-surface rounded-full flex items-center justify-center border border-white/10">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
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
            <div className="text-sm text-text-muted leading-relaxed space-y-4 relative z-10 font-sans border-t border-dashed border-border-color pt-6">
                {siteConfig.about.map((paragraph, index) => (
                    <p key={index}>
                        {paragraph}
                    </p>
                ))}
            </div>
        </motion.div>
    );
};

export default About;