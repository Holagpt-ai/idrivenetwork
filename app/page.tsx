export default function Home() {
  const categories = [
    { name: "SUV", icon: "🚙" },
    { name: "Sedan", icon: "🚗" },
    { name: "Coupe", icon: "🏎️" },
    { name: "Truck", icon: "🛻" },
    { name: "EV / Hybrid", icon: "⚡" },
    { name: "Luxury", icon: "✨" },
  ];

  const featuredCars = [
    {
      make: "BMW",
      model: "330i xDrive",
      price: "$45,990",
      year: "2024",
      mileage: "8,200 mi",
      transmission: "Automatic",
    },
    {
      make: "Mercedes-Benz",
      model: "GLC 300",
      price: "$52,450",
      year: "2023",
      mileage: "14,500 mi",
      transmission: "9G-Tronic",
    },
    {
      make: "Porsche",
      model: "911 Carrera",
      price: "$118,200",
      year: "2024",
      mileage: "2,100 mi",
      transmission: "PDK",
    },
    {
      make: "Tesla",
      model: "Model 3 Long Range",
      price: "$41,990",
      year: "2024",
      mileage: "4,800 mi",
      transmission: "Single-Speed",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      quote:
        "Best car buying experience I've ever had. The team at iDrive made everything seamless—from test drive to paperwork.",
    },
    {
      name: "James Thompson",
      quote:
        "Found my dream SUV here. Fair pricing, no pressure, and they even helped with financing. Highly recommend.",
    },
    {
      name: "Emily Rodriguez",
      quote:
        "Professional from start to finish. iDrive exceeded all my expectations. Will definitely be back for our next vehicle.",
    },
  ];

  const blogPosts = [
    {
      title: "Top 10 Features to Look for in Your Next SUV",
      excerpt:
        "Discover what matters most when choosing your next family vehicle. Safety, space, and tech—we break it down.",
    },
    {
      title: "Electric vs Hybrid: Making the Right Choice",
      excerpt:
        "A practical guide to help you decide which option fits your lifestyle and budget in 2024.",
    },
    {
      title: "Winter Driving Tips for New Car Owners",
      excerpt:
        "Stay safe on the road with these essential winter maintenance and driving tips from our experts.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 py-24 text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-placeholder.svg')" }}
        />
        <div className="absolute inset-0 bg-zinc-900/70" />
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6 max-w-3xl drop-shadow-lg">
            We Have Everything Your Car Needs
          </h1>
          <p className="text-lg sm:text-xl text-zinc-200 mb-10 max-w-xl mx-auto drop-shadow-md">
            Premium vehicles. Trusted service. iDrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#inventory"
              className="inline-block bg-red-600 text-white font-medium px-8 py-4 rounded-lg hover:bg-red-700 transition-colors shadow-lg"
            >
              Browse Inventory
            </a>
            <a
              href="#appointment"
              className="inline-block border-2 border-white text-white font-medium px-8 py-4 rounded-lg hover:bg-white hover:text-zinc-900 transition-colors"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Car Categories */}
      <section className="px-6 py-16 md:py-24 bg-zinc-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 mb-12 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="bg-white rounded-xl border border-zinc-200 shadow-sm p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 hover:border-zinc-300 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-14 h-14 rounded-lg bg-zinc-100 flex items-center justify-center text-2xl mb-4 group-hover:bg-red-50 transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-medium text-zinc-900">{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section id="inventory" className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 mb-12">
            Featured Vehicles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCars.map((car) => (
              <div
                key={`${car.make}-${car.model}`}
                className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-zinc-100 relative flex items-center justify-center">
                  <span className="text-zinc-400 text-sm">Car Image</span>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="font-semibold text-zinc-900 text-lg">
                    {car.make} {car.model}
                  </h3>
                  <p className="text-red-600 font-bold text-xl">{car.price}</p>
                  <p className="text-sm text-zinc-500">
                    {car.year} | {car.mileage} | {car.transmission}
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16 md:py-24 bg-zinc-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl border border-zinc-200 p-8 shadow-sm"
              >
                <p className="text-zinc-700 text-lg leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-semibold text-zinc-900">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 mb-12">
            Latest From iDrive
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-zinc-100 flex items-center justify-center">
                  <span className="text-zinc-400 text-sm">Image</span>
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
                    className="text-red-600 font-medium hover:underline inline-block"
                  >
                    Read More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
            <div>
              <p className="text-2xl font-semibold mb-4">iDrive</p>
              <div className="flex gap-4">
                {["fb", "tw", "ig", "in"].map((s) => (
                  <span
                    key={s}
                    className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-zinc-400 text-xs hover:bg-zinc-600 hover:text-white transition-colors cursor-pointer"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <nav className="flex flex-wrap gap-8 md:gap-12">
              <a
                href="#inventory"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Inventory
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Financing
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Locations
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="mt-14 pt-8 border-t border-zinc-700">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} iDrive. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
