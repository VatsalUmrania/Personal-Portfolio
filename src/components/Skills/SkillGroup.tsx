import { Skill } from '../../types/skill';

interface SkillGroupProps {
    category: string;
    skills: Skill[];
    hint: string;
    onSkillHover: (tag: string) => void;
    onSkillLeave: () => void;
}

const SkillGroup = ({ category, skills, hint, onSkillHover, onSkillLeave }: SkillGroupProps) => {
    return (
        <div className="group">
            <h3 className="mb-8 text-sm text-[rgb(var(--text-secondary-rgb))]">{category}</h3>
            <div className="flex flex-col gap-4 font-mono text-sm">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="flex items-center gap-2 cursor-pointer transition-colors text-[rgb(var(--text-primary-rgb))] w-fit hover:text-[rgb(var(--accent-rgb))]"
                        onMouseEnter={() => onSkillHover(skill.filterTag)}
                        onMouseLeave={onSkillLeave}
                    >
                        {skill.icon && (
                            <skill.icon
                                className="text-sm opacity-60"
                                aria-hidden="true"
                            />
                        )}
                        <span>{skill.name}</span>
                    </span>
                ))}
            </div>
            <div className="mt-4 text-xs text-[rgb(var(--text-secondary-rgb))] font-mono opacity-0 group-hover:opacity-60 transition-opacity">
                {hint}
            </div>
        </div>
    );
};

export default SkillGroup;
