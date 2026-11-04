import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { LocationItem, CategoryType } from '../types';
import { LOCATIONS } from '../data/places';
import { SUR_TOURS } from '../data/tours';
import { Compass, ExternalLink, MapPin, Navigation, Phone, Clock, Layers } from 'lucide-react';

interface InteractiveMapProps {
  selectedCategory: CategoryType;
  onSelectCategory: (cat: CategoryType) => void;
  selectedTourId?: string | null;
  onSelectLocation?: (item: LocationItem) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedTourId,
  onSelectLocation,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const routeLayerRef = useRef<L.Polyline | null>(null);
  const [activeItem, setActiveItem] = useState<LocationItem | null>(null);

  // Initialize Leaflet map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Diyarbakır center: 37.9144, 40.2306
      const map = L.map(mapContainerRef.current, {
        center: [37.9144, 40.2306],
        zoom: 13,
        zoomControl: false,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      L.control.zoom({ position: 'bottomright' }).addTo(map);

      const markersGroup = L.layerGroup().addTo(map);
      markersLayerRef.current = markersGroup;
      mapInstanceRef.current = map;
    }

    return () => {
      // cleanup handled if unmounted
    };
  }, []);

  // Filter locations and update markers
  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersGroup = markersLayerRef.current;
    if (!map || !markersGroup) return;

    markersGroup.clearLayers();

    const filtered = LOCATIONS.filter((loc) => {
      if (selectedCategory === 'all') return true;
      return loc.category === selectedCategory;
    });

    const getPinColor = (cat: string) => {
      switch (cat) {
        case 'historic':
          return '#b45309'; // amber
        case 'cafe':
          return '#b91c1c'; // crimson red
        case 'park':
          return '#047857'; // emerald green
        case 'health':
          return '#1d4ed8'; // blue
        default:
          return '#44403c';
      }
    };

    filtered.forEach((loc) => {
      const pinColor = getPinColor(loc.category);
      const customIcon = L.divIcon({
        className: 'custom-marker-icon',
        html: `
          <div style="background-color: ${pinColor}; width: 28px; height: 28px; border-radius: 9999px; border: 2.5px solid #ffffff; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.25); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: transform 0.15s ease;">
            <div style="width: 8px; height: 8px; background-color: #ffffff; border-radius: 9999px;"></div>
          </div>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });

      const marker = L.marker([loc.lat, loc.lng], { icon: customIcon });
      marker.on('click', () => {
        setActiveItem(loc);
        if (onSelectLocation) onSelectLocation(loc);
        map.panTo([loc.lat, loc.lng]);
      });

      markersGroup.addLayer(marker);
    });
  }, [selectedCategory, onSelectLocation]);

  // Handle tour route polyline rendering
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (routeLayerRef.current) {
      map.removeLayer(routeLayerRef.current);
      routeLayerRef.current = null;
    }

    if (selectedTourId) {
      const tour = SUR_TOURS.find((t) => t.id === selectedTourId);
      if (tour) {
        const tourCoords: [number, number][] = tour.stopIds
          .map((id) => {
            const place = LOCATIONS.find((p) => p.id === id);
            return place ? [place.lat, place.lng] as [number, number] : null;
          })
          .filter((coord): coord is [number, number] => coord !== null);

        if (tourCoords.length > 1) {
          const polyline = L.polyline(tourCoords, {
            color: '#b45309',
            weight: 4,
            opacity: 0.85,
            dashArray: '8, 8',
          }).addTo(map);

          routeLayerRef.current = polyline;
          map.fitBounds(polyline.getBounds(), { padding: [40, 40] });
        }
      }
    }
  }, [selectedTourId]);

  const setViewSur = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([37.9140, 40.2370], 15);
    }
  };

  const setView75 = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([37.9500, 40.1570], 14);
    }
  };

  const setViewAll = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([37.9250, 40.2000], 12);
    }
  };

  return (
    <div className="relative w-full h-[540px] lg:h-[620px] rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100 flex flex-col">
      {/* Top Map Control Bar */}
      <div className="absolute top-3 left-3 right-3 z-[1000] flex flex-wrap items-center justify-between gap-2 pointer-events-none">
        {/* Category Filters */}
        <div className="flex items-center gap-1.5 p-1 bg-white/90 backdrop-blur-md rounded-xl border border-stone-200 shadow-sm pointer-events-auto overflow-x-auto max-w-full">
          <button
            onClick={() => onSelectCategory('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            Tüm Noktalar ({LOCATIONS.length})
          </button>
          <button
            onClick={() => onSelectCategory('historic')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === 'historic'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            Sur & Tarihi
          </button>
          <button
            onClick={() => onSelectCategory('cafe')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === 'cafe'
                ? 'bg-red-700 text-white shadow-xs'
                : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            40+ Kafe
          </button>
          <button
            onClick={() => onSelectCategory('park')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === 'park'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            15+ Park
          </button>
          <button
            onClick={() => onSelectCategory('health')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === 'health'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            Sağlık & Acil
          </button>
        </div>

        {/* Quick Zoom View Anchors */}
        <div className="hidden sm:flex items-center gap-1 p-1 bg-white/90 backdrop-blur-md rounded-xl border border-stone-200 shadow-sm pointer-events-auto">
          <button
            onClick={setViewSur}
            className="px-2.5 py-1 text-xs font-medium text-stone-700 hover:bg-stone-100 rounded-md"
            title="Sur İçi Odak"
          >
            Sur İçi
          </button>
          <button
            onClick={setView75}
            className="px-2.5 py-1 text-xs font-medium text-stone-700 hover:bg-stone-100 rounded-md"
            title="Cadde 75 Odak"
          >
            Cadde 75
          </button>
          <button
            onClick={setViewAll}
            className="px-2.5 py-1 text-xs font-medium text-stone-700 hover:bg-stone-100 rounded-md"
            title="Tüm Şehir"
          >
            Şehir Geneli
          </button>
        </div>
      </div>

      {/* Map Surface */}
      <div ref={mapContainerRef} className="w-full h-full z-0" />

      {/* Active Location Detail Sheet (Bottom Float) */}
      {activeItem && (
        <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-[1000] bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-stone-200 shadow-xl transition-all">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-stone-500 mb-1">
                <span className="capitalize">{activeItem.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeItem.zone}</span>
                {activeItem.subcategory && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-stone-600">{activeItem.subcategory}</span>
                  </>
                )}
              </div>
              <h4 className="text-base font-bold text-stone-900 leading-tight">
                {activeItem.name}
              </h4>
            </div>
            <button
              onClick={() => setActiveItem(null)}
              className="p-1 text-stone-400 hover:text-stone-700 rounded-md"
            >
              ✕
            </button>
          </div>

          <p className="mt-2 text-xs text-stone-600 line-clamp-2">
            {activeItem.description}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-600">
            {activeItem.hours && (
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                <span>{activeItem.hours}</span>
              </div>
            )}
            {activeItem.phone && (
              <div className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-stone-400" />
                <a href={`tel:${activeItem.phone}`} className="hover:text-blue-700 font-medium">
                  {activeItem.phone}
                </a>
              </div>
            )}
            {activeItem.priceLevel && (
              <span className="font-semibold text-stone-700">Fiyat: {activeItem.priceLevel}</span>
            )}
          </div>

          <div className="mt-3.5 pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
            <span className="text-[11px] text-stone-500 truncate max-w-[220px]">
              {activeItem.address}
            </span>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${activeItem.lat},${activeItem.lng}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg shadow-xs transition-colors shrink-0"
            >
              <span>Navigasyon</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}

      {/* Offline Caching Notice */}
      <div className="absolute bottom-2 left-2 z-[990] bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-stone-200 text-[10px] text-stone-500">
        Önbellek: 72+ Diyarbakır Noktası Çevrimdışı Hazır
      </div>
    </div>
  );
};
