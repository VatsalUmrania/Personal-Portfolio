import { siteConfig } from '../../data/site';

const Contact = () => {
    return (
        <div className="p-12 md:p-24 flex flex-col justify-between h-full bg-surface/30">
            <div>
                <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-8">
                    // CONNECT
                </span>
                <h2 className="text-3xl font-medium text-text-primary mb-8">
                    Initiate Handshake
                </h2>
                <div className="flex flex-col gap-4 font-mono text-sm">
                    <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="flex items-center gap-4 text-text-muted hover:text-accent transition-colors group"
                    >
                        <span className="w-2 h-2 bg-text-muted group-hover:bg-accent rounded-full transition-colors" />
                        {siteConfig.contact.email}
                    </a>
                    <a
                        href={siteConfig.contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-text-muted hover:text-accent transition-colors group"
                    >
                        <span className="w-2 h-2 bg-text-muted group-hover:bg-accent rounded-full transition-colors" />
                        github.com/VatsalUmrania
                    </a>
                    <a
                        href={siteConfig.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-text-muted hover:text-accent transition-colors group"
                    >
                        <span className="w-2 h-2 bg-text-muted group-hover:bg-accent rounded-full transition-colors" />
                        linkedin.com/in/vatsal-umrania
                    </a>
                </div>
            </div>

            <div className="mt-12 pt-12 border-t border-dashed border-border-color font-mono text-xs text-text-muted text-right">
                <span className="block mb-1">SYSTEM STATUS</span>
                All Systems Operational
            </div>
        </div>
    );
};

export default Contact;