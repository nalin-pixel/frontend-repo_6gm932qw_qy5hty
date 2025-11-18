import { Wand2, FlaskConical, Broom, Trophy, Mail, Sword, Shield, ScrollText, Castle } from "lucide-react";

const tools = [
  { icon: Wand2, label: "Wand" },
  { icon: FlaskConical, label: "Potion" },
  { icon: Broom, label: "Broom" },
  { icon: Castle, label: "Castle" },
  { icon: Trophy, label: "Trophy" },
  { icon: Mail, label: "Owl Post" },
  { icon: Sword, label: "Sword" },
  { icon: Shield, label: "Shield" },
  { icon: ScrollText, label: "Spells" },
];

export default function BottomToolbar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 px-4 pb-4">
      <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-[#15141b]/80 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center justify-between px-3 py-2">
          {tools.map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="group flex flex-col items-center gap-1 px-3 py-2 text-xs text-white/70 hover:text-amber-200"
            >
              <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 group-hover:bg-white/10 flex items-center justify-center">
                <Icon size={18} />
              </div>
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
