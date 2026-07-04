export default function IssuesPreview() {
  const issues = [
    {
      title: "Your Money",
      text: "Washington doesn't have a revenue problem—it has a spending problem. I'll fight for lower taxes, fiscal responsibility, and policies that help families keep more of what they earn."
    },
    {
      title: "Your Freedom",
      text: "The Constitution exists to limit government, not the people. I will defend our constitutional rights and oppose unnecessary federal overreach."
    },
    {
      title: "Your Vote",
      text: "You deserve a representative who listens, communicates honestly, and answers to the people—not party leadership or special interests."
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-800">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-6">
          Where I Stand
        </h2>

        <p className="text-center text-xl text-gray-300 max-w-3xl mx-auto mb-16">
          Every decision I make in Congress will be guided by three simple principles.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {issues.map((issue) => (
            <div
              key={issue.title}
              className="bg-slate-900 border border-yellow-400 rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-3xl font-bold text-yellow-400 mb-6">
                {issue.title}
              </h3>

              <p className="text-gray-300 leading-8">
                {issue.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}