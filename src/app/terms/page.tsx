import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <div className="relative">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: March 2025
        </p>

        <div className="prose mt-8">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using {siteConfig.name} (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            {siteConfig.name} is an AI-powered SaaS platform that provides tools for building and managing software products. The Service includes AI chat, analytics, payment processing, and related features.
          </p>

          <h2>3. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account. You must be at least 18 years old to use this Service.
          </p>

          <h2>4. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service for any illegal or unauthorized purpose</li>
            <li>Attempt to gain unauthorized access to any part of the Service</li>
            <li>Interfere with or disrupt the Service or servers</li>
            <li>Upload malicious code or content</li>
            <li>Violate any applicable laws or regulations</li>
          </ul>

          <h2>5. Payment Terms</h2>
          <p>
            Paid plans are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law. We reserve the right to change pricing with 30 days notice.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are owned by {siteConfig.name} and are protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            {siteConfig.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service.
          </p>

          <h2>8. Termination</h2>
          <p>
            We may terminate or suspend your account at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the Service.
          </p>

          <h2>10. Contact</h2>
          <p>
            If you have questions about these Terms, please contact us at{" "}
            <a href="mailto:legal@founderos.dev">legal@founderos.dev</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
