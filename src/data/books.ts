export const books = [
  { id: 'birlikte-buyumek', title: 'Çocuğunuzla Birlikte Büyümek', author: 'Naomi Aldort', description: 'Bağ kurma, duyguları düzenleme, sakin ve bağlantılı ebeveynlik, günlük çatışmalar ve sınır koyma.' },
  { id: 'butun-beyinli-cocuk', title: 'Bütün Beyinli Çocuk', author: 'Daniel J. Siegel & Tina Payne Bryson', description: 'Çocuğun beyin gelişimi, yoğun duygular, krizler ve davranışların altında yatan ihtiyaçları anlama.' },
  { id: 'nasil-konusmali', title: 'Konuş ki Dinlesin, Dinle ki Konuşsun', author: 'Adele Faber & Elaine Mazlish', description: 'Çocukla etkili iletişim, işbirliği, sorumluluk kazandırma ve çatışmayı azaltarak sınır koyma.' },
  { id: 'kosulsuz-ebeveynlik', title: 'Koşulsuz Ebeveynlik', author: 'Alfie Kohn', description: 'Ödül ve ceza, başarı baskısı ve çocuğun davranışından bağımsız olarak ilişkiyi koruma üzerine düşünmek.' },
] as const;

export const ageGuides = [
  {
    age: '0–3 yaş',
    intro: 'Bağlanma, güven, duygusal ihtiyaçlar ve ebeveyn-çocuk ilişkisi bu dönemde öne çıkar.',
    question: 'Çocuğum ağladığında ya da ne istediğini anlatamadığında nasıl yaklaşmalıyım?',
    recommendations: [
      { bookId: 'birlikte-buyumek', topics: ['Bağ kurma', 'Duyguları düzenleme', 'Sakin ve bağlantılı ebeveynlik', 'Günlük çatışmalar'] },
      { bookId: 'butun-beyinli-cocuk', topics: ['Çocuğun beyin gelişimi', 'Duygu düzenleme', 'Kriz ve yoğun duygular', 'Davranışların altında yatan ihtiyaçları anlama'] },
    ],
  },
  {
    age: '3–6 yaş',
    intro: 'Sınır koyma, öfke nöbetleri, iletişim ve davranışlarla ilgili zorlanmalar bu dönemde daha fazla gündeme gelir.',
    question: 'Sürekli ağlıyor ya da itiraz ediyor; nasıl sınır koymalıyım?',
    recommendations: [
      { bookId: 'birlikte-buyumek', topics: ['Öfke nöbetleri', 'Sınır koyma', 'Çocuğun duygularını kabul etme', 'Ebeveynin kendi öfkesini yönetmesi'] },
      { bookId: 'butun-beyinli-cocuk', topics: ['Öfke krizleri', 'Korku ve kaygı', 'Çocuğun duygularını anlamlandırmasına yardım etme'] },
      { bookId: 'nasil-konusmali', topics: ['Çocukla etkili iletişim', 'İşbirliği sağlama', 'Sınır koyarken çatışmayı azaltma', 'Çocuğun duygularını dinleme'] },
    ],
  },
  {
    age: '6–12 yaş',
    intro: 'İletişim, sorumluluk, özgüven, sınırlar ve ebeveyn-çocuk çatışmaları bu dönemde öne çıkar.',
    question: 'Sorumluluk kazandırırken ve sınır koyarken ilişkimizi nasıl koruyabilirim?',
    recommendations: [
      { bookId: 'nasil-konusmali', topics: ['Sorumluluk kazandırma', 'Tartışmaları yönetme', 'Çocuğu dinleme', 'Eleştirmeden sınır koyma'] },
      { bookId: 'kosulsuz-ebeveynlik', topics: ['Ödül ve ceza', 'Başarı baskısı', 'Çocuğun davranışından bağımsız olarak ilişkiyi koruma', 'Ebeveynlik yaklaşımını sorgulama'] },
      { bookId: 'butun-beyinli-cocuk', topics: ['Duygusal beceriler', 'Problem çözme', 'Davranışların arkasındaki nedenleri anlamak'] },
    ],
  },
];

export const topicGuides = [
  { topic: 'Sınır koyma', bookIds: ['nasil-konusmali', 'birlikte-buyumek'] },
  { topic: 'Ödül-ceza ve disiplin', bookIds: ['kosulsuz-ebeveynlik'] },
  { topic: 'Öfke ve krizler', bookIds: ['butun-beyinli-cocuk', 'birlikte-buyumek'] },
  { topic: 'Ebeveyn-çocuk iletişimi', bookIds: ['nasil-konusmali'] },
  { topic: 'Çocuğun duygularını anlama', bookIds: ['butun-beyinli-cocuk', 'birlikte-buyumek'] },
  { topic: 'Ebeveynin kendi davranışlarını sorgulaması', bookIds: ['kosulsuz-ebeveynlik'] },
];

export const quickChoices = [
  { need: 'Küçük çocukla bağ kurmak', bookId: 'birlikte-buyumek' },
  { need: 'Öfke nöbetleri', bookId: 'butun-beyinli-cocuk' },
  { need: 'İletişim sorunları', bookId: 'nasil-konusmali' },
  { need: 'Sınır koymak', bookId: 'birlikte-buyumek' },
  { need: 'Ödül-ceza konusunda farklı bir yaklaşım', bookId: 'kosulsuz-ebeveynlik' },
  { need: 'Çocuğun davranışlarını anlamak', bookId: 'butun-beyinli-cocuk' },
];
