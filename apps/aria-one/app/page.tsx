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
          
          {/* Universe Links */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:gap-6">
            <div className="rounded-2xl border-2 border-rose-200 bg-gradient-to-br from-pink-50 to-rose-50 p-6 shadow-md transition-all hover:shadow-xl dark:border-rose-800 dark:from-pink-900/20 dark:to-rose-900/20">
              <h3 className="mb-2 text-2xl font-bold text-rose-700 dark:text-rose-300">KikiX</h3>
              <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">Experience the Future of Innovation</p>
              <a
                href="https://kikix.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-rose-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-rose-700"
              >
                Visit KikiX →
              </a>
            </div>
            
            <div className="rounded-2xl border-2 border-teal-200 bg-gradient-to-br from-cyan-50 to-teal-50 p-6 shadow-md transition-all hover:shadow-xl dark:border-teal-800 dark:from-teal-900/20 dark:to-emerald-900/20">
              <h3 className="mb-2 text-2xl font-bold text-teal-700 dark:text-teal-300">AURX FreQ</h3>
              <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">Tune into the Frequency of Tomorrow</p>
              <a
                href="https://aurx-freq.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-teal-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
              >
                Visit AURX FreQ →
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-sm text-gray-500 dark:text-gray-400">
          Part of the ARIA ONE Universe
        </div>
      </main>
    </div>
  );
}
