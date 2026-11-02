import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Sun, Waves, Flag, PhoneCall, ShieldCheck } from 'lucide-react';

interface GuestBarProps {
  currentLang: Language;
}

export const GuestBar: React.FC<GuestBarProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="bg-gradient-to-r from-[#172b40] via-[#0f1e2e] to-[#172b40] text-white border-b border-[#c5a059]/30 py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Left: Weather and sea information */}
        <div className="flex items-center flex-wrap gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4 text-[#e2c275] animate-spin-slow" />
            <span className="text-white/70">{t.guestBar.weather}:</span>
            <span className="font-semibold text-[#faf8f5]">26°C · Sunny</span>
          </div>

          <div className="flex items-center gap-2">
            <Waves className="w-4 h-4 text-cyan-300" />
            <span className="text-white/70">{t.guestBar.seaTemp}:</span>
            <span className="font-semibold text-cyan-200">23°C (Mahdia Bay)</span>
          </div>

          <div className="flex items-center gap-2">
            <Flag className="w-4 h-4 text-emerald-400" />
            <span className="text-white/70">{t.guestBar.beachFlag}:</span>
            <span className="font-semibold text-emerald-300">{t.guestBar.calmSea}</span>
          </div>
        </div>

        {/* Right: Quick Front Desk dial */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1.5 text-white/60">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>5-Star Luxury Certified</span>
          </div>

          <div 
            className="flex items-center gap-1.5 bg-[#c5a059]/15 text-[#e2c275] px-2.5 py-1 rounded border border-[#c5a059]/30 select-none"
            title="Dial 9 from your suite telephone"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Front Desk: Dial 9</span>
          </div>
        </div>
      </div>
    </section>
  );
};
