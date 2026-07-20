import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Issues and Priorities for FL-14",
  description:
    "Explore Brian Lambert's positions on fiscal responsibility, individual liberty, veterans, national defense, healthcare, election integrity, and other issues affecting Florida's 14th District.",
};
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
    title: "Second Amendment",
    href: "/issues/second-amendment",
    description:
      "Protect the right to keep and bear arms and defend the Constitution without compromise.",
  },
  {
    title: "Veterans",
    href: "/issues/veterans",
    description:
      "America must keep its promises to the men and women who served.",
  },
  {
    title: "Border Security & Immigration",
    href: "/issues/border-security",
    description:
      "Secure every border and port of entry while supporting legal immigration and the rule of law.",
  },
  {
    title: "Healthcare Reform",
    href: "/issues/healthcare",
    description:
      "Restore patient choice, medical freedom, price transparency, and competition while reducing unnecessary federal interference in healthcare.",
  },
  {
    title: "Education",
    href: "/issues/education",
    description:
      "Education is not one-size-fits-all. Empower parents, support teachers, and give every child the opportunity to succeed.",
  },
  {
    title: "National Defense",
    href: "/issues/national-defense",
    description:
      "Peace through strength, constitutional accountability, and unwavering support for our troops.",
  },
  {
    title: "Economy & Small Business",
    href: "/issues/economy-small-business",
    description:
      "Lower taxes, reduce regulation, and let American entrepreneurs succeed.",
  },
  {
    title: "Election Integrity",
    href: "/issues/election-integrity",
    description:
      "Restore confidence through transparency, accountability, and secure elections.",
  },
  {
    title: "Energy & American Independence",
    href: "/issues/energy",
    description:
      "Reliable, affordable energy strengthens our economy, protects national security, and reduces dependence on foreign adversaries.",
  },
];

export default function IssuesPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <section className="border-b border-slate-800 px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-semibold uppercase tracking-[0.35em] text-yellow-400">
            BEFORE YOU VOTE
          </p>

          <h1 className="mt-6 text-6xl font-extrabold">
            Your Money.
            <br />
            Your Freedom.
            <br />
            Your Vote.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-300">
            Every issue deserves more than a campaign slogan. Here&apos;s
            exactly where I stand.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {issues.map((issue) => (
              <Link
                key={issue.title}
                href={issue.href}
                className="rounded-2xl border border-yellow-400 bg-slate-800 p-8 transition duration-300 hover:bg-slate-700"
              >
                <h2 className="mb-4 text-3xl font-bold">{issue.title}</h2>

                <p className="leading-8 text-slate-300">
                  {issue.description}
                </p>

                <p className="mt-8 font-semibold text-yellow-400">
                  Read My Position →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}