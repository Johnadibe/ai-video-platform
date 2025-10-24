import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CTASectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'bordered';
}

export function CTASection({
  children,
  variant = 'default',
  className,
  ...props
}: CTASectionProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden py-16 md:py-24',
        className
      )}
      {...props}
    >
      <div className="container">
        <div
          className={cn(
            'relative flex flex-col items-center gap-6 rounded-2xl p-8 text-center md:p-12',
            variant === 'default' && 'bg-muted',
            variant === 'gradient' &&
              'bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20',
            variant === 'bordered' && 'border-2 border-border'
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

export function CTATitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        'text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function CTADescription({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        'max-w-[600px] text-lg text-muted-foreground',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function CTAActions({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 sm:flex-row',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

