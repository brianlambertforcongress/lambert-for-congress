import IssueCommitments from "../../components/issues/IssueCommitments";
import IssueHero from "../../components/issues/IssueHero";
import IssueNavigation from "../../components/issues/IssueNavigation";
import IssueSection from "../../components/issues/IssueSection";
import ContinueExploring from "../../components/ContinueExploring";
import RelatedIssues from "../../components/RelatedIssues";

export default function FiscalResponsibilityPage() {
  return (
    <main className="bg-slate-900 text-white">
      <IssueHero
        title="Fiscal Responsibility"
        subtitle="Washington doesn't have a revenue problem—it has a spending problem. Every dollar the federal government wastes is a dollar taken from hardworking Americans or borrowed from future generations."
      />
      <IssueSection title="America's Greatest National Security Threat">
  <p>
    America's national debt has become the single greatest long-term threat to our national security. A nation buried beneath trillions of dollars in debt cannot remain
    economically strong, strategically independent, or leave future generations
    the country they deserve.
  </p>

  <p>
    Every dollar Washington borrows today is a bill sent to our children
    tomorrow. We cannot continue spending money we do not have while expecting
    future Americans to bear the burden.
  </p>

  <p>
    Fiscal responsibility is not simply about balancing numbers on a ledger.
    It is about preserving America's independence, protecting our economic
    future, and honoring our obligation to leave the next generation a stronger
    nation than the one we inherited.
  </p>
</IssueSection>

      <IssueSection title="Why This Matters">
        <p>
          The national debt continues to grow while Congress spends money it
          doesn't have. Inflation has quietly reduced the purchasing power of
          every American family.
        </p>

        <p>
          Government should live within its means just like the people it
          represents. Families balance budgets every day. Washington should be
          expected to do the same.
        </p>
      </IssueSection>

      <IssueCommitments
        commitments={[
          {
            title: "Pass a Balanced Budget",
            description:
              "Congress should be required to live within its means just as American families do.",
          },
          {
      title: "Confront the National Debt",
      description:
        "America's national debt has become the single greatest long-term threat to our national security and the future prosperity of our children.",
    },
          {
            title: "End Reckless Spending",
            description:
              "Washington must stop spending money it doesn't have and adding to the national debt.",
          },
          {
            title: "Stop Inflationary Money Printing",
            description:
              "Printing trillions of dollars devalues every paycheck and every retirement account.",
          },
          {
            title: "Audit Federal Agencies",
            description:
              "Every federal agency should be accountable for how it spends taxpayer dollars.",
          },
          {
            title: "Eliminate Unconstitutional Bureaucracies",
            description:
              "Agencies that exceed the powers granted by the Constitution should be reduced or eliminated.",
          },
          {
            title: "Hold Congress Accountable",
            description:
              "Members of Congress should be held responsible for the nation's fiscal health, not rewarded for reckless spending.",
          },
          {
  title: "Protect Future Generations",
  description:
    "Restore fiscal responsibility so our children inherit opportunity instead of crushing debt.",
}
        ]}
      />

      <IssueSection title="The Bottom Line">
        <p>
          Fiscal responsibility isn't just about balancing numbers on a
          spreadsheet. It's about honoring the trust taxpayers place in their
          government. Every dollar Washington spends was earned by someone who
          worked for it.
        </p>

        <p>
          We can restore accountability, reduce waste, and build a government
          that lives within its means. That's how we protect both our economy
          and the future of our children.
        </p>
      </IssueSection>

      <IssueNavigation />
      <RelatedIssues
  issues={[
    {
      title: "Government Accountability",
      href: "/issues/government-accountability",
      description:
        "Congress and federal agencies must answer to the Constitution and the people they serve.",
    },
    {
      title: "Energy Independence",
      href: "/issues/energy",
      description:
        "Affordable, reliable American energy strengthens families, businesses, and national security.",
    },
    {
      title: "Individual Liberty",
      href: "/issues/individual-liberty",
      description:
        "Your earnings, choices, and future should not be controlled by an oversized federal government.",
    },
  ]}
/>

      <ContinueExploring />
    </main>
  );
}