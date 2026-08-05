import { Crosshair } from "lucide-react";

export default function ChartEyebrow({ fix, children }) {
  return (
    <p className="font-chart text-[11px] uppercase tracking-[0.2em] text-[#0E7490] mb-4 flex items-center gap-2">
      <Crosshair className="w-3 h-3" strokeWidth={1.5} />
      {fix && <span className="text-[#0B2239]/40">{fix}</span>}
      {children}
    </p>
  );
}
