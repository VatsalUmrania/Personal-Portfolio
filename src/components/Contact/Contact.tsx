import { siteConfig } from '../../data/site';

const Contact = () => {
    return (
        <section className="px-container-x max-w-[1600px] mx-auto py-[140px] mb-16">
            <h2 className="mb-8 text-[rgb(var(--text-secondary-rgb))]">CONNECT</h2>
            <div className="flex gap-16 mt-12 font-mono text-sm">
                <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-[rgb(var(--text-secondary-rgb))] transition-colors hover:text-[rgb(var(--text-primary-rgb))] hover:underline underline-offset-4"
                >
                    {siteConfig.contact.email}
                </a>
                <a
                    href={siteConfig.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(var(--text-secondary-rgb))] transition-colors hover:text-[rgb(var(--text-primary-rgb))] hover:underline underline-offset-4"
                >
                    {siteConfig.contact.github.replace('https://', '')}
                </a>
                <a
                    href={siteConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(var(--text-secondary-rgb))] transition-colors hover:text-[rgb(var(--text-primary-rgb))] hover:underline underline-offset-4"
                >
                    {siteConfig.contact.linkedin.replace('https://', '')}
                </a>
            </div>
        </section>
    );
};

export default Contact;
