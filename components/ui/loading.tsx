import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const spinnerVariants = cva('animate-spin rounded-full border-2', {
  variants: {
    size: {
      sm: 'h-4 w-4 border-2',
      md: 'h-6 w-6 border-2',
      lg: 'h-8 w-8 border-3',
      xl: 'h-12 w-12 border-3',
    },
    variant: {
      default: 'border-primary border-t-transparent',
      secondary: 'border-secondary border-t-transparent',
      white: 'border-white border-t-transparent',
      muted: 'border-muted-foreground border-t-transparent',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
});

export interface LoadingSpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  label?: string;
}

const LoadingSpinner = React.forwardRef<HTMLDivElement, LoadingSpinnerProps>(
  ({ className, size, variant, label, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center justify-center', className)}
        role="status"
        aria-label={label || 'Loading'}
        {...props}
      >
        <div className={cn(spinnerVariants({ size, variant }))} />
        {label && <span className="ml-2 text-sm text-muted-foreground">{label}</span>}
        <span className="sr-only">{label || 'Loading...'}</span>
      </div>
    );
  }
);
LoadingSpinner.displayName = 'LoadingSpinner';

// Dots loading indicator
export interface LoadingDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

const LoadingDots = React.forwardRef<HTMLDivElement, LoadingDotsProps>(
  ({ className, size = 'md', ...props }, ref) => {
    const dotSize = {
      sm: 'h-1.5 w-1.5',
      md: 'h-2 w-2',
      lg: 'h-3 w-3',
    }[size];

    return (
      <div
        ref={ref}
        className={cn('flex items-center justify-center space-x-1', className)}
        role="status"
        aria-label="Loading"
        {...props}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn(
              'animate-pulse rounded-full bg-primary',
              dotSize
            )}
            style={{
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
);
LoadingDots.displayName = 'LoadingDots';

// Progress bar loading
export interface LoadingBarProps extends React.HTMLAttributes<HTMLDivElement> {
  progress?: number;
}

const LoadingBar = React.forwardRef<HTMLDivElement, LoadingBarProps>(
  ({ className, progress, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('h-1 w-full overflow-hidden rounded-full bg-secondary', className)}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        {...props}
      >
        <div
          className={cn(
            'h-full bg-primary transition-all duration-300',
            progress === undefined && 'animate-shimmer'
          )}
          style={{
            width: progress !== undefined ? `${progress}%` : '100%',
            backgroundImage:
              progress === undefined
                ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)'
                : undefined,
            backgroundSize: '200% 100%',
          }}
        />
      </div>
    );
  }
);
LoadingBar.displayName = 'LoadingBar';

export { LoadingSpinner, LoadingDots, LoadingBar, spinnerVariants };

