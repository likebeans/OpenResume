import { useEffect, useRef } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import './CustomCursor.css';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);

    const prefersReducedMotion = usePrefersReducedMotion();
    const isDesktopFinePointer = useMediaQuery('(min-width: 769px) and (pointer: fine)');
    const isEnabled = isDesktopFinePointer && !prefersReducedMotion;

    useEffect(() => {
        if (!isEnabled) {
            document.body.classList.remove('has-custom-cursor');
            return;
        }

        document.body.classList.add('has-custom-cursor');

        const moveCursor = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
                cursorRef.current.style.opacity = '1';
            }
        };

        const handleMouseLeave = () => {
            if (cursorRef.current) cursorRef.current.style.opacity = '0';
        };

        window.addEventListener('mousemove', moveCursor, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.body.classList.remove('has-custom-cursor');
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isEnabled]);

    if (!isEnabled) {
        return null;
    }

    return <div ref={cursorRef} className="cursor-dot" />;
};

export default CustomCursor;
