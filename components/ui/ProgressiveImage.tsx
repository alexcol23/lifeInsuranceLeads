'use client';

import Image, { ImageProps } from 'next/image';
import { memo } from 'react';

export interface ProgressiveImageProps extends ImageProps {
  placeholder?: 'blur' | 'empty';
}

export const ProgressiveImage = memo(function ProgressiveImage({
  src,
  alt,
  className = '',
  placeholder = 'empty',
  ...props
}: ProgressiveImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={`transition-[filter] duration-300 ${className}`}
      placeholder={placeholder}
      loading={props.priority ? 'eager' : 'lazy'}
      {...props}
    />
  );
});
