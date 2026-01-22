import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '../../utils/gsapConfig';
import { SectionHeader } from '../ui/SectionHeader';
import { TechTag } from '../ui/TechTag';
import { experienceData } from '../../data/experience';
import styles from './ExperienceSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export const ExperienceSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (prefersReducedMotion || !timelineRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(`.${styles.experienceItem}`, {
                opacity: 0,
                x: -50,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: timelineRef.current,
                    start: 'top 75%'
                }
            });

            gsap.from(`.${styles.experienceIcon}`, {
                scale: 0,
                rotation: -180,
                duration: 0.8,
                stagger: 0.3,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: timelineRef.current,
                    start: 'top 75%'
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={styles.experienceSection} id="experience" data-scroll-section>
            <div className="container">
                <SectionHeader label="Professional Journey" title="Work Experience" />

                <div ref={timelineRef} className={styles.experienceTimeline}>
                    {experienceData.map((item, index) => (
                        <div key={index} className={styles.experienceItem}>
                            <div className={styles.experienceMeta}>
                                <div className={styles.experienceIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                    </svg>
                                </div>
                                <div className={styles.experienceCompany}>{item.company}</div>
                                <div className={styles.experienceDate}>{item.date}</div>
                                <div className={styles.experienceLocation}>{item.location}</div>
                            </div>
                            <div className={styles.experienceDetails}>
                                <h3 className={styles.experienceTitle}>{item.title}</h3>
                                <ul className={styles.experienceHighlights}>
                                    {item.highlights.map((highlight, idx) => (
                                        <li key={idx}>{highlight}</li>
                                    ))}
                                </ul>
                                <div className={styles.experienceTech}>
                                    {item.tech.map((tech) => (
                                        <TechTag key={tech} name={tech} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
