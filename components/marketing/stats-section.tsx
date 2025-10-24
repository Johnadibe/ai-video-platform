import * as React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface StatItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | number;
  label: string;
  description?: string;
  icon?: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

export function StatItem({
  value,
  label,
  description,
  icon: Icon,
  trend,
  trendValue,
  className,
  ...props
}: StatItemProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-2 text-center',
        className
      )}
      {...props}
    >
      {Icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <div className="text-4xl font-bold tracking-tight md:text-5xl">
        {value}
      </div>
      <div className="text-lg font-medium text-muted-foreground">{label}</div>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {trendValue && trend && (
        <div
          className={cn(
            'text-sm font-medium',
            trend === 'up' && 'text-success',
            trend === 'down' && 'text-error',
            trend === 'neutral' && 'text-muted-foreground'
          )}
        >
          {trend === 'up' && '↑ '}
          {trend === 'down' && '↓ '}
          {trendValue}
        </div>
      )}
    </div>
  );
}

export interface StatsGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'bordered' | 'cards';
}

export function StatsGrid({
  children,
  columns = 4,
  variant = 'default',
  className,
  ...props
}: StatsGridProps) {
  return (
    <div
      className={cn(
        'grid gap-8',
        columns === 2 && 'grid-cols-1 md:grid-cols-2',
        columns === 3 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        columns === 4 && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
        variant === 'bordered' && 'divide-x divide-border',
        variant === 'cards' && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
        className
      )}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (variant === 'cards') {
          return (
            <div className="rounded-lg border border-border bg-card p-6">
              {child}
            </div>
          );
        }
        return child;
      })}
    </div>
  );
}

