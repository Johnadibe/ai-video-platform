import * as React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon;
  iconClassName?: string;
  title: string;
  description: string;
  variant?: 'default' | 'bordered' | 'elevated';
}

export function FeatureCard({
  icon: Icon,
  iconClassName,
  title,
  description,
  variant = 'default',
  className,
  ...props
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        'group relative flex flex-col gap-4 rounded-lg p-6 transition-all',
        variant === 'bordered' &&
          'border border-border bg-card hover:border-primary/50',
        variant === 'elevated' &&
          'bg-card shadow-md hover:shadow-lg',
        variant === 'default' && 'hover:bg-accent/50',
        className
      )}
      {...props}
    >
      {Icon && (
        <div
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground',
            iconClassName
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
      )}
      <div>
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export interface FeatureGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
}

export function FeatureGrid({
  children,
  columns = 3,
  className,
  ...props
}: FeatureGridProps) {
  return (
    <div
      className={cn(
        'grid gap-6',
        columns === 2 && 'md:grid-cols-2',
        columns === 3 && 'md:grid-cols-2 lg:grid-cols-3',
        columns === 4 && 'md:grid-cols-2 lg:grid-cols-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

