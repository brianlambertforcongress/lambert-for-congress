import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-700 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <Link href="/" className="group">
          <div>
            <h1 className="text-2xl font-bold text-yellow-400 group-hover:text-yellow-300 transition">
              Lambert for Congress
            </h1>

            <p className="text-sm text-gray-300">
              Florida&apos;s 14th Congressional District
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8 text-white font-medium">

          <Link
            href="/"
            className="hover:text-yellow-400 transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-yellow-400 transition"
          >
            About
          </Link>

          <Link
            href="/why-libertarian"
            className="hover:text-yellow-400 transition"
          >
            Why Libertarian
          </Link>

          <Link
            href="/issues"
            className="hover:text-yellow-400 transition"
          >
            Issues
          </Link>

          <Link
            href="/#volunteer"
            className="hover:text-yellow-400 transition"
          >
            Get Involved
          </Link>

          <Link
            href="/#donate"
            className="bg-yellow-400 text-slate-900 px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Donate
          </Link>

        </div>

      </div>
    </nav>
  );
}