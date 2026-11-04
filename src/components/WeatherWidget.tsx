import React from 'react';
import { Sun, CloudSun, Wind, Droplets, Compass } from 'lucide-react';

export const WeatherWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left: Weather Stat */}
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 rounded-xl bg-amber-100 text-amber-900 shrink-0">
            <Sun className="w-6 h-6 text-amber-700" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold text-stone-900 tabular-nums">26°C</span>
              <span className="text-xs font-semibold text-stone-700">Açık & Güneşli</span>
              <span className="text-xs text-stone-400">·</span>
              <span className="text-xs text-stone-500">Diyarbakır</span>
            </div>
            <div className="mt-0.5 flex items-center gap-3 text-[11px] text-stone-500">
              <span className="flex items-center gap-1">
                <Wind className="w-3 h-3 text-stone-400" /> Hafif Esinti (11 km/s)
              </span>
              <span className="flex items-center gap-1">
                <Droplets className="w-3 h-3 text-stone-400" /> Nem %32
              </span>
            </div>
          </div>
        </div>

        {/* Right: Shade Recommendation Alert */}
        <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl px-3.5 py-2 sm:max-w-md">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
            <Compass className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span>Günün Rota Önerisi:</span>
          </div>
          <p className="text-[11px] text-amber-800 leading-snug mt-0.5">
            Öğle saatlerinde Hasan Paşa Hanı veya Sülüklü Han’ın taş avlusunda mola verin; saat 16:30 sonrası Keçi Burcu ve On Gözlü Köprü nehir esintisine geçin.
          </p>
        </div>
      </div>
    </div>
  );
};
