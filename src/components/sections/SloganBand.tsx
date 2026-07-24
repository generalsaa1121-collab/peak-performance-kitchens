import { brand, cta } from '../../config/brand';
import { images, logos } from '../../config/assets';
import { Reveal } from '../ui/Animated';
import { Button } from '../ui/Button';
import { ResponsiveImage } from '../ui/ResponsiveImage';

/**
 * Wide branded slogan moment. Uses the full slogan-lockup logo where it stays
 * readable (desktop) and a legible styled-text slogan on smaller screens.
 */
export function SloganBand() {
  return (
    <section
      aria-label={brand.slogan}
      className="relative overflow-hidden border-y border-white/10 bg-ink-800"
    >
      {/* Background motif */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Editorial food texture (planBand image slot) behind a heavy overlay */}
        <ResponsiveImage image={images.planBand} decorative seed="slogan" className="absolute inset-0 h-full w-full opacity-25" />
        <div className="absolute inset-0 bg-ink-800/85" />
        <div className="absolute left-1/2 top-0 h-72 w-[80%] -translate-x-1/2 rounded-full bg-green/10 blur-[120px]" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.05]" preserveAspectRatio="none" viewBox="0 0 1440 400" fill="none">
          <g stroke="white" strokeWidth="1.5">
            <path d="M-20 300 L360 150 L560 230 L820 90 L1120 210 L1500 60" />
            <path d="M-20 360 L360 210 L560 290 L820 150 L1120 270 L1500 120" />
          </g>
        </svg>
      </div>

      <div className="u-container relative py-20 text-center lg:py-24">
        <Reveal className="flex flex-col items-center gap-8">
          <img src={logos.symbolMarkLight} alt="" aria-hidden="true" className="h-12 w-auto" />

          {/* Mobile / tablet: styled text slogan (always legible) */}
          <p className="font-display text-2xl font-extrabold leading-tight tracking-tightest text-white sm:text-3xl lg:hidden">
            {brand.sloganParts.map((part, i) => (
              <span key={part}>
                {i > 0 && <span className="mx-1.5 text-green">+</span>}
                {part}
              </span>
            ))}
          </p>

          {/* Desktop: full slogan-lockup logo */}
          <img
            src={logos.sloganBand}
            alt={`${brand.name} — ${brand.slogan}`}
            className="hidden w-full max-w-3xl lg:block"
          />

          <p className="max-w-xl text-base leading-relaxed text-ash">
            Quality ingredients, balanced nutrition and real convenience — the everyday habit that keeps
            your goals moving forward.
          </p>

          <Button href={cta.primary.href} size="lg" withArrow>
            {cta.primary.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
