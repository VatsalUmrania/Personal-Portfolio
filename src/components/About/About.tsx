import { siteConfig } from '../../data/site';

const About = () => {
    return (
        <section className="px-container-x max-w-[1600px] mx-auto py-[140px]">
            <h2 className="mb-8 text-[rgb(var(--text-secondary-rgb))]">ABOUT</h2>
            <div className="text-xl text-[rgb(var(--text-primary-rgb))] max-w-[800px]">
                {siteConfig.about.map((paragraph, index) => (
                    <p key={index} className="mb-4">
                        {paragraph}
                    </p>
                ))}
            </div>
        </section>
    );
};

export default About;
