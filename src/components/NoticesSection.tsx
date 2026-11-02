import React, { useState } from 'react';
import { Language, NoticeCategory, RoomNotice } from '../types';
import { translations } from '../data/translations';
import { sortAndFilterNotices } from '../utils/hotelLogic';
import { 
  AlertTriangle, 
  Calendar, 
  Clock, 
  Info, 
  PhoneCall, 
  Sparkles, 
  Umbrella, 
  Utensils, 
  Wifi, 
  Bell 
} from 'lucide-react';

interface NoticesSectionProps {
  currentLang: Language;
  notices: RoomNotice[];
}

export const NoticesSection: React.FC<NoticesSectionProps> = ({ currentLang, notices }) => {
  const t = translations[currentLang];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories: { id: string; label: string }[] = [
    { id: 'all', label: t.notices.allCategories },
    { id: 'general', label: t.notices.general },
    { id: 'dining', label: t.notices.dining },
    { id: 'wellness', label: t.notices.wellness },
    { id: 'beach', label: t.notices.beach },
    { id: 'housekeeping', label: t.notices.housekeeping },
  ];

  const sortedNotices = sortAndFilterNotices(notices, selectedCategory);

  const getNoticeIcon = (iconName: string) => {
    switch (iconName) {
      case 'umbrella':
        return <Umbrella className="w-4 h-4 text-cyan-600" />;
      case 'wifi':
        return <Wifi className="w-4 h-4 text-indigo-600" />;
      case 'utensils':
        return <Utensils className="w-4 h-4 text-amber-600" />;
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-[#c5a059]" />;
      default:
        return <Info className="w-4 h-4 text-slate-600" />;
    }
  };

  return (
    <div className="space-y-8 py-6">
      {/* Header */}
      <div className="border-b border-[#c5a059]/30 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold tracking-widest text-[#c5a059] uppercase block font-heading">
            Daily Guest Gazette & Directory
          </span>
          <h2 className="font-heading text-3xl font-bold text-[#0f1e2e] mt-1">
            {t.notices.title}
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl font-serif-elegant text-base">
            {t.notices.subtitle}
          </p>
        </div>

        {/* Front Desk hotlink */}
        <div className="bg-[#f5f0e8] border border-[#c5a059]/40 p-3 rounded-lg flex items-center gap-3 text-xs self-start md:self-auto">
          <PhoneCall className="w-4 h-4 text-[#c5a059] shrink-0" />
          <div>
            <span className="font-semibold text-[#0f1e2e] block">Front Desk: Dial 9</span>
            <span className="text-slate-500 text-[11px]">{t.notices.callConcierge}</span>
          </div>
        </div>
      </div>

      {/* Categories Filter Tabs */}
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

      {/* Notices List */}
      <div className="space-y-4">
        {sortedNotices.map((notice) => {
          const title = notice.title[currentLang] || notice.title.en;
          const content = notice.content[currentLang] || notice.content.en;

          return (
            <article
              key={notice.id}
              className={`rounded-xl border transition-all p-5 shadow-sm ${
                notice.isUrgent
                  ? 'bg-amber-50/60 border-amber-300'
                  : 'bg-white border-[#c5a059]/30 hover:border-[#c5a059]'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className={`p-2 rounded-lg shrink-0 ${notice.isUrgent ? 'bg-amber-200/60' : 'bg-[#faf8f5]'}`}>
                    {notice.isUrgent ? (
                      <AlertTriangle className="w-5 h-5 text-amber-800" />
                    ) : (
                      getNoticeIcon(notice.icon)
                    )}
                  </div>

                  <div className="space-y-1">
                    {/* Clean unboxed metadata with typographic separators */}
                    <div className="flex items-center flex-wrap gap-2 text-[11px] text-slate-500">
                      {notice.isUrgent && (
                        <>
                          <span className="font-bold text-amber-800 uppercase tracking-wider">
                            {t.notices.urgentNotice}
                          </span>
                          <span aria-hidden="true">·</span>
                        </>
                      )}
                      <span className="capitalize font-medium text-[#c5a059]">{notice.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{notice.date}</span>
                      {notice.targetRooms && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{notice.targetRooms}</span>
                        </>
                      )}
                    </div>

                    <h3 className="font-heading text-lg font-bold text-[#0f1e2e]">
                      {title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-serif-elegant pl-0 sm:pl-12">
                {content}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
