import Link from "next/link";

type RelatedIssue = {
  title: string;
  href: string;
  description: string;
};

type RelatedIssuesProps = {
  issues: RelatedIssue[];
};

export default function RelatedIssues({ issues }: RelatedIssuesProps) {
  return (
    <section className="bg-slate-900 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Related Issues
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight">
            Keep Reading
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {issues.map((issue) => (
            <Link
              key={issue.href}
              href={issue.href}
              className="rounded-2xl border border-slate-700 bg-slate-950 p-6 transition hover:border-yellow-400"
            >
              <h3 className="text-xl font-bold text-white">{issue.title}</h3>

              <p className="mt-3 leading-7 text-slate-300">
                {issue.description}
              </p>

              <p className="mt-5 text-sm font-bold text-yellow-400">
                Read More →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}