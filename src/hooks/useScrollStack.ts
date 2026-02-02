import { useRef, useState, type RefObject } from 'react';
import { useMotionValueEvent, useScroll, type MotionValue } from 'framer-motion';

type ScrollStack = {
  ref: RefObject<HTMLDivElement | null>;
  scrollYProgress: MotionValue<number>;
  activeIndex: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const useScrollStack = (count: number): ScrollStack => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (count <= 1) return;

    const next = clamp(Math.round(latest * (count - 1)), 0, count - 1);
    setActiveIndex((prev) => (prev === next ? prev : next));
  });

  return { ref, scrollYProgress, activeIndex };
};

export default useScrollStack;
