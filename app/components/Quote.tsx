export default function Quote() {
  return (
    <section className="py-28 px-6 bg-slate-800 border-y border-slate-700">
      <div className="max-w-5xl mx-auto text-center">

        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-12 rounded-full"></div>

        <blockquote className="text-4xl md:text-6xl font-light italic leading-relaxed text-white">
          The Constitution wasn't written because Americans couldn't be trusted.
          <br className="hidden md:block" />
          It was written because government couldn't.
        </blockquote>

        <p className="mt-12 text-yellow-400 text-2xl font-semibold tracking-[0.25em] uppercase">
          Brian Lambert
        </p>

        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-12 rounded-full"></div>

      </div>
    </section>
  );
}