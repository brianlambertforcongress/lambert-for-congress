import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white px-6 pb-20 pt-6">
      <div className="max-w-6xl mx-auto -mt-16">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center">
            <Image
  src="/images/headshot.png"
  alt="Brian Lambert"
  width={450}
  height={550}
  priority
  className="rounded-2xl border-4 border-yellow-400 shadow-2xl"
/>
          </div>

          <div>

            <p className="uppercase tracking-[0.35em] text-yellow-400 font-semibold">
              Meet Brian
            </p>

            <h1 className="text-5xl font-extrabold mt-4 mb-8">
              A Life of Service
            </h1>

            <p className="text-xl text-gray-300 leading-9 mb-6">
              For twenty years, I proudly served our nation in the
              United States Navy. During that time I served as an Aircraft
              Mechanic (AM), a Flight Engineer (AWF), and an Intelligence
              Specialist (IS). Each role carried different responsibilities,
              but they all demanded discipline, integrity, and a commitment to
              serving something greater than myself.
            </p>

            <p className="text-xl text-gray-300 leading-9 mb-6">
              While serving in the Navy, I became a Motorcycle Safety Foundation
              RiderCoach, helping new riders develop the skills and confidence
              to ride safely. I continued coaching for a short time after
              retiring from military service in 2018.
            </p>

            <p className="text-xl text-gray-300 leading-9 mb-6">
              After retirement, I chose to dedicate my time to raising my
              children and giving back to my community. I coached Little League
              baseball, studied culinary arts at the Art Institute of Tampa,
              and continue pursuing new knowledge as I work toward an Associate
              of Science in Firearms Technology through Sonoran Desert Institute.
            </p>

            <p className="text-xl text-gray-300 leading-9">
              Today I'm running for Congress because I believe government exists
              to serve the American people—not the other way around. My goal
              isn't to grow government. My goal is to restore constitutional
              government, protect individual liberty, and return power to the
              people.
            </p>

          </div>

        </div>

        <div className="mt-20 max-w-4xl mx-auto text-center">

          <blockquote className="text-3xl md:text-5xl italic font-light leading-relaxed text-white">
            The Constitution wasn't written because Americans couldn't be
            trusted.
            <br />
            It was written because government couldn't.
          </blockquote>

          <p className="mt-8 text-yellow-400 text-xl font-bold tracking-[0.3em] uppercase">
            Brian Lambert
          </p>

        </div>

      </div>
    </main>
  );
}