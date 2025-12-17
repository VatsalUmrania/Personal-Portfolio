export interface SiteConfig {
    name: string;
    role: string;
    headline: string;
    valueProposition: string;
    about: string[];
    contact: {
        email: string;
        github: string;
        linkedin: string;
    };
}
