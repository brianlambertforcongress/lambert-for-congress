import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-900 text-white">
        <section className="pt-20">
  <Image
    src="/images/banner.png"
    alt="Lambert for Congress Campaign Banner"
    width={1600}
    height={500}
    priority
    className="w-full h-auto"
  />
</section>

        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-5xl text-center">
            <p className="uppercase tracking-[0.35em] text-yellow-400 font-semibold">
              Florida&apos;s 14th Congressional District
            </p>

            <h1 className="text-6xl md:text-8xl font-extrabold mt-6">
              Lambert
              <span className="block text-yellow-400">
                for Congress
              </span>
            </h1>

            <h2 className="text-3xl md:text-5xl font-light mt-10 leading-tight">
              Your Money.
              <br />
              Your Freedom.
              <br />
              Your Vote.
            </h2>

            <p className="max-w-3xl mx-auto mt-10 text-xl text-gray-300">
              Restoring constitutional government.
              Returning power to the people.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}