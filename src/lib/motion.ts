/**
 * Shared Framer Motion language. Intentionally varied — line reveals, masked
 * image wipes, scale-ins and staggered children — so the site is not one fade-up
 * repeated everywhere. Reduced-motion is handled by the Reveal/AnimatedSection
 * wrappers and by useReducedMotion in bespoke components.
 */
import type { Variants } from 'framer-motion';

/** Premium ease-out (expo-like). */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Default in-view trigger: play once, when ~25% is visible. */
export const viewport = { once: true, amount: 0.25 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

/** Small pop for chips/tags/badges. */
export const popIn: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: EASE } },
};

/** Masked image wipe — pairs with an overflow-hidden container. */
export const maskReveal: Variants = {
  hidden: { clipPath: 'inset(0 0 100% 0)', scale: 1.08 },
  visible: {
    clipPath: 'inset(0 0 0% 0)',
    scale: 1,
    transition: { duration: 0.95, ease: EASE },
  },
};

/** Line of text sliding up from behind a clip mask (parent = overflow-hidden). */
export const lineReveal: Variants = {
  hidden: { y: '115%' },
  visible: { y: '0%', transition: { duration: 0.85, ease: EASE } },
};

/** Stagger parent; children use one of the variants above. */
export function stagger(staggerChildren = 0.09, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren } },
  };
}
