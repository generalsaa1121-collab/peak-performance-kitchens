import type { MouseEventHandler, ReactNode } from 'react';
import { cn } from '../../lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'dark';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

interface AnchorProps extends BaseProps {
  href: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

interface NativeButtonProps extends BaseProps {
  href?: undefined;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

type ButtonProps = AnchorProps | NativeButtonProps;

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-pill font-display font-semibold tracking-wide ' +
  'transition-[transform,background-color,color,box-shadow,border-color] duration-200 ease-peak ' +
  'active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60 select-none';

const sizes: Record<Size, string> = {
  sm: 'text-sm px-4 py-2',
  md: 'text-[0.95rem] px-5 py-2.5',
  lg: 'text-base px-7 py-3.5',
};

const variants: Record<Variant, string> = {
  primary: 'bg-green text-ink-900 hover:shadow-green-glow hover:brightness-[1.06]',
  secondary:
    'border border-white/20 text-cloud hover:border-green hover:text-white hover:bg-white/[0.04]',
  ghost: 'text-cloud hover:text-green',
  dark: 'bg-ink-900 text-cloud hover:bg-charcoal',
};

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 transition-transform duration-200 ease-peak group-hover:translate-x-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/** Brand button that renders as an <a> when `href` is provided, else a <button>. */
export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    withArrow = false,
    className,
    children,
    onClick,
    ariaLabel,
  } = props;

  const classes = cn(base, sizes[size], variants[variant], className);

  if (props.href !== undefined) {
    return (
      <a
        href={props.href}
        target={props.target}
        rel={props.rel}
        aria-label={ariaLabel}
        onClick={onClick}
        className={classes}
      >
        {children}
        {withArrow && <Arrow />}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      disabled={props.disabled}
      aria-label={ariaLabel}
      onClick={onClick}
      className={classes}
    >
      {children}
      {withArrow && <Arrow />}
    </button>
  );
}
