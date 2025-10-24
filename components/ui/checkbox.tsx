import * as React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, ...props }, ref) => {
    const checkboxId = React.useId();
    const errorId = `${checkboxId}-error`;

    return (
      <div className="w-full">
        <div className="flex items-start">
          <div className="relative flex items-center">
            <input
              id={checkboxId}
              type="checkbox"
              className={cn(
                'peer h-4 w-4 shrink-0 cursor-pointer appearance-none rounded border border-input bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                'checked:border-primary checked:bg-primary',
                error && 'border-error',
                className
              )}
              ref={ref}
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? errorId : undefined}
              {...props}
            />
            <Check className="pointer-events-none absolute left-0 h-4 w-4 text-primary-foreground opacity-0 transition-opacity peer-checked:opacity-100" />
          </div>
          {label && (
            <label
              htmlFor={checkboxId}
              className="ml-2 cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
            </label>
          )}
        </div>
        {error && (
          <p id={errorId} className="mt-1 text-sm text-error" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Checkbox.displayName = 'Checkbox';

export { Checkbox };

