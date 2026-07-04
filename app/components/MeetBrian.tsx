export default function MeetBrian() {
  const cards = [
    {
      title: "20 Years U.S. Navy",
      icon: "⚓",
      text: "Twenty years of military service taught me leadership, discipline, and the importance of putting mission and country before self."
    },
    {
      title: "Stay-at-Home Father",
      icon: "👨‍👧‍👦",
      text: "Raising my children gave me a firsthand appreciation for family, responsibility, and the challenges facing American parents."
    },
    {
      title: "Constitution First",
      icon: "📜",
      text: "The Constitution limits the government—not the people. Every vote I cast will begin with that principle."
    },
    {
      title: "Citizen Legislator",
      icon: "🏛️",
      text: "I believe Congress should be made up of citizens who serve their communities—not career politicians. My goal is to represent Florida's 14th District with integrity and then return home."
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-16">
          Meet Brian
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-slate-800 border border-yellow-400 rounded-2xl p-8 shadow-xl hover:scale-105 transition duration-300"
            >
              <div className="text-5xl mb-6">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                {card.title}
              </h3>

              <p className="text-gray-300">
                {card.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}