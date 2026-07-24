import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

/**
 * Front-end-only mock of a meal selection ("your plan") plus the currently open
 * meal-detail modal. This is a PREVIEW: it does not persist or check out. Wire a
 * real cart/ordering backend here later.
 */
interface PlanContextValue {
  selected: string[];
  count: number;
  has: (id: string) => boolean;
  toggle: (id: string) => void;
  clear: () => void;
  openMealId: string | null;
  openMeal: (id: string) => void;
  closeMeal: () => void;
}

const PlanContext = createContext<PlanContextValue | null>(null);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [openMealId, setOpenMealId] = useState<string | null>(null);

  const toggle = useCallback((id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }, []);

  const has = useCallback((id: string) => selected.includes(id), [selected]);
  const clear = useCallback(() => setSelected([]), []);
  const openMeal = useCallback((id: string) => setOpenMealId(id), []);
  const closeMeal = useCallback(() => setOpenMealId(null), []);

  const value = useMemo<PlanContextValue>(
    () => ({
      selected,
      count: selected.length,
      has,
      toggle,
      clear,
      openMealId,
      openMeal,
      closeMeal,
    }),
    [selected, has, toggle, clear, openMealId, openMeal, closeMeal],
  );

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
}

export function usePlan(): PlanContextValue {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error('usePlan must be used within a PlanProvider');
  return ctx;
}
