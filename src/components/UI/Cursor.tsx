import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const updateHoverState = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over clickable elements
            const isClickable = target.closest('a, button, [role="button"]');
            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', updateHoverState);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', updateHoverState);
        };
    }, []);

    // Hide on mobile/touch devices
    if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        return null;
    }

    return (
        <motion.div
            className="fixed top-0 left-0 z-9999 pointer-events-none mix-blend-difference"
            animate={{
                x: position.x - 16,
                y: position.y - 16,
                scale: isHovering ? 1.5 : 1,
            }}
            transition={{
                duration: 0.1, // Slight lag for smooth feeling
                ease: "linear"
            }}
        >
            {/* The Reticle Shape */}
            <div className="relative w-8 h-8 flex items-center justify-center">
                {/* Center Dot */}
                <div className="w-1 h-1 bg-white rounded-full" />
                
                {/* Crosshairs (Only visible when hovering) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0.5 }}
                    className="absolute inset-0 border border-white/50 rounded-full"
                />
            </div>
        </motion.div>
    );
};