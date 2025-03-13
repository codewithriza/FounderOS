import { NextResponse } from "next/server";
import { z } from "zod";

const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().optional(),
  referrer: z.string().optional(),
});

/**
 * POST /api/waitlist
 * Add an email to the waitlist.
 *
 * When DATABASE_URL is configured, this will persist to the database.
 * Otherwise, it logs the entry and returns success (for demo purposes).
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, referrer } = waitlistSchema.parse(body);

    // Check if database is configured
    if (process.env.DATABASE_URL) {
      // Dynamic import to avoid errors when DB is not configured
      const { db } = await import("@/lib/db");

      // Check for existing entry
      const existing = await db.waitlistEntry.findUnique({
        where: { email },
      });

      if (existing) {
        return NextResponse.json(
          { message: "You're already on the waitlist! 🎉" },
          { status: 200 }
        );
      }

      // Create new entry
      await db.waitlistEntry.create({
        data: {
          email,
          name,
          referrer,
          source: "landing",
        },
      });
    } else {
      // Demo mode - just log
      console.log(`[Waitlist] New signup: ${email}`, { name, referrer });
    }

    return NextResponse.json(
      { message: "Welcome aboard! You're on the waitlist. 🚀" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const firstIssue = error.issues[0];
      return NextResponse.json(
        { error: firstIssue?.message ?? "Validation error" },
        { status: 400 }
      );
    }

    console.error("[Waitlist] Error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
