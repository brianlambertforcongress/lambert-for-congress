import IssueCommitments from "../../components/issues/IssueCommitments";
import IssueHero from "../../components/issues/IssueHero";
import IssueNavigation from "../../components/issues/IssueNavigation";
import IssueSection from "../../components/issues/IssueSection";
import RelatedIssues from "../../components/RelatedIssues";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Individual Liberty and Constitutional Rights",
  description:
    "Read Brian Lambert's position on individual liberty, constitutional rights, personal freedom, privacy, and limiting government interference in American lives.",
};
export default function IndividualLibertyPage() {
  return (
    <main className="bg-slate-900 text-white">
      <IssueHero
        title="Individual Liberty"
        subtitle="Every American is born with rights. Government does not create those rights, and it should not take them away."
      />

      <IssueSection title="Why This Matters">
        <p>
          Liberty is not a gift from government. It is the birthright of every
          American.
        </p>

        <p>
          Free speech, privacy, property rights, due process, religious liberty,
          and the right to keep and bear arms are not optional. They are
          protected by the Constitution and must be defended without apology.
        </p>

        <p>
          When government treats freedom like a permission slip, it stops
          serving the people and starts ruling over them.
        </p>
      </IssueSection>

      <IssueCommitments
        commitments={[
          {
            title: "Defend the Bill of Rights",
            description:
              "The Bill of Rights is not a list of government privileges. It is a boundary government must not cross.",
          },
          {
            title: "Protect Free Speech",
            description:
              "Americans should never fear government punishment for speaking their minds or challenging those in power.",
          },
          {
            title: "Protect Religious Liberty",
            description:
              "Government has no authority to dictate matters of conscience, faith, or belief.",
          },
          {
            title: "Defend the Second Amendment",
            description:
              "The right to keep and bear arms is a constitutional right and must be protected.",
          },
          {
            title: "Protect Privacy and Property",
            description:
              "Americans have the right to be secure in their homes, property, personal data, and private lives.",
          },
          {
            title: "Oppose Government Overreach",
            description:
              "Personal decisions should remain with individuals and families, not federal bureaucrats.",
          },
        ]}
      />

      <IssueSection title="The Bottom Line">
        <p>
          Liberty is not negotiable. It does not belong to the government, and
          it should never depend on which party is in power.
        </p>

        <p>
          Freedom is not Left or Right. It is American.
        </p>
      </IssueSection>

      <IssueNavigation />
      <RelatedIssues
  issues={[
    {
      title: "Government Accountability",
      href: "/issues/government-accountability",
      description:
        "Government must remain within its constitutional limits and answer to the people it serves.",
    },
    {
      title: "Second Amendment",
      href: "/issues/second-amendment",
      description:
        "The right to keep and bear arms is an individual liberty that government must not infringe.",
    },
    {
      title: "Healthcare Reform",
      href: "/issues/healthcare",
      description:
        "Patients should control their healthcare decisions without unnecessary government interference.",
    },
  ]}
/>
    </main>
  );
}