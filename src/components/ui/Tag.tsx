import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface TagProps {
  children: ReactNode;
  variant?: 'default' | 'green' | 'outline';
  className?: string;
}

/** Small pill label used for dietary tags, meal kinds and micro-labels. */
export function Tag({ children, variant = 'default', className }: TagProps) {
  const styles: Record<NonNullable<TagProps['variant']>, string> = {
    default: 'bg-white/[0.06] text-mist ring-1 ring-inset ring-white/10',
    green: 'bg-green/15 text-green ring-1 ring-inset ring-green/30',
    outline: 'text-ash ring-1 ring-inset ring-white/15',
  };
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-pill px-2.5 py-1 text-xs font-medium leading-none',
        styles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
