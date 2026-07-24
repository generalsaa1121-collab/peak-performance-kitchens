import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, stagger, viewport } from '../../lib/motion';

/**
 * Scroll-reveal primitives. All three collapse to static markup when the user
 * prefers reduced motion — content and layout are always preserved.
 *
 *  - <Reveal>       single element that animates itself into view
 *  - <Stagger>      container that sequences its <StaggerItem> children
 *  - <StaggerItem>  child that inherits its parent's in-view trigger
 */

type Tag = 'div' | 'section' | 'ul' | 'ol' | 'li' | 'span' | 'p' | 'h2' | 'h3';

const tags = {
  div: motion.div,
  section: motion.section,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  span: motion.span,
  p: motion.p,
  h2: motion.h2,
  h3: motion.h3,
} as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: Tag;
  variants?: Variants;
  amount?: number;
}

export function Reveal({ children, className, as = 'div', variants = fadeUp, amount }: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }
  const M = tags[as];
  return (
    <M
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewport.once, amount: amount ?? viewport.amount }}
    >
      {children}
    </M>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  as?: Tag;
  amount?: number;
  gap?: number;
  delay?: number;
}

export function Stagger({ children, className, as = 'div', amount, gap = 0.09, delay = 0 }: StaggerProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }
  const M = tags[as];
  return (
    <M
      className={className}
      variants={stagger(gap, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewport.once, amount: amount ?? viewport.amount }}
    >
      {children}
    </M>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: Tag;
  variants?: Variants;
}

export function StaggerItem({ children, className, as = 'div', variants = fadeUp }: StaggerItemProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }
  const M = tags[as];
  return (
    <M className={className} variants={variants}>
      {children}
    </M>
  );
}
