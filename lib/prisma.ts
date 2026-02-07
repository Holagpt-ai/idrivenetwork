import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | null };

function createPrisma(): PrismaClient | null {
  if (typeof process === "undefined") return null;
  if (!process.env.DATABASE_URL) return null;
  if (process.env.NEXT_RUNTIME === "edge") return null;
  try {
    const client = new PrismaClient();
    if (process.env.NODE_ENV !== "production") {
      globalForPrisma.prisma = client;
    }
    return client;
  } catch {
    return null;
  }
}

export const prisma = globalForPrisma.prisma ?? createPrisma();
