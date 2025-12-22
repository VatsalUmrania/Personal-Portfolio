import { motion } from 'framer-motion';

const EngineeringPhilosophy = () => {
    return (
        <section className="px-container-x max-w-350 mx-auto py-24 border-t border-border-color">
            <div className="mb-12">
                <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-2">
                    System Directives
                </span>
                <h2 className="text-2xl font-medium text-text-primary">
                    Engineering Standards
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-l border-border-color">
                <Directive 
                    index="01"
                    title="Boring Architecture"
                    desc="Complexity is technical debt. I prioritize standard patterns, type safety, and predictable state over 'magic' or experimental features. The best code is easy to delete."
                />
                <Directive 
                    index="02"
                    title="Observability First"
                    desc="If you can't measure it, you can't improve it. I build systems with logging, metrics, and tracing as first-class citizens, not afterthoughts."
                />
                <Directive 
                    index="03"
                    title="Zero Trust Security"
                    desc="Security is not a feature; it's the baseline. Input validation, immutable capability models, and defense-in-depth are non-negotiable."
                />
            </div>
        </section>
    );
};

const Directive = ({ index, title, desc }: { index: string, title: string, desc: string }) => (
    <div className="group pl-6 md:pl-8 border-r border-border-color py-2">
        <div className="font-mono text-xs text-text-muted mb-4 group-hover:text-accent transition-colors">
            // RULE_{index}
        </div>
        <h3 className="text-lg font-medium text-text-primary mb-3">
            {title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed max-w-sm">
            {desc}
        </p>
    </div>
);

export default EngineeringPhilosophy;