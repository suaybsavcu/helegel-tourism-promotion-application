import React, { useState } from 'react';
import { LOCATIONS } from '../data/places';
import { LocationItem } from '../types';
import { Coffee, Search, MapPin, Clock, Star, ExternalLink, Sparkles, Filter } from 'lucide-react';

interface CafeDirectoryProps {
  onFocusLocationOnMap?: (loc: LocationItem) => void;
}

export const CafeDirectory: React.FC<CafeDirectoryProps> = ({ onFocusLocationOnMap }) => {
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFeature, setSelectedFeature] = useState<string>('all');

  const allCafes = LOCATIONS.filter((l) => l.category === 'cafe');

  const zones = [
    { id: 'all', label: `Tüm Kafeler (${allCafes.length})` },
    { id: 'Cadde 75', label: 'Cadde 75 (Lüks Bulvar)' },
    { id: 'Diclekent', label: 'Diclekent Villaları' },
    { id: '50lik Yol & Winstown', label: '50’lik Yol & Winstown' },
    { id: 'Ofis', label: 'Ofis & Sanat Sokağı' },
    { id: 'Sur', label: 'Sur & Dağkapı Tarihi Kahveleri' },
  ];

  const filteredCafes = allCafes.filter((cafe) => {
    // Zone filter
    if (selectedZone !== 'all') {
      if (selectedZone === 'Sur') {
        if (cafe.zone !== 'Sur' && cafe.zone !== 'Dağkapı') return false;
      } else if (cafe.zone !== selectedZone) {
        return false;
      }
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = cafe.name.toLowerCase().includes(q);
      const matchDesc = cafe.description.toLowerCase().includes(q);
      const matchFeat = cafe.features.some((f) => f.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchFeat) return false;
    }

    // Feature filter
    if (selectedFeature !== 'all') {
      if (!cafe.features.some((f) => f.toLowerCase().includes(selectedFeature.toLowerCase()))) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-800">
          <span>Diyarbakır Kafe & Sosyal Mekan Kültürü</span>
          <span aria-hidden="true">·</span>
          <span>40+ Seçkin Mekan Kataloğu</span>
        </div>
        <h2 className="mt-1 text-2xl lg:text-3xl font-serif-title font-bold text-stone-900">
          Cadde 75, Diclekent Villaları, Winstown ve Tarihi Han Kahveleri
        </h2>
        <p className="mt-2 text-sm text-stone-600 max-w-3xl leading-relaxed">
          Nevvada, Arabica, Coffy, Kahve Dünyası, Big Mama’s gibi ünlü bulvar kafelerinden; Diclekent villa bahçelerine, Winstown açık avlusuna ve Sur’un tarihi Sülüklü Han menengiç kahvecilerine kadar eksiksiz rehber.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white rounded-2xl p-4 lg:p-5 border border-stone-200 shadow-xs space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Kafe adı, kahve türü (V60, Menengiç), kruvasan veya özellik ara..."
            className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-10 pr-4 py-2.5 text-xs font-medium text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-700/50"
          />
        </div>

        {/* Zone Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {zones.map((zone) => (
            <button
              key={zone.id}
              onClick={() => setSelectedZone(zone.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedZone === zone.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {zone.label}
            </button>
          ))}
        </div>

        {/* Feature Quick Chips */}
        <div className="flex items-center gap-2 text-xs text-stone-500 pt-2 border-t border-stone-100 overflow-x-auto">
          <span className="font-semibold text-stone-700 shrink-0">Hızlı Filtre:</span>
          <button
            onClick={() => setSelectedFeature('all')}
            className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors whitespace-nowrap ${
              selectedFeature === 'all' ? 'bg-amber-100 text-amber-900 font-bold' : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            Tümü
          </button>
          <button
            onClick={() => setSelectedFeature('3. Nesil')}
            className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors whitespace-nowrap ${
              selectedFeature === '3. Nesil' ? 'bg-amber-100 text-amber-900 font-bold' : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            3. Nesil / Specialty
          </button>
          <button
            onClick={() => setSelectedFeature('Teras')}
            className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors whitespace-nowrap ${
              selectedFeature === 'Teras' ? 'bg-amber-100 text-amber-900 font-bold' : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            Açık Teras & Bahçe
          </button>
          <button
            onClick={() => setSelectedFeature('Çalışma')}
            className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors whitespace-nowrap ${
              selectedFeature === 'Çalışma' ? 'bg-amber-100 text-amber-900 font-bold' : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            Laptop & Çalışma Dostu
          </button>
          <button
            onClick={() => setSelectedFeature('Menengiç')}
            className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors whitespace-nowrap ${
              selectedFeature === 'Menengiç' ? 'bg-amber-100 text-amber-900 font-bold' : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            Geleneksel Menengiç / Dibek
          </button>
        </div>
      </div>

      {/* Cafes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCafes.map((cafe) => (
          <div
            key={cafe.id}
            className="bg-white rounded-2xl p-5 border border-stone-200 shadow-xs hover:border-amber-700/50 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[11px] font-semibold text-amber-800 uppercase tracking-wide">
                    {cafe.zone}
                  </span>
                  <h4 className="text-base font-bold text-stone-900 leading-snug mt-0.5">
                    {cafe.name}
                  </h4>
                </div>
                {cafe.rating && (
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-amber-50 text-amber-800 text-xs font-bold shrink-0">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <span>{cafe.rating}</span>
                  </div>
                )}
              </div>

              <p className="mt-2.5 text-xs text-stone-600 leading-relaxed line-clamp-3">
                {cafe.description}
              </p>

              {/* Features Tag Strip */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {cafe.features.map((feat) => (
                  <span
                    key={feat}
                    className="text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-medium"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <div className="flex items-center gap-1.5">
                {cafe.hours && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span className="text-[11px]">{cafe.hours}</span>
                  </div>
                )}
                {cafe.priceLevel && (
                  <span className="font-bold text-stone-700 ml-1">{cafe.priceLevel}</span>
                )}
              </div>

              <div className="flex items-center gap-1.5">
                {onFocusLocationOnMap && (
                  <button
                    onClick={() => onFocusLocationOnMap(cafe)}
                    className="p-1.5 text-stone-600 hover:text-amber-800 hover:bg-stone-100 rounded-md"
                    title="Haritada Göster"
                  >
                    <MapPin className="w-4 h-4" />
                  </button>
                )}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafe.name + ' Diyarbakır')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 text-stone-600 hover:text-amber-800 hover:bg-stone-100 rounded-md"
                  title="Google Haritalar"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCafes.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-stone-200 p-8">
          <Coffee className="w-10 h-10 text-stone-300 mx-auto mb-2" />
          <h4 className="text-sm font-bold text-stone-800">Aramanıza uygun kafe bulunamadı</h4>
          <p className="text-xs text-stone-500 mt-1">Lütfen filtreleri sıfırlamayı veya farklı bir anahtar kelime denemeyi seçin.</p>
          <button
            onClick={() => {
              setSelectedZone('all');
              setSearchQuery('');
              setSelectedFeature('all');
            }}
            className="mt-3 px-3.5 py-1.5 text-xs font-semibold bg-stone-900 text-white rounded-lg"
          >
            Filtreleri Temizle
          </button>
        </div>
      )}
    </div>
  );
};
