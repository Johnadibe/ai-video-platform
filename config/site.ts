import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'AI Video Platform',
  description:
    'Create stunning AI-powered videos with avatars and voiceovers in minutes. Perfect for marketing, training, and content creation.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://aivideoplatform.com',
  ogImage: '/og-image.png',
  links: {
    twitter: 'https://twitter.com/aivideoplatform',
    github: 'https://github.com/aivideoplatform',
    linkedin: 'https://linkedin.com/company/aivideoplatform',
  },
};

export const navigation = [
  {
    title: 'Features',
    href: '/features',
    description: 'Discover powerful AI video generation capabilities',
  },
  {
    title: 'Pricing',
    href: '/pricing',
    description: 'Choose the perfect plan for your needs',
  },
  {
    title: 'Components',
    href: '/components',
    description: 'Browse our design system and UI components',
  },
  {
    title: 'Use Cases',
    href: '/use-cases',
    description: 'See how teams use our platform',
  },
  {
    title: 'About',
    href: '/about',
    description: 'Learn about our mission',
  },
];

export const footerSections = [
  {
    title: 'Product',
    links: [
      { title: 'Features', href: '/features' },
      { title: 'Pricing', href: '/pricing' },
      { title: 'Use Cases', href: '/use-cases' },
      { title: 'API Documentation', href: '/docs' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Blog', href: '/blog' },
      { title: 'Careers', href: '/careers' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { title: 'Help Center', href: '/help' },
      { title: 'Video Tutorials', href: '/tutorials' },
      { title: 'Community', href: '/community' },
      { title: 'Status', href: '/status' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Service', href: '/terms' },
      { title: 'Cookie Policy', href: '/cookies' },
      { title: 'Security', href: '/security' },
    ],
  },
];

