type Commitment = {
  title: string;
  description: string;
};

type IssueCommitmentsProps = {
  commitments: Commitment[];
};

export default function IssueCommitments({
  commitments,
}: IssueCommitmentsProps) {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        {commitments.map((commitment) => (
          <div
            key={commitment.title}
            className="rounded-xl border border-slate-700 bg-slate-800 p-6"
          >
            <h3 className="mb-3 text-xl font-bold text-yellow-400">
              {commitment.title}
            </h3>

            <p className="leading-7 text-gray-300">
              {commitment.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}