import { BusRoute } from '../types';

export const BUS_ROUTES: BusRoute[] = [
  {
    code: 'Z2',
    title: 'Havalimanı — Dağkapı Meydanı (Ekspres)',
    from: 'Diyarbakır Havalimanı Dış/İç Hatlar',
    to: 'Sur Dağkapı Meydanı',
    frequency: 'Her 40-50 dakikada bir (Uçak iniş saatlerine endeksli)',
    operatingHours: '06:30 — 23:45',
    color: 'amber',
    type: 'havalimani',
    stops: [
      'Havalimanı Terminali',
      'Kamışlo Bulvarı',
      'Bağlar Dörtyol',
      'Koşuyolu Parkı',
      'Vilayet (Valilik)',
      'Ofis İstasyon Caddesi',
      'Dağkapı Meydanı (Sur Girişi)'
    ],
    tips: 'Uçaktan indiğinizde terminal kapısı önündeki duraktan kalkar. Diyarkart veya temassız kredi kartı geçerlidir. Sur içine gitmek için en hızlı hattır.'
  },
  {
    code: 'Z3',
    title: 'Havalimanı — Göletli Park — Dağkapı',
    from: 'Diyarbakır Havalimanı',
    to: 'Dağkapı Meydanı (Bağlar / Göletli Park üzerinden)',
    frequency: 'Her 45 dakikada bir',
    operatingHours: '06:50 — 23:15',
    color: 'orange',
    type: 'havalimani',
    stops: [
      'Havalimanı',
      'Newroz Parkı Civarı',
      'Göletli Park',
      'Kantar Kavşağı',
      'Bayındırlık',
      'Ofis Ekinciler Caddesi',
      'Dağkapı Meydanı'
    ],
    tips: 'Eğer Bağlar tarafında veya Göletli Park civarında konaklayacaksanız bu hattı tercih edin.'
  },
  {
    code: 'C11',
    title: 'Şehirlerarası Otogar — Dağkapı Meydanı',
    from: 'Diyarbakır Şehirlerarası Otogarı (DİŞTİ)',
    to: 'Dağkapı Meydanı',
    frequency: 'Her 12-15 dakikada bir',
    operatingHours: '06:00 — 23:30',
    color: 'emerald',
    type: 'belediye',
    stops: [
      'Otogar İçi Peronlar',
      'Seyrantepe Kavşağı',
      'Tesisler (Urfa Bulvarı)',
      'Koşuyolu',
      'Ofis Gevran Caddesi',
      'Dağkapı Meydanı'
    ],
    tips: 'Otobüsten indikten sonra otogar ana çıkışındaki belediye peronundan biner. Sur içine en yaygın kullanılan otogar hattıdır.'
  },
  {
    code: 'AY',
    title: 'Otogar — Diclekent — Cadde 75 — Dağkapı',
    from: 'Otogar (DİŞTİ)',
    to: 'Sur Dağkapı (Modern Merkez üzerinden)',
    frequency: 'Her 15-20 dakikada bir',
    operatingHours: '06:15 — 23:00',
    color: 'blue',
    type: 'belediye',
    stops: [
      'Otogar',
      'Fırat Bulvarı',
      'Cadde 75 (Park 75)',
      'Diclekent Villaları',
      'Dünya Kavşağı',
      'Tesisler',
      'Ofis',
      'Dağkapı'
    ],
    tips: 'Cadde 75 üzerindeki lüks kafelere veya Diclekent otellerine gitmek istiyorsanız Otogardan bu hatta binmelisiniz.'
  },
  {
    code: 'A1',
    title: 'Otogar — Batı İlçe Otogarı — Dağkapı',
    from: 'Otogar Peronları',
    to: 'Dağkapı Sur Girişi',
    frequency: 'Her 20 dakikada bir',
    operatingHours: '06:30 — 22:30',
    color: 'purple',
    type: 'belediye',
    stops: [
      'Otogar',
      'Batı İlçe Otogarı',
      'Urfa Yolu Çevre Kavşağı',
      'Huzurevleri',
      'Koşuyolu',
      'Valilik',
      'Dağkapı Meydanı'
    ],
    tips: 'Urfa yolundaki otellerde kalanlar için çok elverişlidir.'
  },
  {
    code: 'DOLMUŞ',
    title: 'Otogar — Dağkapı Minibüsleri (Sarı / Mavi Dolmuş)',
    from: 'Otogar Ana Çıkış Kapısı Önü',
    to: 'Dağkapı Çarşı & Balıkçılarbaşı',
    frequency: 'Doldukça kalkar (Ortalama her 3-5 dakikada bir)',
    operatingHours: '05:45 — 00:30',
    color: 'yellow',
    type: 'dolmus',
    stops: [
      'Otogar Çıkışı',
      'Urfa Bulvarı',
      'Tesisler Kavşağı',
      'Ofis Sanat Sokağı Altı',
      'Dağkapı Meydanı'
    ],
    tips: 'Diyarkart olmayanlar için nakit para geçerlidir. Hızlıdır ancak yoğun saatlerde ayakta yolcu alabilir.'
  },
  {
    code: 'E1',
    title: 'Dicle Üniversitesi — Dağkapı — Eğitim Araştırma',
    from: 'Dicle Üniversitesi Kampüsü',
    to: 'Gazi Yaşargil Eğitim Araştırma Hastanesi',
    frequency: 'Her 10 dakikada bir',
    operatingHours: '06:00 — 23:45',
    color: 'teal',
    type: 'belediye',
    stops: [
      'Üniversite Tıp Fakültesi',
      'Dicle Köprüsü',
      'Ali Paşa / İçkale Altı',
      'Dağkapı',
      'Ofis',
      'Tesisler',
      'Gazi Yaşargil EAH'
    ],
    tips: 'Üniversite ile şehir merkezini ve iki büyük eğitim hastanesini birbirine bağlayan ana damardır.'
  },
  {
    code: 'CE2',
    title: 'Diclekent — Winstown AVM — Dağkapı',
    from: 'Winstown & 50lik Yol',
    to: 'Dağkapı',
    frequency: 'Her 15 dakikada bir',
    operatingHours: '06:30 — 23:00',
    color: 'indigo',
    type: 'belediye',
    stops: [
      'Winstown AVM',
      'Mahabad Bulvarı (75)',
      'Diclekent Metropol',
      'Ninova Park AVM',
      'Ofis',
      'Dağkapı'
    ],
    tips: 'Alışveriş merkezleri (Winstown, Ninova, Ceylan Karavil) arasında seyahat edenler için idealdir.'
  }
];

export const TRANSIT_HUBS = [
  {
    name: 'Diyarbakır Havalimanı (DIY)',
    zone: 'Bağlar / Kamışlo Bulvarı',
    directBuses: ['Z2', 'Z3'],
    taxiAvailability: '7/24 Terminal çıkışında taksi durağı mevcut. Şehir merkezi ortalama 12-15 km.',
    tip: 'İç hatlar çıkışında sağ tarafta otobüs durağı bulunur. Otobüste temassız kart ile tek biniş basabilirsiniz.'
  },
  {
    name: 'Diyarbakır Şehirlerarası Otobüs Terminali (DİŞTİ)',
    zone: 'Kayapınar / Urfa Yolu Çıkışı',
    directBuses: ['C11', 'AY', 'A1', 'Dağkapı Dolmuşları'],
    taxiAvailability: 'Otogar içi 24 saat taksi noktası.',
    tip: 'Sur içine gidecekseniz C11 en hızlı belediye otobüsüdür; hemen çıkış kapısında Dağkapı dolmuşları da bekler.'
  },
  {
    name: 'Dağkapı Meydanı (Şeyh Said Meydanı)',
    zone: 'Sur Giriş Kapısı',
    directBuses: ['Z2', 'Z3', 'C11', 'AY', 'A1', 'E1', 'CE2', 'Tüm Dolmuşlar'],
    taxiAvailability: 'Meydan taksi durağı 7/24 aktiftir.',
    tip: 'Tüm Sur içi yürüyüş rotalarının ana başlangıç merkezidir. Ulu Cami ve Hasan Paşa Hanı buraya 400 metre mesafededir.'
  }
];
