import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { howItWorks } from '../../data/siteContent';
import { SectionHeading } from '../ui/SectionHeading';
import { Stagger, StaggerItem } from '../ui/Animated';
import { Icon } from '../ui/Icon';

export function HowItWorks() {
  const reduce = useReducedMotion();
  const stepsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ['start 75%', 'end 55%'],
  });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="how-it-works" className="scroll-mt-24 py-20 lg:py-28">
      <div className="u-container">
        <SectionHeading
          eyebrow={howItWorks.eyebrow}
          heading={howItWorks.heading}
          subhead={howItWorks.subhead}
          align="center"
          className="mx-auto items-center text-center"
        />

        <div ref={stepsRef} className="relative mt-14">
          {/* Connecting line — vertical on mobile, horizontal on desktop */}
          <div className="absolute left-7 top-0 bottom-0 w-px bg-white/10 lg:hidden" aria-hidden="true">
            <motion.div
              className="h-full w-full origin-top bg-green"
              style={reduce ? { scaleY: 1 } : { scaleY: progress }}
            />
          </div>
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-white/10 lg:block" aria-hidden="true">
            <motion.div
              className="h-full w-full origin-left bg-green"
              style={reduce ? { scaleX: 1 } : { scaleX: progress }}
            />
          </div>

          <Stagger
            className="relative flex flex-col gap-9 lg:grid lg:grid-cols-4 lg:gap-6"
            gap={0.14}
          >
            {howItWorks.steps.map((step) => (
              <StaggerItem key={step.index} className="relative flex gap-5 lg:flex-col lg:gap-4">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-green/40 bg-ink-900 text-green shadow-[0_0_0_6px_rgba(11,11,12,1)]">
                  <Icon name={step.icon} className="h-6 w-6" />
                </div>
                <div className="lg:pr-4">
                  <span className="font-display text-xs font-bold uppercase tracking-peak text-green">
                    Step {step.index}
                  </span>
                  <h3 className="mt-1.5 font-display text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ash">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
