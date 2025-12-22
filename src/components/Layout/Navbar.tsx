import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

export const Navbar = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Smart Hide logic remains identical (it worked perfectly)
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    const navLinks = [
        { name: 'INDEX', href: '#hero' },
        { name: 'SYSTEMS', href: '#projects' },
        { name: 'STACK', href: '#skills' },
        { name: 'INTERFACE', href: '#contact' },
    ];

    const scrollTo = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AnimatePresence>
            <motion.header
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: -100, opacity: 0 },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
            >
                <div 
                    className={`
                        pointer-events-auto
                        flex items-center gap-6 px-5 py-2.5 
                        rounded-full 
                        border transition-all duration-300
                        ${scrolled 
                            ? 'bg-surface/90 border-border-color backdrop-blur-md shadow-lg shadow-black/10' 
                            : 'bg-transparent border-transparent'
                        }
                    `}
                >
                    {/* Identity: Pure Text, Monospace, Document Style */}
                    {/* <button 
                        onClick={() => scrollTo('#hero')}
                        className="font-mono text-xs font-medium text-text-primary tracking-wide hover:text-accent transition-colors mr-2"
                    >
                        VATSAL UMRANIA
                    </button> */}

                    {/* Navigation: System Terminology */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.slice(1).map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollTo(link.href)}
                                className="text-[11px] font-mono text-text-muted hover:text-text-primary transition-colors tracking-wider uppercase"
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>

                    {/* Divider: Subtle Separation */}
                    <div className="w-px h-3 bg-border-color hidden md:block" />

                    {/* Primary Action: CV Only */}
                    <div>
                        <a 
                            href="https://drive.google.com/file/d/1sm2KMNAlTlTkwFDYhkwf_q0i0KvSeYHp/view?usp=sharing" 
                            target="_blank"
                            className="flex items-center gap-2 bg-text-primary hover:bg-white text-bg-primary px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold transition-all"
                        >
                            <span>CV</span>
                            <FiDownload size={10} />
                        </a>
                    </div>
                </div>
            </motion.header>
        </AnimatePresence>
    );
};