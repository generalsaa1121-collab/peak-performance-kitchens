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
 * Renders real photography when `image.src` is set, otherwise a branded
 * placeholder tile. The fixed-ratio container prevents cumulative layout shift,
 * and a failed photo load gracefully falls back to the placeholder.
 */
export function ResponsiveImage({
  image,
  className,
  imgClassName,
  seed,
  priority = false,
  decorative = false,
}: ResponsiveImageProps) {
  const [failed, setFailed] = useState(false);
  const showPhoto = Boolean(image.src) && !failed;

  return (
    <div
      className={cn('relative overflow-hidden bg-charcoal', className)}
      {...(showPhoto || decorative ? {} : { role: 'img', 'aria-label': image.alt })}
      {...(decorative ? { 'aria-hidden': true } : {})}
    >
      {showPhoto ? (
        <img
          src={image.src as string}
          alt={decorative ? '' : image.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          onError={() => setFailed(true)}
          className={cn('absolute inset-0 h-full w-full object-cover', imgClassName)}
          draggable={false}
        />
      ) : (
        <FoodPlaceholder
          tone={image.tone}
          seed={seed ?? image.alt}
          className={cn('absolute inset-0 h-full w-full', imgClassName)}
        />
      )}
    </div>
  );
}
