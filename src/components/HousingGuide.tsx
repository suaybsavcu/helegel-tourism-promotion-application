import React from 'react';
import { NEIGHBORHOOD_GUIDES, HOUSING_TIPS } from '../data/housing';
import { Home, ExternalLink, ShieldCheck, CheckCircle2, AlertCircle, Building2 } from 'lucide-react';

export const HousingGuide: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
          <span>Konut & Yerleşim Rehberi</span>
          <span aria-hidden="true">·</span>
          <span>Sahibinden Diyarbakır Kiralık Ev Portalı</span>
        </div>
        <h2 className="mt-1 text-2xl lg:text-3xl font-serif-title font-bold text-stone-900">
          Diyarbakır Kiralık Daire ve Semt Rehberi
        </h2>
        <p className="mt-2 text-sm text-stone-600 max-w-3xl leading-relaxed">
          Yeni taşınan memurlar, akademisyenler, öğrenciler ve aileler için semtlerin güvenlik durumu, ortalama kira rayiçleri ve doğrudan <strong>Sahibinden.com</strong> güncel kiralık ilan bağlantıları.
        </p>
      </div>

      {/* Sahibinden Direct Quick Link Hero */}
      <div className="bg-gradient-to-r from-amber-800 via-stone-900 to-stone-950 text-white rounded-2xl p-6 shadow-md border border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>GÜNCEL İLANLARA TEK TIKLA ULAŞIN</span>
          </div>
          <h3 className="text-xl font-bold mt-1">Sahibinden.com Diyarbakır Kiralık Daireler</h3>
          <p className="mt-1 text-xs text-stone-300 max-w-xl">
            Aradığınız semt ve bütçeye göre filtrelenmiş güncel kiralık ev ilanlarını Sahibinden üzerinden doğrudan görüntüleyin.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <a
            href="https://www.sahibinden.com/kiralik-daire/diyarbakir"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
          >
            <span>Tüm Diyarbakır İlanları</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.sahibinden.com/kiralik-daire/diyarbakir-kayapinar"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-white font-bold text-xs rounded-xl border border-stone-700 transition-colors flex items-center gap-1.5"
          >
            <span>Kayapınar (75 & Diclekent)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Neighborhood Analysis Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {NEIGHBORHOOD_GUIDES.map((guide) => (
          <div
            key={guide.district}
            className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:border-amber-700/50 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <h4 className="text-lg font-bold text-stone-900">{guide.district}</h4>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Güvenlik: {guide.safetyScore} / 10</span>
                </div>
              </div>

              {/* Price Table Strip */}
              <div className="mt-4 p-3 bg-stone-50 rounded-xl border border-stone-200 grid grid-cols-3 gap-2 text-center">
                <div>
                  <span className="text-[10px] text-stone-500 block uppercase font-medium">1+1 Kira</span>
                  <span className="text-xs font-bold text-stone-900 mt-0.5 block">{guide.avgRent1Plus1}</span>
                </div>
                <div className="border-x border-stone-200">
                  <span className="text-[10px] text-stone-500 block uppercase font-medium">2+1 Kira</span>
                  <span className="text-xs font-bold text-stone-900 mt-0.5 block">{guide.avgRent2Plus1}</span>
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 block uppercase font-medium">3+1 Kira</span>
                  <span className="text-xs font-bold text-stone-900 mt-0.5 block">{guide.avgRent3Plus1}</span>
                </div>
              </div>

              {/* Advantages */}
              <div className="mt-4">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide block mb-1.5">
                  Öne Çıkan Artıları:
                </span>
                <ul className="space-y-1">
                  {guide.advantages.map((adv, i) => (
                    <li key={i} className="text-xs text-stone-600 flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold shrink-0">✓</span>
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Disadvantages */}
              <div className="mt-3">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wide block mb-1.5">
                  Dikkat Edilmesi Gerekenler:
                </span>
                <ul className="space-y-1">
                  {guide.disadvantages.map((dis, i) => (
                    <li key={i} className="text-xs text-stone-600 flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold shrink-0">•</span>
                      <span>{dis}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Transit Access */}
              <div className="mt-3.5 pt-3 border-t border-stone-100 text-xs text-stone-500">
                <strong>Ulaşım Kolaylığı:</strong> {guide.transitAccess}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-stone-100">
              <a
                href={guide.sahibindenSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 bg-stone-900 hover:bg-amber-800 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <span>{guide.district.split(' ')[0]} Sahibinden Kiralık Evlerini Gör</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Renter Tips */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200">
        <h4 className="text-base font-bold text-stone-900 mb-3">
          Diyarbakır’da Ev Kiralarken Bilmeniz Gereken Önemli İpuçları
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {HOUSING_TIPS.map((tip, idx) => (
            <div key={idx} className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <span className="text-xs font-bold text-stone-900 block mb-1">{tip.title}</span>
              <p className="text-xs text-stone-600 leading-relaxed">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
