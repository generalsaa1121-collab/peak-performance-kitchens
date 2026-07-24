import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

/**
 * Slim green reading-progress bar pinned to the very top of the viewport. It
 * tracks page scroll and is spring-smoothed so it glides rather than jitters —
 * a subtle "the page is alive" signal used across premium marketing sites.
 * Removed entirely under reduced-motion (it is a live, continuous animation).
 */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-green/70 via-green to-green-soft"
    />
  );
}
