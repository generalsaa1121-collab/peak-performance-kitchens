/**
 * ============================================================================
 * FAQ CONTENT.
 * ============================================================================
 *
 * Answers marked `needsConfirmation: true` depend on real business decisions
 * (delivery, pickup, subscription terms, sell-out handling, etc.). They contain
 * neutral placeholder wording and MUST be confirmed before launch. The flag is
 * used only in code (there are no visible brackets in the UI).
 */

import type { FAQItem } from '../types';

export const faqs: FAQItem[] = [
  {
    question: 'How long do the meals stay fresh?',
    answer:
      'Meals are prepared fresh and are designed to be enjoyed within several days of delivery when kept refrigerated, or frozen for later in the week. Exact fridge and freezer windows are printed on each label.',
    needsConfirmation: true,
  },
  {
    question: 'Is nutritional information included?',
    answer:
      'Yes. Every meal lists calories and full macros (protein, carbohydrates and fats), both online and on the container label, so you always know exactly what you are eating.',
  },
  {
    question: 'Can meals be customized?',
    answer:
      'You can swap any meal in your plan, mix categories freely, and the Build Your Own plan lets you hand-pick every meal. Ingredient-level customization options are being finalized.',
    needsConfirmation: true,
  },
  {
    question: 'Are allergens listed?',
    answer:
      'Common allergens are listed on each meal and on the label. If you have a severe allergy, please review the full ingredient list before ordering, as meals are prepared in a shared kitchen.',
    needsConfirmation: true,
  },
  {
    question: 'Is pickup available?',
    answer:
      'Pickup availability depends on your location. Enter your area at checkout to see whether local pickup is offered near you.',
    needsConfirmation: true,
  },
  {
    question: 'Is delivery available?',
    answer:
      'Delivery coverage is rolling out by region. Add your address and we will show whether delivery currently reaches your area and on which days.',
    needsConfirmation: true,
  },
  {
    question: 'How often does the menu change?',
    answer:
      'The menu rotates on a regular weekly cycle, with seasonal specials layered in throughout the year so the lineup stays fresh and varied.',
    needsConfirmation: true,
  },
  {
    question: 'How should meals be reheated?',
    answer:
      'Most meals are heat-and-eat: microwave straight from the container in a few minutes, or warm on the stovetop. Specific reheating guidance is printed on every label.',
  },
  {
    question: 'Can I skip a week?',
    answer:
      'Yes. You can skip an upcoming week or pause your plan from your account before the weekly cutoff, with no penalty.',
    needsConfirmation: true,
  },
  {
    question: 'Are meal plans subscriptions?',
    answer:
      'Plans are designed as flexible recurring deliveries that you can pause, skip or cancel anytime. One-time boxes may also be offered. Final subscription terms are being confirmed.',
    needsConfirmation: true,
  },
  {
    question: 'What happens if a meal sells out?',
    answer:
      'If a meal reaches capacity for the week, it is marked as sold out and you can pick another from the current menu. Popular meals return in the rotation.',
    needsConfirmation: true,
  },
];
