import { stats } from '../../data/siteContent';
import { Stagger, StaggerItem } from '../ui/Animated';
import { CountUp } from '../ui/CountUp';

/** Compact band of animated product stats (sample figures, never customer counts). */
export function Stats() {
  return (
    <section aria-label="Peak Performance Kitchens at a glance" className="border-y border-white/10 bg-ink-800">
      <div className="u-container py-14 lg:py-16">
        <Stagger className="grid grid-cols-2 gap-y-10 lg:grid-cols-4" gap={0.1}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="flex flex-col items-center px-2 text-center">
              <span className="mb-3 h-1 w-8 rounded-full bg-green" aria-hidden="true" />
              <span className="font-display text-4xl font-extrabold tracking-tightest text-white lg:text-5xl">
                <CountUp value={stat.value} prefix={stat.prefix} />
                <span className="text-green">{stat.suffix}</span>
              </span>
              <span className="mt-2 text-sm text-ash">{stat.label}</span>
              {stat.note && <span className="mt-1 text-[0.65rem] uppercase tracking-wide text-steel">{stat.note}</span>}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
