"use server";

import { redirect } from "next/navigation";
import { getStripe } from "@/lib/stripe";

/**
 * Server Action: Create a Stripe Checkout session and redirect.
 */
export async function createCheckoutAction(formData: FormData) {
  const priceId = formData.get("priceId") as string;

  if (!priceId) {
    throw new Error("Price ID is required");
  }

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/dashboard?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/#pricing`,
      allow_promotion_codes: true,
    });

    if (session.url) {
      redirect(session.url);
    }
  } catch (error) {
    // If Stripe is not configured, redirect to dashboard with a message
    console.error("[Stripe Checkout]", error);
    redirect("/dashboard?stripe=not-configured");
  }
}

/**
 * Server Action: Create a Stripe Customer Portal session.
 */
export async function createPortalAction() {
  try {
    const stripe = getStripe();
    // In production, get customerId from the authenticated user's DB record
    const customerId = "cus_demo";

    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/dashboard/billing`,
    });

    if (session.url) {
      redirect(session.url);
    }
  } catch (error) {
    console.error("[Stripe Portal]", error);
    redirect("/dashboard/billing?stripe=not-configured");
  }
}
