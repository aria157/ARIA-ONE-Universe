export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 dark:from-gray-900 dark:via-teal-900 dark:to-emerald-900">
      <main className="flex flex-col items-center justify-center px-6 py-12 text-center">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl md:text-8xl">
            AURX FreQ
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 sm:text-2xl">
            Tune into the Frequency of Tomorrow
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#explore"
              className="rounded-full bg-teal-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:bg-teal-700 hover:shadow-xl"
            >
              Explore
            </a>
            <a
              href="#join"
              className="rounded-full border-2 border-teal-600 px-8 py-3 text-lg font-semibold text-teal-600 transition-all hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-950"
            >
              Join Us
            </a>
          </div>
        </div>
        <div className="mt-16 text-sm text-gray-500 dark:text-gray-400">
          Part of the ARIA ONE Universe
        </div>
      </main>
    </div>
  );
}
