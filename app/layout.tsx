import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import CampaignFooter from "./components/CampaignFooter";
import ScrollToTop from "./components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brian Lambert for Congress | Florida District 14",
  description:
    "Official campaign website for Brian Lambert, Libertarian candidate for Florida's 14th Congressional District. Your Money. Your Freedom. Your Vote.",
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
      </body>
    </html>
  );
}