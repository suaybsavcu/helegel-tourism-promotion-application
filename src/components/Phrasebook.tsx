import React, { useState } from 'react';
import { PHRASES } from '../data/phrases';
import { PhraseItem } from '../types';
import { Languages, Volume2, VolumeX, Sparkles } from 'lucide-react';

export const Phrasebook: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [playingId, setPlayingId] = useState<string | null>(null);

  const categories = ['all', 'Selamlaşma', 'Yön & Ulaşım', 'Pazarlık & Alışveriş', 'Acil Durum'];

  const filtered = PHRASES.filter((p) => {
    if (selectedCat === 'all') return true;
    return p.category === selectedCat;
  });

  const speakPhrase = (phrase: PhraseItem) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setPlayingId(phrase.id);

      const utterance = new SpeechSynthesisUtterance(phrase.kurdish);
      // Try Kurdish or fallback to Turkish phonetic
      utterance.rate = 0.85;
      utterance.onend = () => setPlayingId(null);
      utterance.onerror = () => setPlayingId(null);

      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
          <span>Kültürel İletişim Rehberi</span>
          <span aria-hidden="true">·</span>
          <span>Kürtçe / Türkçe / İngilizce Dil Kartları</span>
        </div>
        <h2 className="mt-1 text-2xl lg:text-3xl font-serif-title font-bold text-stone-900">
          Temel Selamlaşma ve Pratik Diyalog Kartları
        </h2>
        <p className="mt-2 text-sm text-stone-600 max-w-3xl leading-relaxed">
          Sur esnafıyla sohbet ederken, takside veya pazarda kullanabileceğiniz samimi selamlaşma, teşekkür ve yol sorma ifadeleri.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              selectedCat === cat
                ? 'bg-amber-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            {cat === 'all' ? 'Tüm Kartlar' : cat}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((phrase) => {
          const isPlaying = playingId === phrase.id;
          return (
            <div
              key={phrase.id}
              className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
                isPlaying
                  ? 'bg-amber-50 border-amber-300 ring-1 ring-amber-400'
                  : 'bg-white border-stone-200 shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-stone-400 mb-1.5">
                  <span className="font-medium text-amber-800">{phrase.category}</span>
                  <span className="text-[11px]">{phrase.english}</span>
                </div>

                <div className="text-base font-bold text-stone-900">
                  {phrase.turkish}
                </div>

                <div className="mt-2 text-lg font-serif-title font-bold text-amber-900">
                  "{phrase.kurdish}"
                </div>

                <div className="text-xs text-stone-500 italic mt-0.5">
                  Okunuş: {phrase.phonetic}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] text-stone-400">Telaffuz dinle</span>
                <button
                  onClick={() => speakPhrase(phrase)}
                  className="p-1.5 rounded-lg bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 transition-colors"
                  title="Sesli Oku"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
