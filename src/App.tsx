import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { InteractiveMap } from './components/InteractiveMap';
import { TransitGuide } from './components/TransitGuide';
import { SurTours } from './components/SurTours';
import { CafeDirectory } from './components/CafeDirectory';
import { ParksDirectory } from './components/ParksDirectory';
import { GastronomyGuide } from './components/GastronomyGuide';
import { HealthcareGuide } from './components/HealthcareGuide';
import { HousingGuide } from './components/HousingGuide';
import { Phrasebook } from './components/Phrasebook';
import { WeatherWidget } from './components/WeatherWidget';
import { AndroidStudioModal } from './components/AndroidStudioModal';
import { CategoryType, LocationItem } from './types';
import { LOCATIONS } from './data/places';
import {
  Compass,
  Bus,
  MapPin,
  Coffee,
  Trees,
  Utensils,
  HeartPulse,
  Home,
  Languages,
  PhoneCall,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [mapCategory, setMapCategory] = useState<CategoryType>('all');
  const [selectedTourId, setSelectedTourId] = useState<string | null>('ekspres-sur');
  const [isAndroidModalOpen, setIsAndroidModalOpen] = useState<boolean>(false);

  const handleSelectTourOnMap = (tourId: string) => {
    setSelectedTourId(tourId);
    setMapCategory('historic');
    // Scroll smoothly to map section if in general portal
    const mapElement = document.getElementById('helegel-map-section');
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFocusLocationOnMap = (loc: LocationItem) => {
    setMapCategory(loc.category);
    const mapElement = document.getElementById('helegel-map-section');
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
      {/* Top Bar Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAndroidGuide={() => setIsAndroidModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">
        {/* Weather & Sun/Shade Guidance Strip (Always Visible) */}
        <WeatherWidget />

        {/* Tab 1: Comprehensive City Portal (The "Hepsi" Hub View) */}
        {activeTab === 'all' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="relative rounded-3xl overflow-hidden bg-stone-900 text-stone-100 p-6 sm:p-10 lg:p-12 border border-stone-800 shadow-xl">
              <div className="max-w-3xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
                  <span>Kadim Medeniyetlerin Kalbi</span>
                  <span aria-hidden="true">·</span>
                  <span>Diyarbakır Şehir Portalı</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-white tracking-tight leading-tight">
                  Helegel! Diyarbakır’a Hoş Geldiniz.
                </h1>

                <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-2xl">
                  Havalimanından (Z2, Z3) ve otogardan (C11, AY, A1) Sur içine ulaşım; kaybolmadan gezdiren 3 hazır yürüyüş rotası, Cadde 75’in 40+ seçkin kafesi, 15+ büyük parkı, yerel lezzetleri ve kiralık ev rehberi tek bir ekranda.
                </p>

                {/* Quick Action Badges */}
                <div className="pt-2 flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={() => setActiveTab('transit')}
                    className="px-4 py-2 text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-xl transition-colors flex items-center gap-1.5"
                  >
                    <Bus className="w-4 h-4" />
                    <span>Havalimanı & Otogar Hatları</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('tours')}
                    className="px-4 py-2 text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl border border-stone-700 transition-colors flex items-center gap-1.5"
                  >
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>Sur İçi Yürüyüş Turları</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('cafes')}
                    className="px-4 py-2 text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl border border-stone-700 transition-colors flex items-center gap-1.5"
                  >
                    <Coffee className="w-4 h-4 text-red-400" />
                    <span>40+ Kafe & Cadde 75</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('food')}
                    className="px-4 py-2 text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl border border-stone-700 transition-colors flex items-center gap-1.5"
                  >
                    <Utensils className="w-4 h-4 text-amber-400" />
                    <span>Ne Yenir & Fiyatlar</span>
                  </button>
                </div>
              </div>

              {/* Statistics Strip */}
              <div className="mt-8 pt-6 border-t border-stone-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-xl font-extrabold text-amber-400 tabular-nums">8.000+ Yıl</span>
                  <span className="block text-stone-400 mt-0.5">Kesintisiz Yaşam & Kültür</span>
                </div>
                <div>
                  <span className="text-xl font-extrabold text-white tabular-nums">40+ Kafe</span>
                  <span className="block text-stone-400 mt-0.5">Cadde 75, Diclekent & Sur</span>
                </div>
                <div>
                  <span className="text-xl font-extrabold text-white tabular-nums">15+ Park</span>
                  <span className="block text-stone-400 mt-0.5">Millet Bahçesi & Tematik Alanlar</span>
                </div>
                <div>
                  <span className="text-xl font-extrabold text-amber-400 tabular-nums">%100</span>
                  <span className="block text-stone-400 mt-0.5">Çevrimdışı & Güvenilir Veri</span>
                </div>
              </div>
            </div>

            {/* Interactive Map Section (Leaflet OSM) */}
            <section id="helegel-map-section" className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                    İnteraktif Şehir Haritası & Canlı Konumlar
                  </span>
                  <h2 className="text-2xl font-serif-title font-bold text-stone-900">
                    Diyarbakır’ı Harita Üzerinde Keşfedin
                  </h2>
                </div>
                <div className="text-xs text-stone-500">
                  İşaretçilere tıklayarak mekan ayrıntılarını ve navigasyon yol tarifini açın.
                </div>
              </div>

              <InteractiveMap
                selectedCategory={mapCategory}
                onSelectCategory={setMapCategory}
                selectedTourId={selectedTourId}
              />
            </section>

            {/* Quick Sur İçi Walking Tours Feature */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                    Tarihi Merkez
                  </span>
                  <h3 className="text-xl font-bold text-stone-900">
                    Öne Çıkan Sur İçi Yürüyüş Rotaları
                  </h3>
                </div>
                <button
                  onClick={() => setActiveTab('tours')}
                  className="text-xs font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1"
                >
                  <span>Tüm Turları ve Hikayeleri Gör</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <SurTours
                onSelectTourOnMap={handleSelectTourOnMap}
                selectedTourId={selectedTourId}
              />
            </section>

            {/* Quick Transit Snippet */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                    Ulaşım Kolaylığı
                  </span>
                  <h3 className="text-xl font-bold text-stone-900">
                    Havalimanı & Otogar Otobüs Hatları
                  </h3>
                </div>
                <button
                  onClick={() => setActiveTab('transit')}
                  className="text-xs font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1"
                >
                  <span>Tüm Hatları ve Durakları İncele</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <TransitGuide />
            </section>

            {/* 40+ Cafes Showcase */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-red-800">
                    Sosyal Yaşam & Kahve
                  </span>
                  <h3 className="text-xl font-bold text-stone-900">
                    Cadde 75, Diclekent ve Tarihi Han Kahveleri (40+ Kafe)
                  </h3>
                </div>
                <button
                  onClick={() => setActiveTab('cafes')}
                  className="text-xs font-semibold text-red-800 hover:text-red-900 flex items-center gap-1"
                >
                  <span>Filtrele ve Hepsini Gör</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <CafeDirectory onFocusLocationOnMap={handleFocusLocationOnMap} />
            </section>

            {/* 15+ Parks & Green Zones */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                    Doğa ve Dinlenme
                  </span>
                  <h3 className="text-xl font-bold text-stone-900">
                    Büyük Şehir Parkları & Millet Bahçeleri (15+ Park)
                  </h3>
                </div>
                <button
                  onClick={() => setActiveTab('parks')}
                  className="text-xs font-semibold text-emerald-800 hover:text-emerald-900 flex items-center gap-1"
                >
                  <span>Tüm Parkları Gör</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <ParksDirectory onFocusLocationOnMap={handleFocusLocationOnMap} />
            </section>

            {/* Gastronomy & Pricing Transparency */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                    Lezzet Rehberi
                  </span>
                  <h3 className="text-xl font-bold text-stone-900">
                    Diyarbakır Mutfağı & Ortalama Fiyat Tablosu
                  </h3>
                </div>
                <button
                  onClick={() => setActiveTab('food')}
                  className="text-xs font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1"
                >
                  <span>Tüm Lezzetleri Aç</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <GastronomyGuide />
            </section>

            {/* Healthcare & Emergency Banner */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-800">
                    Sağlık & Eczaneler
                  </span>
                  <h3 className="text-xl font-bold text-stone-900">
                    Özel Memorial, Bower, Üniversite & Devlet Hastaneleri
                  </h3>
                </div>
                <button
                  onClick={() => setActiveTab('health')}
                  className="text-xs font-semibold text-blue-800 hover:text-blue-900 flex items-center gap-1"
                >
                  <span>Sağlık Merkezlerini Gör</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <HealthcareGuide />
            </section>

            {/* Housing & Sahibinden Integration */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                    Kiralık Konut
                  </span>
                  <h3 className="text-xl font-bold text-stone-900">
                    Sahibinden Diyarbakır Kiralık Ev Arama & Semt Rehberi
                  </h3>
                </div>
                <button
                  onClick={() => setActiveTab('housing')}
                  className="text-xs font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1"
                >
                  <span>Semt Karşılaştırmalarını Aç</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <HousingGuide />
            </section>

            {/* Language Phrase Cards */}
            <section className="space-y-4">
              <Phrasebook />
            </section>
          </div>
        )}

        {/* Tab 2: Transit Guide Detailed View */}
        {activeTab === 'transit' && <TransitGuide />}

        {/* Tab 3: Sur Tours Detailed View */}
        {activeTab === 'tours' && (
          <div className="space-y-6">
            <InteractiveMap
              selectedCategory="historic"
              onSelectCategory={setMapCategory}
              selectedTourId={selectedTourId}
            />
            <SurTours
              onSelectTourOnMap={handleSelectTourOnMap}
              selectedTourId={selectedTourId}
            />
          </div>
        )}

        {/* Tab 4: 40+ Cafes Directory */}
        {activeTab === 'cafes' && (
          <CafeDirectory onFocusLocationOnMap={handleFocusLocationOnMap} />
        )}

        {/* Tab 5: 15+ Parks Directory */}
        {activeTab === 'parks' && (
          <ParksDirectory onFocusLocationOnMap={handleFocusLocationOnMap} />
        )}

        {/* Tab 6: Gastronomy & Price Transparency */}
        {activeTab === 'food' && <GastronomyGuide />}

        {/* Tab 7: Healthcare & Hospitals */}
        {activeTab === 'health' && <HealthcareGuide />}

        {/* Tab 8: Housing & Sahibinden Links */}
        {activeTab === 'housing' && <HousingGuide />}
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-stone-900 text-stone-300 border-t border-stone-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <span className="font-serif-title text-2xl font-bold text-white tracking-tight">
                HELEGEL
              </span>
              <p className="text-xs text-stone-400 leading-relaxed">
                Diyarbakır’a ilk kez gelen turistler, memurlar, öğrenciler ve misafirler için hazırlanmış bağımsız, güvenilir şehir portalı ve rehberi.
              </p>
              <div className="text-[11px] text-amber-400 font-medium">
                PWA Uyumlu · Mobil ve Masaüstü Destekli
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Hızlı Erişim
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => setActiveTab('transit')} className="hover:text-amber-400 transition-colors">
                    Havalimanı (Z2, Z3) & Otogar (C11, AY, A1)
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('tours')} className="hover:text-amber-400 transition-colors">
                    Sur İçi 2 Saatlik & Yarım Günlük Rotalar
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('cafes')} className="hover:text-amber-400 transition-colors">
                    Cadde 75 & Winstown 40+ Kafe
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('parks')} className="hover:text-amber-400 transition-colors">
                    15+ Millet Bahçesi & Parklar
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Kritik Şehir Hatları
              </h4>
              <ul className="space-y-2 text-xs text-stone-400">
                <li><strong className="text-white">Acil Çağrı (Ambulans/Polis):</strong> 112</li>
                <li><strong className="text-white">Diyarbakır Zabıta:</strong> 153</li>
                <li><strong className="text-white">Alo Turizm & Yabancılar:</strong> 157</li>
                <li><strong className="text-white">Diyarbakır Havalimanı:</strong> 0 (412) 248 83 83</li>
                <li><strong className="text-white">DİŞTİ Şehirlerarası Otogar:</strong> 0 (412) 237 01 01</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Mobil & Android Studio
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed mb-3">
                Helegel’i telefonunuza yükleyebilir veya Capacitor ile Android Studio ve Xcode (Swift) üzerinde native APK/IPA olarak derleyebilirsiniz.
              </p>
              <button
                onClick={() => setIsAndroidModalOpen(true)}
                className="px-3.5 py-2 bg-stone-800 hover:bg-stone-700 text-amber-400 text-xs font-bold rounded-lg border border-stone-700 transition-colors"
              >
                Kurulum Kılavuzunu Aç
              </button>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-2">
            <span>© 2026 Helegel — Diyarbakır Şehir Portalı. Tüm hakları saklıdır.</span>
            <span>Açık Kaynak OpenStreetMap & Leaflet Entegrasyonu</span>
          </div>
        </div>
      </footer>

      {/* Android Studio & PWA Guide Modal */}
      <AndroidStudioModal
        isOpen={isAndroidModalOpen}
        onClose={() => setIsAndroidModalOpen(false)}
      />
    </div>
  );
}
