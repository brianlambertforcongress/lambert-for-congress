export default function IssuesPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">

      {/* Hero */}
      <section className="py-20 px-6 border-b border-slate-700">
        <div className="max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-[0.35em] text-yellow-400 font-semibold">
            Where I Stand
          </p>

          <h1 className="text-6xl font-extrabold mt-6">
            Your Money.
            <br />
            Your Freedom.
            <br />
            Your Vote.
          </h1>

          <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto leading-9">
            Every issue facing America can be viewed through one simple question:
            Does it protect your money, your freedom, and your right to choose
            your own future?
          </p>

        </div>
      </section>

      {/* Your Money */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold text-yellow-400 mb-12">
            💵 Your Money
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-800 rounded-2xl p-8 border border-yellow-400">
              <h3 className="text-2xl font-bold mb-4">
                Government Spending
              </h3>

              <p className="text-gray-300 leading-8">
                Washington doesn't have a revenue problem—it has a spending
                problem. Every tax dollar belongs to the American people before
                it belongs to the government.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-yellow-400">
              <h3 className="text-2xl font-bold mb-4">
                Inflation
              </h3>

              <p className="text-gray-300 leading-8">
                Reckless spending and poor fiscal policy hurt every American
                family through rising prices and reduced purchasing power.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Your Freedom */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold text-yellow-400 mb-12">
            🗽 Your Freedom
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-900 rounded-2xl p-8 border border-yellow-400">
              <h3 className="text-2xl font-bold mb-4">
                Constitutional Rights
              </h3>

              <p className="text-gray-300 leading-8">
                The Constitution limits government—not the people.
                Every elected official swears an oath to defend it.
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 border border-yellow-400">
              <h3 className="text-2xl font-bold mb-4">
                Border Security
              </h3>

              <p className="text-gray-300 leading-8">
                A nation without secure borders cannot remain secure.
                Immigration should be lawful, orderly, and fair.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Your Vote */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold text-yellow-400 mb-12">
            🗳 Your Vote
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-800 rounded-2xl p-8 border border-yellow-400">
              <h3 className="text-2xl font-bold mb-4">
                Government Accountability
              </h3>

              <p className="text-gray-300 leading-8">
                Public office is a public trust.
                Representatives work for the people—not political insiders.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-yellow-400">
              <h3 className="text-2xl font-bold mb-4">
                Veterans
              </h3>

              <p className="text-gray-300 leading-8">
                Those who served our nation deserve timely healthcare,
                accountability at the VA, and leaders who understand service.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}