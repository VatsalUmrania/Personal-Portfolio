// src/components/Engineering/EngineeringPhilosophy.tsx
import { motion } from 'framer-motion';
import { ScrollReveal } from '../UI/ScrollReveal';

const EngineeringPhilosophy = () => {
    const directives = [
        {
            id: "01",
            title: "Boring Architecture",
            desc: "Complexity is technical debt. I prioritize standard patterns and predictable state."
        },
        {
            id: "02",
            title: "Observability First",
            desc: "If you can't measure it, you can't improve it. Logging and tracing are first-class citizens."
        },
        {
            id: "03",
            title: "Zero Trust Security",
            desc: "Security is the baseline. Input validation and immutable capability models are non-negotiable."
        }
    ];

    return (
        <section className="px-container-x py-24 border-t border-border-color bg-bg-primary relative overflow-hidden">
            <ScrollReveal>
                <div className="mb-16 flex items-center gap-4">
                    <div className="w-2 h-2 bg-accent/50 rounded-full animate-pulse" />
                    <span className="font-mono text-xs text-accent tracking-widest uppercase">
                        System Directives
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-l border-border-color">
                    {directives.map((item, i) => (
                        <DirectiveCard key={item.id} item={item} index={i} />
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
};

const DirectiveCard = ({ item, index }: { item: any, index: number }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="group pl-6 md:pl-8 border-r border-transparent hover:border-accent/30 transition-colors py-4"
    >
        <div className="font-mono text-xs text-text-muted mb-4 group-hover:text-accent transition-colors flex justify-between">
            <span>// RULE_{item.id}</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px]">[ACTIVE]</span>
        </div>
        <h3 className="text-lg font-medium text-text-primary mb-3">
            {item.title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed max-w-sm">
            {item.desc}
        </p>
    </motion.div>
);

export default EngineeringPhilosophy;