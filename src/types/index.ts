export type CategoryType = 'all' | 'historic' | 'cafe' | 'park' | 'health' | 'food';

export interface LocationItem {
  id: string;
  name: string;
  category: 'historic' | 'cafe' | 'park' | 'health' | 'food';
  subcategory?: string;
  zone: 'Sur' | 'Cadde 75' | 'Diclekent' | '50lik Yol & Winstown' | 'Ofis' | 'Dağkapı' | 'Bağlar' | 'Kayapınar' | 'Yenişehir';
  lat: number;
  lng: number;
  description: string;
  address: string;
  features: string[];
  hours?: string;
  phone?: string;
  priceLevel?: '₺' | '₺₺' | '₺₺₺';
  popularFor?: string;
  rating?: number;
}

export interface BusRoute {
  code: string;
  title: string;
  from: string;
  to: string;
  frequency: string;
  operatingHours: string;
  color: string;
  type: 'belediye' | 'havalimani' | 'dolmus';
  stops: string[];
  tips: string;
}

export interface TourRoute {
  id: string;
  title: string;
  duration: string;
  distance: string;
  difficulty: 'Kolay' | 'Orta' | 'Yürüyüş Tempolu';
  description: string;
  highlights: string[];
  stopIds: string[];
  bestTime: string;
  shadeWarning: string;
}

export interface GastronomyItem {
  id: string;
  name: string;
  localName?: string;
  description: string;
  avgPrice: string;
  famousSpots: { name: string; zone: string; note: string }[];
  scamProtectionTip: string;
  heritageStory: string;
}

export interface PhraseItem {
  id: string;
  turkish: string;
  kurdish: string;
  english: string;
  phonetic: string;
  category: 'Selamlaşma' | 'Yön & Ulaşım' | 'Pazarlık & Alışveriş' | 'Acil Durum';
}

export interface NeighborhoodGuide {
  district: string;
  safetyScore: number;
  avgRent1Plus1: string;
  avgRent2Plus1: string;
  avgRent3Plus1: string;
  advantages: string[];
  disadvantages: string[];
  transitAccess: string;
  sahibindenSearchUrl: string;
}
