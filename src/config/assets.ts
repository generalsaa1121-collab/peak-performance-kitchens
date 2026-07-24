/**
 * ============================================================================
 * ASSET MAP — logos + editable imagery in one place.
 * ============================================================================
 */

import type { ImageAsset } from '../types';

/* -------------------------------------------------------------------------- */
/*  LOGO ASSET MAP                                                             */
/* -------------------------------------------------------------------------- */
/**
 * Each key is a *placement*, mapped to a file in /public/logos.
 *
 * The files there today are clearly-labeled PLACEHOLDERS (mountain-peak
 * wordmark) so the site renders completely. To use the 10 official logo
 * variations, drop them into /public/logos and repoint the paths below. The
 * comment on each line states which official variation belongs in that slot.
 *
 *   Placement            → Recommended official variation
 *   ─────────────────────────────────────────────────────────────
 *   navDesktop           → Horizontal logo, WHITE  (on the dark header)
 *   navDesktopLight      → Horizontal logo, DARK   (if a light header is used)
 *   footer / mobileMenu  → Stacked logo, WHITE
 *   sloganBand           → Full horizontal + slogan lockup, WHITE
 *   favicon / compact    → Mountain-only symbol (badge / on dark)
 *   watermark / inline   → Mountain-only symbol (transparent, single-color)
 *   brandBadge           → Circular logo (brand moments / social-style)
 *
 * Never stretch, recolor, or crop the official artwork — only resize
 * proportionally and pick the correct light/dark variation for the background.
 */
export const logos = {
  /** Desktop nav on the dark sticky header — OFFICIAL: horizontal WHITE logo. */
  navDesktop: '/logos/pk-logo-horizontal-light.svg',
  /** Horizontal logo for light/paper backgrounds — OFFICIAL: horizontal DARK logo. */
  navDesktopLight: '/logos/pk-logo-horizontal-dark.svg',
  /** Footer + mobile full-screen menu — OFFICIAL: stacked WHITE logo. */
  stacked: '/logos/pk-logo-stacked-light.svg',
  /** Wide branded slogan band — OFFICIAL: full slogan lockup (WHITE). */
  sloganBand: '/logos/pk-logo-slogan-light.svg',
  /** Favicon + compact/mobile placements — OFFICIAL: mountain symbol (badge). */
  symbol: '/logos/pk-symbol.svg',
  /** Decorative watermark / inline mark (currentColor) — OFFICIAL: mountain symbol (transparent). */
  symbolMark: '/logos/pk-symbol-mark.svg',
  /** Light-filled mark for watermarks/loading on dark surfaces — OFFICIAL: mountain symbol (white). */
  symbolMarkLight: '/logos/pk-symbol-mark-light.svg',
  /** Prominent brand moment / social — OFFICIAL: circular logo. */
  badge: '/logos/pk-badge-circular.svg',
} as const;

export type LogoKey = keyof typeof logos;

/* -------------------------------------------------------------------------- */
/*  IMAGE REGISTRY (non-meal imagery)                                          */
/* -------------------------------------------------------------------------- */
/**
 * Meal photos live with their meal in src/data/meals.ts. This registry holds
 * the remaining editorial images. Every entry is a single ImageAsset — set
 * `src` to a real URL or /images path to replace the branded placeholder.
 *
 * NOTE: This environment's network policy blocked stock-photo CDNs, so no
 * external photography could be embedded. Each slot renders an on-brand
 * placeholder tile until you drop in real images.
 */
export const images: Record<string, ImageAsset> = {
  hero: {
    src: null, // SWAP: hero meal-prep hero shot (wide, premium, protein-forward).
    alt: 'A freshly prepared Peak Performance Kitchens meal with grilled protein, grains and roasted vegetables.',
    credit: 'Placeholder — replace with licensed hero photography.',
    tone: 'signature',
  },
  heroSecondary: {
    src: null, // SWAP: secondary hero container / meal-prep lineup for the layered composition.
    alt: 'A row of portioned meal-prep containers ready for the week.',
    credit: 'Placeholder — replace with licensed meal-prep photography.',
    tone: 'grain',
  },
  brandStory: {
    src: null, // SWAP: kitchen / chef-at-work editorial image for the About section.
    alt: 'Chef plating balanced, portioned meals in a professional kitchen.',
    credit: 'Placeholder — replace with real kitchen/brand photography.',
    tone: 'beef',
  },
  nutrition: {
    src: null, // SWAP: clean overhead of a balanced plate for the nutrition section.
    alt: 'Overhead view of a balanced plate: lean protein, complex carbs and vegetables.',
    credit: 'Placeholder — replace with licensed nutrition photography.',
    tone: 'salmon',
  },
  planBand: {
    src: null, // SWAP: atmospheric food-prep image behind the meal-plan callout.
    alt: 'Weekly meal prep laid out across a kitchen counter.',
    credit: 'Placeholder — replace with licensed photography.',
    tone: 'chicken',
  },
};
