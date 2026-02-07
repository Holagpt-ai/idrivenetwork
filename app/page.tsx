import Image from "next/image";
import AppointmentForm from "./AppointmentForm";
import SubscribeForm from "./SubscribeForm";
import { INVENTORY } from "@/lib/inventory";

const CARS = INVENTORY.map((c, i) => ({
  id: String(i + 1),
  ...c,
  imageUrl: [
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600",
    "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600",
    "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600",
    "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600",
    "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600",
    "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600",
    "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600",
    "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600",
  ][i],
}));


const TESTIMONIALS = [
  { name: "Sarah Mitchell", quote: "Best car buying experience I've ever had. The team at iDrive made everything seamless—from test drive to paperwork.", initial: "SM" },
  { name: "James Thompson", quote: "Found my dream SUV here. Fair pricing, no pressure, and they even helped with financing. Highly recommend.", initial: "JT" },
  { name: "Emily Rodriguez", quote: "Professional from start to finish. iDrive exceeded all my expectations. Will definitely be back for our next vehicle.", initial: "ER" },
];

const BLOG_POSTS = [
  { title: "Top 10 Features to Look for in Your Next SUV", excerpt: "Discover what matters most when choosing your next family vehicle.", imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600" },
  { title: "Electric vs Hybrid: Making the Right Choice", excerpt: "A practical guide to help you decide which option fits your lifestyle.", imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600" },
  { title: "Winter Driving Tips for New Car Owners", excerpt: "Stay safe on the road with these essential winter maintenance tips.", imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pb-16 md:pb-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1920"
          alt="Premium vehicles"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-zinc-900/60" aria-hidden />
        <div className="relative z-10 max-w-6xl mx-auto w-full px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 max-w-2xl">
            Find Your Perfect Ride
          </h1>
          <p className="text-lg sm:text-xl text-zinc-200 mb-8 max-w-xl">
            Premium pre-owned vehicles. Quality inspected. Transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#inventory"
              className="inline-block bg-red-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-red-700 transition-colors shadow-lg text-center"
            >
              Browse Inventory
            </a>
            <a
              href="#appointment"
              className="inline-block border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-zinc-900 transition-colors text-center"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section id="inventory" className="px-6 py-12 md:py-20 bg-zinc-50 -mt-px">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
                Featured Vehicles
              </h2>
              <p className="text-zinc-600 max-w-2xl">
                Explore our handpicked selection of quality pre-owned vehicles.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["All", "SUV", "Sedan", "Coupe", "Truck", "EV / Hybrid", "Luxury"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    cat === "All"
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-zinc-200/80 text-zinc-700 hover:bg-zinc-300/90"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CARS.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={car.imageUrl}
                    alt={`${car.make} ${car.model}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-zinc-900 text-lg mb-1">
                    {car.year} {car.make} {car.model}
                  </h3>
                  <p className="text-red-600 font-bold text-xl mb-3">
                    ${car.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-zinc-500 mb-4">
                    {car.fuelType} · {car.transmission}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="flex-1 text-center bg-red-600 text-white font-medium py-2.5 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      View Details
                    </a>
                    <a
                      href="#"
                      className="flex-1 text-center border border-zinc-300 text-zinc-900 font-medium py-2.5 rounded-lg hover:bg-zinc-50 transition-colors"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16 md:py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 overflow-x-auto pb-4 sm:overflow-visible sm:pb-0">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-zinc-800 rounded-xl p-8 flex-shrink-0 sm:flex-shrink min-w-[280px] sm:min-w-0"
              >
                <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white font-semibold text-lg mb-6">
                  {t.initial}
                </div>
                <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-semibold text-white">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-12">
            Latest From iDrive
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.title}
                className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-zinc-900 text-lg mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="text-red-600 font-semibold hover:underline inline-block"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="px-6 py-16 md:py-20 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-xl mx-auto mb-4 text-red-600 font-bold">✓</div>
              <h3 className="font-semibold text-zinc-900 mb-2">Trusted Local Dealer</h3>
              <p className="text-zinc-600 text-sm">Serving our community with integrity and transparency.</p>
            </div>
            <div>
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-xl mx-auto mb-4 text-red-600 font-bold">✓</div>
              <h3 className="font-semibold text-zinc-900 mb-2">Quality Inspected</h3>
              <p className="text-zinc-600 text-sm">Every vehicle undergoes rigorous multi-point inspection.</p>
            </div>
            <div>
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-xl mx-auto mb-4 text-red-600 font-bold">✓</div>
              <h3 className="font-semibold text-zinc-900 mb-2">Easy Financing</h3>
              <p className="text-zinc-600 text-sm">Flexible plans. Get pre-approved in minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment */}
      <section id="appointment" className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-10 text-center">
            Book an Appointment
          </h2>
          <AppointmentForm />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-14 md:py-16 bg-zinc-100 text-center">
        <p className="text-xl sm:text-2xl font-bold text-zinc-900 mb-6">
          Ready to find your next car?
        </p>
        <a
          href="#inventory"
          className="inline-block bg-red-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-red-700 transition-colors"
        >
          Browse Inventory
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <p className="text-2xl font-bold mb-4">iDrive</p>
              <p className="text-zinc-400 text-sm mb-4">Premium pre-owned vehicles. Quality you can trust.</p>
              <div className="flex gap-3">
                {["fb", "tw", "ig", "in"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-zinc-400 text-xs hover:bg-zinc-600 hover:text-white transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
            <nav>
              <h4 className="font-semibold mb-4">Inventory</h4>
              <ul className="space-y-2">
                <li><a href="#inventory" className="text-zinc-400 hover:text-white transition-colors">All Vehicles</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">SUVs</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Sedans</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Trucks</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">EV / Hybrid</a></li>
              </ul>
            </nav>
            <nav>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#appointment" className="text-zinc-400 hover:text-white transition-colors">Book Appointment</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Financing</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Trade-In</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Service</a></li>
              </ul>
            </nav>
            <div>
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <SubscribeForm />
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-700">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} iDrive. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
