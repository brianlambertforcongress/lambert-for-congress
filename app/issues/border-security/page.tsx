import IssueCommitments from "../../components/issues/IssueCommitments";
import IssueHero from "../../components/issues/IssueHero";
import IssueNavigation from "../../components/issues/IssueNavigation";
import IssueSection from "../../components/issues/IssueSection";

export default function BorderSecurityPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <IssueHero
        title="A Nation Without Secure Borders Is Not a Secure Nation."
        subtitle="Secure Borders • Secure Ports • Legal Immigration • Constitutional Government"
      />

      <IssueSection title="Why It Matters">
        <p>
          America has always welcomed people seeking freedom and opportunity.
          That tradition should continue.
        </p>

        <p>
          But every sovereign nation has both the right and the responsibility
          to know who is entering its borders, crossing its ports of entry, and
          accessing its territory. That responsibility exists to protect our
          national security and preserve the integrity of our immigration
          system.
        </p>

        <p>
          Compassion and security are not opposites. We can treat every person
          with dignity while still insisting that our laws be respected.
        </p>

        <p>
          An immigration system that is ignored or selectively enforced is unfair
to American citizens and to every immigrant who followed the legal
process. Respecting the rule of law is one of the ways we preserve both
our sovereignty and the integrity of the American Dream.
        </p>
      </IssueSection>

      <IssueSection title="Where I Stand">
        <p>
          I support securing all of America's borders and ports of entry through
          effective enforcement, modern technology, properly staffed personnel,
          and physical barriers where they are practical and effective.
        </p>

        <p>
          Border security is not limited to one stretch of land. It includes our
          southern border, northern border, coastlines, airports, seaports, and
          every lawful point of entry into the United States.
        </p>

        <p>
          I support legal immigration and believe America benefits from people
          who come here to work hard, contribute to their communities, and
          pursue the American Dream.
        </p>

        <p>
          I oppose policies that reward illegal immigration or encourage people
          to bypass our legal immigration system. The law should mean the same
          thing for everyone. If we choose which laws to enforce and which to
          ignore, we weaken respect for all of them.
        </p>
      </IssueSection>

            <IssueSection title="My Commitments">
        <IssueCommitments
          commitments={[
            {
              title: "Secure Every Border",
              description:
                "I will support policies that secure America's land borders, coastlines, ports, airports, and every lawful point of entry.",
            },
            {
              title: "Strengthen Legal Immigration",
              description:
                "Our immigration system should be lawful, efficient, transparent, and fair to those who follow the rules.",
            },
            {
              title: "End Incentives for Illegal Immigration",
              description:
                "Federal policies should discourage illegal entry instead of rewarding it.",
            },
            {
              title: "Support Border Communities",
              description:
                "Communities on the front lines should receive the resources and support necessary to fulfill this national responsibility.",
            },
            {
              title: "Protect the Rule of Law",
              description:
                "Immigration laws should be enforced consistently and fairly. Selective enforcement weakens respect for every law on the books.",
            },
            {
              title: "Demand Congressional Accountability",
              description:
                "Congress should solve this problem instead of using it as a campaign issue every election cycle.",
            },
          ]}
        />
      </IssueSection>

      <IssueSection title="Bottom Line">
        <p>
          A nation has both the right and the responsibility to know who is
          entering its territory. That responsibility does not end at the
          southern border—it includes every border, every port, and every lawful
          point of entry.
        </p>

        <p>
          We can welcome legal immigrants, protect our national security, and
          uphold the rule of law at the same time. Those are not competing
          goals. They are the responsibilities of a constitutional government.
        </p>
      </IssueSection>

      <IssueNavigation />
    </main>
  );
}