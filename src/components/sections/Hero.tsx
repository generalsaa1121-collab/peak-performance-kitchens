import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { hero } from '../../data/siteContent';
import { brand, cta } from '../../config/brand';
import { images, logos } from '../../config/assets';
import { fadeUp, lineReveal, stagger, EASE } from '../../lib/motion';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { CountUp } from '../ui/CountUp';

/** Renders a headline line, greening the highlighted word. */
function HeadlineLine({ text, highlight }: { text: string; highlight: string }) {
  const parts = text.split(new RegExp(`(${highlight})`, 'i'));
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span variants={lineReveal} className="block">
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="text-green">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          ),
        )}
      </motion.span>
    </span>
  );
}

export function Hero({ ready = true }: { ready?: boolean }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  // Entrance plays only once the preloader has lifted, so the reveal is seen
  // rather than completing behind the overlay. Reduced motion shows it instantly.
  const start = reduce || ready;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const yMain = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -46]);
  const yFloat = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 54]);
  const yBadge = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]);

  const container = stagger(0.11, reduce ? 0 : 0.15);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[92vh] items-center overflow-hidden pb-16 pt-28 lg:pt-32"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-green/10 blur-[120px]"
          animate={reduce ? undefined : { opacity: [0.65, 1, 0.65], scale: [1, 1.08, 1] }}
          transition={reduce ? undefined : { repeat: Infinity, duration: 9, ease: 'easeInOut' }}
        />
        <div className="absolute bottom-0 left-1/2 h-72 w-[120%] -translate-x-1/2 bg-gradient-to-t from-ink-900 to-transparent" />
        {/* Topographic contour lines */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.06]" preserveAspectRatio="none" viewBox="0 0 1440 900" fill="none">
          <g stroke="white" strokeWidth="1.5">
            <path d="M-50 640 L360 360 L560 470 L780 250 L1040 430 L1500 120" />
            <path d="M-50 720 L360 440 L560 550 L780 330 L1040 510 L1500 200" />
            <path d="M-50 800 L360 520 L560 630 L780 410 L1040 590 L1500 280" />
          </g>
        </svg>
        {/* Faint mountain symbol */}
        <img
          src={logos.symbolMarkLight}
          alt=""
          className="absolute -left-16 bottom-0 w-[34rem] max-w-[50%] opacity-[0.04]"
        />
      </div>

      <div className="u-container relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Copy */}
        <motion.div
          className="lg:col-span-6 xl:col-span-6"
          variants={container}
          initial={reduce ? 'visible' : 'hidden'}
          animate={start ? 'visible' : 'hidden'}
        >
          <motion.span variants={fadeUp} className="u-kicker">
            <Icon name="mountain" className="h-4 w-4" strokeWidth={2} />
            {hero.eyebrow}
          </motion.span>

          <h1 className="mt-5 font-display text-[2.7rem] font-extrabold leading-[0.98] tracking-tightest text-white sm:text-6xl lg:text-[4.2rem]">
            {hero.headlineLines.map((line) => (
              <HeadlineLine key={line} text={line} highlight={hero.highlight} />
            ))}
          </h1>

          {/* Slogan lockup */}
          <motion.p
            variants={fadeUp}
            className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.14em] text-mist sm:text-base"
          >
            {brand.sloganParts.map((part, i) => (
              <span key={part}>
                {i > 0 && <span className="mx-2 text-green">+</span>}
                {part}
              </span>
            ))}
          </motion.p>

          <motion.p variants={fadeUp} className="mt-5 max-w-lg text-base leading-relaxed text-ash sm:text-lg">
            {hero.subhead}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={cta.primary.href} size="lg" withArrow>
              {cta.primary.label}
            </Button>
            <Button href={cta.secondary.href} size="lg" variant="secondary">
              {cta.secondary.label}
            </Button>
          </motion.div>

          <motion.ul variants={fadeUp} className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {hero.chips.map((chip) => (
              <li key={chip} className="flex items-center gap-2 text-sm text-mist">
                <Icon name="leaf" className="h-4 w-4 text-green" />
                {chip}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Layered imagery */}
        <div className="lg:col-span-6">
          <div className="relative mx-auto max-w-md lg:ml-auto lg:mr-0">
            {/* Main card */}
            <motion.div
              style={{ y: yMain }}
              initial={reduce ? { opacity: 1 } : { opacity: 0, clipPath: 'inset(0 0 100% 0)', scale: 1.06 }}
              animate={start ? { opacity: 1, clipPath: 'inset(0 0 0% 0)', scale: 1 } : undefined}
              transition={{ duration: 1, ease: EASE, delay: reduce ? 0 : 0.2 }}
              className="relative"
            >
              <ResponsiveImage
                image={images.hero}
                priority
                seed="hero"
                className="aspect-[4/5] w-full rounded-card shadow-lift ring-1 ring-white/10"
              />
              {/* Green elevation accent line */}
              <div className="absolute -left-3 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-green to-transparent" aria-hidden="true" />
            </motion.div>

            {/* Floating macro card */}
            <motion.div
              style={{ y: yFloat }}
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={start ? { opacity: 1 } : undefined}
              transition={{ duration: 0.7, ease: EASE, delay: reduce ? 0 : 0.75 }}
              className="absolute -bottom-6 -left-4 w-52 rounded-card border border-white/10 bg-ink-800/85 p-4 shadow-lift backdrop-blur-md sm:-left-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wide text-ash">Avg protein</span>
                <span className="font-display text-lg font-bold text-green">
                  <CountUp value={30} suffix="g" />
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[72%] rounded-full bg-green" />
              </div>
              <p className="mt-2 text-[0.7rem] leading-tight text-steel">
                Sample performance plate · ~520 cal
              </p>
            </motion.div>

            {/* Floating brand badge (transparent mountain-circle mark) */}
            <motion.img
              src={logos.symbolMark}
              alt=""
              aria-hidden="true"
              style={{ y: yBadge }}
              initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
              animate={start ? { opacity: 1, scale: 1 } : undefined}
              transition={{ duration: 0.7, ease: EASE, delay: reduce ? 0 : 0.9 }}
              className="absolute -right-5 -top-5 h-20 w-20 sm:h-24 sm:w-24"
            />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#meals"
        aria-label="Scroll to the menu"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-steel transition-colors hover:text-green lg:flex"
      >
        <span className="text-[0.65rem] font-semibold uppercase tracking-peak">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-current p-1">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-current"
            animate={reduce ? undefined : { y: [0, 8, 0] }}
            transition={reduce ? undefined : { repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          />
        </span>
      </a>
    </section>
  );
}
