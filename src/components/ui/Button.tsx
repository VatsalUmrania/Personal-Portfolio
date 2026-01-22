import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    href?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    href,
    children,
    onClick
}) => {
    const className = `${styles.btn} ${variant === 'primary' ? styles['btn--primary'] : styles['btn--secondary']}`;

    if (href) {
        return (
            <a href={href} className={className} onClick={onClick}>
                {children}
            </a>
        );
    }

    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};
