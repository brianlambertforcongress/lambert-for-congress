import IssueCommitments from "../../components/issues/IssueCommitments";
import IssueHero from "../../components/issues/IssueHero";
import IssueNavigation from "../../components/issues/IssueNavigation";
import IssueSection from "../../components/issues/IssueSection";

export default function SecondAmendmentPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <IssueHero
        title="The Second Amendment Protects the First."
        subtitle="Constitutional Carry • Self-Defense • Shall Not Be Infringed"
      />

      <IssueSection title="Why It Matters">
        <p>
          The right to keep and bear arms is not a privilege handed down by the
          government. It is a constitutional protection of a natural right.
        </p>

        <p>
          The Second Amendment exists because free people have the right to
          defend themselves, their families, their homes, and their liberty.
        </p>

        <p>
          I believe in that right without apology. As a Navy veteran, a father,
          and a student of firearms technology, I understand that responsible
          gun ownership is rooted in discipline, safety, and personal
          responsibility.
        </p>

        <p>
          Law-abiding Americans should not have to beg the government for
          permission to exercise a right that already belongs to them.
        </p>
      </IssueSection>

      <IssueSection title="Where I Stand">
        <p>
          I support constitutional carry nationwide for law-abiding adults. No
          permit. No government permission slip. No treating the Bill of Rights
          like a list of privileges.
        </p>

        <p>
          I support national reciprocity because your constitutional rights do
          not disappear when you cross a state line.
        </p>

        <p>
          I oppose unconstitutional gun bans, magazine bans, and regulations
          that punish responsible citizens while doing little to stop violent
          criminals.
        </p>

        <p>
          The focus should be on violent crime, repeat offenders, and failures
          in enforcement — not on disarming the people who follow the law.
        </p>
      </IssueSection>

      <IssueSection title="My Commitments">
        <IssueCommitments
          commitments={[
            {
              title: "Defend Constitutional Carry",
              description:
                "I will support the right of law-abiding adults to carry firearms without asking government permission.",
            },
            {
              title: "Protect National Reciprocity",
              description:
                "Your Second Amendment rights should not end at a state border.",
            },
            {
              title: "Oppose Unconstitutional Gun Bans",
              description:
                "I will oppose bans on commonly owned firearms, magazines, and lawful accessories.",
            },
            {
              title: "Defend Due Process",
              description:
                "No American should lose a constitutional right without proper due process.",
            },
            {
              title: "Target Criminals, Not Citizens",
              description:
                "Public safety should focus on violent criminals, not law-abiding gun owners.",
            },
            {
              title: "Protect Responsible Gun Owners",
              description:
                "Responsible citizens should not be punished for the actions of criminals.",
            },
          ]}
        />
      </IssueSection>

      <IssueSection title="Bottom Line">
        <p>
          The Second Amendment is not about hunting. It is not about sport. It
          is about the right of free people to defend themselves and remain
          free.
        </p>

        <p>
          I will defend that right clearly, consistently, and without apology.
        </p>
      </IssueSection>

      <IssueNavigation />
    </main>
  );
}