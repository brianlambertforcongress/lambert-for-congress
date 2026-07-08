import Image from "next/image";

import WhyRunning from "./components/WhyRunning";
import ThereIsAnotherWay from "./components/ThereIsAnotherWay";
import Quote from "./components/Quote";
import ThreePrinciples from "./components/ThreePrinciples";
import MeetBrian from "./components/MeetBrian";
import IssuesPreview from "./components/IssuesPreview";
import JoinCampaign from "./components/JoinCampaign";
import ContactForm from "./components/ContactForm";
import Donate from "./components/Donate";

export default function Home() {
  return (
    <main className="bg-slate-900 text-white">
      {/* ================= HERO ================= */}

      <section className="flex min-h-[calc(100vh-96px)] items-start px-6 pb-20 pt-12 lg:pt-16">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT */}

          <div>
            <p className="font-semibold uppercase tracking-[0.35em] text-yellow-400">
              Florida&apos;s 14th Congressional District
            </p>

            <h1 className="mt-4 text-6xl font-extrabold md:text-7xl">
              Brian Lambert
            </h1>

            <p className="mt-4 text-2xl font-semibold text-yellow-400 md:text-3xl">
              Libertarian for Congress
            </p>

            <h2 className="mt-8 text-4xl font-light leading-tight md:text-6xl">
              It&apos;s Time to Trust Americans Again.
            </h2>

            <p className="mt-6 text-2xl font-semibold text-yellow-400">
              Freedom isn&apos;t Left or Right.
              <br />
              It&apos;s American.
            </p>

            <p className="mt-8 max-w-xl text-xl leading-9 text-gray-300">
              Washington has forgotten who it&apos;s supposed to serve. I
              believe government should trust Americans more than Washington
              trusts itself. Together, we can restore constitutional government,
              protect individual liberty, and return power where it belongs—with
              the people.
            </p>

            <div className="mt-8">
              <p className="text-3xl font-light leading-relaxed md:text-4xl">
                Your Life.
                <br />
                Your Liberty.
                <br />
                Your Voice.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href="/#volunteer"
                className="inline-block rounded-full bg-yellow-400 px-8 py-4 font-bold text-slate-900 transition hover:bg-yellow-300"
              >
                Stand for Freedom
              </a>

              <a
                href="/issues"
                className="inline-block rounded-full border border-white px-8 py-4 transition hover:bg-white hover:text-slate-900"
              >
                See the Plan
              </a>
            </div>

            <p className="mt-10 text-sm uppercase tracking-[0.3em] text-gray-400">
              Navy Veteran • Father • Public Servant • Constitutional
              Libertarian
            </p>
          </div>

          {/* RIGHT */}

          <div className="flex justify-center lg:justify-end lg:pt-20">
            <Image
              src="/images/headshot.png"
              alt="Brian Lambert"
              width={460}
              height={560}
              priority
              className="rounded-2xl border-4 border-yellow-400 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= STORY ================= */}

      <WhyRunning />

      <ThereIsAnotherWay />

      <Quote />

      <ThreePrinciples />

      <MeetBrian />

      <IssuesPreview />

      <JoinCampaign />

      <ContactForm />

    
  <Donate />

    </main>
  );
}