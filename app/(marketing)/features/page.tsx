'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SectionContainer } from '@/components/marketing/section-container';
import {
  Video,
  Wand2,
  Users,
  FileText,
  Layout,
  Scissors,
  BarChart3,
  Share2,
  Check,
  Globe,
  Captions,
  Mic,
  Sparkles,
  Palette,
  Music,
  TrendingUp,
  Zap,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  ShoppingBag,
  ArrowRight,
  Play,
  Code,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type FeatureSection = {
  id: string;
  label: string;
  icon: any;
};

const featureSections: FeatureSection[] = [
  { id: 'video-generator', label: 'AI Video Generator', icon: Video },
  { id: 'avatars-voices', label: 'Avatars & Voices', icon: Users },
  { id: 'script-writing', label: 'Script Writing', icon: FileText },
  { id: 'templates', label: 'Templates Library', icon: Layout },
  { id: 'editing', label: 'Editing Tools', icon: Scissors },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'integrations', label: 'Integrations', icon: Share2 },
];

export default function FeaturesPage() {
  const [activeSection, setActiveSection] = useState('video-generator');
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / windowHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Find active section
      for (const section of featureSections) {
        const element = sectionRefs.current[section.id];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = sectionRefs.current[id];
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <SectionContainer size="lg" className="text-center">
        <div className="animate-fade-up">
          <Badge className="mb-6">Features</Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
            Everything You Need to Create
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Stunning AI Videos
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Powerful tools designed for marketers, creators, and businesses who want to
            scale their video content effortlessly.
          </p>

          {/* Hero Visual */}
          <div className="relative mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-8 shadow-2xl">
              <div className="aspect-video rounded-lg border border-border/50 bg-muted/50 flex items-center justify-center">
                <div className="text-center">
                  <Play className="mx-auto h-16 w-16 text-primary mb-4" />
                  <p className="text-sm text-muted-foreground">Product Demo Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Main Content with Sidebar Navigation */}
      <SectionContainer>
        <div className="flex gap-8">
          {/* Sticky Sidebar Navigation (Desktop) */}
          <aside className="hidden lg:block lg:w-64 shrink-0">
            <div className="sticky top-24 space-y-1">
              {/* Progress Bar */}
              <div className="mb-6 h-1 w-full bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>

              {/* Navigation Links */}
              {featureSections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      'flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-all',
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    )}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    <span>{section.label}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Mobile Tabs */}
          <div className="lg:hidden w-full mb-8">
            <Tabs value={activeSection} onValueChange={scrollToSection}>
              <TabsList className="w-full overflow-x-auto flex-nowrap justify-start">
                {featureSections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <TabsTrigger key={section.id} value={section.id} className="gap-2">
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{section.label}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </Tabs>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-24">
            {/* 1. AI Video Generator Section */}
            <section
              id="video-generator"
              ref={(el) => { sectionRefs.current['video-generator'] = el }}
              className="scroll-mt-24"
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">AI Video Generator</h2>
                    <p className="text-muted-foreground">
                      Create professional videos in minutes, not hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">One-Click Generation</h3>
                  <p className="text-sm text-muted-foreground">
                    Simply paste your product URL or describe your idea. Our AI handles
                    the rest—script, visuals, and voiceover.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 mb-4">
                    <Globe className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Multi-Language Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Create videos in 40+ languages with native-sounding voices. Perfect
                    for global marketing campaigns.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 mb-4">
                    <Captions className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Auto-Caption & Subtitles</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatic transcription and subtitle generation. Increase engagement
                    by 80% with accessible content.
                  </p>
                </Card>
              </div>

              {/* Demo Preview */}
              <div className="rounded-xl border bg-muted/30 p-8">
                <div className="aspect-video rounded-lg border bg-background flex items-center justify-center">
                  <div className="text-center">
                    <Video className="mx-auto h-12 w-12 text-primary mb-3" />
                    <p className="text-sm text-muted-foreground">
                      Video Generation Demo
                    </p>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Product Demos</h4>
                    <p className="text-sm text-muted-foreground">
                      Showcase features and benefits automatically
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Social Media Ads</h4>
                    <p className="text-sm text-muted-foreground">
                      Optimized for Facebook, Instagram, and TikTok
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Training Videos</h4>
                    <p className="text-sm text-muted-foreground">
                      Create educational content at scale
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Explainer Videos</h4>
                    <p className="text-sm text-muted-foreground">
                      Break down complex topics simply
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. AI Avatars & Voices Section */}
            <section
              id="avatars-voices"
              ref={(el) => { sectionRefs.current['avatars-voices'] = el }}
              className="scroll-mt-24"
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">AI Avatars & Voices</h2>
                    <p className="text-muted-foreground">
                      Realistic digital presenters for your videos
                    </p>
                  </div>
                </div>
              </div>

              {/* Avatar Grid */}
              <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mb-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl border bg-gradient-to-br from-muted to-muted/50 hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <div className="h-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card className="p-6">
                  <Sparkles className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">50+ Realistic Avatars</h3>
                  <p className="text-sm text-muted-foreground">
                    Diverse, professional avatars across all demographics
                  </p>
                </Card>

                <Card className="p-6">
                  <Globe className="h-8 w-8 text-secondary mb-3" />
                  <h3 className="font-semibold mb-2">20+ Languages</h3>
                  <p className="text-sm text-muted-foreground">
                    Native speakers with natural intonation and accents
                  </p>
                </Card>

                <Card className="p-6">
                  <Mic className="h-8 w-8 text-accent mb-3" />
                  <h3 className="font-semibold mb-2">Voice Cloning</h3>
                  <p className="text-sm text-muted-foreground">
                    Clone your own voice or create custom voice profiles
                  </p>
                </Card>

                <Card className="p-6">
                  <Wand2 className="h-8 w-8 text-info mb-3" />
                  <h3 className="font-semibold mb-2">Custom Avatars</h3>
                  <p className="text-sm text-muted-foreground">
                    Create avatars from photos (Enterprise plan)
                  </p>
                </Card>
              </div>

              {/* Interactive Preview */}
              <div className="mt-8 rounded-xl border bg-gradient-to-br from-secondary/10 to-primary/10 p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="aspect-video rounded-lg border bg-background flex items-center justify-center">
                    <Users className="h-16 w-16 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Interactive Avatar Preview</h3>
                    <p className="text-muted-foreground mb-4">
                      Choose from dozens of professional avatars, each with unique
                      personalities and speaking styles.
                    </p>
                    <Button>Try Avatar Demo</Button>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Script Writing Section */}
            <section
              id="script-writing"
              ref={(el) => { sectionRefs.current['script-writing'] = el }}
              className="scroll-mt-24"
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <FileText className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">AI Script Writing</h2>
                    <p className="text-muted-foreground">
                      Generate high-converting video scripts instantly
                    </p>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Proven Frameworks</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    AIDA, PAS, Before-After-Bridge, and more
                  </p>
                  <Badge variant="secondary">AIDA</Badge>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Tone Adjustment</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Professional, casual, humorous, or persuasive
                  </p>
                  <Badge variant="secondary">Casual</Badge>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Length Optimization</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    15s, 30s, 60s, or custom duration
                  </p>
                  <Badge variant="secondary">30s</Badge>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">SEO-Friendly</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Optimized for discoverability and engagement
                  </p>
                  <Badge variant="secondary">Keywords</Badge>
                </Card>
              </div>

              {/* Before/After Example */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl border bg-muted/30 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-8 w-8 rounded-full bg-error/10 flex items-center justify-center">
                      <span className="text-error font-bold">✗</span>
                    </div>
                    <h3 className="font-semibold">Without AI</h3>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                   &quot;Our product is really good. It has many features and it&apos;s affordable.
You should buy it because it will help your business...&quot;
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Badge variant="outline" className="text-error">Generic</Badge>
                    <Badge variant="outline" className="text-error">No hook</Badge>
                  </div>
                </div>

                <div className="rounded-xl border border-primary/50 bg-gradient-to-br from-primary/10 to-transparent p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-8 w-8 rounded-full bg-success/10 flex items-center justify-center">
                      <Check className="h-5 w-5 text-success" />
                    </div>
                    <h3 className="font-semibold">With AI</h3>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    &quot;Struggling with content creation? What if you could produce
professional videos in just 5 minutes? Our AI does the heavy
lifting—scripts, visuals, voiceovers. Start your 14-day free trial!&quot;
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Badge className="bg-success">Hook</Badge>
                    <Badge className="bg-success">Clear CTA</Badge>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Templates Library Section */}
            <section
              id="templates"
              ref={(el) => { sectionRefs.current['templates'] = el }}
              className="scroll-mt-24"
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Layout className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">Templates Library</h2>
                    <p className="text-muted-foreground">
                      100+ professionally designed video templates
                    </p>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['All', 'E-commerce', 'SaaS', 'Education', 'Real Estate', 'Marketing', 'Social Media'].map((category) => (
                  <Button
                    key={category}
                    variant={category === 'All' ? 'default' : 'outline'}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Template Gallery */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card
                    key={i}
                    className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all"
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                      <Layout className="h-12 w-12 text-primary/50" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button size="sm">Preview Template</Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">Product Launch Template</h3>
                      <p className="text-xs text-muted-foreground mb-3">E-commerce</p>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs">
                          30s
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          1080p
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* 5. Editing Tools Section */}
            <section
              id="editing"
             ref={(el) => { sectionRefs.current['editing'] = el }}
              className="scroll-mt-24"
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                    <Scissors className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">Visual Editing Tools</h2>
                    <p className="text-muted-foreground">
                      Intuitive editor for perfect customization
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <Card className="p-6">
                  <Wand2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Drag-and-Drop Interface</h3>
                  <p className="text-sm text-muted-foreground">
                    No video editing experience needed. Simple, visual workflow that
                    anyone can master.
                  </p>
                </Card>

                <Card className="p-6">
                  <FileText className="h-8 w-8 text-secondary mb-3" />
                  <h3 className="font-semibold mb-2">Text Overlays & Graphics</h3>
                  <p className="text-sm text-muted-foreground">
                    Add captions, titles, and call-to-actions with hundreds of font
                    styles and animations.
                  </p>
                </Card>

                <Card className="p-6">
                  <Music className="h-8 w-8 text-accent mb-3" />
                  <h3 className="font-semibold mb-2">Royalty-Free Music Library</h3>
                  <p className="text-sm text-muted-foreground">
                    Thousands of tracks across all genres. Auto-sync to video length.
                  </p>
                </Card>

                <Card className="p-6">
                  <Sparkles className="h-8 w-8 text-info mb-3" />
                  <h3 className="font-semibold mb-2">Transitions & Effects</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional transitions, filters, and effects. Apply with one click.
                  </p>
                </Card>

                <Card className="p-6">
                  <Palette className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Brand Kit</h3>
                  <p className="text-sm text-muted-foreground">
                    Save your colors, logos, and fonts. Apply consistent branding across
                    all videos.
                  </p>
                </Card>

                <Card className="p-6">
                  <Scissors className="h-8 w-8 text-secondary mb-3" />
                  <h3 className="font-semibold mb-2">Trim & Split</h3>
                  <p className="text-sm text-muted-foreground">
                    Precision editing tools. Cut, trim, and arrange clips perfectly.
                  </p>
                </Card>
              </div>

              {/* Editor Screenshot */}
              <div className="rounded-xl border bg-muted/30 p-8">
                <div className="aspect-video rounded-lg border bg-background flex items-center justify-center">
                  <div className="text-center">
                    <Scissors className="mx-auto h-12 w-12 text-primary mb-3" />
                    <p className="text-sm text-muted-foreground">
                      Visual Editor Interface Demo
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Analytics & Optimization Section */}
            <section
              id="analytics"
              ref={(el) => { sectionRefs.current['analytics'] = el }}
              className="scroll-mt-24"
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <BarChart3 className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">Analytics & Optimization</h2>
                    <p className="text-muted-foreground">
                      Data-driven insights to improve performance
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <Card className="p-6">
                  <BarChart3 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Performance Tracking</h3>
                  <p className="text-sm text-muted-foreground">
                    Views, engagement, CTR, and conversion rates
                  </p>
                </Card>

                <Card className="p-6">
                  <TrendingUp className="h-8 w-8 text-success mb-3" />
                  <h3 className="font-semibold mb-2">A/B Testing</h3>
                  <p className="text-sm text-muted-foreground">
                    Test thumbnails, scripts, and CTAs to optimize
                  </p>
                </Card>

                <Card className="p-6">
                  <Sparkles className="h-8 w-8 text-secondary mb-3" />
                  <h3 className="font-semibold mb-2">AI-Powered Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Recommendations to improve engagement
                  </p>
                </Card>

                <Card className="p-6">
                  <TrendingUp className="h-8 w-8 text-accent mb-3" />
                  <h3 className="font-semibold mb-2">ROAS Optimization</h3>
                  <p className="text-sm text-muted-foreground">
                    Maximize return on ad spend automatically
                  </p>
                </Card>
              </div>

              {/* Dashboard Mockup */}
              <div className="rounded-xl border bg-gradient-to-br from-accent/10 to-primary/10 p-8">
                <div className="rounded-lg border bg-background p-6">
                  <div className="grid gap-4 md:grid-cols-3 mb-6">
                    <div className="rounded-lg border p-4">
                      <p className="text-sm text-muted-foreground mb-1">Total Views</p>
                      <p className="text-2xl font-bold">1.2M</p>
                      <p className="text-xs text-success">+24% vs last month</p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <p className="text-sm text-muted-foreground mb-1">Avg. Watch Time</p>
                      <p className="text-2xl font-bold">65%</p>
                      <p className="text-xs text-success">+12% vs last month</p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <p className="text-sm text-muted-foreground mb-1">Conversion Rate</p>
                      <p className="text-2xl font-bold">8.4%</p>
                      <p className="text-xs text-success">+3.2% vs last month</p>
                    </div>
                  </div>
                  <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                    <BarChart3 className="h-12 w-12 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Integrations & Export Section */}
            <section
              id="integrations"
              ref={(el) => { sectionRefs.current['integrations'] = el }}
              className="scroll-mt-24"
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Share2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">Integrations & Export</h2>
                    <p className="text-muted-foreground">
                      Publish everywhere your audience is
                    </p>
                  </div>
                </div>
              </div>

              {/* Platform Integrations */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4">Platform Integrations</h3>
                <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                  {[
                    { icon: Facebook, name: 'Facebook', color: 'text-[#1877F2]' },
                    { icon: Instagram, name: 'Instagram', color: 'text-[#E4405F]' },
                    { icon: Youtube, name: 'YouTube', color: 'text-[#FF0000]' },
                    { icon: Linkedin, name: 'LinkedIn', color: 'text-[#0A66C2]' },
                    { icon: ShoppingBag, name: 'Shopify', color: 'text-[#96BF48]' },
                    { icon: Code, name: 'API', color: 'text-primary' },
                  ].map((platform) => {
                    const Icon = platform.icon;
                    return (
                      <Card
                        key={platform.name}
                        className="p-6 hover:shadow-lg transition-all cursor-pointer group"
                      >
                        <Icon className={cn('h-8 w-8 mb-2 group-hover:scale-110 transition-transform', platform.color)} />
                        <p className="text-sm font-medium">{platform.name}</p>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Export Options */}
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Export Formats</h3>
                  <div className="space-y-2">
                    {['MP4', 'MOV', 'WebM', 'GIF'].map((format) => (
                      <div key={format} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{format}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Quality Options</h3>
                  <div className="space-y-2">
                    {['4K (3840×2160)', '1080p (1920×1080)', '720p (1280×720)', 'Custom'].map((quality) => (
                      <div key={quality} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{quality}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 border-primary/50 bg-primary/5">
                  <h3 className="font-semibold mb-3">API Access</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Programmatic video generation and automation
                  </p>
                  <Badge>Enterprise</Badge>
                </Card>
              </div>
            </section>

            {/* Feature Comparison CTA */}
            <section className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">
                See How We Compare to Competitors
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We&apos;re faster, more affordable, and packed with more features than any
                other AI video platform.
              </p>
              <Link href="/comparison">
                <Button size="lg" variant="outline" className="gap-2">
                  View Comparison Table
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </section>

            {/* Bottom CTA */}
            <section className="text-center">
              <div className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-12">
                <Sparkles className="mx-auto h-12 w-12 text-primary mb-4" />
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Join 75,000+ creators already transforming their video content with AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/signup">
                    <Button size="lg" className="gap-2">
                      Start Free Trial
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button size="lg" variant="outline" className="gap-2">
                      <Play className="h-4 w-4" />
                      Watch Demo
                    </Button>
                  </Link>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  14-day free trial • No credit card required • Cancel anytime
                </p>
              </div>
            </section>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}