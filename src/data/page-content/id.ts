import type { LocalePages, AboutDoc, StaticPageDoc, ContactDoc, BlogIndexDoc } from "./types";
import { hubsId, hubUiId } from "./id-hubs";

const about: AboutDoc = {
  seoTitle: `Tentang Kami | ConvertBrio`,
  title: `Tentang Kami`,
  description: `ConvertBrio membuat alat konversi file yang cepat, privat, dan sederhana untuk gambar, PDF, dan dokumen.`,
  eyebrow: `Tentang ConvertBrio`,
  heading: `Alat file yang tidak merepotkan`,
  intro: `ConvertBrio berawal dari ide sederhana: mengonversi file seharusnya tidak perlu memasang aplikasi, membuat akun, atau menunggu antrean.`,
  values: [
    {
      title: `Cepat sejak awal`,
      desc: `Setiap alat dirancang untuk memproses file dalam hitungan detik, bukan menit, berapa pun antreannya.`,
    },
    {
      title: `Privat sejak dirancang`,
      desc: `File dienkripsi dan dihapus secara otomatis. Kami tidak pernah menjual atau memeriksa data Anda.`,
    },
    {
      title: `AI yang benar-benar berguna`,
      desc: `Alat AI yang menyelesaikan masalah nyata, seperti peningkatan kualitas, restorasi, dan pembersihan, bukan sekadar gimik.`,
    },
  ],
  blocks: [
    {
      heading: `Pendekatan kami`,
      paragraphs: [
        `Kami berfokus pada alat yang memang dipakai orang setiap hari, yaitu konversi gambar, pengeditan PDF, pemformatan dokumen, dan kompresi, lalu membuat masing-masing alat itu cepat, akurat, dan gratis dipakai. Saat ini {liveToolCount} alat sudah aktif, dan akan terus bertambah secara berkala. Di mana AI benar-benar memperbaiki hasil, misalnya untuk meningkatkan kualitas foto beresolusi rendah, kami memakainya. Di mana AI tidak membantu, kami tidak memaksakannya.`,
        `ConvertBrio dibangun dan dijalankan secara mandiri oleh Subham Sharma, yang berbasis di India. Jika Anda punya masukan, kekhawatiran soal keamanan, atau alat yang ingin Anda lihat hadir, silakan <a href="/contact">hubungi kami</a> atau baca cara kami menangani file Anda di <a href="/privacy">Kebijakan Privasi</a> kami.`,
      ],
    },
  ],
};

const privacy: StaticPageDoc = {
  seoTitle: `Kebijakan Privasi | ConvertBrio`,
  title: `Kebijakan Privasi`,
  description: `Cara ConvertBrio mengumpulkan, menggunakan, dan melindungi data serta file Anda, termasuk berapa lama unggahan disimpan dan kapan dihapus.`,
  eyebrow: `Terakhir diperbarui 23 September 2026`,
  heading: `Kebijakan Privasi`,
  blocks: [
    {
      paragraphs: [
        `ConvertBrio (“kami”) menyediakan alat online untuk mengonversi, mengompresi, dan meningkatkan kualitas file. ConvertBrio dioperasikan secara mandiri oleh Subham Sharma, yang berbasis di India. Kebijakan ini menjelaskan informasi apa yang kami kumpulkan, bagaimana kami menggunakannya, dan pilihan yang Anda miliki. Kebijakan ini berlaku untuk convertbrio.com dan setiap alat di dalamnya.`,
      ],
    },
    {
      heading: `1. Siapa kami`,
      paragraphs: [
        `ConvertBrio dioperasikan secara mandiri oleh Subham Sharma dari India. Untuk pertanyaan privasi, permintaan koreksi, atau permintaan terkait hak Anda, hubungi <a href="mailto:privacy@convertbrio.com">privacy@convertbrio.com</a> atau gunakan <a href="/contact">halaman kontak</a> kami.`,
      ],
    },
    {
      heading: `2. Informasi yang kami kumpulkan`,
      paragraphs: [`Kami mengumpulkan:`],
      list: [
        `<strong>Informasi akun</strong> yang Anda berikan, seperti nama dan alamat email.`,
        `<strong>Kiriman formulir kontak</strong>, termasuk pesan dan email balasan yang Anda berikan.`,
        `<strong>Data teknis</strong> seperti alamat IP, jenis browser, jenis perangkat, dan sistem operasi, yang dikumpulkan secara otomatis untuk menjalankan layanan dengan aman dan mendiagnosis masalah.`,
        `<strong>Data penggunaan</strong>, misalnya alat dan halaman mana yang Anda kunjungi serta cara Anda berinteraksi dengannya.`,
        `<strong>Log keamanan</strong> yang dipakai untuk mendeteksi penyalahgunaan, membatasi laju permintaan, dan menjaga layanan tetap andal.`,
      ],
    },
    {
      heading: `3. File yang Anda unggah`,
      paragraphs: [
        `File yang Anda unggah dikirim melalui koneksi terenkripsi (HTTPS/TLS). File asli Anda dikirim langsung ke penyimpanan Vercel Blob yang privat, dibaca dari sana satu kali untuk melakukan konversi, kompresi, atau peningkatan kualitas yang Anda minta. File asli Anda dihapus segera setelah dibaca untuk konversi. Hasil konversi ditulis terpisah ke penyimpanan sementara (Supabase) agar tetap tersedia untuk Anda unduh, dan dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam. File diproses di server penyedia hosting kami (Vercel dan Supabase), secara otomatis, tanpa peninjauan oleh manusia. Kami tidak meninjau secara manual, membagikan, atau menggunakan isi file Anda untuk tujuan apa pun selain menyampaikan hasil yang Anda minta. Hal ini juga berlaku untuk alat AI seperti penambah kualitas gambar, upscaler, dan penghapus latar belakang: file yang diunggah hanya digunakan untuk menghasilkan keluaran Anda dan tidak pernah dipakai untuk melatih atau meningkatkan model apa pun.`,
      ],
    },
    {
      heading: `4. Cara kami menggunakan informasi`,
      paragraphs: [
        `Kami menggunakan informasi yang terkumpul untuk mengoperasikan dan meningkatkan ConvertBrio, memberikan dukungan pelanggan, memantau penyalahgunaan dan insiden keamanan, memahami penggunaan produk secara agregat, serta memenuhi kewajiban hukum. Kami tidak menjual informasi pribadi Anda.`,
      ],
    },
    {
      heading: `5. Cookie dan teknologi serupa`,
      paragraphs: [
        `Kami dan penyedia layanan kami menggunakan cookie dan teknologi serupa (seperti penyimpanan lokal) untuk tujuan berikut:`,
      ],
      list: [
        `<strong>Esensial</strong>: menjaga Anda tetap masuk dan mengingat preferensi dasar seperti tema.`,
        `<strong>Analitik</strong>: memahami penggunaan secara agregat melalui Google Analytics dan Microsoft Clarity, agar kami tahu alat mana yang berguna dan di mana produk bermasalah.`,
        `<strong>Iklan</strong>: jika dan ketika kami menampilkan iklan (misalnya melalui Google AdSense), Google dan vendor pihak ketiga lainnya menggunakan cookie, termasuk cookie iklan Google, untuk menayangkan iklan berdasarkan kunjungan Anda sebelumnya ke situs ini atau situs lain. Cookie ini memungkinkan Google dan mitranya menayangkan iklan yang dipersonalisasi untuk Anda. Anda dapat menolak iklan yang dipersonalisasi dengan mengunjungi <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Setelan Iklan Google</a>, atau secara umum di <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">aboutads.info</a>.`,
      ],
    },
    {
      paragraphs: [
        `Jika diwajibkan (termasuk untuk pengunjung di EEA, Inggris, dan Swiss), kami meminta persetujuan Anda sebelum memasang cookie analitik atau iklan yang tidak esensial, melalui banner persetujuan yang tampil saat kunjungan pertama Anda. Anda dapat mengubah pilihan kapan saja melalui tautan “Kelola preferensi cookie” di footer setiap halaman. Menolak cookie yang tidak esensial tidak menghalangi Anda menggunakan alat ConvertBrio.`,
      ],
    },
    {
      heading: `6. Layanan pihak ketiga yang kami gunakan`,
      paragraphs: [
        `ConvertBrio mengandalkan penyedia layanan berikut, yang masing-masing hanya menerima informasi yang diperlukan untuk menjalankan fungsinya:`,
      ],
      list: [
        `<strong>Vercel</strong>: menjadi host situs, menjalankan konversi file di servernya (konversi tidak terjadi secara lokal di browser Anda), dan menyimpan file asli yang Anda unggah untuk sementara di penyimpanan Vercel Blob yang privat hingga dibaca untuk konversi lalu dihapus.`,
        `<strong>Supabase</strong>: menyimpan akun dan menyimpan sementara hasil konversi file Anda hingga dihapus secara otomatis.`,
        `<strong>Google Analytics &amp; Google Tag Manager</strong>: analitik penggunaan agregat, sesuai pilihan persetujuan cookie Anda.`,
        `<strong>Microsoft Clarity</strong>: analitik penggunaan agregat dan wawasan sesi, sesuai pilihan persetujuan cookie Anda.`,
        `<strong>Google AdSense</strong>: periklanan, setelah diaktifkan di situs, sesuai pilihan persetujuan cookie Anda.`,
      ],
    },
    {
      paragraphs: [
        `Kami tidak menjual atau membagikan informasi ini kepada penyedia mana pun di luar yang dibutuhkan untuk menjalankan fungsi yang tercantum.`,
      ],
    },
    {
      heading: `7. Dasar hukum dan hak Anda (EEA, Inggris, dan Swiss)`,
      paragraphs: [
        `Jika GDPR atau UK GDPR berlaku, kami memproses informasi Anda berdasarkan: pelaksanaan kontrak kami dengan Anda (menyediakan alat yang Anda gunakan), kepentingan sah kami (keamanan, pencegahan penipuan, dan peningkatan layanan), serta persetujuan Anda (cookie analitik dan iklan). Anda berhak mengakses, memperbaiki, menghapus, membatasi, atau menolak pemrosesan informasi pribadi Anda oleh kami, menerima salinannya dalam format yang dapat dipindahkan, dan menarik persetujuan kapan saja tanpa memengaruhi pemrosesan yang dilakukan sebelum penarikan. Anda juga berhak mengajukan keluhan kepada otoritas pengawas perlindungan data setempat. Untuk menggunakan hak-hak ini, hubungi <a href="mailto:privacy@convertbrio.com">privacy@convertbrio.com</a>.`,
      ],
    },
    {
      heading: `8. Hak privasi negara bagian AS`,
      paragraphs: [
        `Jika Anda penduduk negara bagian AS yang memiliki undang-undang privasi komprehensif (seperti California, Colorado, Connecticut, Virginia, atau lainnya), Anda mungkin berhak mengetahui, mengakses, menghapus, atau mengoreksi informasi pribadi Anda, serta menolak penjualan atau “pembagian” informasi tersebut (termasuk untuk iklan perilaku lintas konteks, yang di sebagian negara bagian dianggap mencakup cookie iklan). Kami tidak menjual informasi pribadi. Jika kami menampilkan iklan melalui Google AdSense, hal itu dapat dianggap sebagai “pembagian” menurut hukum sebagian negara bagian; Anda dapat menolaknya kapan saja melalui tautan preferensi cookie di footer, halaman <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Setelan Iklan Google</a>, atau dengan mengirim sinyal Global Privacy Control (GPC) dari browser Anda, yang kami hormati sebagai permintaan penolakan. Untuk menggunakan hak-hak ini, hubungi <a href="mailto:privacy@convertbrio.com">privacy@convertbrio.com</a>.`,
      ],
    },
    {
      heading: `9. Transfer data internasional`,
      paragraphs: [
        `ConvertBrio dioperasikan dari India dan menggunakan penyedia layanan (termasuk Vercel dan Supabase) yang dapat memproses data di negara lain, termasuk Amerika Serikat. Ketika kami mentransfer informasi pribadi secara internasional, kami mengandalkan perlindungan kontraktual dan teknis dari penyedia tersebut untuk menjaganya secara konsisten dengan kebijakan ini.`,
      ],
    },
    {
      heading: `10. Penyimpanan data`,
      paragraphs: [
        `File asli yang Anda unggah dihapus segera setelah dibaca untuk konversi. Hasil konversi dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam, terlepas dari apakah Anda mengunduh hasilnya atau tidak. File diproses di server penyedia hosting kami (Vercel dan Supabase), secara otomatis, tanpa peninjauan oleh manusia. Informasi akun disimpan selama akun Anda aktif, ditambah jangka waktu terbatas sesudahnya untuk memenuhi kewajiban hukum atau keamanan. Log keamanan dan penggunaan hanya disimpan selama diperlukan untuk tujuan yang dijelaskan di atas, setelah itu dihapus atau dianonimkan.`,
      ],
    },
    {
      heading: `11. Privasi anak`,
      paragraphs: [
        `ConvertBrio ditujukan bagi pengguna berusia 18 tahun ke atas dan tidak diperuntukkan bagi anak-anak. Kami tidak dengan sengaja mengumpulkan informasi pribadi dari siapa pun yang berusia di bawah 18 tahun. Jika Anda yakin seorang anak telah memberikan informasi pribadi kepada kami, hubungi <a href="mailto:privacy@convertbrio.com">privacy@convertbrio.com</a> dan kami akan menghapusnya.`,
      ],
    },
    {
      heading: `12. Perubahan pada kebijakan ini`,
      paragraphs: [
        `Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Jika ada perubahan yang material, kami akan memperbarui tanggal “terakhir diperbarui” di bagian atas halaman ini dan, bila perlu, memberikan pemberitahuan tambahan.`,
      ],
    },
    {
      heading: `13. Hubungi kami`,
      paragraphs: [
        `Pertanyaan tentang kebijakan ini, atau permintaan untuk menggunakan hak privasi Anda, dapat dikirim ke <a href="mailto:privacy@convertbrio.com">privacy@convertbrio.com</a> atau melalui <a href="/contact">halaman kontak</a> kami.`,
      ],
    },
  ],
};

const terms: StaticPageDoc = {
  seoTitle: `Ketentuan Layanan | ConvertBrio`,
  title: `Ketentuan Layanan`,
  description: `Ketentuan yang mengatur penggunaan alat dan layanan file gratis ConvertBrio, termasuk penggunaan yang dapat diterima, batasan, dan tanggung jawab Anda.`,
  eyebrow: `Terakhir diperbarui 25 Agustus 2026`,
  heading: `Ketentuan Layanan`,
  blocks: [
    {
      paragraphs: [
        `Ketentuan Layanan ini (“Ketentuan”) mengatur akses dan penggunaan Anda atas ConvertBrio. Dengan menggunakan alat kami, Anda menyetujui Ketentuan ini.`,
      ],
    },
    {
      heading: `1. Menggunakan ConvertBrio`,
      paragraphs: [
        `Anda boleh menggunakan ConvertBrio untuk mengonversi, mengompresi, dan meningkatkan kualitas file yang Anda miliki atau berhak Anda proses. Anda harus berusia minimal 18 tahun untuk menggunakan layanan ini.`,
      ],
    },
    {
      heading: `2. Penggunaan yang dapat diterima`,
      paragraphs: [
        `Anda setuju untuk tidak mengunggah konten yang melanggar hukum, melanggar hak pihak lain, atau berbahaya, tidak mencoba mengganggu layanan, dan tidak menggunakan alat otomatis untuk menyalahgunakan batas laju tanpa izin tertulis dari kami.`,
      ],
    },
    {
      heading: `3. Konten Anda`,
      paragraphs: [
        `Anda tetap memegang seluruh hak atas file yang Anda unggah. Kami tidak mengklaim kepemilikan atas konten Anda dan hanya memprosesnya untuk menyampaikan konversi atau peningkatan kualitas yang Anda minta.`,
      ],
    },
    {
      heading: `4. Layanan berbayar`,
      paragraphs: [
        `ConvertBrio saat ini tidak menawarkan langganan berbayar. Jika layanan berbayar diperkenalkan, harga, frekuensi penagihan, ketentuan perpanjangan, dan syarat pembatalannya akan ditampilkan sebelum pembelian. Ketentuan ini akan diperbarui sebelum layanan berbayar tersedia.`,
      ],
    },
    {
      heading: `5. Ketersediaan layanan`,
      paragraphs: [
        `Kami berupaya menjaga ConvertBrio tetap tersedia dan andal, tetapi tidak menjamin akses tanpa gangguan. Kami dapat mengubah atau menghentikan fitur dengan pemberitahuan yang wajar.`,
      ],
    },
    {
      heading: `6. Penafian & batasan tanggung jawab`,
      paragraphs: [
        `ConvertBrio disediakan “apa adanya” tanpa jaminan jenis apa pun. Sejauh diizinkan oleh hukum, ConvertBrio tidak bertanggung jawab atas kerugian tidak langsung atau konsekuensial yang timbul dari penggunaan layanan oleh Anda.`,
      ],
    },
    {
      heading: `7. Perubahan pada Ketentuan ini`,
      paragraphs: [
        `Kami dapat memperbarui Ketentuan ini dari waktu ke waktu. Dengan tetap menggunakan ConvertBrio setelah perubahan berlaku, Anda dianggap menerima Ketentuan yang telah direvisi.`,
      ],
    },
    {
      heading: `8. Hubungi kami`,
      paragraphs: [
        `Pertanyaan tentang Ketentuan ini dapat dikirim ke <a href="mailto:legal@convertbrio.com">legal@convertbrio.com</a> atau melalui <a href="/contact">halaman kontak</a> kami.`,
      ],
    },
  ],
};

const trust: StaticPageDoc = {
  seoTitle: `Kepercayaan & Keamanan | ConvertBrio`,
  title: `Kepercayaan & Keamanan`,
  description: `Cara ConvertBrio menangani file Anda, laporan penyalahgunaan atau masalah keamanan, dan koreksi atas panduan yang diterbitkan.`,
  eyebrow: `Terakhir diperbarui 23 September 2026`,
  heading: `Kepercayaan & Keamanan`,
  blocks: [
    {
      paragraphs: [
        `ConvertBrio dioperasikan secara mandiri oleh Subham Sharma, yang berbasis di India. Halaman ini merangkum cara kami menangani file Anda, cara melaporkan penyalahgunaan atau masalah keamanan, dan cara kami menangani koreksi atas panduan yang diterbitkan. Untuk rincian hukum selengkapnya, lihat <a href="/privacy">Kebijakan Privasi</a> dan <a href="/terms">Ketentuan Layanan</a> kami.`,
      ],
    },
    {
      heading: `Cara file Anda ditangani`,
      paragraphs: [
        `File dikirim melalui koneksi terenkripsi (HTTPS/TLS). Setiap konversi berjalan sebagai proses otomatis: tidak ada orang yang membuka, meninjau, atau membaca isi file Anda secara manual kapan pun, termasuk untuk alat AI seperti penambah kualitas gambar, upscaler, dan penghapus latar belakang, di mana unggahan hanya dipakai untuk menghasilkan keluaran Anda dan tidak pernah untuk melatih atau meningkatkan model apa pun.`,
        `File asli Anda dihapus segera setelah dibaca untuk konversi. Hasil konversi dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam. File diproses di server penyedia hosting kami (Vercel dan Supabase), secara otomatis, tanpa peninjauan oleh manusia. File asli diunggah ke penyimpanan Vercel Blob yang privat dan dibaca dari sana satu kali, sedangkan hasil konversi ditahan terpisah di penyimpanan sementara agar dapat Anda unduh, terlepas dari apakah Anda mengunduhnya atau tidak.`,
      ],
    },
    {
      heading: `Melaporkan penyalahgunaan`,
      paragraphs: [
        `Layanan unggah file bisa disalahgunakan: untuk memproses konten yang tidak berhak diproses seseorang, atau untuk bentuk penyalahgunaan lainnya. Jika Anda yakin file yang diproses melalui ConvertBrio mengandung konten ilegal, pelanggaran hak cipta, atau bentuk penyalahgunaan lain, laporkan melalui <a href="/contact">formulir kontak kami</a> atau <a href="mailto:abuse@convertbrio.com">abuse@convertbrio.com</a>. Kami tidak menampilkan nama file atau hasil unggahan secara publik, dan kami meninjau laporan penyalahgunaan secara langsung, bukan melalui antrean otomatis.`,
        `Alat seperti Buka Kunci PDF dibuat hanya untuk menghapus pembatasan tingkat pemilik dari dokumen yang memang berhak Anda edit. Lihat <a href="/tools/unlock-pdf">alat Buka Kunci PDF</a> dan panduan kami tentang <a href="/blog/pdf-password-restrictions-explained">pembatasan kata sandi PDF</a> untuk mengetahui persis apa yang dicakup dan tidak dicakup. Alat ini tidak dibuat atau dimaksudkan untuk menembus perlindungan pada file yang bukan milik Anda atau yang tidak berwenang Anda ubah.`,
      ],
    },
    {
      heading: `Melaporkan masalah keamanan`,
      paragraphs: [
        `Jika Anda menemukan celah keamanan di ConvertBrio, mulai dari masalah kontrol akses hingga cara untuk melihat data pengguna lain, mohon laporkan ke <a href="mailto:security@convertbrio.com">security@convertbrio.com</a> atau melalui <a href="/contact">formulir kontak</a> sebelum mengungkapkannya secara publik. Sebagai proyek yang dijalankan secara mandiri, waktu respons kami tidak akan sebanding dengan tim keamanan perusahaan besar, tetapi setiap laporan dibaca dan ditanggapi dengan serius.`,
      ],
    },
    {
      heading: `Koreksi atas panduan dan artikel`,
      paragraphs: [
        `Artikel di <a href="/blog">blog ConvertBrio</a> ditulis agar akurat dan praktis, dan ditinjau sebelum diterbitkan. Jika Anda menemukan kesalahan fakta, klaim yang sudah usang, atau hal yang tidak lagi sesuai dengan cara kerja alat sebenarnya, beri tahu kami melalui <a href="/contact">formulir kontak</a>: koreksi dilakukan langsung di artikel, bukan diam-diam, dan tanggal yang tertera pada halaman mencerminkan kapan halaman itu terakhir diperbarui secara substansial.`,
      ],
    },
  ],
};

const contact: ContactDoc = {
  seoTitle: `Kontak | ConvertBrio`,
  title: `Kontak`,
  description: `Hubungi tim ConvertBrio untuk dukungan, masukan, atau pertanyaan kemitraan.`,
  eyebrow: `Kontak`,
  heading: `Hubungi kami`,
  intro: `Ada pertanyaan, masukan, atau permintaan alat baru? Kami membaca setiap pesan.`,
  supportHeading: `Dukungan umum`,
  businessHeading: `Bisnis & kemitraan`,
  responseNote: `Kami biasanya membalas dalam satu hari kerja.`,
  nameLabel: `Nama`,
  emailLabel: `Email`,
  subjectLabel: `Subjek`,
  messageLabel: `Pesan`,
  sendLabel: `Kirim pesan`,
};

const blogIndex: BlogIndexDoc = {
  seoTitle: `Blog | ConvertBrio`,
  title: `Blog`,
  description: `Panduan praktis tentang format file, PDF, gambar, dan konversi dokumen: cara kerjanya, apa yang benar-benar memperkecil atau merusaknya, dan cara mengatasi masalah umum.`,
  eyebrow: `Blog`,
  heading: `Panduan seputar file, format, dan konversi`,
  intro: `Jawaban praktis untuk masalah file yang benar-benar sering dihadapi orang, tanpa basa-basi dan tanpa bertele-tele.`,
  englishNote: `Panduan di blog ini saat ini diterbitkan dalam bahasa Inggris.`,
  empty: `Belum ada artikel, silakan kembali lagi nanti.`,
  dateLocale: `id-ID`,
};

export const pagesId: LocalePages | undefined = {
  about,
  privacy,
  terms,
  trust,
  contact,
  blogIndex,
  hubs: hubsId,
  hubUi: hubUiId,
};
