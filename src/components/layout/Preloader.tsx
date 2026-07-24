import { motion, useReducedMotion } from 'framer-motion';
import { logos } from '../../config/assets';
import { brand } from '../../config/brand';
import { EASE } from '../../lib/motion';

/**
 * Brief, tasteful loading state built around the mountain symbol. Mounted inside
 * an AnimatePresence in App; timing lives there. Reduced-motion shortens the
 * progress sweep and drops transforms.
 */
export function Preloader() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: EASE } }}
    >
      <motion.img
        src={logos.symbolMarkLight}
        alt=""
        aria-hidden="true"
        className="h-14 w-auto"
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      />

      <div className="mt-6 h-0.5 w-40 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-green"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: reduce ? 0.25 : 1.05, ease: EASE }}
        />
      </div>

      <motion.p
        className="mt-4 font-display text-[0.7rem] font-semibold uppercase tracking-peak text-steel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
      >
        {brand.name}
      </motion.p>

      <span className="sr-only" role="status">
        Loading
      </span>
    </motion.div>
  );
}
