import { Menu, ChevronDown, Wallet, Crown } from "lucide-react";

export default function Navbar({ wallet = "0xABCD...1234", house = "Raven" }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-6 py-4 bg-[#1b1a1f]/70 backdrop-blur-md border-b border-white/10 rounded-b-2xl shadow-lg">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-3">
          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 text-white">
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-600 shadow-[0_0_25px_rgba(251,191,36,0.45)] ring-1 ring-amber-300/50" />
            <span className="hidden sm:block text-sm tracking-widest text-amber-200/90">WIZARDING REALMS</span>
          </div>
        </div>

        {/* Center: Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="text-white/90 hover:text-amber-200 transition" href="#">PLAY</a>
          <a className="text-white/90 hover:text-amber-200 transition" href="#">HERO MINT</a>
          <div className="relative group">
            <button className="inline-flex items-center gap-1 text-white/90 hover:text-amber-200 transition">
              LANDS <ChevronDown size={16} />
            </button>
            <div className="pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity absolute left-0 mt-2 w-48 bg-[#131217] border border-white/10 rounded-xl p-2 shadow-xl">
              <a className="block px-3 py-2 rounded-lg text-white/80 hover:bg-white/5" href="#">My Plots</a>
              <a className="block px-3 py-2 rounded-lg text-white/80 hover:bg-white/5" href="#">Discover</a>
              <a className="block px-3 py-2 rounded-lg text-white/80 hover:bg-white/5" href="#">Auctions</a>
            </div>
          </div>
          <a className="text-white/90 hover:text-amber-200 transition" href="#">ROADMAP</a>
          <a className="text-white/90 hover:text-amber-200 transition" href="#">RESOURCE POOLS</a>
          <a className="text-white/90 hover:text-amber-200 transition" href="#">MARKET</a>
          <a className="text-white/90 hover:text-amber-200 transition" href="#">STATS</a>
        </nav>

        {/* Right: Wallet + House */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/90">
            <Wallet size={16} className="text-emerald-300" />
            <span className="text-xs font-mono">{wallet}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-br from-indigo-500/20 to-indigo-300/10 border border-indigo-400/30 text-indigo-200">
            <Crown size={16} />
            <span className="text-xs">{house} House</span>
          </div>
        </div>
      </div>
    </div>
  );
}
