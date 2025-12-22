import { Skill } from '../../types/skill';

interface SkillGroupProps {
    category: string;
    skills: Skill[];
    onSkillHover: (tag: string) => void;
    onSkillLeave: () => void;
}

const SkillGroup = ({ category, skills, onSkillHover, onSkillLeave }: SkillGroupProps) => {
    return (
        <div>
            <h3 className="font-mono text-xs text-text-muted mb-6 uppercase border-b border-border-color pb-2 w-max">
                {category}
            </h3>
            <ul className="flex flex-col gap-3">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="flex items-center gap-3 text-sm text-text-primary group cursor-default"
                        onMouseEnter={() => onSkillHover(skill.filterTag)}
                        onMouseLeave={onSkillLeave}
                    >
                        {skill.icon && (
                            <skill.icon
                                size={14}
                                className="text-text-muted opacity-40 group-hover:opacity-100 group-hover:text-accent transition-all grayscale group-hover:grayscale-0"
                            />
                        )}
                        <span className="group-hover:text-accent transition-colors">
                            {skill.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillGroup;