import type { Transition, Variants, ViewportOptions } from 'framer-motion';

export const EASE_OUT: Transition['ease'] = [0.16, 1, 0.3, 1];

export const DURATIONS = {
  fast: 0.2,
  base: 0.45,
  slow: 0.6,
};

export const VIEWPORT: ViewportOptions = {
  once: true,
  margin: '-120px',
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export const fadeUpSoftVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export const staggerContainer = (delayChildren = 0.2, staggerChildren = 0.08): Variants => ({
  hidden: {},
  show: {
    transition: {
      delayChildren,
      staggerChildren,
    },
  },
});

export const transitions = {
  reveal: { duration: DURATIONS.slow, ease: EASE_OUT },
  revealFast: { duration: DURATIONS.base, ease: EASE_OUT },
  hover: { duration: DURATIONS.fast, ease: EASE_OUT },
};

export const createRevealProps = (delay = 0, y = 24, duration = DURATIONS.slow) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT,
  transition: { duration, ease: EASE_OUT, delay },
});

export const createRevealFastProps = (delay = 0, y = 20) =>
  createRevealProps(delay, y, DURATIONS.base);
