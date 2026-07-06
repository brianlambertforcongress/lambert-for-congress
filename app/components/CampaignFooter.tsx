export default function CampaignFooter() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 px-6 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-extrabold">
          Brian Lambert for Congress
        </h2>

        <p className="mt-3 text-yellow-400 font-semibold">
          Freedom isn't Left or Right. It's American.
        </p>

        <p className="mt-6 text-slate-300">
          brianlambertforcongress@gmail.com
        </p>

        <div className="mt-8">
          <p className="uppercase tracking-[0.25em] text-sm text-slate-400 mb-4">
            Follow the Campaign
          </p>

          <div className="flex flex-wrap justify-center gap-5 text-yellow-400 font-semibold">
            <a href="https://www.facebook.com/profile.php?id=61591395144689" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              Facebook
            </a>

            <a href="https://www.instagram.com/brianlambertforcongress/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              Instagram
            </a>

            <a href="https://x.com/LambertFor14" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              X
            </a>

            <a href="https://www.youtube.com/@BrianLambertforCongress" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              YouTube
            </a>

            <a href="https://www.threads.com/@brianlambertforcongress" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              Threads
            </a>

            <a href="https://www.tiktok.com/@lambertforfl14" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              TikTok
            </a>
          </div>
        </div>

        <p className="mt-10 text-sm text-slate-500">
          © 2026 Brian Lambert for Congress. All rights reserved.
        </p>
      </div>
    </footer>
  );
}