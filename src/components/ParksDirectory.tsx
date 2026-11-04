import React, { useState } from 'react';
import { LOCATIONS } from '../data/places';
import { LocationItem } from '../types';
import { Trees, Search, MapPin, Activity, Compass, ExternalLink } from 'lucide-react';

interface ParksDirectoryProps {
  onFocusLocationOnMap?: (loc: LocationItem) => void;
}

export const ParksDirectory: React.FC<ParksDirectoryProps> = ({ onFocusLocationOnMap }) => {
  const [districtFilter, setDistrictFilter] = useState<string>('all');
  const [featureSearch, setFeatureSearch] = useState<string>('');

  const allParks = LOCATIONS.filter((l) => l.category === 'park');

  const filteredParks = allParks.filter((park) => {
    if (districtFilter !== 'all' && park.zone !== districtFilter) {
      return false;
    }
    if (featureSearch.trim()) {
      const q = featureSearch.toLowerCase();
      const matchName = park.name.toLowerCase().includes(q);
      const matchDesc = park.description.toLowerCase().includes(q);
      const matchFeat = park.features.some((f) => f.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchFeat) return false;
    }
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800">
          <span>Diyarbakır Yeşil Alan & Spor Rehberi</span>
          <span aria-hidden="true">·</span>
          <span>15+ Büyük Şehir Parkı & Millet Bahçeleri</span>
        </div>
        <h2 className="mt-1 text-2xl lg:text-3xl font-serif-title font-bold text-stone-900">
          Parklar, Koşu Parkurları ve Dinlenme Alanları
        </h2>
        <p className="mt-2 text-sm text-stone-600 max-w-3xl leading-relaxed">
          Tarihi Surların eteğindeki Millet Bahçesi ve UNESCO tescilli Hevsel Vadisi’nden; Kayapınar Tema Park, Park 75, Kent Ormanı ve Bağlar Göletli Park’a kadar spor, yürüyüş ve doğa durakları.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 lg:p-5 border border-stone-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* District Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto no-scrollbar">
          <button
            onClick={() => setDistrictFilter('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              districtFilter === 'all'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Tüm Parklar ({allParks.length})
          </button>
          <button
            onClick={() => setDistrictFilter('Kayapınar')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              districtFilter === 'Kayapınar'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Kayapınar & 75
          </button>
          <button
            onClick={() => setDistrictFilter('Sur')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              districtFilter === 'Sur'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Sur & Dicle Vadisi
          </button>
          <button
            onClick={() => setDistrictFilter('Yenişehir')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              districtFilter === 'Yenişehir'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Yenişehir (Ofis)
          </button>
          <button
            onClick={() => setDistrictFilter('Bağlar')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              districtFilter === 'Bağlar'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Bağlar & Göletli Park
          </button>
        </div>

        {/* Feature search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={featureSearch}
            onChange={(e) => setFeatureSearch(e.target.value)}
            placeholder="Koşu parkuru, gölet, çocuk alanı..."
            className="w-full bg-stone-50 border border-stone-200 rounded-lg pl-8 pr-3 py-1.5 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-700/50"
          />
        </div>
      </div>

      {/* Parks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredParks.map((park) => (
          <div
            key={park.id}
            className="bg-white rounded-2xl p-5 border border-stone-200 shadow-xs hover:border-emerald-700/50 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wide">
                  {park.zone}
                </span>
                {park.hours && (
                  <span className="text-[11px] text-stone-500 font-medium">{park.hours}</span>
                )}
              </div>

              <h4 className="text-base font-bold text-stone-900 mt-1 leading-snug">
                {park.name}
              </h4>

              <p className="mt-2 text-xs text-stone-600 leading-relaxed line-clamp-3">
                {park.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {park.features.map((feat) => (
                  <span
                    key={feat}
                    className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-900 font-medium border border-emerald-100"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span className="text-[11px] truncate max-w-[200px]">{park.address}</span>

              <div className="flex items-center gap-1.5 shrink-0">
                {onFocusLocationOnMap && (
                  <button
                    onClick={() => onFocusLocationOnMap(park)}
                    className="p-1.5 text-stone-600 hover:text-emerald-800 hover:bg-stone-100 rounded-md"
                    title="Haritada Odaklan"
                  >
                    <MapPin className="w-4 h-4" />
                  </button>
                )}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(park.name + ' Diyarbakır')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 text-stone-600 hover:text-emerald-800 hover:bg-stone-100 rounded-md"
                  title="Yol Tarifi Al"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
