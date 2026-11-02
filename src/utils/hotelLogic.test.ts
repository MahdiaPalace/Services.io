import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateOrderTotals,
  filterMenuItems,
  filterSpaTreatments,
  formatPrice,
  generateOrderCode,
  sortAndFilterNotices,
  validateRoomNumber,
} from './hotelLogic';
import { CartItem, MenuItem, RoomNotice, SpaTreatment } from '../types';

const mockMenuItem1: MenuItem = {
  id: 'm1',
  category: 'mains',
  name: {
    en: 'Mahdia Royal Couscous with Fresh Grouper',
    fr: 'Couscous Royal de Mahdia au Mérou Frais',
    ar: 'كسكسي مهداوي فاخر بالمناني الطازج',
    ru: 'Королевский кускус с морским окунем',
    it: 'Couscous Reale di Mahdia con Cernia',
    de: 'Königlicher Couscous aus Mahdia mit Zackenbarsch',
  },
  description: {
    en: 'Traditional steamed semolina with freshly caught Mediterranean grouper',
    fr: 'Semoule cuite à la vapeur avec mérou frais de Méditerranée',
    ar: 'سميد تقليدي مطهو على البخار مع سمك المناني المتوسطي الطازج',
    ru: 'Традиционная манка на пару со свежевыловленным средиземноморским окунем',
    it: 'Semola al vapore con cernia fresca del Mediterraneo',
    de: 'Traditioneller gedämpfter Hartweizengrieß mit frischem Zackenbarsch',
  },
  priceTND: 65,
  priceEUR: 19.5,
  dietary: ['Tunisian Heritage', 'Seafood', 'Halal'],
  image: '/images/couscous.jpg',
  available: true,
  preparationTime: '30 min',
};

const mockMenuItem2: MenuItem = {
  id: 'm2',
  category: 'breakfast',
  name: {
    en: 'Continental Palace Breakfast',
    fr: 'Petit-déjeuner Continental Palace',
    ar: 'إفطار القصر القاري',
    ru: 'Континентальный дворецкий завтрак',
    it: 'Colazione Continentale Palace',
    de: 'Kontinentales Palast-Frühstück',
  },
  description: {
    en: 'Freshly baked viennoiseries, organic Tunisian date jam, artisan honey',
    fr: 'Viennoiseries fraîches, confiture de dattes tunisiennes, miel d artisan',
    ar: 'معجنات طازجة ومربى تمور تونسية وعسل جبلي',
    ru: 'Свежая выпечка, джем из тунисских фиников, ремесленный мед',
    it: 'Pasticceria fresca, marmellata di datteri tunisini, miele artigianale',
    de: 'Frisches Gebäck, tunisische Dattelmarmelade, handwerklicher Honig',
  },
  priceTND: 45,
  priceEUR: 13.5,
  dietary: ['Vegetarian', 'Halal'],
  image: '/images/breakfast.jpg',
  available: true,
  preparationTime: '20 min',
};

test('formatPrice correctly formats TND with millimes and EUR with 2 decimals', () => {
  assert.equal(formatPrice(45, 'TND'), '45.000 DT');
  assert.equal(formatPrice(19.5, 'EUR'), '19.50 €');
});

test('calculateOrderTotals computes correct subtotals, 10% service fee, and totals', () => {
  const items: CartItem[] = [
    { menuItem: mockMenuItem1, quantity: 2 }, // 2 * 65 = 130 TND, 2 * 19.5 = 39 EUR
    { menuItem: mockMenuItem2, quantity: 1 }, // 1 * 45 = 45 TND, 1 * 13.5 = 13.5 EUR
  ];

  const totals = calculateOrderTotals(items);
  assert.equal(totals.subtotalTND, 175);
  assert.equal(totals.subtotalEUR, 52.5);
  assert.equal(totals.serviceFeeTND, 17.5);
  assert.equal(totals.serviceFeeEUR, 5.25);
  assert.equal(totals.totalTND, 192.5);
  assert.equal(totals.totalEUR, 57.75);
  assert.equal(totals.totalItemsCount, 3);
});

test('filterMenuItems filters by category and dietary requirements', () => {
  const items = [mockMenuItem1, mockMenuItem2];
  
  // Filter by category 'breakfast'
  const breakfastOnly = filterMenuItems(items, 'breakfast', 'all', '', 'en');
  assert.equal(breakfastOnly.length, 1);
  assert.equal(breakfastOnly[0].id, 'm2');

  // Filter by dietary 'Seafood'
  const seafoodOnly = filterMenuItems(items, 'all', 'Seafood', '', 'en');
  assert.equal(seafoodOnly.length, 1);
  assert.equal(seafoodOnly[0].id, 'm1');

  // Search query in French
  const searchGrouper = filterMenuItems(items, 'all', 'all', 'mérou', 'fr');
  assert.equal(searchGrouper.length, 1);
  assert.equal(searchGrouper[0].id, 'm1');

  // Search query in Arabic
  const searchArabic = filterMenuItems(items, 'all', 'all', 'تمور', 'ar');
  assert.equal(searchArabic.length, 1);
  assert.equal(searchArabic[0].id, 'm2');
});

test('sortAndFilterNotices prioritizes urgent notices and respects category', () => {
  const notices: RoomNotice[] = [
    {
      id: 'n1',
      title: { en: 'Routine Housekeeping', fr: '', ar: '', ru: '', it: '', de: '' },
      content: { en: '10am-4pm', fr: '', ar: '', ru: '', it: '', de: '' },
      category: 'housekeeping',
      isUrgent: false,
      date: '2026-11-01',
      icon: 'sparkles',
    },
    {
      id: 'n2',
      title: { en: 'Sea Weather Advisory: Calm Green Flag', fr: '', ar: '', ru: '', it: '', de: '' },
      content: { en: 'Safe swimming today', fr: '', ar: '', ru: '', it: '', de: '' },
      category: 'beach',
      isUrgent: true,
      date: '2026-11-02',
      icon: 'umbrella',
    },
    {
      id: 'n3',
      title: { en: 'Moorish Evening Music', fr: '', ar: '', ru: '', it: '', de: '' },
      content: { en: 'Live Oud music at 8pm', fr: '', ar: '', ru: '', it: '', de: '' },
      category: 'general',
      isUrgent: false,
      date: '2026-11-02',
      icon: 'sparkles',
    },
  ];

  const sorted = sortAndFilterNotices(notices, 'all');
  assert.equal(sorted[0].id, 'n2', 'Urgent notice must be first');

  const beachOnly = sortAndFilterNotices(notices, 'beach');
  assert.equal(beachOnly.length, 1);
  assert.equal(beachOnly[0].id, 'n2');
});

test('validateRoomNumber validates correct hotel room numbers and suites', () => {
  assert.equal(validateRoomNumber('304').isValid, true);
  assert.equal(validateRoomNumber('712').isValid, true);
  assert.equal(validateRoomNumber('Suite 401').isValid, true);
  assert.equal(validateRoomNumber('Royal Suite').isValid, true);
  assert.equal(validateRoomNumber('').isValid, false);
  assert.equal(validateRoomNumber('xyz9999').isValid, false);
});

test('generateOrderCode generates expected format with MP- prefix', () => {
  const code = generateOrderCode('MP');
  assert.match(code, /^MP-\d{4}$/);
});
