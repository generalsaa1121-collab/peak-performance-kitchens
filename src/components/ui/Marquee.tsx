import type { CSSProperties } from 'react';
import { cn } from '../../lib/utils';

interface MarqueeProps {
  items: string[];
  /** Seconds per loop. */
  duration?: number;
  reverse?: boolean;
  className?: string;
}

/**
 * Subtle horizontal brand marquee. Decorative (aria-hidden) and looped with a
 * duplicated track for seamlessness. Under reduced-motion the global CSS neutral-
 * izes the animation, leaving the words static.
 */
export function Marquee({ items, duration = 38, reverse = false, className }: MarqueeProps) {
  const track = (
    <div className="flex shrink-0 items-center gap-8 pr-8" aria-hidden="true">
      {items.map((item, i) => (
        <div key={`${item}-${i}`} className="flex items-center gap-8">
          <span className="font-display text-sm font-semibold uppercase tracking-peak text-mist">
            {item}
          </span>
          <span className="h-1.5 w-1.5 rotate-45 bg-green" />
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn('u-edge-fade-x w-full overflow-hidden', className)}>
      <div
        className={cn('flex w-max', reverse ? 'animate-marquee-reverse' : 'animate-marquee')}
        style={{ ['--marquee-duration']: `${duration}s` } as CSSProperties}
      >
        {track}
        {track}
      </div>
    </div>
  );
}
