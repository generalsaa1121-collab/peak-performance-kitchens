import { useRef, type MouseEvent } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { navLinks, cta, contact, socials, brand } from '../../config/brand';
import { useModalA11y } from '../../hooks/useModalA11y';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { logos } from '../../config/assets';

interface MobileMenuProps {
  activeId: string;
  onClose: () => void;
  /** Called when a menu link is chosen; parent scrolls after the exit anim. */
  onNavigate: (href: string) => void;
}

/**
 * Full-screen, accessible mobile menu: role="dialog"/aria-modal, focus trap,
 * Escape to close, body-scroll lock, and a staggered reveal. Mounted inside an
 * AnimatePresence in App so it animates in and out.
 */
export function MobileMenu({ activeId, onClose, onNavigate }: MobileMenuProps) {
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  useModalA11y(panelRef, onClose);

  const overlay: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, when: 'beforeChildren', staggerChildren: 0.055 },
    },
    exit: { opacity: 0, transition: { duration: 0.2, when: 'afterChildren' } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, transition: { duration: 0.15 } },
  };

  const handleNavigate = (href: string) => (e: MouseEvent) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <motion.div
      ref={panelRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label={`${brand.name} menu`}
      className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-ink-900 lg:hidden"
      variants={overlay}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Faint mountain watermark */}
      <img
        src={logos.symbolMarkLight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 -right-6 w-2/3 max-w-sm opacity-[0.05]"
      />

      {/* Top bar */}
      <div className="u-container flex h-16 items-center justify-between">
        <Logo variant="navDesktop" className="h-7 w-auto" />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-cloud transition-colors hover:bg-white/5"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      {/* Links */}
      <nav className="u-container relative mt-2 flex flex-1 flex-col justify-center" aria-label="Mobile">
        <ul className="flex flex-col gap-1 py-6">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <motion.li key={link.href} variants={item}>
                <a
                  href={link.href}
                  onClick={handleNavigate(link.href)}
                  aria-current={isActive ? 'true' : undefined}
                  className="group flex items-center justify-between border-b border-white/[0.07] py-3.5"
                >
                  <span
                    className={`font-display text-2xl font-bold tracking-tightest transition-colors ${
                      isActive ? 'text-green' : 'text-cloud group-hover:text-white'
                    }`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`text-lg transition-transform group-hover:translate-x-1 ${
                      isActive ? 'text-green' : 'text-steel'
                    }`}
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              </motion.li>
            );
          })}
        </ul>

        <motion.div variants={item} className="py-4">
          <Button href={cta.primary.href} size="lg" className="w-full" onClick={handleNavigate(cta.primary.href)} withArrow>
            {cta.primary.label}
          </Button>
        </motion.div>
      </nav>

      {/* Contact + socials */}
      <motion.div variants={item} className="u-container border-t border-white/10 py-6">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-ash">
          <a href={`mailto:${contact.email}`} className="hover:text-white">
            {contact.email}
          </a>
          <a href={contact.phoneHref} className="hover:text-white">
            {contact.phone}
          </a>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-xs uppercase tracking-widest text-steel">
          {socials.map((s) => (
            <a key={s.label} href={s.href} className="hover:text-green">
              {s.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
