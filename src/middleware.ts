import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

/**
 * Middleware for route protection.
 * Protects /dashboard routes - redirects to /login if not authenticated.
 * In demo mode (no auth configured), allows access to all routes.
 */
export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isOnDashboard = req.nextUrl.pathname.startsWith("/dashboard");
  const isAuthConfigured = !!(
    process.env.GITHUB_CLIENT_ID ||
    process.env.GOOGLE_CLIENT_ID
  );

  // If auth is not configured (demo mode), allow all access
  if (!isAuthConfigured) {
    return NextResponse.next();
  }

  // Protect dashboard routes
  if (isOnDashboard && !isLoggedIn) {
    const loginUrl = new URL("/login", req.nextUrl.origin);
    loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
