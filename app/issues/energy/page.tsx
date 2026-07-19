import IssueCommitments from "../../components/issues/IssueCommitments";
import IssueHero from "../../components/issues/IssueHero";
import IssueNavigation from "../../components/issues/IssueNavigation";
import IssueSection from "../../components/issues/IssueSection";
import RelatedIssues from "../../components/RelatedIssues";

export default function EnergyPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <IssueHero
        title="American Energy Means American Strength."
        subtitle="Energy Independence • Free Markets • National Security"
      />

      <IssueSection title="Why It Matters">
        <p>
          Affordable, reliable energy powers every part of the American economy.
          Families, farmers, manufacturers, and small businesses all depend on
          access to abundant and dependable energy.
        </p>

        <p>
          Energy policy is more than an economic issue—it is a national security
          issue. A nation that depends on foreign adversaries for critical
          energy resources weakens its own independence.
        </p>

        <p>
          America has the resources, innovation, and workforce to meet our own
          energy needs while continuing to develop new technologies for the
          future.
        </p>

        <p>
          Government should encourage innovation and responsible development,
          not pick winners and losers through mandates and subsidies.
        </p>
      </IssueSection>

      <IssueSection title="Where I Stand">
        <p>
          I support an all-of-the-above energy strategy that allows American
          producers to compete and innovate in a free market.
        </p>

        <p>
          I support responsible domestic production of oil, natural gas,
          nuclear power, and renewable energy where it makes economic sense.
        </p>

        <p>
          Energy decisions should be driven by consumers, innovation, and sound
          science—not political ideology.
        </p>

        <p>
          America's goal should be energy security, affordable prices, and
          reduced dependence on foreign governments.
        </p>
      </IssueSection>

      <IssueSection title="My Commitments">
        <IssueCommitments
          commitments={[
            {
              title: "Promote Energy Independence",
              description:
                "America should produce the energy it needs whenever possible.",
            },
            {
              title: "Strengthen National Security",
              description:
                "Reliable domestic energy reduces dependence on foreign adversaries.",
            },
            {
              title: "Support Free Markets",
              description:
                "Competition and innovation—not government mandates—should guide energy policy.",
            },
            {
              title: "Encourage Innovation",
              description:
                "New technologies should compete on their merits and benefit consumers.",
            },
            {
              title: "Reduce Regulatory Burdens",
              description:
                "Unnecessary regulations should not stand in the way of responsible energy production.",
            },
            {
              title: "Protect Affordability",
              description:
                "Energy policy should keep costs reasonable for American families and businesses.",
            },
          ]}
        />
      </IssueSection>

      <IssueSection title="Bottom Line">
        <p>
          America is strongest when it can power its homes, businesses, and
          military with reliable, affordable energy produced here at home.
        </p>

        <p>
          A strong energy policy strengthens our economy, protects our national
          security, and preserves our independence.
        </p>
      </IssueSection>

      <IssueNavigation />
      <RelatedIssues
  issues={[
    {
      title: "Fiscal Responsibility",
      href: "/issues/fiscal-responsibility",
      description:
        "Affordable energy reduces pressure on family budgets and strengthens the American economy.",
    },
    {
      title: "National Defense",
      href: "/issues/national-defense",
      description:
        "American energy independence strengthens national security and reduces reliance on unstable foreign governments.",
    },
    {
      title: "Government Accountability",
      href: "/issues/government-accountability",
      description:
        "Energy policy should serve American families and businesses—not political interests or unaccountable bureaucracies.",
    },
  ]}
/>
    </main>
  );
}