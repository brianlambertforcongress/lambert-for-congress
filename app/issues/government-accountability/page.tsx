import IssueCommitments from "../../components/issues/IssueCommitments";
import IssueHero from "../../components/issues/IssueHero";
import IssueNavigation from "../../components/issues/IssueNavigation";
import IssueSection from "../../components/issues/IssueSection";

export default function GovernmentAccountabilityPage() {
  return (
    <main className="bg-slate-900 text-white">
      <IssueHero
        eyebrow="Where I Stand"
        title="Government Accountability"
        description="Government exists because of the people. It answers to the people. And it should always serve the people."
      />

      <IssueSection title="Why This Matters">
        <p>
          Trust in government has been declining for years, and for good reason.
          Too many elected officials have become more focused on protecting their
          own power than protecting the rights of the people they serve.
        </p>

        <p>
          Accountability begins with transparency. Public office is a public
          trust, and every representative should be held to the same standards
          they expect of the American people. Government exists to serve the
          people—not itself.
        </p>
      </IssueSection>

      <IssueCommitments
        commitments={[
          {
            title: "Ban Congressional Stock Trading",
            description:
              "Members of Congress should never profit from information gained through public office.",
          },
          {
            title: "No Vote Without Time to Read the Bill",
            description:
              "Congress should not vote on legislation until every member has had sufficient time to read, understand, and evaluate its constitutional and fiscal impact.",
          },
          {
            title: "Increase Government Transparency",
            description:
              "The American people deserve to know how their government spends money and makes decisions.",
          },
          {
            title: "Eliminate Unconstitutional Agencies",
            description:
              "Federal agencies operating beyond the powers granted by the Constitution should be reformed or eliminated.",
          },
          {
            title: "Protect Whistleblowers",
            description:
              "Those who expose government waste, fraud, and abuse should be protected—not punished.",
          },
          {
            title: "Hold Congress Accountable",
            description:
              "Elected officials should live under the same laws they pass and be accountable to the people they represent.",
          },
        ]}
      />

      <IssueNavigation
        next={{
          href: "/issues/individual-liberty",
          label: "Individual Liberty",
        }}
      />
    </main>
  );
}