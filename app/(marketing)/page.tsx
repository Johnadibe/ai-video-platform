import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import {
  Video,
  Users,
  Zap,
  Sparkles,
  PlayCircle,
  CheckCircle2,
  ArrowRight,
  Clock,
  DollarSign,
  Wrench,
  Upload,
  Wand2,
  Share2,
  BarChart3,
  FileText,
  Layout,
  TrendingUp,
  Star,
  Facebook,
  Instagram,
  Youtube,
  ShoppingBag,
  Twitter,
  MessageSquare,
  X,
  Check,
} from 'lucide-react';
import { AnimatedBackground, FloatingShapes } from '../../components/marketing/animated-background';
import { FeatureCard } from '../../components/marketing/feature-card';
import { TestimonialCard } from '../../components/marketing/testimonial-card';
import { PricingCard } from '../../components/marketing/pricing-card';
import { StatItem } from '../../components/marketing/stats-section';
import { LogoCloud } from '../../components/marketing/logo-cloud';
import { EmbeddedVideo } from '../../components/marketing/video-player';

export const metadata: Metadata = {
  title: 'AI Video Platform - Create Professional Marketing Videos in Minutes',
  description:
    'Transform your marketing with AI-powered video generation. Create stunning videos with AI avatars, voiceovers, and templates in minutes. Trusted by 75,000+ creators.',
  keywords: [
    'AI video generation',
    'marketing videos',
    'AI avatars',
    'video creation',
    'automated video',
    'text to video',
    'video marketing',
  ],
  openGraph: {
    title: 'AI Video Platform - Create Professional Marketing Videos with AI',
    description:
      'Create stunning marketing videos in minutes with AI-powered avatars and voiceovers. Join 75,000+ creators.',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Video Platform - Create Professional Marketing Videos with AI',
    description:
      'Create stunning marketing videos in minutes with AI-powered avatars and voiceovers.',
    images: ['/og-image.png'],
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Full Viewport Height */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <AnimatedBackground variant="gradient">
          <FloatingShapes />
          <div className="container flex min-h-[90vh] flex-col items-center justify-center py-16 text-center">

            <h1 className="mb-6 max-w-4xl animate-fade-up text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl animation-delay-200">
              Create Professional Marketing Videos{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                with AI in Minutes
              </span>
            </h1>

            <p className="mb-8 max-w-2xl animate-fade-up text-lg text-muted-foreground md:text-xl animation-delay-400">
              Transform your content into engaging videos with AI avatars, natural voiceovers, and
              professional templates. No camera, mic, or editing skills required.
            </p>

            <div className="mb-8 flex animate-fade-up flex-col gap-4 sm:flex-row animation-delay-600">
              <Link href="/signup">
                <Button size="xl" className="gap-2">
                  Start Creating Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#demo">
                <Button size="xl" variant="outline" className="gap-2">
                  <PlayCircle className="h-5 w-5" />
                  Watch Demo
                </Button>
              </Link>
            </div>

            <p className="animate-fade-up text-sm text-muted-foreground animation-delay-800">
              No credit card required • Free forever plan • Cancel anytime
            </p>

            {/* Social Proof */}
            <div className="mt-12 animate-fade-up animation-delay-1000">
              <p className="mb-4 text-sm font-medium text-muted-foreground">
                Trusted by 75,000+ creators and featured in
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale">
                <div className="text-2xl font-bold">TechCrunch</div>
                <div className="text-2xl font-bold">Forbes</div>
                <div className="text-2xl font-bold">ProductHunt</div>
                <div className="text-2xl font-bold">Mashable</div>
              </div>
            </div>
          </div>
        </AnimatedBackground>
      </section>

      {/* Logo Cloud / Trust Badges */}
      <section className="border-b bg-muted/30 py-12">
        <div className="container">
          <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
            Join 75,000+ creators from leading companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="flex h-12 w-32 items-center justify-center rounded-lg bg-card text-lg font-semibold opacity-50 transition-opacity hover:opacity-100"
              >
                Company {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge className="mb-4">Why AI Video Platform?</Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
              Stop Wasting Time on Video Production
            </h2>
            <p className="text-lg text-muted-foreground">
              Traditional video creation is expensive and time-consuming. We make it fast, affordable, and easy.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Without AI */}
            <div className="rounded-2xl border-2 border-destructive/20 bg-destructive/5 p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                  <X className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold">Without AI</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: Clock, text: 'Weeks of production time' },
                  { icon: DollarSign, text: '$5,000+ per video minimum' },
                  { icon: Wrench, text: 'Complex editing software' },
                  { icon: Users, text: 'Requires full production team' },
                  { icon: Video, text: 'Expensive equipment needed' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="mt-1 h-5 w-5 shrink-0 text-destructive" />
                    <div>
                      <div className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        <span className="font-medium">{item.text}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* With AI */}
            <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">With AI Video Platform</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: Zap, text: 'Videos ready in minutes' },
                  { icon: DollarSign, text: 'Starting from $0/month' },
                  { icon: Sparkles, text: 'No editing skills needed' },
                  { icon: Users, text: 'Just you and AI' },
                  { icon: Video, text: 'No equipment required' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <div className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        <span className="font-medium">{item.text}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-muted/30 py-20 md:py-32">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge className="mb-4">Simple Process</Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
              Create Videos in 4 Simple Steps
            </h2>
            <p className="text-lg text-muted-foreground">
              From idea to published video in minutes, not weeks
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: '01',
                icon: Upload,
                title: 'Upload or Paste Content',
                description: 'Import your product details, blog post, or paste a URL. Our AI will extract the key information.',
              },
              {
                number: '02',
                icon: Wand2,
                title: 'Choose AI Templates',
                description: 'Select from professional templates and pick your AI avatar from 100+ realistic options.',
              },
              {
                number: '03',
                icon: Sparkles,
                title: 'AI Generates Video',
                description: 'Our AI creates your script, adds voiceover, and produces a professional video automatically.',
              },
              {
                number: '04',
                icon: Share2,
                title: 'Launch Everywhere',
                description: 'Download or publish directly to social media, ads platforms, and your website.',
              },
            ].map((step, i) => (
              <div
                key={i}
                className="group relative rounded-xl border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <step.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/signup">
              <Button size="lg" className="gap-2">
                Try It Now - It&apos;s Free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge className="mb-4">Features</Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
              Everything You Need to Create Amazing Videos
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful AI tools that make video creation fast, easy, and professional
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={Video}
              title="AI Video Generator"
              description="Transform text, URLs, or products into professional videos automatically with advanced AI technology."
              variant="bordered"
            />
            <FeatureCard
              icon={Users}
              title="AI Avatars Library"
              description="Choose from 100+ realistic AI avatars or create a custom digital twin of yourself."
              variant="bordered"
            />
            <FeatureCard
              icon={FileText}
              title="Script Writing AI"
              description="AI generates compelling scripts from your content, optimized for engagement and conversions."
              variant="bordered"
            />
            <FeatureCard
              icon={Layout}
              title="Template Library"
              description="1000+ professional templates for every industry, niche, and use case."
              variant="bordered"
            />
            <FeatureCard
              icon={Share2}
              title="Multi-Platform Export"
              description="Export in any format and resolution. Optimize for YouTube, TikTok, Instagram, and more."
              variant="bordered"
            />
            <FeatureCard
              icon={BarChart3}
              title="Analytics Dashboard"
              description="Track views, engagement, and ROI with built-in analytics and performance insights."
              variant="bordered"
            />
          </div>
        </div>
      </section>

      {/* Product Demo Video Section */}
      <section id="demo" className="bg-muted/30 py-20 md:py-32">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">Watch It In Action</Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
              See AI Video Platform in Action
            </h2>
            <p className="text-lg text-muted-foreground">
              Watch how easy it is to create professional videos in minutes
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20">
                {/* Replace with actual video */}
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <PlayCircle className="mx-auto mb-4 h-20 w-20 text-primary" />
                    <p className="text-lg font-medium">Demo Video</p>
                    <p className="text-sm text-muted-foreground">Click to play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Metrics Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <StatItem
              icon={Users}
              value="75,000+"
              label="Active Creators"
              description="Growing community"
            />
            <StatItem
              icon={Video}
              value="5M+"
              label="Videos Created"
              description="And counting"
            />
            <StatItem
              icon={Clock}
              value="97%"
              label="Time Saved"
              description="Vs traditional methods"
            />
            <StatItem
              icon={TrendingUp}
              value="250%"
              label="Avg ROI Increase"
              description="For our customers"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/30 py-20 md:py-32">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
              Loved by Creators Worldwide
            </h2>
            <p className="text-lg text-muted-foreground">
              See what our customers are saying about their success
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="This platform has completely transformed how we create marketing content. We went from weeks to minutes, and the quality is outstanding!"
              author={{
                name: 'Sarah Johnson',
                title: 'Marketing Director',
                company: 'TechStart Inc',
              }}
              rating={5}
              variant="bordered"
            />
            <TestimonialCard
              quote="I can create professional videos without any technical skills. The AI avatars are incredibly realistic and the voiceovers sound natural."
              author={{
                name: 'Michael Chen',
                title: 'Content Creator',
                company: 'Digital Pro Media',
              }}
              rating={5}
              variant="bordered"
            />
            <TestimonialCard
              quote="Our training videos have never looked better. The ROI has been incredible - we've cut production costs by 90% while improving engagement."
              author={{
                name: 'Emily Rodriguez',
                title: 'L&D Manager',
                company: 'Global Corp',
              }}
              rating={5}
              variant="bordered"
            />
            <TestimonialCard
              quote="The AI script writer alone is worth the subscription. It saves me hours of work and consistently generates engaging content."
              author={{
                name: 'David Park',
                title: 'Social Media Manager',
                company: 'Brand Studio',
              }}
              rating={5}
              variant="bordered"
            />
            <TestimonialCard
              quote="We create product videos for our entire catalog in a fraction of the time. Game changer for e-commerce!"
              author={{
                name: 'Lisa Thompson',
                title: 'E-commerce Director',
                company: 'ShopNow',
              }}
              rating={5}
              variant="bordered"
            />
            <TestimonialCard
              quote="The quality is indistinguishable from videos we used to pay $5000+ for. This platform is revolutionary."
              author={{
                name: 'James Wilson',
                title: 'Startup Founder',
                company: 'InnovateLab',
              }}
              rating={5}
              variant="bordered"
            />
          </div>
        </div>
      </section>

      {/* Pricing Teaser Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge className="mb-4">Pricing</Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
              Plans for Every Creator
            </h2>
            <p className="text-lg text-muted-foreground">
              Start free, scale as you grow. No hidden fees.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <PricingCard
              name="Free"
              description="Perfect for trying out"
              price={{ amount: 0, period: 'month' }}
              features={[
                { text: '5 videos per month', included: true },
                { text: 'Basic AI avatars', included: true },
                { text: 'HD quality export', included: true },
                { text: 'Watermark on videos', included: true },
                { text: 'Community support', included: true },
              ]}
              buttonText="Start Free"
              buttonVariant="outline"
            />
            <PricingCard
              name="Pro"
              description="Best for professionals"
              price={{ amount: 29, period: 'month' }}
              features={[
                { text: 'Unlimited videos', included: true, highlight: true },
                { text: 'All AI avatars', included: true },
                { text: '4K quality export', included: true },
                { text: 'No watermark', included: true, highlight: true },
                { text: 'Priority support', included: true },
                { text: 'Custom branding', included: true },
                { text: 'Advanced analytics', included: true },
              ]}
              popular
              buttonText="Start Pro Trial"
            />
            <PricingCard
              name="Enterprise"
              description="For large teams"
              price={{ amount: 99, period: 'month' }}
              features={[
                { text: 'Everything in Pro', included: true },
                { text: 'Custom AI avatars', included: true, highlight: true },
                { text: 'API access', included: true },
                { text: 'Dedicated account manager', included: true },
                { text: '24/7 phone support', included: true },
                { text: 'Custom integrations', included: true },
                { text: 'SLA guarantee', included: true },
              ]}
              buttonText="Contact Sales"
              buttonVariant="outline"
            />
          </div>

          <div className="mt-12 text-center">
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="gap-2">
                See All Plans & Features
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="bg-muted/30 py-20 md:py-32">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge className="mb-4">Integrations</Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
              Works with Your Favorite Tools
            </h2>
            <p className="text-lg text-muted-foreground">
              Seamlessly integrate with the platforms you already use
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[
              { icon: Facebook, name: 'Facebook', color: 'text-blue-600' },
              { icon: Instagram, name: 'Instagram', color: 'text-pink-600' },
              { icon: Twitter, name: 'Twitter', color: 'text-blue-400' },
              { icon: Youtube, name: 'YouTube', color: 'text-red-600' },
              { icon: MessageSquare, name: 'TikTok', color: 'text-gray-900' },
              { icon: ShoppingBag, name: 'Shopify', color: 'text-green-600' },
            ].map((platform, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 rounded-xl border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
              >
                <platform.icon className={`h-12 w-12 ${platform.color}`} />
                <span className="text-sm font-medium">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
        <FloatingShapes />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Ready to Transform Your Marketing?
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Join 75,000+ creators already growing their business with AI-powered video
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/signup">
                <Button size="xl" className="gap-2">
                  Get Started Free
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="xl" variant="outline">
                  Talk to Sales
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              ✓ No credit card required • ✓ Free forever plan • ✓ Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
