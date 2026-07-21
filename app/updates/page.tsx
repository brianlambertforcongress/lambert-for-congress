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

const updates: CampaignUpdate[] = [];

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
          {updates.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {updates.map((update) => (
                <article
                  key={update.slug}
                  className="flex h-full flex-col rounded-2xl border border-slate-700 bg-slate-800 p-7 shadow-lg"
                >
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

                  <Link
                    href={`/updates/${update.slug}`}
                    className="mt-6 inline-flex font-semibold text-yellow-400 transition hover:text-yellow-300"
                  >
                    Read the full update
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-3xl rounded-2xl border border-slate-700 bg-slate-800 p-8 text-center shadow-lg md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
                More to Come
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                The First Campaign Update Is Coming Soon
              </h2>

              <p className="mt-5 leading-7 text-gray-300">
                This page will feature campaign announcements, public
                statements, event recaps, and updates from communities across
                Florida&apos;s 14th Congressional District.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/about-brian"
                  className="rounded-md border border-yellow-400 px-6 py-3 font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-slate-900"
                >
                  Meet Brian
                </Link>

                <Link
                  href="/issues"
                  className="rounded-md bg-yellow-400 px-6 py-3 font-bold text-slate-900 transition hover:bg-yellow-300"
                >
                  See Where I Stand
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}