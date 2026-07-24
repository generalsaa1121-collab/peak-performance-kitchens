import { useState } from 'react';
import { mealPlans } from '../../data/mealPlans';
import { sections } from '../../data/siteContent';
import { cta } from '../../config/brand';
import { SectionHeading } from '../ui/SectionHeading';
import { Stagger } from '../ui/Animated';
import { PlanCard } from './PlanCard';
import { Button } from '../ui/Button';

export function MealPlans() {
  // Default selection highlights the "most popular" plan honestly.
  const [selected, setSelected] = useState<string>(
    mealPlans.find((p) => p.featured)?.id ?? mealPlans[0].id,
  );

  return (
    <section id="meal-plans" className="scroll-mt-24 border-y border-white/10 bg-ink-800 py-20 lg:py-28">
      <div className="u-container">
        <SectionHeading
          eyebrow={sections.plans.eyebrow}
          heading={sections.plans.heading}
          subhead={sections.plans.subhead}
          align="center"
          className="mx-auto items-center text-center"
        />

        <Stagger
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
          gap={0.08}
        >
          {mealPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} selected={selected === plan.id} onSelect={setSelected} />
          ))}
        </Stagger>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <Button href={cta.secondary.href} variant="secondary">
            Browse the full menu first
          </Button>
          <p className="text-xs text-steel">
            Selecting a plan is a preview — no charge. Prices shown are samples.
          </p>
        </div>
      </div>
    </section>
  );
}
