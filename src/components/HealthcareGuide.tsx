import React, { useState } from 'react';
import { LOCATIONS } from '../data/places';
import { HeartPulse, Phone, MapPin, ExternalLink, ShieldAlert, Clock, Ambulance } from 'lucide-react';

export const HealthcareGuide: React.FC = () => {
  const [sectorFilter, setSectorFilter] = useState<'all' | 'devlet' | 'ozel'>('all');

  const hospitals = LOCATIONS.filter((l) => l.category === 'health');

  const filteredHospitals = hospitals.filter((h) => {
    if (sectorFilter === 'all') return true;
    if (sectorFilter === 'ozel') return h.name.startsWith('Özel');
    if (sectorFilter === 'devlet') return !h.name.startsWith('Özel');
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-800">
          <span>Sağlık Hizmetleri & Acil Durum Rehberi</span>
          <span aria-hidden="true">·</span>
          <span>7/24 Kesintisiz Sağlık Desteği</span>
        </div>
        <h2 className="mt-1 text-2xl lg:text-3xl font-serif-title font-bold text-stone-900">
          Diyarbakır Özel & Devlet Hastaneleri ve Acil Merkezler
        </h2>
        <p className="mt-2 text-sm text-stone-600 max-w-3xl leading-relaxed">
          Dicle Üniversitesi Tıp Fakültesi ve Gazi Yaşargil EAH gibi bölge araştırma hastanelerinin yanı sıra Memorial, Bower, Dünya ve Genesis gibi donanımlı özel hastanelerin iletişim ve ulaşım bilgileri.
        </p>
      </div>

      {/* Emergency Quick Calling Strip */}
      <div className="bg-red-700 text-white rounded-2xl p-5 lg:p-6 shadow-md border border-red-800">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-200">
              <Ambulance className="w-4 h-4" />
              <span>ACİL ÇAĞRI MERKEZLERİ</span>
            </div>
            <h3 className="mt-1 text-xl font-bold">Tek Numara Acil Çağrı: 112</h3>
            <p className="mt-1 text-xs text-red-100 max-w-xl">
              Sağlık (Ambulans), Polis, İtfaiye ve Jandarma tek çatı altında 112 numarasında birleştirilmiştir.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <a
              href="tel:112"
              className="px-4 py-2.5 bg-white text-red-700 hover:bg-red-50 text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4" />
              <span>112 Acil Ambulans Ara</span>
            </a>
            <a
              href="https://www.diyarbakireczaciodasi.org.tr/nobetci-eczaneler"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-red-900/80 hover:bg-red-900 text-white text-xs font-bold rounded-xl border border-red-500/50 transition-colors flex items-center gap-1.5"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Nöbetçi Eczaneler Sorgula</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sector Filter Tabs */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setSectorFilter('all')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
            sectorFilter === 'all'
              ? 'bg-blue-800 text-white shadow-xs'
              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}
        >
          Tüm Sağlık Kurumları ({hospitals.length})
        </button>
        <button
          onClick={() => setSectorFilter('ozel')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
            sectorFilter === 'ozel'
              ? 'bg-blue-800 text-white shadow-xs'
              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}
        >
          Özel Hastaneler (Memorial, Bower, vb.)
        </button>
        <button
          onClick={() => setSectorFilter('devlet')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
            sectorFilter === 'devlet'
              ? 'bg-blue-800 text-white shadow-xs'
              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}
        >
          Üniversite & Devlet Hastaneleri
        </button>
      </div>

      {/* Hospitals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredHospitals.map((hospital) => (
          <div
            key={hospital.id}
            className="bg-white rounded-2xl p-5 border border-stone-200 shadow-xs hover:border-blue-700/50 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-semibold text-blue-800 uppercase tracking-wide">
                  {hospital.zone} · {hospital.subcategory}
                </span>
                {hospital.hours && (
                  <span className="text-[11px] text-stone-500 font-medium">{hospital.hours}</span>
                )}
              </div>

              <h4 className="text-base font-bold text-stone-900 mt-1.5 leading-snug">
                {hospital.name}
              </h4>

              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                {hospital.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {hospital.features.map((feat) => (
                  <span
                    key={feat}
                    className="text-[10px] px-2 py-0.5 rounded bg-blue-50 text-blue-900 font-medium border border-blue-100"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="text-[11px] text-stone-500 truncate max-w-xs">
                {hospital.address}
              </span>

              <div className="flex items-center gap-2 shrink-0">
                {hospital.phone && (
                  <a
                    href={`tel:${hospital.phone.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-1 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-700" />
                    <span>Ara</span>
                  </a>
                )}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospital.name + ' Diyarbakır')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-semibold transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Yol Tarifi</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
