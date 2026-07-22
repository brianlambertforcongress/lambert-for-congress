import Image from "next/image";
import Link from "next/link";

export default function Donate() {
  return (
    <section id="donate" className="bg-slate-800 px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-6 text-5xl font-bold text-yellow-400">
          Support the Campaign
        </h2>

        <p className="mx-auto mb-12 max-w-3xl text-xl text-gray-300">
          Grassroots campaigns are powered by people—not special interests.
          Every contribution helps us reach more voters throughout
          Florida&apos;s 14th Congressional District.
        </p>

        <div className="my-10 flex justify-center">
          <Image
            src="/images/donation-QR.png"
            alt="QR code to contribute to Brian Lambert for Congress"
            width={300}
            height={300}
            className="rounded-2xl border-4 border-yellow-400 shadow-2xl transition duration-300 hover:scale-105"
          />
        </div>

        <p className="mt-8 text-gray-400">
          Scan with your phone&apos;s camera to contribute securely.
        </p>

        <div className="mt-10">
          <Link
            href="https://app.proximityimpact.com/page-layout-contribution?formId=160"
            className="inline-flex rounded-full bg-yellow-400 px-8 py-4 font-bold text-slate-900 transition hover:bg-yellow-300"
          >
            Support Brian Lambert&apos;s Campaign
          </Link>
        </div>
      </div>
    </section>
  );
}