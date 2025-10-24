import * as React from 'react';
import { cn } from '@/lib/utils';

interface HeroSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'default' | 'centered' | 'split';
}

export function HeroSection({
  children,
  variant = 'centered',
  className,
  ...props
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden py-16 md:py-24 lg:py-32',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'container',
          variant === 'centered' && 'mx-auto text-center',
          variant === 'split' && 'grid gap-8 lg:grid-cols-2 lg:gap-12'
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function HeroTitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        'text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl xl:text-7xl',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function HeroDescription({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        'mx-auto max-w-[750px] text-lg text-muted-foreground md:text-xl',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function HeroActions({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 sm:flex-row sm:justify-center',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

