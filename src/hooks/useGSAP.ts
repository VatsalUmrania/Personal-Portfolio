import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
// @ts-ignore - SplitText and ScrambleText may not have types
import SplitText from 'gsap/SplitText';
// @ts-ignore
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, ScrambleTextPlugin);
}

/**
 * Custom hook for managing GSAP timeline lifecycle
 * Automatically registers plugins and provides cleanup
 */
export const useGSAP = () => {
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        // Configure GSAP
        gsap.config({
            nullTargetWarn: false,
            units: { left: "%", top: "%", rotation: "deg" }
        });

        // Set ScrollTrigger defaults
        ScrollTrigger.defaults({
            toggleActions: "play none none reverse",
            markers: false
        });

        return () => {
            // Cleanup timeline on unmount
            if (timelineRef.current) {
                timelineRef.current.kill();
            }
        };
    }, []);

    return { gsap, ScrollTrigger, SplitText, ScrambleTextPlugin, timelineRef };
};
