import { skillGroups } from '../../data/skills';
import SkillGroup from './SkillGroup';

interface SkillsSectionProps {
    onSkillHover: (tag: string) => void;
    onSkillLeave: () => void;
}

const SkillsSection = ({ onSkillHover, onSkillLeave }: SkillsSectionProps) => {
    return (
        <section className="px-container-x max-w-[1600px] mx-auto py-[140px]">
            <h2 className="mb-4 text-[rgb(var(--text-secondary-rgb))]">TECHNICAL DOMAIN</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 border-t border-[rgb(var(--border-color-rgb))] pt-16">
                {skillGroups.map((group, index) => (
                    <SkillGroup
                        key={index}
                        category={group.category}
                        skills={group.skills}
                        hint={group.hint}
                        onSkillHover={onSkillHover}
                        onSkillLeave={onSkillLeave}
                    />
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
