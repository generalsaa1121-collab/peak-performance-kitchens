import { useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { Meal } from '../../types';
import { usePlan } from '../../context/PlanContext';
import { mealById } from '../../data/meals';
import { useModalA11y } from '../../hooks/useModalA11y';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { MacroBar } from '../ui/MacroBar';
import { Tag } from '../ui/Tag';
import { Icon } from '../ui/Icon';
import { cn, usd } from '../../lib/utils';
import { EASE } from '../../lib/motion';

/** Mounted once in App; opens whenever a meal id is set in PlanContext. */
export function MealDetailModal() {
  const { openMealId, closeMeal, has, toggle } = usePlan();
  const meal = openMealId ? mealById(openMealId) : undefined;

  return (
    <AnimatePresence>
      {meal && (
        <Dialog
          key={meal.id}
          meal={meal}
          onClose={closeMeal}
          inPlan={has(meal.id)}
          onToggle={() => toggle(meal.id)}
        />
      )}
    </AnimatePresence>
  );
}

interface DialogProps {
  meal: Meal;
  onClose: () => void;
  inPlan: boolean;
  onToggle: () => void;
}

function Dialog({ meal, onClose, inPlan, onToggle }: DialogProps) {
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  useModalA11y(panelRef, onClose);

  const { protein, carbs, fats, calories } = meal.macros;
  const total = protein * 4 + carbs * 4 + fats * 9;
  const pct = (part: number) => Math.round((part / total) * 100);
  const titleId = `meal-${meal.id}-title`;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6">
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-ink-900/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl border border-white/10 bg-ink-800 shadow-lift sm:max-h-[90vh] sm:max-w-2xl sm:rounded-2xl"
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close meal details"
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink-900/70 text-cloud backdrop-blur transition-colors hover:bg-ink-900"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="overflow-y-auto">
          <ResponsiveImage image={meal.image} seed={meal.id} className="aspect-[16/10] w-full" priority />

          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <Tag variant="green">{meal.kind}</Tag>
              {meal.dietary.map((d) => (
                <Tag key={d} variant="outline">
                  {d}
                </Tag>
              ))}
            </div>

            <div className="mt-4 flex items-start justify-between gap-4">
              <h2 id={titleId} className="font-display text-2xl font-bold text-white sm:text-3xl">
                {meal.name}
              </h2>
              <span className="shrink-0 font-display text-xl font-bold text-green">{usd(meal.price)}</span>
            </div>

            <p className="mt-3 leading-relaxed text-ash">{meal.description}</p>

            {/* Nutrition */}
            <div className="mt-6 rounded-card border border-white/[0.08] bg-white/[0.02] p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
                  Nutrition
                </h3>
                <span className="text-sm text-ash">
                  <span className="font-display text-lg font-bold text-white">{calories}</span> cal
                </span>
              </div>
              <div className="mt-4 flex flex-col gap-3">
                <MacroBar label="Protein" grams={protein} percent={pct(protein * 4)} tone="protein" />
                <MacroBar label="Carbs" grams={carbs} percent={pct(carbs * 4)} tone="carbs" />
                <MacroBar label="Fats" grams={fats} percent={pct(fats * 9)} tone="fats" />
              </div>
              <p className="mt-3 text-[0.7rem] text-steel">Sample nutrition data — verify before launch.</p>
            </div>

            {/* Ingredients + allergens */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
                  Ingredients
                </h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {meal.ingredients.map((ing) => (
                    <li key={ing}>
                      <Tag>{ing}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
                  Allergens
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-ash">
                  {meal.allergens.map((a) => (
                    <li key={a} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-steel" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onToggle}
                aria-pressed={inPlan}
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 font-display font-semibold transition-all duration-200 ease-peak active:scale-[0.97]',
                  inPlan
                    ? 'bg-green/15 text-green ring-1 ring-inset ring-green/40'
                    : 'bg-green text-ink-900 hover:brightness-[1.06]',
                )}
              >
                <Icon name={inPlan ? 'choose' : 'plan'} className="h-4 w-4" strokeWidth={2} />
                {inPlan ? 'In your plan' : 'Add to plan'}
              </button>
              <p className="text-xs text-steel">
                Preview only — online ordering opens at launch.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
