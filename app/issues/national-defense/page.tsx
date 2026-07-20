import IssueCommitments from "../../components/issues/IssueCommitments";
import IssueHero from "../../components/issues/IssueHero";
import IssueNavigation from "../../components/issues/IssueNavigation";
import IssueSection from "../../components/issues/IssueSection";
import RelatedIssues from "../../components/RelatedIssues";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "National Defense, Military Readiness, and Peace Through Strength",
  description:
    "Read Navy veteran Brian Lambert's position on military readiness, responsible leadership, national security, and defending America while avoiding unnecessary wars.",
};
export default function NationalDefensePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <IssueHero
        title="Peace Through Strength. Leadership Through Service."
        subtitle="National Defense • Constitutional Authority • Support Our Troops"
      />

      <IssueSection title="Why This Matters">
        <p>
          For twenty years, I had the privilege of serving in the United States
          Navy. During that time, I learned that a strong military is one of the
          greatest deterrents to conflict.
        </p>

        <p>
          America's armed forces exist to defend our nation, protect our
          citizens, and preserve our liberty. They should never be weakened by
          politics, neglected through poor leadership, or committed to conflict
          without a clear mission.
        </p>

        <p>
          The decision to send American men and women into harm's way is among
          the most serious responsibilities entrusted to our elected leaders. It
          must never be taken lightly.
        </p>

        <p>
          Supporting our military means more than thanking veterans for their
          service. It means ensuring our troops are properly trained, equipped,
          led, and cared for before, during, and after their service.
        </p>
      </IssueSection>

      <IssueSection title="Where I Stand">
        <p>
          I support maintaining the strongest military in the world because
          strength discourages aggression and protects peace.
        </p>

        <p>
          I believe Congress should fulfill its constitutional responsibility
          when authorizing military action. Decisions of war deserve debate,
          accountability, and the consent of the American people through their
          elected representatives.
        </p>

        <p>
          I support providing our service members with the equipment, training,
          and leadership necessary to accomplish their missions safely and
          effectively.
        </p>

        <p>
          America should pursue peace whenever possible, but we must never be
          unprepared to defend ourselves, our allies, and our national
          interests.
        </p>
      </IssueSection>

            <IssueSection title="My Commitments">
  <IssueCommitments
    commitments={[
            {
              title: "Maintain a Strong Military",
              description:
                "A well-trained and properly equipped military is essential to protecting our nation and preserving peace.",
            },
            {
              title: "Honor the Constitution",
              description:
                "I will defend Congress's constitutional role in decisions involving war and military action.",
            },
            {
              title: "Support Service Members",
              description:
                "Our troops deserve the training, equipment, leadership, and support needed to accomplish every mission.",
            },
            {
              title: "Keep America's Promises",
              description:
                "Our nation has a lasting obligation to care for those who served and sacrificed in its defense.",
            },
            {
              title: "Protect Fiscal Strength",
              description:
                "A strong military requires a strong economy and a government that does not bury future generations in debt.",
            },
            {
              title: "Lead with Strength and Restraint",
              description:
                "Military force should always serve a clear national interest with defined objectives and accountability.",
            },
          ]}
        />
      </IssueSection>

      <IssueSection title="Bottom Line">
        <p>
          I spent twenty years serving this country in uniform. That experience
          taught me the value of discipline, preparation, accountability, and
          leadership.
        </p>

        <p>
          If elected, I will bring those same principles to Congress and never
          forget the responsibility that comes with asking America's sons and
          daughters to wear the uniform and defend our freedom.
        </p>
      </IssueSection>

      <IssueNavigation />
      <RelatedIssues
  issues={[
    {
      title: "Veterans",
      href: "/issues/veterans",
      description:
        "Our commitment to national defense must include honoring and supporting the men and women who served.",
    },
    {
      title: "Energy Independence",
      href: "/issues/energy",
      description:
        "Reliable American energy strengthens national security and reduces dependence on foreign governments.",
    },
    {
      title: "Second Amendment",
      href: "/issues/second-amendment",
      description:
        "A free nation must protect the constitutional rights and liberties of the people it exists to defend.",
    },
  ]}
/>
    </main>
  );
}