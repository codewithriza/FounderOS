---
title: "Getting Started with FounderOS: Launch Your AI SaaS in Minutes"
description: "A comprehensive guide to setting up FounderOS and launching your first AI-powered SaaS product."
date: "2024-12-01"
author: "FounderOS Team"
image: "/blog/getting-started.png"
tags: ["guide", "tutorial", "getting-started"]
---

# Getting Started with FounderOS

Welcome to FounderOS — the ultimate AI SaaS starter kit. This guide will walk you through everything you need to know to go from zero to a production-ready SaaS in minutes.

## Why FounderOS?

Building a SaaS from scratch is painful. You spend weeks on authentication, payments, and infrastructure before writing a single line of product code. FounderOS eliminates that pain.

### What's Included

- **AI Integration** — Pre-configured Vercel AI SDK with Claude 3.5 and GPT-4o support
- **Stripe Payments** — Complete subscription billing with checkout and webhooks
- **Authentication** — NextAuth.js with OAuth providers out of the box
- **Beautiful UI** — Dark-mode-first design with Shadcn/UI components
- **SEO Engine** — Dynamic sitemaps, JSON-LD, and perfect Lighthouse scores

## Quick Start

```bash
# Clone the repository
git clone https://github.com/founderos/founderos.git

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start the development server
npm run dev
```

## Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your API keys:

```env
# Database
DATABASE_URL="postgresql://..."

# Auth
NEXTAUTH_SECRET="your-secret"
GITHUB_CLIENT_ID="..."
GITHUB_CLIENT_SECRET="..."

# AI
OPENAI_API_KEY="sk-..."
ANTHROPIC_API_KEY="sk-ant-..."

# Stripe
STRIPE_SECRET_KEY="sk_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

### Database Setup

FounderOS uses Prisma with PostgreSQL. Run the following to set up your database:

```bash
npx prisma db push
npx prisma generate
```

## What's Next?

1. Customize the landing page in `src/app/page.tsx`
2. Update pricing plans in `src/lib/config.ts`
3. Add your AI prompts in `src/lib/ai.ts`
4. Deploy to Vercel with one click

Happy building! 🚀
