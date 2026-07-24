/**
 * ============================================================================
 * WEEKLY MENU PREVIEW — sample week.
 * ============================================================================
 *
 * ⚠️  SAMPLE schedule for the mockup. `mealIds` reference meals in
 * src/data/meals.ts. This is a front-end preview only — it does not imply a
 * live ordering system.
 */

import type { WeeklyMenuDay } from '../types';

export const weeklyMenu: WeeklyMenuDay[] = [
  {
    day: 'Mon',
    full: 'Monday',
    mealIds: ['protein-breakfast-bowl', 'herb-grilled-chicken', 'chimichurri-steak'],
  },
  {
    day: 'Tue',
    full: 'Tuesday',
    mealIds: ['protein-breakfast-bowl', 'southwest-chicken-bowl', 'lemon-garlic-salmon'],
  },
  {
    day: 'Wed',
    full: 'Wednesday',
    mealIds: ['protein-breakfast-bowl', 'turkey-bolognese', 'roasted-vegetable-grain-bowl'],
  },
  {
    day: 'Thu',
    full: 'Thursday',
    mealIds: ['protein-breakfast-bowl', 'high-protein-pasta', 'herb-grilled-chicken'],
  },
  {
    day: 'Fri',
    full: 'Friday',
    mealIds: ['protein-breakfast-bowl', 'southwest-chicken-bowl', 'lemon-garlic-salmon'],
  },
];
