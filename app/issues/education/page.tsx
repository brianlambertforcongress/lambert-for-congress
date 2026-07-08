import IssueCommitments from "../../components/issues/IssueCommitments";
import IssueHero from "../../components/issues/IssueHero";
import IssueNavigation from "../../components/issues/IssueNavigation";
import IssueSection from "../../components/issues/IssueSection";

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <IssueHero
        title="Our Children Deserve an Education, Not an Agenda."
        subtitle="Parents First • Local Control • Academic Excellence"
      />

      <IssueSection title="Why This Matters">
  <p>
    Education is not a one-size-fits-all model. Every child learns
    differently, every family has different priorities, and every community
    faces unique challenges. A successful education system should recognize
    those differences rather than forcing every student into the same mold.
  </p>

  <p>
    As a father of three and a former youth baseball coach, I've learned firsthand that
    no two children are exactly alike. Every child has unique strengths,
    interests, talents, and challenges that deserve to be recognized and
    encouraged—not measured by a single standard or expected to follow the
    same path.
  </p>

  <p>
    Parents know their children better than any federal agency ever will.
    They deserve the freedom to choose the educational environment that gives
    their child the greatest opportunity to succeed, whether that's a public
    school, charter school, private school, homeschool, career and technical
    education, or another path that best meets their child's needs.
  </p>

  <p>
    Our goal should be to cultivate curiosity, critical thinking, discipline,
    personal responsibility, and a lifelong love of learning. Washington
    should not dictate how every child in America is educated. Decisions
    should be made as close to students and families as possible, with
    parents, teachers, and local communities leading the way.
  </p>
</IssueSection>

      <IssueSection title="Where I Stand">
        <p>
          I support returning educational decisions to parents, teachers, and
          local communities while reducing unnecessary federal involvement.
        </p>

        <p>
          Schools should focus on reading, writing, mathematics, science,
          history, civics, and preparing students with practical skills they
          will use throughout their lives.
        </p>

        <p>
          Parents deserve transparency and a meaningful voice in their
          children's education. Strong schools are built through partnership
          with families, not by excluding them.
        </p>

        <p>
          Every student is different. Our education system should encourage
          excellence, innovation, and opportunities that help each child reach
          their full potential.
        </p>
      </IssueSection>

            <IssueSection title="My Commitments">
        <IssueCommitments
  commitments={[
    {
      title: "Support Educational Choice",
      description:
        "Every family should have the freedom to choose the educational path that best fits their child's unique needs and goals.",
    },
    {
      title: "Empower Parents",
      description:
        "Parents should be active partners in their children's education and have a meaningful voice in important decisions.",
    },
    {
      title: "Reward Great Teachers",
      description:
        "Excellent teachers deserve the resources, respect, and flexibility to help students succeed.",
    },
    {
      title: "Expand Career & Technical Education",
      description:
        "Students should have opportunities to pursue skilled trades, apprenticeships, and technical careers alongside traditional academic pathways.",
    },
    {
      title: "Return Decisions to Local Communities",
      description:
        "Education works best when decisions are made closer to students, families, and local schools—not by distant federal bureaucracies.",
    },
    {
      title: "Respect Every Student's Individual Needs",
      description:
        "No two students learn exactly alike. Our education system should encourage flexibility, innovation, and individualized learning rather than a one-size-fits-all approach.",
    },
  ]}
/>
      </IssueSection>

      <IssueSection title="Bottom Line">
        <p>
          America's future depends on the next generation. We honor that future
          by giving our children an education that develops knowledge,
          character, and independent thinking—not greater dependence on the
          federal government.
        </p>

        <p>
          Every child deserves the opportunity to succeed, and every parent
          deserves a voice in that journey.
        </p>
      </IssueSection>

      <IssueNavigation />
    </main>
  );
}