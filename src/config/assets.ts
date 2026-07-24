/**
 * ============================================================================
 * ASSET MAP — official logos + editable imagery in one place.
 * ============================================================================
 */

import type { ImageAsset } from '../types';
import { sectionImages } from './images';

/**
 * Base-aware path helper. In production the site is served under a base path
 * (e.g. GitHub Pages project path), exposed as import.meta.env.BASE_URL. Runtime
 * string paths must be prefixed with it or they 404 on the deployed site.
 */
const BASE = import.meta.env.BASE_URL;
const asset = (p: string) => `${BASE}${p.replace(/^\/+/, '')}`;

/* -------------------------------------------------------------------------- */
/*  OFFICIAL LOGO ASSET MAP                                                    */
/* -------------------------------------------------------------------------- */
/**
 * The official Peak Performance Kitchens logo kit lives in /public/logos.
 * These are the ONLY approved logos — never redraw, recolor, distort or crop
 * them; they are only resized proportionally and chosen per background.
 *
 * Naming: "dark" = for DARK backgrounds (light artwork); "light" = for LIGHT
 * backgrounds (dark artwork); "primary" = full color; "tagline" = includes the
 * slogan. Each key below is a placement mapped to the official file used.
 *
 *   Placement            → Official file
 *   ────────────────────────────────────────────────────────────────────────
 *   navDesktop           → 02 horizontal, primary, dark       (header, mobile menu)
 *   stacked              → 08 vertical, primary, dark, tagline (footer, slogan band mobile)
 *   sloganBand           → 09 horizontal, primary, dark, tagline (wide slogan band)
 *   badge                → 04 circular badge, primary, dark    (hero badge, loader)
 *   badgeTagline         → 01 circular badge + tagline, dark    (full medallion)
 *   symbol               → 03 mountain icon badge               (favicon, compact)
 *   symbolMark(Light)    → 10 mountain-in-circle icon           (watermarks)
 *   navDesktopLight      → 07 monochrome, light                 (dark logo for light bg)
 */
export const logos = {
  /** Desktop nav on the dark header + mobile menu — 02 horizontal (white). */
  navDesktop: asset('logos/02_logo-horizontal-primary-dark.png'),
  /** Dark (black) logo for light backgrounds — 06 monochrome (dark artwork). */
  navDesktopLight: asset('logos/06_logo-badge-monochrome-dark.png'),
  /** Footer + mobile slogan lockup — 08 vertical + tagline (white/green). */
  stacked: asset('logos/08_logo-vertical-primary-dark-tagline.png'),
  /** Wide branded slogan band — 09 horizontal + tagline (white/green). */
  sloganBand: asset('logos/09_logo-horizontal-primary-dark-tagline.png'),
  /** Circular brand badge — 04 primary dark (hero + loader). */
  badge: asset('logos/04_logo-badge-primary-dark.png'),
  /** Full circular medallion with tagline — 01 primary dark + tagline (black-fill; use on pure black). */
  badgeTagline: asset('logos/01_logo-badge-primary-dark-tagline.png'),
  /** Monochrome white circular badge (transparent) — 07, blends on dark surfaces. */
  monoWhite: asset('logos/07_logo-badge-monochrome-light.png'),
  /** Favicon + compact placements — 03 mountain icon badge. */
  symbol: asset('logos/03_icon-mountain-badge.png'),
  /** Decorative watermark mark — 10 mountain-in-circle icon. */
  symbolMark: asset('logos/10_icon-mountain-circle.png'),
  /** Watermark mark on dark surfaces — 10 mountain-in-circle icon. */
  symbolMarkLight: asset('logos/10_icon-mountain-circle.png'),
} as const;

export type LogoKey = keyof typeof logos;

/* -------------------------------------------------------------------------- */
/*  IMAGE REGISTRY (non-meal imagery)                                          */
/* -------------------------------------------------------------------------- */
/**
 * Editorial (non-meal) imagery. Each `src` points at ONE fixed, local file in
 * /public/images via the centralized registry in src/config/images.ts — there
 * are no remote, random, or query-based image URLs anywhere. To swap an image,
 * change the path in src/config/images.ts (single source of truth).
 */
export const images: Record<string, ImageAsset> = {
  hero: {
    src: sectionImages.hero.src, // SWAP: hero meal-prep hero shot (wide, premium, protein-forward).
    alt: 'A freshly prepared Peak Performance Kitchens meal with grilled protein, grains and roasted vegetables.',
    credit: 'Placeholder — replace with licensed hero photography.',
    tone: 'signature',
  },
  heroSecondary: {
    src: sectionImages.heroSecondary.src, // SWAP: secondary hero container / meal-prep lineup for the layered composition.
    alt: 'A row of portioned meal-prep containers ready for the week.',
    credit: 'Placeholder — replace with licensed meal-prep photography.',
    tone: 'grain',
  },
  brandStory: {
    src: sectionImages.brandStory.src, // SWAP: kitchen / chef-at-work editorial image for the About section.
    alt: 'Chef plating balanced, portioned meals in a professional kitchen.',
    credit: 'Placeholder — replace with real kitchen/brand photography.',
    tone: 'beef',
  },
  nutrition: {
    src: sectionImages.nutrition.src, // SWAP: clean overhead of a balanced plate for the nutrition section.
    alt: 'Overhead view of a balanced plate: lean protein, complex carbs and vegetables.',
    credit: 'Placeholder — replace with licensed nutrition photography.',
    tone: 'salmon',
  },
  planBand: {
    src: sectionImages.planBand.src, // SWAP: atmospheric food-prep image behind the meal-plan callout.
    alt: 'Weekly meal prep laid out across a kitchen counter.',
    credit: 'Placeholder — replace with licensed photography.',
    tone: 'chicken',
  },
};
