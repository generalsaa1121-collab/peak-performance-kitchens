# Food & editorial imagery

This folder is where **real photography** goes when you're ready to replace the
built-in placeholder tiles.

## Why placeholders?

This mockup was built in an environment whose network policy blocked stock-photo
CDNs, so no external photos could be embedded. Every image slot therefore renders
an on-brand **placeholder tile** (an abstract "top-down plate" graded by food
type) instead of a broken image. The placeholders are intentional and swappable —
not final art.

## How to add real photos

1. Drop optimized images here, e.g. `herb-grilled-chicken.jpg` (aim for ~1200px
   wide, compressed).
2. Point the matching image slot at it:
   - **Meals** — set `image.src` in `src/data/meals.ts`
     (e.g. `src: '/images/herb-grilled-chicken.jpg'`).
   - **Editorial** (hero, about, nutrition, slogan band) — set `src` in
     `src/config/assets.ts` → `images`.
3. That's it. The `ResponsiveImage` component shows the photo when `src` is set
   and falls back to the placeholder (and on load error) otherwise.

You can also use remote URLs instead of local files (e.g. an Unsplash or CDN
URL) — anywhere a `src` is accepted.

Recommended subjects: grilled chicken, steak, salmon, turkey, rice/potatoes,
roasted vegetables, breakfast bowls, healthy pasta, and meal-prep containers.
Favor fresh, realistic, protein-forward dishes; avoid heavily filtered or
plastic-looking food.
