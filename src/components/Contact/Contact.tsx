import { siteConfig } from '../../data/site';
import { FiCommand, FiArrowUpRight } from 'react-icons/fi';

const Contact = () => {
    return (
        <div className="p-12 md:p-24 flex flex-col justify-between h-full bg-surface/30 relative group overflow-hidden">
            {/* Background Scanline Effect */}
            <div className="absolute inset-0 bg-repeat-y opacity-[0.03] pointer-events-none bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAADCAYAAAbsjH1UAAAAFklEQVQoz2NgYGD4zwABMJYGwkAAAAAASUVORK5CYII=')] bg-size-[100%_4px]" />

            <div>
                <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-8 items-center gap-2">
                    <FiCommand /> ESTABLISH UPLINK
                </span>
                
                <h2 className="text-3xl font-medium text-text-primary mb-8">
                    Ready to collaborate?
                </h2>

                <div className="font-mono text-sm space-y-4">
                    <TerminalLink 
                        label="EXECUTE_MAIL_CJIENT" 
                        value={siteConfig.contact.email} 
                        href={`mailto:${siteConfig.contact.email}`} 
                    />
                    <TerminalLink 
                        label="OPEN_SOURCE_repo" 
                        value="github.com/VatsalUmrania" 
                        href={siteConfig.contact.github} 
                    />
                    <TerminalLink 
                        label="NETWORK_PROFILE" 
                        value="linkedin.com/in/vatsal-umrania" 
                        href={siteConfig.contact.linkedin} 
                    />
                </div>
            </div>

            <div className="mt-12 pt-12 border-t border-dashed border-border-color font-mono text-xs text-text-muted text-right">
                <span className="inline-block w-2 h-4 bg-accent animate-pulse align-middle mr-2" />
                AWAITING_INPUT...
            </div>
        </div>
    );
};

const TerminalLink = ({ label, value, href }: { label: string, value: string, href: string }) => (
    <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 text-text-muted hover:text-accent hover:bg-white/5 p-2 -ml-2 rounded transition-all group/link"
    >
        &gt;<span className="text-xs opacity-50 w-32 shrink-0"> {label}</span>
        <span className="text-text-primary group-hover/link:text-accent transition-colors">{value}</span>
        <FiArrowUpRight className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
    </a>
);

export default Contact;