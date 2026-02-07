export type LocationConfig = {
  slug: string;
  city: string;
  state: string;
  zipCode?: string;
};

export const LOCATIONS: LocationConfig[] = [
  { slug: "naples-fl", city: "Naples", state: "FL" },
  { slug: "fort-myers-fl", city: "Fort Myers", state: "FL" },
  { slug: "cape-coral-fl", city: "Cape Coral", state: "FL" },
  { slug: "bonita-springs-fl", city: "Bonita Springs", state: "FL" },
  { slug: "estero-fl", city: "Estero", state: "FL" },
  { slug: "marco-island-fl", city: "Marco Island", state: "FL" },
  { slug: "sarasota-fl", city: "Sarasota", state: "FL" },
  { slug: "33913", city: "Fort Myers", state: "FL", zipCode: "33913" },
  { slug: "33914", city: "Cape Coral", state: "FL", zipCode: "33914" },
  { slug: "33904", city: "Fort Myers", state: "FL", zipCode: "33904" },
  { slug: "34102", city: "Naples", state: "FL", zipCode: "34102" },
  { slug: "34109", city: "Naples", state: "FL", zipCode: "34109" },
];

export const LISTING_TYPES = [
  "cars-for-sale",
  "used-cars",
  "used-suvs",
  "cheap-cars",
] as const;

export type ListingType = (typeof LISTING_TYPES)[number];

export function getLocationBySlug(slug: string): LocationConfig | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function getLocationDisplayName(loc: LocationConfig): string {
  return loc.zipCode ? `${loc.city}, ${loc.state} ${loc.zipCode}` : `${loc.city}, ${loc.state}`;
}
