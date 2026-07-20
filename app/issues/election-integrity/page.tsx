import IssueCommitments from "../../components/issues/IssueCommitments";
import IssueHero from "../../components/issues/IssueHero";
import IssueNavigation from "../../components/issues/IssueNavigation";
import IssueSection from "../../components/issues/IssueSection";
import RelatedIssues from "../../components/RelatedIssues";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Election Integrity and Secure, Transparent Voting",
  description:
    "Read Brian Lambert's position on secure elections, transparent voting systems, accurate results, and ensuring every legal vote is counted fairly.",
};
export default function ElectionIntegrityPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <IssueHero
        title="Every Legal Vote. Counted Fairly."
        subtitle="Election Integrity • Transparency • Public Confidence"
      />

      <IssueSection title="Why It Matters">
        <p>
          Confidence in our elections is essential to preserving our republic.
          Regardless of political party, every American should trust that
          elections are conducted fairly, transparently, and according to the
          law.
        </p>

        <p>
          Election integrity is not about helping one party or hurting another.
          It is about ensuring that every eligible citizen has the opportunity
          to vote, every legal vote is counted accurately, and every election is
          conducted with transparency and accountability.
        </p>

        <p>
          Public trust is earned through consistent rules, secure procedures,
          and open oversight—not political rhetoric.
        </p>
      </IssueSection>

      <IssueSection title="Where I Stand">
        <p>
          I support election systems that are secure, transparent, and easy for
          eligible citizens to use while making fraud difficult to commit and
          easy to detect.
        </p>

        <p>
          States should continue leading election administration while Congress
          respects constitutional limits on federal authority.
        </p>

        <p>
          Every lawful voter deserves confidence that their vote carries the
          same weight as every other lawful vote.
        </p>

        <p>
          Americans should never have to question whether the rules were applied
          fairly to everyone.
        </p>
      </IssueSection>

            <IssueSection title="My Commitments">
        <IssueCommitments
          commitments={[
            {
              title: "Protect Every Legal Vote",
              description:
                "Every eligible citizen should be able to vote, and every legal vote should be counted accurately.",
            },
            {
              title: "Promote Transparency",
              description:
                "Election processes should be open, observable, and accountable to the public.",
            },
            {
              title: "Support Secure Elections",
              description:
                "Election systems should protect against fraud while remaining accessible to lawful voters.",
            },
            {
              title: "Respect Constitutional Authority",
              description:
                "Election administration should remain consistent with the Constitution and the role of the states.",
            },
            {
              title: "Ensure Equal Application of the Law",
              description:
                "Election laws should be applied fairly and consistently to every voter, every campaign, and every jurisdiction.",
            },
            {
              title: "Restore Public Confidence",
              description:
                "Confidence in elections strengthens confidence in our entire constitutional republic.",
            },
          ]}
        />
      </IssueSection>

      <IssueSection title="Bottom Line">
        <p>
          Our elections should leave Americans with confidence—not doubt. Every
          eligible citizen deserves the opportunity to vote, and every legal
          vote deserves to be counted fairly, accurately, and transparently.
        </p>

        <p>
          Public confidence in our elections strengthens confidence in our republic itself.
        </p>
      </IssueSection>

      <IssueNavigation />
      <RelatedIssues
  issues={[
    {
      title: "Government Accountability",
      href: "/issues/government-accountability",
      description:
        "Transparent government and meaningful oversight are essential to maintaining public trust.",
    },
    {
      title: "Individual Liberty",
      href: "/issues/individual-liberty",
      description:
        "Every eligible citizen deserves a secure vote and confidence that their voice will be heard.",
    },
    {
      title: "Fiscal Responsibility",
      href: "/issues/fiscal-responsibility",
      description:
        "Election systems should protect public trust while using taxpayer resources responsibly.",
    },
  ]}
/>
    </main>
  );
}