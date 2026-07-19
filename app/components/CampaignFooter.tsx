"use client";

import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61591395144689",
    label: "f",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/brianlambertforcongress/",
    label: "◎",
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@brianlambertforcongress",
    label: "@",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@lambertforfl14?lang=en",
    label: "♪",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@BrianLambertforCongress",
    label: "▶",
  },
];

export default function CampaignFooter() {
  function handleVolunteerClick() {
    if (window.location.pathname !== "/") {
      window.location.assign("/#volunteer");
      return;
    }

    const volunteerSection = document.getElementById("volunteer");

    if (volunteerSection) {
      volunteerSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", "#volunteer");
    }
  }

  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-12 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3 md:items-start">
        <div>
          <Link
            href="/"
            className="text-2xl font-extrabold uppercase tracking-widest text-white"
          >
            Brian <span className="text-yellow-400">Lambert</span>
          </Link>

          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
            Libertarian for Congress
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Florida&apos;s 14th Congressional District
          </p>

          <div className="mt-5 space-y-2 text-sm">
            <p>
              <a
                href="mailto:brianlambertforcongress@gmail.com"
                className="transition hover:text-yellow-400"
              >
                brianlambertforcongress@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="mx-auto flex justify-center">
            <Image
              src="/images/campaign-torch-5.png"
              alt="Brian Lambert Campaign Torch"
              width={100}
              height={167}
              priority
            />
          </div>

          <p className="mt-5 text-xl font-extrabold text-white">
            Freedom isn&apos;t Left or Right. It&apos;s American.
          </p>
        </div>

        <div className="md:text-right">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
            Connect
          </p>

          <div className="mt-5 flex justify-center gap-3 md:justify-end">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-sm font-bold text-white transition hover:border-yellow-400 hover:text-yellow-400"
              >
                {social.label}
              </a>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-3 md:justify-end">
            <Link
  href="/#volunteer-form"
  className="rounded-full border border-yellow-400 px-5 py-2 text-sm font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-slate-950"
>
  Volunteer
</Link>

            <Link
              href="/donate"
              className="rounded-full bg-yellow-400 px-5 py-2 text-sm font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 pt-6 text-center">
        <p className="text-sm font-semibold text-slate-300">
          Twenty years serving our nation. A lifetime defending liberty.
        </p>

        <p className="mt-3 text-xs text-slate-500">
          © 2026 Brian Lambert for Congress. All Rights Reserved.
        </p>

        <p className="mt-2 text-xs text-slate-500">
          Paid for by Brian Lambert for Congress.
        </p>

        <p className="mt-4 text-xs italic text-slate-500">
          The Constitution limits the government, not the people.
        </p>
      </div>
    </footer>
  );
}