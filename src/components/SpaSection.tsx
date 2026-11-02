import React, { useState } from 'react';
import { Currency, Language, SpaCategory, SpaTreatment } from '../types';
import { translations } from '../data/translations';
import { filterSpaTreatments, formatPrice } from '../utils/hotelLogic';
import { Search, Clock, Sparkles, PhoneCall, Info, ShieldCheck } from 'lucide-react';

interface SpaSectionProps {
  currentLang: Language;
  currency: Currency;
  treatments: SpaTreatment[];
}

export const SpaSection: React.FC<SpaSectionProps> = ({
  currentLang,
  currency,
  treatments,
}) => {
  const t = translations[currentLang];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: { id: string; label: string }[] = [
    { id: 'all', label: t.spa.allCategories },
    { id: 'thalasso', label: t.spa.thalasso },
    { id: 'hammam', label: t.spa.hammam },
    { id: 'massages', label: t.spa.massages },
    { id: 'facials', label: t.spa.facials },
    { id: 'cures', label: t.spa.cures },
  ];

  const filteredTreatments = filterSpaTreatments(
    treatments,
    selectedCategory,
    searchQuery,
    currentLang
  );

  return (
    <div className="space-y-8 py-6">
      {/* Section Header */}
      <div className="border-b border-[#c5a059]/30 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold tracking-widest text-[#c5a059] uppercase block font-heading">
            Sanctuary of Thalassotherapy · Spa & Kneipp
          </span>
          <h2 className="font-heading text-3xl font-bold text-[#0f1e2e] mt-1">
            {t.spa.title}
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl font-serif-elegant text-base">
            {t.spa.subtitle}
          </p>
        </div>

        {/* Prominent Reception Callout Badge (In-room telephone instruction) */}
        <div
          className="self-start md:self-auto bg-[#0f1e2e] text-[#e2c275] border border-[#c5a059] px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 shadow-sm select-none"
        >
          <PhoneCall className="w-4 h-4 text-[#c5a059]" />
          <span>{t.spa.dialNine}</span>
        </div>
      </div>

      {/* Prominent Reception Notice Banner (No Online Appointment policy) */}
      <div className="bg-[#f5f0e8] border border-[#c5a059]/50 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 rounded-lg bg-[#0f1e2e] text-[#c5a059] shrink-0 mt-0.5 sm:mt-0">
            <PhoneCall className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h3 className="font-heading text-sm sm:text-base font-bold text-[#0f1e2e]">
              {t.spa.phoneNoticeTitle}
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed font-serif-elegant sm:text-sm">
              {t.spa.phoneNoticeDesc}
            </p>
          </div>
        </div>

        <div
          className="shrink-0 bg-[#c5a059]/20 border border-[#c5a059] text-[#0f1e2e] font-bold text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-xs select-none"
        >
          <PhoneCall className="w-3.5 h-3.5 text-[#a98540]" />
          <span>Dial 9 from Suite Phone</span>
        </div>
      </div>

      {/* Filter and search bar */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.spa.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-[#c5a059]/40 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c5a059]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>

          <div className="text-xs text-slate-500 hidden sm:flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
            <span>{t.spa.curativeProperties}</span>
          </div>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#c5a059]/20 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-[#0f1e2e] text-[#faf8f5] shadow'
                  : 'text-slate-600 hover:text-[#0f1e2e] hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Treatments Catalogue */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTreatments.map((treatment) => {
          const title = treatment.title[currentLang] || treatment.title.en;
          const desc = treatment.description[currentLang] || treatment.description.en;
          const benefits = treatment.benefits[currentLang] || treatment.benefits.en || [];
          const price = currency === 'TND' ? treatment.priceTND : treatment.priceEUR;

          return (
            <div
              key={treatment.id}
              className="bg-white rounded-xl border border-[#c5a059]/30 shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {/* Duration clean unboxed metadata */}
                    <div className="flex items-center gap-1.5 text-xs text-[#a98540] font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{treatment.duration}</span>
                      <span aria-hidden="true">·</span>
                      <span className="uppercase text-[10px] tracking-wider">{treatment.category}</span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-[#0f1e2e] mt-1">
                      {title}
                    </h3>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[10px] uppercase text-slate-400 block font-medium">
                      Per Guest
                    </span>
                    <span className="font-heading text-lg font-bold text-[#0f1e2e]">
                      {formatPrice(price, currency)}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 font-serif-elegant text-sm leading-relaxed">
                  {desc}
                </p>

                {/* Therapeutic Benefits */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-700 block">
                    {t.spa.benefits}:
                  </span>
                  <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-600">
                    {benefits.map((b, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#c5a059] shrink-0" />
                        <span className="line-clamp-1">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Telephone Information Notice */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <span className="text-[11px] text-slate-500 italic">
                  Information & reservations
                </span>
                <div
                  className="bg-[#0f1e2e] text-[#e2c275] border border-[#c5a059] px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-2xs select-none"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>{t.spa.bookSession}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
