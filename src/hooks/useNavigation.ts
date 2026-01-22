import { useEffect, useState } from 'react';

/**
 * Custom hook for tracking active section in navigation
 * Based on scroll position
 */
export const useNavigation = () => {
    const [activeSection, setActiveSection] = useState<string>('');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const updateActiveSection = () => {
            const scrollY = window.pageYOffset + 200;
            let currentSection: string | null = null;

            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop;
                const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;

                if (scrollY >= sectionTop && scrollY < sectionBottom) {
                    currentSection = section.getAttribute('id');
                }
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }

            // Update scroll state for navbar styling
            setIsScrolled(window.pageYOffset > 50);
        };

        window.addEventListener('scroll', updateActiveSection);
        updateActiveSection(); // Initial call

        return () => {
            window.removeEventListener('scroll', updateActiveSection);
        };
    }, []);

    return { activeSection, isScrolled };
};
