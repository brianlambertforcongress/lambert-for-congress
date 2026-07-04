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

      <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}

          <div>
            <p className="uppercase tracking-[0.35em] text-yellow-400 font-semibold">
              Florida&apos;s 14th Congressional District
            </p>

            <h1 className="mt-4 text-6xl md:text-7xl font-extrabold">
              Brian Lambert
            </h1>

            <p className="mt-4 text-2xl md:text-3xl font-semibold text-yellow-400">
              Libertarian for Congress
            </p>

            <h2 className="mt-10 text-4xl md:text-6xl font-light leading-tight">
              It&apos;s Time to Trust Americans Again.
            </h2>

            <p className="mt-8 text-2xl font-semibold text-yellow-400">
              Freedom isn&apos;t Left or Right.
              <br />
              It&apos;s American.
            </p>

            <p className="mt-10 text-xl leading-9 text-gray-300 max-w-xl">
              Washington has forgotten who it&apos;s supposed to serve. I
              believe government should trust Americans more than Washington
              trusts itself. Together, we can restore constitutional government,
              protect individual liberty, and return power where it belongs—with
              the people.
            </p>

            <div className="mt-10">
              <p className="text-3xl md:text-4xl font-light leading-relaxed">
                Your Life.
                <br />
                Your Liberty.
                <br />
                Your Voice.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-5">
              <a
                href="#volunteer"
                className="inline-block bg-yellow-400 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition"
              >
                Stand for Freedom
              </a>

              <a
                href="/issues"
                className="inline-block border border-white px-8 py-4 rounded-full hover:bg-white hover:text-slate-900 transition"
              >
                See the Plan
              </a>
            </div>

            <p className="mt-12 text-sm uppercase tracking-[0.3em] text-gray-400">
              Navy Veteran • Father • Educator • Constitutional Libertarian
            </p>
          </div>

          {/* RIGHT */}

          <div className="flex justify-center">
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

      <div id="volunteer">
        <JoinCampaign />
      </div>

      <div id="contact">
        <ContactForm />
      </div>

      <div id="donate">
        <Donate />
      </div>
    </main>
  );
}