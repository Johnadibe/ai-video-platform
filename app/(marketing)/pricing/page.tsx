'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PricingCard } from '@/components/marketing/pricing-card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { SectionContainer, SectionHeader } from '@/components/marketing/section-container';
import {
  Check,
  X,
  Sparkles,
  Shield,
  CreditCard,
  ArrowRight,
  Users,
  Lock,
  RefreshCw,
  HeadphonesIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const getPrice = (monthlyPrice: number) => {
    if (billingPeriod === 'annual') {
      return Math.floor(monthlyPrice * 0.8); // 20% discount
    }
    return monthlyPrice;
  };

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for trying out',
      monthlyPrice: 29,
      features: [
        { text: '10 AI videos/month', included: true },
        { text: '20 static ads/month', included: true },
        { text: '3 AI avatars', included: true },
        { text: 'Basic templates', included: true },
        { text: '720p export', included: true },
        { text: 'Email support', included: true },
        { text: 'Custom branding', included: false },
        { text: 'Priority support', included: false },
      ],
      cta: 'Start Free Trial',
      href: '/signup?plan=starter',
    },
    {
      name: 'Professional',
      description: 'For growing businesses',
      monthlyPrice: 49,
      popular: true,
      features: [
        { text: '30 AI videos/month', included: true, highlight: true },
        { text: '50 static ads/month', included: true },
        { text: '15 AI avatars', included: true },
        { text: 'Premium templates', included: true, highlight: true },
        { text: '1080p export', included: true },
        { text: 'Custom branding', included: true },
        { text: 'Priority support', included: true },
        { text: 'Advanced analytics', included: true },
      ],
      cta: 'Start Free Trial',
      href: '/signup?plan=professional',
    },
    {
      name: 'Enterprise',
      description: 'For agencies & teams',
      monthlyPrice: 99,
      features: [
        { text: 'Unlimited videos', included: true, highlight: true },
        { text: 'Unlimited static ads', included: true },
        { text: 'All AI avatars', included: true },
        { text: 'Custom templates', included: true },
        { text: '4K export', included: true, highlight: true },
        { text: 'API access', included: true },
        { text: 'White-label option', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: 'SLA guarantee', included: true },
      ],
      cta: 'Contact Sales',
      href: '/contact?plan=enterprise',
    },
  ];

  const comparisonFeatures = [
    {
      category: 'Video Creation',
      features: [
        { name: 'AI Videos per month', starter: '10', professional: '30', enterprise: 'Unlimited' },
        { name: 'Static Ads per month', starter: '20', professional: '50', enterprise: 'Unlimited' },
        { name: 'Video length', starter: '2 min', professional: '5 min', enterprise: 'Unlimited' },
        { name: 'Batch creation', starter: false, professional: true, enterprise: true },
      ],
    },
    {
      category: 'AI Features',
      features: [
        { name: 'AI Avatars', starter: '3', professional: '15', enterprise: 'All (100+)' },
        { name: 'Custom avatar', starter: false, professional: false, enterprise: true },
        { name: 'Voice cloning', starter: false, professional: true, enterprise: true },
        { name: 'AI script writer', starter: true, professional: true, enterprise: true },
        { name: 'Multi-language support', starter: '10', professional: '40+', enterprise: '40+' },
      ],
    },
    {
      category: 'Templates & Assets',
      features: [
        { name: 'Template library', starter: 'Basic', professional: 'Premium', enterprise: 'Custom' },
        { name: 'Stock media', starter: '100', professional: '1000', enterprise: 'Unlimited' },
        { name: 'Custom fonts', starter: false, professional: true, enterprise: true },
        { name: 'Brand kit', starter: false, professional: true, enterprise: true },
      ],
    },
    {
      category: 'Export & Integration',
      features: [
        { name: 'Video quality', starter: '720p', professional: '1080p', enterprise: '4K' },
        { name: 'Watermark', starter: 'Yes', professional: 'No', enterprise: 'No' },
        { name: 'Custom branding', starter: false, professional: true, enterprise: true },
        { name: 'API access', starter: false, professional: false, enterprise: true },
        { name: 'Webhook support', starter: false, professional: false, enterprise: true },
      ],
    },
    {
      category: 'Support & Services',
      features: [
        { name: 'Support type', starter: 'Email', professional: 'Priority', enterprise: '24/7 Phone' },
        { name: 'Response time', starter: '48h', professional: '24h', enterprise: '1h' },
        { name: 'Dedicated manager', starter: false, professional: false, enterprise: true },
        { name: 'SLA guarantee', starter: false, professional: false, enterprise: true },
        { name: 'Training & onboarding', starter: false, professional: false, enterprise: true },
      ],
    },
  ];

  const faqs = [
    {
      question: 'Can I change my plan?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate the charges accordingly. There are no penalties for changing plans.',
    },
    {
      question: 'What happens after the trial?',
      answer: 'After your 14-day free trial ends, you\'ll be charged for your selected plan. You can cancel anytime during the trial without being charged. We\'ll send you a reminder email 3 days before the trial ends.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with our service within the first 30 days, contact our support team for a full refund, no questions asked.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Absolutely! There are no long-term contracts. You can cancel your subscription at any time from your account settings. Your access will continue until the end of your billing period.',
    },
    {
      question: 'Is there a free plan?',
      answer: 'We offer a 14-day free trial on all paid plans. While we don\'t have a permanent free tier, our Starter plan is very affordable and includes all core features you need to get started.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and for Enterprise customers, we can arrange invoice billing. All payments are processed securely through Stripe.',
    },
    {
      question: 'Do I need a credit card for the trial?',
      answer: 'Yes, we require a credit card to start your free trial. However, you won\'t be charged during the trial period. You can cancel anytime before the trial ends to avoid charges.',
    },
    {
      question: 'How does billing work?',
      answer: 'You\'re billed at the start of each billing period (monthly or annually). Annual plans are billed once per year and save you 20%. All plans automatically renew unless you cancel.',
    },
    {
      question: 'Can I get a custom plan for my team?',
      answer: 'Yes! For teams with specific needs, we can create a custom Enterprise plan. Contact our sales team to discuss your requirements, and we\'ll build a plan that fits your needs perfectly.',
    },
    {
      question: 'What if I exceed my plan limits?',
      answer: 'If you exceed your plan limits, we\'ll notify you and suggest upgrading to a higher tier. We don\'t automatically charge overage fees. You can also purchase add-on credits for one-time needs.',
    },
  ];

  return (
    <>
      {/* Header Section */}
      <SectionContainer size="lg" className="text-center">
        <div className="animate-fade-up">
          <Badge className="mb-6">Pricing</Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>

          {/* Billing Toggle */}
          <div className="mx-auto mb-12 inline-flex items-center gap-4 rounded-full border bg-muted p-1">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={cn(
                'rounded-full px-6 py-2 text-sm font-medium transition-all',
                billingPeriod === 'monthly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={cn(
                'flex items-center gap-2 rounded-full px-6 py-2 text-sm font-medium transition-all',
                billingPeriod === 'annual'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Annual
              <Badge variant="success" className="text-xs">
                Save 20%
              </Badge>
            </button>
          </div>
        </div>
      </SectionContainer>

      {/* Pricing Cards */}
      <SectionContainer>
        <div className="grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PricingCard
                name={plan.name}
                description={plan.description}
                price={{
                  amount: plan.name === 'Enterprise' ? 'Custom' : getPrice(plan.monthlyPrice),
                  currency: '$',
                  period: billingPeriod === 'annual' ? 'year' : 'month',
                }}
                features={plan.features}
                buttonText={plan.cta}
                onButtonClick={() => (window.location.href = plan.href)}
                popular={plan.popular}
                variant={plan.popular ? 'highlighted' : 'default'}
              />
              {billingPeriod === 'annual' && plan.name !== 'Enterprise' && (
                <p className="mt-3 text-center text-sm text-muted-foreground">
                  ${plan.monthlyPrice}/month billed annually
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          All plans include 14-day free trial • No credit card required • Cancel anytime
        </p>
      </SectionContainer>

      {/* Feature Comparison Table */}
      <SectionContainer className="bg-muted/30">
        <SectionHeader
          title="Compare Plans"
          description="See what's included in each plan"
          align="center"
        />

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="sticky top-16 z-10 bg-background">
              <tr className="border-b">
                <th className="p-4 text-left font-semibold">Features</th>
                <th className="p-4 text-center font-semibold">Starter</th>
                <th className="p-4 text-center font-semibold">
                  <div className="inline-flex flex-col items-center">
                    <span>Professional</span>
                    <Badge variant="default" className="mt-1 text-xs">
                      Most Popular
                    </Badge>
                  </div>
                </th>
                <th className="p-4 text-center font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((section) => (
                <>
                  <tr key={section.category} className="bg-muted/50">
                    <td colSpan={4} className="p-4 font-semibold">
                      {section.category}
                    </td>
                  </tr>
                  {section.features.map((feature) => (
                    <tr key={feature.name} className="border-b hover:bg-muted/30">
                      <td className="p-4 text-sm">{feature.name}</td>
                      <td className="p-4 text-center text-sm">
                        {typeof feature.starter === 'boolean' ? (
                          feature.starter ? (
                            <Check className="mx-auto h-5 w-5 text-primary" />
                          ) : (
                            <X className="mx-auto h-5 w-5 text-muted-foreground" />
                          )
                        ) : (
                          feature.starter
                        )}
                      </td>
                      <td className="p-4 text-center text-sm">
                        {typeof feature.professional === 'boolean' ? (
                          feature.professional ? (
                            <Check className="mx-auto h-5 w-5 text-primary" />
                          ) : (
                            <X className="mx-auto h-5 w-5 text-muted-foreground" />
                          )
                        ) : (
                          feature.professional
                        )}
                      </td>
                      <td className="p-4 text-center text-sm">
                        {typeof feature.enterprise === 'boolean' ? (
                          feature.enterprise ? (
                            <Check className="mx-auto h-5 w-5 text-primary" />
                          ) : (
                            <X className="mx-auto h-5 w-5 text-muted-foreground" />
                          )
                        ) : (
                          feature.enterprise
                        )}
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </SectionContainer>

      {/* Trust Indicators */}
      <SectionContainer>
        <div className="grid gap-8 text-center md:grid-cols-4">
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
              <Shield className="h-6 w-6 text-success" />
            </div>
            <h3 className="font-semibold">30-Day Guarantee</h3>
            <p className="text-sm text-muted-foreground">
              Full refund if not satisfied
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Secure Payments</h3>
            <p className="text-sm text-muted-foreground">
              Bank-level encryption
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-info/10">
              <RefreshCw className="h-6 w-6 text-info" />
            </div>
            <h3 className="font-semibold">Cancel Anytime</h3>
            <p className="text-sm text-muted-foreground">
              No long-term contracts
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
              <Users className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="font-semibold">75,000+ Creators</h3>
            <p className="text-sm text-muted-foreground">
              Trusted worldwide
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer className="bg-muted/30">
        <SectionHeader
          title="Frequently Asked Questions"
          description="Everything you need to know about pricing and billing"
          align="center"
        />

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionContainer>

      {/* Final CTA Section */}
      <SectionContainer className="text-center">
        <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-12">
          <Sparkles className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Still Have Questions?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Our sales team is here to help you find the perfect plan for your needs.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                <HeadphonesIcon className="h-5 w-5" />
                Talk to Sales
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" variant="outline" className="gap-2">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Or start your 14-day free trial today. No credit card required.
          </p>
        </div>
      </SectionContainer>
    </>
  );
}

