import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface Logo {
  name: string;
  src: string;
  href?: string;
}

export interface LogoCloudProps extends React.HTMLAttributes<HTMLDivElement> {
  logos: Logo[];
  title?: string;
  variant?: 'default' | 'grayscale' | 'minimal';
  animated?: boolean;
}

export function LogoCloud({
  logos,
  title,
  variant = 'default',
  animated = false,
  className,
  ...props
}: LogoCloudProps) {
  return (
    <div className={cn('py-12', className)} {...props}>
      {title && (
        <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
          {title}
        </p>
      )}
      <div
        className={cn(
          'relative overflow-hidden',
          animated && 'animate-scroll'
        )}
      >
        <div
          className={cn(
            'flex flex-wrap items-center justify-center gap-8 md:gap-12',
            animated && 'animate-marquee'
          )}
        >
          {logos.map((logo, index) => {
            const LogoWrapper = logo.href ? 'a' : 'div';
            const wrapperProps = logo.href
              ? {
                  href: logo.href,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                }
              : {};

            return (
              <LogoWrapper
                key={index}
                className={cn(
                  'relative flex h-12 w-32 items-center justify-center transition-all',
                  variant === 'grayscale' &&
                    'grayscale hover:grayscale-0 opacity-60 hover:opacity-100',
                  variant === 'minimal' && 'opacity-50 hover:opacity-100',
                  logo.href && 'cursor-pointer'
                )}
                {...wrapperProps}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </LogoWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Infinite scrolling logo variant
export function LogoScroll({
  logos,
  title,
  className,
}: Omit<LogoCloudProps, 'animated' | 'variant'>) {
  return (
    <div className={cn('py-12', className)}>
      {title && (
        <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
          {title}
        </p>
      )}
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee space-x-12">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="relative flex h-12 w-32 shrink-0 items-center justify-center grayscale opacity-60 transition-all hover:grayscale-0 hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

