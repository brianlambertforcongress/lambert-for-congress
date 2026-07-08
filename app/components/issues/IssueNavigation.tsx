"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const issues = [
  { href: "/issues/fiscal-responsibility", label: "Fiscal Responsibility" },
  { href: "/issues/constitutional-government", label: "Constitutional Government" },
  { href: "/issues/individual-liberty", label: "Individual Liberty" },
  { href: "/issues/second-amendment", label: "Second Amendment" },
  { href: "/issues/veterans", label: "Veterans" },
  { href: "/issues/border-security", label: "Border Security & Immigration" },
  { href: "/issues/healthcare", label: "Healthcare" },
  { href: "/issues/education", label: "Education" },
  { href: "/issues/national-defense", label: "National Defense" },
  { href: "/issues/economy-small-business", label: "Economy & Small Business" },
  { href: "/issues/election-integrity", label: "Election Integrity" },
  { href: "/issues/energy", label: "Energy & American Independence" },
];

export default function IssueNavigation() {
  const pathname = usePathname();
  const currentIndex = issues.findIndex((issue) => issue.href === pathname);

  const previous = currentIndex > 0 ? issues[currentIndex - 1] : null;
  const next =
    currentIndex >= 0 && currentIndex < issues.length - 1
      ? issues[currentIndex + 1]
      : null;

  return (
    <section className="px-6 py-16">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
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

        <div className="text-right">
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