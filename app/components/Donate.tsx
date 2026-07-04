import Image from "next/image";

export default function Donate() {
  return (
    <section
      id="donate"
      className="py-24 px-6 bg-slate-800"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-5xl font-bold text-yellow-400 mb-6">
          Support the Campaign
        </h2>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Grassroots campaigns are powered by people—not special interests.
          Every contribution helps us reach more voters throughout Florida&apos;s
          14th Congressional District.
        </p>

        <div className="flex justify-center my-10">
          <Image
            src="/images/donation-QR.png"
            alt="Donate QR Code"
            width={300}
            height={300}
            className="rounded-2xl border-4 border-yellow-400 shadow-2xl hover:scale-105 transition duration-300"
          />
        </div>

        <p className="mt-8 text-gray-400">
          Scan with your phone&apos;s camera to contribute securely.
        </p>

      </div>
    </section>
  );
}