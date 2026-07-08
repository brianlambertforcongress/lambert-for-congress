import IssueCommitments from "../../components/issues/IssueCommitments";
import IssueHero from "../../components/issues/IssueHero";
import IssueNavigation from "../../components/issues/IssueNavigation";
import IssueSection from "../../components/issues/IssueSection";

export default function ConstitutionalGovernmentPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <IssueHero
        title="Constitutional Government"
        subtitle="The Constitution limits the government—not the people."
      />

      <IssueSection title="Why It Matters">
        <p>
          The Constitution was not written to control the American people. It
          was written to limit the power of the federal government and protect
          the liberty of the people.
        </p>

        <p>
          When Washington expands beyond its constitutional limits, government
          becomes less accountable, less transparent, and farther removed from
          the people it serves.
        </p>
      </IssueSection>

      <IssueSection title="Where I Stand">
        <p>
          I believe every bill should begin with one question: does the
          Constitution authorize the federal government to do this?
        </p>

        <p>
          If the answer is no, my vote is no.
        </p>

        <p>
          Congress must respect the separation of powers, protect the Bill of
          Rights, review the scope of federal agencies, and return appropriate
          authority closer to the people and the states.
        </p>
      </IssueSection>

      <IssueSection title="My Commitments">
        <IssueCommitments
          commitments={[
            {
              title: "Begin with the Constitution",
              description:
                "Every vote I take will begin with whether the Constitution authorizes the federal government to act.",
            },
            {
              title: "Defend the Bill of Rights",
              description:
                "The rights of the people are not privileges granted by Washington.",
            },
            {
              title: "Respect Separation of Powers",
              description:
                "No branch of government should be allowed to exceed its constitutional role.",
            },
            {
              title: "Limit Federal Overreach",
              description:
                "Federal agencies should not exercise powers never granted by the Constitution.",
            },
            {
              title: "Return Power to the People",
              description:
                "Government should remain closest to the people whenever possible.",
            },
            {
              title: "Choose Principle Over Politics",
              description:
                "My oath is to the Constitution, not to party leaders or political pressure.",
            },
          ]}
        />
      </IssueSection>

      <IssueSection title="Bottom Line">
        <p>
          The Constitution does not limit freedom. It protects freedom by
          limiting government.
        </p>

        <p>
          My responsibility is to the Constitution and to the people of
          Florida&apos;s 14th Congressional District. If political pressure ever
          conflicts with either, I will choose principle over politics.
        </p>
      </IssueSection>

      <IssueNavigation />
    </main>
  );
}