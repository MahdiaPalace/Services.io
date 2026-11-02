import { Language } from '../types';

export interface TranslationDictionary {
  hotelName: string;
  hotelSubtitle: string;
  tagline: string;
  nav: {
    palace: string;
    roomService: string;
    spa: string;
    notices: string;
    cms: string;
    cart: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    exploreDining: string;
    exploreSpa: string;
    viewNotices: string;
    roomServiceHours: string;
    beachStatus: string;
  };
  guestBar: {
    room: string;
    setRoom: string;
    saveRoom: string;
    weather: string;
    seaTemp: string;
    beachFlag: string;
    calmSea: string;
    guestStayPortal: string;
  };
  dining: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allCategories: string;
    breakfast: string;
    starters: string;
    mains: string;
    desserts: string;
    beverages: string;
    wines: string;
    dietaryAll: string;
    dietaryHalal: string;
    dietaryVegetarian: string;
    dietarySeafood: string;
    dietaryTunisian: string;
    prepTime: string;
    addToCart: string;
    addedToCart: string;
    currencyToggle: string;
    unavailable: string;
  };
  cart: {
    title: string;
    emptyMessage: string;
    roomNumber: string;
    guestName: string;
    specialNotes: string;
    specialNotesPlaceholder: string;
    subtotal: string;
    serviceFee: string;
    serviceFeeDesc: string;
    total: string;
    confirmOrder: string;
    processing: string;
    orderSuccessTitle: string;
    orderSuccessDesc: string;
    orderCode: string;
    estimatedDelivery: string;
    close: string;
  };
  spa: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allCategories: string;
    thalasso: string;
    hammam: string;
    massages: string;
    facials: string;
    cures: string;
    duration: string;
    bookSession: string;
    benefits: string;
    phoneNoticeTitle: string;
    phoneNoticeDesc: string;
    dialNine: string;
    bookingModalTitle: string;
    roomNumber: string;
    guestName: string;
    preferredDate: string;
    preferredTime: string;
    guestsCount: string;
    notes: string;
    confirmBooking: string;
    bookingSuccessTitle: string;
    bookingSuccessDesc: string;
    bookingCode: string;
    curativeProperties: string;
  };
  notices: {
    title: string;
    subtitle: string;
    allCategories: string;
    general: string;
    dining: string;
    wellness: string;
    beach: string;
    housekeeping: string;
    urgentNotice: string;
    pinnedNotice: string;
    forGuestsIn: string;
    conciergeDirect: string;
    callConcierge: string;
  };
  cms: {
    badge: string;
    title: string;
    subtitle: string;
    tabs: {
      roomService: string;
      spa: string;
      notices: string;
      orders: string;
      spaRequests: string;
    };
    addNewItem: string;
    addNewTreatment: string;
    addNewNotice: string;
    edit: string;
    delete: string;
    toggleStatus: string;
    available: string;
    unavailable: string;
    urgent: string;
    resetDefaults: string;
    resetSuccess: string;
    saveChanges: string;
    cancel: string;
    liveOrdersTitle: string;
    statusReceived: string;
    statusPreparing: string;
    statusDelivered: string;
    pendingBookings: string;
    confirmedBookings: string;
  };
  palaceShowcase: {
    archTitle: string;
    archDesc: string;
    thalassoTitle: string;
    thalassoDesc: string;
    diningTitle: string;
    diningDesc: string;
    beachTitle: string;
    beachDesc: string;
    suitesTitle: string;
    suitesDesc: string;
  };
  footer: {
    address: string;
    rights: string;
    staffPortal: string;
    conciergeNumber: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    hotelName: 'Mahdia Palace',
    hotelSubtitle: 'Thalasso · Spa & Kneipp *****',
    tagline: 'Moorish splendour meets Mediterranean azure luxury in Mahdia, Tunisia.',
    nav: {
      palace: 'The Palace',
      roomService: 'Room Service',
      spa: 'Thalasso & Spa',
      notices: 'Guest Notices',
      cms: 'Management CMS',
      cart: 'Dining Tray',
    },
    hero: {
      badge: '5-Star Moorish Thalassotherapy Resort',
      title: 'A Sanctuary of Arabesque Grandeur & Azure Serenity',
      subtitle: 'Welcome to your royal sanctuary in Mahdia. Explore in-room culinary delicacies, thalasso seawater therapies, and daily guest Front Desk bulletins.',
      exploreDining: 'In-Room Dining Menu',
      exploreSpa: 'Thalasso Spa Rituals',
      viewNotices: 'Guest Room Notices',
      roomServiceHours: 'Room Service 24/7 Available',
      beachStatus: 'Private Golden Sand Beach',
    },
    guestBar: {
      room: 'Room',
      setRoom: 'Set Room',
      saveRoom: 'Save',
      weather: 'Mahdia Sunshine',
      seaTemp: 'Sea Water',
      beachFlag: 'Beach Flag',
      calmSea: 'Gentle Breeze · Green Flag',
      guestStayPortal: 'In-Stay Front Desk Portal',
    },
    dining: {
      title: 'In-Room Dining & Gourmandise',
      subtitle: 'Artisanal Tunisian heritage recipes, Mediterranean seafood, and international palace classics delivered with white-glove service to your suite.',
      searchPlaceholder: 'Search dishes, ingredients, or dietary preferences...',
      allCategories: 'All Categories',
      breakfast: 'Palace Breakfast',
      starters: 'Starters & Mezze',
      mains: 'Gourmet Mains',
      desserts: 'Patisserie & Sweets',
      beverages: 'Mocktails & Juices',
      wines: 'Cellar & Infusions',
      dietaryAll: 'All Dietary',
      dietaryHalal: 'Halal Certified',
      dietaryVegetarian: 'Vegetarian',
      dietarySeafood: 'Fresh Seafood',
      dietaryTunisian: 'Tunisian Heritage',
      prepTime: 'Prep Time',
      addToCart: 'Add to Tray',
      addedToCart: 'Added to Tray',
      currencyToggle: 'Currency',
      unavailable: 'Currently Unavailable',
    },
    cart: {
      title: 'Your Room Service Order',
      emptyMessage: 'Your tray is currently empty. Explore our in-room dining selection.',
      roomNumber: 'Suite / Room Number',
      guestName: 'Guest Full Name',
      specialNotes: 'Special Dietary Requests & Delivery Instructions',
      specialNotesPlaceholder: 'e.g., No coriander, extra napkins, serve on terrace at 19:30...',
      subtotal: 'Subtotal',
      serviceFee: 'Room Tray & Service (10%)',
      serviceFeeDesc: 'Includes palace table setup, silver cloche presentation, and suite delivery.',
      total: 'Grand Total',
      confirmOrder: 'Place Room Service Order',
      processing: 'Confirming with Chef...',
      orderSuccessTitle: 'Room Order Confirmed!',
      orderSuccessDesc: 'Our palace culinary brigade is preparing your selection. Your dishes will be delivered promptly to your room.',
      orderCode: 'Order Reference',
      estimatedDelivery: 'Estimated Delivery: ~30-40 min',
      close: 'Close',
    },
    spa: {
      title: 'Thalasso & Royal Hammam Menu',
      subtitle: 'Harmonizing pure Mediterranean seawater, mineral-rich Tunisian marine algae, and ancestral Arabesque hammam ceremonies.',
      searchPlaceholder: 'Search seawater baths, massage rituals, or cures...',
      allCategories: 'All Therapies',
      thalasso: 'Thalassotherapy & Seawater',
      hammam: 'Oriental Hammam Rituals',
      massages: 'Palace Massages',
      facials: 'Marine Radiance Facials',
      cures: 'Multi-Day Wellness Cures',
      duration: 'Duration',
      bookSession: 'Reserve by Phone · Dial 9',
      benefits: 'Therapeutic Benefits',
      phoneNoticeTitle: 'Appointments & Consultations Exclusively by Phone',
      phoneNoticeDesc: 'There is no online appointment system. All reservations, wellness schedules, and personalized Thalasso cures are arranged directly with reception: please dial 9 from your suite telephone.',
      dialNine: 'Reception: Dial 9',
      bookingModalTitle: 'Reserve Thalasso & Spa Treatment',
      roomNumber: 'Room / Suite Number',
      guestName: 'Guest Full Name',
      preferredDate: 'Preferred Date',
      preferredTime: 'Preferred Time Slot',
      guestsCount: 'Number of Guests',
      notes: 'Special Requests / Health Notes',
      confirmBooking: 'Confirm Appointment Request',
      bookingSuccessTitle: 'Spa Appointment Requested!',
      bookingSuccessDesc: 'Our Thalasso Front Desk team has received your request and will telephone your room shortly to confirm your reserved slot.',
      bookingCode: 'Reservation Code',
      curativeProperties: 'Pure Mediterranean bio-active minerals sourced directly from Mahdia Bay.',
    },
    notices: {
      title: 'Guest Notices & Front Desk Directory',
      subtitle: 'Essential information, daily palace programming, beach flags, and housekeeping announcements for your seamless stay.',
      allCategories: 'All Bulletins',
      general: 'Palace Life & Culture',
      dining: 'Restaurant Schedules',
      wellness: 'Thalasso & Pools',
      beach: 'Private Beach & Sea',
      housekeeping: 'Housekeeping & Suites',
      urgentNotice: 'High-Priority Bulletin',
      pinnedNotice: 'Pinned for All Guests',
      forGuestsIn: 'Target Audience',
      conciergeDirect: 'Front Desk: Dial 9 from your room telephone.',
      callConcierge: 'Need assistance? Our 24-hour Front Desk is at your service.',
    },
    cms: {
      badge: 'Hotel Management & Front Desk Hub',
      title: 'Integrated Palace CMS',
      subtitle: 'Manage in-room dining menus, spa packages, live bulletins, and track guest orders in real time.',
      tabs: {
        roomService: 'Room Service Items',
        spa: 'Spa Therapies',
        notices: 'Guest Notices',
        orders: 'Active Room Orders',
        spaRequests: 'Spa Bookings',
      },
      addNewItem: '+ Add Menu Item',
      addNewTreatment: '+ Add Spa Treatment',
      addNewNotice: '+ Add Notice Bulletin',
      edit: 'Edit',
      delete: 'Delete',
      toggleStatus: 'Toggle Availability',
      available: 'Available',
      unavailable: 'Paused',
      urgent: 'Urgent Alert',
      resetDefaults: 'Reset to Palace Defaults',
      resetSuccess: 'Content successfully restored to default palace data.',
      saveChanges: 'Save Item',
      cancel: 'Cancel',
      liveOrdersTitle: 'Live Room Service Orders',
      statusReceived: 'Order Received',
      statusPreparing: 'In Kitchen',
      statusDelivered: 'Delivered to Suite',
      pendingBookings: 'Pending Confirmation',
      confirmedBookings: 'Confirmed',
    },
    palaceShowcase: {
      archTitle: 'Arabesque Arches & Moorish Splendour',
      archDesc: 'Handcrafted zellige tilework, majestic horseshoe arches, and sun-lit marble courtyards honouring Mahdia’s historic Fatimid caliphate dynasty.',
      thalassoTitle: 'World-Class Thalassotherapy Center',
      thalassoDesc: 'Over 3,000 m² devoted to pure sea-water wellness with heated marine circuits, hydro-massage jets, and traditional steam hammams.',
      diningTitle: 'Culinary Masterpieces',
      diningDesc: 'From the aristocratic Monastir dining room to Layali Moorish Café serving fragrant mint tea and delicate pine nut pastries under starry skies.',
      beachTitle: 'Pristine Mahdia Bay Waters',
      beachDesc: 'Fine white powdery sand and crystal clear turquoise waters with private serviced palapas and water activities.',
      suitesTitle: 'Suites of Regal Comfort',
      suitesDesc: 'Private terraces overlooking the shimmering Mediterranean, dressed in warm Tunisian silks, rich cedar woodwork, and hand-carved stucco.',
    },
    footer: {
      address: 'Zone Touristique Mahdia, B.P. 120, 5111 Mahdia, Tunisia',
      rights: 'All rights reserved. 5-Star Luxury Resort.',
      staffPortal: 'Management / CMS Access',
      conciergeNumber: '+216 73 683 300 · frontdesk@mahdiapalace.com',
    },
  },

  fr: {
    hotelName: 'Mahdia Palace',
    hotelSubtitle: 'Thalasso & Spa *****',
    tagline: 'Splendeur arabo-mauresque et luxe méditerranéen à Mahdia, Tunisie.',
    nav: {
      palace: 'Le Palais',
      roomService: 'Room Service',
      spa: 'Thalasso & Spa',
      notices: 'Avis & Informations',
      cms: 'Gestion CMS',
      cart: 'Plateau Repas',
    },
    hero: {
      badge: 'Palace 5 Étoiles & Centre de Thalassothérapie',
      title: 'Un Sanctuaire de Noblesse Arabesque & de Sérénité Azur',
      subtitle: 'Bienvenue dans votre havre d’exception à Mahdia. Découvrez les délices en chambre, les rituels marins de notre Thalasso et les avis officiels du Front Desk.',
      exploreDining: 'Menu Room Service',
      exploreSpa: 'Rituels Thalasso & Spa',
      viewNotices: 'Avis & Informations Chambres',
      roomServiceHours: 'Room Service disponible 24h/24',
      beachStatus: 'Plage Privée de Sable Blanc',
    },
    guestBar: {
      room: 'Chambre',
      setRoom: 'Changer',
      saveRoom: 'Valider',
      weather: 'Soleil de Mahdia',
      seaTemp: 'Mer Méditerranée',
      beachFlag: 'Drapeau Plage',
      calmSea: 'Mer Calme · Drapeau Vert',
      guestStayPortal: 'Portail Front Desk Résidents',
    },
    dining: {
      title: 'Room Service & Haute Gastronomie',
      subtitle: 'Saveurs authentiques du patrimoine tunisien, poissons nobles de la baie de Mahdia et classiques internationaux servis à votre suite sous cloche d’argent.',
      searchPlaceholder: 'Rechercher un mets, un ingrédient ou une préférence...',
      allCategories: 'Toutes les catégories',
      breakfast: 'Petits-déjeuners Palace',
      starters: 'Entrées & Mezzés',
      mains: 'Plats de Haute Table',
      desserts: 'Pâtisseries & Douceurs',
      beverages: 'Jus Frais & Mocktails',
      wines: 'Cave & Infusions',
      dietaryAll: 'Tout Régime',
      dietaryHalal: 'Certifié Halal',
      dietaryVegetarian: 'Végétarien',
      dietarySeafood: 'Pêche Locale',
      dietaryTunisian: 'Spécialité Tunisienne',
      prepTime: 'Temps de prép.',
      addToCart: 'Ajouter au plateau',
      addedToCart: 'Ajouté au plateau',
      currencyToggle: 'Devise',
      unavailable: 'Épuisé temporairement',
    },
    cart: {
      title: 'Votre Commande Room Service',
      emptyMessage: 'Votre plateau est vide. Parcourez notre carte gourmande en chambre.',
      roomNumber: 'Numéro de Chambre / Suite',
      guestName: 'Nom complet du Résident',
      specialNotes: 'Instructions et préférences diététiques',
      specialNotesPlaceholder: 'ex: Sans coriandre, service sur la terrasse à 20h00...',
      subtotal: 'Sous-total',
      serviceFee: 'Frais de dressage & service suite (10%)',
      serviceFeeDesc: 'Comprend le dressage en chambre, le service soigné sous cloche et le plateau palace.',
      total: 'Total Général',
      confirmOrder: 'Commander en Chambre',
      processing: 'Transmission en cuisine...',
      orderSuccessTitle: 'Commande Confirmée !',
      orderSuccessDesc: 'Notre brigade prépare vos mets avec soin. Votre plateau vous sera livré directement en suite.',
      orderCode: 'Référence de Commande',
      estimatedDelivery: 'Délai estimé : ~30-40 min',
      close: 'Fermer',
    },
    spa: {
      title: 'Thalassothérapie & Rituels Hammam',
      subtitle: 'L’alliance bienfaisante des eaux de mer de Mahdia, des boues marines minéralisées et des rituels ancestraux arabo-andalous.',
      searchPlaceholder: 'Rechercher un soin, massage ou cure...',
      allCategories: 'Tous les soins',
      thalasso: 'Bains d’eau de mer & Thalasso',
      hammam: 'Rituels Hammam Oriental',
      massages: 'Massages Signature Palace',
      facials: 'Soins Visage Marins',
      cures: 'Cures Bien-Être Multi-Jours',
      duration: 'Durée',
      bookSession: 'Réserver par Téléphone · Composez le 9',
      benefits: 'Bienfaits Thérapeutiques',
      phoneNoticeTitle: 'Rendez-vous et Cures Exclusivement par Téléphone',
      phoneNoticeDesc: 'Il n’y a pas de réservation en ligne. Toutes les prises de rendez-vous, cures personnalisées et soins s’effectuent directement avec la réception : veuillez composer le 9 depuis le téléphone de votre chambre.',
      dialNine: 'Réception : Composez le 9',
      bookingModalTitle: 'Réserver un Soin Thalasso & Spa',
      roomNumber: 'Numéro de Chambre',
      guestName: 'Nom & Prénom',
      preferredDate: 'Date souhaitée',
      preferredTime: 'Créneau horaire',
      guestsCount: 'Nombre de personnes',
      notes: 'Remarques ou besoins particuliers',
      confirmBooking: 'Confirmer la Demande',
      bookingSuccessTitle: 'Demande Enregistrée !',
      bookingSuccessDesc: 'La réception du centre Thalasso vous contactera par téléphone en chambre pour finaliser votre horaire.',
      bookingCode: 'Code Réservation',
      curativeProperties: 'Eau de mer puisée au large de Mahdia, riche en oligo-éléments vivifiants.',
    },
    notices: {
      title: 'Avis Chambres & Répertoire Front Desk',
      subtitle: 'Horaires, conseils pratiques, conditions nautiques et programmes de festivités pour un séjour mémorable.',
      allCategories: 'Toutes les catégories',
      general: 'Vie du Palais & Événements',
      dining: 'Horaires des Restaurants',
      wellness: 'Thalasso & Piscines',
      beach: 'Plage Privée & Drapeaux',
      housekeeping: 'Gouvernante & Linges',
      urgentNotice: 'Notification Prioritaire',
      pinnedNotice: 'Épinglé pour tous les résidents',
      forGuestsIn: 'Chambres concernées',
      conciergeDirect: 'Front Desk / Réception : Composez le 9 depuis votre chambre.',
      callConcierge: 'Besoin d’assistance ? Notre équipe du Front Desk est à votre disposition 24h/24.',
    },
    cms: {
      badge: 'Portail Gestion & Front Desk',
      title: 'Système CMS Mahdia Palace',
      subtitle: 'Contrôlez les cartes du restaurant, les cures Thalasso, les avis aux résidents et les commandes en direct.',
      tabs: {
        roomService: 'Articles Room Service',
        spa: 'Soins Thalasso',
        notices: 'Avis aux Résidents',
        orders: 'Commandes Chambres',
        spaRequests: 'Demandes Spa',
      },
      addNewItem: '+ Ajouter un Plat / Boisson',
      addNewTreatment: '+ Ajouter un Soin Spa',
      addNewNotice: '+ Publier un Avis',
      edit: 'Modifier',
      delete: 'Supprimer',
      toggleStatus: 'Basculer Disponibilité',
      available: 'Disponible',
      unavailable: 'Suspendu',
      urgent: 'Alerte Urgente',
      resetDefaults: 'Réinitialiser Données Palace',
      resetSuccess: 'Données remises à l’état d’origine avec succès.',
      saveChanges: 'Enregistrer',
      cancel: 'Annuler',
      liveOrdersTitle: 'Commandes Room Service en Cours',
      statusReceived: 'Reçue',
      statusPreparing: 'En Préparation',
      statusDelivered: 'Livrée en Chambre',
      pendingBookings: 'En Attente',
      confirmedBookings: 'Confirmée',
    },
    palaceShowcase: {
      archTitle: 'Arches Arabesques & Décoration Mauresque',
      archDesc: 'Moucharabiehs raffinés, stucs sculptés à la main et marbres étincelants inspirés de la noble histoire fatimide de Mahdia.',
      thalassoTitle: 'Centre de Thalassothérapie de Renom',
      thalassoDesc: 'Plus de 3 000 m² entièrement dédiés aux bienfaits marins : parcours aquatiques chauffés, cabines d’affusion et hammams somptueux.',
      diningTitle: 'Haute Gastronomie & Salons de Thé',
      diningDesc: 'Du grand restaurant Le Monastir au Café Maure Layali pour savourer le thé à la menthe aux pignons sous les voûtes étoilées.',
      beachTitle: 'Plage Privée aux Eaux Cristallines',
      beachDesc: 'Une bande de sable blanc doré d’une finesse légendaire et des eaux calmes idéales pour la détente absolue.',
      suitesTitle: 'Suites Royales avec Vue Mer',
      suitesDesc: 'Salons baignés de lumière, balcons privés face à la Méditerranée et soieries tunisiennes tissées avec art.',
    },
    footer: {
      address: 'Zone Touristique Mahdia, B.P. 120, 5111 Mahdia, Tunisie',
      rights: 'Tous droits réservés. Resort de Prestige 5 Étoiles.',
      staffPortal: 'Accès Administration CMS',
      conciergeNumber: '+216 73 683 300 · frontdesk@mahdiapalace.com',
    },
  },

  ar: {
    hotelName: 'فندق قصر المهدية',
    hotelSubtitle: 'علاج بمياه البحر وسبا فاخر *****',
    tagline: 'روعة العمارة الأندلسية تلتقي بسحر المتوسط في مهدية الأصالة، تونس.',
    nav: {
      palace: 'عن القصر',
      roomService: 'خدمة الغرف',
      spa: 'السبا ومياه البحر',
      notices: 'تنبيهات الغرف',
      cms: 'لوحة التحكم CMS',
      cart: 'صينية الطلبات',
    },
    hero: {
      badge: 'منتجع 5 نجوم بطابع أندلسي ومركز ثالاسو عالمي',
      title: 'ملاذ الفخامة الأرابيسكية والسكينة المتوسطية الخالدة',
      subtitle: 'أهلاً بكم في قصركم الفاخر في المهدية. استمتعوا بأشهى المأكولات الملكية في غرفكم، وجلسات العلاج بمياه البحر النقية، ودليل إعلانات النزلاء اليومي.',
      exploreDining: 'قائمة خدمة الغرف',
      exploreSpa: 'قائمة طقوس السبا والثالاسو',
      viewNotices: 'إعلانات وتنبيهات النزلاء',
      roomServiceHours: 'خدمة الغرف متاحة 24/7',
      beachStatus: 'شاطئ خاص برمال ذهبية ناعمة',
    },
    guestBar: {
      room: 'الغرفة',
      setRoom: 'تعديل',
      saveRoom: 'حفظ',
      weather: 'شمس المهدية الدافئة',
      seaTemp: 'حرارة مياه البحر',
      beachFlag: 'راية الشاطئ',
      calmSea: 'بحر هادئ · راية خضراء',
      guestStayPortal: 'بوابة إقامة النزيل والمساعد الرقمي',
    },
    dining: {
      title: 'خدمة الغرف والمذاقات الملكية',
      subtitle: 'أطايب المطبخ التونسي العريق، وأسماك خليج المهدية الطازجة، وأشهر الأطباق العالمية تُقدم بأرقى معايير الضيافة الملكية في جناحكم.',
      searchPlaceholder: 'ابحث عن طبق، مكونات، أو متطلبات غذائية...',
      allCategories: 'جميع الأصناف',
      breakfast: 'فطور القصر الفاخر',
      starters: 'المقبلات والمزة',
      mains: 'الأطباق الرئيسية الفاخرة',
      desserts: 'الحلويات الملكية',
      beverages: 'العصائر والموكتيلات',
      wines: 'المشروبات الساخنة والقهوة',
      dietaryAll: 'كل الأنظمة',
      dietaryHalal: 'حلال مضمون',
      dietaryVegetarian: 'نباتي',
      dietarySeafood: 'مأكولات بحرية طازجة',
      dietaryTunisian: 'تراث تونسي أصيل',
      prepTime: 'مدة التحضير',
      addToCart: 'إضافة للصينية',
      addedToCart: 'تمت الإضافة',
      currencyToggle: 'العملة',
      unavailable: 'غير متاح حالياً',
    },
    cart: {
      title: 'صينية طلبات خدمة الغرف',
      emptyMessage: 'صينية طلباتكم فارغة حالياً. تفضلوا باستكشاف قائمة الطعام الفاخرة.',
      roomNumber: 'رقم الغرفة / الجناح',
      guestName: 'اسم النزيل الكريم',
      specialNotes: 'تعليمات التوصيل وملاحظات الأطعمة والحساسية',
      specialNotesPlaceholder: 'مثال: بدون كزبرة، تقديم في الشرفة المطلة على البحر الساعة 20:00...',
      subtotal: 'المجموع الجزئي',
      serviceFee: 'خدمة التقديم والتجهيز الملكي (10%)',
      serviceFeeDesc: 'يشمل تنسيق الصينية الملكية بأغطية الفضة الفاخرة وخدمة الجناح الراقية.',
      total: 'المجموع الإجمالي',
      confirmOrder: 'تأكيد طلب الغرفة',
      processing: 'جاري إرسال الطلب للمطبخ...',
      orderSuccessTitle: 'تم تأكيد طلبكم بنجاح!',
      orderSuccessDesc: 'طهاة القصر بدأوا في إعداد طلبكم بعناية فائقة. سيصلكم الطعام طازجاً وساخناً إلى غرفتكم.',
      orderCode: 'رقم مرجع الطلب',
      estimatedDelivery: 'الوقت المقدر للوصول: ~30-40 دقيقة',
      close: 'إغلاق',
    },
    spa: {
      title: 'مركز المعالجة بمياه البحر والسبا الملكي',
      subtitle: 'تناغم مياه البحر الأبيض المتوسط النقية مع الطحالب البحرية الطبيعية وطقوس الحمام الأندلسي الأصيل.',
      searchPlaceholder: 'ابحث عن جلسة استرخاء، مساج، أو علاج...',
      allCategories: 'جميع الجلسات',
      thalasso: 'المعالجة بمياه البحر والثالاسو',
      hammam: 'طقوس الحمام الشرقي التقليدي',
      massages: 'تدليك القصر الخاص',
      facials: 'عناية الوجه والجمال بالمعادن البحرية',
      cures: 'برامج علاجية لعدة أيام',
      duration: 'المدة',
      bookSession: 'الحجز عبر الهاتف · اتصل بالرقم 9',
      benefits: 'الفوائد العلاجية',
      phoneNoticeTitle: 'المواعيد والحجوزات تتم حصرياً عبر الهاتف',
      phoneNoticeDesc: 'لا توجد مواعيد عبر الإنترنت. كافة الحجوزات والاستفسارات وجلسات العلاج بمياه البحر تتم مباشرة مع قسم الاستقبال: يرجى الاتصال بالرقم 9 من هاتف غرفتكم.',
      dialNine: 'الاستقبال: اتصل بالرقم 9',
      bookingModalTitle: 'حجز جلسة سبا ومعالجة بمياه البحر',
      roomNumber: 'رقم الغرفة',
      guestName: 'الاسم الكامل',
      preferredDate: 'التاريخ المفضل',
      preferredTime: 'الوقت المفضل',
      guestsCount: 'عدد الضيوف',
      notes: 'ملاحظات صحية أو تفضيلات',
      confirmBooking: 'إرسال طلب الحجز',
      bookingSuccessTitle: 'تم استلام طلب حجز السبا بنجاح!',
      bookingSuccessDesc: 'سيتصل بكم قسم الاستقبال في مركز الثالاسو عبر هاتف الغرفة لتأكيد الموعد المناسب.',
      bookingCode: 'رمز الحجز',
      curativeProperties: 'مياه بحرية نقية مستخرجة مباشرة من أعماق خليج المهدية لتعزيز الطاقة والحيوية.',
    },
    notices: {
      title: 'لوحة تنبيهات الغرف ودليل الاستقبال (Front Desk)',
      subtitle: 'معلومات وإرشادات هامة، مواعيد الفعاليات ومرافق القصر، وحالة البحر لضمان إقامة مريحة وممتعة.',
      allCategories: 'كافة التصنيفات',
      general: 'حياة القصر والفعاليات',
      dining: 'أوقات المطاعم والوجبات',
      wellness: 'المسابح ومراكز الاسترخاء',
      beach: 'الشاطئ الخاص وحالة البحر',
      housekeeping: 'خدمات الغرف والنظافة',
      urgentNotice: 'تنبيه هام وعاجل',
      pinnedNotice: 'مثبت لجميع النزلاء',
      forGuestsIn: 'الفئة المستهدفة',
      conciergeDirect: 'مكتب الاستقبال (Front Desk): اتصل بالرقم 9 من هاتف الغرفة.',
      callConcierge: 'فريق الاستقبال (Front Desk) في خدمتكم على مدار 24 ساعة لراحتكم وسعادتكم.',
    },
    cms: {
      badge: 'نظام إدارة القصر ومكتب الاستقبال (Front Desk)',
      title: 'لوحة إدارة المحتوى الفندقي',
      subtitle: 'التحكم في قوائم الطعام، باقات السبا، الإعلانات المباشرة للغرف، ومتابعة طلبات النزلاء.',
      tabs: {
        roomService: 'قائمة خدمة الغرف',
        spa: 'جلسات السبا والثالاسو',
        notices: 'تنبيهات وإعلانات النزلاء',
        orders: 'طلبات الغرف المباشرة',
        spaRequests: 'حجوزات السبا',
      },
      addNewItem: '+ إضافة صنف طعام/شراب',
      addNewTreatment: '+ إضافة جلسة علاجية',
      addNewNotice: '+ نشر إعلان جديد',
      edit: 'تعديل',
      delete: 'حذف',
      toggleStatus: 'تغيير الحالة',
      available: 'متاح',
      unavailable: 'متوقف مؤقتاً',
      urgent: 'تنبيه عاجل',
      resetDefaults: 'استعادة البيانات الافتراضية للقصر',
      resetSuccess: 'تمت استعادة البيانات الأصلية بنجاح.',
      saveChanges: 'حفظ التعديلات',
      cancel: 'إلغاء',
      liveOrdersTitle: 'طلبات خدمة الغرف المباشرة',
      statusReceived: 'تم الاستلام',
      statusPreparing: 'قيد التحضير في المطبخ',
      statusDelivered: 'تم التوصيل للغرفة',
      pendingBookings: 'قيد الانتظار',
      confirmedBookings: 'تم التأكيد',
    },
    palaceShowcase: {
      archTitle: 'أقواس أرابيسك وفخامة أندلسية مغربية',
      archDesc: 'زليج تونسي تقليدي مصنوع يدوياً، وأقواس حدوة الفرس المهيبة، وباحات رخامية تعكس عراقة الدولة الفاطمية بالمهدية.',
      thalassoTitle: 'مركز ثالاسوتيرابي بمواصفات عالمية',
      thalassoDesc: 'أكثر من 3000 متر مربع مخصصة للاستشفاء بمياه البحر، مع مسابح بحرية دافئة وحمامات بخار شرقية فاخرة.',
      diningTitle: 'فنون الطهي الملكية الأصيلة',
      diningDesc: 'من مطعم المنستير الفاخر إلى مقهى ليالي التراثي للاستمتاع بالشاي التونسي بالصنوبر والحلويات تحت أضواء النجوم.',
      beachTitle: 'شاطئ المهدية الساحر ومياهه الفيروزية',
      beachDesc: 'رمال بيضاء ناعمة ومياه صافية رقراقة مع كراسي استرخاء ومظلات شمسية خاصة لنزلاء القصر.',
      suitesTitle: 'أجنحة فاخرة بإطلالات بحرية بانورامية',
      suitesDesc: 'شرفات خاصة تطل على مياه المتوسط المتلألئة، ومفروشات من الحرير التونسي والخشب المنقوش بعناية فائقة.',
    },
    footer: {
      address: 'المنطقة السياحية المهدية، ص.ب 120، 5111 المهدية، تونس',
      rights: 'جميع الحقوق محفوظة. منتجع 5 نجوم فاخر.',
      staffPortal: 'دخول إدارة القصر CMS',
      conciergeNumber: '+216 73 683 300 · frontdesk@mahdiapalace.com',
    },
  },

  ru: {
    hotelName: 'Mahdia Palace',
    hotelSubtitle: 'Thalasso & Spa *****',
    tagline: 'Мавританское великолепие и средиземноморская роскошь в Махдии, Тунис.',
    nav: {
      palace: 'О Дворце',
      roomService: 'Обслуживание номеров',
      spa: 'Талассо & Спа',
      notices: 'Уведомления для гостей',
      cms: 'Управление CMS',
      cart: 'Поднос заказа',
    },
    hero: {
      badge: '5-звездочный курорт с центром талассотерапии',
      title: 'Святилище Арабески и Средиземноморского Спокойствия',
      subtitle: 'Добро пожаловать в ваш королевский отель в Махдии. Меню доставки в номер, морские процедуры талассо и ежедневные объявления Front Desk.',
      exploreDining: 'Меню в номер',
      exploreSpa: 'Ритуалы Талассо & Спа',
      viewNotices: 'Объявления для гостей',
      roomServiceHours: 'Обслуживание номеров круглосуточно',
      beachStatus: 'Частный пляж с золотым песком',
    },
    guestBar: {
      room: 'Номер',
      setRoom: 'Изменить',
      saveRoom: 'Сохранить',
      weather: 'Солнце Махдии',
      seaTemp: 'Темп. моря',
      beachFlag: 'Флаг на пляже',
      calmSea: 'Штиль · Зеленый флаг',
      guestStayPortal: 'Цифровой консьерж гостя',
    },
    dining: {
      title: 'Изысканные блюда в номер',
      subtitle: 'Тунисские кулинарные традиции, свежие средиземноморские морепродукты и европейская классика с доставкой прямо в ваш сьют.',
      searchPlaceholder: 'Поиск блюд, ингредиентов или диетических блюд...',
      allCategories: 'Все категории',
      breakfast: 'Королевский завтрак',
      starters: 'Закуски и мезе',
      mains: 'Основные блюда',
      desserts: 'Десерты и выпечка',
      beverages: 'Коктейли и свежие соки',
      wines: 'Горячие напитки и карта вин',
      dietaryAll: 'Все предпочтения',
      dietaryHalal: 'Халяль',
      dietaryVegetarian: 'Вегетарианское',
      dietarySeafood: 'Морепродукты',
      dietaryTunisian: 'Тунисская кухня',
      prepTime: 'Время приг.',
      addToCart: 'В поднос',
      addedToCart: 'Добавлено',
      currencyToggle: 'Валюта',
      unavailable: 'Временно недоступно',
    },
    cart: {
      title: 'Ваш заказ в номер',
      emptyMessage: 'Поднос пуст. Выберите изысканные блюда из нашего меню.',
      roomNumber: 'Номер комнаты / сьюта',
      guestName: 'ФИО гостя',
      specialNotes: 'Особые пожелания и время доставки',
      specialNotesPlaceholder: 'напр.: подать на террасе к 19:30, без кинзы...',
      subtotal: 'Подытог',
      serviceFee: 'Сервировка и доставка в номер (10%)',
      serviceFeeDesc: 'Включает сервировку серебряными клошами и подачу официантом.',
      total: 'Итого к оплате',
      confirmOrder: 'Оформить заказ в номер',
      processing: 'Отправка на кухню...',
      orderSuccessTitle: 'Заказ успешно оформлен!',
      orderSuccessDesc: 'Наши шеф-повара приступили к приготовлению. Блюда будут доставлены прямо в ваш номер.',
      orderCode: 'Номер заказа',
      estimatedDelivery: 'Ориентировочное время: ~30-40 мин',
      close: 'Закрыть',
    },
    spa: {
      title: 'Талассотерапия и Восточный Хаммам',
      subtitle: 'Целебная морская вода залива Махдия, минеральные водоросли и традиционные арабские банные ритуалы.',
      searchPlaceholder: 'Поиск процедур, массажей и курсов...',
      allCategories: 'Все процедуры',
      thalasso: 'Морские ванны и талассо',
      hammam: 'Традиционный хаммам',
      massages: 'Фирменный массаж дворца',
      facials: 'Морские уходы за лицом',
      cures: 'Оздоровительные курсы',
      duration: 'Длительность',
      bookSession: 'Заказ по телефону · наберите 9',
      benefits: 'Лечебный эффект',
      phoneNoticeTitle: 'Запись на процедуры исключительно по телефону',
      phoneNoticeDesc: 'Онлайн-запись не ведется. Все процедуры, консультации и программы талассотерапии согласовываются напрямую с рецепцией: пожалуйста, наберите 9 с телефона в вашем номере.',
      dialNine: 'Рецепция: наберите 9',
      bookingModalTitle: 'Заказ процедуры Талассо & Спа',
      roomNumber: 'Номер комнаты',
      guestName: 'Имя гостя',
      preferredDate: 'Желаемая дата',
      preferredTime: 'Удобное время',
      guestsCount: 'Количество гостей',
      notes: 'Пожелания или состояние здоровья',
      confirmBooking: 'Отправить заявку',
      bookingSuccessTitle: 'Заявка на Спа принята!',
      bookingSuccessDesc: 'Администратор центра талассотерапии свяжется с вами по внутреннему телефону для подтверждения.',
      bookingCode: 'Код бронирования',
      curativeProperties: 'Натуральная морская вода, богатая ценными микроэлементами.',
    },
    notices: {
      title: 'Доска объявлений для гостей',
      subtitle: 'Важная информация, расписание ресторанов, флаги на пляже и сервисы отеля.',
      allCategories: 'Все объявления',
      general: 'Жизнь отеля и вечерние программы',
      dining: 'Расписание ресторанов',
      wellness: 'Бассейны и Спа',
      beach: 'Пляж и морские условия',
      housekeeping: 'Уборка и сервис номеров',
      urgentNotice: 'Срочное уведомление',
      pinnedNotice: 'Закреплено для всех гостей',
      forGuestsIn: 'Для номеров',
      conciergeDirect: 'Стойка регистрации (Front Desk): наберите 9 с телефона в номере.',
      callConcierge: 'Круглосуточная служба Front Desk к вашим услугам.',
    },
    cms: {
      badge: 'Панель управления отелем',
      title: 'Система CMS Mahdia Palace',
      subtitle: 'Редактируйте меню доставки в номер, каталог спа, объявления и заказы гостей онлайн.',
      tabs: {
        roomService: 'Меню в номер',
        spa: 'Процедуры Спа',
        notices: 'Объявления',
        orders: 'Заказы номеров',
        spaRequests: 'Заявки в Спа',
      },
      addNewItem: '+ Добавить блюдо',
      addNewTreatment: '+ Добавить процедуру',
      addNewNotice: '+ Добавить объявление',
      edit: 'Редактировать',
      delete: 'Удалить',
      toggleStatus: 'Изменить статус',
      available: 'Доступно',
      unavailable: 'Приостановлено',
      urgent: 'Срочное объявление',
      resetDefaults: 'Сброс к исходным данным',
      resetSuccess: 'Исходные данные дворца успешно восстановлены.',
      saveChanges: 'Сохранить',
      cancel: 'Отмена',
      liveOrdersTitle: 'Текущие заказы в номера',
      statusReceived: 'Принят',
      statusPreparing: 'Готовится на кухне',
      statusDelivered: 'Доставлен в номер',
      pendingBookings: 'Ожидает подтверждения',
      confirmedBookings: 'Подтверждено',
    },
    palaceShowcase: {
      archTitle: 'Арабески и мавританская архитектура',
      archDesc: 'Резная мозаика зуллейдж, величественные подковообразные арки и мраморные дворики в честь фатимидской истории Махдии.',
      thalassoTitle: 'Центр талассотерапии мирового класса',
      thalassoDesc: 'Более 3000 м² для оздоровления морской водой: подогреваемые морские бассейны, гидромассаж и роскошный хаммам.',
      diningTitle: 'Высокая кулинария и восточные кофейни',
      diningDesc: 'От главного ресторана Monastir до мавританского кафе Layali с аутентичным мятным чаем с кедровыми орешками.',
      beachTitle: 'Белоснежный песчаный пляж Махдии',
      beachDesc: 'Знаменитый чистейший белый песок и кристальные бирюзовые волны с комфортабельными шезлонгами.',
      suitesTitle: 'Королевские сьюты с видом на море',
      suitesDesc: 'Просторные балконы над Средиземным морем, отделка тунисским шелком и ценными породами дерева.',
    },
    footer: {
      address: 'Zone Touristique Mahdia, B.P. 120, 5111 Махдия, Тунис',
      rights: 'Все права защищены. 5-звездочный отель.',
      staffPortal: 'Вход для персонала CMS',
      conciergeNumber: '+216 73 683 300 · frontdesk@mahdiapalace.com',
    },
  },

  it: {
    hotelName: 'Mahdia Palace',
    hotelSubtitle: 'Thalasso & Spa *****',
    tagline: 'Splendore arabo-moresco e lusso mediterraneo a Mahdia, Tunisia.',
    nav: {
      palace: 'Il Palazzo',
      roomService: 'Room Service',
      spa: 'Thalasso & Spa',
      notices: 'Avvisi per gli Ospiti',
      cms: 'Gestione CMS',
      cart: 'Vassoio Ordini',
    },
    hero: {
      badge: 'Resort 5 Stelle & Centro di Talassoterapia',
      title: 'Un Santuario di Nobiltà Arabesque e Serenità Azzurra',
      subtitle: 'Benvenuti nel vostro palazzo a Mahdia. Scoprite la gastronomia in camera, i percorsi di talassoterapia marina e il bollettino del Front Desk.',
      exploreDining: 'Menu Room Service',
      exploreSpa: 'Rituali Thalasso & Spa',
      viewNotices: 'Avvisi e Informazioni Camere',
      roomServiceHours: 'Servizio in camera 24/7',
      beachStatus: 'Spiaggia Privata di Sabbia Dorata',
    },
    guestBar: {
      room: 'Camera',
      setRoom: 'Cambia',
      saveRoom: 'Salva',
      weather: 'Sole di Mahdia',
      seaTemp: 'Temp. Mare',
      beachFlag: 'Bandiera Spiaggia',
      calmSea: 'Mare Calmo · Bandiera Verde',
      guestStayPortal: 'Portale Front Desk per gli Ospiti',
    },
    dining: {
      title: 'Ristorazione in Camera & Delizie',
      subtitle: 'Tradizioni tunisine, pescato fresco del golfo di Mahdia e piatti internazionali serviti con cura direttamente nella vostra suite.',
      searchPlaceholder: 'Cerca piatti, ingredienti o diete...',
      allCategories: 'Tutte le categorie',
      breakfast: 'Colazione Palace',
      starters: 'Antipasti & Mezze',
      mains: 'Secondi Gourmet',
      desserts: 'Pasticceria & Dolci',
      beverages: 'Succhi & Mocktail',
      wines: 'Cantina & Infusi',
      dietaryAll: 'Tutte le diete',
      dietaryHalal: 'Certificato Halal',
      dietaryVegetarian: 'Vegetariano',
      dietarySeafood: 'Pesce Fresco',
      dietaryTunisian: 'Tradizione Tunisina',
      prepTime: 'Tempo prep.',
      addToCart: 'Aggiungi al vassoio',
      addedToCart: 'Aggiunto al vassoio',
      currencyToggle: 'Valuta',
      unavailable: 'Non disponibile',
    },
    cart: {
      title: 'Il Vostro Ordine in Camera',
      emptyMessage: 'Il vassoio è vuoto. Selezionate i vostri piatti preferiti dal menu.',
      roomNumber: 'Numero di Camera / Suite',
      guestName: 'Nome e Cognome Ospite',
      specialNotes: 'Istruzioni di consegna o allergie',
      specialNotesPlaceholder: 'es. Senza coriandolo, servire in terrazza alle 20:00...',
      subtotal: 'Subtotale',
      serviceFee: 'Servizio in camera & coperto d’argento (10%)',
      serviceFeeDesc: 'Include allestimento con campana d’argento e servizio al piano.',
      total: 'Totale Complessivo',
      confirmOrder: 'Conferma Ordine in Camera',
      processing: 'Invio alla cucina...',
      orderSuccessTitle: 'Ordine Confermato!',
      orderSuccessDesc: 'I nostri chef stanno preparando il vostro ordine. I piatti saranno consegnati direttamente alla vostra porta.',
      orderCode: 'Riferimento Ordine',
      estimatedDelivery: 'Tempo stimato: ~30-40 min',
      close: 'Chiudi',
    },
    spa: {
      title: 'Talassoterapia & Hammam Reale',
      subtitle: 'Le virtù terapeutiche dell’acqua marina di Mahdia, fanghi minerali e antichi rituali del bagno turco orientale.',
      searchPlaceholder: 'Cerca trattamenti, massaggi o cure...',
      allCategories: 'Tutti i trattamenti',
      thalasso: 'Bagni marini & Talasso',
      hammam: 'Hammam Tradizionale Orientale',
      massages: 'Massaggi d’Autore Palace',
      facials: 'Trattamenti Viso Marini',
      cures: 'Cure Benessere Più Giorni',
      duration: 'Durata',
      bookSession: 'Prenota al Telefono · Componi il 9',
      benefits: 'Benefici Terapeutici',
      phoneNoticeTitle: 'Appuntamenti e Trattamenti Esclusivamente al Telefono',
      phoneNoticeDesc: 'Non sono previsti appuntamenti online. Tutte le prenotazioni e informazioni si effettuano direttamente con la reception: si prega di comporre il 9 dal telefono della vostra suite.',
      dialNine: 'Reception: Componi il 9',
      bookingModalTitle: 'Prenota Trattamento Thalasso & Spa',
      roomNumber: 'Numero Camera',
      guestName: 'Nome Ospite',
      preferredDate: 'Data Desiderata',
      preferredTime: 'Fascia Oraria',
      guestsCount: 'Numero Persone',
      notes: 'Esigenze particolari o salute',
      confirmBooking: 'Invia Richiesta Prenotazione',
      bookingSuccessTitle: 'Richiesta Spa Inviata!',
      bookingSuccessDesc: 'Il nostro personale del centro Thalasso vi contatterà al telefono della stanza per confermare l’orario.',
      bookingCode: 'Codice Prenotazione',
      curativeProperties: 'Acqua marina pura prelevata al largo della costa di Mahdia.',
    },
    notices: {
      title: 'Bacheca Avvisi e Guida per gli Ospiti',
      subtitle: 'Informazioni essenziali, orari dei ristoranti, condizioni del mare e servizi per il vostro soggiorno.',
      allCategories: 'Tutte le comunicazioni',
      general: 'Vita del Palazzo & Serate',
      dining: 'Orari Ristoranti',
      wellness: 'Piscine & Thalasso',
      beach: 'Spiaggia & Mare',
      housekeeping: 'Pulizie & Biancheria',
      urgentNotice: 'Avviso Importante',
      pinnedNotice: 'In evidenza per tutti',
      forGuestsIn: 'Destinato a',
      conciergeDirect: 'Front Desk / Reception: Digitare 9 dal telefono in camera.',
      callConcierge: 'Il Front Desk è a vostra completa disposizione 24 ore su 24.',
    },
    cms: {
      badge: 'Gestione Alberghiera & Front Desk',
      title: 'Sistema CMS Mahdia Palace',
      subtitle: 'Gestite il menu in camera, i percorsi benessere, gli avvisi ai residenti e gli ordini in tempo reale.',
      tabs: {
        roomService: 'Piatti Room Service',
        spa: 'Trattamenti Spa',
        notices: 'Avvisi agli Ospiti',
        orders: 'Ordini in Camera',
        spaRequests: 'Richieste Spa',
      },
      addNewItem: '+ Aggiungi Piatto',
      addNewTreatment: '+ Aggiungi Trattamento',
      addNewNotice: '+ Pubblica Avviso',
      edit: 'Modifica',
      delete: 'Elimina',
      toggleStatus: 'Disponibilità',
      available: 'Disponibile',
      unavailable: 'Sospeso',
      urgent: 'Avviso Urgente',
      resetDefaults: 'Ripristina Dati Iniziali',
      resetSuccess: 'Dati del palazzo ripristinati con successo.',
      saveChanges: 'Salva',
      cancel: 'Annulla',
      liveOrdersTitle: 'Ordini in Camera Attivi',
      statusReceived: 'Ricevuto',
      statusPreparing: 'In Preparazione',
      statusDelivered: 'Consegnato in Camera',
      pendingBookings: 'In Attesa',
      confirmedBookings: 'Confermato',
    },
    palaceShowcase: {
      archTitle: 'Archi Moreschi & Decorazioni Arabesque',
      archDesc: 'Ceramiche zellige fatte a mano, archi moreschi monumentali e patii in marmo che celebrano la storia della dinastia fatimide.',
      thalassoTitle: 'Centro di Talassoterapia d’Eccellenza',
      thalassoDesc: 'Oltre 3.000 m² dedicati al benessere marino: piscine con acqua di mare riscaldata, idromassaggi e hammam regali.',
      diningTitle: 'Alta Gastronomia & Caffè Moresco',
      diningDesc: 'Dal ristorante Le Monastir all’incantevole Café Maure Layali con tè alla menta e pinoli sotto un cielo stellato.',
      beachTitle: 'Spiaggia Privata dalle Acque Turchesi',
      beachDesc: 'Sabbia fine dorata e mare cristallino con ombrelloni in paglia e lettini riservati agli ospiti del palazzo.',
      suitesTitle: 'Suite Raffinate con Vista Mare',
      suitesDesc: 'Terrazze private sul Mediterraneo, arredi in seta tunisina e dettagli in legno intagliato a mano.',
    },
    footer: {
      address: 'Zone Touristique Mahdia, B.P. 120, 5111 Mahdia, Tunisia',
      rights: 'Tutti i diritti riservati. Resort 5 Stelle di Lusso.',
      staffPortal: 'Accesso Amministrazione CMS',
      conciergeNumber: '+216 73 683 300 · frontdesk@mahdiapalace.com',
    },
  },

  de: {
    hotelName: 'Mahdia Palace',
    hotelSubtitle: 'Thalasso & Spa *****',
    tagline: 'Maurische Pracht und mediterraner Luxus in Mahdia, Tunesien.',
    nav: {
      palace: 'Der Palast',
      roomService: 'Zimmerservice',
      spa: 'Thalasso & Spa',
      notices: 'Gäste-Informationen',
      cms: 'Verwaltung CMS',
      cart: 'Bestelltablett',
    },
    hero: {
      badge: '5-Sterne-Resort mit weltklasse Thalassozentrum',
      title: 'Ein Refugium aus Arabesken-Pracht & Meeresruhe',
      subtitle: 'Willkommen in Ihrem königlichen Domizil in Mahdia. Zimmerservice-Spezialitäten, heilende Meerwasser-Therapien und tägliche Mitteilungen des Front Desk.',
      exploreDining: 'Zimmerservice-Menü',
      exploreSpa: 'Thalasso & Spa Rituale',
      viewNotices: 'Zimmer-Mitteilungen',
      roomServiceHours: 'Zimmerservice rund um die Uhr verfügbar',
      beachStatus: 'Privater feinsandiger Strand',
    },
    guestBar: {
      room: 'Zimmer',
      setRoom: 'Ändern',
      saveRoom: 'Speichern',
      weather: 'Sonne in Mahdia',
      seaTemp: 'Meerestemp.',
      beachFlag: 'Strandflagge',
      calmSea: 'Ruhige See · Grüne Flagge',
      guestStayPortal: 'Digitales Front Desk Portal',
    },
    dining: {
      title: 'Speisen im Zimmer & Gourmandise',
      subtitle: 'Traditionelle tunesische Aromen, frischer Fang aus der Bucht von Mahdia und internationale Klassiker mit Silberhaube serviert.',
      searchPlaceholder: 'Gerichte, Zutaten oder Diäten suchen...',
      allCategories: 'Alle Kategorien',
      breakfast: 'Palast-Frühstück',
      starters: 'Vorspeisen & Mezze',
      mains: 'Gourmet-Hauptgänge',
      desserts: 'Patisserie & Desserts',
      beverages: 'Frische Säfte & Mocktails',
      wines: 'Weinkarte & Aufgüsse',
      dietaryAll: 'Alle Kostformen',
      dietaryHalal: 'Halal zertifiziert',
      dietaryVegetarian: 'Vegetarisch',
      dietarySeafood: 'Frische Meeresfrüchte',
      dietaryTunisian: 'Tunesische Tradition',
      prepTime: 'Zubereitungszeit',
      addToCart: 'Aufs Tablett',
      addedToCart: 'Hinzugefügt',
      currencyToggle: 'Währung',
      unavailable: 'Zurzeit nicht verfügbar',
    },
    cart: {
      title: 'Ihre Zimmerservice-Bestellung',
      emptyMessage: 'Ihr Tablett ist leer. Entdecken Sie unsere erlesenen Speisen fürs Zimmer.',
      roomNumber: 'Zimmer- / Suite-Nummer',
      guestName: 'Vollständiger Name des Gastes',
      specialNotes: 'Besondere Wünsche und Lieferzeit',
      specialNotesPlaceholder: 'z.B.: Ohne Koriander, Servieren auf der Terrasse um 19:30 Uhr...',
      subtotal: 'Zwischensumme',
      serviceFee: 'Zimmeraufschlag & Service (10%)',
      serviceFeeDesc: 'Beinhaltet Silberhaubenservice und persönliche Suite-Zustellung.',
      total: 'Gesamtbetrag',
      confirmOrder: 'Bestellung im Zimmer aufgeben',
      processing: 'Wird an die Küche übermittelt...',
      orderSuccessTitle: 'Bestellung erfolgreich aufgegeben!',
      orderSuccessDesc: 'Unsere Küchenbrigade bereitet Ihre Speisen frisch zu. Ihr Tablett wird direkt in Ihr Zimmer geliefert.',
      orderCode: 'Bestellnummer',
      estimatedDelivery: 'Lieferzeit ca.: ~30-40 Min',
      close: 'Schließen',
    },
    spa: {
      title: 'Thalassotherapie & Königlicher Hammam',
      subtitle: 'Die belebende Kraft des reinen Mittelmeerwassers, mineralische Meeresalgen und Jahrhunderte alte maurische Baderituale.',
      searchPlaceholder: 'Anwendungen, Massagen oder Kuren suchen...',
      allCategories: 'Alle Anwendungen',
      thalasso: 'Meerwasserbäder & Thalasso',
      hammam: 'Orientalische Hammam-Rituale',
      massages: 'Palast-Signature-Massagen',
      facials: 'Marine Gesichtsbehandlungen',
      cures: 'Mehrtägige Wellness-Kuren',
      duration: 'Dauer',
      bookSession: 'Telefonisch Reservieren · Wählen Sie 9',
      benefits: 'Therapeutische Wirkung',
      phoneNoticeTitle: 'Termine und Behandlungen Ausschließlich per Telefon',
      phoneNoticeDesc: 'Es gibt keine Online-Terminvergabe. Alle Buchungen, Beratungen und Thalasso-Kuren erfolgen direkt über die Hotelrezeption: Bitte wählen Sie die 9 von Ihrem Zimmertelefon.',
      dialNine: 'Rezeption: Wählen Sie 9',
      bookingModalTitle: 'Thalasso- & Spa-Behandlung anfragen',
      roomNumber: 'Zimmernummer',
      guestName: 'Name des Gastes',
      preferredDate: 'Wunschdatum',
      preferredTime: 'Wunschuhrzeit',
      guestsCount: 'Personenanzahl',
      notes: 'Gesundheitshinweise oder Wünsche',
      confirmBooking: 'Terminanfrage absenden',
      bookingSuccessTitle: 'Terminanfrage eingegangen!',
      bookingSuccessDesc: 'Der Empfang unseres Thalassozentrums ruft Sie in Kürze auf dem Zimmertelefon an, um den Termin zu bestätigen.',
      bookingCode: 'Buchungscode',
      curativeProperties: 'Frisches, bioaktives Meerwasser aus den Tiefen der Bucht von Mahdia.',
    },
    notices: {
      title: 'Gäste-Informationen & Aushänge',
      subtitle: 'Wichtige Mitteilungen, Restaurant-Öffnungszeiten, Strandflaggen und Hotelservices für Ihren perfekten Aufenthalt.',
      allCategories: 'Alle Aushänge',
      general: 'Palastleben & Kultur',
      dining: 'Restaurant-Zeiten',
      wellness: 'Thalasso & Pools',
      beach: 'Privatstrand & Meer',
      housekeeping: 'Housekeeping & Wäscheservice',
      urgentNotice: 'Wichtige Mitteilung',
      pinnedNotice: 'Für alle Gäste angepinnt',
      forGuestsIn: 'Gültig für',
      conciergeDirect: 'Front Desk / Rezeption: Wählen Sie die 9 von Ihrem Zimmertelefon.',
      callConcierge: 'Unser 24-Stunden Front Desk steht Ihnen jederzeit zur Seite.',
    },
    cms: {
      badge: 'Hotelmanagement & Front Desk Portal',
      title: 'Integriertes Palast-CMS',
      subtitle: 'Verwalten Sie Zimmerservice-Karten, Thalasso-Angebote, Gästeaushänge und Bestellungen in Echtzeit.',
      tabs: {
        roomService: 'Zimmerservice-Gerichte',
        spa: 'Thalasso-Anwendungen',
        notices: 'Gäste-Aushänge',
        orders: 'Aktive Zimmerbestellungen',
        spaRequests: 'Spa-Buchungen',
      },
      addNewItem: '+ Gericht / Getränk hinzufügen',
      addNewTreatment: '+ Spa-Anwendung hinzufügen',
      addNewNotice: '+ Mitteilung veröffentlichen',
      edit: 'Bearbeiten',
      delete: 'Löschen',
      toggleStatus: 'Verfügbarkeit umschalten',
      available: 'Verfügbar',
      unavailable: 'Pausiert',
      urgent: 'Eilmeldung',
      resetDefaults: 'Auf Standarddaten zurücksetzen',
      resetSuccess: 'Standarddaten des Palastes wurden erfolgreich wiederhergestellt.',
      saveChanges: 'Speichern',
      cancel: 'Abbrechen',
      liveOrdersTitle: 'Eingehende Zimmerbestellungen',
      statusReceived: 'Eingegangen',
      statusPreparing: 'In Zubereitung',
      statusDelivered: 'Ins Zimmer geliefert',
      pendingBookings: 'Wartend',
      confirmedBookings: 'Bestätigt',
    },
    palaceShowcase: {
      archTitle: 'Arabesken-Bögen & Maurische Eleganz',
      archDesc: 'Handgefertigte Zellige-Kacheln, imposante Hufeisenbögen und Marmorhöfe, die an die fatimidische Geschichte Mahdias erinnern.',
      thalassoTitle: 'Renommiertes Thalassotherapie-Zentrum',
      thalassoDesc: 'Über 3.000 m² reine Erholung mit beheiztem Meerwasserparcours, Algenpackungen und traditionellen Dampfbädern.',
      diningTitle: 'Kulinarische Meisterwerke',
      diningDesc: 'Vom vornehmen Restaurant Le Monastir bis zum maurischen Café Layali mit feinem Pinientee unter dem Sternenhimmel.',
      beachTitle: 'Traumstrand mit feinstem Sand',
      beachDesc: 'Puderweißer Sandstrand und kristallklares türkisfarbenes Wasser mit reservierten Liegen für Hotelgäste.',
      suitesTitle: 'Königliche Suiten mit Meerblick',
      suitesDesc: 'Private Terrassen zum Mittelmeer, veredelt mit tunesischen Seidenstoffen und kunstvollen Holzschnitzereien.',
    },
    footer: {
      address: 'Zone Touristique Mahdia, B.P. 120, 5111 Mahdia, Tunesien',
      rights: 'Alle Rechte vorbehalten. 5-Sterne-Luxusresort.',
      staffPortal: 'Verwaltung / CMS Login',
      conciergeNumber: '+216 73 683 300 · frontdesk@mahdiapalace.com',
    },
  },
};
