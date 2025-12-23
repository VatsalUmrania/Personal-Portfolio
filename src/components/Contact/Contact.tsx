import { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../data/site';
import { FiArrowUpRight, FiMail, FiGithub, FiLinkedin, FiCheck, FiCopy } from 'react-icons/fi';

const Contact = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-full min-h-75 bg-surface border border-border-color p-8 rounded-xl flex flex-col"
        >
            <div className="mb-8">
                <h2 className="text-2xl font-medium text-text-primary mb-2">
                    Get in Touch
                </h2>
                <p className="text-sm text-text-muted max-w-sm">
                    Open for engineering contracts and collaboration.
                </p>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-2 border-t border-border-color pt-6">
                <EmailContactLink 
                    email={siteConfig.contact.email}
                />
                <ContactLink 
                    icon={FiGithub}
                    label="GitHub" 
                    value="VatsalUmrania" 
                    href={siteConfig.contact.github} 
                />
                <ContactLink 
                    icon={FiLinkedin}
                    label="LinkedIn" 
                    value="vatsal-umrania" 
                    href={siteConfig.contact.linkedin} 
                />
            </div>
        </motion.div>
    );
};

const EmailContactLink = ({ email }: { email: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="flex items-center justify-between p-3 rounded-md border border-transparent hover:border-border-color hover:bg-white/5 transition-all group w-full text-left"
        >
            <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${copied ? 'text-accent' : 'text-text-muted group-hover:text-accent'}`}>
                    {copied ? <FiCheck size={18} /> : <FiMail size={18} />}
                </div>
                <div>
                    <div className="text-xs text-text-muted mb-0.5">
                        Email
                    </div>
                    <div className="text-sm text-text-primary">
                        {copied ? "Copied to clipboard!" : email}
                    </div>
                </div>
            </div>
            <div className={`text-text-muted transition-colors ${copied ? 'text-accent' : 'group-hover:text-accent'}`}>
                {copied ? <FiCheck /> : <FiCopy />}
            </div>
        </button>
    );
};

const ContactLink = ({ icon: Icon, label, value, href }: any) => (
    <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between p-3 rounded-md border border-transparent hover:border-border-color hover:bg-white/5 transition-all group"
    >
        <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded flex items-center justify-center text-text-muted group-hover:text-accent transition-colors">
                <Icon size={18} />
            </div>
            <div>
                <div className="text-xs text-text-muted mb-0.5">
                    {label}
                </div>
                <div className="text-sm text-text-primary">
                    {value}
                </div>
            </div>
        </div>
        <FiArrowUpRight className="text-text-muted group-hover:text-accent transition-colors" />
    </a>
);

export default Contact;