import { useId } from 'react';
import type { FoodTone } from '../../types';
import { hashString } from '../../lib/utils';

/**
 * Branded, self-contained placeholder for meal/editorial imagery. Renders an
 * abstract "top-down plate" swatch graded by food tone — intentional and
 * on-brand rather than a broken image — while real photography is pending.
 *
 * This exists because the build environment's network policy blocked stock
 * photo CDNs. Set an ImageAsset `src` to replace it with a real photo anywhere.
 */

interface ToneStyle {
  from: string;
  to: string;
  plate: string;
  blobs: [string, string, string];
}

const tones: Record<FoodTone, ToneStyle> = {
  chicken: { from: '#211a0b', to: '#4b3c18', plate: '#5c4a20', blobs: ['#c9a24b', '#e6c06a', '#6f7d3a'] },
  beef: { from: '#1f0f0f', to: '#4a2320', plate: '#5a2d28', blobs: ['#a5442f', '#c1663f', '#6f7d3a'] },
  salmon: { from: '#231313', to: '#5a2f2a', plate: '#6b3a33', blobs: ['#d9765b', '#e79a7f', '#88a05a'] },
  turkey: { from: '#1e1608', to: '#4a3517', plate: '#5b431e', blobs: ['#b07a3c', '#d19a55', '#7a8a41'] },
  pasta: { from: '#211b0a', to: '#4d3f18', plate: '#60501f', blobs: ['#d8b45a', '#e7cf86', '#b5462f'] },
  veg: { from: '#0f1a0f', to: '#22401f', plate: '#2c4d28', blobs: ['#5f9e46', '#8bc35f', '#d0a94a'] },
  breakfast: { from: '#231a08', to: '#574019', plate: '#6b5322', blobs: ['#e8b84e', '#f0d072', '#c76b45'] },
  grain: { from: '#1a160d', to: '#433720', plate: '#544426', blobs: ['#b79a5e', '#d8c084', '#7f8a45'] },
  signature: { from: '#111a0a', to: '#26401a', plate: '#2f4d20', blobs: ['#a3e635', '#7fae2e', '#d8c084'] },
};

interface FoodPlaceholderProps {
  tone: FoodTone;
  /** Seed (e.g. meal id) so each tile's composition varies. */
  seed?: string;
  className?: string;
}

export function FoodPlaceholder({ tone, seed = tone, className }: FoodPlaceholderProps) {
  const uid = useId().replace(/:/g, '');
  const t = tones[tone];
  const h = hashString(seed);

  // Seeded jitter so plates don't look identical.
  const cx = 200 + ((h % 40) - 20);
  const cy = 150 + (((h >> 3) % 30) - 15);
  const rot = (h >> 5) % 360;
  const b1 = { x: cx - 34 + ((h >> 2) % 12), y: cy - 20 + ((h >> 4) % 12) };
  const b2 = { x: cx + 30 - ((h >> 6) % 12), y: cy - 6 + ((h >> 5) % 14) };
  const b3 = { x: cx - 6 + ((h >> 7) % 14), y: cy + 30 - ((h >> 3) % 12) };

  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`bg-${uid}`} cx="62%" cy="34%" r="90%">
          <stop offset="0%" stopColor={t.to} />
          <stop offset="100%" stopColor={t.from} />
        </radialGradient>
        <linearGradient id={`sheen-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.10" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <clipPath id={`plate-${uid}`}>
          <circle cx={cx} cy={cy} r="88" />
        </clipPath>
      </defs>

      {/* base */}
      <rect width="400" height="300" fill={`url(#bg-${uid})`} />

      {/* faint mountain contour lines (topographic brand motif) */}
      <g stroke="#ffffff" strokeOpacity="0.05" fill="none" strokeWidth="1.5">
        <path d="M-20 250 L120 120 L190 175 L260 95 L430 250" />
        <path d="M-20 285 L120 155 L190 210 L260 130 L430 285" />
      </g>

      {/* plate */}
      <circle cx={cx} cy={cy} r="92" fill="#000000" opacity="0.18" />
      <circle cx={cx} cy={cy} r="88" fill={t.plate} opacity="0.55" />
      <circle cx={cx} cy={cy} r="88" fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="2" />
      <circle cx={cx} cy={cy} r="70" fill="none" stroke="#000000" strokeOpacity="0.14" strokeWidth="10" />

      {/* food blobs, clipped to the plate */}
      <g clipPath={`url(#plate-${uid})`} transform={`rotate(${rot} ${cx} ${cy})`}>
        <ellipse cx={b1.x} cy={b1.y} rx="34" ry="26" fill={t.blobs[0]} opacity="0.9" />
        <ellipse cx={b2.x} cy={b2.y} rx="28" ry="24" fill={t.blobs[1]} opacity="0.82" />
        <ellipse cx={b3.x} cy={b3.y} rx="30" ry="22" fill={t.blobs[2]} opacity="0.85" />
        <ellipse cx={b1.x + 8} cy={b1.y - 6} rx="10" ry="8" fill="#ffffff" opacity="0.12" />
      </g>

      {/* green accent arc + sheen */}
      <path
        d={`M ${cx - 96} ${cy + 96} A 136 136 0 0 1 ${cx + 96} ${cy - 96}`}
        fill="none"
        stroke="rgb(163 230 53)"
        strokeOpacity="0.5"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect width="400" height="300" fill={`url(#sheen-${uid})`} />
    </svg>
  );
}
