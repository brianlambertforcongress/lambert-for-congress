import IssueCommitments from "../../components/issues/IssueCommitments";
import IssueHero from "../../components/issues/IssueHero";
import IssueNavigation from "../../components/issues/IssueNavigation";
import IssueSection from "../../components/issues/IssueSection";

export default function FiscalResponsibilityPage() {
  return (
    <main className="bg-slate-900 text-white">
      <IssueHero
        title="Fiscal Responsibility"
        subtitle="Washington doesn't have a revenue problem—it has a spending problem. Every dollar the federal government wastes is a dollar taken from hardworking Americans or borrowed from future generations."
      />

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

      <IssueNavigation
        previous={{
          href: "/issues/individual-liberty",
          label: "Individual Liberty",
        }}
        next={{
          href: "/issues/veterans",
          label: "Veterans",
        }}
      />
    </main>
  );
}