/**
 * Shared content types for Peak Performance Kitchens.
 *
 * All site copy, meals, plans, FAQs, and testimonials are typed here so the
 * centralized data files in src/data and src/config stay consistent and are
 * safe to edit without touching component code.
 */

/* -------------------------------------------------------------------------- */
/*  Imagery                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Visual grading key for the placeholder image tiles. Also doubles as a coarse
 * food-category hint. When you swap in real photography you can ignore `tone`.
 */
export type FoodTone =
  | 'chicken'
  | 'beef'
  | 'salmon'
  | 'turkey'
  | 'pasta'
  | 'veg'
  | 'breakfast'
  | 'grain'
  | 'signature';

/**
 * A single editable image slot.
 *
 * SWAP GUIDE: to use real photography, set `src` to either a remote URL
 * (e.g. "https://images.example.com/dish.jpg") or a local path placed in
 * /public/images (e.g. "/images/herb-grilled-chicken.jpg"). While `src` is
 * null, a branded placeholder tile is rendered so the layout stays complete.
 */
export interface ImageAsset {
  /** Real photo URL or /images path. Null renders the branded placeholder. */
  src: string | null;
  /** Required, descriptive alt text for accessibility + SEO. */
  alt: string;
  /** Provenance note for the eventual real photo (photographer / license). */
  credit?: string;
  /** Placeholder grading + category hint. */
  tone: FoodTone;
}

/* -------------------------------------------------------------------------- */
/*  Meals                                                                      */
/* -------------------------------------------------------------------------- */

/** Filter groups shown in the Our Meals filter bar (plus an implicit "All"). */
export type MealFilter =
  | 'High Protein'
  | 'Balanced'
  | 'Lower Carb'
  | 'Breakfast'
  | 'Plant-Based';

export interface Macros {
  /** kcal */
  calories: number;
  /** grams */
  protein: number;
  /** grams */
  carbs: number;
  /** grams */
  fats: number;
}

export interface Meal {
  id: string;
  name: string;
  /** Short, appetizing description (1–2 sentences). */
  description: string;
  /** Display kind shown on the card, e.g. "Chicken", "Steak", "Salmon". */
  kind: string;
  /** Filter groups this meal belongs to (drives the filter controls). */
  filters: MealFilter[];
  /** Small dietary labels, e.g. "Gluten-Free", "Dairy-Free", "Spicy". */
  dietary: string[];
  macros: Macros;
  /** SAMPLE price in USD — mock content, verify before launch. */
  price: number;
  image: ImageAsset;
  /** Highlighted in the Featured Meals grid. */
  featured?: boolean;
  /** Ingredient preview for the meal-detail modal. */
  ingredients: string[];
  /** Allergen placeholder text for the meal-detail modal. */
  allergens: string[];
}

/* -------------------------------------------------------------------------- */
/*  Meal plans                                                                 */
/* -------------------------------------------------------------------------- */

export interface MealPlan {
  id: string;
  name: string;
  /** One-line positioning statement. */
  tagline: string;
  /** Human-readable meal quantity, e.g. "6, 8 or 10 meals / week". */
  quantity: string;
  /** Who the plan is for. */
  idealFor: string;
  /** Flexibility summary. */
  flexibility: string;
  /** The single biggest benefit. */
  highlight: string;
  /** SAMPLE weekly price in USD — mock content, verify before launch. */
  weeklyPrice: number;
  /** SAMPLE per-meal price shown as "from $X / meal". */
  perMealFrom: number;
  features: string[];
  ctaLabel: string;
  /** Honestly emphasized (most popular) — not a dark pattern. */
  featured?: boolean;
}

/* -------------------------------------------------------------------------- */
/*  Supporting content                                                         */
/* -------------------------------------------------------------------------- */

/** Line-icon keys rendered by the Icon component. */
export type IconKey =
  | 'chef'
  | 'leaf'
  | 'macro'
  | 'calendar'
  | 'microwave'
  | 'mountain'
  | 'choose'
  | 'plan'
  | 'prep'
  | 'eat'
  | 'protein'
  | 'balance'
  | 'clock'
  | 'sprout';

export interface Benefit {
  title: string;
  description: string;
  icon: IconKey;
}

export interface Step {
  /** Zero-padded step index, e.g. "01". */
  index: string;
  title: string;
  description: string;
  icon: IconKey;
}

export interface Stat {
  /** Numeric target for the count-up animation. */
  value: number;
  /** Prefix such as "" or "$". */
  prefix?: string;
  /** Suffix such as "+", "g", "min". */
  suffix?: string;
  label: string;
  /** Flagged as sample/product data (never a customer-count claim). */
  note?: string;
}

export interface MacroSlice {
  label: string;
  /** Percentage of the sample plate (0–100). */
  percent: number;
  /** Approx grams for the sample plate. */
  grams: number;
  /** Which token drives the bar color. */
  tone: 'protein' | 'carbs' | 'fats';
}

export interface FAQItem {
  question: string;
  answer: string;
  /**
   * True when the answer depends on an unresolved business decision.
   * Surfaced only in code (not as visible brackets) so it can be confirmed
   * before launch. See src/data/faqs.ts.
   */
  needsConfirmation?: boolean;
}

export interface Testimonial {
  /** PLACEHOLDER quote — replace with a real, permissioned customer quote. */
  quote: string;
  /** SAMPLE name — clearly not a real customer. */
  name: string;
  /** Believable customer category, e.g. "Busy Professional". */
  role: string;
  tone: FoodTone;
}

export interface NavLink {
  label: string;
  /** In-page anchor id (single-page experience). */
  href: string;
}

export interface WeeklyMenuDay {
  /** Short label, e.g. "Mon". */
  day: string;
  /** Full label, e.g. "Monday". */
  full: string;
  /** Meal ids (from src/data/meals.ts) served that day. */
  mealIds: string[];
}
