import React, { useState } from 'react';
import { CartItem, Currency, Language, Order } from '../types';
import { translations } from '../data/translations';
import { calculateOrderTotals, formatPrice, generateOrderCode, validateRoomNumber } from '../utils/hotelLogic';
import { X, Trash2, Plus, Minus, ShoppingBag, CheckCircle, Utensils, Clock, Phone } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  currency: Currency;
  items: CartItem[];
  roomNumber: string;
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onPlaceOrder: (order: Order) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  currentLang,
  currency,
  items,
  roomNumber,
  onUpdateQuantity,
  onRemoveItem,
  onPlaceOrder,
  onClearCart,
}) => {
  const t = translations[currentLang];
  const [guestRoom, setGuestRoom] = useState<string>(roomNumber);
  const [guestName, setGuestName] = useState<string>('');
  const [specialNotes, setSpecialNotes] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [placedOrder, setPlacedOrder] = useState<Order | null>(null);

  if (!isOpen) return null;

  const totals = calculateOrderTotals(items);
  const subtotal = currency === 'TND' ? totals.subtotalTND : totals.subtotalEUR;
  const serviceFee = currency === 'TND' ? totals.serviceFeeTND : totals.serviceFeeEUR;
  const grandTotal = currency === 'TND' ? totals.totalTND : totals.totalEUR;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    if (!guestName.trim()) {
      setErrorMessage('Please provide your name');
      return;
    }

    const validation = validateRoomNumber(guestRoom);
    if (!validation.isValid) {
      setErrorMessage(validation.error || 'Please enter a valid room number');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    setTimeout(() => {
      const order: Order = {
        id: `ord-${Date.now()}`,
        orderCode: generateOrderCode('MP'),
        roomNumber: guestRoom.trim(),
        guestName: guestName.trim(),
        items: [...items],
        subtotalTND: totals.subtotalTND,
        subtotalEUR: totals.subtotalEUR,
        serviceFeeTND: totals.serviceFeeTND,
        totalTND: totals.totalTND,
        totalEUR: totals.totalEUR,
        status: 'received',
        orderTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        estimatedDelivery: '30-40 min',
        notes: specialNotes.trim(),
      };

      onPlaceOrder(order);
      setPlacedOrder(order);
      setIsSubmitting(false);
      onClearCart();
    }, 700);
  };

  const handleCloseAndReset = () => {
    setPlacedOrder(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={handleCloseAndReset}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#faf8f5] shadow-2xl border-l border-[#c5a059]/40 flex flex-col justify-between text-[#1a2530]">
          {/* Header */}
          <div className="bg-[#0f1e2e] text-[#faf8f5] px-6 py-4 flex items-center justify-between border-b border-[#c5a059]/40">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#c5a059]" />
              <h2 className="font-heading text-lg font-bold">{t.cart.title}</h2>
            </div>
            <button
              onClick={handleCloseAndReset}
              className="text-white/60 hover:text-white p-1 rounded transition-colors"
              aria-label="Close cart tray"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {placedOrder ? (
              /* Order Confirmation View */
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-18 bg-white rounded-xl p-1.5 shadow-md border border-[#c5a059] flex items-center justify-center mx-auto">
                  <img
                    src="/assets/aistudio/logo-mahdia_Palace_c9c0e227.png"
                    alt="Mahdia Palace Thalasso Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-2xs">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#0f1e2e]">
                  {t.cart.orderSuccessTitle}
                </h3>
                <p className="text-xs text-slate-600 font-serif-elegant text-base leading-relaxed">
                  {t.cart.orderSuccessDesc}
                </p>

                <div className="bg-white p-5 rounded-xl border border-[#c5a059]/40 text-xs text-left space-y-2 shadow-xs">
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-500">{t.cart.orderCode}:</span>
                    <span className="font-heading font-bold text-sm text-[#0f1e2e]">
                      {placedOrder.orderCode}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{t.cart.roomNumber}:</span>
                    <span className="font-semibold text-slate-800">{placedOrder.roomNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{t.cart.guestName}:</span>
                    <span className="font-semibold text-slate-800">{placedOrder.guestName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{t.cart.total}:</span>
                    <span className="font-bold text-[#0f1e2e]">
                      {formatPrice(currency === 'TND' ? placedOrder.totalTND : placedOrder.totalEUR, currency)}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-emerald-700 font-medium text-[11px]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{t.cart.estimatedDelivery}</span>
                  </div>
                </div>

                <button
                  onClick={handleCloseAndReset}
                  className="w-full bg-[#0f1e2e] hover:bg-[#172b40] text-[#e2c275] py-3 rounded-lg text-xs font-semibold shadow transition-colors"
                >
                  {t.cart.close}
                </button>
              </div>
            ) : items.length === 0 ? (
              /* Empty Cart */
              <div className="text-center py-16 space-y-3">
                <Utensils className="w-10 h-10 text-slate-300 mx-auto" />
                <p className="text-sm text-slate-600 font-medium">
                  {t.cart.emptyMessage}
                </p>
                <button
                  onClick={onClose}
                  className="text-xs text-[#a98540] hover:underline font-semibold"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              /* Cart Items List & Room Delivery Form */
              <div className="space-y-6">
                {/* List of items */}
                <div className="space-y-3">
                  {items.map((item) => {
                    const name = item.menuItem.name[currentLang] || item.menuItem.name.en;
                    const price = currency === 'TND' ? item.menuItem.priceTND : item.menuItem.priceEUR;
                    const itemTotal = price * item.quantity;

                    return (
                      <div
                        key={item.menuItem.id}
                        className="bg-white p-3.5 rounded-lg border border-[#c5a059]/30 flex items-center justify-between gap-3 shadow-2xs"
                      >
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-[#0f1e2e] truncate">
                            {name}
                          </h4>
                          <span className="text-[11px] text-slate-500 block">
                            {formatPrice(price, currency)} each
                          </span>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onUpdateQuantity(item.menuItem.id, -1)}
                            className="w-6 h-6 rounded bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center text-xs"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-semibold w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.menuItem.id, 1)}
                            className="w-6 h-6 rounded bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center text-xs"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-right">
                          <span className="text-xs font-bold text-[#0f1e2e] block">
                            {formatPrice(itemTotal, currency)}
                          </span>
                          <button
                            onClick={() => onRemoveItem(item.menuItem.id)}
                            className="text-[10px] text-red-500 hover:text-red-700 flex items-center gap-0.5 ml-auto mt-0.5"
                          >
                            <Trash2 className="w-2.5 h-2.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Delivery Form */}
                <form id="order-form" onSubmit={handleSubmitOrder} className="space-y-4 pt-3 border-t border-slate-200 text-xs">
                  {errorMessage && (
                    <div className="bg-red-50 text-red-700 p-2.5 rounded border border-red-200">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 block">
                        {t.cart.roomNumber} *
                      </label>
                      <input
                        type="text"
                        value={guestRoom}
                        onChange={(e) => setGuestRoom(e.target.value)}
                        required
                        placeholder="304"
                        className="w-full p-2 bg-white border border-[#c5a059]/40 rounded text-slate-800 focus:ring-1 focus:ring-[#c5a059]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 block">
                        {t.cart.guestName} *
                      </label>
                      <input
                        type="text"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        required
                        placeholder="e.g. Elena Rostova"
                        className="w-full p-2 bg-white border border-[#c5a059]/40 rounded text-slate-800 focus:ring-1 focus:ring-[#c5a059]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 block">
                      {t.cart.specialNotes}
                    </label>
                    <textarea
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      rows={2}
                      placeholder={t.cart.specialNotesPlaceholder}
                      className="w-full p-2 bg-white border border-[#c5a059]/40 rounded text-slate-800 focus:ring-1 focus:ring-[#c5a059]"
                    />
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Footer Calculations & Submit Button */}
          {!placedOrder && items.length > 0 && (
            <div className="p-6 bg-white border-t border-[#c5a059]/30 space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>{t.cart.subtotal}</span>
                  <span>{formatPrice(subtotal, currency)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span title={t.cart.serviceFeeDesc}>
                    {t.cart.serviceFee}
                  </span>
                  <span>{formatPrice(serviceFee, currency)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#0f1e2e] pt-1.5 border-t border-slate-100">
                  <span>{t.cart.total}</span>
                  <span className="font-heading text-base text-[#0f1e2e]">
                    {formatPrice(grandTotal, currency)}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                form="order-form"
                disabled={isSubmitting}
                className="w-full bg-[#c5a059] hover:bg-[#d4af37] text-[#0f1e2e] font-bold py-3 rounded-lg text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>{t.cart.processing}</span>
                ) : (
                  <span>{t.cart.confirmOrder}</span>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-slate-500">
                <Phone className="w-3 h-3 text-[#a98540]" />
                <span>Prefer phone order? <strong className="text-[#0f1e2e]">Dial 9 or 509</strong> from your suite</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
