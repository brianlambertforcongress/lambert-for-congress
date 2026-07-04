import Image from "next/image";

import Navbar from "./components/Navbar";
import WhyRunning from "./components/WhyRunning";
import BreakTheCycle from "./components/BreakTheCycle";
import Quote from "./components/Quote";
import ThreePrinciples from "./components/ThreePrinciples";
import MeetBrian from "./components/MeetBrian";
import IssuesPreview from "./components/IssuesPreview";
import JoinCampaign from "./components/JoinCampaign";
import ContactForm from "./components/ContactForm";
import Donate from "./components/Donate";
import CampaignFooter from "./components/CampaignFooter";

export default function Home() {
  return (
    <>
      
      <main className="bg-slate-900 text-white">

        {/* ================= HERO ================= */}

        <section className="min-h-screen flex items-center px-6 py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}

            <div>

              <p className="uppercase tracking-[0.35em] text-yellow-400 font-semibold">
                Florida's 14th Congressional District
              </p>

              <h1 className="text-6xl md:text-7xl font-extrabold mt-4">
                Brian Lambert
              </h1>

              <p className="mt-4 text-2xl md:text-3xl font-semibold text-yellow-400">
                Libertarian for Congress
              </p>

              <h2 className="mt-10 text-4xl md:text-6xl font-light leading-tight">
                Your Money.
                <br />
                Your Freedom.
                <br />
                Your Vote.
              </h2>

              <p className="mt-10 text-xl leading-9 text-gray-300 max-w-xl">
                Washington doesn't need more power.
                Americans need more freedom.
                I'm running to restore constitutional government,
                protect individual liberty,
                and trust the American people again.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">

                <a
                  href="#volunteer"
                  className="inline-block bg-yellow-400 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition"
                >
                  Join the Campaign
                </a>

                <a
                  href="#donate"
                  className="inline-block border border-white px-8 py-4 rounded-full hover:bg-white hover:text-slate-900 transition"
                >
                  Donate
                </a>

              </div>

            </div>

            {/* RIGHT SIDE */}

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

        <BreakTheCycle />

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
    </>
  );
}