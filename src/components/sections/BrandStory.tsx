import { brandStory } from '../../data/siteContent';
import { images, logos } from '../../config/assets';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '../ui/Animated';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { Icon } from '../ui/Icon';
import { scaleIn } from '../../lib/motion';

export function BrandStory() {
  return (
    <section id="about" className="scroll-mt-24 py-20 lg:py-28">
      <div className="u-container grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Image side */}
        <div className="relative order-1 lg:order-none">
          {/* Outer wrapper (no transform) clips the scaled mask-reveal so it
              never extends the page's horizontal scroll region. */}
          <div className="overflow-hidden rounded-card ring-1 ring-white/10">
            <Reveal variants={scaleIn}>
              <ResponsiveImage image={images.brandStory} seed="about" className="aspect-[4/5] w-full" />
            </Reveal>
          </div>

          {/* Slogan mark */}
          <img
            src={logos.symbolMarkLight}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -left-5 -top-5 h-16 w-auto opacity-30"
          />

          {/* Pull quote */}
          <Reveal className="absolute -bottom-6 right-3 max-w-[16rem] rounded-card border border-white/10 bg-ink-800/90 p-5 shadow-lift backdrop-blur-md sm:-right-5">
            <Icon name="mountain" className="h-5 w-5 text-green" strokeWidth={2} />
            <p className="mt-2 font-display text-lg font-bold leading-snug text-white">
              “{brandStory.pullQuote}”
            </p>
          </Reveal>
        </div>

        {/* Copy side */}
        <div>
          <SectionHeading eyebrow={brandStory.eyebrow} heading={brandStory.heading} />

          <Reveal className="mt-6 space-y-4">
            {brandStory.body.map((para) => (
              <p key={para} className="max-w-xl leading-relaxed text-ash">
                {para}
              </p>
            ))}
          </Reveal>

          <Stagger className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3" gap={0.1}>
            {brandStory.values.map((value) => (
              <StaggerItem key={value.title} className="rounded-card border border-white/[0.08] bg-ink-800/60 p-4">
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-green">
                  {value.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ash">{value.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
