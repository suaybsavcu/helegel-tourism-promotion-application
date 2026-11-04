import React, { useState } from 'react';
import { BUS_ROUTES, TRANSIT_HUBS } from '../data/transits';
import { Bus, Plane, MapPin, ArrowRight, CheckCircle2, AlertCircle, CreditCard, Clock } from 'lucide-react';

export const TransitGuide: React.FC = () => {
  const [selectedOrigin, setSelectedOrigin] = useState<string>('Havalimanı');
  const [selectedDestination, setSelectedDestination] = useState<string>('Dağkapı (Sur İçi)');
  const [filterType, setFilterType] = useState<'all' | 'havalimani' | 'belediye' | 'dolmus'>('all');

  const filteredRoutes = BUS_ROUTES.filter((route) => {
    if (filterType === 'all') return true;
    return route.type === filterType;
  });

  // Calculate direct suggestions based on origin and destination
  const getSuggestedRoutes = () => {
    if (selectedOrigin === 'Havalimanı') {
      if (selectedDestination === 'Dağkapı (Sur İçi)') {
        return BUS_ROUTES.filter((r) => r.code === 'Z2' || r.code === 'Z3');
      }
      if (selectedDestination === 'Cadde 75 & Diclekent') {
        return BUS_ROUTES.filter((r) => r.code === 'Z2' || r.code === 'Z3');
      }
    }
    if (selectedOrigin === 'Otogar') {
      if (selectedDestination === 'Dağkapı (Sur İçi)') {
        return BUS_ROUTES.filter((r) => r.code === 'C11' || r.code === 'A1' || r.code === 'DOLMUŞ');
      }
      if (selectedDestination === 'Cadde 75 & Diclekent') {
        return BUS_ROUTES.filter((r) => r.code === 'AY');
      }
    }
    return BUS_ROUTES.slice(0, 3);
  };

  const suggestions = getSuggestedRoutes();

  return (
    <div className="space-y-8">
      {/* Title & Concept Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
          <span>Şehir İçi Ulaşım & Hat Rehberi</span>
          <span aria-hidden="true">·</span>
          <span>Havalimanı & Otogar Bağlantıları</span>
        </div>
        <h2 className="mt-1 text-2xl lg:text-3xl font-serif-title font-bold text-stone-900">
          Diyarbakır Otobüs, Dolmuş ve Ulaşım Rehberi
        </h2>
        <p className="mt-2 text-sm text-stone-600 max-w-3xl leading-relaxed">
          Havalimanından Sur içine giden <strong>Z2 ve Z3</strong> ekspres hatları, Şehirlerarası Otogar’dan kalkan <strong>C11, AY, A1</strong> belediye otobüsleri ve Dağkapı dolmuşları ile şehri kolayca keşfedin.
        </p>
      </div>

      {/* Smart Route Finder Widget */}
      <div className="bg-stone-900 text-stone-100 rounded-2xl p-5 lg:p-6 shadow-md border border-stone-800">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-amber-400">
          <MapPin className="w-4 h-4" />
          <span>AKILLI HAT BULUCU: NEREDEYİM → NEREYE GİTMEK İSTİYORUM?</span>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
          <div className="lg:col-span-2">
            <label className="block text-xs font-medium text-stone-400 mb-1.5">
              Bulunduğunuz Yer (Başlangıç)
            </label>
            <select
              value={selectedOrigin}
              onChange={(e) => setSelectedOrigin(e.target.value)}
              className="w-full bg-stone-800 border border-stone-700 text-white rounded-lg px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="Havalimanı">Diyarbakır Havalimanı (DIY)</option>
              <option value="Otogar">Şehirlerarası Otogar (DİŞTİ)</option>
              <option value="Dağkapı">Dağkapı Meydanı (Sur İçi)</option>
              <option value="Diclekent">Diclekent / Cadde 75</option>
            </select>
          </div>

          <div className="hidden lg:flex items-center justify-center pb-2.5 text-stone-500">
            <ArrowRight className="w-5 h-5 text-amber-400" />
          </div>

          <div className="lg:col-span-2">
            <label className="block text-xs font-medium text-stone-400 mb-1.5">
              Gitmek İstediğiniz Bölge (Hedef)
            </label>
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="w-full bg-stone-800 border border-stone-700 text-white rounded-lg px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="Dağkapı (Sur İçi)">Sur İçi & Tarihi Hanlar (Dağkapı Meydanı)</option>
              <option value="Cadde 75 & Diclekent">Cadde 75 & Lüks Kafeler (Kayapınar)</option>
              <option value="Ofis Sanat Sokağı">Ofis & İstasyon Caddesi (Yenişehir)</option>
              <option value="Dicle Üniversitesi">Dicle Üniversitesi Kampüsü</option>
            </select>
          </div>
        </div>

        {/* Suggestion Result Banner */}
        <div className="mt-5 pt-4 border-t border-stone-800">
          <div className="text-xs text-stone-400 mb-2">
            <strong>{selectedOrigin}</strong> noktasından <strong>{selectedDestination}</strong> hedefine en uygun hatlar:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {suggestions.map((s) => (
              <div
                key={s.code}
                className="bg-stone-800/90 rounded-xl p-3.5 border border-stone-700 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-amber-500 text-stone-950">
                      Hat {s.code}
                    </span>
                    <span className="text-[11px] text-stone-400">{s.frequency}</span>
                  </div>
                  <h4 className="mt-2 text-xs font-bold text-white line-clamp-1">{s.title}</h4>
                  <p className="mt-1 text-[11px] text-stone-300 line-clamp-2">{s.tips}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment & Practical Rules Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 border border-stone-200 flex items-start gap-3">
          <div className="p-2 bg-amber-50 text-amber-800 rounded-lg shrink-0">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-stone-900">Temassız Kart Geçerli</h4>
            <p className="mt-1 text-xs text-stone-600">
              Belediye otobüslerinde Diyarkart zorunlu değildir. Temassız Visa/Mastercard kredi veya banka kartınızla tek biniş yapabilirsiniz.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-stone-200 flex items-start gap-3">
          <div className="p-2 bg-emerald-50 text-emerald-800 rounded-lg shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-stone-900">Uçak & Otobüs Sefer Saatleri</h4>
            <p className="mt-1 text-xs text-stone-600">
              Havalimanı Z2 ve Z3 hatları uçakların iniş saatlerine göre kalkar. Gece uçaklarında terminal çıkışında otobüs hazır bekler.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-stone-200 flex items-start gap-3">
          <div className="p-2 bg-blue-50 text-blue-800 rounded-lg shrink-0">
            <Bus className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-stone-900">Dağkapı Dolmuşları (Minibüs)</h4>
            <p className="mt-1 text-xs text-stone-600">
              Otogardan Sur yönüne doldukça kalkan mavi/sarı dolmuşlarda nakit ücret geçerlidir. Ortalama 15-20 dakikada varır.
            </p>
          </div>
        </div>
      </div>

      {/* Transit Hubs Detail Cards */}
      <div>
        <h3 className="text-lg font-bold text-stone-900 mb-3">Ana Ulaşım Merkezleri (Hub)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TRANSIT_HUBS.map((hub) => (
            <div key={hub.name} className="bg-white rounded-xl p-4 border border-stone-200 shadow-xs">
              <span className="text-[11px] font-semibold text-amber-800 uppercase tracking-wide">
                {hub.zone}
              </span>
              <h4 className="mt-1 text-sm font-bold text-stone-900">{hub.name}</h4>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {hub.directBuses.map((b) => (
                  <span
                    key={b}
                    className="px-2 py-0.5 text-xs font-semibold bg-stone-100 text-stone-800 rounded-md"
                  >
                    {b}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs text-stone-600">{hub.tip}</p>
              <div className="mt-2 text-[11px] text-stone-500 font-medium">
                {hub.taxiAvailability}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Routes Directory with Segment Filter */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <h3 className="text-lg font-bold text-stone-900">Tüm Şehir İçi Hat Listesi</h3>
          <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                filterType === 'all' ? 'bg-white text-stone-900 shadow-xs font-semibold' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Tümü
            </button>
            <button
              onClick={() => setFilterType('havalimani')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                filterType === 'havalimani' ? 'bg-white text-stone-900 shadow-xs font-semibold' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Havalimanı (Z2, Z3)
            </button>
            <button
              onClick={() => setFilterType('belediye')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                filterType === 'belediye' ? 'bg-white text-stone-900 shadow-xs font-semibold' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Otogar & Belediye
            </button>
            <button
              onClick={() => setFilterType('dolmus')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                filterType === 'dolmus' ? 'bg-white text-stone-900 shadow-xs font-semibold' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Dolmuşlar
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRoutes.map((route) => (
            <div
              key={route.code}
              className="bg-white rounded-xl p-5 border border-stone-200 shadow-xs hover:border-amber-700/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 text-xs font-extrabold rounded-lg bg-stone-900 text-amber-400">
                    {route.code}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 leading-snug">{route.title}</h4>
                    <span className="text-[11px] text-stone-500">{route.operatingHours}</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-xs text-stone-600">
                <strong>Sefer Aralığı:</strong> {route.frequency}
              </div>

              <div className="mt-3">
                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                  Önemli Duraklar:
                </span>
                <div className="mt-1 flex flex-wrap items-center gap-1.5 text-xs text-stone-700">
                  {route.stops.map((stop, i) => (
                    <React.Fragment key={stop}>
                      <span className="bg-stone-50 px-2 py-0.5 rounded border border-stone-200">
                        {stop}
                      </span>
                      {i < route.stops.length - 1 && <span className="text-stone-300">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="mt-3.5 pt-3 border-t border-stone-100 text-xs text-amber-900 bg-amber-50/60 p-2.5 rounded-lg">
                <strong>İpucu:</strong> {route.tips}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
