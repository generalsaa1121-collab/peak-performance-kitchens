/**
 * ============================================================================
 * MEALS — sample menu content.
 * ============================================================================
 *
 * ⚠️  MOCK CONTENT: meal names, descriptions, macros, prices, ingredients and
 * allergens below are SAMPLE data for the mockup and must be verified against
 * real recipes and lab/nutrition data before launch.
 *
 * To use real photography for a meal, set `image.src` to a URL or a
 * /public/images path (see the ImageAsset type). While `src` is null a branded
 * placeholder tile is shown.
 */

import type { Meal } from '../types';

export const meals: Meal[] = [
  {
    id: 'herb-grilled-chicken',
    name: 'Herb-Grilled Chicken',
    description:
      'Marinated chicken breast over fluffy jasmine rice with charred broccoli and a bright herb drizzle.',
    kind: 'Chicken',
    filters: ['High Protein', 'Balanced'],
    dietary: ['Gluten-Free', 'Dairy-Free'],
    macros: { calories: 520, protein: 42, carbs: 48, fats: 16 },
    price: 12.5,
    featured: true,
    ingredients: ['Chicken breast', 'Jasmine rice', 'Broccoli', 'Garlic', 'Fresh herbs', 'Olive oil'],
    allergens: ['Allergen info is sample data — confirm per recipe'],
    image: {
      src: null,
      alt: 'Herb-grilled chicken breast with jasmine rice and charred broccoli.',
      credit: 'Placeholder — replace with licensed food photography.',
      tone: 'chicken',
    },
  },
  {
    id: 'chimichurri-steak',
    name: 'Chimichurri Steak',
    description:
      'Seared sirloin with garlicky chimichurri, roasted cauliflower mash and blistered asparagus.',
    kind: 'Steak',
    filters: ['High Protein', 'Lower Carb'],
    dietary: ['Gluten-Free'],
    macros: { calories: 540, protein: 46, carbs: 18, fats: 30 },
    price: 14.5,
    featured: true,
    ingredients: ['Sirloin steak', 'Parsley', 'Garlic', 'Cauliflower', 'Asparagus', 'Red wine vinegar'],
    allergens: ['Allergen info is sample data — confirm per recipe'],
    image: {
      src: null,
      alt: 'Sliced chimichurri steak with cauliflower mash and asparagus.',
      credit: 'Placeholder — replace with licensed food photography.',
      tone: 'beef',
    },
  },
  {
    id: 'lemon-garlic-salmon',
    name: 'Lemon-Garlic Salmon',
    description:
      'Roasted salmon fillet with lemon-garlic butter, herbed quinoa and tender asparagus.',
    kind: 'Salmon',
    filters: ['High Protein', 'Balanced'],
    dietary: ['Gluten-Free', 'Omega-3'],
    macros: { calories: 560, protein: 40, carbs: 38, fats: 26 },
    price: 15.0,
    featured: true,
    ingredients: ['Atlantic salmon', 'Quinoa', 'Asparagus', 'Lemon', 'Garlic', 'Dill'],
    allergens: ['Contains fish', 'Allergen info is sample data — confirm per recipe'],
    image: {
      src: null,
      alt: 'Roasted salmon fillet with herbed quinoa and asparagus.',
      credit: 'Placeholder — replace with licensed food photography.',
      tone: 'salmon',
    },
  },
  {
    id: 'turkey-bolognese',
    name: 'Turkey Bolognese',
    description:
      'Lean ground-turkey bolognese slow-simmered with San Marzano tomatoes over rigatoni.',
    kind: 'Turkey',
    filters: ['Balanced', 'High Protein'],
    dietary: ['Dairy-Free'],
    macros: { calories: 580, protein: 41, carbs: 62, fats: 16 },
    price: 12.0,
    ingredients: ['Ground turkey', 'Rigatoni', 'Tomatoes', 'Onion', 'Garlic', 'Basil'],
    allergens: ['Contains wheat', 'Allergen info is sample data — confirm per recipe'],
    image: {
      src: null,
      alt: 'Turkey bolognese with rigatoni and fresh basil.',
      credit: 'Placeholder — replace with licensed food photography.',
      tone: 'turkey',
    },
  },
  {
    id: 'high-protein-pasta',
    name: 'High-Protein Pasta',
    description:
      'Protein-enriched penne tossed with edamame, roasted tomato and a silky ricotta-basil sauce.',
    kind: 'Pasta',
    filters: ['High Protein', 'Balanced'],
    dietary: ['Vegetarian'],
    macros: { calories: 620, protein: 38, carbs: 74, fats: 18 },
    price: 11.5,
    ingredients: ['Protein penne', 'Edamame', 'Ricotta', 'Tomato', 'Basil', 'Parmesan'],
    allergens: ['Contains wheat', 'Contains milk', 'Allergen info is sample data — confirm per recipe'],
    image: {
      src: null,
      alt: 'High-protein penne pasta with edamame and roasted tomato.',
      credit: 'Placeholder — replace with licensed food photography.',
      tone: 'pasta',
    },
  },
  {
    id: 'southwest-chicken-bowl',
    name: 'Southwest Chicken Bowl',
    description:
      'Chili-lime chicken over brown rice with black beans, roasted corn, peppers and avocado-lime crema.',
    kind: 'Chicken',
    filters: ['High Protein', 'Balanced'],
    dietary: ['Gluten-Free', 'Spicy'],
    macros: { calories: 590, protein: 43, carbs: 66, fats: 15 },
    price: 12.5,
    featured: true,
    ingredients: ['Chicken thigh', 'Brown rice', 'Black beans', 'Corn', 'Bell pepper', 'Lime'],
    allergens: ['Allergen info is sample data — confirm per recipe'],
    image: {
      src: null,
      alt: 'Southwest chicken bowl with brown rice, black beans, corn and peppers.',
      credit: 'Placeholder — replace with licensed food photography.',
      tone: 'chicken',
    },
  },
  {
    id: 'protein-breakfast-bowl',
    name: 'Protein Breakfast Bowl',
    description:
      'Fluffy scrambled eggs with a sweet-potato hash, sautéed spinach and smashed avocado.',
    kind: 'Breakfast',
    filters: ['Breakfast', 'High Protein'],
    dietary: ['Vegetarian', 'Gluten-Free'],
    macros: { calories: 480, protein: 28, carbs: 40, fats: 24 },
    price: 10.5,
    featured: true,
    ingredients: ['Eggs', 'Sweet potato', 'Spinach', 'Avocado', 'Onion', 'Paprika'],
    allergens: ['Contains egg', 'Allergen info is sample data — confirm per recipe'],
    image: {
      src: null,
      alt: 'Protein breakfast bowl with scrambled eggs, sweet-potato hash and avocado.',
      credit: 'Placeholder — replace with licensed food photography.',
      tone: 'breakfast',
    },
  },
  {
    id: 'roasted-vegetable-grain-bowl',
    name: 'Roasted Vegetable Grain Bowl',
    description:
      'Nutty farro with maple-roasted vegetables, crispy chickpeas and a lemon-tahini drizzle.',
    kind: 'Plant-Based',
    filters: ['Plant-Based', 'Balanced'],
    dietary: ['Vegan', 'Dairy-Free'],
    macros: { calories: 500, protein: 19, carbs: 68, fats: 16 },
    price: 11.0,
    ingredients: ['Farro', 'Chickpeas', 'Sweet potato', 'Brussels sprouts', 'Tahini', 'Lemon'],
    allergens: ['Contains sesame', 'Contains wheat', 'Allergen info is sample data — confirm per recipe'],
    image: {
      src: null,
      alt: 'Roasted vegetable grain bowl with farro, chickpeas and tahini drizzle.',
      credit: 'Placeholder — replace with licensed food photography.',
      tone: 'veg',
    },
  },
];

/** Convenience lookup used by the weekly-menu preview + detail modal. */
export const mealById = (id: string): Meal | undefined => meals.find((m) => m.id === id);

/** Filter groups, in display order (an implicit "All" is prepended in the UI). */
export const mealFilters = [
  'All',
  'High Protein',
  'Balanced',
  'Lower Carb',
  'Breakfast',
  'Plant-Based',
] as const;
