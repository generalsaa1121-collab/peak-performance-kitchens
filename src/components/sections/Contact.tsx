import { sections } from '../../data/siteContent';
import { contact } from '../../config/brand';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Animated';
import { Icon } from '../ui/Icon';
import { ContactForm } from './ContactForm';
import { NewsletterForm } from './NewsletterForm';
import type { IconKey } from '../../types';

const details: { icon: IconKey; label: string; value: string; href?: string }[] = [
  { icon: 'macro', label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { icon: 'clock', label: 'Phone', value: contact.phone, href: contact.phoneHref },
  { icon: 'mountain', label: 'Service area', value: contact.serviceArea },
  { icon: 'calendar', label: 'Availability', value: contact.hours },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/10 bg-ink-800 py-20 lg:py-28">
      <div className="u-container grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left: heading + details + newsletter */}
        <div>
          <SectionHeading eyebrow={sections.contact.eyebrow} heading={sections.contact.heading} subhead={sections.contact.subhead} />

          <Reveal>
            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {details.map((d) => (
                <li key={d.label} className="flex items-start gap-3 rounded-card border border-white/[0.08] bg-ink-900/40 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green/12 text-green ring-1 ring-inset ring-green/25">
                    <Icon name={d.icon} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-steel">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="mt-0.5 block truncate text-sm text-cloud transition-colors hover:text-green">
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm text-cloud">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-6">
            <NewsletterForm />
          </div>
        </div>

        {/* Right: contact form */}
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
