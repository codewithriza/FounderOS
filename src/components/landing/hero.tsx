"use client";

import Link from "next/link";
import { ArrowRight, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn, Float } from "@/components/ui/motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[128px]" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-[128px]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[96px]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <FadeIn delay={0}>
            <Badge variant="glow" className="mb-6 gap-1.5 px-4 py-1.5 text-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Now with Claude 3.7 & GPT-4o Support
            </Badge>
          </FadeIn>

          {/* Heading */}
          <FadeIn delay={0.1}>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Launch Your AI Startup{" "}
              <span className="gradient-text">In Minutes,</span>{" "}
              Not Months
            </h1>
          </FadeIn>

          {/* Subheading */}
          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              The open-source Next.js boilerplate with AI, Payments, Auth, and
              everything you need to ship your SaaS. Stop building
              infrastructure. Start building your product.
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/dashboard">
                <Button size="xl" className="glow group gap-2">
                  Get Started Free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link
                href="https://github.com/codewithriza/FounderOS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="xl" variant="outline" className="gap-2">
                  <Github className="h-4 w-4" />
                  Star on GitHub
                </Button>
              </Link>
            </div>
          </FadeIn>

          {/* Social Proof */}
          <FadeIn delay={0.4}>
            <div className="mt-12 flex flex-col items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-primary/60 to-purple-500/60"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by{" "}
                <span className="font-semibold text-foreground">2,000+</span>{" "}
                founders worldwide
              </p>
            </div>
          </FadeIn>

          {/* Dashboard Preview */}
          <FadeIn delay={0.5}>
            <div className="relative mt-16 w-full max-w-5xl">
              <Float duration={6}>
                <div className="overflow-hidden rounded-xl border border-border/50 bg-card shadow-2xl shadow-primary/5">
                  <div className="flex items-center gap-2 border-b border-border/50 bg-muted/50 px-4 py-3">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-xs text-muted-foreground">
                      founderos.dev/dashboard
                    </span>
                  </div>
                  <div className="relative aspect-[16/9] bg-gradient-to-br from-background via-muted/30 to-background p-8">
                    {/* Mock Dashboard UI */}
                    <div className="flex h-full gap-4">
                      {/* Sidebar Mock */}
                      <div className="hidden w-48 flex-col gap-2 rounded-lg bg-muted/50 p-3 sm:flex">
                        {["Dashboard", "AI Chat", "Analytics", "Settings"].map(
                          (item) => (
                            <div
                              key={item}
                              className="rounded-md bg-background/50 px-3 py-2 text-xs text-muted-foreground"
                            >
                              {item}
                            </div>
                          )
                        )}
                      </div>
                      {/* Main Content Mock */}
                      <div className="flex flex-1 flex-col gap-3">
                        <div className="grid grid-cols-3 gap-3">
                          {["Revenue", "Users", "AI Calls"].map((metric) => (
                            <div
                              key={metric}
                              className="rounded-lg bg-muted/50 p-3"
                            >
                              <div className="text-[10px] text-muted-foreground">
                                {metric}
                              </div>
                              <div className="mt-1 text-lg font-bold">
                                {metric === "Revenue"
                                  ? "$12.4k"
                                  : metric === "Users"
                                  ? "1,234"
                                  : "45.2k"}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex-1 rounded-lg bg-muted/30 p-4">
                          <div className="flex h-full items-end gap-1">
                            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                              (h, i) => (
                                <div
                                  key={i}
                                  className="flex-1 rounded-t bg-primary/40"
                                  style={{ height: `${h}%` }}
                                />
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Float>

              {/* Glow effect behind the preview */}
              <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
