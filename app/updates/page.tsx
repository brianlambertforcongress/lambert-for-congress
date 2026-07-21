import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Campaign Updates",
  description:
    "Read the latest campaign updates, public statements, event recaps, and news from Brian Lambert for Congress in Florida's 14th District.",
  alternates: {
    canonical: "/updates",
  },
  openGraph: {
    title: "Campaign Updates | Brian Lambert for Congress",
    description:
      "Read the latest campaign updates, public statements, event recaps, and news from Brian Lambert for Congress.",
    url: "/updates",
    type: "website",
  },
};

type CampaignUpdate = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
};

const updates: CampaignUpdate[] = [
  {
    slug: "official-campaign-launch",
    title:
      "Brian Lambert Announces Campaign for Congress in Florida’s 14th District",
    date: "July 20, 2026",
    category: "Campaign Announcement",
    excerpt:
      "Navy veteran Brian Lambert officially launches his campaign for Congress, pledging to restore constitutional government, defend individual liberty, and put service before power.",
  },
];

export default function CampaignUpdatesPage() {
  return (
    <div className="bg-slate-900 text-white">
      <section className="border-b border-slate-800 px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
            From the Campaign
          </p>

          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">
            Campaign Updates
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Follow the campaign, read Brian&apos;s latest statements, and stay
            informed about events and activity across Florida&apos;s 14th
            Congressional District.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {updates.map((update) => (
              <Link
                key={update.slug}
                href={`/updates/${update.slug}`}
                className="group block h-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <article className="flex h-full flex-col rounded-2xl border border-slate-700 bg-slate-800 p-7 shadow-lg transition group-hover:border-yellow-400">
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
                    <span className="font-semibold uppercase tracking-wider text-yellow-400">
                      {update.category}
                    </span>

                    <span className="text-gray-400">{update.date}</span>
                  </div>

                  <h2 className="text-2xl font-bold leading-tight text-white">
                    {update.title}
                  </h2>

                  <p className="mt-4 flex-1 leading-7 text-gray-300">
                    {update.excerpt}
                  </p>

                  <span className="mt-6 inline-flex font-semibold text-yellow-400 transition group-hover:text-yellow-300">
                    Read the full update
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}