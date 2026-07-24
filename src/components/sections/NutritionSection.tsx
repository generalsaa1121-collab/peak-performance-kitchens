import { motion, useReducedMotion } from 'framer-motion';
import { nutrition } from '../../data/siteContent';
import type { MacroSlice } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '../ui/Animated';
import { MacroBar } from '../ui/MacroBar';
import { Icon } from '../ui/Icon';
import { EASE } from '../../lib/motion';

const R = 54;
const CIRC = 2 * Math.PI * R;

const sliceColor = (tone: MacroSlice['tone']) =>
  tone === 'protein' ? 'rgb(163 230 53)' : tone === 'carbs' ? '#C7C9CE' : '#4B4D52';

/** Animated macro donut built from the sample plate composition. */
function MacroDonut({ slices, calories }: { slices: MacroSlice[]; calories: number }) {
  const reduce = useReducedMotion();
  let cumulative = 0;

  return (
    <div className="relative h-44 w-44 shrink-0">
      <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90">
        <circle cx="70" cy="70" r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="16" />
        {slices.map((slice) => {
          const frac = slice.percent / 100;
          const start = cumulative;
          cumulative += frac;
          const rotateStyle = {
            transformBox: 'fill-box' as const,
            transformOrigin: 'center',
            rotate: `${start * 360}deg`,
          };
          if (reduce) {
            return (
              <circle
                key={slice.label}
                cx="70"
                cy="70"
                r={R}
                fill="none"
                stroke={sliceColor(slice.tone)}
                strokeWidth="16"
                strokeDasharray={`${frac * CIRC} ${CIRC}`}
                style={rotateStyle}
              />
            );
          }
          return (
            <motion.circle
              key={slice.label}
              cx="70"
              cy="70"
              r={R}
              fill="none"
              stroke={sliceColor(slice.tone)}
              strokeWidth="16"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: frac }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.9, ease: EASE, delay: start * 0.35 }}
              style={rotateStyle}
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-2xl font-extrabold text-white">{calories}</span>
        <span className="text-[0.65rem] uppercase tracking-wide text-steel">calories</span>
      </div>
    </div>
  );
}

export function NutritionSection() {
  return (
    <section id="nutrition" className="scroll-mt-24 py-20 lg:py-28">
      <div className="u-container grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Editorial */}
        <div>
          <SectionHeading eyebrow={nutrition.eyebrow} heading={nutrition.heading} />
          <Reveal className="mt-6 space-y-4">
            {nutrition.body.map((para) => (
              <p key={para} className="max-w-xl leading-relaxed text-ash">
                {para}
              </p>
            ))}
          </Reveal>

          <Stagger as="ul" className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2" gap={0.08}>
            {nutrition.principles.map((p) => (
              <StaggerItem as="li" key={p.title} className="flex gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green/12 text-green ring-1 ring-inset ring-green/25">
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ash">{p.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Nutrition display */}
        <Reveal variants={undefined} className="relative">
          <div className="rounded-card border border-white/10 bg-ink-800 p-7 shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-white">Performance plate</h3>
                <p className="text-sm text-ash">A balanced sample meal, by the numbers.</p>
              </div>
              <span className="rounded-pill bg-green/12 px-3 py-1 text-xs font-semibold text-green ring-1 ring-inset ring-green/25">
                Sample
              </span>
            </div>

            <div className="mt-6 flex flex-col items-center gap-7 sm:flex-row sm:items-center">
              <MacroDonut slices={nutrition.macroSlices} calories={nutrition.plateCalories} />
              <div className="w-full flex-1 space-y-4">
                {nutrition.macroSlices.map((slice) => (
                  <MacroBar
                    key={slice.label}
                    label={slice.label}
                    grams={slice.grams}
                    percent={slice.percent}
                    tone={slice.tone}
                  />
                ))}
              </div>
            </div>

            <p className="mt-6 border-t border-white/[0.08] pt-4 text-xs text-steel">
              Macros are approximate sample values. Every meal on the real menu lists its own verified
              nutrition.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
