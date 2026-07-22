import Link from "next/link";

export default function WhyRunning() {
  return (
    <section className="bg-slate-800 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-semibold uppercase tracking-[0.35em] text-yellow-400">
          My Story
        </p>

        <h2 className="mt-4 text-5xl font-extrabold">Why I&apos;m Running</h2>

        <p className="mt-10 text-xl leading-9 text-gray-300">
          For twenty years, I had the privilege of serving our nation in the
          United States Navy. After retiring, I chose a different kind of
          service—raising my children, giving back to my community, and
          continuing to learn and grow as a husband, father, and citizen.
        </p>

        <p className="mt-8 text-xl leading-9 text-gray-300">
          I never planned to run for Congress. Like many Americans, I believed
          that if I worked hard, raised my family, and did my part, I could make
          a difference where I lived. But over time, I watched Washington become
          more focused on growing its own power than serving the people who
          entrusted it with that responsibility.
        </p>

        <p className="mt-8 text-xl leading-9 text-gray-300">
          That&apos;s why I&apos;m running. I believe government should trust
          Americans more than Washington trusts itself. I believe the
          Constitution still matters, individual liberty is worth protecting,
          and public office is an opportunity to serve—not to rule.
        </p>

        <p className="mt-8 text-2xl font-semibold text-yellow-400">
          I’m not running to become a career politician.
          <br />
          I’m running to be your representative.
        </p>

        <Link
          href="/why-im-running"
          className="mt-10 inline-flex rounded-full border border-yellow-400 px-6 py-3 font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-slate-950"
        >
          Read Why I&apos;m Running →
        </Link>
      </div>
    </section>
  );
}