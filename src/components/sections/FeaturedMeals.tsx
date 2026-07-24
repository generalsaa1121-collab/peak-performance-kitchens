import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { MealFilter } from '../../types';
import { meals, mealFilters } from '../../data/meals';
import { sections } from '../../data/siteContent';
import { SectionHeading } from '../ui/SectionHeading';
import { MealFilters } from './MealFilters';
import { MealCard } from './MealCard';

export function FeaturedMeals() {
  const [active, setActive] = useState<string>('All');

  const filtered = useMemo(
    () =>
      active === 'All'
        ? meals
        : meals.filter((meal) => meal.filters.includes(active as MealFilter)),
    [active],
  );

  return (
    <section id="meals" className="scroll-mt-24 py-20 lg:py-28">
      <div className="u-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={sections.meals.eyebrow}
            heading={sections.meals.heading}
            subhead={sections.meals.subhead}
          />
          <p className="shrink-0 text-sm text-steel lg:text-right">
            Sample menu · {filtered.length} {filtered.length === 1 ? 'meal' : 'meals'}
          </p>
        </div>

        <div className="mt-8 overflow-x-auto pb-1 u-no-scrollbar">
          <MealFilters filters={mealFilters} active={active} onChange={setActive} />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
