export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export interface Skill {
    name: string;
    icon: string; // URL to icon
}
