// ============================================
// GSAP CONFIGURATION & CONSTANTS
// ============================================

export const EASING = {
    cinematic: "power4.inOut",
    snap: "expo.out",
    smooth: "sine.inOut",
    bounce: "elastic.out(1, 0.5)",
    dramatic: "back.out(1.7)"
} as const;

export const PRESETS = {
    fadeUp: { y: 30, opacity: 0 },
    fadeDown: { y: -30, opacity: 0 },
    fadeLeft: { x: 30, opacity: 0 },
    fadeRight: { x: -30, opacity: 0 },
    scaleIn: { scale: 0.8, opacity: 0 },
    blurIn: { filter: "blur(10px)", opacity: 0 }
} as const;

// Check for reduced motion preference
export const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
