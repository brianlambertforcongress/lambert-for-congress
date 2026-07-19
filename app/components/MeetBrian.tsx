import Link from "next/link";

export default function MeetBrian() {
  const cards = [
    {
      title: "20 Years in the U.S. Navy",
      icon: "⚓",
      text: "Twenty years of service taught me leadership, discipline, accountability, and the importance of putting the mission before personal ambition.",
    },
    {
      title: "Father of Three",
      icon: "👨‍👧‍👦",
      text: "Raising my children has made the future of this country personal. Our children deserve more freedom, greater opportunity, and a government that lives within its means.",
    },
    {
      title: "Constitution First",
      icon: "📜",
      text: "The Constitution limits the government, not the citizen. Every vote I cast will begin with one question: Is this constitutional?",
    },
    {
      title: "Citizen Legislator",
      icon: "🏛️",
      text: "Congress should be filled with citizens who serve for a time—not politicians who build lifelong careers in Washington. I will serve, remain accountable, and come home.",
    },
  ];

  return (
    <section className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-center text-5xl font-bold text-yellow-400">
          Meet Brian
        </h2>

        <p className="mx-auto mb-16 max-w-3xl text-center text-xl leading-8 text-gray-300">
          I am a Navy veteran, a father, and a citizen who believes public
          office should be about service—not power.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-yellow-400 bg-slate-800 p-8 shadow-xl transition duration-300 hover:scale-105"
            >
              <div className="mb-6 text-5xl">{card.icon}</div>

              <h3 className="mb-4 text-2xl font-bold text-yellow-400">
                {card.title}
              </h3>

              <p className="leading-7 text-gray-300">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="inline-block rounded-lg border border-yellow-400 px-8 py-4 text-lg font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-slate-900"
          >
            Read Brian&apos;s Story
          </Link>
        </div>
      </div>
    </section>
  );
}