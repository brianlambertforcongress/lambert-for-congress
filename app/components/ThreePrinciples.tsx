export default function ThreePrinciples() {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-16">
          My Campaign is Built on Three Principles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-800 border border-yellow-400 rounded-2xl p-8 transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              Your Money
            </h3>

            <p className="text-gray-300">
              Lower taxes.<br />
              Responsible spending.<br />
              End government waste.
            </p>
          </div>

          <div className="bg-slate-800 border border-yellow-400 rounded-2xl p-8 transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              Your Freedom
            </h3>

            <p className="text-gray-300">
              Defend the Constitution.<br />
              Protect individual liberty.<br />
              Limit federal overreach.
            </p>
          </div>

          <div className="bg-slate-800 border border-yellow-400 rounded-2xl p-8 transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              Your Vote
            </h3>

            <p className="text-gray-300">
              Honest representation.<br />
              Transparent government.<br />
              Every voice matters.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}