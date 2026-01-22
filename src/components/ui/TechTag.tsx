import React from 'react';
import styles from './TechTag.module.css';

interface TechTagProps {
    name: string;
    icon?: string;
}

export const TechTag: React.FC<TechTagProps> = ({ name, icon }) => {
    return (
        <span className={styles.techTag}>
            {icon && <img src={icon} alt={name} width="16" height="16" />}
            {name}
        </span>
    );
};
