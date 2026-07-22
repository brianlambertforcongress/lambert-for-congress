import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brian Lambert Announces Campaign for Congress",
  description:
    "Navy veteran Brian Lambert officially announces his campaign for Congress in Florida's 14th District, focused on constitutional government, liberty, and accountability.",
  alternates: {
    canonical: "/updates/official-campaign-launch",
  },
  openGraph: {
    title:
      "Brian Lambert Announces Campaign for Congress in Florida’s 14th District",
    description:
      "Brian Lambert launches his campaign for Congress with a commitment to constitutional government, individual liberty, and service before power.",
    url: "/updates/official-campaign-launch",
    type: "article",
    publishedTime: "2026-07-20",
    authors: ["Brian Lambert"],
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Brian Lambert Announces Campaign for Congress in Florida’s 14th District",
  description:
    "Navy veteran Brian Lambert officially announces his campaign for Congress in Florida's 14th District.",
  datePublished: "2026-07-20",
  dateModified: "2026-07-20",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.brianlambertforcongress.com/updates/official-campaign-launch",
  },
  author: {
    "@type": "Person",
    "@id": "https://www.brianlambertforcongress.com/#brian-lambert",
    name: "Brian Lambert",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.brianlambertforcongress.com/#organization",
    name: "Brian Lambert for Congress",
  },
};

const inlineLinkClasses =
  "font-semibold text-yellow-400 underline decoration-yellow-400/40 underline-offset-4 transition hover:text-yellow-300";

export default function OfficialCampaignLaunchPage() {
  return (
    <article className="bg-slate-900 px-6 py-16 text-white md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <div className="mx-auto max-w-3xl">
        <Link
          href="/updates"
          className="font-semibold text-yellow-400 transition hover:text-yellow-300"
        >
          ← Back to Campaign Updates
        </Link>

        <header className="mt-10 border-b border-slate-700 pb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Campaign Announcement
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Brian Lambert Announces Campaign for Congress in Florida’s 14th
            District
          </h1>

          <p className="mt-6 text-gray-400">July 20, 2026</p>
        </header>

        <div className="space-y-7 pt-10 text-lg leading-8 text-gray-300">
          <p>
            Today, I am officially announcing my campaign to represent
            Florida&apos;s 14th Congressional District in the United States
            House of Representatives.
          </p>

          <p>
            For twenty years, I served our country in the United States Navy.
            That service taught me that leadership begins with responsibility,
            that every decision has consequences, and that an oath is more than
            something you say once.
          </p>

          <p className="text-2xl font-bold text-white">
            That oath has no expiration.
          </p>

          <p>
            After retiring from the Navy, my service continued as a father,
            coach, volunteer, and advocate for veterans in our community. I
            have seen firsthand what happens when government becomes too
            distant from the people it is supposed to serve. You can{" "}
            <Link href="/about-brian" className={inlineLinkClasses}>
              read more about my life, service, and background
            </Link>
            .
          </p>

          <p>
            Families work harder while their money buys less. Veterans fight
            through unnecessary bureaucracy for benefits they earned. Small
            businesses face rules written by people who have never had to meet
            a payroll. And too many elected officials seem more concerned with
            preserving their power than protecting our freedom. My{" "}
            <Link
              href="/issues/veterans"
              className={inlineLinkClasses}
            >
              veterans plan
            </Link>{" "}
            explains how I will fight for choice, accountability, and care that
            puts veterans first.
          </p>

          <p>
            I am not running to become a career politician. I am running
            because our children deserve better than the country we are
            currently poised to hand them.
          </p>

          <p>
            My campaign is built around three principles:{" "}
            <strong className="text-white">Life, Liberty, and Voice.</strong>
          </p>

          <p>
            I believe the Constitution limits the government, not the citizen.
            I believe Washington must stop spending money it does not have. My{" "}
            <Link
              href="/issues/fiscal-responsibility"
              className={inlineLinkClasses}
            >
              fiscal responsibility plan
            </Link>{" "}
            lays out how we can demand balanced budgets, honest accounting, and
            an end to reckless spending. I believe individual rights are not
            gifts from politicians. And I believe the people of Florida&apos;s
            14th District deserve a representative who will listen, show up,
            tell the truth, and put service before power.
          </p>

          <blockquote className="border-l-4 border-yellow-400 bg-slate-800 px-6 py-5 text-2xl font-bold leading-9 text-white">
            Every bill I consider will begin with one question: Is this
            constitutional?
          </blockquote>

          <p>
            This campaign will not be about Left versus Right. Freedom is not
            Left or Right. It is American.
          </p>

          <p>
            This race will be difficult. Real change always is. But I have
            never believed that difficult means impossible. Together, we can
            restore accountability, defend individual liberty, and give the
            people of this district a real voice in Washington. You can{" "}
            <Link href="/issues" className={inlineLinkClasses}>
              explore all of my campaign positions
            </Link>{" "}
            to see where I stand.
          </p>

          <p className="text-2xl font-extrabold text-yellow-400">
            Your Money. Your Freedom. Your Vote.
          </p>

          <p className="font-bold text-white">
            I am Brian Lambert, and I am running for Congress.
          </p>

          <p>
            To ask a question, share a concern, invite me to speak, or contact
            the campaign,{" "}
            <Link href="/#contact" className={inlineLinkClasses}>
              send a message to Brian Lambert for Congress
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-700 pt-10 sm:flex-row">
          <Link
            href="/issues"
            className="rounded-md bg-yellow-400 px-6 py-3 text-center font-bold text-slate-900 transition hover:bg-yellow-300"
          >
            Explore Brian&apos;s Positions
          </Link>

          <Link
            href="/#volunteer"
            className="rounded-md border border-yellow-400 px-6 py-3 text-center font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-slate-900"
          >
            Volunteer for Brian&apos;s Campaign
          </Link>
        </div>
      </div>
    </article>
  );
}