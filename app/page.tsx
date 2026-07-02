import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center px-6">

          <h1 className="text-7xl font-bold text-yellow-400">
            Your Money.
            <br />
            Your Freedom.
            <br />
            Your Vote.
          </h1>

          <p className="mt-8 text-xl text-gray-300">
            Restoring constitutional government.
            <br />
            Returning power to the people.
          </p>

        </div>
      </main>
    </>
  );
}