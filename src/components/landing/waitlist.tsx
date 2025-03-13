"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FadeIn } from "@/components/ui/motion";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json() as { message?: string; error?: string };

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "You're on the list!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[128px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <FadeIn>
            <div className="overflow-hidden rounded-2xl border border-primary/20 bg-card/80 p-8 text-center shadow-xl shadow-primary/5 backdrop-blur-sm sm:p-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to{" "}
                <span className="gradient-text">Ship Faster?</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Join the waitlist and be the first to know when new features
                drop. No spam, ever.
              </p>

              {status === "success" ? (
                <div className="mt-8 flex items-center justify-center gap-2 text-green-500">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">{message}</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 flex flex-col gap-3 sm:flex-row"
                >
                  <Input
                    type="email"
                    placeholder="founder@startup.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 flex-1 bg-background/50"
                    disabled={status === "loading"}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="glow h-12 gap-2"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}

              {status === "error" && (
                <p className="mt-3 text-sm text-red-500">{message}</p>
              )}

              <p className="mt-4 text-xs text-muted-foreground">
                Join 2,000+ founders already on the list. Unsubscribe anytime.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
