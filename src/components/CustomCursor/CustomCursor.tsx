import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import useMediaQuery from '../../hooks/useMediaQuery';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import './CustomCursor.css';

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [cursorText, setCursorText] = useState('');

    const prefersReducedMotion = usePrefersReducedMotion();
    const isDesktopFinePointer = useMediaQuery('(min-width: 769px) and (pointer: fine)');
    const isEnabled = isDesktopFinePointer && !prefersReducedMotion;

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // 更加灵敏的弹簧配置
    const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        if (!isEnabled) {
            document.body.classList.remove('has-custom-cursor');
            return;
        }

        document.body.classList.add('has-custom-cursor');
        return () => {
            document.body.classList.remove('has-custom-cursor');
        };
    }, [isEnabled]);

    useEffect(() => {
        if (!isEnabled) return;

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        const handleElementHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const hoverable = target.closest('a, button, .clickable, input, textarea, [data-cursor]');
            setIsHovering(!!hoverable);

            if (!hoverable) {
                setCursorText('');
                return;
            }

            const label = (hoverable as HTMLElement).getAttribute('data-cursor');
            setCursorText(label ?? '');
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleElementHover);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleElementHover);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [cursorX, cursorY, isEnabled]);

    if (!isEnabled) {
        return null;
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className={`simple-cursor ${isHovering ? 'hovering' : ''} ${cursorText ? 'has-label' : ''}`}
                    style={{
                        x: cursorXSpring,
                        y: cursorYSpring,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                >
                    {cursorText && <span className="cursor-label">{cursorText}</span>}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CustomCursor;
