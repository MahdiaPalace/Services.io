import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { MapPin, Phone, Mail, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];

  return (
    <footer className="bg-[#0b1520] text-white/80 border-t border-[#c5a059]/40 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand & Architecture */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-white p-1 shadow-md border border-[#c5a059] flex items-center justify-center overflow-hidden shrink-0">
                <img 
                  src="/assets/aistudio/logo-mahdia_Palace_c9c0e227.png" 
                  alt="Hôtel Mahdia Palace Thalasso & Spa" 
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <span className="font-heading text-lg font-bold tracking-widest text-[#faf8f5] block">
                  MAHDIA PALACE
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#c5a059] uppercase block font-medium">
                  Thalasso · Spa & Kneipp *****
                </span>
              </div>
            </div>
            <p className="text-xs text-white/60 max-w-sm leading-relaxed font-serif-elegant text-sm">
              {t.tagline}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#e2c275] pt-1">
              <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
              <span>Official 5-Star Luxury Vitrine & Guest Stay Portal</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c5a059] block">
              Palace Directory
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('palace')}
                  className="hover:text-[#e2c275] transition-colors"
                >
                  {t.nav.palace}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('dining')}
                  className="hover:text-[#e2c275] transition-colors"
                >
                  {t.nav.roomService}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('spa')}
                  className="hover:text-[#e2c275] transition-colors"
                >
                  {t.nav.spa}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('notices')}
                  className="hover:text-[#e2c275] transition-colors"
                >
                  {t.nav.notices}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cms')}
                  className="hover:text-[#e2c275] transition-colors text-white/50"
                >
                  {t.footer.staffPortal}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Front Desk & Address */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c5a059] block">
              Guest Services
            </span>
            <div className="space-y-2 text-xs text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>Front Desk: Dial 9 from suite</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>frontdesk@mahdiapalace.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Hôtel Mahdia Palace Thalasso & Spa. {t.footer.rights}
          </div>
          <div className="flex items-center gap-3">
            <span>Languages: EN · FR · AR · RU · IT · DE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
