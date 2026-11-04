import React, { useState } from 'react';
import { Smartphone, X, Copy, Check, Terminal, ExternalLink, Code2 } from 'lucide-react';

interface AndroidStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AndroidStudioModal: React.FC<AndroidStudioModalProps> = ({ isOpen, onClose }) => {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-stone-200 relative my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
          <Smartphone className="w-4 h-4" />
          <span>Mobil Cihaza Kurulum & Geliştirici Kılavuzu</span>
        </div>

        <h3 className="mt-1 text-xl font-bold text-stone-900">
          Helegel’i Android & iOS’ta Çalıştırma Rehberi
        </h3>

        <div className="mt-5 space-y-6">
          {/* Method 1: Instant PWA Installation */}
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
            <span className="text-xs font-bold text-amber-950 uppercase tracking-wide block mb-1">
              1. YÖNTEM (EN KOLAY): TELEFONA DİREKT UYGULAMA OLARAK YÜKLE
            </span>
            <p className="text-xs text-amber-900 leading-relaxed mb-3">
              Herhangi bir kod yazmadan veya mağaza beklemeden saniyeler içinde telefonunuza native uygulama gibi kurabilirsiniz:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-amber-950">
              <div className="bg-white p-3 rounded-lg border border-amber-200/80">
                <span className="font-bold text-stone-900 block mb-1">🤖 Android (Chrome):</span>
                <span>Tarayıcıda sağ üstteki <strong>üç noktaya (⋮)</strong> dokunun ve <strong>"Ana ekrana ekle"</strong> veya <strong>"Uygulamayı yükle"</strong>yi seçin.</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-amber-200/80">
                <span className="font-bold text-stone-900 block mb-1">🍎 iOS (Safari):</span>
                <span>Safari'nin alt barındaki <strong>"Paylaş" (Share)</strong> simgesine dokunun ve <strong>"Ana Ekrana Ekle"</strong> deyin.</span>
              </div>
            </div>
          </div>

          {/* Method 2: Android Studio Capacitor Guide */}
          <div>
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-stone-700" />
              <span className="text-xs font-bold text-stone-900 uppercase tracking-wide">
                2. YÖNTEM: ANDROID STUDIO & XCODE (SWIFT) İLE APK DERLEME
              </span>
            </div>
            <p className="mt-1 text-xs text-stone-600 leading-relaxed">
              Bu web projesini Capacitor kullanarak saniyeler içinde resmi <strong>Android Studio (Java/Kotlin)</strong> ve <strong>iOS Xcode (Swift)</strong> projesine dönüştürebilirsiniz:
            </p>

            <div className="mt-3 space-y-2.5">
              {/* Step 1 */}
              <div className="p-3 bg-stone-900 text-stone-100 rounded-xl text-xs font-mono flex items-center justify-between gap-3">
                <div className="overflow-x-auto">
                  <span className="text-stone-400"># 1. Capacitor Kütüphanelerini Kurun</span>
                  <div className="text-amber-400">npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios</div>
                </div>
                <button
                  onClick={() => copyToClipboard('npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios', 1)}
                  className="p-1.5 hover:bg-stone-800 rounded-md shrink-0 text-stone-300"
                  title="Kopyala"
                >
                  {copiedStep === 1 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Step 2 */}
              <div className="p-3 bg-stone-900 text-stone-100 rounded-xl text-xs font-mono flex items-center justify-between gap-3">
                <div className="overflow-x-auto">
                  <span className="text-stone-400"># 2. Android ve iOS Platformlarını Ekleyin</span>
                  <div className="text-amber-400">npx cap init Helegel com.helegel.app --web-dir dist</div>
                  <div className="text-amber-400">npx cap add android && npx cap add ios</div>
                </div>
                <button
                  onClick={() => copyToClipboard('npx cap init Helegel com.helegel.app --web-dir dist && npx cap add android && npx cap add ios', 2)}
                  className="p-1.5 hover:bg-stone-800 rounded-md shrink-0 text-stone-300"
                  title="Kopyala"
                >
                  {copiedStep === 2 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Step 3 */}
              <div className="p-3 bg-stone-900 text-stone-100 rounded-xl text-xs font-mono flex items-center justify-between gap-3">
                <div className="overflow-x-auto">
                  <span className="text-stone-400"># 3. Derleyin ve Android Studio’yu Doğrudan Açın</span>
                  <div className="text-amber-400">npm run build && npx cap sync</div>
                  <div className="text-emerald-400 font-bold">npx cap open android</div>
                </div>
                <button
                  onClick={() => copyToClipboard('npm run build && npx cap sync && npx cap open android', 3)}
                  className="p-1.5 hover:bg-stone-800 rounded-md shrink-0 text-stone-300"
                  title="Kopyala"
                >
                  {copiedStep === 3 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <p className="mt-2 text-[11px] text-stone-500">
              <code>npx cap open android</code> komutunu çalıştırdığınızda bilgisayarınızdaki Android Studio otomatik olarak açılır. Üstteki yeşil <strong>Run (▶)</strong> düğmesine basarak emülatörde veya telefonunuzda APK olarak çalıştırabilirsiniz.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Anladım, Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
