import { siteConfig } from '../../data/site';

const About = () => {
    return (
        <div className="border-r border-border-color p-12 md:p-24 flex flex-col justify-between h-full">
            <div>
                <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-8">
                    // BIO_O1
                </span>
                <div className="text-lg md:text-xl text-text-primary leading-relaxed max-w-xl space-y-6">
                    {siteConfig.about.map((paragraph, index) => (
                        <p key={index}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
            
            <div className="mt-12 pt-12 border-t border-dashed border-border-color font-mono text-xs text-text-muted">
                <span className="block mb-1">CURRENTLY</span>
                Building high-availability systems @ Mumbai
            </div>
        </div>
    );
};

export default About;