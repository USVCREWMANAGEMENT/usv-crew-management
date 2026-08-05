export default function HeroChart() {
  const waypoints = [
    { x: 60, y: 330, label: "WPT 01 · PROFIL" },
    { x: 140, y: 240, label: "WPT 02 · QUALIFICATION" },
    { x: 230, y: 260, label: "WPT 03 · MISE EN RELATION" },
    { x: 320, y: 140, label: "WPT 04 · EMBARQUEMENT" },
  ];
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <path d="M0,320 Q100,280 200,310 T400,290" fill="none" stroke="#0E7490" strokeWidth="1" opacity="0.25" />
        <path d="M0,350 Q120,320 220,345 T400,330" fill="none" stroke="#0E7490" strokeWidth="1" opacity="0.18" />
        <path d="M0,375 Q140,355 240,372 T400,362" fill="none" stroke="#0E7490" strokeWidth="1" opacity="0.12" />
        <g opacity="0.15" stroke="#0B2239" strokeWidth="1" fill="none">
          <circle cx="330" cy="80" r="34" />
          <circle cx="330" cy="80" r="24" />
          <line x1="330" y1="42" x2="330" y2="118" />
          <line x1="292" y1="80" x2="368" y2="80" />
        </g>
        <path d="M60,330 L140,240 L230,260 L320,140" fill="none" stroke="#F4530B" strokeWidth="2" className="route-animated" />
        {waypoints.map((w, i) => (
          <g key={w.label}>
            <circle cx={w.x} cy={w.y} r="7" fill="#FAFBFC" stroke="#0B2239" strokeWidth="1.5" />
            <circle cx={w.x} cy={w.y} r="2.5" fill={i === 3 ? "#F4530B" : "#0B2239"} />
            <text x={w.x + 12} y={w.y + (i === 2 ? 18 : -10)} fontFamily="'IBM Plex Mono', monospace" fontSize="9" fill="#0B2239" opacity="0.65">
              {w.label}
            </text>
          </g>
        ))}
        <text x="12" y="20" fontFamily="'IBM Plex Mono', monospace" fontSize="10" fill="#0B2239" opacity="0.4">
          43°17&apos;N — 005°22&apos;E
        </text>
        <text x="12" y="34" fontFamily="'IBM Plex Mono', monospace" fontSize="10" fill="#0B2239" opacity="0.4">
          MARSEILLE · FR
        </text>
      </svg>
    </div>
  );
}
