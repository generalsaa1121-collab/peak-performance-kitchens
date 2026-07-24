/**
 * ============================================================================
 * SITE CONTENT — headings, copy, and structured section data.
 * ============================================================================
 *
 * Editorial copy for every section lives here so wording can be changed without
 * touching components. Product figures (recipe counts, average protein, etc.)
 * are SAMPLE data describing the product — never invented customer/social-proof
 * statistics.
 */

import type { Benefit, IconKey, MacroSlice, Stat, Step } from '../types';

/* ------------------------------------------------------------------ Hero -- */

export const hero = {
  eyebrow: 'Chef-prepared performance meal prep',
  /** Rendered as staggered lines; "peak" is highlighted in brand green. */
  headlineLines: ['Built to fuel', 'your next peak.'],
  highlight: 'peak',
  subhead:
    'Chef-prepared meals with balanced nutrition, quality ingredients, and the convenience to keep your goals moving forward.',
  /** Small proof chips under the CTAs. SAMPLE product facts. */
  chips: ['30g+ protein options', '5-min heat & eat', 'Fresh weekly menu'],
};

/* ------------------------------------------------------- Benefit strip --- */

export const benefits: Benefit[] = [
  { icon: 'chef', title: 'Chef-Prepared', description: 'Cooked in small batches by real chefs — never a vending-machine meal.' },
  { icon: 'leaf', title: 'Quality Ingredients', description: 'Whole-food ingredients you can pronounce, sourced for flavor and nutrition.' },
  { icon: 'macro', title: 'Macro-Friendly', description: 'Calories and full macros on every meal, so your goals stay in view.' },
  { icon: 'calendar', title: 'Fresh Weekly Menus', description: 'A rotating lineup that keeps the week interesting, not repetitive.' },
  { icon: 'microwave', title: 'Heat & Eat', description: 'From fridge to fuel in minutes — zero prep, zero cleanup.' },
];

/** Words for the horizontal brand marquee band. */
export const marqueeWords = [
  'High Protein',
  'Chef-Prepared',
  'Fresh Weekly',
  'Macro-Friendly',
  'Heat & Eat',
  'Real Ingredients',
  'Balanced Nutrition',
  'No Prep',
];

/* -------------------------------------------------------- How it works --- */

export const howItWorks = {
  eyebrow: 'How it works',
  heading: 'Four steps to an easier week.',
  subhead: 'No planning spiral, no midweek scramble. Set it up once and the week takes care of itself.',
  steps: [
    { index: '01', icon: 'choose', title: 'Choose Your Meals', description: 'Browse the weekly menu and pick the dishes that fit your taste and goals.' },
    { index: '02', icon: 'plan', title: 'Select Your Weekly Plan', description: 'Lock in how many meals you want each week — adjust or skip whenever life shifts.' },
    { index: '03', icon: 'prep', title: 'We Prepare Everything Fresh', description: 'Our chefs cook, portion and pack your meals in small, fresh batches.' },
    { index: '04', icon: 'eat', title: 'Heat, Eat, and Keep Moving', description: 'Meals arrive ready to go. Heat in minutes and get on with your day.' },
  ] as Step[],
};

/* --------------------------------------------------------------- Stats --- */

/** SAMPLE product stats (not customer counts). Animated on scroll into view. */
export const stats: Stat[] = [
  { value: 25, suffix: '+', label: 'Chef-crafted recipes', note: 'Sample figure' },
  { value: 30, suffix: 'g', label: 'Avg protein per meal', note: 'Sample figure' },
  { value: 5, suffix: 'min', label: 'Heat-and-eat', note: 'Sample figure' },
  { value: 100, suffix: '%', label: 'Macros on every meal' },
];

/* ----------------------------------------------------------- Nutrition --- */

export const nutrition = {
  eyebrow: 'Nutrition & performance',
  heading: 'Real food, engineered for balance.',
  body: [
    'We start with quality ingredients and build every meal around a protein-forward, balanced plate — enough to keep you full, focused and moving.',
    'Carbohydrates are there to fuel you, not to be feared. Portions are practical and honest, and the macros are printed on everything, because consistency beats perfection every single week.',
  ],
  /** Sample "performance plate" composition. Approximate, sample data. */
  plateCalories: 520,
  macroSlices: [
    { label: 'Protein', percent: 32, grams: 42, tone: 'protein' },
    { label: 'Carbs', percent: 40, grams: 52, tone: 'carbs' },
    { label: 'Fats', percent: 28, grams: 16, tone: 'fats' },
  ] as MacroSlice[],
  principles: [
    { icon: 'leaf', title: 'Quality first', description: 'Whole-food ingredients, chosen for flavor and nutrition alike.' },
    { icon: 'protein', title: 'Protein-forward', description: 'Every meal is anchored by a satisfying, high-quality protein.' },
    { icon: 'balance', title: 'Balanced carbs', description: 'Complex carbs to fuel training, work and everything between.' },
    { icon: 'macro', title: 'Full transparency', description: 'Calories and macros on every meal — no guesswork, ever.' },
  ] as { icon: IconKey; title: string; description: string }[],
};

/* --------------------------------------------------------- Brand story --- */

export const brandStory = {
  eyebrow: 'Our story',
  heading: 'Healthier eating, minus the friction.',
  body: [
    'Peak Performance Kitchens started from a simple frustration: eating well is easy in theory and hard on a Tuesday night. Demanding schedules, real goals and limited time turn "I’ll cook healthy" into takeout more often than anyone wants to admit.',
    'So we built the opposite of that — chef-prepared meals that are genuinely good, honestly portioned and ready when you are. No planning spiral, no sad diet food, no willpower required. Just quality ingredients and balanced nutrition, handled for you.',
    'Because progress is not about being perfect for a week. It is about being consistent for a year. We make the consistent choice the easy one.',
  ],
  /** Short pull-quote used in the layout. */
  pullQuote: 'Consistency beats perfection.',
  values: [
    { title: 'Disciplined', description: 'Real standards for ingredients, prep and portioning.' },
    { title: 'Honest', description: 'Clear macros, sample-fair pricing, no manipulative fine print.' },
    { title: 'Encouraging', description: 'Built to support your goals, not to shame your choices.' },
  ],
};

/* ---------------------------------------------------- Section headings --- */

export const sections = {
  meals: {
    eyebrow: 'The menu',
    heading: 'Meals you’ll actually look forward to.',
    subhead: 'A rotating lineup of chef-crafted dishes. Filter by how you eat and add your favorites to a plan.',
  },
  plans: {
    eyebrow: 'Meal plans',
    heading: 'Pick the plan that fits your week.',
    subhead: 'Flexible plans you can swap, skip or scale anytime. Prices shown are samples for this preview.',
  },
  weeklyMenu: {
    eyebrow: 'This week',
    heading: 'Preview the weekly menu.',
    subhead: 'A sample of how a week comes together. Tap any meal for macros and ingredients.',
  },
  testimonials: {
    eyebrow: 'In their words',
    heading: 'Built around real routines.',
    subhead: 'Sample stories shown during our pre-launch preview. Real, verified customer reviews will appear here at launch.',
  },
  faq: {
    eyebrow: 'Good questions',
    heading: 'Everything you might be wondering.',
    subhead: 'Some answers below note details still being finalized for launch.',
  },
  contact: {
    eyebrow: 'Get in touch',
    heading: 'Let’s build your plan.',
    subhead: 'Questions, plan help, or catering interest? Send a note and the team will follow up.',
  },
};

/* ------------------------------------------------------- Newsletter ------ */

export const newsletter = {
  heading: 'Be first to the menu.',
  subhead: 'Get new weekly menus and launch updates in your inbox. No spam — unsubscribe anytime.',
  cta: 'Notify Me',
};
