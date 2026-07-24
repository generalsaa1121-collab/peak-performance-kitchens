import { motion, useReducedMotion } from 'framer-motion';
import { navLinks, cta, brand } from '../../config/brand';
import { useScrolled } from '../../hooks/useScrolled';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

interface HeaderProps {
  menuOpen: boolean;
  activeId: string;
  onOpenMenu: () => void;
}

/**
 * Sticky header that starts transparent over the hero and transitions into a
 * solid, blurred bar after scroll. Height is constant so nothing shifts as the
 * background fades in. The active link carries an animated green underline.
 */
export function Header({ menuOpen, activeId, onOpenMenu }: HeaderProps) {
  const scrolled = useScrolled(24);
  const reduce = useReducedMotion();

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ease-peak',
        scrolled
          ? 'border-b border-white/10 bg-ink-900/80 shadow-lift backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="u-container flex h-16 items-center justify-between gap-4 lg:h-20">
        {/* Logo → home */}
        <a
          href="#home"
          aria-label={`${brand.name} — home`}
          className="flex shrink-0 items-center rounded"
        >
          <Logo variant="navDesktop" className="h-9 w-auto sm:h-10 lg:h-11" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'relative px-3 py-2 text-sm font-medium transition-colors duration-200',
                  isActive ? 'text-white' : 'text-ash hover:text-white',
                )}
              >
                {link.label}
                {isActive &&
                  (reduce ? (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-green" />
                  ) : (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-green"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  ))}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          <Button href={cta.primary.href} size="sm" className="hidden sm:inline-flex" withArrow>
            {cta.primary.label}
          </Button>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-cloud transition-colors hover:bg-white/5 lg:hidden"
          >
            <span className="sr-only">Open menu</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
