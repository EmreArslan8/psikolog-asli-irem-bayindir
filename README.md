# Psikolog Aslı İrem Bayındır

Astro tabanlı web sitesi. Sayfalar statik üretilir; `/api/randevu` sunucuda çalışarak Resend üzerinden randevu bildirimi gönderir.

## Kurulum

```sh
npm install
cp .env.example .env
npm run dev -- --background
```

Geliştirme sunucusu: `npm run astro -- dev status`, `npm run astro -- dev logs`, `npm run astro -- dev stop`.

## Resend ayarları

`.env` dosyasında veya hosting ortam değişkenlerinde şu değerleri tanımlayın:

| Değişken | İçerik |
| --- | --- |
| `RESEND_API_KEY` | Resend gönderim API anahtarı |
| `RESEND_FROM_EMAIL` | Resend'de doğrulanmış alan adına ait gönderen e-posta adresi |
| `CONTACT_TO_EMAIL` | Randevu bildirimlerinin ulaşacağı e-posta adresi |

Adresleri `ad@alanadi.com` biçiminde, görünen ad eklemeden yazın. Gönderen alan adının DNS kayıtlarını Resend panelinden doğrulayın. Ziyaretçinin e-postası varsa `reply_to` olarak kullanılır; bildirimin alıcısı yalnızca sunucu ayarından belirlenir.

API anahtarını `PUBLIC_` önekiyle tanımlamayın. `.env` Git tarafından yok sayılır; `.env.example` yalnızca boş ayarları içerir. Ayarlar eksikse form gönderim yapmaz ve kullanıcıya başka bir iletişim kanalı önerir. Yerelde ayarları değiştirdikten sonra geliştirme sunucusunu yeniden başlatın.

## Yayınlama ve test

```sh
npm test
npm run build
```

Dağıtım `@astrojs/vercel` adaptörüyle hazırlanır. Sayfalar statik olarak, `/api/randevu` ise Vercel Function olarak yayınlanır.

1. GitHub reposunu Vercel'e bağlayın; Framework Preset olarak **Astro** seçin.
2. Build Command: `npm run build`. Output Directory ayarını Astro varsayılanında bırakın.
3. **Settings → Environment Variables** bölümüne `RESEND_API_KEY`, `RESEND_FROM_EMAIL` ve `CONTACT_TO_EMAIL` ekleyin. Production ortamını, önizlemede test edecekseniz Preview ortamını da seçin.
4. Ortam değişkenleri eklendikten veya değiştirildikten sonra yeniden deploy edin.

`.vercel/` yerel proje bağlantısı ve derleme çıktıları içerir; Git tarafından yok sayılır. Yerel geliştirme için `npm run dev -- --background` kullanılır; bağımsız Node sunucusu başlatmaya gerek yoktur.

Formda sunucu tarafı alan doğrulaması, aynı origin kontrolü, gizli bot alanı, gövde boyutu sınırı ve işlem başına/IP başına 10 dakikada 5 gönderim sınırı vardır. Vercel Function örnekleri arasında bellek paylaşılmaz ve soğuk başlangıçta sayaç sıfırlanır; bu sınır temel korumadır. Dağıtık trafik için Vercel Firewall veya ortak depolama kullanan bir hız sınırı uygulanmalıdır.

Testler gerçek e-posta göndermez; Resend yanıtlarını taklit eder. Anahtar ve doğrulanmış adresler eklendikten sonra gerçek teslimat ayrıca denenmelidir.
