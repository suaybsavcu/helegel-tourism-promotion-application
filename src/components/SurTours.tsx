import React, { useState } from 'react';
import { SUR_TOURS } from '../data/tours';
import { LOCATIONS } from '../data/places';
import { TourRoute, LocationItem } from '../types';
import { MapPin, Clock, Footprints, Sun, Volume2, VolumeX, CheckCircle, Navigation, Info } from 'lucide-react';

interface SurToursProps {
  onSelectTourOnMap: (tourId: string) => void;
  selectedTourId?: string | null;
}

export const SurTours: React.FC<SurToursProps> = ({ onSelectTourOnMap, selectedTourId }) => {
  const [activeTour, setActiveTour] = useState<TourRoute>(SUR_TOURS[0]);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [activeStoryItem, setActiveStoryItem] = useState<LocationItem | null>(null);

  const handlePlayStory = (item: LocationItem) => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
        setActiveStoryItem(null);
        return;
      }

      const text = `${item.name}. ${item.description}. Özellikleri: ${item.features.join(', ')}.`;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'tr-TR';
      utterance.rate = 0.95;

      utterance.onend = () => {
        setIsPlayingAudio(false);
        setActiveStoryItem(null);
      };

      utterance.onerror = () => {
        setIsPlayingAudio(false);
        setActiveStoryItem(null);
      };

      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
      setActiveStoryItem(item);
    } else {
      alert('Tarayıcınız sesli okumayı desteklemiyor.');
    }
  };

  const stopAudio = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      setActiveStoryItem(null);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
          <span>Sur İçi Kültürel Rotalar</span>
          <span aria-hidden="true">·</span>
          <span>Kaybolmadan Güvenli Gezi</span>
        </div>
        <h2 className="mt-1 text-2xl lg:text-3xl font-serif-title font-bold text-stone-900">
          Sur İçi Yürüyüş Rotaları & Sesli Hikaye Modu
        </h2>
        <p className="mt-2 text-sm text-stone-600 max-w-3xl leading-relaxed">
          Sur’un karmaşık ve dar bazalt taş sokaklarında kaybolma endişesi yaşamadan, adım adım planlanmış rotalarla kadim medeniyetlerin izini sürün.
        </p>
      </div>

      {/* Tour Selector Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {SUR_TOURS.map((tour) => {
          const isSelected = activeTour.id === tour.id;
          return (
            <button
              key={tour.id}
              onClick={() => {
                setActiveTour(tour);
                onSelectTourOnMap(tour.id);
                stopAudio();
              }}
              className={`p-5 rounded-2xl text-left border transition-all ${
                isSelected
                  ? 'bg-amber-900 text-white border-amber-950 shadow-md ring-2 ring-amber-700/50'
                  : 'bg-white text-stone-900 border-stone-200 hover:border-amber-700/40 hover:bg-stone-50'
              }`}
            >
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className={`font-semibold ${isSelected ? 'text-amber-200' : 'text-amber-800'}`}>
                  {tour.duration}
                </span>
                <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                  isSelected ? 'bg-amber-800 text-amber-100' : 'bg-stone-100 text-stone-700'
                }`}>
                  {tour.difficulty}
                </span>
              </div>
              <h3 className="mt-2 text-base font-bold leading-snug">{tour.title}</h3>
              <div className="mt-3 flex items-center gap-3 text-xs opacity-90">
                <span className="flex items-center gap-1">
                  <Footprints className="w-3.5 h-3.5" />
                  {tour.distance}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {tour.stopIds.length} Ana Durak
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Tour Detail Card */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
          <div>
            <h3 className="text-xl font-bold text-stone-900">{activeTour.title}</h3>
            <p className="mt-1 text-xs text-stone-500">
              Önerilen Zaman: <strong>{activeTour.bestTime}</strong>
            </p>
          </div>
          <button
            onClick={() => onSelectTourOnMap(activeTour.id)}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg shadow-xs transition-colors shrink-0"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Haritada Rotayı Çiz ve Odaklan</span>
          </button>
        </div>

        {/* Shade & Weather Advisory */}
        <div className="p-4 bg-amber-50/80 rounded-xl border border-amber-200/80 flex items-start gap-3">
          <Sun className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-bold text-amber-900">Öğle Sıcağı & Gölgeli Rota Tavsiyesi:</span>
            <p className="mt-0.5 text-amber-800 leading-relaxed">{activeTour.shadeWarning}</p>
          </div>
        </div>

        {/* Tour Stops List with Story Mode Audio */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide">
              Adım Adım Rota Durakları & 1 Dakikalık Hikaye Modu
            </h4>
            {isPlayingAudio && (
              <button
                onClick={stopAudio}
                className="flex items-center gap-1 text-xs font-medium text-red-600 hover:text-red-700"
              >
                <VolumeX className="w-4 h-4" />
                <span>Sesli Dinlemeyi Durdur</span>
              </button>
            )}
          </div>

          <div className="space-y-3">
            {activeTour.stopIds.map((stopId, index) => {
              const place = LOCATIONS.find((p) => p.id === stopId);
              if (!place) return null;
              const isCurrentlyPlaying = isPlayingAudio && activeStoryItem?.id === place.id;

              return (
                <div
                  key={place.id}
                  className={`p-4 rounded-xl border transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    isCurrentlyPlaying
                      ? 'bg-amber-50/90 border-amber-300 ring-1 ring-amber-400'
                      : 'bg-stone-50/70 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-stone-900 text-amber-400 text-xs font-bold flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h5 className="text-sm font-bold text-stone-900">{place.name}</h5>
                        <span className="text-[11px] text-stone-500">({place.subcategory})</span>
                      </div>
                      <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                        {place.description}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {place.features.map((f) => (
                          <span
                            key={f}
                            className="text-[10px] bg-white px-2 py-0.5 rounded border border-stone-200 text-stone-700"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <button
                      onClick={() => handlePlayStory(place)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                        isCurrentlyPlaying
                          ? 'bg-red-600 text-white hover:bg-red-700'
                          : 'bg-white border border-stone-200 text-stone-700 hover:text-stone-900 hover:bg-stone-100'
                      }`}
                    >
                      {isCurrentlyPlaying ? (
                        <>
                          <VolumeX className="w-3.5 h-3.5" />
                          <span>Durdur</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5 text-amber-700" />
                          <span>Hikayesini Dinle</span>
                        </>
                      )}
                    </button>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 bg-white border border-stone-200 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100"
                      title="Haritada Yol Tarifi"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
