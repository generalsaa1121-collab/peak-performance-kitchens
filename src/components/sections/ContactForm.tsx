import { useState, type ChangeEvent, type FormEvent } from 'react';
import { mealPlans } from '../../data/mealPlans';
import { submitLead, isValidEmail, type LeadPayload } from '../../lib/forms';
import { Icon } from '../ui/Icon';
import { cn } from '../../lib/utils';

type Status = 'idle' | 'loading' | 'success' | 'error';
type Errors = Partial<Record<keyof LeadPayload | 'form', string>>;

const empty: LeadPayload = {
  name: '',
  email: '',
  phone: '',
  planInterest: '',
  contactMethod: 'Email',
  message: '',
};

const inputCls = (hasError: boolean) =>
  cn(
    'w-full rounded-xl border bg-ink-900/60 px-4 py-3 text-sm text-white placeholder:text-steel transition-colors focus:outline-none focus:ring-2 focus:ring-green/50',
    hasError ? 'border-red-400/70' : 'border-white/12 focus:border-green',
  );

function ErrorText({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs text-red-400">
      {msg}
    </p>
  );
}

export function ContactForm() {
  const [values, setValues] = useState<LeadPayload>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  const set =
    (key: keyof LeadPayload) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  const validate = (): Errors => {
    const e: Errors = {};
    if (!values.name.trim()) e.name = 'Please enter your name.';
    if (!values.email.trim()) e.email = 'Please enter your email.';
    else if (!isValidEmail(values.email)) e.email = 'Please enter a valid email address.';
    if (values.phone.trim() && values.phone.replace(/\D/g, '').length < 7)
      e.phone = 'Please enter a valid phone number.';
    if (!values.message.trim()) e.message = 'Please add a short message.';
    return e;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      setStatus('error');
      const firstKey = Object.keys(e)[0];
      setTimeout(() => document.getElementById(`contact-${firstKey}`)?.focus(), 0);
      return;
    }
    setStatus('loading');
    try {
      await submitLead(values);
      setStatus('success');
      setValues(empty);
      setErrors({});
    } catch {
      setStatus('error');
      setErrors({ form: 'Something went wrong sending your message. Please try again.' });
    }
  };

  if (status === 'success') {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-center justify-center rounded-card border border-green/30 bg-green/[0.06] p-8 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green text-ink-900">
          <Icon name="choose" className="h-7 w-7" strokeWidth={2.4} />
        </span>
        <h3 className="mt-5 font-display text-xl font-bold text-white">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ash">
          Thanks for reaching out — this is a preview, so nothing was actually sent. With a connected
          form provider, the team would follow up shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-5 rounded-pill border border-white/15 px-5 py-2.5 text-sm font-semibold text-cloud transition-colors hover:border-green hover:text-white"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-card border border-white/10 bg-ink-800 p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-cloud">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={set('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'err-name' : undefined}
            className={inputCls(Boolean(errors.name))}
            placeholder="Jordan Rivera"
          />
          <ErrorText id="err-name" msg={errors.name} />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-cloud">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'err-email' : undefined}
            className={inputCls(Boolean(errors.email))}
            placeholder="you@example.com"
          />
          <ErrorText id="err-email" msg={errors.email} />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-cloud">
            Phone <span className="text-steel">(optional)</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={set('phone')}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'err-phone' : undefined}
            className={inputCls(Boolean(errors.phone))}
            placeholder="(555) 000-0000"
          />
          <ErrorText id="err-phone" msg={errors.phone} />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="contact-planInterest" className="mb-1.5 block text-sm font-medium text-cloud">
            Plan interest
          </label>
          <select
            id="contact-planInterest"
            name="planInterest"
            value={values.planInterest}
            onChange={set('planInterest')}
            className={cn(inputCls(false), 'appearance-none bg-[length:1rem] pr-10')}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%238A8D93' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M4 6l4 4 4-4'/%3E%3C/svg%3E\")",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
            }}
          >
            <option value="">Not sure yet</option>
            {mealPlans.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        <fieldset className="sm:col-span-2">
          <legend className="mb-1.5 block text-sm font-medium text-cloud">Preferred contact method</legend>
          <div className="flex flex-wrap gap-2">
            {['Email', 'Phone', 'Text'].map((method) => {
              const active = values.contactMethod === method;
              return (
                <label
                  key={method}
                  className={cn(
                    'cursor-pointer rounded-pill border px-4 py-2 text-sm font-medium transition-colors',
                    active ? 'border-green bg-green/15 text-green' : 'border-white/12 text-ash hover:text-white',
                  )}
                >
                  <input
                    type="radio"
                    name="contactMethod"
                    value={method}
                    checked={active}
                    onChange={set('contactMethod')}
                    className="sr-only"
                  />
                  {method}
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-cloud">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            value={values.message}
            onChange={set('message')}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'err-message' : undefined}
            className={cn(inputCls(Boolean(errors.message)), 'resize-y')}
            placeholder="Tell us about your goals, questions, or catering needs…"
          />
          <ErrorText id="err-message" msg={errors.message} />
        </div>
      </div>

      {errors.form && (
        <p role="alert" className="mt-4 text-sm text-red-400">
          {errors.form}
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'loading'}
          aria-busy={status === 'loading'}
          className="inline-flex items-center justify-center gap-2 rounded-pill bg-green px-7 py-3.5 font-display font-semibold text-ink-900 transition-all duration-200 ease-peak hover:brightness-[1.06] active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'loading' ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink-900/30 border-t-ink-900" />
              Sending…
            </>
          ) : (
            'Send message'
          )}
        </button>
        <p className="text-xs text-steel">Preview form — submissions are simulated, not stored.</p>
      </div>
    </form>
  );
}
