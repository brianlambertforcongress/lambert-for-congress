import Link from "next/link";

const issues = [
  {
    title: "Fiscal Responsibility",
    href: "/issues/fiscal-responsibility",
    description:
      "Restore fiscal discipline, balance the budget, and protect future generations from crushing debt.",
  },
  {
    title: "Constitutional Government",
    href: "/issues/constitutional-government",
    description:
      "The Constitution limits the government—not the people. Every law begins there.",
  },
  {
    title: "Individual Liberty",
    href: "/issues/individual-liberty",
    description:
      "Protect the freedoms guaranteed by the Bill of Rights and defend individual choice.",
  },
  {
    title: "Veterans",
    href: "/issues/veterans",
    description:
      "America must keep its promises to the men and women who served.",
  },
  {
    title: "Economy & Small Business",
    href: "/issues/economy-small-business",
    description:
      "Create an economy where families and entrepreneurs can thrive.",
  },
  {
    title: "Election Reform",
    href: "/issues/election-reform",
    description:
      "Restore trust through accountability, transparency, and ethical leadership.",
  },
  {
    title: "Border & National Security",
    href: "/issues/border-national-security",
    description:
      "A secure nation begins with secure borders and a strong national defense.",
  },
];

export default function IssuesPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">

      <section className="py-20 px-6 border-b border-slate-800">
        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.35em] text-yellow-400 font-semibold">
            Where I Stand
          </p>

          <h1 className="mt-6 text-6xl font-extrabold">
            Your Money.
            <br />
            Your Freedom.
            <br />
            Your Vote.
          </h1>

          <p className="mt-8 text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Every issue deserves more than a campaign slogan.
            Here's exactly where I stand.
          </p>

        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-8">

            {issues.map((issue) => (
              <Link
                key={issue.title}
                href={issue.href}
                className="bg-slate-800 border border-yellow-400 rounded-2xl p-8 hover:bg-slate-700 transition duration-300"
              >
                <h2 className="text-3xl font-bold mb-4">
                  {issue.title}
                </h2>

                <p className="text-slate-300 leading-8">
                  {issue.description}
                </p>

                <p className="mt-8 text-yellow-400 font-semibold">
                  Learn More →
                </p>
              </Link>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}