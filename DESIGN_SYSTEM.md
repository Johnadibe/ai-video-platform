# Design System Documentation

Complete design system and component library for the AI Video Platform.

## 🎨 Design Tokens

### Color Palette

#### Primary Colors (Sky Blue)
```css
primary-50:  #f0f9ff
primary-100: #e0f2fe
primary-200: #bae6fd
primary-300: #7dd3fc
primary-400: #38bdf8
primary-500: #0ea5e9  /* Main brand color */
primary-600: #0284c7
primary-700: #0369a1
primary-800: #075985
primary-900: #0c4a6e
primary-950: #082f49
```

#### Secondary Colors (Purple/Indigo)
```css
secondary-50:  #f5f3ff
secondary-100: #ede9fe
secondary-200: #ddd6fe
secondary-300: #c4b5fd
secondary-400: #a78bfa
secondary-500: #8b5cf6  /* Main secondary */
secondary-600: #7c3aed
secondary-700: #6d28d9
secondary-800: #5b21b6
secondary-900: #4c1d95
```

#### Accent Colors (Emerald Green)
```css
accent-50:  #ecfdf5
accent-100: #d1fae5
accent-200: #a7f3d0
accent-300: #6ee7b7
accent-400: #34d399
accent-500: #10b981  /* Main accent */
accent-600: #059669
accent-700: #047857
accent-800: #065f46
accent-900: #064e3b
```

#### Status Colors
- **Success**: `#10b981` (Emerald)
- **Error**: `#ef4444` (Red)
- **Warning**: `#f59e0b` (Amber)
- **Info**: `#3b82f6` (Blue)

#### Neutral Grays
```css
gray-50:  #f9fafb
gray-100: #f3f4f6
gray-200: #e5e7eb
gray-300: #d1d5db
gray-400: #9ca3af
gray-500: #6b7280
gray-600: #4b5563
gray-700: #374151
gray-800: #1f2937
gray-900: #111827
gray-950: #030712
```

### Typography

#### Font Families
- **Sans-serif (Body)**: Inter
- **Heading**: Plus Jakarta Sans

#### Font Sizes
```css
2xs: 0.625rem  (10px)
xs:  0.75rem   (12px)
sm:  0.875rem  (14px)
base: 1rem     (16px)
lg:  1.125rem  (18px)
xl:  1.25rem   (20px)
2xl: 1.5rem    (24px)
3xl: 1.875rem  (30px)
4xl: 2.25rem   (36px)
5xl: 3rem      (48px)
6xl: 3.75rem   (60px)
7xl: 4.5rem    (72px)
8xl: 6rem      (96px)
9xl: 8rem      (128px)
```

### Spacing Scale
```css
0:   0
1:   0.25rem  (4px)
2:   0.5rem   (8px)
3:   0.75rem  (12px)
4:   1rem     (16px)
5:   1.25rem  (20px)
6:   1.5rem   (24px)
8:   2rem     (32px)
10:  2.5rem   (40px)
12:  3rem     (48px)
16:  4rem     (64px)
20:  5rem     (80px)
24:  6rem     (96px)
```

### Border Radius
```css
none: 0
sm:   0.125rem  (2px)
md:   0.375rem  (6px)
lg:   0.5rem    (8px)
xl:   0.75rem   (12px)
2xl:  1rem      (16px)
3xl:  1.5rem    (24px)
full: 9999px
```

### Shadows
```css
sm:      Subtle shadow
default: Standard shadow
md:      Medium shadow
lg:      Large shadow
xl:      Extra large shadow
2xl:     Very large shadow
inner:   Inset shadow
glow:    Primary glow effect
glow-lg: Large primary glow
```

### Breakpoints
```css
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1400px
```

---

## 📦 UI Components

### Core Components

#### Button
**Location**: `src/components/ui/button.tsx`

Variants: `default`, `secondary`, `outline`, `ghost`, `link`, `destructive`
Sizes: `sm`, `default`, `lg`, `xl`, `icon`

```tsx
import { Button } from '@/components/ui/button';

<Button variant="default" size="lg">
  Click Me
</Button>
```

#### Input
**Location**: `src/components/ui/input.tsx`

Features: Label, error state, helper text, validation

```tsx
import { Input } from '@/components/ui/input';

<Input 
  label="Email"
  type="email"
  error="Invalid email"
  helperText="We'll never share your email"
  required
/>
```

#### Textarea
**Location**: `src/components/ui/textarea.tsx`

```tsx
import { Textarea } from '@/components/ui/textarea';

<Textarea 
  label="Description"
  placeholder="Tell us more..."
/>
```

#### Select
**Location**: `src/components/ui/select.tsx`

```tsx
import { Select } from '@/components/ui/select';

<Select 
  label="Country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' }
  ]}
/>
```

#### Checkbox
**Location**: `src/components/ui/checkbox.tsx`

```tsx
import { Checkbox } from '@/components/ui/checkbox';

<Checkbox label="I agree to terms" />
```

#### Radio Group
**Location**: `src/components/ui/radio.tsx`

```tsx
import { RadioGroup } from '@/components/ui/radio';

<RadioGroup 
  name="plan"
  options={[
    { value: 'free', label: 'Free', description: 'Perfect for trying' },
    { value: 'pro', label: 'Pro', description: 'Best for professionals' }
  ]}
/>
```

### Layout Components

#### Card
**Location**: `src/components/ui/card.tsx`

```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

#### Dialog/Modal
**Location**: `src/components/ui/dialog.tsx`

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Modal</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

#### Tabs
**Location**: `src/components/ui/tabs.tsx`

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

#### Accordion
**Location**: `src/components/ui/accordion.tsx`

```tsx
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from '@/components/ui/accordion';

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question?</AccordionTrigger>
    <AccordionContent>Answer</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Feedback Components

#### Badge
**Location**: `src/components/ui/badge.tsx`

Variants: `default`, `secondary`, `destructive`, `success`, `warning`, `error`, `info`, `outline`

```tsx
import { Badge } from '@/components/ui/badge';

<Badge variant="success">Success</Badge>
```

#### Loading Spinner
**Location**: `src/components/ui/loading.tsx`

```tsx
import { LoadingSpinner, LoadingDots, LoadingBar } from '@/components/ui/loading';

<LoadingSpinner size="lg" label="Loading..." />
<LoadingDots />
<LoadingBar progress={50} />
```

#### Skeleton
**Location**: `src/components/ui/skeleton.tsx`

```tsx
import { Skeleton, SkeletonCard, SkeletonText } from '@/components/ui/skeleton';

<Skeleton className="h-4 w-full" />
<SkeletonCard />
<SkeletonText lines={3} />
```

#### Progress
**Location**: `src/components/ui/progress.tsx`

```tsx
import { Progress } from '@/components/ui/progress';

<Progress value={65} showValue />
```

#### Toast
**Location**: `src/components/ui/toast.tsx`

Variants: `default`, `success`, `error`, `warning`, `info`

```tsx
import { 
  ToastProvider, 
  Toast, 
  ToastTitle, 
  ToastDescription 
} from '@/components/ui/toast';

// Use with toast hook (implementation needed)
```

### Navigation Components

#### Dropdown Menu
**Location**: `src/components/ui/dropdown-menu.tsx`

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

#### Tooltip
**Location**: `src/components/ui/tooltip.tsx`

```tsx
import { 
  Tooltip, 
  TooltipTrigger, 
  TooltipContent, 
  TooltipProvider 
} from '@/components/ui/tooltip';

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>Tooltip text</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### Display Components

#### Avatar
**Location**: `src/components/ui/avatar.tsx`

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

<Avatar>
  <AvatarImage src="/avatar.jpg" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

---

## 🎯 Marketing Components

### Hero Section
**Location**: `src/components/marketing/hero-section.tsx`

```tsx
import { 
  HeroSection, 
  HeroTitle, 
  HeroDescription, 
  HeroActions 
} from '@/components/marketing/hero-section';

<HeroSection variant="centered">
  <HeroTitle>Welcome to AI Video Platform</HeroTitle>
  <HeroDescription>Create stunning videos in minutes</HeroDescription>
  <HeroActions>
    <Button>Get Started</Button>
  </HeroActions>
</HeroSection>
```

### Feature Card
**Location**: `src/components/marketing/feature-card.tsx`

```tsx
import { FeatureCard, FeatureGrid } from '@/components/marketing/feature-card';
import { Video } from 'lucide-react';

<FeatureGrid columns={3}>
  <FeatureCard
    icon={Video}
    title="AI Avatars"
    description="Choose from 100+ realistic avatars"
    variant="bordered"
  />
</FeatureGrid>
```

### Testimonial Card
**Location**: `src/components/marketing/testimonial-card.tsx`

```tsx
import { 
  TestimonialCard, 
  TestimonialGrid 
} from '@/components/marketing/testimonial-card';

<TestimonialGrid>
  <TestimonialCard
    quote="Amazing platform!"
    author={{
      name: 'John Doe',
      title: 'CEO',
      company: 'TechCorp',
      avatar: '/avatar.jpg'
    }}
    rating={5}
  />
</TestimonialGrid>
```

### Pricing Card
**Location**: `src/components/marketing/pricing-card.tsx`

```tsx
import { PricingCard, PricingGrid } from '@/components/marketing/pricing-card';

<PricingGrid>
  <PricingCard
    name="Pro"
    description="For professionals"
    price={{ amount: 29, period: 'month' }}
    features={[
      { text: 'Unlimited videos', included: true },
      { text: 'Custom branding', included: false }
    ]}
    popular
  />
</PricingGrid>
```

### CTA Section
**Location**: `src/components/marketing/cta-section.tsx`

```tsx
import { 
  CTASection, 
  CTATitle, 
  CTADescription, 
  CTAActions 
} from '@/components/marketing/cta-section';

<CTASection variant="gradient">
  <CTATitle>Ready to Start?</CTATitle>
  <CTADescription>Join thousands of creators</CTADescription>
  <CTAActions>
    <Button>Get Started</Button>
  </CTAActions>
</CTASection>
```

### Stats Section
**Location**: `src/components/marketing/stats-section.tsx`

```tsx
import { StatItem, StatsGrid } from '@/components/marketing/stats-section';
import { Users } from 'lucide-react';

<StatsGrid columns={4}>
  <StatItem
    icon={Users}
    value="10K+"
    label="Active Users"
    trend="up"
    trendValue="+20% this month"
  />
</StatsGrid>
```

### Logo Cloud
**Location**: `src/components/marketing/logo-cloud.tsx`

```tsx
import { LogoCloud } from '@/components/marketing/logo-cloud';

<LogoCloud
  title="Trusted by leading companies"
  logos={[
    { name: 'Company 1', src: '/logos/company1.png' },
    { name: 'Company 2', src: '/logos/company2.png' }
  ]}
  variant="grayscale"
/>
```

### Video Player
**Location**: `src/components/marketing/video-player.tsx`

```tsx
import { VideoPlayer, EmbeddedVideo } from '@/components/marketing/video-player';

<VideoPlayer
  src="/video.mp4"
  poster="/poster.jpg"
  title="Demo Video"
  aspectRatio="16/9"
  controls
/>

<EmbeddedVideo src="https://youtube.com/embed/..." />
```

### Animated Background
**Location**: `src/components/marketing/animated-background.tsx`

Variants: `gradient`, `dots`, `grid`, `waves`

```tsx
import { AnimatedBackground, FloatingShapes } from '@/components/marketing/animated-background';

<AnimatedBackground variant="gradient">
  <YourContent />
</AnimatedBackground>

<FloatingShapes />
```

### Section Container
**Location**: `src/components/marketing/section-container.tsx`

```tsx
import { 
  SectionContainer, 
  SectionHeader 
} from '@/components/marketing/section-container';

<SectionContainer size="lg">
  <SectionHeader
    badge="Features"
    title="Amazing Features"
    description="Everything you need"
    align="center"
  />
  <YourContent />
</SectionContainer>
```

---

## 🎭 Design Principles

### 1. Mobile-First
- All components are designed mobile-first
- Responsive breakpoints ensure great UX on all devices
- Touch-friendly tap targets (minimum 44x44px)

### 2. Accessibility
- ARIA labels for screen readers
- Keyboard navigation support
- Focus indicators on interactive elements
- Semantic HTML structure
- Color contrast ratios meet WCAG 2.1 AA standards

### 3. Performance
- Optimized animations (60fps)
- Lazy loading where appropriate
- Minimal re-renders with React optimization
- Small bundle sizes

### 4. Consistency
- Consistent spacing using 4px/8px grid
- Unified color palette
- Standardized component APIs
- Predictable behavior patterns

### 5. Dark Mode Ready
- CSS variables for theme switching
- All components support dark mode
- Proper contrast in both themes

---

## 🚀 Usage

### Basic Import

```tsx
// UI Components
import { Button, Input, Card } from '@/components/ui';

// Marketing Components
import { HeroSection, FeatureCard } from '@/components/marketing';
```

### With Tailwind CSS

```tsx
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

<Button className={cn('custom-class', 'hover:scale-105')}>
  Custom Button
</Button>
```

---

## 📚 Resources

- **Component Showcase**: `/components` route
- **Tailwind Config**: `tailwind.config.ts`
- **Design Tokens**: `src/app/globals.css`
- **Utility Functions**: `src/lib/utils.ts`

---

## 🔄 Animation Library

All animations are GPU-accelerated and follow these principles:
- **Duration**: 150-300ms for UI interactions
- **Easing**: `ease-out` for entrances, `ease-in` for exits
- **Transforms**: Prefer transform over position changes
- **Opacity**: Smooth fade transitions

---

*Last Updated: October 2025*
*Version: 1.0.0*

