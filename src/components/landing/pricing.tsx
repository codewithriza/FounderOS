"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { pricingPlans } from "@/lib/config";
import { formatPrice } from "@/lib/utils";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[128px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Simple Pricing
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Start Free,{" "}
              <span className="gradient-text">Scale as You Grow</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-lg text-muted-foreground">
              No hidden fees. No surprises. Cancel anytime.
            </p>
          </FadeIn>

          {/* Billing Toggle */}
          <FadeIn delay={0.3}>
            <div className="mt-8 flex items-center justify-center gap-3">
              <span
                className={cn(
                  "text-sm font-medium transition-colors",
                  !isYearly ? "text-foreground" : "text-muted-foreground"
                )}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={cn(
                  "relative h-6 w-11 rounded-full transition-colors",
                  isYearly ? "bg-primary" : "bg-muted"
                )}
              >
                <span
                  className={cn(
                    "absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform shadow-sm",
                    isYearly && "translate-x-5"
                  )}
                />
              </button>
              <span
                className={cn(
                  "text-sm font-medium transition-colors",
                  isYearly ? "text-foreground" : "text-muted-foreground"
                )}
              >
                Yearly
              </span>
              {isYearly && (
                <Badge variant="glow" className="text-xs">
                  Save 30%
                </Badge>
              )}
            </div>
          </FadeIn>
        </div>

        {/* Pricing Cards */}
        <StaggerContainer className="mt-12 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => {
            const price = isYearly ? plan.price.yearly : plan.price.monthly;
            return (
              <StaggerItem key={plan.id}>
                <div
                  className={cn(
                    "relative flex flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-300",
                    plan.highlighted
                      ? "border-primary/50 bg-card shadow-xl shadow-primary/10 scale-[1.02]"
                      : "border-border/50 bg-card/50 hover:border-border hover:shadow-lg"
                  )}
                >
                  {/* Popular Badge */}
                  {plan.highlighted && (
                    <div className="absolute -right-12 top-6 rotate-45 bg-primary px-12 py-1 text-xs font-semibold text-primary-foreground">
                      Popular
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">
                        {price === 0 ? "Free" : formatPrice(price)}
                      </span>
                      {price > 0 && (
                        <span className="text-sm text-muted-foreground">
                          /{isYearly ? "year" : "month"}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    className={cn(
                      "mb-6 w-full",
                      plan.highlighted && "glow"
                    )}
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.highlighted && (
                      <Sparkles className="mr-2 h-4 w-4" />
                    )}
                    {plan.cta}
                  </Button>

                  {/* Features */}
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm"
                      >
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Glow for highlighted */}
                  {plan.highlighted && (
                    <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/10 to-transparent" />
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
