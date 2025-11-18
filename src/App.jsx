import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BottomToolbar from "./components/BottomToolbar";
import SideMascots from "./components/SideMascots";

function App() {
  return (
    <div className="min-h-screen bg-[#0b0a10] text-white">
      {/* Highlands cinematic background */}
      <div className="fixed inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/40 to-black/80" />

      <div className="max-w-6xl mx-auto px-4 pt-4 pb-28">
        <Navbar />
        <div className="mt-6">
          <Hero />
        </div>
        {/* Board placeholder */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-200/5 to-indigo-400/5 hover:from-amber-200/10 hover:to-indigo-400/10 transition relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_10%,rgba(251,191,36,0.15),transparent_35%)]" />
              <div className="absolute bottom-2 left-2 text-[10px] px-1.5 py-0.5 rounded bg-black/40 border border-white/10 text-white/70">
                Enchanted Floating Plot
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomToolbar />
      <SideMascots />
    </div>
  );
}

export default App;
