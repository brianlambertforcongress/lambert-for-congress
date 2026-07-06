import IssueHero from "@/app/components/issues/IssueHero";
import IssueSection from "@/app/components/issues/IssueSection";
import IssueCommitments from "../../components/issues/IssueCommitments";
import IssueNavigation from "../../components/issues/IssueNavigation";

export default function FiscalResponsibilityPage() {
  return (
    <main className="bg-slate-900 text-white">

      <IssueHero
  eyebrow="Where I Stand"
  title="Fiscal Responsibility"
  description="Washington doesn't have a revenue problem—it has a spending problem. Every dollar the federal government wastes is a dollar taken from hardworking Americans or borrowed from future generations."
/>

      {/* WHY THIS MATTERS */}

<section className="py-20 px-6">
  <div className="max-w-5xl mx-auto">

    <h2 className="text-4xl font-bold mb-8">
      Why This Matters
    </h2>

    <div className="space-y-6 text-lg leading-relaxed text-slate-300">

      <p>
        The national debt continues to grow while Congress spends money it
        doesn't have. Inflation has quietly reduced the purchasing power of
        every American family.
      </p>

      <p>
        Government should live within its means just like the people it
        represents. Families balance budgets every day. Washington should
        be expected to do the same.
      </p>

    </div>

  </div>
</section>

{/* WHERE I STAND */}

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
<IssueSection title="What I'll Fight For">
  <p>
    I'll support legislation that reduces spending, restores fiscal discipline,
    and returns financial responsibility to Congress. The federal government
    exists to protect the liberty of the American people—not to mortgage their
    future.
  </p>

  <p>
    Every budget reflects priorities. I believe Washington should prioritize
    constitutional government, responsible stewardship of taxpayer dollars, and
    leaving the next generation more opportunity—not more debt.
  </p>
</IssueSection>

<IssueSection title="The Bottom Line">
  <p>
    Fiscal responsibility isn't just about balancing numbers on a spreadsheet.
    It's about honoring the trust taxpayers place in their government. Every
    dollar Washington spends was earned by someone who worked for it.
  </p>

  <p>
    We can restore accountability, reduce waste, and build a government that
    lives within its means. That's how we protect both our economy and the
    future of our children.
  </p>
</IssueSection>
      {/* CALL TO ACTION */}

      <section className="bg-yellow-400 text-slate-900 py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-extrabold">
            America Can Live Within Its Means Again
          </h2>

          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Responsible government begins with responsible spending. Together,
            we can restore fiscal discipline and protect the future for our
            children and grandchildren.
          </p>

        </div>

      </section>

    </main>
  );
}<IssueNavigation
  next={{
    href: "/issues/veterans",
    label: "Veterans",
  }}
/>