import Link from "next/link";

type NavigationLink = {
  href: string;
  label: string;
};

type IssueNavigationProps = {
  previous?: NavigationLink;
  next?: NavigationLink;
};

export default function IssueNavigation({
  previous,
  next,
}: IssueNavigationProps) {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div>
          {previous && (
            <Link
              href={previous.href}
              className="font-semibold text-yellow-400 hover:text-yellow-300"
            >
              ← {previous.label}
            </Link>
          )}
        </div>

        <div>
          {next && (
            <Link
              href={next.href}
              className="font-semibold text-yellow-400 hover:text-yellow-300"
            >
              {next.label} →
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}