import type { MealPlan } from '../../types';
import { StaggerItem } from '../ui/Animated';
import { Icon } from '../ui/Icon';
import { cn, usd } from '../../lib/utils';

interface PlanCardProps {
  plan: MealPlan;
  selected: boolean;
  onSelect: (id: string) => void;
}

export function PlanCard({ plan, selected, onSelect }: PlanCardProps) {
  const emphasized = selected || plan.featured;

  return (
    <StaggerItem
      className={cn(
        'relative flex h-full flex-col rounded-card border p-6 transition-colors duration-300',
        selected
          ? 'border-green bg-ink-800 ring-1 ring-green'
          : plan.featured
            ? 'border-green/40 bg-ink-800'
            : 'border-white/10 bg-ink-800/60 hover:border-white/20',
      )}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-6 rounded-pill bg-green px-3 py-1 font-display text-[0.7rem] font-bold uppercase tracking-wide text-ink-900">
          Most popular
        </span>
      )}

      <div className="flex items-baseline justify-between gap-2">
        <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
      </div>
      <p className="mt-1 text-sm text-ash">{plan.tagline}</p>

      {/* Price */}
      <div className="mt-5">
        {plan.weeklyPrice > 0 ? (
          <div className="flex items-end gap-1.5">
            <span className="font-display text-4xl font-extrabold tracking-tightest text-white">
              {usd(plan.weeklyPrice, false)}
            </span>
            <span className="pb-1 text-sm text-ash">/ week</span>
          </div>
        ) : (
          <div className="flex items-end gap-1.5">
            <span className="pb-1 text-sm text-ash">from</span>
            <span className="font-display text-4xl font-extrabold tracking-tightest text-white">
              {usd(plan.perMealFrom)}
            </span>
            <span className="pb-1 text-sm text-ash">/ meal</span>
          </div>
        )}
        <p className="mt-1 text-xs text-steel">
          {plan.weeklyPrice > 0 ? `from ${usd(plan.perMealFrom)} / meal · ` : ''}sample pricing
        </p>
      </div>

      <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-pill bg-white/[0.05] px-3 py-1 text-xs font-medium text-mist ring-1 ring-inset ring-white/10">
        <Icon name="calendar" className="h-3.5 w-3.5 text-green" strokeWidth={2} />
        {plan.quantity}
      </span>

      <p className="mt-4 text-sm leading-relaxed text-mist">{plan.highlight}</p>

      {/* Features */}
      <ul className="mt-5 flex-1 space-y-2.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-cloud">
            <Icon name="choose" className="mt-0.5 h-4 w-4 shrink-0 text-green" strokeWidth={2} />
            {feature}
          </li>
        ))}
      </ul>

      {/* Meta */}
      <dl className="mt-5 space-y-2 border-t border-white/[0.08] pt-4 text-xs">
        <div>
          <dt className="text-steel">Ideal for</dt>
          <dd className="mt-0.5 text-ash">{plan.idealFor}</dd>
        </div>
        <div>
          <dt className="text-steel">Flexibility</dt>
          <dd className="mt-0.5 text-ash">{plan.flexibility}</dd>
        </div>
      </dl>

      <button
        type="button"
        onClick={() => onSelect(plan.id)}
        aria-pressed={selected}
        className={cn(
          'mt-6 inline-flex items-center justify-center gap-2 rounded-pill px-5 py-3 font-display text-sm font-semibold transition-all duration-200 ease-peak active:scale-[0.97]',
          selected
            ? 'bg-green/15 text-green ring-1 ring-inset ring-green/40'
            : emphasized
              ? 'bg-green text-ink-900 hover:brightness-[1.06]'
              : 'border border-white/15 text-cloud hover:border-green hover:text-white',
        )}
      >
        {selected ? (
          <>
            <Icon name="choose" className="h-4 w-4" strokeWidth={2} /> Selected
          </>
        ) : (
          plan.ctaLabel
        )}
      </button>
    </StaggerItem>
  );
}
