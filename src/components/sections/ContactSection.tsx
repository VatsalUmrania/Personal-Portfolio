import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '../../utils/gsapConfig';
import { SectionHeader } from '../ui/SectionHeader';
import { contactData } from '../../data/contact';
import styles from './ContactSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export const ContactSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (prefersReducedMotion || !sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(`.${styles.contactText}`, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: 'top 75%'
                }
            });

            gsap.from(`.${styles.contactCard}`, {
                y: 20,
                duration: 0.6,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: `.${styles.contactLinks}`,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={styles.contactSection} id="contact" data-scroll-section>
            <div className="container">
                <SectionHeader label="Get in Touch" title="Let's Build Something Amazing" />

                <div ref={contentRef} className={styles.contactContent}>
                    <p className={styles.contactText}>
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                    <div className={styles.contactLinks}>
                        {contactData.map((contact) => (
                            <a
                                key={contact.platform}
                                href={contact.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.contactCard}
                            >
                                <div className={styles.contactCardIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d={contact.icon} />
                                    </svg>
                                </div>
                                <div className={styles.contactCardInfo}>
                                    <span className={styles.contactCardLabel}>{contact.label}</span>
                                    <span className={styles.contactCardValue}>{contact.value}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
