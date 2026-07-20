import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import CampaignFooter from "./components/CampaignFooter";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

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