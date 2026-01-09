import { IconType } from 'react-icons';

export interface Skill {
    name: string;
    filterTag: string;
    icon?: IconType;
    proficiency?: number;
}

export interface SkillGroup {
    category: string;
    skills: Skill[];
}
