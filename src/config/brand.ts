/**
 * ============================================================================
 * BRAND + BUSINESS CONFIG — single source of truth for identity & contact info.
 * ============================================================================
 *
 * Everything a non-developer is likely to change lives here. Values marked
 * `PLACEHOLDER` are neutral mock stand-ins (no invented real-world details) and
 * MUST be confirmed before launch. They are intentionally presented as clean,
 * bracket-free text in the UI while remaining obvious to find here.
 */

import type { NavLink } from '../types';

export const brand = {
  name: 'Peak Performance Kitchens',
  shortName: 'Peak Performance',
  /** The exact slogan — wording + plus signs must not change. */
  slogan: 'Healthy Ingredients + Real Results + Better You',
  /** Slogan split for animated, styled rendering (recombines to the exact slogan). */
  sloganParts: ['Healthy Ingredients', 'Real Results', 'Better You'] as const,
  tagline: 'Chef-prepared performance meal prep',
} as const;

/** Primary calls to action reused across the site. */
export const cta = {
  primary: { label: 'Build Your Plan', href: '#meal-plans' },
  secondary: { label: 'Explore the Menu', href: '#meals' },
  order: { label: 'Order Now', href: '#meal-plans' },
} as const;

/** Single-page anchor navigation (the ids match each section's DOM id). */
export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Our Meals', href: '#meals' },
  { label: 'Meal Plans', href: '#meal-plans' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

/**
 * CONTACT PLACEHOLDERS — replace every value before launch.
 * Presented as neutral text in the UI (no visible [brackets]).
 */
export const contact = {
  // PLACEHOLDER business email — replace with the real inbox.
  email: 'hello@peakperformancekitchens.com',
  // PLACEHOLDER phone — 555 is the reserved fictional prefix (safe stand-in).
  phone: '(555) 018-2470',
  phoneHref: 'tel:+15550182470',
  // PLACEHOLDER service-area language — set your real pickup/delivery region.
  serviceArea: 'Local pickup + regional delivery',
  // PLACEHOLDER weekly rhythm — confirm real prep/pickup cadence.
  hours: 'Fresh batches prepared weekly',
} as const;

/**
 * SOCIAL PLACEHOLDERS — replace '#' with real profile URLs (or remove the row).
 */
export const socials = [
  { label: 'Instagram', href: '#', handle: '@peakperformancekitchens' },
  { label: 'TikTok', href: '#', handle: '@peakperformancekitchens' },
  { label: 'Facebook', href: '#', handle: 'Peak Performance Kitchens' },
  { label: 'YouTube', href: '#', handle: 'Peak Performance Kitchens' },
] as const;

/** Footer legal links — point these at real pages before launch. */
export const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Nutrition Disclaimer', href: '#nutrition-disclaimer' },
] as const;

/**
 * Nutrition disclaimer shown in the footer. Reviewed to avoid medical or
 * guaranteed-outcome claims. Adjust wording with your own counsel before launch.
 */
export const nutritionDisclaimer =
  'Nutrition values are approximate samples for this mockup and will vary by recipe and portion. ' +
  'Peak Performance Kitchens provides food, not medical or nutritional advice, and makes no ' +
  'guarantees of specific health, weight, or performance outcomes. Consult a qualified ' +
  'professional before making significant changes to your diet.';

/** Short brand description reused in the footer + meta. */
export const brandDescription =
  'Chef-prepared meals built around quality ingredients and balanced nutrition — ' +
  'the convenient way to keep your goals moving forward.';
