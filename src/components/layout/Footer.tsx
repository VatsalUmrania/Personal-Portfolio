import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p className={styles.footerText}>&copy; 2026 Vatsal Umrania. Built with GSAP.</p>
            </div>
        </footer>
    );
};
