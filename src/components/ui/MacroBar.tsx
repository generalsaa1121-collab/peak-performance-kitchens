import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '../../lib/motion';
import { cn } from '../../lib/utils';

type MacroTone = 'protein' | 'carbs' | 'fats';

interface MacroBarProps {
  label: string;
  grams: number;
  percent: number;
  tone: MacroTone;
  className?: string;
}

/** Protein is the green "performance" highlight; carbs/fats stay neutral. */
const toneClass: Record<MacroTone, string> = {
  protein: 'bg-green',
  carbs: 'bg-mist',
  fats: 'bg-steel',
};

/** Labeled macro bar whose fill animates to `percent` when scrolled into view. */
export function MacroBar({ label, grams, percent, tone, className }: MacroBarProps) {
  const reduce = useReducedMotion();

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <div className="flex items-baseline justify-between text-sm">
        <span className="font-medium text-cloud">{label}</span>
        <span className="tabular-nums text-ash">
          {grams}g · {percent}%
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-pill bg-white/[0.08]">
        {reduce ? (
          <div className={cn('h-full rounded-pill', toneClass[tone])} style={{ width: `${percent}%` }} />
        ) : (
          <motion.div
            className={cn('h-full rounded-pill', toneClass[tone])}
            initial={{ width: 0 }}
            whileInView={{ width: `${percent}%` }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1, ease: EASE }}
          />
        )}
      </div>
    </div>
  );
}
