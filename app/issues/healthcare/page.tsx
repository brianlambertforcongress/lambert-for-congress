import IssueCommitments from "../../components/issues/IssueCommitments";
import IssueHero from "../../components/issues/IssueHero";
import IssueNavigation from "../../components/issues/IssueNavigation";
import IssueSection from "../../components/issues/IssueSection";

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <IssueHero
        title="Healthcare Should Be About Patients, Not Politics."
        subtitle="Patient Choice • Medical Freedom • Price Transparency • Medical Freedom"
      />

      <IssueSection title="Why It Matters">
        <p>
          Every American deserves access to quality healthcare, but access does
          not improve when Washington makes more decisions for patients and
          doctors.
        </p>

        <p>
          Over decades, healthcare has become increasingly expensive,
          unnecessarily complicated, and buried under layers of bureaucracy that
          drive up costs while reducing patient choice.
        </p>

        <p>
          Real reform starts by putting patients back in control, encouraging
          competition, and making prices transparent so Americans can make
          informed decisions about their own care.
        </p>

        <p>
          Healthcare decisions should be made in the exam room between a patient
          and their physician—not by politicians or federal agencies.
        </p>
      </IssueSection>

      <IssueSection title="Where I Stand">
        <p>
          I support expanding patient choice through free-market competition,
          greater price transparency, and fewer unnecessary federal mandates.
        </p>

        <p>
          Patients deserve to know what medical services cost before receiving
          treatment, just as they would with nearly every other purchase they
          make.
        </p>

        <p>
          I support protecting the doctor-patient relationship from unnecessary
          political interference while encouraging innovation that improves care
          and lowers costs.
        </p>

        <p>
          As a disabled Navy veteran, I also believe our nation has a solemn
          obligation to provide the care promised to those who served. Keeping
          that promise should never become a political bargaining chip.
        </p>
      </IssueSection>

            <IssueSection title="My Commitments">
        <IssueCommitments
          commitments={[
            {
              title: "Put Patients First",
              description:
                "Healthcare decisions belong to patients and their doctors—not Washington bureaucrats.",
            },
            {
              title: "Increase Price Transparency",
              description:
                "Americans deserve to know the cost of care before receiving treatment.",
            },
            {
              title: "Expand Competition",
              description:
                "Greater competition leads to lower costs, better service, and more innovation.",
            },
            {
              title: "Protect Medical Freedom",
              description:
                "I will oppose unnecessary federal interference in personal medical decisions.",
            },
            {
              title: "Reduce Bureaucracy",
              description:
                "Healthcare should be simpler, more responsive, and less burdened by unnecessary federal rules.",
            },
            {
              title: "Honor Our Commitment to Veterans",
              description:
                "Veterans earned their healthcare through service, and our government must keep that promise.",
            },
          ]}
        />
      </IssueSection>
      
      <IssueSection title="Bottom Line">
        <p>
          Healthcare should serve patients—not politicians, insurance companies,
          or bureaucracies. When individuals have more choices, more
          transparency, and greater control over their own care, everyone
          benefits.
        </p>

        <p>
          My goal is simple: make healthcare more affordable, more accessible,
          and more accountable by trusting Americans to make their own
          healthcare decisions.
        </p>
      </IssueSection>

      <IssueNavigation />
    </main>
  );
}