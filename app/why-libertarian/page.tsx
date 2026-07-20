import IssueHero from "../components/issues/IssueHero";
import IssueSection from "../components/issues/IssueSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Brian Lambert Is a Libertarian",
  description:
    "Learn why Brian Lambert is running as a Libertarian for Congress in Florida's 14th District and how constitutional government, individual liberty, and personal responsibility guide his campaign.",
};
export default function WhyLibertarianPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <IssueHero
        title="Why I&apos;m a Libertarian"
        subtitle="Principles Before Politics."
      />

      <IssueSection title="Why I Believe">
        <div className="space-y-6 text-lg leading-8 text-slate-300">
          <p>
            I didn&apos;t become a Libertarian because it was politically
            convenient.
          </p>

          <p>
            I became a Libertarian because I reached a point where I could no
            longer ignore what I was seeing.
          </p>

          <p>
            For twenty years, I served this country in the United States Navy. I
            swore an oath to support and defend the Constitution of the United
            States—not a political party, not a president, and not a government
            bureaucracy.
          </p>

          <p className="text-2xl font-bold leading-9 text-white">
            That oath didn&apos;t expire when I retired.
          </p>

          <p>
            Like millions of Americans, I&apos;ve watched Washington spend money
            it doesn&apos;t have, pass laws it was never meant to pass, and grow
            further away from the people it is supposed to serve. Election after
            election, we&apos;re told that this time will be different.
          </p>

          <p>Yet the debt grows.</p>

          <p>Government grows.</p>

          <p>Our freedoms continue to shrink.</p>

          <div className="my-10 rounded-2xl border border-yellow-400/30 bg-slate-800/70 p-8">
            <p className="text-xl font-semibold leading-9 text-white">
              At some point, I stopped asking which party was responsible and
              started asking a different question:
            </p>

            <p className="mt-6 text-3xl font-extrabold text-yellow-400">
              Is any of this constitutional?
            </p>
          </div>

          <p>
            That question changed everything.
          </p>

          <p>
            The Constitution was written to limit the power of government, not
            the freedom of the people. Somewhere along the way, we&apos;ve allowed
            that relationship to be turned upside down. Today, too many
            politicians act as though our rights come from Washington, when in
            reality they exist long before any government does.
          </p>

          <p>I don&apos;t believe freedom belongs to Republicans.</p>

          <p>I don&apos;t believe freedom belongs to Democrats.</p>

          <p className="text-2xl font-bold leading-9 text-white">
            Freedom belongs to every American.
          </p>

          <p>That&apos;s why I&apos;m a Libertarian.</p>

          <p>
            To me, being Libertarian isn&apos;t about winning arguments or fitting
            into a political label. It&apos;s about believing that free people are
            better at running their own lives than politicians are.
          </p>

          <p>I trust parents to raise their children.</p>

          <p>I trust workers to earn their own success.</p>

          <p>I trust entrepreneurs to build opportunity.</p>

          <p>
            And I trust the American people far more than I trust Washington.
          </p>

          <p>
            That doesn&apos;t mean government has no role.
          </p>

          <p>
            Government has an important responsibility: to defend our nation,
            protect our constitutional rights, uphold the rule of law, and
            perform the limited duties assigned to it by the Constitution.
          </p>

          <p>
            But when government reaches beyond those limits, liberty always pays
            the price.
          </p>

          <p>
            That&apos;s why I believe Congress should balance the budget instead of
            passing debt to our children.
          </p>

          <p>
            That&apos;s why I believe inflation is a hidden tax created by reckless
            spending.
          </p>

          <p>
            That&apos;s why I believe every bill should first answer one simple
            question:
          </p>

          <p className="text-2xl font-bold leading-9 text-yellow-400">
            Is it constitutional?
          </p>

          <p>If the answer is no, it shouldn&apos;t become law.</p>

          <p>
            My campaign isn&apos;t about expanding government in a different
            direction.
          </p>

          <p>
            It&apos;s about returning government to its proper size, its proper
            role, and its proper limits.
          </p>

          <p>Some people will disagree with me.</p>

          <p>That&apos;s okay.</p>

          <p>
            One of the greatest strengths of America is that we&apos;re free to
            disagree.
          </p>

          <p>But I hope we can all agree on one thing:</p>

          <p>Government exists because of the people.</p>

          <p>It answers to the people.</p>

          <p>And it should always serve the people.</p>

          <p>
            I didn&apos;t choose the Libertarian Party because I was looking for a
            team.
          </p>

          <p>
            I chose it because its principles most closely match the oath I took
            years ago and the country I still believe in today.
          </p>
        </div>
      </IssueSection>

      <section className="px-6 pb-24 text-center">
        <div className="mx-auto max-w-4xl rounded-3xl border border-yellow-400/30 bg-slate-800 p-10">
          <p className="text-3xl font-extrabold text-white md:text-4xl">
            Freedom isn&apos;t Left or Right.
          </p>

          <p className="mt-4 text-4xl font-extrabold text-yellow-400 md:text-5xl">
            It&apos;s American.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            And it&apos;s worth defending.
          </p>
        </div>
      </section>
    </main>
  );
}