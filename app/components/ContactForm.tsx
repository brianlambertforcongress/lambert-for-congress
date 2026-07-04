export default function ContactForm() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">
          Contact the Campaign
        </h2>

        <p className="text-gray-300 text-center mb-10">
          Whether you want to volunteer, invite Brian to speak, or ask a question,
          send a message below.
        </p>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 text-white"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 text-white"
          />

          <input
            type="text"
            placeholder="Zip Code"
            className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 text-white"
          />

          <textarea
            placeholder="How would you like to get involved?"
            rows={5}
            className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 text-white"
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 text-slate-900 font-bold py-4 rounded-lg hover:bg-yellow-300"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}