import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import CampaignFooter from "./components/CampaignFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brian Lambert for Congress",
  description:
    "Official campaign website for Brian Lambert, Libertarian candidate for Florida's 14th Congressional District.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-slate-900 text-white flex flex-col">

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <CampaignFooter />

      </body>
    </html>
  );
}