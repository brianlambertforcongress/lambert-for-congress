export default function JoinCampaign() {
  return (
    <section className="py-24 px-6 bg-slate-800">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-5xl font-bold text-yellow-400 mb-6">
          Join the Campaign
        </h2>

        <p className="text-xl text-gray-300 leading-9 max-w-3xl mx-auto">
          This campaign isn't backed by political insiders or special interests.
          It's powered by people who believe America works best when government
          respects the Constitution and the freedom of its citizens.
        </p>

        <p className="text-xl text-gray-300 leading-9 mt-8 max-w-3xl mx-auto">
          Whether you can volunteer, introduce Brian to your community,
          share our message online, or simply stay informed, your support matters.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-14">

          <div className="bg-slate-900 rounded-2xl p-8 border border-yellow-400">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              🙋 Volunteer
            </h3>

            <p className="text-gray-300 mb-6">
              Help at events, knock on doors, make phone calls,
              or lend a hand however you can.
            </p>

            <a
              href="#contact"
              className="inline-block bg-yellow-400 text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-300"
            >
              Sign Up to Volunteer
            </a>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-yellow-400">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              📣 Spread the Word
            </h3>

            <p className="text-gray-300">
              Tell your friends, family, neighbors,
              and coworkers about the campaign.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}