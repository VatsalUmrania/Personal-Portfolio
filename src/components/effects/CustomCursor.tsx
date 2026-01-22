import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { prefersReducedMotion } from '../../utils/gsapConfig';
import styles from './CustomCursor.module.css';

export const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (prefersReducedMotion || typeof window === 'undefined' || window.innerWidth <= 768) {
            return;
        }

        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        let pos = { x: 0, y: 0 };
        let followerPos = { x: 0, y: 0 };

        const moveCursor = (e: MouseEvent) => {
            pos.x = e.clientX;
            pos.y = e.clientY;
        };

        window.addEventListener('mousemove', moveCursor);

        // GSAP Ticker for smooth animation
        const updateCursor = () => {
            // Main cursor (fast)
            gsap.to(cursor, {
                x: pos.x,
                y: pos.y,
                duration: 0.1,
                ease: "power2.out"
            });

            // Follower (lagging behind)
            const lag = 0.15;
            followerPos.x += (pos.x - followerPos.x) * lag;
            followerPos.y += (pos.y - followerPos.y) * lag;

            gsap.to(follower, {
                x: followerPos.x,
                y: followerPos.y,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        gsap.ticker.add(updateCursor);

        // Hover effects
        const handleMouseEnter = () => {
            gsap.to(cursor, { scale: 1.5, duration: 0.3 });
            gsap.to(follower, { scale: 2, opacity: 0.5, duration: 0.3 });
        };

        const handleMouseLeave = () => {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
            gsap.to(follower, { scale: 1, opacity: 1, duration: 0.3 });
        };

        // Add event listeners to interactive elements
        const addHoverListeners = () => {
            const hoverables = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
            hoverables.forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
        };

        // Initial addition and observer for new elements
        addHoverListeners();

        const observer = new MutationObserver(addHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            gsap.ticker.remove(updateCursor);
            observer.disconnect();

            const hoverables = document.querySelectorAll('a, button, [role="button"]');
            hoverables.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    // Don't render on mobile or if reduced motion is preferred
    if (prefersReducedMotion) return null;

    return (
        <>
            <div ref={cursorRef} className={styles.customCursor} />
            <div ref={followerRef} className={styles.cursorFollower} />
        </>
    );
};
