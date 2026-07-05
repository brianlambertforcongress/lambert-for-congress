export default function VolunteerForm() {
  return (
    <div className="overflow-hidden rounded-2xl border border-yellow-400/30 bg-white shadow-xl">
      <div className="bg-slate-900 px-6 py-8 text-center">
        <h2 className="text-3xl font-bold text-yellow-400">
          Join Team Lambert
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-300">
          Thank you for stepping forward to help restore constitutional
          government and bring principled leadership back to Congress. Every
          volunteer makes a difference.
        </p>
      </div>

      <iframe
        title="volunteer-registration"
        width="100%"
        height="700"
        src="https://app.proximityimpact.com/web-volunteer-form/1b39895a-6814-484e-9436-a1318672d9c0?name=Brian-Lambert&formId=63"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        className="block w-full border-0"
      />
    </div>
  );
}