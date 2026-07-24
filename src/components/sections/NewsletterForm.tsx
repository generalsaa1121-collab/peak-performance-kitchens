import { useState, type FormEvent } from 'react';
import { newsletter } from '../../data/siteContent';
import { submitNewsletter, isValidEmail } from '../../lib/forms';
import { Icon } from '../ui/Icon';
import { cn } from '../../lib/utils';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      setStatus('error');
      document.getElementById('newsletter-email')?.focus();
      return;
    }
    setError('');
    setStatus('loading');
    try {
      await submitNewsletter(email);
      setStatus('success');
      setEmail('');
    } catch {
      setError('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="rounded-card border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green/12 text-green ring-1 ring-inset ring-green/25">
          <Icon name="calendar" className="h-5 w-5" />
        </span>
        <h3 className="font-display text-lg font-bold text-white">{newsletter.heading}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ash">{newsletter.subhead}</p>

      {status === 'success' ? (
        <p role="status" className="mt-5 flex items-center gap-2 rounded-xl border border-green/30 bg-green/[0.06] px-4 py-3 text-sm text-green">
          <Icon name="choose" className="h-4 w-4" strokeWidth={2.4} />
          You’re on the list — watch your inbox. (Preview only.)
        </p>
      ) : (
        <form onSubmit={onSubmit} noValidate className="mt-5">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? 'newsletter-error' : undefined}
              placeholder="you@example.com"
              className={cn(
                'w-full flex-1 rounded-xl border bg-ink-900/60 px-4 py-3 text-sm text-white placeholder:text-steel transition-colors focus:outline-none focus:ring-2 focus:ring-green/50',
                error ? 'border-red-400/70' : 'border-white/12 focus:border-green',
              )}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              aria-busy={status === 'loading'}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-green px-6 py-3 font-display font-semibold text-ink-900 transition-all duration-200 ease-peak hover:brightness-[1.06] active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'loading' ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink-900/30 border-t-ink-900" />
                  Joining…
                </>
              ) : (
                newsletter.cta
              )}
            </button>
          </div>
          {error && (
            <p id="newsletter-error" role="alert" className="mt-2 text-xs text-red-400">
              {error}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
