import { useEffect, useState } from 'react';

/**
 * True once the page has scrolled past `threshold`px. Used to transition the
 * header from its transparent hero state into a solid sticky bar. Uses a single
 * passive listener; React bails out of re-renders when the boolean is unchanged.
 */
export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
