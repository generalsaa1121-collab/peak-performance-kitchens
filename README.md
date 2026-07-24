# Peak Performance Kitchens — website mockup

A premium, responsive, animated marketing site for **Peak Performance Kitchens**,
a chef-prepared meal-prep brand.

> **Slogan:** Healthy Ingredients + Real Results + Better You

This is a front-end **mockup**. Content (meals, prices, testimonials, FAQs,
contact details) is clearly-labeled sample data, and the forms/ordering are
simulated — see the pre-launch checklist below before going live.

---

## Tech stack

- **React 18 + TypeScript**
- **Vite 5** (dev/build)
- **Tailwind CSS 3** (design system + tokens)
- **Framer Motion 11** (scroll reveals, staggers, modal/menu transitions, counters)
- Semantic HTML, reusable components, centralized content data

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run build      # type-check (tsc -b) + production build to dist/
npm run preview    # serve the production build on http://localhost:4173
npm run typecheck  # type-check only
```

Node 18+ recommended.

---

## Design direction

Black / charcoal / white foundation with a single **performance-green accent**
used intentionally for primary actions, active states, highlights, macro
indicators and dividers — never as a wash. Strong athletic display type (Sora)
over a clean sans (Inter). Mountain-inspired motifs (contour lines, peak marks,
elevation accents) appear sparingly. Motion is purposeful and varied (line
reveals, masked/scaled image entrances, staggered content, animated counters and
macro bars, a scroll-drawn process line) and fully respects
`prefers-reduced-motion`.

## Brand green token

The accent green is a **single CSS variable**, `--pk-green`, in
[`src/index.css`](src/index.css). Change those three RGB channels to recolor the
entire site (buttons, active nav, macros, focus rings, dividers). Sample it from
the official logo and drop it in — one line.

---

## Where the editable content lives

| File | Contents |
| --- | --- |
| `src/config/brand.ts` | Name, slogan, nav, CTAs, **contact/social/legal placeholders**, disclaimer |
| `src/config/assets.ts` | **Logo asset map** + non-meal image registry |
| `src/data/meals.ts` | 8 sample meals (macros, tags, prices, ingredients) |
| `src/data/mealPlans.ts` | 4 sample plans + sample pricing |
| `src/data/weeklyMenu.ts` | Sample weekly-menu schedule |
| `src/data/faqs.ts` | FAQ content (items needing a business decision are flagged) |
| `src/data/testimonials.ts` | **Placeholder** testimonials |
| `src/data/siteContent.ts` | Hero, benefits, steps, stats, nutrition, brand story, section copy |
| `src/index.css` | Design tokens incl. `--pk-green` |

## Logo asset map

The **official** logo kit lives in `public/logos/` (files `01`–`10`, web-optimized)
and is referenced **only** through `src/config/assets.ts`. On the dark site,
transparent light-artwork files are used; the black-fill color badges (`01`,`04`)
and app icon (`03`) are kept for pure-black / favicon use.

| Placement | Slot (`assets.ts`) | Official file used |
| --- | --- | --- |
| Desktop nav + mobile menu | `logos.navDesktop` | `02` horizontal, white |
| Footer badge | `logos.monoWhite` | `07` monochrome white badge |
| Slogan band — desktop | `logos.sloganBand` | `09` horizontal + tagline |
| Slogan band — mobile | `logos.stacked` | `08` vertical + tagline |
| Hero badge + watermarks + loader | `logos.symbolMark(Light)` | `10` mountain-in-circle |
| Favicon / app icon | `logos.symbol` | `03` mountain icon badge |
| Dark logo for light bg | `logos.navDesktopLight` | `06` monochrome black |
| Color medallions (pure-black use) | `logos.badge` / `badgeTagline` | `04` / `01` |

The brand green sampled from the logo is **`#88B333` (rgb 136 179 51)**, set as
`--pk-green` in `src/index.css`.

---

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` and publishes the
static output to the **`gh-pages`** branch (plain git + the built-in token — no
repository settings change required). The Vite `base` is relative (`./`), so the
same build works under any path.

**Live now (served from the `gh-pages` branch via a GitHub CDN — no setup):**
- https://raw.githack.com/generalsaa1121-collab/peak-performance-kitchens/gh-pages/index.html
- https://cdn.jsdelivr.net/gh/generalsaa1121-collab/peak-performance-kitchens@gh-pages/index.html

**Canonical GitHub Pages URL (one-time toggle):** enable it at
**Settings → Pages → Source: "Deploy from a branch" → `gh-pages` / root**, then
the site is live at
https://generalsaa1121-collab.github.io/peak-performance-kitchens/
(the `gh-pages` branch is already populated, so it publishes immediately).

---

## Pre-launch checklist (replace before going live)

**Logos & brand**
- [x] Official logo kit integrated in `public/logos/` (mapped in `assets.ts`)
- [x] Exact `--pk-green` (#88B333) set in `src/index.css`

**Business details** (`src/config/brand.ts`)
- [ ] `contact.email`, `contact.phone` / `phoneHref`
- [ ] `contact.serviceArea`, `contact.hours`
- [ ] `socials[]` URLs (Instagram, TikTok, Facebook, YouTube)
- [ ] `legalLinks[]` → real Privacy, Terms, Nutrition Disclaimer pages
- [ ] Review `nutritionDisclaimer` copy with counsel

**Content**
- [ ] Verify all meal names, descriptions, **macros**, prices, allergens (`meals.ts`)
- [ ] Confirm plan quantities + **pricing** (`mealPlans.ts`)
- [ ] Replace placeholder testimonials with real, permissioned quotes (`testimonials.ts`)
- [ ] Resolve FAQ answers flagged `needsConfirmation: true` (`faqs.ts`)
- [ ] Add real **food photography** (see `public/images/README.md`)

**Functionality**
- [ ] Wire the forms to a provider — one place: `src/lib/forms.ts`
      (`submitLead`, `submitNewsletter`) → Formspree / HubSpot / Mailchimp / Supabase
- [ ] Replace the mock "add to plan" selection with a real cart/ordering flow
      (`src/context/PlanContext.tsx`)

---

## Accessibility & performance notes

- Semantic landmarks, logical headings, visible focus rings, keyboard-operable
  nav/menu/modal/accordion, ARIA where needed, descriptive alt text.
- `prefers-reduced-motion` removes transforms/parallax/continuous motion while
  preserving all content.
- Fixed image aspect ratios (no layout shift), lazy-loaded below-the-fold imagery,
  transforms/opacity-based animation, no horizontal scroll at any width.
