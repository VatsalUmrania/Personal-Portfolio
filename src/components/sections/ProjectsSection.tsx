import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '../../utils/gsapConfig';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { TechTag } from '../ui/TechTag';
import { projectsData } from '../../data/projects';
import styles from './ProjectsSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (prefersReducedMotion || !sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Right side cards slide from right
            gsap.utils.toArray(`.${styles.projectItemRight}`).forEach((item: any) => {
                gsap.from(item, {
                    x: 150,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        end: 'bottom 50%',
                        toggleActions: 'play none none none',
                        scrub: true
                    }
                });
            });

            // Left side cards slide from left
            gsap.utils.toArray(`.${styles.projectItemLeft}`).forEach((item: any) => {
                gsap.from(item, {
                    x: -150,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        end: 'bottom 50%',
                        toggleActions: 'play none none none',
                        scrub: true
                    }
                });
            });

            // Date badges animation
            gsap.utils.toArray(`.${styles.projectDateLabel}`).forEach((badge: any) => {
                gsap.from(badge, {
                    scale: 0,
                    rotation: 360,
                    duration: 0.8,
                    ease: 'back.out(2)',
                    scrollTrigger: {
                        trigger: badge.closest(`.${styles.projectItem}`),
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={styles.projectsSection} id="projects" data-scroll-section>
            <div className="container">
                <SectionHeader label="Featured Work" title="Projects That Matter" />

                <div className={styles.projectsTimeline}>
                    {projectsData.map((project, index) => (
                        <article
                            key={index}
                            className={`${styles.projectItem} ${project.side === 'right' ? styles.projectItemRight : styles.projectItemLeft}`}
                        >
                            <div className={styles.projectContent}>
                                <div className={styles.projectHeader}>
                                    <div className={styles.projectIcon}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d={project.icon} />
                                        </svg>
                                    </div>
                                    <span className={styles.projectTag}>{project.tag}</span>
                                </div>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <span className={styles.projectDateLabel}>{project.date}</span>
                                <p className={styles.projectDescription}>{project.description}</p>
                                <div className={styles.projectTech}>
                                    {project.tech.map((tech) => (
                                        <TechTag key={tech} name={tech} />
                                    ))}
                                </div>
                                <Button href={project.link} variant="secondary">View Project &rarr;</Button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
