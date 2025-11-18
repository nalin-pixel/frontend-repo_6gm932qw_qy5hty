export default function SideMascots() {
  return (
    <div className="pointer-events-none select-none">
      <div className="fixed left-4 bottom-28 w-28 h-28 md:w-32 md:h-32 z-20">
        <img
          src="https://images.unsplash.com/photo-1594724535409-241282a4b67a?q=80&w=600&auto=format&fit=crop"
          alt="Hedwig"
          className="w-full h-full object-cover object-center rounded-2xl border border-white/10 shadow-xl"
        />
        <div className="absolute -top-2 -left-2 px-2 py-0.5 rounded-full text-[10px] bg-white/10 text-white/80 border border-white/20">Hedwig</div>
      </div>
      <div className="fixed right-4 bottom-28 w-28 h-28 md:w-32 md:h-32 z-20">
        <img
          src="https://images.unsplash.com/photo-1588099768531-a72d4a198538?q=80&w=600&auto=format&fit=crop"
          alt="Baby dragon"
          className="w-full h-full object-cover object-center rounded-2xl border border-white/10 shadow-xl"
        />
        <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[10px] bg-white/10 text-white/80 border border-white/20">Norbert</div>
      </div>
    </div>
  );
}
