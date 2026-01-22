import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { EASING, prefersReducedMotion } from '../../utils/gsapConfig';
import { SectionHeader } from '../ui/SectionHeader';
import styles from './AboutSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (prefersReducedMotion || !sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Parallax Effects
            gsap.to(`.${styles.aboutBackground}`, {
                y: -100,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.5,
                },
                ease: EASING.smooth
            });

            // Text Reveal
            gsap.from(`.${styles.aboutText} p`, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.2,
                ease: EASING.smooth,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={styles.aboutSection} id="about" data-scroll-section>
            <div className={`${styles.aboutBackground} parallax-layer`} data-depth="0.2"></div>
            <div className="container">
                <SectionHeader label="About Me" title="Software Engineer & Full-Stack Developer" />

                <div ref={textRef} className={`${styles.aboutContent} parallax-layer`} data-depth="1">
                    <div className={styles.aboutText}>
                        <p className={styles.aboutIntro}>
                            Undergraduate studying <strong>Information Technology</strong> at K.J. Somaiya Institute of
                            Technology (2027). My engineering focus: <strong>type safety through tRPC and Prisma</strong>,
                            <strong>real-time systems using WebSockets</strong>, and <strong>durable workflow
                                orchestration</strong>.
                        </p>
                        <p>
                            I've built AI-powered code generators, blockchain verification platforms, and collaborative editors —
                            each designed for production reliability, not just demonstrations. I write code that ships.
                        </p>
                    </div>

                    {/* Stats are removed from the React version as they were "AI-generated-looking" in previous requests, 
                        or I will include them if they look valid. The HTML has .about-stats code but the user requested cleanup in previous turns.
                        However, the migration goal is "maintaining as much output". 
                        The prompt says "maintaining to same output", so I should include them if they were in the provided HTML.
                        But looking at the HTML provided in Step 11:
                        I DO NOT see .about-stats in the HTML content!
                        Wait, lines 366-400 of script.js reference .about-stats.
                        But looking at index.html lines 101-123... THERE IS NO .about-stats!
                        The script.js has code for it, but the HTML doesn't!
                        Checking index.html lines 101-123: It has .about-intro and another <p>.
                        Checking previous conversation histories: "Refine Hero & Navigation" - "Removing AI-generated-looking stats from the About section."
                        Ah! The user REMOVED the stats from the HTML in a previous turn (or I should assume they are gone).
                        Since the current index.html (source of truth) does NOT have stats, I will NOT include them.
                        Good.
                    */}
                </div>
            </div>
        </section>
    );
};
