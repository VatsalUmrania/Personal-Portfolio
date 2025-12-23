import { motion } from 'framer-motion';
import { siteConfig } from '../../data/site';
import { FiArrowUpRight, FiTerminal, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }} // Slight stagger
            className="relative w-full h-full min-h-75 bg-surface border border-border-color p-8 rounded-xl shadow-2xl overflow-hidden group hover:border-accent/30 transition-colors flex flex-col"
        >
            {/* Header */}
            <div className="relative z-10 mb-8">
                <span className="font-mono text-[10px] text-accent tracking-widest uppercase mb-2 flex items-center gap-2">
                    <FiTerminal className="animate-pulse" /> UPLINK_qy7
                </span>
                <h2 className="text-2xl font-medium text-text-primary">
                    Initiate Connection
                </h2>
                <p className="text-sm text-text-muted mt-2 max-w-sm">
                    Open for engineering contracts and collaboration.
                </p>
            </div>

            {/* Command Links List */}
            <div className="flex-1 flex flex-col justify-center gap-2 relative z-10 border-t border-dashed border-border-color pt-6">
                <ContactLink 
                    icon={FiMail}
                    label="MAIL_CLIENT" 
                    value={siteConfig.contact.email} 
                    href={`mailto:${siteConfig.contact.email}`} 
                />
                <ContactLink 
                    icon={FiGithub}
                    label="GITHUB_REPO" 
                    value="VatsalUmrania" 
                    href={siteConfig.contact.github} 
                />
                <ContactLink 
                    icon={FiLinkedin}
                    label="LINKEDIN_NET" 
                    value="vatsal-umrania" 
                    href={siteConfig.contact.linkedin} 
                />
            </div>

            {/* Footer Status */}
            <div className="mt-8 pt-4 border-t border-border-color/30 flex justify-between items-center text-[10px] font-mono text-text-muted/60">
                <span>ENCRYPTION: ENABLED</span>
                <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    ONLINE
                </span>
            </div>
        </motion.div>
    );
};

const ContactLink = ({ icon: Icon, label, value, href }: any) => (
    <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between p-3 rounded-md border border-transparent hover:border-border-color hover:bg-white/5 transition-all group/link"
    >
        <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded bg-bg-primary flex items-center justify-center text-text-muted group-hover/link:text-accent transition-colors">
                <Icon size={14} />
            </div>
            <div>
                <div className="font-mono text-[10px] text-accent/50 uppercase tracking-wider mb-0.5">
                    {label}
                </div>
                <div className="text-sm text-text-muted group-hover/link:text-text-primary transition-colors">
                    {value}
                </div>
            </div>
        </div>
        <FiArrowUpRight className="text-text-muted group-hover/link:text-accent opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all duration-300" />
    </a>
);

export default Contact;