import { Sparkles, Star, Castle } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e0d12]">
      {/* Background gradient + scene tint */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 via-amber-900/10 to-black/70" />
        <div className="absolute -inset-40 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.25),transparent_40%),radial-gradient(circle_at_70%_40%,rgba(99,102,241,0.35),transparent_35%)]" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-amber-300/70 drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -20, 0],
              x: [0, (Math.random() - 0.5) * 40, 0],
            }}
            transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: i * 0.05 }}
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative px-8 py-16 md:px-14 md:py-20 lg:px-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-amber-200 via-amber-300 to-amber-500 drop-shadow-[0_0_25px_rgba(251,191,36,0.35)]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              WIZARDING REALMS - GENESIS
            </motion.h1>
            <p className="mt-4 text-amber-100/80 max-w-2xl">
              Claim and place enchanted floating plots across the Scottish highlands at golden hour. Build manors, great castles, and uncover secrets by the Black Lake.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="px-5 py-2.5 rounded-xl bg-amber-400 text-black font-semibold shadow-[0_10px_30px_-10px_rgba(251,191,36,0.6)] hover:brightness-95">Play</button>
              <button className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/90 hover:bg-white/10">Hero Mint</button>
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-indigo-500/10 text-indigo-200 border border-indigo-400/30">
                <Castle size={18} />
                <span className="text-sm">REALM IS LIVE → Trade on Magic Eden</span>
              </div>
            </div>
          </div>

          {/* Visual Scene Placeholder */}
          <div className="flex-1 w-full h-[260px] md:h-[320px] lg:h-[380px] rounded-2xl overflow-hidden border border-white/10 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center">
            <div className="w-full h-full bg-gradient-to-t from-black/70 via-indigo-900/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
