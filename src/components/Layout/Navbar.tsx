import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { FiDownload, FiMenu, FiX, FiChevronRight } from 'react-icons/fi';

export const Navbar = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Smart Hide logic
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150 && !mobileMenuOpen) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: 'INDEX', href: '#hero' },
        { name: 'SYSTEMS', href: '#projects' },
        { name: 'STACK', href: '#skills' },
        { name: 'INTERFACE', href: '#contact' },
    ];

    const scrollTo = (id: string) => {
        setMobileMenuOpen(false);
        const element = document.querySelector(id);
        if (element) {
            // Small delay to allow menu close animation
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    };

    return (
        <>
            <AnimatePresence>
                {/* FLOATING PILL HEADER */}
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
                            flex items-center justify-between
                            gap-4 px-5 py-2.5 
                            rounded-full 
                            border transition-all duration-300
                            ${scrolled || mobileMenuOpen
                                ? 'bg-surface/90 border-border-color backdrop-blur-md shadow-lg shadow-black/10' 
                                : 'bg-transparent border-transparent'
                            }
                            min-w-75 md:min-w-fit
                        `}
                    >
                        {/* Identity */}
                        <button 
                            onClick={() => scrollTo('#hero')}
                            className="font-mono text-xs font-medium text-text-primary tracking-wide hover:text-accent transition-colors shrink-0"
                        >
                            VATSAL UMRANIA
                        </button>

                        {/* DESKTOP NAV (Hidden on Mobile) */}
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

                        {/* DESKTOP ACTIONS (Hidden on Mobile) */}
                        <div className="hidden md:flex items-center gap-4">
                            <div className="w-px h-3 bg-border-color" />
                            <a 
                                href="https://drive.google.com/file/d/1sm2KMNAlTlTkwFDYhkwf_q0i0KvSeYHp/view?usp=drive_link" 
                                target="_blank"
                                className="flex items-center gap-2 bg-text-primary hover:bg-white text-bg-primary px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold transition-all"
                            >
                                <span>DOWNLOAD_CV</span>
                                <FiDownload size={10} />
                            </a>
                        </div>

                        {/* MOBILE MENU TOGGLE (Visible on Mobile) */}
                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-text-primary p-1 hover:text-accent transition-colors"
                        >
                            {mobileMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
                        </button>
                    </div>
                </motion.header>
            </AnimatePresence>

            {/* MOBILE FULLSCREEN MENU */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl pt-32 px-6 pb-12 flex flex-col md:hidden"
                    >
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link, idx) => (
                                <motion.button
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    onClick={() => scrollTo(link.href)}
                                    className="flex items-center justify-between p-4 border-b border-border-color/50 text-left group"
                                >
                                    <span className="font-mono text-sm text-text-primary group-hover:text-accent transition-colors tracking-widest">
                                        {link.name}
                                    </span>
                                    <FiChevronRight className="text-text-muted group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all" />
                                </motion.button>
                            ))}
                        </nav>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-auto"
                        >
                            <a 
                                href="/assets/Vatsal Umrania.pdf" 
                                target="_blank"
                                className="flex w-full justify-center items-center gap-2 bg-surface border border-border-color hover:border-accent text-text-primary py-4 rounded-sm font-mono text-xs uppercase tracking-wider transition-all"
                            >
                                <FiDownload size={14} />
                                DOWNLOAD_CV
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};