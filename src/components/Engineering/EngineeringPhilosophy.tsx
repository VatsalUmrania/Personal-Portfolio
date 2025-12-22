import { ScrollReveal } from '../UI/ScrollReveal';

const EngineeringPhilosophy = () => {
    const directives = [
        {
            id: "01",
            title: "Boring Architecture",
            desc: "Complexity is technical debt. I prioritize standard patterns, type safety, and predictable state over 'magic' or experimental features. The best code is easy to delete."
        },
        {
            id: "02",
            title: "Observability First",
            desc: "If you can't measure it, you can't improve it. I build systems with logging, metrics, and tracing as first-class citizens, not afterthoughts."
        },
        {
            id: "03",
            title: "Zero Trust Security",
            desc: "Security is not a feature; it's the baseline. Input validation, immutable capability models, and defense-in-depth are non-negotiable."
        }
    ];

    return (
        <section className="px-container-x py-24 border-t border-border-color bg-bg-primary">
            <ScrollReveal>
                <div className="mb-16">
                    <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">
                        // SYSTEM_DIRECTIVES
                    </span>
                    <h2 className="text-3xl font-medium text-text-primary">
                        Engineering Standards
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {directives.map((item) => (
                        <DirectiveCard key={item.id} item={item} />
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
};

const DirectiveCard = ({ item }: { item: { id: string, title: string, desc: string } }) => (
    <div className="pl-6 border-l border-border-color">
        <div className="font-mono text-xs text-text-muted mb-4">
            // RULE_{item.id}
        </div>
        <h3 className="text-lg font-medium text-text-primary mb-3">
            {item.title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed">
            {item.desc}
        </p>
    </div>
);

export default EngineeringPhilosophy;