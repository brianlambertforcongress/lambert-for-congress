import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-900 text-white flex items-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>

          <p className="uppercase tracking-[0.35em] text-yellow-400 font-semibold">
            Florida&apos;s 14th Congressional District
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-4">
            Brian Lambert
          </h1>

          <h2 className="text-3xl md:text-5xl font-light mt-8 leading-tight">
            Your Money.
            <br />
            Your Freedom.
            <br />
            Your Vote.
          </h2>

          <p className="mt-8 text-xl text-gray-300 max-w-xl">
            Government exists to secure your liberty—not to manage your life.
            The Constitution limits the government, not the citizen.
          </p>

          <div className="mt-10 flex gap-4">

            <button className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition">
              Volunteer
            </button>

            <button <a
  href="#donate"
  className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-slate-900 transition duration-300"
>
  Donate
</a>
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <Image
            src="/images/headshot.png"
            alt="Brian Lambert"
            width={450}
            height={550}
            className="rounded-2xl shadow-2xl"
            priority
          />

        </div>

      </div>
    </section>
  );
}