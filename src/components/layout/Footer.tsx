import {
  brand,
  brandDescription,
  navLinks,
  contact,
  socials,
  legalLinks,
  nutritionDisclaimer,
} from '../../config/brand';
import { logos } from '../../config/assets';
import { Logo } from '../ui/Logo';

const year = new Date().getFullYear();

/** Site footer — logo, description, links, contact placeholders, disclaimers. */
export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-800">
      {/* Mountain watermark */}
      <img
        src={logos.symbolMarkLight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 right-0 w-80 max-w-[45%] opacity-[0.05]"
      />

      <div className="u-container relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Logo variant="stacked" className="h-20 w-auto" alt={brand.name} />
            <p className="mt-5 text-sm leading-relaxed text-ash">{brandDescription}</p>
            <p className="mt-4 font-display text-sm font-semibold uppercase tracking-peak text-green">
              {brand.slogan}
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer — explore">
            <h3 className="font-display text-xs font-bold uppercase tracking-peak text-steel">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-mist transition-colors hover:text-green">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <nav aria-label="Footer — social">
            <h3 className="font-display text-xs font-bold uppercase tracking-peak text-steel">
              Follow
            </h3>
            <ul className="mt-4 space-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  {/* PLACEHOLDER social link — set the real URL in src/config/brand.ts */}
                  <a href={s.href} className="text-sm text-mist transition-colors hover:text-green">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-peak text-steel">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-mist">
              <li>
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-green">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.phoneHref} className="transition-colors hover:text-green">
                  {contact.phone}
                </a>
              </li>
              <li className="text-ash">{contact.serviceArea}</li>
              <li className="text-ash">{contact.hours}</li>
            </ul>
          </div>
        </div>

        {/* Nutrition disclaimer */}
        <div id="nutrition-disclaimer" className="mt-14 scroll-mt-28 rounded-card border border-white/[0.07] bg-white/[0.02] p-5">
          <p className="text-xs leading-relaxed text-steel">
            <span className="font-semibold text-ash">Nutrition disclaimer — </span>
            {nutritionDisclaimer}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-steel">
            © {year} {brand.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                {/* PLACEHOLDER legal link — point at the real page before launch */}
                <a href={link.href} className="text-xs text-steel transition-colors hover:text-mist">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
