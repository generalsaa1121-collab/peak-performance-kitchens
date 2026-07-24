import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in the viewport band so the nav can show an
 * animated active state. Pass a STABLE array of section ids (defined outside
 * render or memoized) to avoid re-subscribing every render.
 */
export function useActiveSection(
  ids: string[],
  rootMargin = '-45% 0px -50% 0px',
): string {
  const [active, setActive] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin, threshold: 0 },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids, rootMargin]);

  return active;
}
