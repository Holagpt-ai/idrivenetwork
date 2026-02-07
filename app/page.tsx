export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900 mb-6 max-w-3xl">
          We Have Everything Your Car Needs
        </h1>
        <p className="text-lg sm:text-xl text-zinc-600 mb-10 max-w-xl">
          Premium vehicles. Trusted service. iDrive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#inventory"
            className="inline-block bg-red-600 text-white font-medium px-8 py-4 rounded-lg hover:bg-red-700 transition-colors"
          >
            Browse Inventory
          </a>
          <a
            href="#appointment"
            className="inline-block border-2 border-zinc-900 text-zinc-900 font-medium px-8 py-4 rounded-lg hover:bg-zinc-900 hover:text-white transition-colors"
          >
            Book Appointment
          </a>
        </div>
      </section>

      {/* Car Categories */}
      <section className="px-6 py-16 md:py-24 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 mb-10 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {["SUV", "Sedan", "Coupe", "Truck", "EV / Hybrid", "Luxury"].map(
              (cat) => (
                <div
                  key={cat}
                  className="bg-white rounded-lg border border-zinc-200 shadow-sm p-6 sm:p-8 hover:shadow-md hover:border-zinc-300 transition-all cursor-pointer"
                >
                  <h3 className="text-lg font-medium text-zinc-900">{cat}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section id="inventory" className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 mb-10">
            Featured Vehicles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "2024 Premium Sedan X",
                price: "$42,500",
                year: "2024",
                mileage: "12,000 mi",
                transmission: "Automatic",
              },
              {
                name: "Sport SUV Elite",
                price: "$56,900",
                year: "2023",
                mileage: "8,500 mi",
                transmission: "AWD",
              },
              {
                name: "Luxury Coupe GT",
                price: "$78,200",
                year: "2024",
                mileage: "5,200 mi",
                transmission: "Automatic",
              },
              {
                name: "Compact EV Pro",
                price: "$38,750",
                year: "2024",
                mileage: "3,100 mi",
                transmission: "Single-Speed",
              },
            ].map((car) => (
              <div
                key={car.name}
                className="bg-white rounded-lg border border-zinc-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-40 bg-zinc-100 flex items-center justify-center text-zinc-400 text-sm">
                  Car Image
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-zinc-900 mb-1">{car.name}</h3>
                  <p className="text-red-600 font-semibold text-lg mb-3">
                    {car.price}
                  </p>
                  <p className="text-sm text-zinc-600 mb-4">
                    {car.year} | {car.mileage} | {car.transmission}
                  </p>
                  <a
                    href="#"
                    className="block w-full text-center bg-red-600 text-white font-medium py-2.5 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16 md:py-24 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 mb-10 text-center">
            What Our Customers Say
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                quote:
                  "Best car buying experience I&apos;ve ever had. The team at iDrive made everything seamless.",
              },
              {
                name: "James T.",
                quote:
                  "Found my dream SUV here. Fair pricing and no pressure. Highly recommend.",
              },
              {
                name: "Emily R.",
                quote:
                  "Professional from start to finish. iDrive exceeded all my expectations.",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm"
              >
                <p className="text-zinc-700 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-medium text-zinc-900">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 mb-10">
            Latest From iDrive
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Top 10 Features to Look for in Your Next SUV",
                excerpt:
                  "Discover what matters most when choosing your next family vehicle.",
              },
              {
                title: "Electric vs Hybrid: Making the Right Choice",
                excerpt:
                  "A practical guide to help you decide which option fits your lifestyle.",
              },
              {
                title: "Winter Driving Tips for New Car Owners",
                excerpt:
                  "Stay safe on the road with these essential winter maintenance tips.",
              },
            ].map((post) => (
              <div
                key={post.title}
                className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-zinc-900 mb-2">{post.title}</h3>
                <p className="text-zinc-600 text-sm mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-red-600 font-medium hover:underline"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <p className="text-xl font-semibold">iDrive</p>
            <nav className="flex flex-wrap gap-6">
              <a href="#inventory" className="text-zinc-300 hover:text-white transition-colors">
                Inventory
              </a>
              <a href="#" className="text-zinc-300 hover:text-white transition-colors">
                Financing
              </a>
              <a href="#" className="text-zinc-300 hover:text-white transition-colors">
                Locations
              </a>
              <a href="#" className="text-zinc-300 hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>
          <div className="mt-10 pt-8 border-t border-zinc-700">
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} iDrive. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
