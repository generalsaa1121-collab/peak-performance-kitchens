import { benefits, marqueeWords } from '../../data/siteContent';
import { Marquee } from '../ui/Marquee';
import { Stagger, StaggerItem } from '../ui/Animated';
import { Icon } from '../ui/Icon';

/** Trust/benefit band: a subtle brand marquee over a staggered benefit row. */
export function BenefitStrip() {
  return (
    <section aria-label="Why Peak Performance Kitchens" className="border-y border-white/10 bg-ink-800">
      <div className="border-b border-white/[0.06] py-5">
        <Marquee items={marqueeWords} />
      </div>

      <div className="u-container py-12 lg:py-16">
        <Stagger
          as="ul"
          className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-5"
          gap={0.08}
        >
          {benefits.map((benefit) => (
            <StaggerItem as="li" key={benefit.title} className="flex flex-col items-start">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green/12 text-green ring-1 ring-inset ring-green/25">
                <Icon name={benefit.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-white">{benefit.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ash">{benefit.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
