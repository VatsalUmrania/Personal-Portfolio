import React from 'react';
import { useNavigation } from '../../hooks/useNavigation';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import styles from './Navigation.module.css';

export const Navigation: React.FC = () => {
    const { activeSection, isScrolled } = useNavigation();
    const smoother = useSmoothScroll();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const target = document.querySelector(targetId);

        if (target) {
            if (smoother) {
                smoother.scrollTo(target, true, "top 80px");
            } else {
                const element = target as HTMLElement;
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    };

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`${styles.nav} ${isScrolled ? styles.navScrolled : ''}`} role="navigation">
            <div className={styles.navContainer}>
                <a
                    href="#"
                    className={styles.navLogo}
                    aria-label="Home"
                    onClick={(e) => handleNavClick(e, '#hero')}
                >
                    VU
                </a>
                <div className={styles.navLinks}>
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={`${styles.navLink} ${activeSection === item.href.substring(1) ? styles.active : ''}`}
                            onClick={(e) => handleNavClick(e, item.href)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};
