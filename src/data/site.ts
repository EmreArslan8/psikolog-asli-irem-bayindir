/**
 * Site künyesi ve içerik — tek kaynak.
 * Müşteri bilgileri geldikçe yalnızca bu dosya güncellenir.
 * `null` bırakılan alanlar sitede otomatik gizlenir.
 */

export const site = {
  url: 'https://asliirembayindir.com', // TODO: gerçek alan adı
  name: 'Psikolog Aslı İrem Bayındır',
  shortName: 'Aslı İrem Bayındır',
  title: 'Psikolog',
  tagline: 'Çocuk, ergen ve ebeveyn danışmanlığı',
  description:
    'Psikolog Aslı İrem Bayındır — çocuk, ergen ve ebeveyn danışmanlığı. Yüz yüze ve online görüşmelerle ailenize güvenli, sıcak ve bilimsel bir destek alanı.',

  contact: {
    phoneDisplay: '0500 000 00 00', // TODO
    phone: '+905000000000', // TODO
    whatsapp: '905000000000', // TODO: ülke koduyla, + olmadan
    email: 'info@asliirembayindir.com', // TODO
    instagram: 'https://www.instagram.com/psk.aslirembayindir/' as string | null,
    address: 'İzmit / Kocaeli' as string | null, // TODO: açık adres
    mapsQuery: null as string | null,
    hours: 'Pazartesi–Cumartesi · 10.00–19.00',
  },

} as const;

export const whatsappUrl = (text = 'Merhaba, randevu almak istiyorum.') =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hakkimda', label: 'Hakkımda' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/iletisim', label: 'İletişim' },
] as const;

export type Service = {
  slug: string;
  title: string;
  age: string;
  summary: string;
  body: string;
  topics: string[];
  /** Kartlarda etiket olarak görünen yöntem/çalışma alanları */
  chips: string[];
  tone: 'peach' | 'sage' | 'lilac';
  /** unDraw illüstrasyonu (ücretsiz lisans), site renklerine boyandı */
  image: string;
};

export const services: Service[] = [
  {
    slug: 'cocuk',
    image: '/illustrations/cocuk.svg',
    chips: ['Deneyimsel Oyun Terapisi', 'Duygu Regülasyonu', 'Sosyal Uyum'],
    title: 'Çocuk Danışmanlığı',
    age: '3–12 yaş',
    summary:
      'Çocuğun kendini en iyi ifade ettiği dil oyundur. Oyun ve yaşa uygun tekniklerle duygularını tanımasına ve düzenlemesine destek oluyorum.',
    body:
      'Görüşmeler çocuğun gelişim dönemine göre planlanır. Oyun, çizim ve hikâye gibi araçlarla çocuğun iç dünyasını anlamaya çalışır; süreç boyunca ebeveynlerle düzenli değerlendirme görüşmeleri yaparız.',
    topics: ['Kaygı ve korkular', 'Öfke ve davranış sorunları', 'Uyku ve tuvalet eğitimi', 'Kardeş kıskançlığı', 'Okula uyum', 'Özgüven'],
    tone: 'peach',
  },
  {
    slug: 'ergen',
    image: '/illustrations/ergen.svg',
    chips: ['Bilişsel Davranışçı Terapi', 'Sınav Kaygısı', 'Özgüven'],
    title: 'Ergen Danışmanlığı',
    age: '13–18 yaş',
    summary:
      'Kimlik arayışı, akran ilişkileri ve akademik baskı… Ergenin yargılanmadan konuşabileceği, kendine ait bir alan oluşturuyoruz.',
    body:
      'Ergenlik, hem genç hem aile için yoğun bir dönemdir. Gizlilik ve güven temelinde yürüyen görüşmelerde gencin kendi hedeflerini belirlemesine ve baş etme becerilerini güçlendirmesine eşlik ediyorum.',
    topics: ['Sınav kaygısı', 'Akran ilişkileri', 'Duygu düzenleme', 'Ekran ve sosyal medya', 'Motivasyon', 'Aile içi iletişim'],
    tone: 'sage',
  },
  {
    slug: 'ebeveyn',
    image: '/illustrations/ebeveyn.svg',
    chips: ['Ebeveyn Rehberliği', 'Sınır Koyma', 'Aile İçi İletişim'],
    title: 'Ebeveyn Danışmanlığı',
    age: 'Anne & babalar',
    summary:
      'Çocuğunuzla ilişkinizi güçlendirmek, sınır koymak ve zorlayan dönemlerde yol haritası çizmek için ebeveynlere özel destek.',
    body:
      'Ebeveyn görüşmelerinde çocuğunuzun davranışlarının arkasındaki ihtiyacı birlikte anlamaya çalışır, evde uygulayabileceğiniz somut ve tutarlı adımlar belirleriz.',
    topics: ['Sınır koyma', 'Boşanma sürecinde çocuk', 'Yeni kardeş', 'Olumlu disiplin', 'Ebeveyn tükenmişliği', 'Ergenle iletişim'],
    tone: 'lilac',
  },
];

export const principles = [
  { title: 'Güvenli alan', text: 'Yargısız, sıcak ve gizliliğe özen gösterilen bir ortam.' },
  { title: 'Bilimsel yaklaşım', text: 'Etkinliği araştırmalarla desteklenen yöntemler.' },
  { title: 'Yaşa uygun', text: 'Her gelişim dönemine özel teknikler ve dil.' },
  { title: 'Aileyle birlikte', text: 'Ebeveynin sürecin doğal bir parçası olduğu çalışma.' },
];

export const steps = [
  { title: 'İlk iletişim', text: 'WhatsApp, telefon ya da form üzerinden bana ulaşın; size uygun bir gün belirleyelim.' },
  { title: 'Ön görüşme', text: 'İlk görüşmeyi ebeveynlerle yapar, ihtiyacı ve beklentileri birlikte netleştiririz.' },
  { title: 'Değerlendirme', text: 'Çocuk ya da ergenle tanışır, sürecin hedeflerini ve sıklığını planlarız.' },
  { title: 'Düzenli süreç', text: 'Planlı seanslar ve dönemsel ebeveyn görüşmeleriyle ilerlemeyi takip ederiz.' },
];



export const about = {
  photo: null as string | null, // ör. '/images/asli-irem-bayindir.webp'
  intro:
    'Merhaba, ben Aslı İrem Bayındır. Çocukların, gençlerin ve ailelerin zorlandıkları dönemlerde kendilerini daha iyi anlamalarına ve güçlü yanlarını keşfetmelerine eşlik ediyorum.',
  paragraphs: [
    'Çocukla çalışmanın aileyle çalışmaktan ayrı düşünülemeyeceğine inanıyorum. Bu yüzden görüşmelerimde çocuğun ya da gencin dünyasını anlamaya çalışırken ebeveynleri de sürecin doğal bir parçası olarak görüyorum.',
    'Oyun temelli yaklaşımlar ve bilimsel olarak etkinliği gösterilmiş yöntemlerle, her çocuğun kendi hızına ve ihtiyacına uygun bir yol haritası oluşturmaya özen gösteriyorum.',
  ],
  // TODO: müşteriden gelecek gerçek eğitim bilgileriyle değiştirilecek
  education: [
    { title: 'Psikoloji Lisans', place: 'Üniversite adı' },
    { title: 'Klinik Psikoloji Yüksek Lisans', place: 'Üniversite adı' },
  ],
  trainings: ['Oyun Terapisi Eğitimi', 'Çocuk ve Ergenlerde Bilişsel Davranışçı Terapi', 'Ebeveyn Danışmanlığı Eğitimi'],
};

/** Çalıştığı kurum — Hakkımda sayfası, footer ve schema (worksFor) buradan beslenir. */
export const institution = {
  name: 'Aile Danışmanlığı Merkezi', // TODO: kurumun tam adı
  url: null as string | null, // TODO: kurumun web sitesi
  role: 'Psikolog',
  text: 'Bir aile danışmanlığı merkezinde çocuk, ergen ve ebeveynlerle bireysel görüşmeler yürütüyor; ailelere yönelik grup çalışmaları ve atölyeler düzenliyorum.',
  duties: ['Çocuk ve ergen görüşmeleri', 'Ebeveyn danışmanlığı', 'Aile görüşmeleri', 'Grup çalışmaları ve atölyeler'],
};

// TODO: müşteriden gelecek gerçek atölye listesiyle değiştirilecek
export const workshops = [
  { title: 'Duygularımı Tanıyorum', audience: 'Çocuk atölyesi · 5–10 yaş', text: 'Oyun ve hikâyelerle çocukların duygularını tanıması, adlandırması ve ifade etmesi üzerine grup çalışması.' },
  { title: 'Sınır Koymak İlişkiye Alan Açar', audience: 'Ebeveyn atölyesi', text: 'Sevgiyle ve tutarlılıkla sınır koymanın yollarını, gerçek örnekler üzerinden birlikte konuştuğumuz buluşma.' },
  { title: 'Sınav Kaygısıyla Baş Etmek', audience: 'Ergen atölyesi · 13–18 yaş', text: 'Kaygıyı tanıma, düzenleme ve çalışma rutini oluşturma üzerine uygulamalı bir atölye.' },
];

/**
 * YouTube videoları — link olarak gösterilir (sayfaya oynatıcı yüklenmez, site hızlı kalır).
 * id: youtube.com/watch?v=<id> kısmı. Liste boşsa bölüm gizlenir.
 */
// TODO: DEMO — başka uzmanlara ait yer tutucu videolar; müşterinin kendi videolarıyla değiştirilecek
export const videos: { id: string; title: string }[] = [
  { id: '4T5zvjrZq6k', title: 'Çocuklarda duygu kontrolü nasıl sağlanır?' },
  { id: '_-gvCAgkDRw', title: 'Çocuğuma nasıl sınır koyarım?' },
  { id: 'vjhfDPEjr6w', title: 'Ergenlik döneminde ebeveyn–çocuk ilişkisi' },
];
export const youtubeChannel: string | null = null; // TODO: kanal linki
