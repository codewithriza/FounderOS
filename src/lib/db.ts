import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient | undefined;
}

/**
 * Singleton Prisma client instance.
 * Prevents multiple instances during hot-reload in development.
 */
export const db: PrismaClient =
  globalThis.cachedPrisma ?? new PrismaClient({ log: ["error"] });

if (process.env.NODE_ENV !== "production") {
  globalThis.cachedPrisma = db;
}
