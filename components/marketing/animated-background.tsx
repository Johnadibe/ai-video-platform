import * as React from 'react';
import { cn } from '@/lib/utils';

export interface AnimatedBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'gradient' | 'dots' | 'grid' | 'waves';
}

export function AnimatedBackground({
  variant = 'gradient',
  className,
  children,
  ...props
}: AnimatedBackgroundProps) {
  return (
    <div className={cn('relative overflow-hidden', className)} {...props}>
      {variant === 'gradient' && <GradientBackground />}
      {variant === 'dots' && <DotsBackground />}
      {variant === 'grid' && <GridBackground />}
      {variant === 'waves' && <WavesBackground />}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function GradientBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-50 animate-gradient bg-[size:400%_400%]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
    </div>
  );
}

function DotsBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
}

function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  );
}

function WavesBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute bottom-0 left-0 w-full text-primary/10"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
}

// Floating shapes background
export function FloatingShapes({ className }: { className?: string }) {
  return (
    <div className={cn('absolute inset-0 -z-10 overflow-hidden', className)}>
      <div className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div className="absolute right-[15%] top-[40%] h-80 w-80 rounded-full bg-secondary/10 blur-3xl animate-pulse animation-delay-2000" />
      <div className="absolute bottom-[20%] left-[20%] h-72 w-72 rounded-full bg-accent/10 blur-3xl animate-pulse animation-delay-4000" />
    </div>
  );
}

