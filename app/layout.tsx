import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import CampaignFooter from "./components/CampaignFooter";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.brianlambertforcongress.com"),

  title: {
    default:
      "Brian Lambert for Congress | Libertarian Candidate for FL-14",
    template: "%s | Brian Lambert for Congress",
  },

  description:
    "Official campaign website for Brian Lambert, Libertarian candidate for Congress in Florida's 14th District. Learn about Brian, his priorities, and where he stands.",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.brianlambertforcongress.com/#website",
      url: "https://www.brianlambertforcongress.com/",
      name: "Brian Lambert for Congress",
      alternateName: [
        "Brian Lambert for FL-14",
        "brianlambertforcongress.com",
      ],
      publisher: {
        "@id": "https://www.brianlambertforcongress.com/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.brianlambertforcongress.com/#organization",
      name: "Brian Lambert for Congress",
      url: "https://www.brianlambertforcongress.com/",
      description:
        "Official campaign organization supporting Brian Lambert, Libertarian candidate for Congress in Florida's 14th Congressional District.",
      slogan: "Your Money. Your Freedom. Your Vote.",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Florida's 14th Congressional District",
      },
      founder: {
        "@id": "https://www.brianlambertforcongress.com/#brian-lambert",
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61591395144689",
        "https://www.instagram.com/brianlambertforcongress/",
        "https://www.threads.com/@brianlambertforcongress",
        "https://www.tiktok.com/@lambertforfl14",
        "https://www.youtube.com/@BrianLambertforCongress",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.brianlambertforcongress.com/#brian-lambert",
      name: "Brian Lambert",
      url: "https://www.brianlambertforcongress.com/about-brian",
      jobTitle: "Candidate for the U.S. House of Representatives",
      description:
        "U.S. Navy veteran, father, and Libertarian candidate for Congress in Florida's 14th Congressional District.",
      affiliation: {
        "@id": "https://www.brianlambertforcongress.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-slate-900 text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        <ScrollToTop />
        <Navbar />

        <main className="flex-1">{children}</main>

        <CampaignFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}