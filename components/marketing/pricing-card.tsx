import * as React from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export interface PricingFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

export interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  description: string;
  price: {
    amount: number | string;
    currency?: string;
    period?: string;
  };
  features: PricingFeature[];
  buttonText?: string;
  buttonVariant?: 'default' | 'outline' | 'secondary';
  onButtonClick?: () => void;
  popular?: boolean;
  variant?: 'default' | 'highlighted';
}

export function PricingCard({
  name,
  description,
  price,
  features,
  buttonText = 'Get Started',
  buttonVariant = 'default',
  onButtonClick,
  popular,
  variant = 'default',
  className,
  ...props
}: PricingCardProps) {
  const isHighlighted = variant === 'highlighted' || popular;

  return (
    <div
      className={cn(
        'relative flex flex-col rounded-lg border p-8',
        isHighlighted
          ? 'border-primary bg-primary/5 shadow-lg'
          : 'border-border bg-card',
        className
      )}
      {...props}
    >
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
          Most Popular
        </Badge>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-sm font-medium text-muted-foreground">
            {price.currency || '$'}
          </span>
          <span className="ml-1 text-5xl font-bold tracking-tight">
            {price.amount}
          </span>
          {price.period && (
            <span className="ml-2 text-sm text-muted-foreground">
              /{price.period}
            </span>
          )}
        </div>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature, index) => (
          <li
            key={index}
            className={cn(
              'flex items-start gap-3',
              !feature.included && 'text-muted-foreground'
            )}
          >
            {feature.included ? (
              <Check className="h-5 w-5 shrink-0 text-primary" />
            ) : (
              <X className="h-5 w-5 shrink-0 text-muted-foreground/50" />
            )}
            <span
              className={cn(
                'text-sm',
                feature.highlight && 'font-semibold'
              )}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <Button
        variant={isHighlighted ? 'default' : buttonVariant}
        onClick={onButtonClick}
        className="w-full"
      >
        {buttonText}
      </Button>
    </div>
  );
}

export interface PricingGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
}

export function PricingGrid({
  children,
  columns = 3,
  className,
  ...props
}: PricingGridProps) {
  return (
    <div
      className={cn(
        'grid gap-8',
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

