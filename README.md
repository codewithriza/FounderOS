<div align="center">

# ⚡ FounderOS

### The Ultimate AI SaaS Starter Kit

Launch your AI startup in minutes, not months.

[Live Demo](https://founderos.vercel.app) · [Documentation](#-quick-start) · [Report Bug](https://github.com/codewithriza/FounderOS/issues)

---

</div>

## What is FounderOS?

FounderOS is a production-ready Next.js boilerplate that gives you everything you need to launch an AI-powered SaaS product. Stop wasting weeks on auth, payments, and infrastructure — start building your actual product.

**Built by [@codewithriza](https://github.com/codewithriza)**

<br/>

## 🚀 One-Click Deploy

Deploy your own instance of FounderOS to Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcodewithriza%2FFounderOS&env=NEXT_PUBLIC_APP_URL,NEXTAUTH_SECRET&envDescription=Configure%20your%20environment%20variables&envLink=https%3A%2F%2Fgithub.com%2Fcodewithriza%2FFounderOS%23%EF%B8%8F-configuration&project-name=my-saas&repository-name=my-saas&demo-title=FounderOS&demo-description=The%20Ultimate%20AI%20SaaS%20Starter%20Kit)

<br/>

## ✨ Features

- **AI-First** — Vercel AI SDK with Claude 3.5 Sonnet & GPT-4o, streaming chat interface
- **Stripe Payments** — Subscription billing, checkout sessions, webhooks, customer portal
- **Authentication** — NextAuth.js v5 with GitHub & Google OAuth, protected routes
- **Landing Page** — Dark-mode-first hero, features grid, pricing cards, testimonials wall
- **Dashboard** — Sleek sidebar, analytics cards, revenue charts, activity feed
- **AI Chat** — ChatGPT-style interface with streaming responses and suggestions
- **Blog Engine** — Markdown-based with gray-matter, reading time, SEO metadata
- **SEO** — Dynamic sitemap, robots.txt, JSON-LD structured data, Open Graph
- **Waitlist** — High-conversion email capture with Zod validation
- **Dark Mode** — System-aware with smooth transitions via next-themes
- **Type-Safe** — 100% TypeScript strict mode, Prisma ORM, Zod validation

<br/>

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (Strict) |
| Styling | Tailwind CSS v4 + Shadcn/UI |
| Animations | Framer Motion |
| Auth | NextAuth.js v5 |
| Database | Prisma + PostgreSQL |
| AI | Vercel AI SDK (Claude + GPT-4o) |
| Payments | Stripe |
| Deployment | Vercel |

<br/>

## 📦 Quick Start

```bash
# Clone the repo
git clone https://github.com/codewithriza/FounderOS.git
cd FounderOS

# Install dependencies
npm install

# Set up environment
cp .env.example .env.local

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and you're ready to go.

Or use the automated setup:

```bash
chmod +x setup.sh && ./setup.sh
```

<br/>

## 📁 Project Structure

```
├── content/blog/          # Markdown blog posts
├── prisma/                # Database schema
├── src/
│   ├── app/
│   │   ├── api/           # API routes (auth, chat, stripe, waitlist)
│   │   ├── blog/          # Blog pages
│   │   ├── dashboard/     # Protected dashboard + AI chat
│   │   ├── login/         # Auth page
│   │   ├── layout.tsx     # Root layout with SEO
│   │   ├── page.tsx       # Landing page
│   │   ├── robots.ts      # SEO robots.txt
│   │   └── sitemap.ts     # Dynamic sitemap
│   ├── components/
│   │   ├── dashboard/     # Dashboard components
│   │   ├── landing/       # Landing page sections
│   │   ├── providers/     # Context providers
│   │   └── ui/            # Reusable UI components
│   └── lib/               # Core utilities (ai, auth, db, stripe, config)
├── .env.example           # Environment template
├── CONTRIBUTING.md        # Contribution guide
└── setup.sh               # Automated setup
```

<br/>

## ⚙️ Configuration

Copy `.env.example` to `.env.local` and configure:

| Variable | What it does |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXTAUTH_SECRET` | Auth encryption key |
| `GITHUB_CLIENT_ID` | GitHub OAuth credentials |
| `GOOGLE_CLIENT_ID` | Google OAuth credentials |
| `OPENAI_API_KEY` | GPT-4o access |
| `ANTHROPIC_API_KEY` | Claude 3.5 access |
| `STRIPE_SECRET_KEY` | Stripe payments |

Full list in [`.env.example`](.env.example).

<br/>

## 🗺️ Roadmap

- [x] Landing page (hero, features, pricing, testimonials)
- [x] AI chat dashboard with streaming
- [x] Stripe subscription billing
- [x] NextAuth.js authentication
- [x] Markdown blog engine
- [x] SEO optimization
- [x] Dark mode
- [x] Waitlist system
- [ ] Email templates (Resend)
- [ ] Admin panel
- [ ] Rate limiting
- [ ] i18n support
- [ ] E2E tests (Playwright)
- [ ] Docker support

<br/>

## 🤝 Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

<br/>

## 📄 License

MIT — do whatever you want with it. See [LICENSE](LICENSE).

<br/>

---

<div align="center">

Built by [Riza](https://github.com/codewithriza) with ☕ and too many late nights.

If this helped you ship faster, consider giving it a ⭐

</div>
