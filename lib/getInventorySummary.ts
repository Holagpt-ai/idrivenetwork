export type InventoryItem = {
  make: string;
  model: string;
  year: number;
  price: number;
  city: string | null;
  zipCode: string | null;
  isFeatured: boolean;
  fuelType: string;
};

export async function getInventorySummary(_limit = 10): Promise<InventoryItem[]> {
  return [];
}
