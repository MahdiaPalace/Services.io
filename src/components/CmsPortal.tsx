import React, { useState } from 'react';
import { 
  Currency, 
  Language, 
  MenuCategory, 
  MenuItem, 
  NoticeCategory, 
  Order, 
  RoomNotice, 
  SpaBookingRequest, 
  SpaCategory, 
  SpaTreatment 
} from '../types';
import { translations } from '../data/translations';
import { formatPrice } from '../utils/hotelLogic';
import { 
  Settings, 
  Utensils, 
  Sparkles, 
  FileText, 
  ClipboardList, 
  Calendar, 
  Plus, 
  Trash2, 
  Edit3, 
  Check, 
  RotateCcw, 
  AlertTriangle,
  X
} from 'lucide-react';

interface CmsPortalProps {
  currentLang: Language;
  currency: Currency;
  menuItems: MenuItem[];
  onUpdateMenuItems: (items: MenuItem[]) => void;
  spaTreatments: SpaTreatment[];
  onUpdateSpaTreatments: (treatments: SpaTreatment[]) => void;
  notices: RoomNotice[];
  onUpdateNotices: (notices: RoomNotice[]) => void;
  orders: Order[];
  onUpdateOrderStatus: (orderId: string, status: 'received' | 'in_preparation' | 'delivered') => void;
  onResetDefaults: () => void;
}

export const CmsPortal: React.FC<CmsPortalProps> = ({
  currentLang,
  currency,
  menuItems,
  onUpdateMenuItems,
  spaTreatments,
  onUpdateSpaTreatments,
  notices,
  onUpdateNotices,
  orders,
  onUpdateOrderStatus,
  onResetDefaults,
}) => {
  const t = translations[currentLang];
  const [activeTab, setActiveTab] = useState<'menu' | 'spa' | 'notices' | 'orders'>('menu');
  const [resetMessage, setResetMessage] = useState<string>('');

  // Modals for editing/adding
  const [editingMenuItem, setEditingMenuItem] = useState<MenuItem | null>(null);
  const [isNewMenuItem, setIsNewMenuItem] = useState<boolean>(false);

  const [editingNotice, setEditingNotice] = useState<RoomNotice | null>(null);
  const [isNewNotice, setIsNewNotice] = useState<boolean>(false);

  // Toggle item availability
  const toggleMenuAvailability = (id: string) => {
    const updated = menuItems.map((item) =>
      item.id === id ? { ...item, available: !item.available } : item
    );
    onUpdateMenuItems(updated);
  };

  const deleteMenuItem = (id: string) => {
    if (confirm('Delete this dish from the palace menu?')) {
      onUpdateMenuItems(menuItems.filter((i) => i.id !== id));
    }
  };

  const handleSaveMenuItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMenuItem) return;

    if (isNewMenuItem) {
      onUpdateMenuItems([editingMenuItem, ...menuItems]);
    } else {
      onUpdateMenuItems(menuItems.map((i) => (i.id === editingMenuItem.id ? editingMenuItem : i)));
    }
    setEditingMenuItem(null);
  };

  const handleStartAddMenuItem = () => {
    const newItem: MenuItem = {
      id: `m-custom-${Date.now()}`,
      category: 'mains',
      name: { en: '', fr: '', ar: '', ru: '', it: '', de: '' },
      description: { en: '', fr: '', ar: '', ru: '', it: '', de: '' },
      priceTND: 45,
      priceEUR: 13.5,
      dietary: ['Halal'],
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      available: true,
      preparationTime: '20 min',
    };
    setEditingMenuItem(newItem);
    setIsNewMenuItem(true);
  };

  // Notices Handlers
  const toggleNoticeUrgent = (id: string) => {
    const updated = notices.map((n) =>
      n.id === id ? { ...n, isUrgent: !n.isUrgent } : n
    );
    onUpdateNotices(updated);
  };

  const deleteNotice = (id: string) => {
    if (confirm('Delete this room notice?')) {
      onUpdateNotices(notices.filter((n) => n.id !== id));
    }
  };

  const handleSaveNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingNotice) return;

    if (isNewNotice) {
      onUpdateNotices([editingNotice, ...notices]);
    } else {
      onUpdateNotices(notices.map((n) => (n.id === editingNotice.id ? editingNotice : n)));
    }
    setEditingNotice(null);
  };

  const handleStartAddNotice = () => {
    const newNotice: RoomNotice = {
      id: `not-custom-${Date.now()}`,
      category: 'general',
      title: { en: '', fr: '', ar: '', ru: '', it: '', de: '' },
      content: { en: '', fr: '', ar: '', ru: '', it: '', de: '' },
      isUrgent: false,
      date: new Date().toISOString().split('T')[0],
      icon: 'info',
      targetRooms: 'All Rooms',
    };
    setEditingNotice(newNotice);
    setIsNewNotice(true);
  };

  const handleReset = () => {
    if (confirm('Reset all hotel menus, spa rituals, and notices to palace defaults?')) {
      onResetDefaults();
      setResetMessage(t.cms.resetSuccess);
      setTimeout(() => setResetMessage(''), 4000);
    }
  };

  return (
    <div className="space-y-8 py-6">
      {/* Header */}
      <div className="border-b border-[#c5a059]/30 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0f1e2e] text-[#c5a059] text-[11px] font-semibold tracking-wider uppercase mb-2">
            <Settings className="w-3.5 h-3.5" />
            <span>{t.cms.badge}</span>
          </div>
          <h2 className="font-heading text-3xl font-bold text-[#0f1e2e]">
            {t.cms.title}
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl font-serif-elegant text-base">
            {t.cms.subtitle}
          </p>
        </div>

        {/* Reset Defaults button */}
        <button
          onClick={handleReset}
          className="self-start md:self-auto flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#c5a059] text-xs font-semibold text-[#a98540] hover:bg-[#c5a059]/10 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t.cms.resetDefaults}</span>
        </button>
      </div>

      {resetMessage && (
        <div className="bg-emerald-50 text-emerald-800 p-3 rounded-lg border border-emerald-200 text-xs flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>{resetMessage}</span>
        </div>
      )}

      {/* CMS Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#c5a059]/20 scrollbar-none">
        <button
          onClick={() => setActiveTab('menu')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-2 whitespace-nowrap transition-all ${
            activeTab === 'menu'
              ? 'bg-[#0f1e2e] text-[#e2c275] shadow'
              : 'text-slate-600 hover:text-[#0f1e2e] hover:bg-slate-100'
          }`}
        >
          <Utensils className="w-3.5 h-3.5" />
          <span>{t.cms.tabs.roomService} ({menuItems.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('spa')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-2 whitespace-nowrap transition-all ${
            activeTab === 'spa'
              ? 'bg-[#0f1e2e] text-[#e2c275] shadow'
              : 'text-slate-600 hover:text-[#0f1e2e] hover:bg-slate-100'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.cms.tabs.spa} ({spaTreatments.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('notices')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-2 whitespace-nowrap transition-all ${
            activeTab === 'notices'
              ? 'bg-[#0f1e2e] text-[#e2c275] shadow'
              : 'text-slate-600 hover:text-[#0f1e2e] hover:bg-slate-100'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>{t.cms.tabs.notices} ({notices.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('orders')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-2 whitespace-nowrap transition-all ${
            activeTab === 'orders'
              ? 'bg-[#0f1e2e] text-[#e2c275] shadow'
              : 'text-slate-600 hover:text-[#0f1e2e] hover:bg-slate-100'
          }`}
        >
          <ClipboardList className="w-3.5 h-3.5" />
          <span>{t.cms.tabs.orders} ({orders.length})</span>
        </button>
      </div>

      {/* Tab 1: Menu Management */}
      {activeTab === 'menu' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Manage in-room dining dishes, active pricing, and availability.
            </span>
            <button
              onClick={handleStartAddMenuItem}
              className="bg-[#c5a059] hover:bg-[#d4af37] text-[#0f1e2e] px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{t.cms.addNewItem}</span>
            </button>
          </div>

          <div className="bg-white rounded-xl border border-[#c5a059]/30 overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#faf8f5] border-b border-[#c5a059]/30 text-slate-600">
                <tr>
                  <th className="p-3">Dish / Beverage</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Price (TND / EUR)</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {menuItems.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt=""
                          className="w-10 h-10 rounded object-cover shrink-0"
                        />
                        <div>
                          <div className="font-semibold text-slate-800">
                            {item.name[currentLang] || item.name.en}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {item.name.en}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 capitalize text-slate-600">{item.category}</td>
                    <td className="p-3 font-semibold text-slate-800">
                      {formatPrice(item.priceTND, 'TND')} / {formatPrice(item.priceEUR, 'EUR')}
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => toggleMenuAvailability(item.id)}
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          item.available
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {item.available ? t.cms.available : t.cms.unavailable}
                      </button>
                    </td>
                    <td className="p-3 text-right space-x-2">
                      <button
                        onClick={() => {
                          setEditingMenuItem(item);
                          setIsNewMenuItem(false);
                        }}
                        className="text-slate-600 hover:text-[#0f1e2e] p-1"
                        title="Edit Item"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => deleteMenuItem(item.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                        title="Delete Item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Spa Treatments Management */}
      {activeTab === 'spa' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Manage Thalasso therapies, massages, and hammam ceremonies.
            </span>
          </div>

          <div className="bg-white rounded-xl border border-[#c5a059]/30 overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#faf8f5] border-b border-[#c5a059]/30 text-slate-600">
                <tr>
                  <th className="p-3">Treatment</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {spaTreatments.map((treatment) => (
                  <tr key={treatment.id} className="hover:bg-slate-50">
                    <td className="p-3">
                      <div className="font-semibold text-slate-800">
                        {treatment.title[currentLang] || treatment.title.en}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {treatment.title.en}
                      </div>
                    </td>
                    <td className="p-3 capitalize text-slate-600">{treatment.category}</td>
                    <td className="p-3 text-slate-600">{treatment.duration}</td>
                    <td className="p-3 font-semibold text-slate-800">
                      {formatPrice(treatment.priceTND, 'TND')}
                    </td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                        Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: Guest Notices Management */}
      {activeTab === 'notices' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Publish Front Desk announcements, weather bulletins, and emergency alerts.
            </span>
            <button
              onClick={handleStartAddNotice}
              className="bg-[#c5a059] hover:bg-[#d4af37] text-[#0f1e2e] px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{t.cms.addNewNotice}</span>
            </button>
          </div>

          <div className="space-y-3">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="bg-white p-4 rounded-xl border border-[#c5a059]/30 flex items-start justify-between gap-4 shadow-2xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="font-semibold capitalize text-[#c5a059]">{notice.category}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-500">{notice.date}</span>
                    {notice.isUrgent && (
                      <span className="bg-amber-100 text-amber-800 text-[10px] px-1.5 py-0.2 rounded font-bold uppercase">
                        Urgent
                      </span>
                    )}
                  </div>
                  <h4 className="font-heading font-bold text-sm text-[#0f1e2e]">
                    {notice.title[currentLang] || notice.title.en}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {notice.content[currentLang] || notice.content.en}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => toggleNoticeUrgent(notice.id)}
                    className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                      notice.isUrgent
                        ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {notice.isUrgent ? 'Mark Normal' : 'Mark Urgent'}
                  </button>
                  <button
                    onClick={() => deleteNotice(notice.id)}
                    className="p-1.5 text-red-500 hover:text-red-700"
                    title="Delete Notice"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Live Room Orders */}
      {activeTab === 'orders' && (
        <div className="space-y-4">
          <div className="text-xs text-slate-500">
            Real-time orders placed by guests for suite delivery.
          </div>

          {orders.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-xl border border-dashed border-[#c5a059]/40 text-slate-500 text-xs">
              No room service orders received yet. Guests can order dishes directly via the In-Room Dining section.
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white p-5 rounded-xl border border-[#c5a059]/30 space-y-4 shadow-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
                    <div>
                      <span className="font-heading font-bold text-base text-[#0f1e2e]">
                        Order #{order.orderCode}
                      </span>
                      <span className="text-xs text-slate-500 block">
                        Room {order.roomNumber} · {order.guestName} · Placed at {order.orderTime}
                      </span>
                    </div>

                    {/* Order Status Action Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateOrderStatus(order.id, 'received')}
                        className={`px-2.5 py-1 rounded text-xs font-semibold ${
                          order.status === 'received'
                            ? 'bg-amber-100 text-amber-800 ring-1 ring-amber-300'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {t.cms.statusReceived}
                      </button>
                      <button
                        onClick={() => onUpdateOrderStatus(order.id, 'in_preparation')}
                        className={`px-2.5 py-1 rounded text-xs font-semibold ${
                          order.status === 'in_preparation'
                            ? 'bg-blue-100 text-blue-800 ring-1 ring-blue-300'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {t.cms.statusPreparing}
                      </button>
                      <button
                        onClick={() => onUpdateOrderStatus(order.id, 'delivered')}
                        className={`px-2.5 py-1 rounded text-xs font-semibold ${
                          order.status === 'delivered'
                            ? 'bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {t.cms.statusDelivered}
                      </button>
                    </div>
                  </div>

                  {/* Order items */}
                  <div className="text-xs space-y-1.5">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-slate-700">
                        <span>
                          {item.quantity}x {item.menuItem.name[currentLang] || item.menuItem.name.en}
                        </span>
                        <span className="font-semibold">
                          {formatPrice(item.menuItem.priceTND * item.quantity, 'TND')}
                        </span>
                      </div>
                    ))}
                    {order.notes && (
                      <div className="text-slate-500 italic pt-1">
                        Notes: "{order.notes}"
                      </div>
                    )}
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-xs">
                    <span className="text-slate-500">
                      Total with Room Service: {formatPrice(order.totalTND, 'TND')}
                    </span>
                    <span className="text-slate-400">
                      Est. delivery: {order.estimatedDelivery}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Edit/Add Menu Item Modal */}
      {editingMenuItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#faf8f5] rounded-xl border border-[#c5a059] shadow-2xl max-w-lg w-full overflow-hidden text-xs">
            <div className="bg-[#0f1e2e] text-white px-5 py-3.5 flex items-center justify-between">
              <h3 className="font-heading font-bold text-sm text-[#e2c275]">
                {isNewMenuItem ? 'Add New Room Service Item' : 'Edit Menu Item'}
              </h3>
              <button
                onClick={() => setEditingMenuItem(null)}
                className="text-white/60 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveMenuItem} className="p-5 space-y-3.5">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700 block">Name (English) *</label>
                <input
                  type="text"
                  required
                  value={editingMenuItem.name.en}
                  onChange={(e) =>
                    setEditingMenuItem({
                      ...editingMenuItem,
                      name: { ...editingMenuItem.name, en: e.target.value },
                    })
                  }
                  className="w-full p-2 bg-white border border-[#c5a059]/40 rounded"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">Category</label>
                  <select
                    value={editingMenuItem.category}
                    onChange={(e) =>
                      setEditingMenuItem({
                        ...editingMenuItem,
                        category: e.target.value as MenuCategory,
                      })
                    }
                    className="w-full p-2 bg-white border border-[#c5a059]/40 rounded"
                  >
                    <option value="breakfast">Palace Breakfast</option>
                    <option value="starters">Starters & Mezze</option>
                    <option value="mains">Gourmet Mains</option>
                    <option value="desserts">Patisserie & Sweets</option>
                    <option value="beverages">Mocktails & Juices</option>
                    <option value="wines">Cellar & Infusions</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">Preparation Time</label>
                  <input
                    type="text"
                    value={editingMenuItem.preparationTime}
                    onChange={(e) =>
                      setEditingMenuItem({ ...editingMenuItem, preparationTime: e.target.value })
                    }
                    className="w-full p-2 bg-white border border-[#c5a059]/40 rounded"
                    placeholder="20 min"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">Price in TND (DT)</label>
                  <input
                    type="number"
                    step="0.5"
                    required
                    value={editingMenuItem.priceTND}
                    onChange={(e) =>
                      setEditingMenuItem({
                        ...editingMenuItem,
                        priceTND: parseFloat(e.target.value) || 0,
                        priceEUR: Math.round(parseFloat(e.target.value) * 0.3 * 10) / 10,
                      })
                    }
                    className="w-full p-2 bg-white border border-[#c5a059]/40 rounded"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">Price in EUR (€)</label>
                  <input
                    type="number"
                    step="0.5"
                    required
                    value={editingMenuItem.priceEUR}
                    onChange={(e) =>
                      setEditingMenuItem({
                        ...editingMenuItem,
                        priceEUR: parseFloat(e.target.value) || 0,
                      })
                    }
                    className="w-full p-2 bg-white border border-[#c5a059]/40 rounded"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700 block">Description</label>
                <textarea
                  rows={2}
                  value={editingMenuItem.description.en}
                  onChange={(e) =>
                    setEditingMenuItem({
                      ...editingMenuItem,
                      description: { ...editingMenuItem.description, en: e.target.value },
                    })
                  }
                  className="w-full p-2 bg-white border border-[#c5a059]/40 rounded"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700 block">Image URL</label>
                <input
                  type="text"
                  value={editingMenuItem.image}
                  onChange={(e) =>
                    setEditingMenuItem({ ...editingMenuItem, image: e.target.value })
                  }
                  className="w-full p-2 bg-white border border-[#c5a059]/40 rounded"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingMenuItem(null)}
                  className="px-3 py-1.5 rounded text-slate-600 hover:bg-slate-100"
                >
                  {t.cms.cancel}
                </button>
                <button
                  type="submit"
                  className="bg-[#c5a059] hover:bg-[#d4af37] text-[#0f1e2e] font-semibold px-4 py-1.5 rounded"
                >
                  {t.cms.saveChanges}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit/Add Notice Modal */}
      {editingNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#faf8f5] rounded-xl border border-[#c5a059] shadow-2xl max-w-lg w-full overflow-hidden text-xs">
            <div className="bg-[#0f1e2e] text-white px-5 py-3.5 flex items-center justify-between">
              <h3 className="font-heading font-bold text-sm text-[#e2c275]">
                {isNewNotice ? 'Publish New Room Notice' : 'Edit Notice'}
              </h3>
              <button
                onClick={() => setEditingNotice(null)}
                className="text-white/60 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveNotice} className="p-5 space-y-3.5">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700 block">Title *</label>
                <input
                  type="text"
                  required
                  value={editingNotice.title.en}
                  onChange={(e) =>
                    setEditingNotice({
                      ...editingNotice,
                      title: { ...editingNotice.title, en: e.target.value },
                    })
                  }
                  className="w-full p-2 bg-white border border-[#c5a059]/40 rounded"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">Category</label>
                  <select
                    value={editingNotice.category}
                    onChange={(e) =>
                      setEditingNotice({
                        ...editingNotice,
                        category: e.target.value as NoticeCategory,
                      })
                    }
                    className="w-full p-2 bg-white border border-[#c5a059]/40 rounded"
                  >
                    <option value="general">Palace Life & Events</option>
                    <option value="dining">Dining & Restaurants</option>
                    <option value="wellness">Thalasso & Pools</option>
                    <option value="beach">Private Beach & Sea</option>
                    <option value="housekeeping">Housekeeping & Suites</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">Target Audience</label>
                  <input
                    type="text"
                    value={editingNotice.targetRooms || ''}
                    onChange={(e) =>
                      setEditingNotice({ ...editingNotice, targetRooms: e.target.value })
                    }
                    placeholder="All Rooms"
                    className="w-full p-2 bg-white border border-[#c5a059]/40 rounded"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700 block">Content *</label>
                <textarea
                  rows={3}
                  required
                  value={editingNotice.content.en}
                  onChange={(e) =>
                    setEditingNotice({
                      ...editingNotice,
                      content: { ...editingNotice.content, en: e.target.value },
                    })
                  }
                  className="w-full p-2 bg-white border border-[#c5a059]/40 rounded"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="urgent-check"
                  checked={editingNotice.isUrgent}
                  onChange={(e) =>
                    setEditingNotice({ ...editingNotice, isUrgent: e.target.checked })
                  }
                  className="rounded text-[#c5a059]"
                />
                <label htmlFor="urgent-check" className="font-semibold text-amber-900 cursor-pointer">
                  Pin as Urgent High-Priority Notice
                </label>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingNotice(null)}
                  className="px-3 py-1.5 rounded text-slate-600 hover:bg-slate-100"
                >
                  {t.cms.cancel}
                </button>
                <button
                  type="submit"
                  className="bg-[#c5a059] hover:bg-[#d4af37] text-[#0f1e2e] font-semibold px-4 py-1.5 rounded"
                >
                  {t.cms.saveChanges}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
