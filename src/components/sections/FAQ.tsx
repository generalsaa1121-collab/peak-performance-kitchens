import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { faqs } from '../../data/faqs';
import { sections } from '../../data/siteContent';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

export function FAQ() {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 py-20 lg:py-28">
      <div className="u-container grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow={sections.faq.eyebrow} heading={sections.faq.heading} subhead={sections.faq.subhead} />
          <div className="mt-6">
            <Button href="#contact" variant="secondary" withArrow>
              Still have a question?
            </Button>
          </div>
        </div>

        <ul className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-btn-${i}`;
            return (
              <li key={faq.question}>
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className={cn('font-display text-base font-semibold transition-colors sm:text-lg', isOpen ? 'text-green' : 'text-white')}>
                      {faq.question}
                    </span>
                    <span
                      className={cn('grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-300', isOpen ? 'rotate-180 border-green text-green' : 'border-white/20 text-ash')}
                      aria-hidden="true"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                </h3>

                {reduce ? (
                  isOpen && (
                    <div id={panelId} role="region" aria-labelledby={btnId} className="pb-5">
                      <p className="max-w-2xl pr-6 leading-relaxed text-ash">{faq.answer}</p>
                    </div>
                  )
                ) : (
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-5 pr-6 leading-relaxed text-ash">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
