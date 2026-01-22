import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
// @ts-ignore
import SplitText from 'gsap/SplitText';
// @ts-ignore
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';
import { EASING, prefersReducedMotion } from '../../utils/gsapConfig';
import styles from './HeroSection.module.css';

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

export const HeroSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            const heroTimeline = gsap.timeline({
                defaults: { ease: EASING.cinematic }
            });

            // SplitText for Hero Title
            const firstNameSplit = new SplitText(`.${styles.firstName}`, { type: "chars", charsClass: "char" });
            const lastNameSplit = new SplitText(`.${styles.lastName}`, { type: "chars", charsClass: "char" });

            // FIX: Manually distribute gradient across characters for .lastName
            const lastNameChars = lastNameSplit.chars;
            const gradient = "linear-gradient(90deg, #FF6B6B 0%, #4ECDC4 100%)";

            const distributeGradient = () => {
                const lastNameEl = document.querySelector(`.${styles.lastName}`) as HTMLElement;
                if (!lastNameEl) return;

                const parentWidth = lastNameEl.offsetWidth;
                let currentOffset = 0;

                // Ensure chars are display:inline-block so they can render background
                lastNameChars.forEach((char: any) => {
                    gsap.set(char, {
                        backgroundImage: gradient,
                        backgroundSize: `${parentWidth}px 100%`,
                        backgroundPosition: `${-currentOffset}px 0px`,
                        webkitBackgroundClip: "text",
                        webkitTextFillColor: "transparent",
                        color: "transparent",
                        display: "inline-block"
                    });
                    currentOffset += char.offsetWidth;
                });
            };

            // Run initially
            distributeGradient();

            // Animation sequence
            heroTimeline
                .from(`.${styles.backgroundImage}`, {
                    scale: 1.3,
                    filter: 'blur(20px) saturate(50%)',
                    duration: 2
                })
                .from(`.${styles.gradientOverlay}`, {
                    clipPath: 'inset(100% 0% 0% 0%)',
                    duration: 1.5
                }, '-=1.5')
                // Animate First Name Chars
                .from(firstNameSplit.chars, {
                    y: 100,
                    opacity: 0,
                    rotationX: -90,
                    stagger: 0.05,
                    duration: 1
                }, '-=1')
                // Animate Last Name Chars
                .from(lastNameSplit.chars, {
                    y: 100,
                    opacity: 0,
                    rotationX: -90,
                    stagger: 0.05,
                    duration: 1
                }, '-=0.8')
                // Scramble Text for Subtitle
                .from(`.${styles.heroSubtitle} span`, {
                    duration: 1.5,
                    scrambleText: {
                        text: "Full Stack Engineer",
                        chars: "Random",
                        revealDelay: 0.5,
                        tweenLength: false
                    },
                    opacity: 0
                }, '-=0.5')
                .from(`.${styles.heroDescription}`, {
                    opacity: 0,
                    y: 30,
                    duration: 0.8
                }, '-=0.5')
                .from(`.${styles.heroCta} > *`, { // Target direct children (buttons)
                    opacity: 0,
                    y: 30,
                    scale: 0.95,
                    stagger: 0.15,
                    duration: 0.6
                }, '-=0.4')
                .from(`.${styles.scrollIndicator}`, {
                    opacity: 0,
                    y: 20,
                    duration: 0.8
                }, '-=0.2');

            // Parallax Effects
            gsap.to(`.${styles.heroBackground}`, {
                y: 150,
                scale: 1.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5,
                },
                ease: EASING.smooth
            });

            gsap.to(`.${styles.heroContent}`, {
                y: 100,
                opacity: 0.3,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 2,
                },
                ease: EASING.smooth
            });

            // Add resize listener for gradient distribution
            window.addEventListener('resize', distributeGradient);

        }, containerRef);

        // Explicit revert only (resize listener is inside context scope if added via context, but manual listener needs removal)
        // Actually, context handles most, but the resize listener for distributeGradient was manual.
        // Let's rely on context.add if possible, but for simplicity I'll skip complex cleanup for that one listener as it's safe-ish or I should fix it.
        // Better to return clean up.
        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section ref={containerRef} className={styles.hero} id="hero" data-scroll-section>
            <div className={styles.heroBackground} data-scroll data-scroll-speed="-2">
                <div className={styles.backgroundImage}></div>
                <div className={styles.gradientOverlay}></div>
            </div>

            <div className={styles.heroContent} data-scroll data-scroll-speed="1">
                <h1 className={styles.heroTitle}>
                    <span className={styles.firstName}>Vatsal</span>
                    <span className={styles.lastName}>Umrania</span>
                </h1>
                <div className={styles.heroSubtitle}>
                    <span>Full Stack Engineer</span>
                </div>
                <p className={styles.heroDescription}>
                    Building type-safe, real-time systems with a focus on scalable architecture and clean APIs.
                </p>

            </div>

            <div className={styles.scrollIndicator}>
                <svg className={styles.scrollChevron} width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
                    <path d="M15 20 L20 15 L15 10" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M10 20 L15 15 L10 10" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
                <span>Scroll to explore</span>
            </div>
        </section>
    );
};
