import * as React from 'react';
import { cn } from '@/lib/utils';

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  label?: string;
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  required?: boolean;
  className?: string;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    { label, name, options, value, onChange, error, required, className },
    ref
  ) => {
    const groupId = React.useId();
    const errorId = `${groupId}-error`;

    return (
      <div ref={ref} className={cn('w-full', className)}>
        {label && (
          <div className="mb-3">
            <label className="text-sm font-medium text-foreground">
              {label}
              {required && <span className="ml-1 text-error">*</span>}
            </label>
          </div>
        )}
        <div className="space-y-2">
          {options.map((option) => {
            const radioId = `${groupId}-${option.value}`;
            const isChecked = value === option.value;

            return (
              <div
                key={option.value}
                className={cn(
                  'flex items-start',
                  option.disabled && 'opacity-50'
                )}
              >
                <div className="relative flex items-center">
                  <input
                    id={radioId}
                    type="radio"
                    name={name}
                    value={option.value}
                    checked={isChecked}
                    onChange={(e) => onChange?.(e.target.value)}
                    disabled={option.disabled}
                    className={cn(
                      'peer h-4 w-4 shrink-0 cursor-pointer appearance-none rounded-full border border-input bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed',
                      'checked:border-primary checked:border-[5px]',
                      error && 'border-error'
                    )}
                    aria-invalid={error ? 'true' : 'false'}
                    aria-describedby={error ? errorId : undefined}
                  />
                </div>
                <label
                  htmlFor={radioId}
                  className="ml-2 cursor-pointer"
                >
                  <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {option.label}
                  </div>
                  {option.description && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  )}
                </label>
              </div>
            );
          })}
        </div>
        {error && (
          <p id={errorId} className="mt-2 text-sm text-error" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);
RadioGroup.displayName = 'RadioGroup';

export { RadioGroup };

