import { testimonials } from '../../data/testimonials';
import { sections } from '../../data/siteContent';
import { Stagger, StaggerItem } from '../ui/Animated';
import { Tag } from '../ui/Tag';

const initials = (name: string) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

export function Testimonials() {
  return (
    <section aria-label="What customers say" className="py-20 lg:py-28">
      <div className="u-container">
        <div className="flex flex-col gap-4">
          <span className="u-kicker">{sections.testimonials.eyebrow}</span>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-2xl font-display text-3xl font-bold leading-[1.05] tracking-tightest text-white sm:text-4xl lg:text-[2.9rem]">
              {sections.testimonials.heading}
            </h2>
            <Tag variant="outline">Placeholder testimonials</Tag>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-ash">{sections.testimonials.subhead}</p>
        </div>

        <Stagger className="mt-10 gap-5 [column-fill:_balance] sm:columns-2 lg:columns-3" gap={0.08}>
          {testimonials.map((t) => (
            <StaggerItem
              key={t.name}
              className="mb-5 break-inside-avoid rounded-card border border-white/10 bg-ink-800 p-6"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" className="text-green/70" fill="currentColor" aria-hidden="true">
                <path d="M9.5 6C6.9 6 5 8 5 10.7 5 13.2 6.8 15 9.2 15c.3 0 .6 0 .8-.1-.5 1.6-1.9 2.8-3.6 3.2l.5 1.9c3.2-.8 5.6-3.7 5.6-7.4C12.5 8 11.2 6 9.5 6Zm8 0C14.9 6 13 8 13 10.7c0 2.5 1.8 4.3 4.2 4.3.3 0 .6 0 .8-.1-.5 1.6-1.9 2.8-3.6 3.2l.5 1.9c3.2-.8 5.6-3.7 5.6-7.4C20.5 8 19.2 6 17.5 6Z" />
              </svg>
              <p className="mt-3 leading-relaxed text-cloud">{t.quote}</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green/15 font-display text-sm font-bold text-green ring-1 ring-inset ring-green/30">
                  {initials(t.name)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-ash">{t.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
