import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

/**
 * FounderOS Auth Configuration
 *
 * Uses NextAuth.js v5 with OAuth providers.
 * Add your provider credentials in .env:
 *   - GITHUB_CLIENT_ID / GITHUB_CLIENT_SECRET
 *   - GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET
 *   - NEXTAUTH_SECRET
 */
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
});
