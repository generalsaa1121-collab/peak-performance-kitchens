/**
 * ============================================================================
 * FORM SUBMISSION — integration point.
 * ============================================================================
 * These are FRONT-END MOCKS: they simulate a network round-trip and resolve
 * successfully. No data leaves the browser and there is no backend.
 *
 * To make the forms real, replace the bodies below with a POST to your provider
 * (Formspree, HubSpot, Mailchimp, Supabase, a custom API, …). For example:
 *
 *   const res = await fetch('https://formspree.io/f/XXXXXXogin', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
 *     body: JSON.stringify(payload),
 *   });
 *   if (!res.ok) throw new Error('Submission failed');
 */

export interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  planInterest: string;
  contactMethod: string;
  message: string;
}

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/** MOCK: simulate submitting the contact/lead form. */
export async function submitLead(_payload: LeadPayload): Promise<void> {
  await wait(1100);
  // Replace with a real request — throw on failure to trigger the error state.
}

/** MOCK: simulate subscribing an email to launch/menu updates. */
export async function submitNewsletter(_email: string): Promise<void> {
  await wait(900);
  // Replace with a real request — throw on failure to trigger the error state.
}

/** Simple, permissive email check for inline validation. */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}
