import * as React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export interface TestimonialCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  quote: string;
  author: {
    name: string;
    title?: string;
    company?: string;
    avatar?: string;
  };
  rating?: number;
  variant?: 'default' | 'bordered' | 'minimal';
}

export function TestimonialCard({
  quote,
  author,
  rating,
  variant = 'default',
  className,
  ...props
}: TestimonialCardProps) {
  const initials = author.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div
      className={cn(
        'flex flex-col gap-4 rounded-lg p-6',
        variant === 'default' && 'bg-card',
        variant === 'bordered' && 'border border-border bg-card',
        variant === 'minimal' && '',
        className
      )}
      {...props}
    >
      {variant !== 'minimal' && (
        <Quote className="h-8 w-8 text-primary opacity-50" />
      )}

      {rating && (
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={cn(
                'h-5 w-5',
                i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
              )}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          ))}
        </div>
      )}

      <blockquote className="text-lg leading-relaxed">{quote}</blockquote>

      <div className="mt-auto flex items-center gap-3">
        <Avatar>
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold">{author.name}</div>
          {(author.title || author.company) && (
            <div className="text-sm text-muted-foreground">
              {author.title}
              {author.title && author.company && ' at '}
              {author.company}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export interface TestimonialGridProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  columns?: 2 | 3;
}

export function TestimonialGrid({
  children,
  columns = 3,
  className,
  ...props
}: TestimonialGridProps) {
  return (
    <div
      className={cn(
        'grid gap-6',
        columns === 2 && 'md:grid-cols-2',
        columns === 3 && 'md:grid-cols-2 lg:grid-cols-3',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

