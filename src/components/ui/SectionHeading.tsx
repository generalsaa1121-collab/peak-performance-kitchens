import type { ReactNode } from 'react';
import { Stagger, StaggerItem } from './Animated';
import { Icon } from './Icon';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  heading: ReactNode;
  subhead?: string;
  align?: 'left' | 'center';
  className?: string;
  headingClassName?: string;
  /** Hide the little mountain glyph in the eyebrow. */
  hideGlyph?: boolean;
}

/** Consistent eyebrow → heading → subhead block with a staggered reveal. */
export function SectionHeading({
  eyebrow,
  heading,
  subhead,
  align = 'left',
  className,
  headingClassName,
  hideGlyph = false,
}: SectionHeadingProps) {
  return (
    <Stagger
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
      gap={0.12}
    >
      {eyebrow && (
        <StaggerItem>
          <span className="u-kicker">
            {!hideGlyph && <Icon name="mountain" className="h-4 w-4" strokeWidth={2} />}
            {eyebrow}
          </span>
        </StaggerItem>
      )}
      <StaggerItem as="h2">
        <span
          className={cn(
            'block max-w-2xl font-display text-3xl font-bold leading-[1.05] tracking-tightest text-white sm:text-4xl lg:text-[2.9rem]',
            align === 'center' && 'mx-auto',
            headingClassName,
          )}
        >
          {heading}
        </span>
      </StaggerItem>
      {subhead && (
        <StaggerItem as="p">
          <span
            className={cn(
              'block max-w-xl text-base leading-relaxed text-ash sm:text-[1.05rem]',
              align === 'center' && 'mx-auto',
            )}
          >
            {subhead}
          </span>
        </StaggerItem>
      )}
    </Stagger>
  );
}
