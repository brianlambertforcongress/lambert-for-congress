import IssueCommitments from "../../components/issues/IssueCommitments";
import IssueHero from "../../components/issues/IssueHero";
import IssueNavigation from "../../components/issues/IssueNavigation";
import IssueSection from "../../components/issues/IssueSection";
import RelatedIssues from "../../components/RelatedIssues";

export default function VeteransPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <IssueHero
        title="Veterans"
        subtitle="My service didn't end with retirement. It simply gave me a new way to serve."
      />

      <IssueSection title="Why This Matters">
        <p>
          For twenty years, I wore the uniform of the United States Navy.
          Retirement didn&apos;t end my commitment to serving others—it simply
          gave me a new way to serve.
        </p>

        <p>
          Our nation has a solemn obligation to every man and woman who answered
          the call to defend it. That obligation doesn&apos;t end when they take
          off the uniform.
        </p>

        <p>
          Keeping our promises to veterans means more than speeches on Veterans
          Day. It means ensuring we receive the care, respect, and support
          we&apos;ve earned through our service.
        </p>

        <p>
          Veteran suicide isn&apos;t just another policy issue to me. Over the
          years, I&apos;ve stood at the gravesides of thirteen fellow veterans
          who ultimately lost the battle within.
        </p>

        <p>
          Those losses are something I carry with me. They remind me that when
          we ask Americans to wear the uniform, our responsibility to them
          doesn&apos;t end when they take it off. That&apos;s why this isn&apos;t
          just another campaign promise for me. It&apos;s personal.
        </p>
      </IssueSection>

      <IssueSection title="My Perspective">
        <p>
          My experience with the Department of Veterans Affairs has generally
          been a positive one. I&apos;ve been fortunate to receive quality care
          from doctors, nurses, and staff who truly care about veterans.
        </p>

        <p>
          Where I believe we need improvement isn&apos;t with the people—it&apos;s
          with the bureaucracy.
        </p>

        <p>
          Too many veterans spend months waiting on claims, navigating
          unnecessary paperwork, or struggling to access the care they&apos;ve
          already earned. We can do better, and we owe it to every man and woman
          who served.
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
              "Veterans should have access to traditional medicine, community care, mental health support, and complementary, holistic, herbal, and alternative therapies when appropriate in consultation with their healthcare providers.",
          },
        ]}
      />

      <IssueSection title="The Bottom Line">
        <p>
          No veteran who survived the battlefield should come home and lose the
          battle within. Every veteran suicide is a tragedy, and one is too
          many.
        </p>

        <p>
          We owe our veterans more than gratitude—we owe them a system that
          responds quickly, treats them with dignity, and never stops working to
          ensure every veteran has hope, support, and access to the care
          they&apos;ve earned.
        </p>

        <p className="font-semibold text-white">
          Until veteran suicide is no longer a daily reality, our work is not
          finished.
        </p>
      </IssueSection>

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

      <IssueNavigation />
      <RelatedIssues
  issues={[
    {
      title: "National Defense",
      href: "/issues/national-defense",
      description:
        "A strong national defense requires responsible leadership and an enduring commitment to those who serve.",
    },
    {
      title: "Healthcare Reform",
      href: "/issues/healthcare",
      description:
        "Veterans and their families deserve timely care, real choices, and a healthcare system focused on patients.",
    },
    {
      title: "Government Accountability",
      href: "/issues/government-accountability",
      description:
        "Federal agencies, including the VA, must answer for delays, failures, and the treatment of those they serve.",
    },
  ]}
/>
    </main>
  );
}