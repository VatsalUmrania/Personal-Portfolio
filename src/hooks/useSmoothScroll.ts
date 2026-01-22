import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollSmoother from 'gsap/ScrollSmoother';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '../utils/gsapConfig';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

/**
 * Custom hook for ScrollSmoother
 * Creates and manages the smooth scroll instance
 */
export const useSmoothScroll = () => {
    const smootherRef = useRef<ScrollSmoother | null>(null);

    useEffect(() => {
        if (prefersReducedMotion) return;

        // Create ScrollSmoother instance
        smootherRef.current = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.5,
            effects: true,
            smoothTouch: 0.1,
            normalizeScroll: true,
            ignoreMobileResize: true
        });

        // Refresh ScrollTrigger when window resizes
        const handleResize = () => {
            ScrollTrigger.refresh();
        };

        let resizeTimer: ReturnType<typeof setTimeout>;
        const debouncedResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(handleResize, 250);
        };

        window.addEventListener('resize', debouncedResize);

        return () => {
            window.removeEventListener('resize', debouncedResize);
            if (smootherRef.current) {
                smootherRef.current.kill();
            }
        };
    }, []);

    return smootherRef.current;
};
