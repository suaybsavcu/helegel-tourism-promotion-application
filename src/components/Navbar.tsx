import React from 'react';
import { Smartphone, Compass, Bus, MapPin, Coffee, Trees, Utensils, HeartPulse, Home } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenAndroidGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenAndroidGuide }) => {
  const navItems = [
    { id: 'all', label: 'Şehir Portalı', icon: Compass },
    { id: 'transit', label: 'Ulaşım & Otobüs', icon: Bus },
    { id: 'tours', label: 'Sur İçi Turları', icon: MapPin },
    { id: 'cafes', label: '40+ Kafe', icon: Coffee },
    { id: 'parks', label: '15+ Park', icon: Trees },
    { id: 'food', label: 'Lezzet & Fiyatlar', icon: Utensils },
    { id: 'health', label: 'Sağlık & Acil', icon: HeartPulse },
    { id: 'housing', label: 'Kiralık Ev', icon: Home },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Brand title, one line wordmark */}
          <button
            onClick={() => setActiveTab('all')}
            className="text-left font-serif-title text-2xl font-bold tracking-tight text-stone-900 hover:text-amber-700 transition-colors whitespace-nowrap shrink-0"
          >
            HELEGEL
          </button>

          {/* Zone 2: Navigation Links, single line controls */}
          <nav className="hidden lg:flex items-center gap-6 overflow-x-auto py-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors pb-0.5 border-b-2 ${
                    isActive
                      ? 'text-amber-800 border-amber-800'
                      : 'text-stone-600 border-transparent hover:text-stone-900 hover:border-stone-300'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAndroidGuide}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-amber-800 rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobil & Android Rehberi</span>
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Tab Scroll for Touch viewports */}
        <div className="lg:hidden flex items-center gap-2 overflow-x-auto py-2.5 no-scrollbar border-t border-stone-100">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'bg-amber-800 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
