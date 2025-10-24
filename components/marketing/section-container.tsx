import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SectionContainerProps
  extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  contained?: boolean;
}

export function SectionContainer({
  children,
  size = 'md',
  contained = true,
  className,
  ...props
}: SectionContainerProps) {
  const paddingClass = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16 lg:py-20',
    lg: 'py-16 md:py-24 lg:py-32',
    xl: 'py-20 md:py-32 lg:py-40',
  }[size];

  return (
    <section className={cn(paddingClass, className)} {...props}>
      {contained ? <div className="container">{children}</div> : children}
    </section>
  );
}

export interface SectionHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  badge?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  title,
  description,
  badge,
  align = 'center',
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' && 'mx-auto text-center',
        align === 'left' && 'text-left',
        className
      )}
      {...props}
    >
      {badge && (
        <div
          className={cn(
            'mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary',
            align === 'center' && 'mx-auto'
          )}
        >
          {badge}
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg text-muted-foreground',
            align === 'center' && 'mx-auto max-w-[750px]'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

