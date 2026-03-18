import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}.`,
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: March 2025
        </p>

        <div className="prose mt-8">
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, including:</p>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, and profile picture when you sign up via OAuth providers (GitHub, Google).</li>
            <li><strong>Payment Information:</strong> Billing details processed securely through Stripe. We do not store your credit card numbers.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our Service, including AI chat conversations and feature usage.</li>
            <li><strong>Waitlist Data:</strong> Email addresses submitted through our waitlist form.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve the Service</li>
            <li>Process transactions and send related information</li>
            <li>Send technical notices, updates, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Monitor and analyze trends, usage, and activities</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share information with:
          </p>
          <ul>
            <li><strong>Service Providers:</strong> Third-party services that help us operate (Stripe for payments, Vercel for hosting, AI providers for chat functionality).</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. All data is encrypted in transit using TLS and at rest. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2>5. Cookies</h2>
          <p>
            We use essential cookies for authentication and session management. We do not use tracking cookies or third-party advertising cookies.
          </p>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Export your data</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2>7. Data Retention</h2>
          <p>
            We retain your information for as long as your account is active or as needed to provide services. You can request deletion of your account and data at any time.
          </p>

          <h2>8. Children&apos;s Privacy</h2>
          <p>
            The Service is not intended for children under 13. We do not knowingly collect personal information from children under 13.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:privacy@founderos.dev">privacy@founderos.dev</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
