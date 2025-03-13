"use client";

import {
  Brain,
  CreditCard,
  Shield,
  Layout,
  Search,
  FileText,
  Moon,
  Code,
} from "lucide-react";
import { features } from "@/lib/config";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const iconMap = {
  brain: Brain,
  creditCard: CreditCard,
  shield: Shield,
  layout: Layout,
  search: Search,
  fileText: FileText,
  moon: Moon,
  code: Code,
} as const;

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/10 blur-[128px]" />
        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-purple-500/10 blur-[128px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Everything You Need
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ship Faster with{" "}
              <span className="gradient-text">Built-in Superpowers</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-lg text-muted-foreground">
              Every feature you need to launch a production-ready SaaS. No more
              boilerplate fatigue.
            </p>
          </FadeIn>
        </div>

        {/* Feature Grid */}
        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <StaggerItem key={feature.title}>
                <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5">
                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>

                  {/* Hover Gradient */}
                  <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
