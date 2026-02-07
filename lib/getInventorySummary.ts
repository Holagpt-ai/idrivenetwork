import { prisma } from "@/lib/prisma";

export type InventoryItem = {
  make: string;
  model: string;
  year: number;
  price: number;
  city: string | null;
  zipCode: string | null;
  isFeatured: boolean;
};

export async function getInventorySummary(limit = 10): Promise<InventoryItem[]> {
  const cars = await prisma.car.findMany({
    take: limit,
    orderBy: { isFeatured: "desc" },
    select: {
      make: true,
      model: true,
      year: true,
      price: true,
      city: true,
      zipCode: true,
      isFeatured: true,
    },
  });
  return cars;
}
