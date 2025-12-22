const EngineeringPhilosophy = () => {
    return (
        <section className="py-32 px-6 border-t border-border-subtle bg-bg-secondary/20">
            <div className="max-w-4xl mx-auto text-center mb-24">
                <h2 className="text-sm font-mono text-text-accent-glow mb-6">ENGINEERING VALUES</h2>
                <h3 className="text-3xl md:text-5xl font-medium leading-tight text-text-primary">
                    Complexity should be <span className="text-text-tertiary italic">opt-in</span>. <br/>
                    Performance should be <span className="text-text-tertiary italic">default</span>.
                </h3>
            </div>

            <div className="max-w-350 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
                <Value 
                    title="Types > Tests" 
                    desc="I strictly type my codebases. A robust type system catches 80% of bugs before runtime, reducing the need for excessive unit test boilerplate."
                />
                <Value 
                    title="Boring Architecture" 
                    desc="I prefer standard patterns over clever ones. The goal is code that is easy to delete, easy to debug at 3AM, and easy for new engineers to onboard."
                />
                <Value 
                    title="Data Locality" 
                    desc="State should live as close to where it's used as possible. I avoid global state (Redux) unless absolutely necessary, preferring server state management."
                />
            </div>
        </section>
    );
};

const Value = ({ title, desc }: { title: string, desc: string }) => (
    <div className="border-l border-border-subtle pl-6">
        <h4 className="text-lg font-medium text-text-primary mb-3">{title}</h4>
        <p className="text-text-secondary leading-relaxed text-sm">{desc}</p>
    </div>
);

export default EngineeringPhilosophy;