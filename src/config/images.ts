/**
 * ============================================================================
 * IMAGE REGISTRY — every photograph/illustration on the site, in ONE file.
 * ============================================================================
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * There are NO dynamic, random, keyword, or query-based image URLs anywhere in
 * this project. Every image below is ONE specific, fixed, local file committed
 * to the repository under /public/images. Nothing is fetched from a remote
 * stock service at runtime, so an image can never change on refresh and a
 * broken CDN can never show the wrong picture (no more random results).
 *
 * ⚠️  TEMPORARY STOCK ARTWORK
 * These are on-brand, brand-authored meal illustrations used as fixed
 * placeholders. Each one is composed to visibly match its dish (the salmon
 * shows salmon, the steak shows steak, etc.). Swap any of them for licensed
 * photography by dropping a file into the same /public/images folder and
 * changing the one path here — no component edits required.
 *
 * FOLDER LAYOUT
 *   public/images/meals/      one file per meal, matched to the recipe
 *   public/images/hero/       hero signature plate
 *   public/images/lifestyle/  meal-prep containers / weekly prep counter
 *   public/images/about/      kitchen prep scene
 *   public/images/nutrition/  balanced-plate diagram
 */

import type { FoodTone } from '../types';

/** Base-aware path helper (prefixes import.meta.env.BASE_URL for GitHub Pages). */
const BASE = import.meta.env.BASE_URL;
const img = (p: string) => `${BASE}${p.replace(/^\/+/, '')}`;

/** One entry describes a single fixed local image and how it's used. */
export interface ImageEntry {
  /** Fixed local file path (base-aware). Change this ONE value to swap the image. */
  src: string;
  /** Descriptive alt text. */
  alt: string;
  /** Placeholder tile tone shown underneath while the file decodes. */
  tone: FoodTone;
  /** Section / meal this image belongs to (documentation). */
  use: string;
  /** Attribution — brand-authored placeholder art; replace with licensed source. */
  credit: string;
}

const TEMP = 'Brand-authored placeholder illustration — replace with licensed photography.';

/* -------------------------------------------------------------------------- */
/*  MEAL IMAGES — one unique, dish-matched file per meal id                    */
/* -------------------------------------------------------------------------- */
export const mealImages: Record<string, ImageEntry> = {
  'herb-grilled-chicken': {
    src: img('images/meals/meal-herb-grilled-chicken.svg'),
    alt: 'Grilled chicken breast with jasmine rice and charred broccoli on a white plate.',
    tone: 'chicken', use: 'Meal · Herb-Grilled Chicken', credit: TEMP,
  },
  'chimichurri-steak': {
    src: img('images/meals/meal-chimichurri-steak.svg'),
    alt: 'Sliced seared steak with cauliflower mash and asparagus spears.',
    tone: 'beef', use: 'Meal · Chimichurri Steak', credit: TEMP,
  },
  'lemon-garlic-salmon': {
    src: img('images/meals/meal-lemon-garlic-salmon.svg'),
    alt: 'Roasted salmon fillet with herbed quinoa, asparagus and a lemon wedge.',
    tone: 'salmon', use: 'Meal · Lemon-Garlic Salmon', credit: TEMP,
  },
  'turkey-bolognese': {
    src: img('images/meals/meal-turkey-bolognese.svg'),
    alt: 'Turkey bolognese with rigatoni in tomato sauce and fresh basil.',
    tone: 'turkey', use: 'Meal · Turkey Bolognese', credit: TEMP,
  },
  'high-protein-pasta': {
    src: img('images/meals/meal-high-protein-pasta.svg'),
    alt: 'Protein penne with roasted tomato sauce, ricotta and edamame.',
    tone: 'pasta', use: 'Meal · High-Protein Pasta', credit: TEMP,
  },
  'southwest-chicken-bowl': {
    src: img('images/meals/meal-southwest-chicken-bowl.svg'),
    alt: 'Southwest bowl with brown rice, black beans, corn, peppers and chicken.',
    tone: 'chicken', use: 'Meal · Southwest Chicken Bowl', credit: TEMP,
  },
  'protein-breakfast-bowl': {
    src: img('images/meals/meal-protein-breakfast-bowl.svg'),
    alt: 'Breakfast bowl with scrambled eggs, sweet-potato hash, spinach and avocado.',
    tone: 'breakfast', use: 'Meal · Protein Breakfast Bowl', credit: TEMP,
  },
  'roasted-vegetable-grain-bowl': {
    src: img('images/meals/meal-roasted-vegetable-grain-bowl.svg'),
    alt: 'Grain bowl with farro, chickpeas, roasted sweet potato, brussels sprouts and tahini.',
    tone: 'grain', use: 'Meal · Roasted Vegetable Grain Bowl', credit: TEMP,
  },
};

/* -------------------------------------------------------------------------- */
/*  SECTION / EDITORIAL IMAGES                                                  */
/* -------------------------------------------------------------------------- */
export const sectionImages: Record<string, ImageEntry> = {
  hero: {
    src: img('images/hero/hero-signature-plate.svg'),
    alt: 'A signature Peak Performance Kitchens plate: grilled protein, rice and roasted vegetables.',
    tone: 'signature', use: 'Hero · main plate', credit: TEMP,
  },
  heroSecondary: {
    src: img('images/lifestyle/lifestyle-meal-prep-containers.svg'),
    alt: 'A lineup of portioned meal-prep containers ready for the week.',
    tone: 'grain', use: 'Hero · secondary composition / lifestyle', credit: TEMP,
  },
  brandStory: {
    src: img('images/about/about-fresh-kitchen-prep.svg'),
    alt: 'Fresh kitchen prep: a wooden board with a chef’s knife, chopped vegetables and herbs.',
    tone: 'beef', use: 'About · kitchen prep', credit: TEMP,
  },
  nutrition: {
    src: img('images/nutrition/nutrition-balanced-plate.svg'),
    alt: 'A balanced plate divided into lean protein, complex carbs and vegetables.',
    tone: 'signature', use: 'Nutrition · balanced plate', credit: TEMP,
  },
  planBand: {
    src: img('images/lifestyle/lifestyle-weekly-prep-counter.svg'),
    alt: 'Weekly meal prep laid out in containers across a kitchen counter.',
    tone: 'chicken', use: 'Meal plans · atmospheric band', credit: TEMP,
  },
};
