export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-700 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <div>
          <h1 className="text-2xl font-bold text-yellow-400">
            Lambert for Congress
          </h1>
          <p className="text-sm text-gray-300">
            Florida's 14th Congressional District
          </p>
        </div>

        <div className="flex gap-8 text-white">
          <a href="#about" className="hover:text-yellow-400">
            About
          </a>

          <a href="#issues" className="hover:text-yellow-400">
            Issues
          </a>

          <a href="#volunteer" className="hover:text-yellow-400">
            Volunteer
          </a>

          <a
            href="#donate"
            className="bg-yellow-400 text-slate-900 px-5 py-2 rounded-full font-semibold hover:bg-yellow-300"
          >
            Donate
          </a>
        </div>

      </div>
    </nav>
  );
}