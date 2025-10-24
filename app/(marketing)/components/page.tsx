import { Metadata } from 'next';
import {
  Video,
  Users,
  Zap,
  Star,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Textarea } from '../../../components/ui/textarea';
import { Select } from '../../../components/ui/select';
import { Checkbox } from '../../../components/ui/checkbox';
import { RadioGroup } from '../../../components/ui/radio';
import { Badge } from '../../../components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../../components/ui/card';
import { LoadingSpinner, LoadingDots, LoadingBar } from '../../../components/ui/loading';
import { Skeleton, SkeletonCard, SkeletonText } from '../../../components/ui/skeleton';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../../components/ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../../components/ui/accordion';
import { Progress } from '../../../components/ui/progress';
import { Avatar, AvatarImage, AvatarFallback } from '../../../components/ui/avatar';
import { FeatureCard, FeatureGrid } from '../../../components/marketing/feature-card';
import { TestimonialCard, TestimonialGrid } from '../../../components/marketing/testimonial-card';
import { PricingCard, PricingGrid } from '../../../components/marketing/pricing-card';
import { CTASection, CTATitle, CTADescription, CTAActions } from '../../../components/marketing/cta-section';
import { StatItem, StatsGrid } from '../../../components/marketing/stats-section';
import { SectionContainer, SectionHeader } from '../../../components/marketing/section-container';
import { AnimatedBackground } from '../../../components/marketing/animated-background';

export const metadata: Metadata = {
  title: 'Component Showcase',
  description: 'Browse all available UI components and design patterns',
};

export default function ComponentsPage() {
  return (
    <>
      {/* Hero Section */}
      <AnimatedBackground variant="gradient" className="relative">
        <SectionContainer size="lg">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Component <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Showcase</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Explore our comprehensive component library with modern design patterns and reusable UI elements.
            </p>
          </div>
        </SectionContainer>
      </AnimatedBackground>

      {/* Buttons */}
      <SectionContainer>
        <SectionHeader
          title="Buttons"
          description="Various button styles and sizes for different use cases"
        />
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Button Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Button Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Form Elements */}
      <SectionContainer className="bg-muted/30">
        <SectionHeader
          title="Form Elements"
          description="Input fields, selects, checkboxes, and radio buttons"
        />
        <div className="mx-auto max-w-2xl space-y-6">
          <Input
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            helperText="We'll never share your email"
          />
          
          <Input
            label="Username"
            type="text"
            placeholder="johndoe"
            error="Username is already taken"
            required
          />
          
          <Textarea
            label="Description"
            placeholder="Tell us about yourself..."
            helperText="Maximum 500 characters"
          />
          
          <Select
            label="Country"
            options={[
              { value: '', label: 'Select a country' },
              { value: 'us', label: 'United States' },
              { value: 'uk', label: 'United Kingdom' },
              { value: 'ca', label: 'Canada' },
            ]}
          />
          
          <Checkbox label="I agree to the terms and conditions" />
          
          <RadioGroup
            label="Subscription Plan"
            name="plan"
            options={[
              {
                value: 'free',
                label: 'Free',
                description: 'Perfect for trying out'
              },
              {
                value: 'pro',
                label: 'Pro',
                description: 'Best for professionals'
              },
              {
                value: 'enterprise',
                label: 'Enterprise',
                description: 'For large teams'
              },
            ]}
          />
        </div>
      </SectionContainer>

      {/* Cards & Badges */}
      <SectionContainer>
        <SectionHeader title="Cards & Badges" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the card content area where you can add any elements.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Action</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>With Badge</CardTitle>
                <Badge>New</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="info">Info</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Loading States</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <LoadingSpinner label="Loading..." />
              <LoadingDots />
              <LoadingBar progress={65} />
            </CardContent>
          </Card>
        </div>
      </SectionContainer>

      {/* Tabs & Accordion */}
      <SectionContainer className="bg-muted/30">
        <SectionHeader title="Tabs & Accordion" />
        <div className="mx-auto max-w-3xl space-y-8">
          <Tabs defaultValue="tab1">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="tab1">Account</TabsTrigger>
              <TabsTrigger value="tab2">Password</TabsTrigger>
              <TabsTrigger value="tab3">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  Manage your account settings and preferences here.
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tab2" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                </CardHeader>
                <CardContent>
                  Change your password and security settings.
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tab3" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  Configure your application preferences.
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is AI Video Platform?</AccordionTrigger>
              <AccordionContent>
                AI Video Platform is a cutting-edge video generation tool that uses artificial intelligence to create stunning videos in minutes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does it work?</AccordionTrigger>
              <AccordionContent>
                Simply provide your script, choose an avatar and voice, and our AI will generate a professional video for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What languages are supported?</AccordionTrigger>
              <AccordionContent>
                We support over 40 languages and accents, making it easy to create videos for a global audience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SectionContainer>

      {/* Progress & Avatars */}
      <SectionContainer>
        <SectionHeader title="Progress & Avatars" />
        <div className="mx-auto max-w-2xl space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Progress Indicators</h3>
            <div className="space-y-4">
              <Progress value={33} showValue />
              <Progress value={66} showValue />
              <Progress value={100} showValue />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Avatars</h3>
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="h-16 w-16">
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar className="h-20 w-20">
                <AvatarFallback>CD</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Skeleton Loaders</h3>
            <div className="space-y-4">
              <SkeletonText lines={4} />
              <SkeletonCard />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Feature Cards */}
      <SectionContainer className="bg-muted/30">
        <SectionHeader
          badge="Features"
          title="Powerful Features"
          description="Everything you need to create amazing videos"
        />
        <FeatureGrid>
          <FeatureCard
            icon={Video}
            title="AI Avatars"
            description="Choose from 100+ realistic AI avatars or create your own"
            variant="bordered"
          />
          <FeatureCard
            icon={Users}
            title="Natural Voices"
            description="Human-like voiceovers in 40+ languages"
            variant="bordered"
          />
          <FeatureCard
            icon={Zap}
            title="Lightning Fast"
            description="Create videos in minutes, not hours"
            variant="bordered"
          />
        </FeatureGrid>
      </SectionContainer>

      {/* Testimonials */}
      <SectionContainer>
        <SectionHeader
          title="What Our Users Say"
          description="Trusted by thousands of creators worldwide"
        />
        <TestimonialGrid>
          <TestimonialCard
            quote="This platform has revolutionized how we create marketing videos. The quality is outstanding!"
            author={{
              name: 'Sarah Johnson',
              title: 'Marketing Director',
              company: 'TechCorp',
            }}
            rating={5}
            variant="bordered"
          />
          <TestimonialCard
            quote="I can create professional videos in minutes. It's like having a video production team at my fingertips."
            author={{
              name: 'Michael Chen',
              title: 'Content Creator',
            }}
            rating={5}
            variant="bordered"
          />
          <TestimonialCard
            quote="The AI avatars are incredibly realistic. Our training videos have never looked better."
            author={{
              name: 'Emily Rodriguez',
              title: 'HR Manager',
              company: 'Global Inc',
            }}
            rating={5}
            variant="bordered"
          />
        </TestimonialGrid>
      </SectionContainer>

      {/* Pricing */}
      <SectionContainer className="bg-muted/30">
        <SectionHeader
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your needs"
        />
        <PricingGrid>
          <PricingCard
            name="Free"
            description="Perfect for trying out"
            price={{ amount: 0, period: 'month' }}
            features={[
              { text: '5 videos per month', included: true },
              { text: 'Basic avatars', included: true },
              { text: 'HD quality', included: true },
              { text: 'Custom branding', included: false },
              { text: 'Priority support', included: false },
            ]}
            buttonVariant="outline"
          />
          <PricingCard
            name="Pro"
            description="Best for professionals"
            price={{ amount: 29, period: 'month' }}
            features={[
              { text: 'Unlimited videos', included: true, highlight: true },
              { text: 'All avatars', included: true },
              { text: '4K quality', included: true },
              { text: 'Custom branding', included: true },
              { text: 'Priority support', included: false },
            ]}
            popular
          />
          <PricingCard
            name="Enterprise"
            description="For large teams"
            price={{ amount: 99, period: 'month' }}
            features={[
              { text: 'Unlimited everything', included: true },
              { text: 'Custom avatars', included: true },
              { text: '4K quality', included: true },
              { text: 'Custom branding', included: true },
              { text: '24/7 support', included: true, highlight: true },
            ]}
            buttonVariant="outline"
          />
        </PricingGrid>
      </SectionContainer>

      {/* Stats */}
      <SectionContainer>
        <StatsGrid columns={4}>
          <StatItem
            icon={Users}
            value="10K+"
            label="Active Users"
            trend="up"
            trendValue="+20% this month"
          />
          <StatItem
            icon={Video}
            value="50K+"
            label="Videos Created"
            trend="up"
            trendValue="+35% this month"
          />
          <StatItem
            icon={Star}
            value="4.9"
            label="Average Rating"
            trend="neutral"
          />
          <StatItem
            icon={TrendingUp}
            value="99%"
            label="Satisfaction Rate"
            trend="up"
            trendValue="+2% this month"
          />
        </StatsGrid>
      </SectionContainer>

      {/* CTA */}
      <CTASection variant="gradient">
        <CTATitle>Ready to Create Amazing Videos?</CTATitle>
        <CTADescription>
          Join thousands of creators who are already using AI Video Platform to create stunning videos.
        </CTADescription>
        <CTAActions>
          <Button size="xl">Get Started Free</Button>
          <Button size="xl" variant="outline">
            Watch Demo
          </Button>
        </CTAActions>
      </CTASection>
    </>
  );
}

