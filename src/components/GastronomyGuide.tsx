import React, { useState } from 'react';
import { GASTRONOMY_ITEMS, SCAM_PREVENTION_GUIDE } from '../data/gastronomy';
import { GastronomyItem } from '../types';
import { Utensils, ShieldCheck, DollarSign, Award, AlertTriangle, ChevronRight, Info } from 'lucide-react';

export const GastronomyGuide: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GastronomyItem>(GASTRONOMY_ITEMS[0]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
          <span>Gastronomi & Fiyat Şeffaflığı</span>
          <span aria-hidden="true">·</span>
          <span>Kazıklanma Korkusuna Son</span>
        </div>
        <h2 className="mt-1 text-2xl lg:text-3xl font-serif-title font-bold text-stone-900">
          Diyarbakır Lezzetleri & Fiyat Şeffaflığı Rehberi
        </h2>
        <p className="mt-2 text-sm text-stone-600 max-w-3xl leading-relaxed">
          Ciğer kebabından kaburga dolmasına, burma kadayıftan Hasan Paşa Hanı peynirli kahvaltısına kadar neyin nerede yeneceğini ve ortalama porsiyon fiyatlarını öğrenin.
        </p>
      </div>

      {/* Scam Protection Alert Box */}
      <div className="bg-amber-900 text-stone-100 rounded-2xl p-5 lg:p-6 shadow-md border border-amber-950">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
          <ShieldCheck className="w-5 h-5 text-amber-400" />
          <span>DİYARBAKIR TURİST KORUMA & FİYAT ŞEFFAFLIK PROTOKOLÜ</span>
        </div>
        <p className="mt-2 text-xs text-stone-200 leading-relaxed max-w-2xl">
          Diyarbakır esnafı misafirperverliğiyle tanınır; ancak kötü niyetli uygulamalara karşı haklarınızı bilmeniz şehri çok daha huzurlu gezmenizi sağlar.
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {SCAM_PREVENTION_GUIDE.map((rule, idx) => (
            <div key={idx} className="bg-amber-950/70 rounded-xl p-3.5 border border-amber-800/60">
              <span className="text-[11px] font-bold text-amber-400 block mb-1">
                {rule.title}
              </span>
              <p className="text-[11px] text-stone-300 leading-snug">
                {rule.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Food Directory: Split Layout (Tabs + Detail Card) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left List of Dishes */}
        <div className="lg:col-span-5 space-y-2.5">
          <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wide mb-3">
            Geleneksel Tescilli Lezzetler
          </h3>
          {GASTRONOMY_ITEMS.map((dish) => {
            const isSelected = selectedItem.id === dish.id;
            return (
              <button
                key={dish.id}
                onClick={() => setSelectedItem(dish)}
                className={`w-full p-4 rounded-xl text-left border transition-all flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'bg-amber-800 text-white border-amber-900 shadow-sm'
                    : 'bg-white text-stone-900 border-stone-200 hover:border-amber-700/40 hover:bg-stone-50'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold leading-tight">{dish.name}</h4>
                    {dish.localName && (
                      <span className={`text-[11px] ${isSelected ? 'text-amber-200' : 'text-stone-500'}`}>
                        ({dish.localName})
                      </span>
                    )}
                  </div>
                  <span className={`text-xs font-semibold mt-1 block ${
                    isSelected ? 'text-amber-100' : 'text-amber-800'
                  }`}>
                    {dish.avgPrice}
                  </span>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-stone-400'}`} />
              </button>
            );
          })}
        </div>

        {/* Right Active Dish Detail & Famous Spots */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-5">
          <div>
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <h3 className="text-xl font-bold text-stone-900">{selectedItem.name}</h3>
              <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
                Ortalama: {selectedItem.avgPrice}
              </span>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
              {selectedItem.description}
            </p>
          </div>

          {/* Historical Story Box */}
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
            <span className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block mb-1">
              Tarihi Kültür ve Geleneği:
            </span>
            <p className="text-xs text-stone-600 leading-relaxed">
              {selectedItem.heritageStory}
            </p>
          </div>

          {/* Scam Tip for this Dish */}
          <div className="p-4 bg-red-50/70 rounded-xl border border-red-200/80 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-red-900 block">Sipariş & Fiyat Güvencesi İpucu:</span>
              <p className="text-xs text-red-800 leading-relaxed mt-0.5">
                {selectedItem.scamProtectionTip}
              </p>
            </div>
          </div>

          {/* Famous Recommended Spots */}
          <div>
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2.5">
              Diyarbakır’da En İyi Nerede Yenir? (Tavsiye Edilen Ocaklar & Ustalar)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedItem.famousSpots.map((spot, index) => (
                <div key={index} className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-bold text-stone-900">{spot.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-stone-200 text-stone-700 rounded font-medium">
                      {spot.zone}
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-500 mt-1">{spot.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
