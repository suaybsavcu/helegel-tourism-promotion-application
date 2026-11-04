# Helegel — Diyarbakır Şehir Portalı, Ulaşım ve Kültürel Keşif Rehberi

Diyarbakır'a ilk defa ayak basan yerli ve yabancı ziyaretçiler, öğrenciler ve yeni taşınanlar için tasarlanmış kapsamlı, güvenilir ve modern şehir rehberi. Havalimanı ve otogar otobüs hatlarından Sur İçi yürüyüş rotalarına, interaktif haritadan 40+ seçkin kafeye, 15+ geniş parka, acil sağlık merkezlerine ve yerel gastronomi fiyat şeffaflığına kadar eksiksiz bir rehberlik deneyimi sunar.

---

## Kullanıcı İncelemesi ve Kritik Kararlar (User Review & Critical Decisions)

> [!IMPORTANT]
> Kullanıcı tercih sorularında teyit edilen kararlar doğrultusunda sistem mimarisi ve görsel dil şekillendirilmiştir:

- **Harita Deneyimi (Teyit Edildi)**: Açık kaynaklı ve güvenilir Leaflet / OpenStreetMap motoruyla çalışan entegre interaktif harita. Sur İçi yürüyüş rotaları (2 saatlik, yarım gün, tam gün), tarihi anıtlar, kafe bölgeleri, parklar ve hastaneler renkli/özel simgelerle harita üzerinde etkileşimli olarak işaretlenecek; çevrimdışı önbellek desteğiyle internet kesildiğinde dahi rota bilgileri kaybolmayacaktır.
- **Tasarım Stili ve Platform Uyumu (Teyit Edildi)**: Hem masaüstü hem de mobil ekranlara tam uyum sağlayan geniş ekran odaklı şehir portalı ve rehber arayüzü. PWA (Progressive Web App) standartlarında çalışarak kullanıcıların telefonlarına (Android ve iOS Safari) tek tıkla uygulama gibi yüklenmesine olanak tanıyacaktır. Android Studio veya native mobil export isteyen geliştiriciler için Capacitor / Web standartları uyumlu modüler yapı sağlanacaktır.
- **Karşılama Ekranı (Teyit Edildi: 'Hepsi')**: Kullanıcı şehre adım attığında tek bir ekrana sıkışmadan; üst kısımda Hızlı Karşılama ve Ulaşım Barı (Havalimanı & Otogar hatları), devamında Sur İçi İnteraktif Keşif Turları, hemen altında 40+ Kafe, 15+ Park, Sağlık & Acil Durum ve Kiralık Ev Portalı sekmelerine anında erişebileceği dinamik bir şehir ana portalı sunulacaktır.

---

## 1. Genel Bakış ve Temel Konsept (Overview & Core Concept)

### Ne Yapar? (What It Does)
**Helegel**, Diyarbakır'a gelen birinin aklındaki tüm soruları ("Havalimanından merkeze nasıl giderim?", "Sur'da kaybolmadan nasıl gezerim?", "75 Caddesi'nde en iyi kahve nerede?", "Ciğer porsiyonu ne kadar, kazıklanır mıyım?", "Acil durumda hangi hastaneye gitmeliyim?", "Nereden kiralık ev tutulur?") tek bir akıcı portaldan çözen rehber platformdur.

### Hedef Kitle (Target Audience)
- Şehre ilk kez uçakla veya otobüsle gelen yerli/yabancı turistler.
- Dicle Üniversitesi'ne veya yeni bir göreve/işe başlayan memur ve öğrenciler.
- Diyarbakır'ın kültürel mirasını güvenle gezmek isteyen aileler ve gezginler.
- Cadde 75, Diclekent ve Sur'daki yerel esnaf ile popüler mekanları keşfetmek isteyenler.

### Sağlanan Temel Değer (Key Value)
1. **Ulaşım Netliği**: Havalimanı Z2, Z3 hatları, Otogar C11, AY, A1 belediye otobüsleri ve Dağkapı dolmuşlarının kalkış/varış saatleri, durakları ve güzergahları.
2. **Sur İçi Güvenli Rotalar**: Kaybolma endişesi olmadan adım adım rehberli 3 hazır tur rotası (2 saatlik ekspres, yarım günlük klasik, tam günlük derin Sur turu) ve hikaye modu.
3. **Fiyat Şeffaflığı ve Gurme Lezzetler**: Ciğer kebabı, kaburga dolması, burma kadayıf, meyan kökü şerbeti, peynirli Sur kahvaltısı için tavsiye edilen yerler ve ortalama piyasa fiyat aralıkları.
4. **40+ Kafe Envanteri**: Cadde 75, Diclekent Villaları, 50'lik Yol, Winstown AVM, Ofis Sanat Sokağı ve Dağkapı tarihi çay ocaklarının detaylı listesi, konsepti ve çalışma saatleri.
5. **15+ Park ve Yaşam Alanı**: Millet Bahçeleri, Tema Park, Anıt Park, Koşuyolu, Kent Ormanı, Nevruz Parkı vb. spor ve dinlenme alanları.
6. **Sağlık & Emlak Entegrasyonu**: Dicle Üniversitesi Tıp Fakültesi, Gazi Yaşargil EAH, Özel Memorial, Dünya, Genesis, Bower hastaneleri ve Sahibinden Diyarbakır kiralık ev filtreleme rehberi.

---

## 2. Kullanıcı Deneyimi ve Görsel Tasarım (UX & Visual Design)

### Tasarım Kimliği & Renk Paleti
- **Karakter**: Diyarbakır'ın kadim bazalt taşları, Hevsel Bahçeleri'nin canlı yeşili ve Dicle Nehri'nin derin mavisiyle harmanlanmış editoryal, saygın ve çağdaş bir kurumsal portal estetiği.
- **Renk Dağılımı (%60 - %30 - %10)**:
  - **%60 Nötr Zemin**: Temiz taş rengi (`#F8F9FA` / koyu modda `#0F172A`).
  - **%30 Yapısal Yüzeyler**: Yumuşak bazalt kartlar (`#FFFFFF` ve `#1E293B`), ince saç çizgisi sınırlar (`border-slate-200 / border-slate-800`).
  - **%10 Vurgu Renkleri**: Güneşli Mezopotamya kehribarı (`#D97706` / `amber-600`), Sur bazalt kırmızısı (`#DC2626` / `red-600`) ve Dicle zümrütü (`#059669` / `emerald-600`).
- **Tipografi**: Başlıklar için güçlü `Plus Jakarta Sans` / `Outfit`, gövde metinleri için yüksek okunabilirlikli `Inter`/`Plus Jakarta Sans`, veri ve hat numaraları için `tabular-nums` monospace biçimlendirme.

### Temel Kullanıcı Akışları
1. **Şehir Giriş ve Ulaşım Paneli**: Havalimanı (Z2, Z3) ve Otogar (C11, AY, A1, Dağkapı dolmuşları) için doğrudan hat kartları, nereden binilir/nerede inilir kılavuzu ve canlı güzergah simülasyonu.
2. **İnteraktif Sur İçi Keşif ve Harita Modülü**: Leaflet tabanlı dinamik harita üzerinde tıklandığında açılan tarihi noktalar (Ulu Cami, Dört Ayaklı Minare, Hasan Paşa Hanı, Cahit Sıtkı Tarancı Müzesi, On Gözlü Köprü, Hevsel Bahçeleri) ve 1 dakikalık sesli/metin hikaye kartları.
3. **Kafe ve Mekanlar Kataloğu (40+ Mekan)**: Cadde 75, Diclekent Villaları, 50'lik Yol, Winstown AVM, Ofis Sanat Sokağı ve Dağkapı filtreleriyle Nevvada, Arabica, Coffy, Kahve Dünyası, Big Mamas ve geleneksel Sülüklü Han gibi 40'ı aşkın mekanın konum ve imkanları.
4. **Parklar & Spor / Dinlenme Rehberi (15+ Park)**: Diyarbakır Millet Bahçesi, Anıt Park, Tema Park, Koşuyolu Parkı, Nevruz Parkı, Park 75 vb. olanaklar (yürüyüş parkuru, çocuk oyun alanı, çay bahçesi, açık hava fitness).
5. **Diyarbakır Lezzetleri & Fiyat Şeffaflığı**: Porsiyon fiyatları, meşhur ustalar ve "Ne yemeli?" ipuçları.
6. **Sağlık & Emlak Hızlı Kılavuzu**: Acil numaralar, nöbetçi eczane entegrasyonu, kamu ve özel hastaneler (Memorial, Dünya, Genesis, Bower), Sahibinden Diyarbakır kiralık ev direkt arama kılavuzu ve semt incelemesi (Kayapınar, Bağlar, Yenişehir, Sur).
7. **Pratik Turist Yardımcısı**: Türkçe - Kürtçe - İngilizce temel selamlaşma ve teşekkür kartları, hava durumu ve güneş/gölge rota uyarıları.

---

## 3. Temel Ürün Kararları ve Tercihler (Product Decisions & Trade-Offs)

1. **Harita Kütüphanesi**:
   - *Seçim*: Leaflet + OpenStreetMap harita katmanı.
   - *Gerekçe*: Harici Google API faturalandırma veya kota kısıtlamalarına takılmadan pürüzsüz çalışır, özel SVG pinleri destekler, koordinat rotalarını çizer ve çevrimdışı önbellekleme ile sorunsuz işler.
2. **Uygulama Modeli (PWA + Web Applet)**:
   - *Seçim*: Responsive React + TypeScript + Tailwind CSS PWA altyapısı.
   - *Gerekçe*: Kullanıcı hem masaüstünde zengin bir şehir portalı deneyimler, hem de cep telefonunda (Android/iOS) tarayıcı menüsünden veya uygulama içi "Uygulamayı Yükle" butonuyla ana ekrana tam ekran bağımsız app olarak kurabilir.
3. **Fiyat Şeffaflığı & Yerel Veri Tabanı**:
   - *Seçim*: Gerçekçi Diyarbakır yerel saha verileri (2026 güncel ortalamaları, mekan isimleri, otobüs kodları, hastane adres ve telefonları) ile zenginleştirilmiş yerleşik veri mimarisi.

---

## 4. Teknik Mimari ve Bileşen Hiyerarşisi (Technical Architecture)

```
┌────────────────────────────────────────────────────────────────────────┐
│                        HELEGEL ŞEHİR PORTALI                           │
├────────────────────────────────────────────────────────────────────────┤
│  [TopBar] Marka Wordmark · Navigasyon Sekmeleri · PWA Yükle Butonu    │
├────────────────────────────────────────────────────────────────────────┤
│  [Hero & Şehir Özeti] Canlı Hava Durumu · Hızlı Arama & Filtreleme    │
├───────────────────┬────────────────────────────────────────────────────┤
│  SOL PANEL (35%)  │  SAĞ PANEL (65%)                                   │
│  - Hızlı Ulaşım   │  - İnteraktif Harita (Leaflet OSM)                 │
│    (Z2, Z3, C11,  │    (Özel Kategori Pinleri, Rotalar, Popup Bilgisi) │
│     AY, A1, vb.)  │  - Sur İçi Tur Rotaları (2s, Yarım Gün, Tam Gün)   │
│  - Dil Kartları   │  - Kafe Kataloğu (40+ Mekan & Semt Filtresi)       │
│  - Acil Sağlık    │  - Parklar & Sosyal Alanlar (15+ Park)             │
│  - Kiralık Rehber │  - Gurme Lezzetler & Fiyat Şeffaflık Tablosu       │
└───────────────────┴────────────────────────────────────────────────────┘
```

### Planlanan Veri Varlıkları (Data Schema):
- `TransitRoute`: Hat kodu, güzergah adı, başlangıç/bitiş, durak listesi, sıklık, ilk/son sefer.
- `LocationPoint`: ID, isim, kategori (tarih, kafe, park, saglik), semt, koordinatlar (lat, lng), açıklama, imkanlar, çalışma saatleri, fiyat aralığı.
- `WalkingTour`: Tur adı, süre, mesafe, rota durakları, gölge uyarısı, tarihi özet.
- `DishGuide`: Yemek adı, yerel adı, meşhur olduğu yerler, 2026 ortalama porsiyon fiyatı, lezzet sırrı.
- `PhraseCard`: Türkçe, Kürtçe (Kurmanci), İngilizce temel cümleler ve fonetik okunuş.

---

## 5. Doğrulama ve Test Adımları (Verification Plan)
1. **Paket Kurulumu**: Leaflet kütüphanesinin ve tip tanımlarının (`leaflet`, `@types/leaflet`) kurulması.
2. **Kod Derleme**: `compile_applet` ile sıfır TypeScript ve JSX hatasının doğrulanması.
3. **PWA & Offline Testi**: Manifest, service worker ve çevrimdışı rota önbellek mekanizmasının test edilmesi.
4. **Harita & Filtre Testi**: 40+ kafe, 15+ park, acil hastaneler ve Sur rotalarının harita üzerinde hatasız filtrelenip açıldığının doğrulanması.
