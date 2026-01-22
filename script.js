// ============================================
// CINEMATIC PORTFOLIO - GSAP ANIMATIONS
// ============================================

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, ScrambleTextPlugin);

// ============================================
// CONFIGURATION & CONSTANTS
// ============================================

const EASING = {
    cinematic: "power4.inOut",
    snap: "expo.out",
    smooth: "sine.inOut",
    bounce: "elastic.out(1, 0.5)",
    dramatic: "back.out(1.7)"
};

const PRESETS = {
    fadeUp: { y: 30, opacity: 0 },
    fadeDown: { y: -30, opacity: 0 },
    fadeLeft: { x: 30, opacity: 0 },
    fadeRight: { x: -30, opacity: 0 },
    scaleIn: { scale: 0.8, opacity: 0 },
    blurIn: { filter: "blur(10px)", opacity: 0 }
};

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// GSAP Configuration
gsap.config({
    nullTargetWarn: false,
    units: { left: "%", top: "%", rotation: "deg" }
});

// ScrollTrigger Defaults
ScrollTrigger.defaults({
    toggleActions: "play none none reverse",
    markers: false
});

// ============================================
// SMOOTH SCROLLING INITIALIZATION
// ============================================

let smoother;

if (!prefersReducedMotion) {
    smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,              // Smoothness level (0-3, higher = smoother)
        effects: true,            // Enable data-speed and data-lag effects
        smoothTouch: 0.1,         // Less smooth on touch devices for better performance
        normalizeScroll: true,    // Prevent address bar from affecting scroll on mobile
        ignoreMobileResize: true, // Ignore mobile keyboard resize
        preventDefault: true
    });
}

// ============================================
// CINEMATIC CURSOR
// ============================================

if (!prefersReducedMotion && window.innerWidth > 768) {
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.cursor-follower');
    let pos = { x: 0, y: 0 };
    let followerPos = { x: 0, y: 0 };

    document.addEventListener('mousemove', (e) => {
        pos.x = e.clientX;
        pos.y = e.clientY;
    });

    gsap.ticker.add(() => {
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
    });

    // Hover effects for interactive elements
    const hoverables = document.querySelectorAll('a, button, .project-card, .skill-tag, .stat');

    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 1.5, duration: 0.3 });
            gsap.to(follower, { scale: 2, opacity: 0.5, duration: 0.3 });
        });

        el.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
            gsap.to(follower, { scale: 1, opacity: 1, duration: 0.3 });
        });
    });
}

// ============================================
// HERO TIMELINE
// ============================================

if (!prefersReducedMotion) {
    const heroTimeline = gsap.timeline({
        defaults: { ease: EASING.cinematic }
    });

    // SplitText for Hero Title
    const firstNameSplit = new SplitText('.first-name', { type: "chars", charsClass: "char" });
    const lastNameSplit = new SplitText('.last-name', { type: "chars", charsClass: "char" });

    // FIX: Manually distribute gradient across characters for .last-name
    const lastNameChars = lastNameSplit.chars;
    const gradient = "linear-gradient(90deg, #FF6B6B 0%, #4ECDC4 100%)";

    const distributeGradient = () => {
        const lastNameEl = document.querySelector('.last-name');
        if (!lastNameEl) return;

        const parentWidth = lastNameEl.offsetWidth;
        let currentOffset = 0;

        // Ensure chars are display:inline-block so they can render background
        lastNameChars.forEach(char => {
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

    // Run initially and on resize
    distributeGradient();
    window.addEventListener('resize', distributeGradient);

    // ScrambleText for Subtitle
    // Remove existing text content and set opacity to 1 immediately so ScrambleText can work
    gsap.set('.hero-subtitle', { opacity: 1 });
    // We'll trust the layout to hold the space, or we can clear it if needed. 
    // But ScrambleText usually replaces content. Let's start with the original text hidden or empty if we want to type it out.
    // However, the design has a span inside. Let's target specific elements.

    // Background and text animations
    heroTimeline
        .from('.background-image', {
            scale: 1.3,
            filter: 'blur(20px) saturate(50%)',
            duration: 2
        })
        .from('.gradient-overlay', {
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
        }, '-=0.8') // Slight overlap with first name
        // Scramble Text for Subtitle
        .from('.typing-text', {
            duration: 1.5,
            scrambleText: {
                text: "Full Stack Engineer",
                chars: "Random",
                revealDelay: 0.5,
                tweenLength: false
            },
            opacity: 0 // Fade in while scrambling
        }, '-=0.5')
        .from('.hero-description', {
            opacity: 0,
            y: 30,
            duration: 0.8
        }, '-=0.5')
        .from('.btn', {
            opacity: 0,
            y: 30,
            scale: 0.95,
            stagger: 0.15,
            duration: 0.6
        }, '-=0.4')
        .from('.scroll-indicator', {
            opacity: 0,
            y: 20,
            duration: 0.8
        }, '-=0.2');
}

// ============================================
// PARALLAX & ADVANCED SCROLL EFFECTS
// ============================================

if (!prefersReducedMotion) {
    // Hero section pin effect (optional - pins hero while scrolling)
    ScrollTrigger.create({
        trigger: '.hero',
        start: 'top top',
        end: '+=100%',
        pin: false, // Set to true if you want to pin the hero
        pinSpacing: true
    });

    // Hero background parallax with depth
    gsap.to('.hero-background', {
        y: 150,
        scale: 1.1,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
            ease: EASING.smooth
        }
    });

    // Hero content parallax (moves slower than background)
    gsap.to('.hero-content', {
        y: 100,
        opacity: 0.3,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 2,
            ease: EASING.smooth
        }
    });

    // About section parallax layers with different speeds
    gsap.to('.about-background', {
        y: -100,
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
            ease: EASING.smooth
        }
    });

    // About content parallax
    const aboutLayers = document.querySelectorAll('.about-section .parallax-layer');
    aboutLayers.forEach(layer => {
        const depth = parseFloat(layer.getAttribute('data-depth')) || 1;

        gsap.to(layer, {
            y: -50 * depth,
            scrollTrigger: {
                trigger: '.about-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
                ease: EASING.smooth
            }
        });
    });

    // Projects section - Each project item reveals with parallax
    gsap.utils.toArray('.project-item').forEach((item, index) => {
        // Parallax effect for each project
        gsap.to(item, {
            y: -30,
            scrollTrigger: {
                trigger: item,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
                ease: EASING.smooth
            }
        });
    });

    // Skills section background parallax
    gsap.to('.skills-section', {
        backgroundPosition: 'center -100px',
        scrollTrigger: {
            trigger: '.skills-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
}

// ============================================
// SCROLL-TRIGGERED REVEAL ANIMATIONS
// ============================================

if (!prefersReducedMotion) {
    // Section headers with stagger reveal
    gsap.utils.toArray('.section-header').forEach(header => {
        const label = header.querySelector('.section-label');
        const title = header.querySelector('.section-title');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none reverse'
            }
        });

        tl.from(label, {
            opacity: 0,
            scale: 0.8,
            y: 30,
            duration: 0.6,
            ease: EASING.dramatic
        })
            .from(title, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: EASING.cinematic
            }, '-=0.3');
    });

    // About section
    gsap.from('.about-text p', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: EASING.smooth,
        scrollTrigger: {
            trigger: '.about-text',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });

    // Animated stats counter
    const stats = document.querySelectorAll('.stat-value');
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const start = parseInt(stat.textContent);

        ScrollTrigger.create({
            trigger: stat,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(stat, {
                    textContent: target,
                    duration: 2,
                    ease: "power1.out",
                    snap: { textContent: 1 },
                    onUpdate: function () {
                        stat.textContent = Math.ceil(this.targets()[0].textContent);
                    }
                });
            }
        });
    });

    gsap.from('.stat', {
        y: 20,
        duration: 0.6,
        stagger: 0.15,
        ease: EASING.smooth,
        scrollTrigger: {
            trigger: '.about-stats',
            start: 'top 90%',
            toggleActions: 'play none none none'
        }
    });

    // Experience section
    gsap.from('.experience-item', {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.experience-timeline',
            start: 'top 75%'
        }
    });

    gsap.from('.experience-icon', {
        scale: 0,
        rotation: -180,
        duration: 0.8,
        stagger: 0.3,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.experience-timeline',
            start: 'top 75%'
        }
    });


    // Projects Timeline - Right side cards slide from right individually
    gsap.utils.toArray('.project-item--right').forEach((item) => {
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

    // Projects Timeline - Left side cards slide from left individually
    gsap.utils.toArray('.project-item--left').forEach((item) => {
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

    // Animate project date badges individually
    gsap.utils.toArray('.project-date').forEach((badge) => {
        gsap.from(badge, {
            scale: 0,
            rotation: 360,
            duration: 0.8,
            ease: 'back.out(2)',
            scrollTrigger: {
                trigger: badge.closest('.project-item'),
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Skills
    gsap.from('.skill-category', {
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        ease: EASING.smooth,
        scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 90%',
            toggleActions: 'play none none none'
        }
    });

    gsap.utils.toArray('.skill-category').forEach(category => {
        const tags = category.querySelectorAll('.skill-tag');
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

    // Contact
    gsap.from('.contact-text', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 75%'
        }
    });

    gsap.from('.contact-card', {
        y: 20,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
            trigger: '.contact-links',
            start: 'top 90%',
            toggleActions: 'play none none none'
        }
    });
}

// ============================================
// PROJECT CARD HOVER ANIMATIONS
// ============================================

if (!prefersReducedMotion) {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const cardTimeline = gsap.timeline({ paused: true });

        cardTimeline
            .to(card.querySelector('.card-overlay'), {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: 0.3
            })
            .to(card.querySelector('.card-image'), {
                scale: 1.08,
                duration: 0.4
            }, '-=0.2')
            .from(card.querySelector('.card-title'), {
                y: 20,
                opacity: 0,
                duration: 0.3
            }, '-=0.2')
            .from(card.querySelectorAll('.tech-tag'), {
                scale: 0,
                opacity: 0,
                stagger: 0.05,
                duration: 0.2
            }, '-=0.1')
            .from(card.querySelector('.view-button'), {
                scale: 0.8,
                opacity: 0,
                duration: 0.3
            });

        card.addEventListener('mouseenter', () => cardTimeline.play());
        card.addEventListener('mouseleave', () => cardTimeline.reverse());
    });
}

// ============================================
// NAVIGATION
// ============================================

// Smooth scroll for navigation links using GSAP
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            if (smoother) {
                // Use ScrollSmoother's scrollTo for butter-smooth scrolling
                smoother.scrollTo(target, true, "top 80px");
            } else {
                // Fallback for when ScrollSmoother isn't available
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Active section tracking for navigation
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

function updateActiveSection() {
    const scrollY = window.pageYOffset + 200; // Adjust offset for better triggering

    let currentSection = null;

    // Find the current section by checking from top to bottom
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        // Check if current scroll position is within this section
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
            currentSection = section.getAttribute('id');
        }
    });

    // Update nav links based on current section
    if (currentSection) {
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href').substring(1); // Remove the #
            if (linkHref === currentSection) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

window.addEventListener('scroll', updateActiveSection);
updateActiveSection();

// Navbar background on scroll
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        nav.classList.add('nav--scrolled');
    } else {
        nav.classList.remove('nav--scrolled');
    }

    lastScroll = currentScroll;
});

// ============================================
// SCROLL INDICATOR FADE
// ============================================

const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const opacity = Math.max(0, 1 - scrolled / 300);
        scrollIndicator.style.opacity = opacity;
    });
}

// ============================================
// TRANSITION MANAGER
// ============================================

class TransitionManager {
    constructor() {
        this.transitionOverlay = document.querySelector('.transition-overlay');
    }

    filmBurn(direction = 'right') {
        const tl = gsap.timeline();

        tl
            .set(this.transitionOverlay, {
                background: `linear-gradient(90deg, 
          #FF6B6B 0%, 
          #FFD166 25%, 
          #4ECDC4 50%, 
          #6A0572 75%, 
          #0A0A0A 100%)`,
                x: direction === 'right' ? '-100%' : '100%'
            })
            .to(this.transitionOverlay, {
                x: '0%',
                duration: 0.5,
                ease: 'power4.in'
            })
            .to(this.transitionOverlay, {
                x: direction === 'right' ? '100%' : '-100%',
                duration: 0.5,
                ease: 'power4.out',
                delay: 0.3
            });

        return tl;
    }

    lensFlare(x, y) {
        const flare = document.createElement('div');
        flare.className = 'lens-flare';
        flare.style.cssText = `
      position: fixed;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 107, 107, 0.6) 0%, rgba(78, 205, 196, 0.3) 50%, transparent 70%);
      pointer-events: none;
      z-index: 10001;
      transform: translate(-50%, -50%);
    `;
        document.body.appendChild(flare);

        gsap.set(flare, {
            x: x,
            y: y,
            scale: 0
        });

        const tl = gsap.timeline();

        tl
            .to(flare, {
                scale: 3,
                opacity: 1,
                duration: 0.3,
                ease: 'power4.out'
            })
            .to(flare, {
                scale: 0,
                opacity: 0,
                duration: 0.4,
                ease: 'power4.in',
                onComplete: () => flare.remove()
            });

        return tl;
    }
}

const transitionManager = new TransitionManager();

// Example: Trigger transition on logo click
document.querySelector('.nav__logo')?.addEventListener('click', (e) => {
    e.preventDefault();
    transitionManager.filmBurn();
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy loading observer
const lazyLoadImages = () => {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
};

lazyLoadImages();

// GPU Acceleration for animated elements
const forceGPU = (element) => {
    element.style.transform = 'translateZ(0)';
    element.style.willChange = 'transform';
};

document.querySelectorAll('.project-card, .skill-category, .stat').forEach(forceGPU);

// Refresh ScrollTrigger on window resize (debounced)
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});

// ============================================
// PERFORMANCE MONITORING
// ============================================

const perfObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach(entry => {
        if (entry.duration > 100) {
            console.warn(`Slow animation: ${entry.name} - ${entry.duration}ms`);
        }
    });
});

if ('PerformanceObserver' in window) {
    perfObserver.observe({ entryTypes: ['measure'] });
}

// Toggle animations control (optional)
const toggleAnimations = (enabled) => {
    if (enabled && !prefersReducedMotion) {
        gsap.globalTimeline.play();
    } else {
        gsap.globalTimeline.pause();

        // Show all content immediately
        gsap.set('[data-animate]', {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1
        });
    }
};

// Export for external use
window.portfolioAnimations = {
    transitionManager,
    toggleAnimations,
    EASING,
    PRESETS
};
