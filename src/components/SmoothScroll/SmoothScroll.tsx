import { useEffect } from 'react';
import Lenis from 'lenis';
import useMediaQuery from '../../hooks/useMediaQuery';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const SmoothScroll = () => {
    const prefersReducedMotion = usePrefersReducedMotion();
    const isTouchDevice = useMediaQuery('(pointer: coarse)');

    useEffect(() => {
        if (prefersReducedMotion || isTouchDevice) {
            return;
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        let rafId = 0;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, [prefersReducedMotion, isTouchDevice]);

    return null;
};

export default SmoothScroll;
