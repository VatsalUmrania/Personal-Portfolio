import { motion } from 'framer-motion';
import { skillGroups } from '../../data/skills';
import { ScrollReveal } from '../UI/ScrollReveal';

const SkillsSection = () => {
    return (
        <section className="px-container-x py-24 border-t border-border-color bg-surface/20">
            <ScrollReveal>
                <div className="flex items-baseline justify-between mb-16">
                    <h2 className="text-2xl font-medium text-text-primary">
                        Technical Stack
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {skillGroups.map((group, idx) => (
                        <div key={idx}>
                            <h3 className="text-sm font-medium text-text-muted mb-6 border-b border-border-color pb-2">
                                {group.category}
                            </h3>
                            <div className="flex flex-col gap-3">
                                {group.skills.map((skill, sIdx) => (
                                    <div
                                        key={sIdx}
                                        className="flex items-center gap-3 py-1"
                                    >
                                        <div className="text-text-muted">
                                            {skill.icon && <skill.icon size={18} />}
                                        </div>
                                        <span className="text-sm text-text-primary">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
};
export default SkillsSection;