import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { weeklyMenu } from '../../data/weeklyMenu';
import { mealById } from '../../data/meals';
import { sections } from '../../data/siteContent';
import { usePlan } from '../../context/PlanContext';
import { SectionHeading } from '../ui/SectionHeading';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { Icon } from '../ui/Icon';
import { cn, usd } from '../../lib/utils';
import { EASE } from '../../lib/motion';

export function WeeklyMenu() {
  const reduce = useReducedMotion();
  const [dayIndex, setDayIndex] = useState(0);
  const { has, toggle, openMeal } = usePlan();
  const day = weeklyMenu[dayIndex];
  const dayMeals = day.mealIds.map(mealById).filter((m): m is NonNullable<typeof m> => Boolean(m));

  return (
    <section id="menu-preview" className="scroll-mt-24 border-t border-white/10 bg-ink-800 py-20 lg:py-28">
      <div className="u-container">
        <SectionHeading
          eyebrow={sections.weeklyMenu.eyebrow}
          heading={sections.weeklyMenu.heading}
          subhead={sections.weeklyMenu.subhead}
        />

        {/* Day selector */}
        <div role="tablist" aria-label="Select a day" className="mt-8 flex flex-wrap gap-2">
          {weeklyMenu.map((d, i) => {
            const active = i === dayIndex;
            return (
              <button
                key={d.day}
                role="tab"
                aria-selected={active}
                onClick={() => setDayIndex(i)}
                className={cn(
                  'relative rounded-pill px-4 py-2 text-sm font-semibold transition-colors duration-200',
                  active ? 'text-ink-900' : 'text-ash hover:text-white',
                )}
              >
                {active &&
                  (reduce ? (
                    <span className="absolute inset-0 rounded-pill bg-green" />
                  ) : (
                    <motion.span
                      layoutId="weekday-pill"
                      className="absolute inset-0 rounded-pill bg-green"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  ))}
                <span className="relative z-10">
                  <span className="sm:hidden">{d.day}</span>
                  <span className="hidden sm:inline">{d.full}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Day meals */}
        <AnimatePresence mode="wait">
          <motion.ul
            key={day.day}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            {dayMeals.map((meal) => {
              const inPlan = has(meal.id);
              return (
                <li
                  key={meal.id}
                  className="flex gap-4 rounded-card border border-white/10 bg-ink-900/40 p-3 transition-colors duration-300 hover:border-green/40"
                >
                  <button
                    type="button"
                    onClick={() => openMeal(meal.id)}
                    aria-label={`View details for ${meal.name}`}
                    className="block h-24 w-24 shrink-0 overflow-hidden rounded-lg"
                  >
                    <ResponsiveImage image={meal.image} seed={meal.id} className="h-24 w-24" />
                  </button>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="truncate font-display text-sm font-bold text-white">{meal.name}</h3>
                      <span className="shrink-0 text-sm font-bold text-green">{usd(meal.price)}</span>
                    </div>
                    <p className="mt-1 text-xs tabular-nums text-ash">
                      {meal.macros.calories} cal · {meal.macros.protein}P · {meal.macros.carbs}C ·{' '}
                      {meal.macros.fats}F
                    </p>
                    <div className="mt-auto flex items-center gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => toggle(meal.id)}
                        aria-pressed={inPlan}
                        className={cn(
                          'inline-flex items-center gap-1 rounded-pill px-3 py-1.5 text-xs font-semibold transition-all duration-200 active:scale-95',
                          inPlan
                            ? 'bg-green/15 text-green ring-1 ring-inset ring-green/40'
                            : 'bg-green text-ink-900 hover:brightness-[1.06]',
                        )}
                      >
                        {inPlan ? (
                          <>
                            <Icon name="choose" className="h-3.5 w-3.5" strokeWidth={2} /> Added
                          </>
                        ) : (
                          'Add'
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => openMeal(meal.id)}
                        className="text-xs font-semibold text-ash transition-colors hover:text-green"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </motion.ul>
        </AnimatePresence>

        <p className="mt-6 text-xs text-steel">
          Sample week for preview. The live weekly menu and online ordering open at launch.
        </p>
      </div>
    </section>
  );
}
