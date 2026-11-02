import { CartItem, Currency, Language, MenuItem, RoomNotice, SpaTreatment } from '../types';

export const TND_TO_EUR_RATE = 0.30; // 1 TND approx 0.30 EUR

export function formatPrice(amount: number, currency: Currency): string {
  if (currency === 'EUR') {
    return `${amount.toFixed(2)} €`;
  }
  // Tunisian Dinar is typically formatted with 3 decimal places (millimes)
  return `${amount.toFixed(3)} DT`;
}

export function calculateOrderTotals(items: CartItem[]) {
  const subtotalTND = items.reduce((sum, item) => sum + item.menuItem.priceTND * item.quantity, 0);
  const subtotalEUR = items.reduce((sum, item) => sum + item.menuItem.priceEUR * item.quantity, 0);
  
  // 10% Royal in-room service tray & setup fee
  const serviceFeeTND = Math.round(subtotalTND * 0.1 * 1000) / 1000;
  const serviceFeeEUR = Math.round(subtotalEUR * 0.1 * 100) / 100;
  
  const totalTND = Math.round((subtotalTND + serviceFeeTND) * 1000) / 1000;
  const totalEUR = Math.round((subtotalEUR + serviceFeeEUR) * 100) / 100;

  return {
    subtotalTND,
    subtotalEUR,
    serviceFeeTND,
    serviceFeeEUR,
    totalTND,
    totalEUR,
    totalItemsCount: items.reduce((sum, item) => sum + item.quantity, 0),
  };
}

export function filterMenuItems(
  items: MenuItem[],
  category: string,
  dietaryFilter: string,
  searchQuery: string,
  language: Language
): MenuItem[] {
  const query = searchQuery.trim().toLowerCase();

  return items.filter((item) => {
    // Availability
    if (!item.available) return false;

    // Category filter
    if (category !== 'all' && item.category !== category) {
      return false;
    }

    // Dietary filter
    if (dietaryFilter !== 'all') {
      const hasTag = item.dietary.some((tag) => 
        tag.toLowerCase().includes(dietaryFilter.toLowerCase())
      );
      if (!hasTag) return false;
    }

    // Search query matching against the active language name or description, plus English as fallback
    if (query) {
      const activeName = (item.name[language] || item.name.en).toLowerCase();
      const activeDesc = (item.description[language] || item.description.en).toLowerCase();
      const engName = item.name.en.toLowerCase();
      const dietaryMatches = item.dietary.some(d => d.toLowerCase().includes(query));

      if (
        !activeName.includes(query) &&
        !activeDesc.includes(query) &&
        !engName.includes(query) &&
        !dietaryMatches
      ) {
        return false;
      }
    }

    return true;
  });
}

export function filterSpaTreatments(
  items: SpaTreatment[],
  category: string,
  searchQuery: string,
  language: Language
): SpaTreatment[] {
  const query = searchQuery.trim().toLowerCase();

  return items.filter((item) => {
    if (!item.available) return false;

    if (category !== 'all' && item.category !== category) {
      return false;
    }

    if (query) {
      const activeTitle = (item.title[language] || item.title.en).toLowerCase();
      const activeDesc = (item.description[language] || item.description.en).toLowerCase();
      const engTitle = item.title.en.toLowerCase();
      const benefits = (item.benefits[language] || item.benefits.en || []).join(' ').toLowerCase();

      if (
        !activeTitle.includes(query) &&
        !activeDesc.includes(query) &&
        !engTitle.includes(query) &&
        !benefits.includes(query)
      ) {
        return false;
      }
    }

    return true;
  });
}

export function sortAndFilterNotices(
  notices: RoomNotice[],
  category: string
): RoomNotice[] {
  let list = notices;
  if (category !== 'all') {
    list = list.filter((n) => n.category === category);
  }

  // Urgent notices pinned first, then newest first
  return [...list].sort((a, b) => {
    if (a.isUrgent && !b.isUrgent) return -1;
    if (!a.isUrgent && b.isUrgent) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function generateOrderCode(prefix = 'MP'): string {
  const num = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${num}`;
}

export function validateRoomNumber(room: string): { isValid: boolean; error?: string } {
  const clean = room.trim();
  if (!clean) {
    return { isValid: false, error: 'Room number is required' };
  }
  // Allow rooms 100 - 899 or Royal / Presidential suites
  const isNumeric = /^[1-8][0-9]{2}$/.test(clean);
  const isSuite = /^(suite|villa|presidential|royal|ph)[a-z0-9 -]*$/i.test(clean);
  
  if (!isNumeric && !isSuite) {
    return {
      isValid: false,
      error: 'Please enter a valid 3-digit room number (e.g. 304) or Suite name',
    };
  }

  return { isValid: true };
}
