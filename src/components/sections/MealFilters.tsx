import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface MealFiltersProps {
  filters: readonly string[];
  active: string;
  onChange: (filter: string) => void;
}

/** Accessible, animated filter pills for the meals grid. */
export function MealFilters({ filters, active, onChange }: MealFiltersProps) {
  const reduce = useReducedMotion();

  return (
    <div role="group" aria-label="Filter meals" className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isActive = filter === active;
        return (
          <button
            key={filter}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(filter)}
            className={cn(
              'relative rounded-pill px-4 py-2 text-sm font-semibold transition-colors duration-200',
              isActive ? 'text-ink-900' : 'text-ash hover:text-white',
            )}
          >
            {isActive &&
              (reduce ? (
                <span className="absolute inset-0 rounded-pill bg-green" />
              ) : (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-pill bg-green"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              ))}
            <span className="relative z-10">{filter}</span>
          </button>
        );
      })}
    </div>
  );
}
