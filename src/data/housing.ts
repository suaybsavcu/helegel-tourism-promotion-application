import { NeighborhoodGuide } from '../types';

export const NEIGHBORHOOD_GUIDES: NeighborhoodGuide[] = [
  {
    district: 'Kayapınar (Diclekent, 75. Yol & Mezopotamya)',
    safetyScore: 9.6,
    avgRent1Plus1: '14.000 ₺ — 20.000 ₺',
    avgRent2Plus1: '18.000 ₺ — 26.000 ₺',
    avgRent3Plus1: '24.000 ₺ — 38.000 ₺',
    advantages: [
      'Şehrin en lüks, modern ve güvenli bölgesi',
      'Site içi 7/24 güvenlik, kapalı otopark, yüzme havuzları',
      'Cadde 75, Park 75 ve Winstown AVM yürüme mesafesinde',
      'Geniş bulvarlar, temiz hava ve elit sosyal çevre'
    ],
    disadvantages: [
      'Şehir ortalamasına göre en yüksek kira ve aidat bedelleri',
      'Sur tarihi merkezine otobüsle yaklaşık 25-35 dakika mesafe'
    ],
    transitAccess: 'AY, CE2, C11 hatları ve sıklıkla geçen Diclekent dolmuşları ile her noktaya doğrudan ulaşım.',
    sahibindenSearchUrl: 'https://www.sahibinden.com/kiralik-daire/diyarbakir-kayapinar'
  },
  {
    district: 'Yenişehir (Ofis, Koşuyolu & Vilayet)',
    safetyScore: 8.8,
    avgRent1Plus1: '10.000 ₺ — 15.000 ₺',
    avgRent2Plus1: '14.000 ₺ — 19.000 ₺',
    avgRent3Plus1: '17.000 ₺ — 25.000 ₺',
    advantages: [
      'Şehrin merkezi kalbi: Sanat Sokağı, kafeler ve kamu kurumları',
      'Dicle Üniversitesi’ne tek araçla en kolay ulaşım (öğrenci dostu)',
      'Sur İçi tarihi merkezine yürüyerek veya 5 dakikada otobüsle erişim',
      'Çok canlı sokak hayatı, tren garı ve devlet hastanesine yakınlık'
    ],
    disadvantages: [
      'Binaların çoğu eski yapı (15-30 yıllık bloklar)',
      'Otopark bulma zorluğu ve yoğun cadde trafiği'
    ],
    transitAccess: 'Z2, Z3, C11, E1, E9 gibi tüm ana hatlar Ofis ve İstasyon caddelerinden geçer.',
    sahibindenSearchUrl: 'https://www.sahibinden.com/kiralik-daire/diyarbakir-yenisehir'
  },
  {
    district: 'Bağlar (Bağcılar & Göletli Park Çevresi)',
    safetyScore: 8.4,
    avgRent1Plus1: '9.000 ₺ — 13.000 ₺',
    avgRent2Plus1: '12.000 ₺ — 17.000 ₺',
    avgRent3Plus1: '15.000 ₺ — 22.000 ₺',
    advantages: [
      'Bağcılar mahallesi yeni sitelerden oluşur ve fiyat/performans çok yüksektir',
      'Havalimanı ve Göletli Park’a çok yakın',
      'Uygun bütçeyle geniş 3+1 ve 4+1 aile daireleri bulunabilir'
    ],
    disadvantages: [
      'Eski Bağlar (Dörtyol tarafı) daha kalabalık ve dar sokaklıdır',
      'Merkezi kafelere gitmek için toplu taşıma gerekir'
    ],
    transitAccess: 'Z3, C10 hatları ve Bağlar minibüsleri.',
    sahibindenSearchUrl: 'https://www.sahibinden.com/kiralik-daire/diyarbakir-baglar'
  },
  {
    district: 'Sur (Geleneksel & Turistik Merkez)',
    safetyScore: 7.9,
    avgRent1Plus1: '8.000 ₺ — 12.000 ₺',
    avgRent2Plus1: '11.000 ₺ — 15.000 ₺',
    avgRent3Plus1: '13.000 ₺ — 18.000 ₺',
    advantages: [
      'Tarihin tam göbeğinde yaşama ayrıcalığı',
      'Ulu Cami, Hevsel Bahçeleri ve surlara komşuluk',
      'Otantik kiralık müstakil avlulu taş ev seçenekleri'
    ],
    disadvantages: [
      'Dar sokaklar nedeniyle araç girişi ve otopark kısıtlıdır',
      'Gündüz saatlerinde yoğun turist ve çarşı kalabalığı'
    ],
    transitAccess: 'Dağkapı Meydanı kalkışlı tüm hatlar.',
    sahibindenSearchUrl: 'https://www.sahibinden.com/kiralik-daire/diyarbakir-sur'
  }
];

export const HOUSING_TIPS = [
  {
    title: 'Doğalgaz & Bireysel Kombi Kontrolü',
    text: 'Diyarbakır kışları serin geçer. Tutacağınız evin bireysel kombili veya merkezi pay ölçerli olduğunu mutlaka teyit edin.'
  },
  {
    title: 'Kira Sözleşmesi ve E-Devlet Onayı',
    text: 'Depozito ve kira bedelini mutlaka banka üzerinden "Kira Bedeli" açıklamasıyla gönderin. Tahliye taahhütnamesini aynı gün imzalamamaya dikkat edin.'
  },
  {
    title: 'Öğrenciler ve Memurlar İçin İdeal Hatlar',
    text: 'Dicle Üniversitesi’ne gidecek memur ve öğrenciler Ofis (Yenişehir) veya Diclekent-Tesisler aksını tercih etmelidir.'
  }
];
