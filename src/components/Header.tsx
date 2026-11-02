import React, { useState } from 'react';
import { Currency, Language } from '../types';
import { translations } from '../data/translations';
import { 
  UtensilsCrossed, 
  Sparkles, 
  FileText, 
  Settings, 
  Globe, 
  Menu as MenuIcon, 
  X, 
  Home,
  Check
} from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  currency: Currency;
  onToggleCurrency: () => void;
  activeTab: string;
  onSelectTab: (tab: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  roomNumber: string;
  onUpdateRoomNumber: (room: string) => void;
}

const languages: { code: Language; name: string; flag: string; native: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧', native: 'English' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', native: 'Français' },
  { code: 'ar', name: 'Arabic', flag: '🇹🇳', native: 'العربية' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺', native: 'Русский' },
  { code: 'it', name: 'Italian', flag: '🇮🇹', native: 'Italiano' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', native: 'Deutsch' },
];

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onSelectLang,
  currency,
  onToggleCurrency,
  activeTab,
  onSelectTab,
  cartCount,
  onOpenCart,
  roomNumber,
  onUpdateRoomNumber,
}) => {
  const t = translations[currentLang];
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [editingRoom, setEditingRoom] = useState(false);
  const [tempRoom, setTempRoom] = useState(roomNumber);

  const handleSaveRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempRoom.trim()) {
      onUpdateRoomNumber(tempRoom.trim());
    }
    setEditingRoom(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0f1e2e] text-[#faf8f5] shadow-md border-b border-[#c5a059]/30">
      {/* Top micro bar: Palace credentials and stay info */}
      <div className="bg-[#0b1520] border-b border-[#c5a059]/20 px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#c5a059] font-medium tracking-wider">MAHDIA PALACE</span>
            <span className="text-white/40">·</span>
            <span className="text-white/70 hidden sm:inline">{t.hero.badge}</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Room selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-white/60">{t.guestBar.room}:</span>
              {editingRoom ? (
                <form onSubmit={handleSaveRoom} className="flex items-center gap-1">
                  <input
                    type="text"
                    value={tempRoom}
                    onChange={(e) => setTempRoom(e.target.value)}
                    className="w-16 px-1.5 py-0.5 text-xs bg-white/10 text-white border border-[#c5a059] rounded"
                    placeholder="304"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="text-xs bg-[#c5a059] text-[#0f1e2e] px-1.5 py-0.5 rounded font-medium hover:bg-[#d4af37]"
                  >
                    {t.guestBar.saveRoom}
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => {
                    setTempRoom(roomNumber);
                    setEditingRoom(true);
                  }}
                  className="font-semibold text-[#e2c275] hover:underline flex items-center gap-1"
                  title="Click to change your room number"
                >
                  <span>{roomNumber}</span>
                  <span className="text-[10px] text-white/50">({t.guestBar.setRoom})</span>
                </button>
              )}
            </div>

            {/* Currency toggle */}
            <button
              onClick={onToggleCurrency}
              className="px-2 py-0.5 border border-[#c5a059]/40 rounded hover:border-[#c5a059] text-xs font-semibold text-[#e2c275] transition-colors"
              title="Toggle Currency between Tunisian Dinar (TND) and Euro (EUR)"
            >
              {currency === 'TND' ? 'TND (DT)' : 'EUR (€)'}
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand logo & emblem */}
        <div 
          onClick={() => onSelectTab('palace')} 
          className="cursor-pointer flex items-center gap-3 group"
        >
          <div className="h-11 w-11 rounded-lg bg-white p-1 shadow-sm border border-[#c5a059]/60 flex items-center justify-center overflow-hidden shrink-0 group-hover:border-[#e2c275] group-hover:shadow-md transition-all">
            <img 
              src="/assets/aistudio/logo-mahdia_Palace_c9c0e227.png" 
              alt="Hôtel Mahdia Palace Thalasso & Spa" 
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <span className="font-heading text-lg sm:text-xl font-bold tracking-widest text-[#faf8f5] block group-hover:text-[#e2c275] transition-colors">
              MAHDIA PALACE
            </span>
            <span className="text-[10px] tracking-[0.2em] text-[#c5a059] uppercase block font-medium">
              Thalasso · Spa & Kneipp *****
            </span>
          </div>
        </div>

        {/* Desktop navigation tabs */}
        <nav className="hidden lg:flex items-center gap-1">
          <button
            onClick={() => onSelectTab('palace')}
            className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1.5 border-b-2 ${
              activeTab === 'palace'
                ? 'border-[#c5a059] text-[#e2c275]'
                : 'border-transparent text-white/80 hover:text-white hover:border-white/20'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>{t.nav.palace}</span>
          </button>

          <button
            onClick={() => onSelectTab('dining')}
            className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1.5 border-b-2 ${
              activeTab === 'dining'
                ? 'border-[#c5a059] text-[#e2c275]'
                : 'border-transparent text-white/80 hover:text-white hover:border-white/20'
            }`}
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>{t.nav.roomService}</span>
          </button>

          <button
            onClick={() => onSelectTab('spa')}
            className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1.5 border-b-2 ${
              activeTab === 'spa'
                ? 'border-[#c5a059] text-[#e2c275]'
                : 'border-transparent text-white/80 hover:text-white hover:border-white/20'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>{t.nav.spa}</span>
          </button>

          <button
            onClick={() => onSelectTab('notices')}
            className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1.5 border-b-2 ${
              activeTab === 'notices'
                ? 'border-[#c5a059] text-[#e2c275]'
                : 'border-transparent text-white/80 hover:text-white hover:border-white/20'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>{t.nav.notices}</span>
          </button>

          <button
            onClick={() => onSelectTab('cms')}
            className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1.5 border-b-2 ${
              activeTab === 'cms'
                ? 'border-[#c5a059] text-[#e2c275]'
                : 'border-transparent text-white/60 hover:text-white hover:border-white/20'
            }`}
          >
            <Settings className="w-4 h-4 text-[#c5a059]" />
            <span>{t.nav.cms}</span>
          </button>
        </nav>

        {/* Right action group: Language Switcher & Dining Tray Cart */}
        <div className="flex items-center gap-3">
          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded border border-[#c5a059]/40 bg-[#172b40] hover:bg-[#1f3750] transition-colors"
              aria-label="Select language"
              aria-expanded={langMenuOpen}
            >
              <Globe className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="font-semibold uppercase">{currentLang}</span>
              <span className="text-white/60 text-[10px]">▼</span>
            </button>

            {langMenuOpen && (
              <>
                <div 
                  className="fixed inset-0 z-30" 
                  onClick={() => setLangMenuOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-48 rounded shadow-xl bg-[#0f1e2e] border border-[#c5a059] py-1 z-40">
                  <div className="px-3 py-1.5 text-[10px] text-white/50 border-b border-white/10 uppercase tracking-wider font-semibold">
                    Languages · اللغات
                  </div>
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        onSelectLang(l.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-white/10 transition-colors ${
                        currentLang === l.code ? 'text-[#e2c275] font-semibold bg-white/5' : 'text-white/80'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{l.flag}</span>
                        <span>{l.native}</span>
                      </span>
                      {currentLang === l.code && <Check className="w-3.5 h-3.5 text-[#c5a059]" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded text-white/80 hover:text-white hover:bg-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b1520] border-t border-[#c5a059]/30 px-4 py-3 space-y-2">
          <button
            onClick={() => {
              onSelectTab('palace');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2.5 rounded text-sm font-medium flex items-center gap-2.5 ${
              activeTab === 'palace' ? 'bg-[#c5a059]/20 text-[#e2c275]' : 'text-white/80 hover:bg-white/5'
            }`}
          >
            <Home className="w-4 h-4 text-[#c5a059]" />
            <span>{t.nav.palace}</span>
          </button>

          <button
            onClick={() => {
              onSelectTab('dining');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2.5 rounded text-sm font-medium flex items-center gap-2.5 ${
              activeTab === 'dining' ? 'bg-[#c5a059]/20 text-[#e2c275]' : 'text-white/80 hover:bg-white/5'
            }`}
          >
            <UtensilsCrossed className="w-4 h-4 text-[#c5a059]" />
            <span>{t.nav.roomService}</span>
          </button>

          <button
            onClick={() => {
              onSelectTab('spa');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2.5 rounded text-sm font-medium flex items-center gap-2.5 ${
              activeTab === 'spa' ? 'bg-[#c5a059]/20 text-[#e2c275]' : 'text-white/80 hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#c5a059]" />
            <span>{t.nav.spa}</span>
          </button>

          <button
            onClick={() => {
              onSelectTab('notices');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2.5 rounded text-sm font-medium flex items-center gap-2.5 ${
              activeTab === 'notices' ? 'bg-[#c5a059]/20 text-[#e2c275]' : 'text-white/80 hover:bg-white/5'
            }`}
          >
            <FileText className="w-4 h-4 text-[#c5a059]" />
            <span>{t.nav.notices}</span>
          </button>

          <button
            onClick={() => {
              onSelectTab('cms');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2.5 rounded text-sm font-medium flex items-center gap-2.5 ${
              activeTab === 'cms' ? 'bg-[#c5a059]/20 text-[#e2c275]' : 'text-white/80 hover:bg-white/5'
            }`}
          >
            <Settings className="w-4 h-4 text-[#c5a059]" />
            <span>{t.nav.cms}</span>
          </button>
        </div>
      )}
    </header>
  );
};
