export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <main className="flex flex-col items-center justify-center px-6 py-12 text-center">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl md:text-8xl">
            ARIA ONE
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 sm:text-2xl">
            Welcome to the ARIA ONE Universe
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#about"
              className="rounded-full bg-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:bg-indigo-700 hover:shadow-xl"
            >
              Learn More
            </a>
            <a
              href="#explore"
              className="rounded-full border-2 border-indigo-600 px-8 py-3 text-lg font-semibold text-indigo-600 transition-all hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950"
            >
              Explore
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
