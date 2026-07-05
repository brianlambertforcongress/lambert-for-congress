import VolunteerForm from "./VolunteerForm";

export default function JoinCampaign() {
  return (
    <section id="volunteer" className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-yellow-400">
            Join the Campaign
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            This Campaign Is Powered by the People
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-300">
            Whether you can volunteer at events, knock on doors, make phone
            calls, or simply help spread the word, there is a place for you on
            this team.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-yellow-400 bg-slate-900 p-8">
            <h3 className="mb-4 text-2xl font-bold text-yellow-400">
              🤝 Volunteer
            </h3>

            <p className="mb-6 text-gray-300">
              Help at events, knock on doors, make phone calls, or lend a hand
              however you can.
            </p>

            <p className="mt-6 font-semibold text-yellow-400">
              Complete the form below to join Team Lambert.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400 bg-slate-900 p-8">
            <h3 className="mb-4 text-2xl font-bold text-yellow-400">
              📣 Spread the Word
            </h3>

            <p className="text-gray-300">
              Tell your friends, family, neighbors, and coworkers about the
              campaign.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <VolunteerForm />
        </div>
      </div>
    </section>
  );
}