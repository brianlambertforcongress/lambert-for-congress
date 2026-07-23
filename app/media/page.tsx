import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Media Resources | Brian Lambert for Congress",
  description:
    "Official biography, campaign headshot, press release, website, and media contact information for Brian Lambert for Congress.",
  alternates: {
    canonical: "/media",
  },
};

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-slate-900 px-6 py-16 text-white md:py-20">
      <div className="mx-auto max-w-6xl">
        <header className="border-b border-slate-700 pb-12 text-center">
          <p className="font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Brian Lambert for Congress
          </p>

          <h1 className="mt-5 text-5xl font-extrabold md:text-6xl">
            Media Resources
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-gray-300">
            Official campaign materials for journalists, editors, broadcasters,
            podcasters, and community organizations.
          </p>
        </header>

        <section className="grid gap-12 py-16 lg:grid-cols-[360px_1fr]">
          <div>
            <Image
              src="/images/headshot.png"
              alt="Official campaign headshot of Brian Lambert"
              width={460}
              height={560}
              priority
              className="w-full rounded-2xl border-4 border-yellow-400 shadow-2xl"
            />

            <a
              href="/images/headshot.png"
              download
              className="mt-6 block rounded-lg bg-yellow-400 px-6 py-4 text-center font-bold text-slate-900 transition hover:bg-yellow-300"
            >
              Download Official Headshot
            </a>
          </div>

          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Official Biography
            </p>

            <h2 className="mt-4 text-4xl font-bold">About Brian Lambert</h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-gray-300">
              <p>
                Brian Lambert is a 20-year United States Navy veteran, father of
                three, and Libertarian candidate for Congress in
                Florida&apos;s 14th Congressional District.
              </p>

              <p>
                During his military career, Brian learned that leadership
                requires responsibility, accountability, and a commitment to
                putting the mission before personal ambition. After retiring
                from the Navy, he continued serving his family and community as
                a father, youth sports coach, volunteer, veterans advocate, and
                firearms technology student.
              </p>

              <p>
                Brian is running for Congress to restore constitutional
                government, protect individual liberty, demand fiscal
                responsibility, and return power to the people. He believes
                public office should be an opportunity to serve—not a path to
                lifelong political power.
              </p>
            </div>

            <Link
              href="/about-brian"
              className="mt-8 inline-flex font-bold text-yellow-400 transition hover:text-yellow-300"
            >
              Read Brian&apos;s Full Story →
            </Link>
          </div>
        </section>

        <section className="border-y border-slate-700 py-16">
          <p className="font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Campaign Announcement
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Official Campaign-Launch Release
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Brian Lambert officially announced his campaign for Congress in
            Florida&apos;s 14th District on July 20, 2026.
          </p>

          <Link
            href="/updates/official-campaign-launch"
            className="mt-8 inline-flex rounded-lg border border-yellow-400 px-7 py-4 font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-slate-900"
          >
            Read the Official Campaign Launch
          </Link>
        </section>

        <section className="grid gap-8 py-16 md:grid-cols-2">
          <div className="rounded-2xl border border-yellow-400 bg-slate-800 p-8">
            <h2 className="text-3xl font-bold text-yellow-400">
              Campaign Information
            </h2>

            <div className="mt-6 space-y-3 text-lg text-gray-300">
              <p>
                <strong className="text-white">Candidate:</strong> Brian Lambert
              </p>

              <p>
                <strong className="text-white">Office:</strong> United States
                House of Representatives
              </p>

              <p>
                <strong className="text-white">District:</strong> Florida&apos;s
                14th Congressional District
              </p>

              <p>
                <strong className="text-white">Party:</strong> Libertarian
              </p>

              <p>
                <strong className="text-white">Website:</strong>{" "}
                <a
                  href="https://brianlambertforcongress.com"
                  className="text-yellow-400 hover:text-yellow-300"
                >
                  BrianLambertForCongress.com
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-yellow-400 bg-slate-800 p-8">
            <h2 className="text-3xl font-bold text-yellow-400">
              Media Contact
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              For interview requests, candidate questionnaires, speaking
              invitations, or additional campaign information:
            </p>

            <a
              href="mailto:brianlambertforcongress@gmail.com"
              className="mt-6 inline-block break-all text-lg font-bold text-yellow-400 hover:text-yellow-300"
            >
              brianlambertforcongress@gmail.com
            </a>

            <div className="mt-8">
              <Link
                href="/#contact"
                className="inline-flex rounded-lg bg-yellow-400 px-7 py-4 font-bold text-slate-900 transition hover:bg-yellow-300"
              >
                Contact the Campaign
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-slate-800 px-8 py-12 text-center">
          <p className="text-3xl font-bold text-yellow-400">
            Service Instead of Power.
          </p>

          <p className="mt-4 text-xl text-gray-300">
            Freedom isn&apos;t Left or Right.
            <br />
            It&apos;s American.
          </p>
        </section>
      </div>
    </main>
  );
}