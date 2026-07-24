/**
 * ============================================================================
 * MEAL PLANS — four sample plans.
 * ============================================================================
 *
 * ⚠️  MOCK PRICING: weeklyPrice / perMealFrom are SAMPLE figures for the mockup.
 * Replace with real, final pricing before launch. The comparison is deliberately
 * honest — no plan is weakened to steer customers, and the "Most popular" flag is
 * only a visual emphasis.
 */

import type { MealPlan } from '../types';

export const mealPlans: MealPlan[] = [
  {
    id: 'essentials',
    name: 'Essentials',
    tagline: 'Consistency, made effortless.',
    quantity: '6 meals / week',
    idealFor: 'Anyone who wants a few reliable, ready meals each week.',
    flexibility: 'Swap any meal • Skip anytime',
    highlight: 'The simplest way to eat well on a busy schedule.',
    weeklyPrice: 69,
    perMealFrom: 11.5,
    features: [
      '6 chef-prepared meals',
      'Rotating weekly menu access',
      'Full macros on every meal',
      'Heat-and-eat in minutes',
    ],
    ctaLabel: 'Start with Essentials',
  },
  {
    id: 'lean-balanced',
    name: 'Lean & Balanced',
    tagline: 'Portion-aware, never boring.',
    quantity: '8 meals / week',
    idealFor: 'Customers prioritizing balanced portions and steady energy.',
    flexibility: 'Swap any meal • Skip anytime',
    highlight: 'Balanced calories and macros dialed for everyday goals.',
    weeklyPrice: 89,
    perMealFrom: 11.0,
    features: [
      '8 balanced meals',
      'Calorie-aware portions',
      'Lower-carb options included',
      'Full macros on every meal',
      'Priority menu preview',
    ],
    ctaLabel: 'Choose Lean & Balanced',
    featured: true,
  },
  {
    id: 'performance-fuel',
    name: 'Performance Fuel',
    tagline: 'Protein-forward for active weeks.',
    quantity: '10 meals / week',
    idealFor: 'Active lifestyles that need higher protein and bigger portions.',
    flexibility: 'Swap any meal • Skip anytime',
    highlight: 'Higher-protein meals to support training and recovery.',
    weeklyPrice: 115,
    perMealFrom: 10.5,
    features: [
      '10 high-protein meals',
      '35g+ protein options',
      'Larger performance portions',
      'Full macros on every meal',
      'Priority menu preview',
    ],
    ctaLabel: 'Fuel Up',
  },
  {
    id: 'build-your-own',
    name: 'Build Your Own',
    tagline: 'Your menu, your rules.',
    quantity: 'Choose 5–12 meals',
    idealFor: 'Anyone who wants full control over every meal in the box.',
    flexibility: 'Hand-pick every meal • Mix categories • Skip anytime',
    highlight: 'Complete flexibility — pick exactly what lands in your box.',
    weeklyPrice: 0, // Sample: priced per selected meal; UI shows "from $/meal".
    perMealFrom: 11.5,
    features: [
      'Pick any 5–12 meals',
      'Mix every category freely',
      'Adjust quantity each week',
      'Full macros on every meal',
    ],
    ctaLabel: 'Build Your Box',
  },
];
