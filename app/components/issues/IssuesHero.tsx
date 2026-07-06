type IssueHeroProps = {
  title: string;
  subtitle: string;
};

export default function IssueHero({
  title,
  subtitle,
}: IssueHeroProps) {
  return (
    <section className="px-6 py-20 text-center">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Where I Stand
        </p>

        <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          {subtitle}
        </p>
      </div>
    </section>
  );
}