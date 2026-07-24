/** Tiny classname joiner (keeps class logic readable without extra deps). */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

/** Format a USD amount. `cents` shows two decimals; otherwise whole dollars. */
export function usd(amount: number, cents = true): string {
  return cents ? `$${amount.toFixed(2)}` : `$${Math.round(amount)}`;
}

/** Deterministic small hash from a string — used to vary placeholder visuals. */
export function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/** Smooth-scroll to an in-page anchor, respecting reduced-motion + header offset. */
export function scrollToAnchor(href: string): void {
  if (!href.startsWith('#')) return;
  const el = document.getElementById(href.slice(1));
  if (!el) return;
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({
    behavior: prefersReduced ? 'auto' : 'smooth',
    block: 'start',
  });
}
