export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <section className="text-center max-w-xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-zinc-900 mb-4">
          iDrive
        </h1>
        <p className="text-lg sm:text-xl text-zinc-600 mb-10">
          Cars that move you
        </p>
        <a
          href="#"
          className="inline-block bg-zinc-900 text-white font-medium px-8 py-4 rounded-lg hover:bg-zinc-800 transition-colors"
        >
          Browse Inventory
        </a>
      </section>
    </main>
  );
}
