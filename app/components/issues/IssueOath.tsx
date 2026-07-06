type IssueOathProps = {
  text: string;
};

export default function IssueOath({ text }: IssueOathProps) {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl rounded-2xl border border-yellow-400/30 bg-slate-800 p-10 text-center">
        <h2 className="mb-6 text-3xl font-bold text-yellow-400">
          My Commitment
        </h2>

        <p className="text-lg leading-8 text-gray-300">
          {text}
        </p>
      </div>
    </section>
  );
}