import React, { useState, useEffect } from 'react';
import { 
  CartItem, 
  Currency, 
  Language, 
  MenuItem, 
  Order, 
  RoomNotice, 
  SpaBookingRequest, 
  SpaTreatment 
} from './types';
import { initialMenuItems, initialNotices, initialSpaTreatments } from './data/seedData';
import { Header } from './components/Header';
import { GuestBar } from './components/GuestBar';
import { PalaceShowcase } from './components/PalaceShowcase';
import { RoomServiceSection } from './components/RoomServiceSection';
import { SpaSection } from './components/SpaSection';
import { NoticesSection } from './components/NoticesSection';
import { CartDrawer } from './components/CartDrawer';
import { CmsPortal } from './components/CmsPortal';
import { Footer } from './components/Footer';

export default function App() {
  // Multilingual state with RTL handling
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('mp_language');
    if (saved && ['en', 'fr', 'ar', 'ru', 'it', 'de'].includes(saved)) {
      return saved as Language;
    }
    return 'en';
  });

  // Currency state
  const [currency, setCurrency] = useState<Currency>(() => {
    const saved = localStorage.getItem('mp_currency');
    return saved === 'EUR' ? 'EUR' : 'TND';
  });

  // Guest Room state
  const [roomNumber, setRoomNumber] = useState<string>(() => {
    return localStorage.getItem('mp_room') || '304';
  });

  // Active navigation tab
  const [activeTab, setActiveTab] = useState<string>('palace');

  // Menu items state
  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    const saved = localStorage.getItem('mp_menu_items');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse menu items from storage', e);
      }
    }
    return initialMenuItems;
  });

  // Spa treatments state
  const [spaTreatments, setSpaTreatments] = useState<SpaTreatment[]>(() => {
    const saved = localStorage.getItem('mp_spa_treatments');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse spa treatments from storage', e);
      }
    }
    return initialSpaTreatments;
  });

  // Notices state
  const [notices, setNotices] = useState<RoomNotice[]>(() => {
    const saved = localStorage.getItem('mp_notices');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse notices from storage', e);
      }
    }
    return initialNotices;
  });

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('mp_cart');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse cart items', e);
      }
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Orders list state
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('mp_orders');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse orders', e);
      }
    }
    return [];
  });

  // Spa bookings state
  const [spaBookings, setSpaBookings] = useState<SpaBookingRequest[]>(() => {
    const saved = localStorage.getItem('mp_spa_bookings');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse spa bookings', e);
      }
    }
    return [];
  });

  // Sync RTL and HTML attributes with active language
  useEffect(() => {
    localStorage.setItem('mp_language', currentLang);
    document.documentElement.lang = currentLang;
    if (currentLang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [currentLang]);

  // Sync currency
  useEffect(() => {
    localStorage.setItem('mp_currency', currency);
  }, [currency]);

  // Sync room number
  useEffect(() => {
    localStorage.setItem('mp_room', roomNumber);
  }, [roomNumber]);

  // Sync menu items
  useEffect(() => {
    localStorage.setItem('mp_menu_items', JSON.stringify(menuItems));
  }, [menuItems]);

  // Sync spa treatments
  useEffect(() => {
    localStorage.setItem('mp_spa_treatments', JSON.stringify(spaTreatments));
  }, [spaTreatments]);

  // Sync notices
  useEffect(() => {
    localStorage.setItem('mp_notices', JSON.stringify(notices));
  }, [notices]);

  // Sync cart
  useEffect(() => {
    localStorage.setItem('mp_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Sync orders
  useEffect(() => {
    localStorage.setItem('mp_orders', JSON.stringify(orders));
  }, [orders]);

  // Sync spa bookings
  useEffect(() => {
    localStorage.setItem('mp_spa_bookings', JSON.stringify(spaBookings));
  }, [spaBookings]);

  // Cart operations
  const handleAddToCart = (item: MenuItem, quantity = 1, notes?: string) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.menuItem.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.menuItem.id === item.id
            ? { ...i, quantity: i.quantity + quantity, notes: notes || i.notes }
            : i
        );
      }
      return [...prev, { menuItem: item, quantity, notes }];
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((i) => {
          if (i.menuItem.id === itemId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCartItems((prev) => prev.filter((i) => i.menuItem.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Order submission
  const handlePlaceOrder = (newOrder: Order) => {
    setOrders((prev) => [newOrder, ...prev]);
  };

  // Spa booking request
  const handleRequestSpaBooking = (booking: SpaBookingRequest) => {
    setSpaBookings((prev) => [booking, ...prev]);
  };

  // Order status progression
  const handleUpdateOrderStatus = (
    orderId: string,
    status: 'received' | 'in_preparation' | 'delivered'
  ) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status } : o))
    );
  };

  // Spa booking status progression
  const handleUpdateBookingStatus = (
    bookingId: string,
    status: 'pending' | 'confirmed' | 'completed'
  ) => {
    setSpaBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status } : b))
    );
  };

  // Reset CMS defaults
  const handleResetDefaults = () => {
    setMenuItems(initialMenuItems);
    setSpaTreatments(initialSpaTreatments);
    setNotices(initialNotices);
  };

  const cartTotalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1c2833] flex flex-col font-sans">
      {/* Navigation Header */}
      <Header
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        currency={currency}
        onToggleCurrency={() => setCurrency(currency === 'TND' ? 'EUR' : 'TND')}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        cartCount={cartTotalItemsCount}
        onOpenCart={() => setIsCartOpen(true)}
        roomNumber={roomNumber}
        onUpdateRoomNumber={setRoomNumber}
      />

      {/* Stay Weather & Sea Condition Micro-Bar */}
      <GuestBar currentLang={currentLang} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {activeTab === 'palace' && (
          <PalaceShowcase
            currentLang={currentLang}
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'dining' && (
          <RoomServiceSection
            currentLang={currentLang}
            currency={currency}
            items={menuItems}
            onAddToCart={handleAddToCart}
            onOpenCart={() => setIsCartOpen(true)}
          />
        )}

        {activeTab === 'spa' && (
          <SpaSection
            currentLang={currentLang}
            currency={currency}
            treatments={spaTreatments}
          />
        )}

        {activeTab === 'notices' && (
          <NoticesSection
            currentLang={currentLang}
            notices={notices}
          />
        )}

        {activeTab === 'cms' && (
          <CmsPortal
            currentLang={currentLang}
            currency={currency}
            menuItems={menuItems}
            onUpdateMenuItems={setMenuItems}
            spaTreatments={spaTreatments}
            onUpdateSpaTreatments={setSpaTreatments}
            notices={notices}
            onUpdateNotices={setNotices}
            orders={orders}
            onUpdateOrderStatus={handleUpdateOrderStatus}
            onResetDefaults={handleResetDefaults}
          />
        )}
      </main>

      {/* Room Service Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        currentLang={currentLang}
        currency={currency}
        items={cartItems}
        roomNumber={roomNumber}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onPlaceOrder={handlePlaceOrder}
        onClearCart={handleClearCart}
      />

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
