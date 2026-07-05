import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900 px-6 py-6 shadow-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        {/* LOGO / NAME */}
        <Link
          href="/"
          className="text-2xl font-extrabold uppercase tracking-widest text-white"
        >
          Brian <span className="text-yellow-400">Lambert</span>
        </Link>

        {/* NAVIGATION LINKS */}
        <div className="flex items-center space-x-6 text-sm font-semibold uppercase tracking-wider text-gray-300">
          <Link href="/issues" className="transition hover:text-yellow-400">
            Issues
          </Link>

          <Link href="/#volunteer" className="transition hover:text-yellow-400">
            Volunteer
          </Link>

          <Link href="/#contact" className="transition hover:text-yellow-400">
            Contact
          </Link>

          <Link
            href="/#donate"
            className="rounded-full bg-yellow-400 px-6 py-2 font-bold text-slate-900 transition hover:bg-yellow-300"
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
}