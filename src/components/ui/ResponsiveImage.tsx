import { useState } from 'react';
import type { ImageAsset } from '../../types';
import { FoodPlaceholder } from './FoodPlaceholder';
import { cn } from '../../lib/utils';

interface ResponsiveImageProps {
  image: ImageAsset;
  /** Container classes — set a fixed aspect ratio here to avoid layout shift. */
  className?: string;
  /** Extra classes applied to the image / placeholder layer. */
  imgClassName?: string;
  /** Seed for placeholder variation (defaults to alt text). */
  seed?: string;
  /** Eager-load above-the-fold imagery; others lazy-load by default. */
  priority?: boolean;
  /** Purely decorative (background) usage — hidden from assistive tech. */
  decorative?: boolean;
}

/**
 * Renders real photography over an on-brand placeholder tile. The tile shows
 * while the photo loads (graceful on slow connections) and remains if the photo
 * fails — so there are never broken images or empty boxes. The photo fades in
 * on load. Fixed-ratio container prevents cumulative layout shift.
 */
export function ResponsiveImage({
  image,
  className,
  imgClassName,
  seed,
  priority = false,
  decorative = false,
}: ResponsiveImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const showPhoto = Boolean(image.src) && !failed;

  return (
    <div
      className={cn('relative overflow-hidden bg-charcoal', className)}
      {...(decorative ? { 'aria-hidden': true } : {})}
      {...(!showPhoto && !decorative ? { role: 'img', 'aria-label': image.alt } : {})}
    >
      {/* Base layer: branded placeholder tile (always present as a graceful base). */}
      <FoodPlaceholder
        tone={image.tone}
        seed={seed ?? image.alt}
        className={cn('absolute inset-0 h-full w-full', imgClassName)}
      />

      {/* Real photo fades in over the tile once it has loaded. */}
      {showPhoto && (
        <img
          src={image.src as string}
          alt={decorative ? '' : image.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-peak',
            loaded ? 'opacity-100' : 'opacity-0',
            imgClassName,
          )}
          draggable={false}
        />
      )}
    </div>
  );
}
