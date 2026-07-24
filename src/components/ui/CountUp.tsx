import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';

interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/** Counts up to `value` once when scrolled into view (never loops). */
export function CountUp({ value, prefix = '', suffix = '', className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const current = useCountUp(value, inView);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {Math.round(current)}
      {suffix}
    </span>
  );
}
