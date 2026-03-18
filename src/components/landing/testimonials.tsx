"use client";

import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/config";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-[128px]" />
        <div className="absolute left-1/4 bottom-1/4 h-64 w-64 rounded-full bg-primary/10 blur-[128px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Wall of Love
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Loved by{" "}
              <span className="gradient-text">Founders Worldwide</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-lg text-muted-foreground">
              Don&apos;t just take our word for it. Here&apos;s what builders are
              saying.
            </p>
          </FadeIn>
        </div>

        {/* Testimonial Grid */}
        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card/50 p-6 transition-all duration-300 hover:border-primary/20 hover:bg-card hover:shadow-lg hover:shadow-primary/5">
                {/* Quote Icon */}
                <Quote className="mb-4 h-8 w-8 text-primary/20" />

                {/* Content */}
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Rating */}
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/60 to-purple-500/60 text-xs font-bold text-white">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Hover Gradient */}
                <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
