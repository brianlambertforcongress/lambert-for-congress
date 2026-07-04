import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-900 border-b border-slate-800 py-6 px-6 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* LOGO / NAME */}
        <Link href="/" className="text-2xl font-extrabold uppercase tracking-widest text-white">
          Brian <span className="text-yellow-400">Lambert</span>
        </Link>

        {/* NAVIGATION LINKS */}
        <div className="flex items-center space-x-6 text-sm font-semibold tracking-wider uppercase text-gray-300">
          <Link href="/issues" className="hover:text-yellow-400 transition">
            Issues
          </Link>
          <a href="#volunteer" className="hover:text-yellow-400 transition">
            Volunteer
          </a>
          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
          <a 
            href="#donate" 
            className="bg-yellow-400 text-slate-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition"
          >
            Donate
          </a>
        </div>

      </div>
    </nav>
  );
}