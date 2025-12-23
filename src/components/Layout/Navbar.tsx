import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';

export const Navbar = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        setHidden(latest > previous && latest > 150 && !mobileMenuOpen);
        setScrolled(latest > 50);
    });

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'projects', 'skills', 'contact'];
            const scrollPosition = window.scrollY + 200; // Offset for better triggering

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero', id: 'hero' },
        { name: 'Work', href: '#projects', id: 'projects' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    const scrollTo = (id: string) => {
        setMobileMenuOpen(false);
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <AnimatePresence>
                <motion.header
                    variants={{
                        visible: { y: 0, opacity: 1 },
                        hidden: { y: -100, opacity: 0 },
                    }}
                    animate={hidden ? "hidden" : "visible"}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6 pointer-events-none"
                >
                    <div 
                        className={`
                            pointer-events-auto
                            flex items-center justify-between
                            gap-6 px-6 py-3
                            rounded-full 
                            border transition-all duration-200
                            ${scrolled || mobileMenuOpen
                                ? 'bg-surface/90 border-border-color backdrop-blur-md shadow-sm' 
                                : 'bg-transparent border-transparent'
                            }
                        `}
                    >
                        <button 
                            onClick={() => scrollTo('#hero')}
                            className="text-sm font-semibold text-text-primary hover:text-accent transition-colors"
                        >
                            Vatsal Umrania
                        </button>

                        <nav className="hidden md:flex items-center gap-2">
                            {navLinks.slice(1).map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollTo(link.href)}
                                    className={`
                                        text-sm px-3 py-1.5 rounded-full transition-colors duration-200
                                        ${activeSection === link.id 
                                            ? 'text-text-primary font-medium' 
                                            : 'text-text-muted hover:bg-white/10 hover:text-text-primary'
                                        }
                                    `}
                                >
                                    {link.name}
                                </button>
                            ))}
                        </nav>

                        <div className="hidden md:flex items-center gap-4">
                            <div className="w-px h-4 bg-border-color" />
                            <a 
                                href="https://drive.google.com/file/d/1sm2KMNAlTlTkwFDYhkwf_q0i0KvSeYHp/view?usp=drive_link" 
                                target="_blank"
                                className="flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent transition-colors"
                            >
                                <span>Resume</span>
                                <FiDownload size={14} />
                            </a>
                        </div>

                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-text-primary"
                        >
                            {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                        </button>
                    </div>
                </motion.header>
            </AnimatePresence>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-bg-primary pt-24 px-6 pb-12 flex flex-col md:hidden"
                    >
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollTo(link.href)}
                                    className={`
                                        text-lg font-medium text-left py-2 border-b border-border-color/50
                                        ${activeSection === link.id ? 'text-accent' : 'text-text-primary'}
                                    `}
                                >
                                    {link.name}
                                </button>
                            ))}
                        </nav>
                        
                        <div className="mt-8">
                             <a 
                                href="/assets/Vatsal Umrania.pdf" 
                                target="_blank"
                                className="flex items-center gap-2 text-lg font-medium text-text-primary"
                            >
                                <span>Download Resume</span>
                                <FiDownload size={18} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};