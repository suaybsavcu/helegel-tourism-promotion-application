import { TourRoute } from '../types';

export const SUR_TOURS: TourRoute[] = [
  {
    id: 'ekspres-sur',
    title: '2 Saatlik Ekspres Sur İçi Turu',
    duration: '2 Saat',
    distance: '1.8 km',
    difficulty: 'Kolay',
    description: 'Vakti kısıtlı olanlar veya ilk gününde şehri hızlıca tatmak isteyenler için: Dağkapı’dan başlayıp Ulu Cami, Hasan Paşa Hanı ve Dört Ayaklı Minare üçgenini kapsayan klasik yürüyüş rotası.',
    highlights: [
      'Dağkapı Meydanı ve Sur Kapısı',
      'Hasan Paşa Hanı (Közde kahve molası)',
      'Diyarbakır Ulu Cami (5. Harem-i Şerif & Güneş Saati)',
      'Cahit Sıtkı Tarancı Evi',
      'Dört Ayaklı Minare'
    ],
    stopIds: ['ulu-cami', 'hasan-pasa-hani', 'cahit-sitki-taranci-muzesi', 'dort-ayakli-minare', 'suluklu-han'],
    bestTime: 'Sabah 09:30 — 11:30 veya Akşamüstü 16:30 — 18:30',
    shadeWarning: 'Gazi Caddesi boyu binaların gölgesindedir. Ara dar sokaklarda (Cahit Sıtkı ve Dört Ayaklı Minare) taş duvarlar öğle saatlerinde dahi serinlik sağlar.'
  },
  {
    id: 'yarim-gunluk-kultur',
    title: 'Yarım Günlük Kültür & Tarih Turu',
    duration: '4-5 Saat',
    distance: '3.6 km',
    difficulty: 'Orta',
    description: 'Şehrin 8000 yıllık tarihini İçkale’den başlayarak adımlayın. 27 Sahabe türbeleri, Saint George Kilisesi, Dengbêj Evi ve Sülüklü Han’da menengiç molasıyla zengin bir kültür dalışı.',
    highlights: [
      'İçkale Kompleksi & Arkeoloji Müzesi',
      'Hz. Süleyman Camii & 27 Sahabe Türbesi',
      'Saint George Kilisesi Sanat Galerisi',
      'Ulu Cami ve El-Cezeri Güneş Saati',
      'Dengbêj Evi (Canlı stran dinletisi)',
      'Tarihi Sülüklü Han (Menengiç kahvesi)'
    ],
    stopIds: ['ickale-muze-kompleksi', 'ulu-cami', 'hasan-pasa-hani', 'dengbej-evi', 'suluklu-han', 'dort-ayakli-minare'],
    bestTime: 'Sabah 09:00 — 14:00 (Öğle yemeği Sur ciğercilerinde)',
    shadeWarning: 'İçkale avlusu geniştir ve öğle güneşi alabilir, şapka veya güneş gözlüğü önerilir. Öğleden sonra hanlar ve Dengbêj evi klimalı ve serin avluludur.'
  },
  {
    id: 'tam-gunluk-miras',
    title: 'Tam Günlük Büyük Diyarbakır Miras Turu',
    duration: '7-8 Saat',
    distance: '6.5 km',
    difficulty: 'Yürüyüş Tempolu',
    description: 'Surların tepesindeki Keçi Burcu’ndan On Gözlü Köprü’ye, Hevsel Bahçeleri vadi manzarasından Dicle Nehri kıyısına uzanan en kapsamlı Diyarbakır deneyimi.',
    highlights: [
      'İçkale ve Amida Höyük',
      'Sur İçi Tarihi Çarşıları (Bakırcılar & Sipahiler)',
      'Ulu Cami & Hasan Paşa Hanı',
      'Keçi Burcu ve Hevsel Bahçeleri Seyir Terası',
      'Mardin Kapı',
      'Tarihi On Gözlü Köprü & Nehir Kıyısı Semaver Çayı'
    ],
    stopIds: ['ickale-muze-kompleksi', 'ulu-cami', 'hasan-pasa-hani', 'keci-burcu', 'hevsel-bahceleri', 'on-gozlu-kopru'],
    bestTime: '09:30 — 18:30 (Gün batımını On Gözlü Köprü’de Dicle kenarında karşılayın)',
    shadeWarning: 'Öğle 12:30 — 14:30 arası Sur içindeki kapalı hanlarda (Hasan Paşa veya Sülüklü Han) ya da klimalı ciğercilerde mola verin. Akşamüstü 16:30 sonrası Keçi Burcu ve On Gözlü Köprü’ye geçin.'
  }
];
