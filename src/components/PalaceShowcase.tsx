import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { UtensilsCrossed, Sparkles, FileText, ChevronRight, Award } from 'lucide-react';

interface PalaceShowcaseProps {
  currentLang: Language;
  onNavigate: (tab: string) => void;
}

export const PalaceShowcase: React.FC<PalaceShowcaseProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];

  return (
    <div className="py-6 sm:py-10">
      {/* Front Page Main Frame */}
      <section className="relative overflow-hidden rounded-2xl border border-[#c5a059]/40 bg-[#0f1e2e] text-white shadow-2xl">
        {/* Background image with luxury overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80"
            alt="Hotel Mahdia Palace Architecture"
            className="w-full h-full object-cover opacity-35 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e2e] via-[#0f1e2e]/70 to-transparent"></div>
          {/* Subtle Arabesque arch shape */}
          <div className="absolute inset-0 bg-radial from-transparent via-[#0f1e2e]/50 to-[#0f1e2e]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 sm:py-28 text-center space-y-6">
          {/* Official Hotel Logo Crest */}
          <div className="mx-auto w-24 h-28 sm:w-28 sm:h-32 bg-white/95 rounded-2xl p-2.5 shadow-2xl border-2 border-[#c5a059] flex items-center justify-center backdrop-blur-md hover:scale-105 transition-transform duration-300">
            <img
              src="/assets/aistudio/logo-mahdia_Palace_c9c0e227.png"
              alt="Official Logo Hôtel Mahdia Palace Thalasso & Spa"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c5a059]/60 bg-[#c5a059]/20 text-[#e2c275] text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            <Award className="w-3.5 h-3.5" />
            <span>5-Star Thalasso · Spa & Kneipp Palace Resort</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#faf8f5] leading-tight drop-shadow-sm">
            {t.hero.title}
          </h1>

          <p className="font-serif-elegant text-lg sm:text-2xl text-white/90 max-w-2xl mx-auto italic font-normal leading-relaxed">
            "{t.hero.subtitle}"
          </p>

          {/* Quick CTA Actions */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('dining')}
              className="bg-[#c5a059] hover:bg-[#d4af37] text-[#0f1e2e] font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 text-sm group"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>{t.hero.exploreDining}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('spa')}
              className="bg-[#172b40]/80 hover:bg-[#1f3750] border border-[#c5a059]/50 text-white font-medium px-6 py-3 rounded-lg shadow backdrop-blur-sm transition-all flex items-center gap-2 text-sm hover:border-[#c5a059]"
            >
              <Sparkles className="w-4 h-4 text-[#e2c275]" />
              <span>{t.hero.exploreSpa}</span>
            </button>

            <button
              onClick={() => onNavigate('notices')}
              className="bg-transparent hover:bg-white/10 text-white/90 hover:text-white px-5 py-3 rounded-lg transition-colors flex items-center gap-2 text-sm"
            >
              <FileText className="w-4 h-4 text-[#c5a059]" />
              <span>{t.hero.viewNotices}</span>
            </button>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/70">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              {t.hero.roomServiceHours}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#e2c275]"></span>
              {t.hero.beachStatus}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
