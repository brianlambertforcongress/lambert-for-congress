import Link from "next/link";

const explorationLinks = [
  {
    title: "Meet Brian",
    description:
      "Learn how twenty years of Navy service, fatherhood, and community involvement shaped Brian’s commitment to public service.",
    href: "/about-brian",
    buttonText: "Read Brian’s Story",
  },
  {
    title: "Why Libertarian",
    description:
      "See why individual liberty, constitutional government, and personal responsibility guide Brian’s campaign.",
    href: "/why-libertarian",
    buttonText: "Why I’m a Libertarian",
  },
  {
    title: "Where I Stand",
    description:
      "Explore Brian’s positions on the issues affecting families, veterans, businesses, and communities across Florida’s 14th District.",
    href: "/issues",
    buttonText: "Explore All Issues",
  },
];

export default function ContinueExploring() {
  return (
    <section className="border-t border-slate-800 bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Continue Exploring
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Learn More About Brian and the Campaign
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {explorationLinks.map((item) => (
            <article
              key={item.href}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-7"
            >
              <h3 className="text-xl font-bold text-white">{item.title}</h3>

              <p className="mt-4 flex-1 leading-7 text-slate-300">
                {item.description}
              </p>

              <Link
                href={item.href}
                className="mt-7 inline-flex w-fit rounded-full border border-yellow-400 px-5 py-3 text-sm font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-slate-950"
              >
                {item.buttonText}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}