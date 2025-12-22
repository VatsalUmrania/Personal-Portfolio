// import { skillGroups } from '../../data/skills';
// import SkillGroup from './SkillGroup';

// // Interface can be simplified as we removed the interactive filtering for the "Audit" look
// interface SkillsSectionProps {
//     onSkillHover?: (tag: string) => void;
//     onSkillLeave?: () => void;
// }

// const SkillsSection = ({ onSkillHover, onSkillLeave }: SkillsSectionProps) => {
//     return (
//         <section className="px-container-x max-w-[1400px] mx-auto py-24 border-t border-border-color">
//             <div className="flex items-baseline justify-between mb-12">
//                 <h2 className="font-mono text-xs text-accent tracking-widest uppercase">
//                     Capability Audit
//                 </h2>
//                 <span className="font-mono text-xs text-text-muted">
//                     v2025.Q2
//                 </span>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
//                 {skillGroups.map((group, index) => (
//                     <SkillGroup
//                         key={index}
//                         category={group.category}
//                         skills={group.skills}
//                         // We pass these purely for optionality, but the visual style is now static
//                         onSkillHover={onSkillHover || (() => {})}
//                         onSkillLeave={onSkillLeave || (() => {})}
//                     />
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default SkillsSection;

// src/components/Skills/SkillsSection.tsx
// Add simple hover scale and color fill animations
import { motion } from 'framer-motion';
import { skillGroups } from '../../data/skills';
import { ScrollReveal } from '../UI/ScrollReveal';

const SkillsSection = () => {
    return (
        <section id="skills" className="px-container-x py-24 border-t border-border-color bg-surface/30">
            <ScrollReveal>
                <div className="flex items-baseline justify-between mb-16">
                    <h2 className="font-mono text-xs text-accent tracking-widest uppercase">
                        // Capability Audit
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {skillGroups.map((group, idx) => (
                        <div key={idx}>
                            <h3 className="font-mono text-xs text-text-muted mb-6 uppercase border-b border-border-color pb-2 w-max">
                                {group.category}
                            </h3>
                            <div className="flex flex-col gap-4">
                                {group.skills.map((skill, sIdx) => (
                                    <motion.div
                                        key={sIdx}
                                        whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.03)" }}
                                        className="flex items-center gap-4 p-2 rounded cursor-default border border-transparent hover:border-border-color transition-colors"
                                    >
                                        <div className="text-text-muted group-hover:text-accent">
                                            {skill.icon && <skill.icon size={18} />}
                                        </div>
                                        <div className="w-full">
                                            <div className="flex justify-between text-sm text-text-primary mb-1">
                                                <span>{skill.name}</span>
                                            </div>
                                            {/* Decorative "Load" Bar */}
                                            <div className="h-0.5 w-full bg-border-color overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "100%" }}
                                                    transition={{ duration: 1, delay: 0.2 }}
                                                    className="h-full bg-accent"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
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