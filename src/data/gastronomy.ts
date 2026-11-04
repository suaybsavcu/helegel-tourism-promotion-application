import { GastronomyItem } from '../types';

export const GASTRONOMY_ITEMS: GastronomyItem[] = [
  {
    id: 'ciger-kebabi',
    name: 'Diyarbakır Ciğer Kebabı',
    localName: 'Cîger',
    description: 'Sabah kahvaltısından gece yarısına kadar tüketilen tescilli Diyarbakır efsanesi. Küçük küp doğranmış kuzu ciğeri ve kuyruk yağı, kömür ateşinde kurutulmadan pişirilir; sıcak tırnak pide, sumaklı soğan, köz biber ve bol yeşillikle sunulur.',
    avgPrice: '280 ₺ — 360 ₺ (Porsiyon)',
    famousSpots: [
      { name: 'Ciğerci Remzi Usta', zone: 'Sur / Dağkapı', note: 'Geleneksel ocakbaşı, samimi esnaf havası' },
      { name: 'Ciğerci Xale Meheme', zone: 'Sur İçi', note: 'Sabah 05:00’te başlayan tarihi lezzet' },
      { name: 'Ciğerci Muharrem Usta', zone: 'Ofis', note: 'Öğle ve akşam kalabalıklarında çok hızlı servis' },
      { name: 'Onur Ocakbaşı Ciğer', zone: 'Kayapınar Cadde 75', note: 'Modern ve konforlu aile salonu' }
    ],
    scamProtectionTip: 'Diyarbakır ciğercilerinde ezme salata, sumaklı maydanozlu soğan, közlenmiş biber ve sıcak tırnak pide FİYATA DAHİLDİR ve sınırsız ikramdır. Adisyonda salata veya meze ücreti yazılıyorsa hemen itiraz ediniz.',
    heritageStory: 'Diyarbakır’da ciğer sadece bir yemek değil, bir yaşam biçimidir. İpek Yolu tüccarları sabahın ilk ışıklarıyla uyanıp güne enerjiyle başlamak için fırınların önünde ciğer yerdi; bu gelenek günümüzde de sabah kahvaltısında ciğerle sürer.'
  },
  {
    id: 'kaburga-dolmasi',
    name: 'Diyarbakır Usulü Kaburga Dolması',
    localName: 'Dolmeya Perasû',
    description: 'Kuzu kaburga kemiğinin içi bademli, fesleğenli, reyhanlı özel baharatlı pirinç pilavıyla doldurulup iğne iplikle dikilir. Bakır tencerede buharla ve fırında 4-5 saat ağır ağır pişerek lokum kıvamına gelir.',
    avgPrice: '480 ₺ — 650 ₺ (Porsiyon) / Kilo ile servis de yapılır',
    famousSpots: [
      { name: 'Tavacı Recep Usta', zone: 'Diclekent Villaları', note: 'Bahçe içinde prestijli sunum' },
      { name: 'Fırıncı Selim Amca (Kaburgacı Selim)', zone: 'Sur & Ofis', note: 'Kaburga dolmasının duayeni' },
      { name: 'Bukalemun Restaurant', zone: 'Kayapınar 75', note: 'Zengin yöresel lezzet şöleni' }
    ],
    scamProtectionTip: 'Kaburga dolması porsiyon veya kilo bazında satılır. Sipariş vermeden önce porsiyonun net gramajını veya kişi başı fiks menü fiyatını menüden mutlaka teyit edin.',
    heritageStory: 'Eski Diyarbakır konaklarında sadece çok özel misafirler ağırlandığında veya düğün arefelerinde pişirilen, zahmeti ve sabrı simgeleyen saray yemeğidir.'
  },
  {
    id: 'burma-kadayif',
    name: 'Diyarbakır Burma Kadayıfı & Kadayıflı Dondurma',
    localName: 'Qedeyîf',
    description: 'Altın sarısı tereyağlı tel kadayıfın içine bol Karacadağ fıstığı veya ceviz sarılarak fırınlanır, üzerine koyu kıvamlı kaynar şerbet dökülür. İsteğe göre üzerine hakiki Maraş keçi sütü dondurması eklenir.',
    avgPrice: '160 ₺ — 240 ₺ (Porsiyon) / 480 ₺ — 750 ₺ (Kilo)',
    famousSpots: [
      { name: 'Sıtkı Usta Kadayıf', zone: 'Ofis & Cadde 75', note: 'Diyarbakır’ın en ünlü tescilli markası' },
      { name: 'Hacı Levent Kadayıf', zone: 'Sur Dağkapı', note: '1890’lardan bu yana süren tarihi ustalık' },
      { name: 'Ceylan Kadayıf', zone: 'Kayapınar', note: 'Fıstıklı ve cevizli taze sıcak servis' }
    ],
    scamProtectionTip: 'Hakiki burma kadayıf sade tereyağı kokar ve çıtır çıtır olur. Glikoz şurubu kullanılan ucuz yerlerde kadayıf yapışkan ve boğaz yakan bir tat bırakır; tescilli üreticileri tercih edin.',
    heritageStory: 'Diyarbakır burma kadayıfı coğrafi işaret tescillidir. Bakır tepsilerde kömür koru üzerinde çevrilerek pişirilmesi asırlık bir zanaattır.'
  },
  {
    id: 'sur-peynirli-kahvalti',
    name: 'Tarihi Hasan Paşa Hanı Serpme Kahvaltısı',
    localName: 'Taşta Diyarbekirê',
    description: 'Diyarbakır örgü peyniri, Karacadağ otlu peyniri, cevizli tulum, Diyarbakır kavurmalı yumurta, hakiki petek bal, tahin-pekmez, zeytinler ve sıcak tandır çöreği eşliğinde semaver çayı.',
    avgPrice: '250 ₺ — 380 ₺ (Kişi Başı Serpme)',
    famousSpots: [
      { name: 'Kahvaltıcı Mustafa (Hasan Paşa Hanı)', zone: 'Sur', note: 'Tarihi hanın üst katında efsane avlu manzarası' },
      { name: 'Kadri Usta Kahvaltı Sarayı', zone: 'Sur / Gazi Cad.', note: 'Bol çeşit ve sıcak kavurma tavası' },
      { name: 'Hevsel Bahçeleri Köy Kahvaltısı', zone: 'Dicle Nehri Kıyısı', note: 'Yeşillikler içinde doğa kahvaltısı' }
    ],
    scamProtectionTip: 'Serpme kahvaltıda kişi sayısına göre ücretlendirilir. Masaya gelen ekstra yumurta/kavurma çeşitlerinin fiyata dahil olup olmadığını baştan sorun.',
    heritageStory: 'Diyarbakır kahvaltısı, Karacadağ bazalt meralarında otlayan koyunların sütünden yapılan salamura örgü peynirinin eşsiz aromasıyla meşhurdur.'
  },
  {
    id: 'meyan-koku-serbeti',
    name: 'Meyan Kökü Şerbeti (Biyan Balı)',
    localName: 'Aşbav / Şerbeta Biyanê',
    description: 'Dicle Nehri kıyısında yetişen yabani meyan köklerinin dövülüp buz gibi suyla süzülmesiyle elde edilen, hazmı kolaylaştıran ve yaz sıcağında anında harareti kesen doğal şifa kaynağı.',
    avgPrice: '25 ₺ — 40 ₺ (Büyük Bardak)',
    famousSpots: [
      { name: 'Sur İçi Seyyar Şerbetçiler', zone: 'Gazi Caddesi & Dağkapı', note: 'Sırtlarındaki geleneksel pirinç ibriklerle servis ederler' },
      { name: 'Ulu Cami Meydan Şerbetçisi', zone: 'Sur', note: 'Buzlu ve köpüklü taze sıkım' }
    ],
    scamProtectionTip: 'Şerbetçilerin sırtındaki sarı pirinç ibrikten dökerken çıkardığı çan sesi Sur’un simgesidir. Fiyatı sabittir, bardak başı 25-40 TL aralığındadır.',
    heritageStory: 'Diyarbakır sıcağında 50 dereceye varan günlerde yüzyıllardır halkın susuzluğunu gideren en eski doğal soda ve hazmettirici içecektir.'
  },
  {
    id: 'diyarbakir-coregi',
    name: 'Geleneksel Diyarbakır Mahlepli Çöreği',
    localName: 'Kuliçeya Diyarbekirê',
    description: 'Mahlep, mayana (rezene), çörek otu, susam ve süt ile yoğrulan taş fırında pişen nefis aromalı kıtır veya yumuşak yöresel çörek.',
    avgPrice: '20 ₺ — 35 ₺ (Adet) / 180 ₺ — 250 ₺ (Kilo)',
    famousSpots: [
      { name: 'Tarihi Sur Fırınları', zone: 'Balıkçılarbaşı & Mardinkapı', note: 'Sabah sıcak çıkan taze odun ateşi çörekleri' },
      { name: 'Çörekçi İbo Dayı', zone: 'Dağkapı Çarşısı', note: 'Mahlebi buram buram tüten çörek' }
    ],
    scamProtectionTip: 'Fırınlardan kilo ile veya tane olarak alabilirsiniz. Taze pişen saatleri sabah 07:00 ve öğleden sonra 16:00’dır.',
    heritageStory: 'Özellikle bayram sabahlarında her evde tepsiler dolusu yapılan ve komşularla paylaşılan dayanıklı ve mis kokulu bir miras.'
  }
];

export const SCAM_PREVENTION_GUIDE = [
  {
    title: 'Menüde Fiyat Listesi Görme Hakkı',
    desc: 'Türkiye Cumhuriyeti Ticaret Bakanlığı mevzuatına göre tüm lokanta ve kafelerin kapısında ve masasında fiyat listesi bulundurması yasaldır. Fiyat yazmayan hiçbir mekanda sipariş vermeyin.'
  },
  {
    title: 'Ciğer ve Kebap İkramları Ücretsizdir',
    desc: 'Salata, ezme, yeşillik, köz biber ve lavaş ekmeği Diyarbakır kültüründe hesaba YAZILMAZ. Adisyonda "Kuver", "Meze" veya "Garnitür" ücreti görürseniz işletmeye hemen düzeltmesini söyleyin.'
  },
  {
    title: 'Taksi ve Ulaşım Şeffaflığı',
    desc: 'Havalimanı ve otogardan bindiğiniz sarı taksilerde taksimetrenin açıldığından emin olun. Dağkapı Sur içi ile Havalimanı arası normal şartlarda 10-14 km civarındadır. İtiraz durumunda 153 Zabıta veya Alo 157’yi arayabilirsiniz.'
  },
  {
    title: 'Hediyelik Bakır ve Gümüşte Gram Kontrolü',
    desc: 'Sur Bakırcılar Çarşısı’nda veya telkâri gümüşçülerinde ürünün 925 ayar damgasını ve tartısını isteyin. Esnafla saygı çerçevesinde makul bir pazarlık kültürü geçerlidir.'
  }
];
