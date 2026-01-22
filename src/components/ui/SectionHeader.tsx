import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { EASING } from '../../utils/gsapConfig';
import styles from './SectionHeader.module.css';

gsap.registerPlugin(ScrollTrigger);

interface SectionHeaderProps {
    label: string;
    title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title }) => {
    const headerRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLSpanElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!headerRef.current || !labelRef.current || !titleRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: headerRef.current,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none reverse'
            }
        });

        tl.from(labelRef.current, {
            opacity: 0,
            scale: 0.8,
            y: 30,
            duration: 0.6,
            ease: EASING.dramatic
        })
            .from(titleRef.current, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: EASING.cinematic
            }, '-=0.3');

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div ref={headerRef} className={styles.sectionHeader}>
            <span ref={labelRef} className={styles.sectionLabel}>{label}</span>
            <h2 ref={titleRef} className={styles.sectionTitle}>{title}</h2>
        </div>
    );
};
