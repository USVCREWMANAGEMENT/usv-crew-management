// Fond animé "carte marine vivante" : houle (lignes de sonde), balayage radar,
// ping sonar. CSS/SVG pur — transform/opacity uniquement, coupé si
// prefers-reduced-motion. À placer dans une section `relative overflow-hidden`.
export default function SeaBackground() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Balayage radar — coin supérieur droit */}
      <div className="radar-zone absolute -top-24 -right-24 w-[340px] h-[340px]">
        <div className="absolute inset-0 rounded-full border border-[#0B2239]/[0.07]" />
        <div className="absolute inset-[17%] rounded-full border border-[#0B2239]/[0.07]" />
        <div className="absolute inset-[34%] rounded-full border border-[#0B2239]/[0.07]" />
        <div className="radar-sweep absolute inset-0 rounded-full" />
      </div>

      {/* Ping sonar — repère discret côté gauche */}
      <div className="absolute left-[12%] bottom-[32%] w-3 h-3">
        <span className="sonar-ring absolute inset-0 rounded-full border border-[#0E7490]/40" />
        <span className="sonar-ring sonar-ring-delayed absolute inset-0 rounded-full border border-[#0E7490]/40" />
        <span className="absolute inset-[35%] rounded-full bg-[#0E7490]/30" />
      </div>

      {/* Houle — 2 nappes de lignes de sonde qui dérivent */}
      <svg
        className="swell swell-slow absolute bottom-0 left-0 h-32 w-[200%]"
        viewBox="0 0 1440 128"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M0,64 C120,40 240,40 360,64 C480,88 600,88 720,64 C840,40 960,40 1080,64 C1200,88 1320,88 1440,64" stroke="#0E7490" strokeOpacity="0.16" strokeWidth="1.5" />
        <path d="M0,96 C120,76 240,76 360,96 C480,116 600,116 720,96 C840,76 960,76 1080,96 C1200,116 1320,116 1440,96" stroke="#0E7490" strokeOpacity="0.10" strokeWidth="1.5" />
      </svg>
      <svg
        className="swell swell-fast absolute bottom-0 left-0 h-32 w-[200%]"
        viewBox="0 0 1440 128"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M0,80 C180,56 300,56 480,80 C660,104 780,104 960,80 C1140,56 1260,56 1440,80" stroke="#0E7490" strokeOpacity="0.12" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
