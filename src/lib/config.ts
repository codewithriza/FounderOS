/**
 * FounderOS - Site Configuration
 * Central configuration for the entire application.
 * Update these values to customize your SaaS.
 */

export const siteConfig = {
  name: "FounderOS",
  description:
    "The ultimate AI-powered SaaS starter kit. Launch your startup in minutes, not months.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://founderos.dev",
  ogImage: "/og.png",
  creator: "Riza",
  keywords: [
    "SaaS",
    "AI",
    "Starter Kit",
    "Next.js",
    "Boilerplate",
    "Stripe",
    "Authentication",
    "Dashboard",
  ],
  links: {
    github: "https://github.com/codewithriza/FounderOS",
    twitter: "https://twitter.com/codewithriza",
    discord: "https://discord.gg/founderos",
  },
} as const;

export const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for side projects and MVPs.",
    price: { monthly: 0, yearly: 0 },
    stripePriceId: {
      monthly: process.env.STRIPE_STARTER_MONTHLY_PRICE_ID || "",
      yearly: process.env.STRIPE_STARTER_YEARLY_PRICE_ID || "",
    },
    features: [
      "1 AI Project",
      "1,000 AI Credits/month",
      "Basic Analytics",
      "Community Support",
      "API Access",
    ],
    highlighted: false,
    cta: "Get Started Free",
  },
  {
    id: "pro",
    name: "Pro",
    description: "For serious founders building real products.",
    price: { monthly: 2900, yearly: 24900 },
    stripePriceId: {
      monthly: process.env.STRIPE_PRO_MONTHLY_PRICE_ID || "",
      yearly: process.env.STRIPE_PRO_YEARLY_PRICE_ID || "",
    },
    features: [
      "Unlimited AI Projects",
      "50,000 AI Credits/month",
      "Advanced Analytics",
      "Priority Support",
      "API Access",
      "Custom Integrations",
      "Team Collaboration",
    ],
    highlighted: true,
    cta: "Start Building",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For teams that need scale and compliance.",
    price: { monthly: 9900, yearly: 99900 },
    stripePriceId: {
      monthly: process.env.STRIPE_ENTERPRISE_MONTHLY_PRICE_ID || "",
      yearly: process.env.STRIPE_ENTERPRISE_YEARLY_PRICE_ID || "",
    },
    features: [
      "Everything in Pro",
      "Unlimited AI Credits",
      "Custom AI Models",
      "SSO & SAML",
      "Dedicated Support",
      "SLA Guarantee",
      "Custom Contracts",
      "On-premise Option",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
] as const;

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, AIFlow",
    avatar: "/testimonials/avatar-1.png",
    content:
      "FounderOS saved us 3 months of development time. We went from idea to paying customers in just 2 weeks.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "CTO, DataPulse",
    avatar: "/testimonials/avatar-2.png",
    content:
      "The AI integration is seamless. We plugged in our Claude API key and had a working chatbot in minutes.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Solo Founder, WriteAI",
    avatar: "/testimonials/avatar-3.png",
    content:
      "Best boilerplate I've ever used. The code quality is exceptional and the Stripe integration just works.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Lead Dev, NexGen",
    avatar: "/testimonials/avatar-4.png",
    content:
      "We evaluated 10+ boilerplates. FounderOS was the only one with production-grade AI and payment infrastructure.",
    rating: 5,
  },
  {
    name: "Lisa Wang",
    role: "Founder, HealthBot",
    avatar: "/testimonials/avatar-5.png",
    content:
      "The dark mode is gorgeous, the animations are buttery smooth, and the DX is incredible. 10/10.",
    rating: 5,
  },
  {
    name: "Alex Thompson",
    role: "Indie Hacker",
    avatar: "/testimonials/avatar-6.png",
    content:
      "Launched my SaaS in a weekend. Already have 200+ users and $5k MRR. FounderOS is a game changer.",
    rating: 5,
  },
] as const;

export const features = [
  {
    title: "AI-First Architecture",
    description:
      "Built-in Vercel AI SDK with support for Claude 3.5, GPT-4o, and more. Stream responses in real-time.",
    icon: "brain" as const,
  },
  {
    title: "Stripe Payments",
    description:
      "Complete subscription billing with checkout, webhooks, and customer portal. Start earning day one.",
    icon: "creditCard" as const,
  },
  {
    title: "Auth & Security",
    description:
      "NextAuth.js with OAuth providers, magic links, and role-based access control out of the box.",
    icon: "shield" as const,
  },
  {
    title: "Beautiful Dashboard",
    description:
      "A sleek, responsive dashboard with sidebar navigation, charts, and data tables.",
    icon: "layout" as const,
  },
  {
    title: "SEO Optimized",
    description:
      "Dynamic sitemaps, JSON-LD, Open Graph, and perfect Lighthouse scores for maximum visibility.",
    icon: "search" as const,
  },
  {
    title: "Blog Engine",
    description:
      "Markdown-based blog with syntax highlighting, reading time, and automatic RSS feed generation.",
    icon: "fileText" as const,
  },
  {
    title: "Dark Mode",
    description:
      "System-aware dark mode with smooth transitions. Looks stunning in both light and dark themes.",
    icon: "moon" as const,
  },
  {
    title: "Type-Safe",
    description:
      "100% TypeScript with strict mode. Prisma for type-safe database queries. Zod for validation.",
    icon: "code" as const,
  },
] as const;

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "/blog" },
] as const;
