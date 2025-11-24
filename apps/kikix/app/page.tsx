export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 dark:from-gray-900 dark:via-pink-900 dark:to-red-900">
      <main className="flex flex-col items-center justify-center px-6 py-12 text-center">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl md:text-8xl">
            KikiX
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 sm:text-2xl">
            Experience the Future of Innovation
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#discover"
              className="rounded-full bg-rose-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:bg-rose-700 hover:shadow-xl"
            >
              Discover
            </a>
            <a
              href="#connect"
              className="rounded-full border-2 border-rose-600 px-8 py-3 text-lg font-semibold text-rose-600 transition-all hover:bg-rose-50 dark:border-rose-400 dark:text-rose-400 dark:hover:bg-rose-950"
            >
              Connect
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
