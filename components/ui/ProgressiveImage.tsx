import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  fill?: boolean;
}

export function ProgressiveImage({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  quality = 75,
  sizes,
  fill = false,
}: ProgressiveImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    // Reset estado cuando cambia la fuente
    setIsLoading(true);
    setCurrentSrc(src);
  }, [src]);

  return (
    <div className={cn(
      'relative overflow-hidden',
      isLoading && 'animate-pulse bg-gray-200',
      className
    )}>
      <Image
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        sizes={sizes}
        fill={fill}
        priority={priority}
        className={cn(
          'duration-700 ease-in-out',
          isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0',
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
}
