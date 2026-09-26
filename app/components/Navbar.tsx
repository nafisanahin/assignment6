export default function Navbar() {
  return (
    <nav className="border-b border-white/10 bg-black">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <div className="text-xl font-black tracking-tight text-white">
          FITLOG
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="/" className="text-sm font-bold text-[#CCFF00]">
            WORKOUT
          </a>

          <a
            href="/my-plan"
            className="text-sm font-bold text-white transition hover:text-[#CCFF00]"
          >
            MY PLAN
          </a>
        </div>

        {/* Counters */}
        <div className="flex items-center gap-3">
          <a
            href="/my-plan"
            className="rounded-full bg-[#CCFF00] px-4 py-2 text-xs font-black text-black"
          >
            PLAN 0
          </a>

          <a
            href="/my-plan"
            className="rounded-full border border-white/30 px-4 py-2 text-xs font-black text-white"
          >
            SAVED 0
          </a>
        </div>

      </div>
    </nav>
  );
}