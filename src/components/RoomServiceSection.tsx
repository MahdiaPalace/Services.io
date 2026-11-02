import React, { useState } from 'react';
import { Currency, Language, MenuCategory, MenuItem } from '../types';
import { translations } from '../data/translations';
import { filterMenuItems, formatPrice } from '../utils/hotelLogic';
import { Search, Clock, Plus, Check, UtensilsCrossed, PhoneCall } from 'lucide-react';

interface RoomServiceSectionProps {
  currentLang: Language;
  currency: Currency;
  items: MenuItem[];
  onAddToCart: (item: MenuItem, quantity: number, notes?: string) => void;
  onOpenCart: () => void;
}

export const RoomServiceSection: React.FC<RoomServiceSectionProps> = ({
  currentLang,
  currency,
  items,
  onAddToCart,
  onOpenCart,
}) => {
  const t = translations[currentLang];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDietary, setSelectedDietary] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const categories: { id: string; label: string }[] = [
    { id: 'all', label: t.dining.allCategories },
    { id: 'breakfast', label: t.dining.breakfast },
    { id: 'starters', label: t.dining.starters },
    { id: 'mains', label: t.dining.mains },
    { id: 'desserts', label: t.dining.desserts },
    { id: 'beverages', label: t.dining.beverages },
    { id: 'wines', label: t.dining.wines },
  ];

  const dietaryOptions: { id: string; label: string }[] = [
    { id: 'all', label: t.dining.dietaryAll },
    { id: 'Halal', label: t.dining.dietaryHalal },
    { id: 'Tunisian Heritage', label: t.dining.dietaryTunisian },
    { id: 'Seafood', label: t.dining.dietarySeafood },
    { id: 'Vegetarian', label: t.dining.dietaryVegetarian },
  ];

  const filteredItems = filterMenuItems(
    items,
    selectedCategory,
    selectedDietary,
    searchQuery,
    currentLang
  );

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item, 1);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1600);
  };

  return (
    <div className="space-y-8 py-6">
      {/* Header title */}
      <div className="border-b border-[#c5a059]/30 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold tracking-widest text-[#c5a059] uppercase block font-heading">
            24/7 White-Glove Suite Dining
          </span>
          <h2 className="font-heading text-3xl font-bold text-[#0f1e2e] mt-1">
            {t.dining.title}
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl font-serif-elegant text-base">
            {t.dining.subtitle}
          </p>
          <div className="mt-2.5 flex items-center gap-2 text-xs font-semibold text-[#0f1e2e] bg-[#f5f0e8] px-3.5 py-1.5 rounded-lg border border-[#c5a059]/40 w-fit">
            <span className="text-[#a98540]">📞</span>
            <span>Front Desk & In-Room Dining: <strong className="text-[#a98540]">Dial 9 or 509</strong> from your suite</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 self-start md:self-auto">
          <div
            className="flex items-center gap-1.5 bg-[#f5f0e8] text-[#0f1e2e] border border-[#c5a059]/60 px-3.5 py-2 rounded-lg text-xs font-bold shadow-2xs select-none"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#a98540]" />
            <span>In-Room Phone: Dial 9 or 509</span>
          </div>

          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 bg-[#0f1e2e] text-[#e2c275] border border-[#c5a059] px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#172b40] transition-colors"
          >
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>{t.cart.title}</span>
          </button>
        </div>
      </div>

      {/* Filter and search bar */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.dining.searchPlaceholder}
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

          {/* Dietary preferences filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {dietaryOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedDietary(opt.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                  selectedDietary === opt.id
                    ? 'bg-[#c5a059] text-[#0f1e2e] font-semibold shadow-sm'
                    : 'bg-white/80 border border-[#c5a059]/30 text-slate-700 hover:bg-[#c5a059]/10'
                }`}
              >
                {opt.label}
              </button>
            ))}
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

      {/* Dishes Grid */}
      {filteredItems.length === 0 ? (
        <div className="bg-white rounded-xl border border-dashed border-[#c5a059]/40 p-12 text-center space-y-3">
          <UtensilsCrossed className="w-8 h-8 text-slate-300 mx-auto" />
          <h3 className="text-base font-semibold text-slate-700">No dishes found</h3>
          <p className="text-xs text-slate-500">
            Try adjusting your search keywords or dietary filters to view our full palace collection.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedDietary('all');
            }}
            className="text-xs text-[#a98540] hover:underline font-medium"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const itemName = item.name[currentLang] || item.name.en;
            const itemDesc = item.description[currentLang] || item.description.en;
            const isAdded = addedItemIds[item.id];
            const price = currency === 'TND' ? item.priceTND : item.priceEUR;

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#c5a059]/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative bg-slate-100">
                  <img
                    src={item.image}
                    alt={itemName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Clean unboxed metadata: prep time */}
                  <div className="absolute bottom-2 left-2 bg-[#0f1e2e]/85 backdrop-blur-sm text-white/90 text-[10px] px-2 py-0.5 rounded flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#e2c275]" />
                    <span>{item.preparationTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Clean unboxed dietary metadata with typographic separators */}
                    <div className="flex items-center flex-wrap gap-1.5 text-[11px] text-[#a98540] font-medium">
                      {item.dietary.map((tag, idx) => (
                        <React.Fragment key={tag}>
                          {idx > 0 && <span aria-hidden="true" className="text-slate-300">·</span>}
                          <span>{tag}</span>
                        </React.Fragment>
                      ))}
                    </div>

                    <h3 className="font-heading text-lg font-bold text-[#0f1e2e] leading-snug">
                      {itemName}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-serif-elegant text-sm">
                      {itemDesc}
                    </p>
                  </div>

                  {/* Price & Add to Cart button */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
                        Price
                      </span>
                      <span className="font-heading text-lg font-bold text-[#0f1e2e]">
                        {formatPrice(price, currency)}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAdd(item)}
                      disabled={!item.available}
                      className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#c5a059] hover:bg-[#d4af37] text-[#0f1e2e]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{t.dining.addedToCart}</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>{t.dining.addToCart}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
