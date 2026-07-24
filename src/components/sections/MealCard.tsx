import { motion, useReducedMotion } from 'framer-motion';
import type { Meal } from '../../types';
import { usePlan } from '../../context/PlanContext';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { Tag } from '../ui/Tag';
import { Icon } from '../ui/Icon';
import { cn, usd } from '../../lib/utils';
import { EASE } from '../../lib/motion';

/** A macro stat cell; protein is highlighted green. */
function Macro({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex flex-col items-center px-1 py-2">
      <span className={cn('font-display text-sm font-bold tabular-nums', highlight ? 'text-green' : 'text-white')}>
        {value}
      </span>
      <span className="mt-0.5 text-[0.65rem] uppercase tracking-wide text-steel">{label}</span>
    </div>
  );
}

export function MealCard({ meal }: { meal: Meal }) {
  const reduce = useReducedMotion();
  const { has, toggle, openMeal } = usePlan();
  const inPlan = has(meal.id);

  return (
    <motion.article
      layout={!reduce}
      initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, ease: EASE }}
      className="group relative flex flex-col overflow-hidden rounded-card border border-white/10 bg-ink-800 transition-colors duration-300 hover:border-green/40"
    >
      {/* Image → opens detail */}
      <button
        type="button"
        onClick={() => openMeal(meal.id)}
        className="relative block overflow-hidden text-left"
        aria-label={`View details for ${meal.name}`}
      >
        <ResponsiveImage
          image={meal.image}
          seed={meal.id}
          className="aspect-[4/3] w-full"
          imgClassName="transition-transform duration-[900ms] ease-peak group-hover:scale-[1.06]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between p-3">
          <Tag variant="default" className="backdrop-blur-sm">
            {meal.kind}
          </Tag>
          {meal.featured && <Tag variant="green">Chef’s pick</Tag>}
        </div>
      </button>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-bold leading-tight text-white">{meal.name}</h3>
          <span className="shrink-0 font-display text-base font-bold text-green">{usd(meal.price)}</span>
        </div>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ash">{meal.description}</p>

        {meal.dietary.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {meal.dietary.map((d) => (
              <Tag key={d} variant="outline">
                {d}
              </Tag>
            ))}
          </div>
        )}

        {/* Macros */}
        <div className="mt-4 grid grid-cols-4 divide-x divide-white/[0.08] rounded-xl bg-white/[0.03] ring-1 ring-inset ring-white/[0.06]">
          <Macro label="Cal" value={`${meal.macros.calories}`} />
          <Macro label="Protein" value={`${meal.macros.protein}g`} highlight />
          <Macro label="Carbs" value={`${meal.macros.carbs}g`} />
          <Macro label="Fat" value={`${meal.macros.fats}g`} />
        </div>

        {/* Actions */}
        <div className="mt-5 flex items-center gap-2">
          <button
            type="button"
            onClick={() => toggle(meal.id)}
            aria-pressed={inPlan}
            className={cn(
              'inline-flex flex-1 items-center justify-center gap-1.5 rounded-pill px-4 py-2.5 text-sm font-semibold transition-all duration-200 ease-peak active:scale-[0.97]',
              inPlan
                ? 'bg-green/15 text-green ring-1 ring-inset ring-green/40'
                : 'bg-green text-ink-900 hover:brightness-[1.06]',
            )}
          >
            {inPlan ? (
              <>
                <Icon name="choose" className="h-4 w-4" strokeWidth={2} /> In your plan
              </>
            ) : (
              'Add to plan'
            )}
          </button>
          <button
            type="button"
            onClick={() => openMeal(meal.id)}
            className="inline-flex items-center justify-center rounded-pill border border-white/15 px-4 py-2.5 text-sm font-semibold text-cloud transition-colors hover:border-green hover:text-white"
          >
            Details
          </button>
        </div>
      </div>
    </motion.article>
  );
}
