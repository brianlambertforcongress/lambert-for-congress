import IssueCommitments from "../../components/issues/IssueCommitments";
import IssueHero from "../../components/issues/IssueHero";
import IssueNavigation from "../../components/issues/IssueNavigation";
import IssueSection from "../../components/issues/IssueSection";
import RelatedIssues from "../../components/RelatedIssues";

export default function GovernmentAccountabilityPage() {
  return (
    <main className="bg-slate-900 text-white">
      <IssueHero
        title="Government Accountability"
        subtitle="Government exists because of the people. It answers to the people. And it should always serve the people."
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

      <IssueSection title="The Bottom Line">
        <p>
          Accountability is not achieved through more speeches or more empty
          promises. It begins when elected officials remember who they work for.
        </p>

        <p>
          Every bill that comes before me will be judged by one question:{" "}
          <strong className="text-white">Is this constitutional?</strong> If
          the answer is no, my vote will be no.
        </p>

        <p>
          The Constitution was not written because Americans could not be
          trusted. It was written because government could not.
        </p>
      </IssueSection>

      <IssueNavigation />
      <RelatedIssues
  issues={[
    {
      title: "Fiscal Responsibility",
      href: "/issues/fiscal-responsibility",
      description:
        "Washington must control spending, confront the national debt, and respect every taxpayer dollar.",
    },
    {
      title: "Election Integrity",
      href: "/issues/election-integrity",
      description:
        "Public trust depends on transparent elections in which every legal vote is counted fairly.",
    },
    {
      title: "Individual Liberty",
      href: "/issues/individual-liberty",
      description:
        "Government accountability begins with respecting the constitutional rights of every American.",
    },
  ]}
/>
    </main>
  );
}