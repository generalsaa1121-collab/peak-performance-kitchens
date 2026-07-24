# Food & editorial imagery

Every image on the site is **one fixed, local file in this folder**. There are
no remote, random, keyword, or query-based image URLs anywhere in the project —
so an image can never change on refresh and a CDN can never serve the wrong
picture. All paths are centralized in **`src/config/images.ts`** (the single
source of truth).

## Folder layout

```
images/
  meals/       one file per meal, composed to match the dish
  hero/        hero signature plate
  lifestyle/   meal-prep containers / weekly prep counter
  about/       kitchen prep scene
  nutrition/   balanced-plate diagram
```

## What's here now (temporary stock art)

These are **brand-authored meal illustrations** (SVG) used as fixed
placeholders. They exist because this build environment's network policy blocks
every stock-photo host (Unsplash, Pexels, Wikimedia, Picsum, etc.), so licensed
photography could not be downloaded here. Each illustration is composed to
visibly match its dish (the salmon shows salmon, the steak shows steak) and all
share one consistent editorial style — they are intentional placeholders, not
final art.

## How to swap in real photography (one edit per image)

1. Drop an optimized photo into the matching subfolder, e.g.
   `meals/meal-lemon-garlic-salmon.jpg` (~1200px wide, WebP or compressed JPEG).
2. Open **`src/config/images.ts`** and change that image's `src` to the new
   file, e.g. `src: img('images/meals/meal-lemon-garlic-salmon.jpg')`.
3. Done. Nothing else references image paths — `meals.ts`, `assets.ts` and every
   component read through this registry.

`ResponsiveImage` renders an on-brand tile underneath while the file decodes and
if a file is ever missing, so the layout never breaks.

### Photography direction (when sourcing real photos)

Grilled chicken with rice + vegetables, steak with grains, salmon with veg,
turkey dishes, high-protein pasta, power/burrito bowls, breakfast bowls,
plant-based grain bowls. Favor realistic portions, natural textures, clean
plating/containers, consistent lighting and sharp focus. Avoid fast food,
greasy or plastic-looking food, raw ingredients presented as finished meals,
embedded text/watermarks, and anything unrelated to the dish.
