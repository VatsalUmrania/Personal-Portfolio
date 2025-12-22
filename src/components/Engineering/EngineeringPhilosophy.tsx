import { motion } from 'framer-motion';

const EngineeringPhilosophy = () => {
    return (
        <section className="px-container-x max-w-[1600px] mx-auto py-[140px] border-t border-[rgb(var(--border-color-rgb))]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-sm font-mono text-[rgb(var(--accent-rgb))] mb-6">ENGINEERING VALUES</h2>
                    <h3 className="text-3xl leading-tight mb-6">
                        I believe software should be <span className="text-[rgb(var(--text-secondary-rgb))]">boring</span> where it counts.
                    </h3>
                    <p className="text-[rgb(var(--text-secondary-rgb))] max-w-md">
                        The best systems aren't the ones with the cleverest code, but the ones that are easy to debug at 3 AM. I prioritize type safety, predictable state, and standard patterns over "magic".
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    <Opinion 
                        title="Types Over Tests"
                        desc="While I write tests, a strict TypeScript configuration catches 80% of bugs before they happen. I treat the type system as the first line of defense."
                    />
                    <Opinion 
                        title="Server State Management"
                        desc="I avoid putting server data in global client stores (Redux). Tools like React Query or tRPC handle caching/invalidation far better."
                    />
                    <Opinion 
                        title="Composition > Inheritance"
                        desc="Deep class hierarchies in UI components create brittle systems. I build small, composable primitives that do one thing well."
                    />
                </div>
            </div>
        </section>
    );
};

const Opinion = ({ title, desc }: { title: string, desc: string }) => (
    <div className="group">
        <h4 className="text-lg font-medium mb-2 group-hover:text-[rgb(var(--accent-rgb))] transition-colors">{title}</h4>
        <p className="text-sm text-[rgb(var(--text-secondary-rgb))] leading-relaxed">{desc}</p>
    </div>
);

export default EngineeringPhilosophy;