import type { IconKey } from '../../types';

interface IconProps {
  name: IconKey;
  className?: string;
  strokeWidth?: number;
}

/** Inner path geometry for each icon (24×24, stroke = currentColor). */
const paths: Record<IconKey, JSX.Element> = {
  chef: (
    <>
      <path d="M7 15v4.5h10V15" />
      <path d="M17 15a3.4 3.4 0 0 0 .4-6.8A4 4 0 0 0 10 6.4 3.4 3.4 0 0 0 7 15Z" />
      <path d="M9.5 19.5h5" />
    </>
  ),
  leaf: (
    <>
      <path d="M4.5 20C4.5 12 10 5 20 4.2c1 9.8-4 15.8-12 15.8a5.6 5.6 0 0 1-3.5-1Z" />
      <path d="M4.5 20c4-4.2 8-7.4 12-9.2" />
    </>
  ),
  macro: (
    <>
      <path d="M4 20h16" />
      <path d="M7 20v-9" />
      <path d="M12 20V5" />
      <path d="M17 20v-6" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2.5" />
      <path d="M4 9.5h16" />
      <path d="M8.5 3v4M15.5 3v4" />
      <circle cx="12" cy="14.5" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  microwave: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <rect x="6" y="8" width="8.5" height="8" rx="1.5" />
      <path d="M17.5 9v2M17.5 14v2" />
    </>
  ),
  mountain: (
    <>
      <path d="M3 19.5h18" />
      <path d="M4 19.5 10 8l3 5 3.2-6 4.8 12.5" />
    </>
  ),
  choose: (
    <>
      <rect x="4" y="4" width="6.8" height="6.8" rx="1.6" />
      <rect x="4" y="13.2" width="6.8" height="6.8" rx="1.6" />
      <rect x="13.2" y="13.2" width="6.8" height="6.8" rx="1.6" />
      <path d="M13.4 6.6l2 2 4-4" />
    </>
  ),
  plan: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2.5" />
      <path d="M4 9.5h16" />
      <path d="M8.5 3v4M15.5 3v4" />
      <path d="M9 14.6l2 2 4-4" />
    </>
  ),
  prep: (
    <>
      <path d="M4 11.5h16a8 8 0 0 1-16 0Z" />
      <path d="M3 21h18" />
      <path d="M9 3.4c-.8 1 .8 2 0 3.1M13 3.4c-.8 1 .8 2 0 3.1" />
    </>
  ),
  eat: (
    <>
      <path d="M7 3v8" />
      <path d="M5 3v4a2 2 0 0 0 4 0V3" />
      <path d="M7 11v10" />
      <path d="M16.5 3c-2 0-3 3-3 6.2s3 2.3 3 2.3V21" />
    </>
  ),
  protein: (
    <>
      <path d="M13.8 4.2a4 4 0 0 1 4 6.1c-1.4 1.5-3.9 1-5.4 2.5s-1 4-2.5 5.5a3 3 0 1 1-3-3c1.5-1.5 1-4 2.5-5.5s4-1.1 5.4-2.6Z" />
      <path d="M6.6 17.4 3.8 20.2" />
    </>
  ),
  balance: (
    <>
      <path d="M12 4v16" />
      <path d="M6 20.5h12" />
      <path d="M5 8h14" />
      <path d="M5 8 2.8 12.4a3 3 0 0 0 4.4 0Z" />
      <path d="M19 8l-2.2 4.4a3 3 0 0 0 4.4 0Z" />
      <circle cx="12" cy="5" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.5V12l3 1.8" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 21v-7" />
      <path d="M12 14c0-3.2-2.2-5.2-5.4-5.2C6.6 12 8.8 14 12 14Z" />
      <path d="M12 12.4c0-3.2 2.2-5.2 5.4-5.2C17.4 10.4 15.2 12.4 12 12.4Z" />
    </>
  ),
};

/** Consistent line-icon set, tinted via currentColor. */
export function Icon({ name, className, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
