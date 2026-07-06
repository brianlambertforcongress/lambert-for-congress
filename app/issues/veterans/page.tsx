import IssueCommitments from "../../components/issues/IssueCommitments";
import IssueHero from "../../components/issues/IssueHero";
import IssueNavigation from "../../components/issues/IssueNavigation";
import IssueSection from "../../components/issues/IssueSection";

export default function VeteransPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <IssueHero
        title="My Service Didn't End With Retirement."
        subtitle="20-Year U.S. Navy Veteran • Disabled Veteran • Father"
      />

      <IssueSection title="Why It Matters">
        <p>
          For twenty years, I had the privilege of serving our nation in the
          United States Navy.
        </p>

        <p>
          Retirement didn&apos;t mark the end of my service. It marked the
          beginning of a new chapter.
        </p>

        <p>
          I continued serving my family, my community, and now I&apos;m asking
          for the opportunity to continue that service in Congress.
        </p>
      </IssueSection>

      <IssueSection title="My Perspective">
        <p>
          My experience with the Department of Veterans Affairs has generally
          been a positive one. I&apos;ve been fortunate to receive quality care
          from doctors, nurses, and staff who truly care about veterans.
        </p>

        <p>
          Where I believe we need improvement isn&apos;t with the people —
          it&apos;s with the bureaucracy.
        </p>

        <p>
          Too many veterans spend months waiting on claims, navigating
          unnecessary paperwork, or struggling to access the care they&apos;ve
          already earned.
        </p>
      </IssueSection>

      <IssueCommitments
        commitments={[
          {
            title: "Protect Earned Benefits",
            description:
              "Benefits earned through military service should never be treated as political bargaining chips.",
          },
          {
            title: "Cut VA Bureaucracy",
            description:
              "Veterans should not have to fight months of paperwork to receive the care and benefits they have earned.",
          },
          {
            title: "Improve VA Accountability",
            description:
              "The Department of Veterans Affairs must serve veterans first, not protect broken systems.",
          },
          {
            title: "Expand Community Care",
            description:
              "When the VA cannot provide timely treatment, veterans should have access to care in their own communities.",
          },
          {
            title: "Strengthen Mental Health Support",
            description:
              "PTSD, suicide prevention, and mental health treatment must be treated with urgency and seriousness.",
          },
          {
            title: "Respect Veteran Choice",
            description:
              "Veterans should have a meaningful voice in shaping the policies and healthcare options that affect them.",
          },
        ]}
      />

      <IssueSection title="My Oath">
        <p>
          For twenty years, I swore an oath to support and defend the
          Constitution of the United States against all enemies, foreign and
          domestic.
        </p>

        <p>
          That oath did not end the day I retired from the United States Navy.
          It is a promise that continues to guide my life and my service.
        </p>

        <p className="font-semibold text-white">
          Before I cast a vote, I&apos;ll ask one question:{" "}
          <span className="text-yellow-400">Is it constitutional?</span>
        </p>
      </IssueSection>

      <IssueNavigation
        next={{
          href: "/issues/fiscal-responsibility",
          label: "Fiscal Responsibility",
        }}
      />
    </main>
  );
}