/**
 * Site künyesi ve içerik — tek kaynak.
 * Müşteri bilgileri geldikçe yalnızca bu dosya güncellenir.
 * `null` bırakılan alanlar sitede otomatik gizlenir.
 */

export const site = {
  url: 'https://www.psikologaslirembayindir.com',
  name: 'Psikolog Aslı İrem Bayındır',
  shortName: 'Aslı İrem Bayındır',
  title: 'Psikolog',
  professionalTitle: 'Psikolog · Aile Danışmanı · Çocuk Gelişimi Uzmanı',
  tagline: 'Çocuk, ergen ve ebeveyn danışmanlığı',
  /** Paylaşım görseli (public/ altında, 1200×630) */
  ogImage: '/og.png',
  description:
    'Kocaeli İzmit’te Psikolog Aslı İrem Bayındır ile çocuk, ergen ve ebeveyn danışmanlığı. Yahyakaptan’da yüz yüze görüşmeler ve online danışmanlık için iletişime geçin.',

  contact: {
    phoneDisplay: '0532 717 30 92',
    phone: '+905327173092',
    whatsapp: '905327173092',
    email: 'psk.aslirembayindir@gmail.com',
    instagram: 'https://www.instagram.com/psk.aslirembayindir/' as string | null,
    address: 'Yahyakaptan, Seymen Cd. No: 46, 41310 İzmit/Kocaeli' as string | null,
    streetAddress: 'Yahyakaptan, Seymen Cd. No: 46',
    postalCode: '41310',
    mapsQuery: '40.7755423,29.9782305' as string | null,
    latitude: 40.7755423,
    longitude: 29.9782305,
    mapsUrl: 'https://www.google.com/maps/place/Psikoloji+%C4%B0zmit+Aile+Dan%C4%B1%C5%9Fma+Merkezi/@40.7755423,29.9782305,17z/data=!3m1!4b1!4m6!3m5!1s0x14cb512a020e0d13:0xf74bedc6b328e7be!8m2!3d40.7755423!4d29.9782305!16s%2Fg%2F11fsf7xf8x?hl=tr' as string | null,
    hours: 'Pazartesi–Cumartesi · 10.00–19.00',
    /** Schema.org için (yukarıdaki metinle aynı tutun) */
    hoursSpec: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '10:00', closes: '19:00' },
    city: 'İzmit',
    region: 'Kocaeli',
  },

} as const;

export const whatsappUrl = (text = 'Merhaba, randevu almak istiyorum.') =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hakkimda', label: 'Hakkımda' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/atolyeler', label: 'Atölyeler' },
  { href: '/blog', label: 'Blog' },
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
    chips: ['Çocuk Merkezli Oyun Terapisi', 'Duygu Regülasyonu', 'Sosyal Uyum'],
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
  photo: '/asli-irem-bayindir.jpg' as string | null,
  intro:
    'Merhaba, ben Aslı İrem Bayındır. Psikolog, aile danışmanı ve çocuk gelişimi uzmanıyım. Çocuklarla oyun odasında, yetişkinlerle atölyelerde buluşuyorum.',
  paragraphs: [
    'Işık Üniversitesi Psikoloji Bölümü’nden 2024 yılında onur derecesiyle mezun oldum. 2026 yılında İstanbul Üniversitesi Çocuk Gelişimi Bölümü’nü tamamladım. Psikoloji ve çocuk gelişimi eğitimlerimi, çocukların ve ailelerin ihtiyaçlarını anlamak için bir araya getiriyorum.',
    'Mesleki eğitimlerim arasında aile danışmanlığı, çocuk merkezli oyun terapisi ve süpervizyon, bilişsel davranışçı terapi, çocuk değerlendirme testleri, özgül öğrenme güçlüğü bataryası ve MOXO dikkat testi yer alıyor.',
    'Özel eğitim ve rehabilitasyon alanındaki deneyimimin ardından Mediofis ve Psikoloji İzmit Aile Danışmanlığı Merkezi’nde çalışmalarımı sürdürüyorum. Araştırmayı, öğrenmeyi ve mesleki gelişimimi sürdürmeyi önemsiyorum.',
  ],
  education: [
    { title: 'Psikoloji Lisans', place: 'Işık Üniversitesi · 2024 · Onur derecesi' },
    { title: 'Çocuk Gelişimi', place: 'İstanbul Üniversitesi (AUZEF) · 2026' },
  ],
  trainings: [
    'Aile Danışmanlığı Eğitimi — Marmara Üniversitesi',
    'Çocuk Merkezli Oyun Terapisi ve Süpervizyon — Mehmet Teber',
    'Bilişsel Davranışçı Terapi — Şükrü Uğuz / Marmara Psikoloji',
    'Çocuk Değerlendirme Testleri Bataryası — Türk Psikologlar Derneği',
    'Özgül Öğrenme Güçlüğü Bataryası — Türk Psikologlar Derneği',
    'MOXO Dikkat Testi — MOXO Türkiye / Moxo360',
    'Uzman Eğitici Eğitimi — Millî Eğitim Bakanlığı',
  ],
  experience: [
    { name: 'Psikoloji İzmit Aile Danışmanlığı Merkezi', period: 'Mayıs 2026 – devam ediyor' },
    { name: 'Mediofis', period: 'Şubat 2026 – devam ediyor' },
    { name: 'Yankım Özel Eğitim ve Rehabilitasyon Merkezi', period: 'Mayıs 2024 – Nisan 2026' },
  ],
  internships: [
    { name: 'Yugen Danışmanlık', detail: 'Klinik psikoloji stajı', period: 'Nisan – Mayıs 2026' },
    { name: 'Hera Psikoterapi Enstitüsü', detail: 'Staj', period: 'Temmuz – Ağustos 2023' },
    { name: 'Meltem Kırmızı / Kocaeli Nörofeedback', detail: 'Staj', period: 'Ağustos – Eylül 2022' },
    { name: 'İzmit Psikoteknik Merkezi', detail: 'Staj', period: 'Temmuz – Ağustos 2022' },
    { name: 'Roza Psikoloji', detail: 'Klinik psikoloji stajı', period: 'Haziran – Temmuz 2022' },
  ],
};

/** Çalıştığı kurum — Hakkımda sayfası, footer ve schema (worksFor) buradan beslenir. */
export const institution = {
  name: 'Psikoloji İzmit Aile Danışmanlığı Merkezi',
  url: null as string | null, // TODO: kurumun web sitesi
  role: 'Psikolog',
  text: 'Mayıs 2026’dan bu yana Psikoloji İzmit Aile Danışmanlığı Merkezi’nde çalışıyorum. Şubat 2026’da başladığım Mediofis çalışmalarımı da sürdürüyorum.',
  duties: ['Psikoloji lisans eğitimi', 'Çocuk gelişimi eğitimi', 'Aile danışmanlığı eğitimi', 'Çocuk merkezli oyun terapisi ve süpervizyon'],
};

/** Görüşme ücretleri (TL). Bir alan null ise o satır gizlenir. */
// TODO: gerçek ücretler
export const fees = {
  online: 1500 as number | null,
  faceToFace: 2400 as number | null,
};

/** Atölye ödemesi için banka bilgileri. iban null ise ödeme bölümü gizlenir. */
// TODO: gerçek IBAN ve hesap sahibi
export const payment = {
  holder: 'Aslı İrem Bayındır',
  bank: 'Banka adı',
  iban: 'TR00 0000 0000 0000 0000 0000 00' as string | null,
};

export type Workshop = {
  title: string;
  audience: string;
  text: string;
  /** Örn. '12 Ekim 2026' — boşsa "Tarih yakında" yazılır */
  date?: string;
  time?: string;
  format?: string;
  /** TL; yoksa "Bilgi için yazın" */
  price?: number;
  /** Afiş görseli (public/ altındaki yol, örn. '/atolyeler/duygular.jpg'); yoksa otomatik afiş kartı gösterilir */
  image?: string;
};

export const workshopCollective = {
  name: 'Mind Society Collective',
  instagram: 'https://www.instagram.com/mind.society.collective/',
  handle: '@mind.society.collective',
  poster: '/mind-society-collective-atolyeler.jpeg',
  region: 'Sakarya · Kocaeli',
  intro: 'Ekiplerinize iyi gelecek, ilham verecek ve bağları güçlendirecek özel atölye deneyimleri tasarlıyoruz.',
};

export const workshops: Workshop[] = [
  { title: 'Seramik Atölyesi', audience: 'Kurumsal atölye', text: 'Yaratıcı üretim ve odaklanma için seramikle buluşuyoruz. Birlikte üretmeye ve ekip bağlarını güçlendirmeye alan açıyoruz.' },
  { title: 'Yoga Atölyesi', audience: 'Kurumsal atölye', text: 'Beden farkındalığı ve denge odaklı bir deneyim. Ekipler için iyi oluşu destekleyen bir buluşma alanı oluşturuyoruz.' },
  { title: 'Tuval Atölyesi', audience: 'Kurumsal atölye', text: 'Duyguları ifade etmeye ve yaratıcılığa alan açan bir üretim deneyimi. Renkler ve tuval aracılığıyla birlikte keşfediyoruz.' },
  { title: 'Psikolojik Farkındalık Atölyesi', audience: 'Kurumsal atölye', text: 'İletişimi güçlendirme ve farkındalık odaklı buluşmalar. Dinlemeye, paylaşmaya ve ekip içindeki bağları geliştirmeye alan açıyoruz.' },
  { title: 'Kintsugi Atölyesi', audience: 'Kurumsal atölye', text: 'Kendini onarma ve yeniden bütünleşme temalarını kintsugi üzerinden ele alıyoruz. Üretirken bu temalar üzerine düşünmeye alan açıyoruz.' },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string[];
  /** Kapak görseli (public/ altındaki yol); yoksa kategoriye göre otomatik illüstrasyon kapak gösterilir */
  image?: string;
};

// TODO: DEMO — yer tutucu kısa yazılar; müşterinin kendi yazılarıyla değiştirilecek
export const posts: Post[] = [
  {
    slug: 'cocuklarda-oyunun-onemi',
    title: 'Çocuklar için oyun neden bu kadar önemli?',
    date: '2026-09-15',
    category: 'Çocuk',
    excerpt: 'Oyun, çocuğun duygularını ve dünyayı anlamlandırdığı en doğal dildir.',
    body: [
      'Çocuklar duygularını çoğu zaman sözcüklerle anlatamaz; oyun ise onların kendilerini en rahat ifade ettiği alandır. Bir oyuncak bebekle kurulan sahne, çoğu zaman çocuğun gün içinde yaşadığı bir duygunun sessiz anlatımıdır.',
      'Ebeveyn olarak yapabileceğiniz en değerli şeylerden biri, günün belli bir bölümünde çocuğunuzun yönettiği bir oyuna eşlik etmektir. Yönlendirmeden, düzeltmeden, yalnızca izleyip eşlik ederek.',
    ],
  },
  {
    slug: 'ergenle-iletisim',
    title: 'Ergenle iletişimde küçük ama etkili adımlar',
    date: '2026-09-22',
    category: 'Ergen',
    excerpt: 'Konuşmayan bir ergenle bağ kurmanın yolu, çoğu zaman daha az soru sormaktan geçer.',
    body: [
      'Ergenlik, bağımsızlık ihtiyacının arttığı bir dönemdir. Bu dönemde sorgu gibi hissettiren sorular, gençleri daha da kapanmaya iter.',
      'Yan yana yapılan bir aktivite, araba yolculuğu ya da ortak bir dizi çoğu zaman sohbeti kendiliğinden başlatır. Önce dinleyin, çözümü sonraya bırakın.',
    ],
  },
  {
    slug: 'sinir-koymak',
    title: 'Sevgiyle sınır koymak mümkün mü?',
    date: '2026-09-28',
    category: 'Ebeveyn',
    excerpt: 'Tutarlı ve sıcak sınırlar, çocuğa güven duygusu verir.',
    body: [
      'Sınır, çocuğu kısıtlamak değil, ona güvenli bir çerçeve sunmaktır. Sınırın sıcak bir tonda ve tutarlı biçimde konması çocuğun neyi bekleyeceğini bilmesini sağlar.',
      'Kısa, net ve sakin cümleler kullanın; çocuğun hissettiği duyguyu kabul ederken davranışın sınırını koruyun.',
    ],
  },
];

/**
 * YouTube videoları — ana oynatıcı yalnızca tıklanınca yüklenir.
 * id: youtube.com/watch?v=<id> kısmı. Liste boşsa bölüm gizlenir.
 * start ve end: videonun başından itibaren saniye olarak oynatma aralığı.
 */
export const videos: { id: string; title: string; start?: number; end?: number; poster?: string }[] = [
  { id: 'Nuruunck-rI', title: 'Çocuklar neden şiddete yöneliyor?', start: 2609, end: 3555, poster: '/video-nuruunck-44-29.jpg' },
];
export const youtubeChannel: string | null = null; // TODO: kanal linki
