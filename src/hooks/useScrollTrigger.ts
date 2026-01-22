import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ScrollTriggerConfig {
    trigger: string | Element;
    start?: string;
    end?: string;
    scrub?: boolean | number;
    toggleActions?: string;
    onEnter?: () => void;
    onLeave?: () => void;
    markers?: boolean;
}

/**
 * Custom hook for creating scroll-triggered animations
 * Provides proper cleanup on unmount
 */
export const useScrollTrigger = (
    elementRef: RefObject<HTMLElement>,
    animation: gsap.TweenVars,
    config: ScrollTriggerConfig
) => {
    useEffect(() => {
        if (!elementRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(elementRef.current!, {
                ...animation,
                scrollTrigger: config
            });
        });

        return () => ctx.revert();
    }, [elementRef, animation, config]);
};
