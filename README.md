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

Placeholder logos live in `public/logos/` and are referenced **only** through
`src/config/assets.ts`. Replace the files (or repoint the paths) to use the
official artwork — no component edits required.

| Placement | Slot (`assets.ts`) | Official variation to use |
| --- | --- | --- |
| Desktop nav (dark header) | `logos.navDesktop` | Horizontal logo, **white** |
| Light backgrounds | `logos.navDesktopLight` | Horizontal logo, **dark** |
| Footer + mobile menu | `logos.stacked` | Stacked logo, white |
| Wide slogan band (desktop) | `logos.sloganBand` | Full slogan lockup, white |
| Favicon + compact | `logos.symbol` | Mountain symbol (badge) |
| Watermarks / loading | `logos.symbolMarkLight` | Mountain symbol (white, transparent) |
| Brand badge (hero) | `logos.badge` | Circular logo |

---

## Pre-launch checklist (replace before going live)

**Logos & brand**
- [ ] Drop the 10 official logo files into `public/logos/` (or repoint `assets.ts`)
- [ ] Set the exact `--pk-green` sampled from the logo in `src/index.css`

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
