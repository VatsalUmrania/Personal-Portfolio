export interface Skill {
    name: string;
    filterTag: string;
}

export interface SkillGroup {
    category: string;
    skills: Skill[];
    hint: string;
}
