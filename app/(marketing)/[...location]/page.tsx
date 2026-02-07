export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import {
  LOCATIONS,
  LISTING_TYPES,
  getLocationBySlug,
  getLocationDisplayName,
} from "@/lib/locations";

type PageProps = {
  params: Promise<{ location: string[] }>;
};

function getH1(locName: string, listingType: string): string {
  const typeMap: Record<string, string> = {
    "cars-for-sale": "Used Cars for Sale",
    "used-cars": "Used Cars",
    "used-suvs": "Used SUVs",
    "cheap-cars": "Cheap Cars",
  };
  const typeLabel = typeMap[listingType] ?? "Cars for Sale";
  return `${typeLabel} in ${locName}`;
}

export async function generateMetadata({ params }: PageProps) {
  const { location } = await params;
  const locationSlug = location[0];
  const listingType = location[1] ?? "cars-for-sale";
  const loc = getLocationBySlug(locationSlug);
  if (!loc) return { title: "iDrive" };
  const locName = getLocationDisplayName(loc);
  const title = getH1(locName, listingType);
  return {
    title: `${title} | iDrive`,
    description: `Find quality pre-owned vehicles in ${locName}. Browse our inventory and book a test drive at iDrive.`,
  };
}

export async function generateStaticParams() {
  const params: { location: string[] }[] = [];
  for (const loc of LOCATIONS) {
    for (const type of LISTING_TYPES) {
      params.push({ location: [loc.slug, type] });
    }
    params.push({ location: [loc.slug] });
  }
  return params;
}

export default async function LocationPage({ params }: PageProps) {
  const { location } = await params;
  const locationSlug = location[0];
  const listingType = location[1] ?? "cars-for-sale";

  const loc = getLocationBySlug(locationSlug);
  if (!loc) notFound();

  if (location[1] && !LISTING_TYPES.includes(listingType as (typeof LISTING_TYPES)[number])) {
    notFound();
  }

  const locName = getLocationDisplayName(loc);

  let cars: { id: string; make: string; model: string; year: number; price: number; mileage: number; transmission: string; imageUrl: string }[] = [];
  if (prisma) {
    const where = loc.zipCode
      ? { zipCode: loc.zipCode }
      : { city: { equals: loc.city, mode: "insensitive" as const } };
    cars = await prisma.car.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });
    if (cars.length === 0) {
      cars = await prisma.car.findMany({
        orderBy: { createdAt: "desc" },
      });
    }
  }

  type CarItem = (typeof cars)[number];

  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-zinc-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold text-zinc-900">
            iDrive
          </Link>
          <Link href="/#appointment" className="text-red-600 font-medium hover:underline">
            Book Appointment
          </Link>
        </div>
      </header>
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-semibold text-zinc-900 mb-6">
            {getH1(locName, listingType)}
          </h1>
          <p className="text-zinc-600 mb-12 max-w-2xl">
            Find quality pre-owned vehicles in {locName}. Browse our inventory of {listingType.replace(/-/g, " ")} below. All vehicles are inspected and ready for test drives. Visit iDrive today or book an appointment online.
          </p>

          {cars.length === 0 ? (
            <p className="text-zinc-500 py-12">
              No vehicles at the moment. <Link href="/#inventory" className="text-red-600 hover:underline">Check our main inventory</Link> for available vehicles.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cars.map((car: CarItem) => (
                <div
                  key={car.id}
                  className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[4/3] bg-zinc-100 relative flex items-center justify-center overflow-hidden">
                    {car.imageUrl ? (
                      <Image
                        src={car.imageUrl}
                        alt={`${car.make} ${car.model}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-zinc-400 text-sm">Car Image</span>
                    )}
                  </div>
                  <div className="p-5 space-y-3">
                    <h2 className="font-semibold text-zinc-900 text-lg">
                      {car.make} {car.model}
                    </h2>
                    <p className="text-red-600 font-bold text-xl">
                      ${car.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-zinc-500">
                      {car.year} | {car.mileage.toLocaleString()} mi | {car.transmission}
                    </p>
                    <a
                      href="#"
                      className="block w-full text-center bg-red-600 text-white font-medium py-3 rounded-lg hover:bg-red-700 transition-colors mt-2"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          <section className="mt-16 pt-12 border-t border-zinc-200 text-center">
            <p className="text-xl font-semibold text-zinc-900 mb-4">
              Ready to see a vehicle in person?
            </p>
            <Link
              href="/#appointment"
              className="inline-block bg-red-600 text-white font-medium px-8 py-4 rounded-lg hover:bg-red-700 transition-colors"
            >
              Book Appointment
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}
