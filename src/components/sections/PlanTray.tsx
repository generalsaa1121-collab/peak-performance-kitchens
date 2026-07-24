import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { usePlan } from '../../context/PlanContext';
import { EASE } from '../../lib/motion';

/**
 * Floating indicator for the mock meal selection. Appears when meals are added.
 * Clearly labeled as a preview — no real checkout is wired.
 */
export function PlanTray() {
  const reduce = useReducedMotion();
  const { count, clear } = usePlan();

  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 70 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="fixed inset-x-0 bottom-4 z-40 mx-auto flex w-[calc(100%-2rem)] max-w-sm items-center gap-3 rounded-pill border border-white/12 bg-ink-800/90 px-3 py-2.5 shadow-lift backdrop-blur-md sm:w-auto"
          role="status"
          aria-live="polite"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green font-display text-sm font-bold text-ink-900">
            {count}
          </span>
          <div className="min-w-0 flex-1 leading-tight">
            <p className="truncate text-sm font-semibold text-white">
              {count} meal{count === 1 ? '' : 's'} in your plan
            </p>
            <p className="text-[0.7rem] text-steel">Preview — checkout not enabled</p>
          </div>
          <a
            href="#meal-plans"
            className="shrink-0 rounded-pill bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-cloud transition-colors hover:text-green"
          >
            View plans
          </a>
          <button
            type="button"
            onClick={clear}
            aria-label="Clear plan selection"
            className="shrink-0 px-1 text-steel transition-colors hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
