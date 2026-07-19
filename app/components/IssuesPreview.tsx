import Link from "next/link";

export default function IssuesPreview() {
  const issues = [
    {
      title: "Fiscal Responsibility",
      text: "Washington does not have a revenue problem—it has a spending problem. I will fight for balanced budgets, honest accounting, and an end to reckless spending that leaves our children with the bill.",
      href: "/issues/fiscal-responsibility",
    },
    {
      title: "Constitutional Government",
      text: "The Constitution limits the government, not the citizen. Before supporting any bill, regulation, or federal program, I will ask one question: Is this constitutional?",
      href: "/issues/constitutional-government",
    },
    {
      title: "Veterans",
      text: "Veterans earned their benefits through service and sacrifice. I will fight for greater choice, less bureaucracy, real accountability, and care that puts the veteran first.",
      href: "/issues/veterans",
    },
  ];

  return (
    <section className="bg-slate-800 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-center text-5xl font-bold text-yellow-400">
          Highlighted Issues
        </h2>

        <p className="mx-auto mb-16 max-w-3xl text-center text-xl text-gray-300">
          Campaign promises should be clear before Election Day. Here are some
          of the issues that matter most to me and the people of our district.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {issues.map((issue) => (
            <div
              key={issue.title}
              className="flex flex-col rounded-2xl border border-yellow-400 bg-slate-900 p-8 shadow-xl"
            >
              <h3 className="mb-6 text-3xl font-bold text-yellow-400">
                {issue.title}
              </h3>

              <p className="mb-8 flex-grow leading-8 text-gray-300">
                {issue.text}
              </p>

              <Link
                href={issue.href}
                className="font-bold text-yellow-400 transition hover:text-yellow-300"
              >
                Read My Position →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/issues"
            className="inline-block rounded-lg bg-yellow-400 px-8 py-4 text-lg font-bold text-slate-900 transition hover:bg-yellow-300"
          >
            View All Issues
          </Link>
        </div>
      </div>
    </section>
  );
}