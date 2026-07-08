import Image from "next/image";

export default function ThereIsAnotherWay() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 text-slate-900">
      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/torch-watermark.png"
          alt=""
          aria-hidden="true"
          width={900}
          height={900}
          className="w-[75%] max-w-4xl opacity-15 grayscale brightness-150 contrast-50 select-none"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="font-semibold uppercase tracking-[0.35em] text-yellow-500">
          A Better Direction
        </p>

        <h2 className="mt-6 text-5xl font-extrabold">
          There Is Another Way.
        </h2>

        <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-700">
          For too long, Americans have been told they have only two choices:
          bigger government from one party or bigger government from the other.
          I don't believe that's the future our Founders envisioned, and I don't
          believe it's the future the American people deserve.
        </p>

        <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-700">
          There is another way—one that trusts the people, respects the
          Constitution, protects individual liberty, and expects government to
          live within the limits placed on it by the people it serves.
        </p>

        <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-700">
          This campaign isn't about left versus right. It's about restoring the
          principles that made America strong: personal responsibility, equal
          justice under the law, fiscal responsibility, and the freedom to build
          your own future.
        </p>

        <div className="mt-14 inline-block border-l-4 border-yellow-400 pl-6 text-left">
          <p className="text-2xl font-semibold italic">
            "Freedom isn't Left or Right. It's American."
          </p>
        </div>
      </div>
    </section>
  );
}