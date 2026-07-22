import Link from "next/link";

export default function ThreePrinciples() {
  return (
    <section className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-5xl font-bold text-yellow-400">
          My Campaign Is Built on Three Principles
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col rounded-2xl border border-yellow-400 bg-slate-800 p-8 transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="mb-4 text-3xl font-bold text-yellow-400">
              Your Money
            </h3>

            <p className="mb-8 flex-grow text-gray-300">
              Lower taxes.
              <br />
              Responsible spending.
              <br />
              End government waste.
            </p>

            <Link
              href="/issues/fiscal-responsibility"
              className="font-bold text-yellow-400 hover:text-yellow-300"
            >
              Read Brian&apos;s Fiscal Responsibility Plan →
            </Link>
          </div>

          <div className="flex flex-col rounded-2xl border border-yellow-400 bg-slate-800 p-8 transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="mb-4 text-3xl font-bold text-yellow-400">
              Your Freedom
            </h3>

            <p className="mb-8 flex-grow text-gray-300">
              Defend the Constitution.
              <br />
              Protect individual liberty.
              <br />
              Limit federal overreach.
            </p>

            <Link
              href="/issues/individual-liberty"
              className="font-bold text-yellow-400 hover:text-yellow-300"
            >
              See Brian&apos;s Individual Liberty Position →
            </Link>
          </div>

          <div className="flex flex-col rounded-2xl border border-yellow-400 bg-slate-800 p-8 transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="mb-4 text-3xl font-bold text-yellow-400">
              Your Vote
            </h3>

            <p className="mb-8 flex-grow text-gray-300">
              Honest representation.
              <br />
              Transparent government.
              <br />
              Every voice matters.
            </p>

            <Link
              href="/issues/election-integrity"
              className="font-bold text-yellow-400 hover:text-yellow-300"
            >
              Read Brian&apos;s Election Integrity Position →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}