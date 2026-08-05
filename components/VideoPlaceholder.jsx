"use client";
import { Play } from "lucide-react";

export default function VideoPlaceholder({ label, sublabel }) {
  return (
    <div className="relative rounded-lg overflow-hidden aspect-video bg-[#0B2239] flex items-center justify-center group cursor-pointer">
      <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
        <path d="M0,180 Q100,150 200,175 T400,160" fill="none" stroke="#0E7490" strokeWidth="1" />
        <path d="M0,200 Q120,180 220,198 T400,188" fill="none" stroke="#0E7490" strokeWidth="1" opacity="0.6" />
        <path d="M30,190 L120,110 L230,130 L340,60" fill="none" stroke="#F4530B" strokeWidth="1.5" strokeDasharray="6 6" />
        <circle cx="30" cy="190" r="4" fill="#FAFBFC" />
        <circle cx="340" cy="60" r="4" fill="#F4530B" />
      </svg>
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center group-hover:bg-[#F4530B] group-hover:border-[#F4530B] transition-colors">
          <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" strokeWidth={0} />
        </div>
        <div className="text-center">
          <p className="text-white text-sm font-medium">{label}</p>
          {sublabel && <p className="font-chart text-white/40 text-[10px] uppercase tracking-widest mt-1">{sublabel}</p>}
        </div>
      </div>
    </div>
  );
}
