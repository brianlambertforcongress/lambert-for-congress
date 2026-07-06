type IssueSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function IssueSection({
  title,
  children,
}: IssueSectionProps) {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-3xl font-bold text-yellow-400">
          {title}
        </h2>

        <div className="space-y-6 text-lg leading-8 text-gray-300">
          {children}
        </div>
      </div>
    </section>
  );
}