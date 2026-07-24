/**
 * ============================================================================
 * STOCK PHOTOGRAPHY — centralized, swappable food-image URLs.
 * ============================================================================
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * Every meal card and editorial slot points at a real, keyword-matched food
 * photograph served from a public image CDN. Keeping the URLs here (rather than
 * scattered through the data files) means the whole site's photography can be
 * re-pointed — to your own licensed shots, an S3/Cloudinary bucket, or
 * /public/images files — from ONE place.
 *
 * HOW IT WORKS
 * ------------
 * `stockPhoto(keywords, seed)` builds a deterministic URL: the same seed always
 * resolves to the same photo, so there is no flicker between renders and the
 * design stays consistent. Photos are keyword-matched to the dish.
 *
 * ⚠️  These are placeholder stock photos for the mockup. Before launch, swap the
 * map below for licensed/owned photography — ideally by dropping files into
 * /public/images and returning `import.meta.env.BASE_URL + 'images/<file>'`.
 *
 * GRACEFUL FALLBACK
 * -----------------
 * `ResponsiveImage` renders an on-brand placeholder tile underneath every photo,
 * so if a CDN image is slow or unavailable the layout never breaks — it simply
 * shows the branded tile.
 */

/** Public keyworded photo CDN. Deterministic per `seed` via the lock param. */
const CDN = 'https://loremflickr.com';

/**
 * Build a deterministic, keyword-matched food-photo URL.
 *
 * @param keywords Comma-separated subjects, most specific first (e.g. "grilled,chicken,rice").
 * @param seed     Stable integer — same seed → same photo forever.
 * @param w        Intrinsic width (default 900).
 * @param h        Intrinsic height (default 700).
 */
export function stockPhoto(keywords: string, seed: number, w = 900, h = 700): string {
  const tags = keywords
    .split(',')
    .map((t) => encodeURIComponent(t.trim()))
    .filter(Boolean)
    .join(',');
  return `${CDN}/${w}/${h}/${tags}?lock=${seed}`;
}

/**
 * Named photography slots. Meal photos are keyed by meal id; editorial photos by
 * their registry key. Edit a single line here to re-point any image on the site.
 */
export const stock = {
  /* Meal cards — keyword-matched per dish, unique stable seeds. */
  'herb-grilled-chicken': stockPhoto('grilled,chicken,rice,bowl', 21),
  'chimichurri-steak': stockPhoto('steak,dinner,plate', 32),
  'lemon-garlic-salmon': stockPhoto('salmon,fillet,dinner', 43),
  'turkey-bolognese': stockPhoto('pasta,bolognese,dinner', 54),
  'high-protein-pasta': stockPhoto('pasta,penne,tomato', 65),
  'southwest-chicken-bowl': stockPhoto('burrito,bowl,rice,beans', 76),
  'protein-breakfast-bowl': stockPhoto('breakfast,eggs,avocado', 87),
  'roasted-vegetable-grain-bowl': stockPhoto('grain,bowl,vegetables', 98),

  /* Editorial / lifestyle imagery. */
  hero: stockPhoto('mealprep,healthy,bowl', 101, 1400, 1200),
  heroSecondary: stockPhoto('mealprep,container,healthy', 112, 1000, 900),
  brandStory: stockPhoto('chef,kitchen,cooking', 123, 1200, 1000),
  nutrition: stockPhoto('healthy,plate,vegetables', 134, 1200, 1000),
  planBand: stockPhoto('mealprep,kitchen,counter', 145, 1600, 900),
} as const;

export type StockKey = keyof typeof stock;
