import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900 px-4 py-4 shadow-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 md:flex-row md:justify-between">
        <Link
          href="/"
          className="text-center text-xl font-extrabold uppercase tracking-widest text-white md:text-2xl"
        >
          Brian <span className="text-yellow-400">Lambert</span>
          <span className="ml-2 hidden text-sm font-semibold tracking-[0.3em] text-gray-300 md:inline">
            FOR CONGRESS
          </span>
        </Link>

        <div className="flex w-full flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wider text-gray-300 md:w-auto md:flex-nowrap md:gap-6 md:text-sm">
          <Link
            href="/about-brian"
            className="transition hover:text-yellow-400"
          >
            About Brian
          </Link>

          <Link
            href="/why-libertarian"
            className="transition hover:text-yellow-400"
          >
            Why Libertarian
          </Link>

          <Link href="/issues" className="transition hover:text-yellow-400">
            Issues
          </Link>

          <Link href="/updates" className="transition hover:text-yellow-400">
            Updates
          </Link>

          <Link href="/#volunteer" className="transition hover:text-yellow-400">
            Volunteer
          </Link>

          <Link href="/#contact" className="transition hover:text-yellow-400">
            Contact
          </Link>

          <Link
            href="/#donate"
            className="rounded-full bg-yellow-400 px-4 py-2 font-bold text-slate-900 transition hover:bg-yellow-300 md:px-6"
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
}