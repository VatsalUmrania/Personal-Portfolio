import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { EASING, prefersReducedMotion } from '../../utils/gsapConfig';
import { SectionHeader } from '../ui/SectionHeader';
import { TechTag } from '../ui/TechTag';
import { skillsData } from '../../data/skills';
import styles from './SkillsSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export const SkillsSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (prefersReducedMotion || !sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Background parallax
            gsap.to(sectionRef.current, {
                backgroundPosition: 'center -100px',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });

            // Category stagger
            gsap.from(`.${styles.skillCategory}`, {
                y: 20,
                duration: 0.8,
                stagger: 0.15,
                ease: EASING.smooth,
                scrollTrigger: {
                    trigger: `.${styles.skillsGrid}`,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                }
            });

            // Tags reveal within categories
            gsap.utils.toArray(`.${styles.skillCategory}`).forEach((category: any) => {
                const tags = category.querySelectorAll('span'); // Assuming TechTag renders span
                gsap.from(tags, {
                    y: 10,
                    duration: 0.4,
                    stagger: 0.05,
                    ease: EASING.smooth,
                    scrollTrigger: {
                        trigger: category,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={styles.skillsSection} id="skills" data-scroll-section>
            <div className="container">
                <SectionHeader label="Technical Expertise" title="Skills & Technologies" />

                <div className={styles.skillsGrid}>
                    {skillsData.map((category, index) => (
                        <div key={index} className={styles.skillCategory}>
                            <h3 className={styles.skillCategoryTitle}>{category.title}</h3>
                            <div className={styles.skillTags}>
                                {category.skills.map((skill) => (
                                    <TechTag key={skill.name} name={skill.name} icon={skill.icon} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
