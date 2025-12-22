import { skillGroups } from '../../data/skills';
import SkillGroup from './SkillGroup';

// Interface can be simplified as we removed the interactive filtering for the "Audit" look
interface SkillsSectionProps {
    onSkillHover?: (tag: string) => void;
    onSkillLeave?: () => void;
}

const SkillsSection = ({ onSkillHover, onSkillLeave }: SkillsSectionProps) => {
    return (
        <section className="px-container-x max-w-[1400px] mx-auto py-24 border-t border-border-color">
            <div className="flex items-baseline justify-between mb-12">
                <h2 className="font-mono text-xs text-accent tracking-widest uppercase">
                    Capability Audit
                </h2>
                <span className="font-mono text-xs text-text-muted">
                    v2025.Q2
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
                {skillGroups.map((group, index) => (
                    <SkillGroup
                        key={index}
                        category={group.category}
                        skills={group.skills}
                        // We pass these purely for optionality, but the visual style is now static
                        onSkillHover={onSkillHover || (() => {})}
                        onSkillLeave={onSkillLeave || (() => {})}
                    />
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;