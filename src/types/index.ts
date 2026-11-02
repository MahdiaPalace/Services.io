export type Language = 'en' | 'fr' | 'ar' | 'ru' | 'it' | 'de';

export type Currency = 'TND' | 'EUR';

export interface LocalizedString {
  en: string;
  fr: string;
  ar: string;
  ru: string;
  it: string;
  de: string;
}

export type MenuCategory = 
  | 'breakfast'
  | 'starters'
  | 'mains'
  | 'desserts'
  | 'beverages'
  | 'wines';

export interface MenuItem {
  id: string;
  category: MenuCategory;
  name: LocalizedString;
  description: LocalizedString;
  priceTND: number;
  priceEUR: number;
  dietary: string[]; // e.g. 'Halal', 'Vegetarian', 'Seafood', 'Tunisian Heritage', 'Gluten-Free'
  image: string;
  available: boolean;
  preparationTime: string;
  calories?: number;
}

export type SpaCategory =
  | 'thalasso'
  | 'hammam'
  | 'massages'
  | 'facials'
  | 'cures';

export interface SpaTreatment {
  id: string;
  category: SpaCategory;
  title: LocalizedString;
  description: LocalizedString;
  duration: string;
  priceTND: number;
  priceEUR: number;
  benefits: {
    en: string[];
    fr: string[];
    ar: string[];
    ru: string[];
    it: string[];
    de: string[];
  };
  image: string;
  available: boolean;
  highlight?: boolean;
}

export type NoticeCategory =
  | 'general'
  | 'dining'
  | 'wellness'
  | 'beach'
  | 'housekeeping';

export interface RoomNotice {
  id: string;
  title: LocalizedString;
  content: LocalizedString;
  category: NoticeCategory;
  isUrgent: boolean;
  date: string;
  icon: 'wifi' | 'clock' | 'umbrella' | 'utensils' | 'info' | 'sparkles' | 'bell';
  targetRooms?: string;
  pinnedUntil?: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  notes?: string;
}

export interface Order {
  id: string;
  orderCode: string;
  roomNumber: string;
  guestName: string;
  items: CartItem[];
  subtotalTND: number;
  subtotalEUR: number;
  serviceFeeTND: number;
  totalTND: number;
  totalEUR: number;
  status: 'received' | 'in_preparation' | 'delivered';
  orderTime: string;
  estimatedDelivery: string;
  notes?: string;
}

export interface SpaBookingRequest {
  id: string;
  bookingCode: string;
  roomNumber: string;
  guestName: string;
  treatmentId: string;
  treatmentTitle: string;
  preferredDate: string;
  preferredTime: string;
  guestsCount: number;
  notes?: string;
  status: 'pending' | 'confirmed' | 'completed';
  createdAt: string;
}
