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
            <Link
              href="/updates/official-campaign-launch"
              className="group block h-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <article className="flex h-full flex-col rounded-2xl border border-slate-700 bg-slate-800 p-7 shadow-lg transition group-hover:border-yellow-400">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
                  <span className="font-semibold uppercase tracking-wider text-yellow-400">
                    Campaign Announcement
                  </span>

                  <span className="text-gray-400">July 20, 2026</span>
                </div>

                <h2 className="text-2xl font-bold leading-tight text-white">
                  Brian Lambert Announces Campaign for Congress in Florida’s
                  14th District
                </h2>

                <p className="mt-4 flex-1 leading-7 text-gray-300">
                  Navy veteran Brian Lambert officially launches his campaign
                  for Congress, pledging to restore constitutional government,
                  defend individual liberty, and put service before power.
                </p>

                <span className="mt-6 inline-flex font-semibold text-yellow-400 transition group-hover:text-yellow-300">
                  Read the full update
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </span>
              </article>
            </Link>

            <article className="flex h-full flex-col rounded-2xl border border-slate-700 bg-slate-800 p-7 shadow-lg">
              <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
                <span className="font-semibold uppercase tracking-wider text-yellow-400">
                  On the Campaign Trail
                </span>

                <span className="text-gray-400">August 2026</span>
              </div>

              <h2 className="text-2xl font-bold leading-tight text-white">
                Upcoming Campaign Events
              </h2>

              <div className="mt-5 space-y-4 leading-7 text-gray-300">
                <p>
                  <strong className="text-yellow-400">August 6:</strong>{" "}
                  Brandon / Riverview Chamber Candidate Connection
                </p>

                <p>
                  <strong className="text-yellow-400">August 11:</strong>{" "}
                  Tampa Bay Chamber Political Hob Nob — Table 27
                </p>

                <p>
                  <strong className="text-yellow-400">August 13:</strong>{" "}
                  BOCC Meeting
                </p>

                <p>
                  <strong className="text-yellow-400">August 18:</strong>{" "}
                  LibertyDad Podcast
                </p>

                <p>
                  <strong className="text-yellow-400">August 28:</strong>{" "}
                  Reclaiming My Mind Podcast
                </p>
              </div>
            </article>
            <a
  href="https://www.tampafp.com/navy-veteran-brian-lambert-launches-congressional-bid-in-floridas-14th-district/"
  target="_blank"
  rel="noopener noreferrer"
  className="group block h-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-slate-900"
>
  <article className="flex h-full flex-col rounded-2xl border border-slate-700 bg-slate-800 p-7 shadow-lg transition group-hover:border-yellow-400">
    <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
      <span className="font-semibold uppercase tracking-wider text-yellow-400">
        In the News
      </span>

      <span className="text-gray-400">
        Tampa Free Press · July 21, 2026
      </span>
    </div>

    <h2 className="text-2xl font-bold leading-tight text-white">
      Navy Veteran Brian Lambert Launches Congressional Bid in Florida’s 14th
      District
    </h2>

    <p className="mt-4 flex-1 leading-7 text-gray-300">
      Tampa Free Press covers Brian Lambert&apos;s campaign launch, Navy
      service, constitutional platform, commitment to accountability, and
      advocacy for veterans.
    </p>

    <span className="mt-6 inline-flex font-semibold text-yellow-400 transition group-hover:text-yellow-300">
      Read the Tampa Free Press story
      <span aria-hidden="true" className="ml-2">
        ↗
      </span>
    </span>
  </article>
</a>
          </div>
        </div>
      </section>
    </div>
  );
}