import IssueCommitments from "../../components/issues/IssueCommitments";
import IssueHero from "../../components/issues/IssueHero";
import IssueNavigation from "../../components/issues/IssueNavigation";
import IssueSection from "../../components/issues/IssueSection";

export default function EconomySmallBusinessPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <IssueHero
        title="Prosperity Begins with Freedom."
        subtitle="Lower Taxes • Less Regulation • More Opportunity"
      />

      <IssueSection title="Why It Matters">
        <p>
          America's economy is strongest when individuals are free to innovate,
          build businesses, and pursue opportunity without unnecessary
          government interference.
        </p>

        <p>
          Small businesses are the backbone of our communities. They create
          jobs, support families, and drive innovation, yet they often carry
          the greatest burden from excessive regulation and rising costs.
        </p>
<p className="text-2xl font-bold text-yellow-400">
  Washington doesn't create prosperity. The American people do.
</p>

        <p>
          Government cannot create prosperity by spending more money or adding
          more bureaucracy. Lasting economic growth comes from the creativity,
          hard work, and determination of the American people.
        </p>

        <p>
          Washington's job is not to manage the economy. Its job is to create
          an environment where Americans are free to succeed.
        </p>
      </IssueSection>

      <IssueSection title="Where I Stand">
        <p>
          I support reducing unnecessary regulations that make it harder for
          entrepreneurs to start and grow businesses.
        </p>

        <p>
          I support a simpler, fairer tax system that allows families and small
          businesses to keep more of what they earn.
        </p>

        <p>
          Inflation acts as a hidden tax on every American. Congress must stop
          reckless spending that weakens the purchasing power of working
          families.
        </p>

        <p>
          Economic freedom means trusting individuals—not Washington—to make
          the best decisions for themselves, their families, and their
          businesses.
        </p>
      </IssueSection>

            <IssueSection title="My Commitments">
        <IssueCommitments
          commitments={[
            {
              title: "Reduce Taxes",
              description:
                "Americans should keep more of the money they earn through hard work.",
            },
            {
              title: "Cut Red Tape",
              description:
                "I will work to eliminate unnecessary federal regulations that burden businesses and entrepreneurs.",
            },
            {
              title: "Fight Inflation",
              description:
                "Fiscal responsibility protects the value of every American's paycheck and savings.",
            },
            {
              title: "Support Small Business",
              description:
                "Small businesses deserve an environment where they can compete, grow, and create jobs.",
            },
            {
              title: "Encourage Free Markets",
              description:
                "Competition, innovation, and entrepreneurship—not government planning—create lasting prosperity.",
            },
            {
              title: "Promote Economic Freedom",
              description:
                "Government should create opportunity—not barriers—for those willing to work and innovate.",
            },
          ]}
        />
      </IssueSection>

      <IssueSection title="Bottom Line">
        <p>
          The American Dream is built on freedom, personal responsibility, and
          opportunity—not dependence on government. When people are free to
          build, invest, and innovate, our entire nation prospers.
        </p>

        <p>
          My goal is simple: make it easier to succeed in America, not harder.
        </p>
      </IssueSection>

      <IssueNavigation />
    </main>
  );
}