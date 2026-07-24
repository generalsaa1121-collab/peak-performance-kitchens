import { logos, type LogoKey } from '../../config/assets';
import { brand } from '../../config/brand';
import { cn } from '../../lib/utils';

interface LogoProps {
  /** Which mapped logo variation to render. */
  variant?: LogoKey;
  className?: string;
  /** Custom alt text; defaults to the brand name. */
  alt?: string;
  /** Marks the image decorative (empty alt + aria-hidden). */
  decorative?: boolean;
}

/**
 * Renders the correct logo variation from the central asset map. Swapping the
 * official artwork is a matter of updating src/config/assets.ts — no component
 * edits needed. The image keeps its intrinsic proportions (width auto).
 */
export function Logo({ variant = 'navDesktop', className, alt, decorative }: LogoProps) {
  return (
    <img
      src={logos[variant]}
      alt={decorative ? '' : alt ?? brand.name}
      aria-hidden={decorative || undefined}
      className={cn('block h-auto w-auto select-none', className)}
      draggable={false}
    />
  );
}
