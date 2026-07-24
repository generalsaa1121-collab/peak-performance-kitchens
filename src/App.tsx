import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, useReducedMotion } from 'framer-motion';

import { navLinks } from './config/brand';
import { useActiveSection } from './hooks/useActiveSection';
import { scrollToAnchor } from './lib/utils';
import { PlanProvider } from './context/PlanContext';

import { Preloader } from './components/layout/Preloader';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { Header } from './components/layout/Header';
import { MobileMenu } from './components/layout/MobileMenu';
import { Footer } from './components/layout/Footer';

import { Hero } from './components/sections/Hero';
import { BenefitStrip } from './components/sections/BenefitStrip';
import { FeaturedMeals } from './components/sections/FeaturedMeals';
import { WeeklyMenu } from './components/sections/WeeklyMenu';
import { MealPlans } from './components/sections/MealPlans';
import { HowItWorks } from './components/sections/HowItWorks';
import { Stats } from './components/sections/Stats';
import { NutritionSection } from './components/sections/NutritionSection';
import { BrandStory } from './components/sections/BrandStory';
import { Testimonials } from './components/sections/Testimonials';
import { SloganBand } from './components/sections/SloganBand';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { MealDetailModal } from './components/sections/MealDetailModal';
import { PlanTray } from './components/sections/PlanTray';

export default function App() {
  const reduce = useReducedMotion();
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const pendingHref = useRef<string | null>(null);

  const sectionIds = useMemo(() => navLinks.map((l) => l.href.slice(1)), []);
  const activeId = useActiveSection(sectionIds);

  // Brief loading transition, then reveal the site.
  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), reduce ? 350 : 1250);
    return () => window.clearTimeout(timer);
  }, [reduce]);

  const handleNavigate = (href: string) => {
    pendingHref.current = href;
    setMenuOpen(false);
  };

  return (
    <PlanProvider>
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only left-4 top-4 z-[110] rounded-lg bg-green px-4 py-2 font-semibold text-ink-900 focus:not-sr-only focus:absolute"
      >
        Skip to content
      </a>

      <AnimatePresence>{loading && <Preloader key="preloader" />}</AnimatePresence>

      <ScrollProgress />
      <Header menuOpen={menuOpen} activeId={activeId} onOpenMenu={() => setMenuOpen(true)} />

      <AnimatePresence
        onExitComplete={() => {
          if (pendingHref.current) {
            scrollToAnchor(pendingHref.current);
            pendingHref.current = null;
          }
        }}
      >
        {menuOpen && (
          <MobileMenu
            key="mobile-menu"
            activeId={activeId}
            onClose={() => setMenuOpen(false)}
            onNavigate={handleNavigate}
          />
        )}
      </AnimatePresence>

      <main id="main">
        <Hero ready={!loading} />
        <BenefitStrip />
        <FeaturedMeals />
        <WeeklyMenu />
        <MealPlans />
        <HowItWorks />
        <Stats />
        <NutritionSection />
        <BrandStory />
        <Testimonials />
        <SloganBand />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {/* Global overlays (front-end mock) */}
      <MealDetailModal />
      <PlanTray />
    </PlanProvider>
  );
}
