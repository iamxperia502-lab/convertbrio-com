import type { HubDoc, HubUiStrings } from "./types";

export const hubsId: Record<"pdf" | "image" | "document" | "compress" | "ocr" | "ai", HubDoc> = {
  pdf: {
    name: "Alat PDF",
    h1: "Alat PDF: gabung, pisah, atur, kompres, dan konversi",
    seoTitle: "Alat PDF Gratis: Gabung, Pisah, Atur & Kompres | ConvertBrio",
    description:
      "Gabung, pisah, atur ulang, putar, buka kunci, kompres, dan konversi PDF secara online. Alat PDF ConvertBrio gratis tanpa daftar; file asli dihapus segera setelah dibaca.",
    intro: [
      "PDF dibuat agar tampilannya sama di mana saja, dan itu pula yang membuatnya sulit diubah. Alat-alat ini mencakup pekerjaan yang paling sering dihadapi: menggabungkan beberapa file, memisahkan halaman, menyusun halaman dengan urutan yang benar, memperkecil file agar muat di batas unggahan, serta mengubah halaman menjadi gambar atau gambar menjadi halaman.",
      "Semua alat berjalan lewat browser Anda, memproses file hingga 100 MB di server penyedia hosting kami (Vercel dan Supabase) secara otomatis tanpa tinjauan manusia, dan tidak memerlukan akun. File asli dihapus segera setelah dibaca untuk konversi, sedangkan hasilnya dibersihkan lewat pembersihan harian, biasanya dalam sekitar 24 jam. Pilih tugasnya di bawah, atau ikuti salah satu alur kerja jika pekerjaan Anda membutuhkan lebih dari satu langkah.",
    ],
    workflows: [
      {
        title: "Siapkan PDF untuk unggahan dengan batas ukuran",
        steps: [
          "Buang halaman yang tidak diperlukan dengan pengatur halaman visual.",
          "Perkecil hingga tepat di batas yang diizinkan formulir.",
        ],
      },
      {
        title: "Ubah foto dari ponsel menjadi satu PDF",
        steps: [
          "Gabungkan foto-foto itu menjadi satu PDF.",
          "Kecilkan ukurannya jika terlalu besar untuk dikirim lewat email.",
        ],
      },
      {
        title: "Susun laporan dari beberapa dokumen",
        steps: [
          "Gabungkan PDF terpisah secara berurutan.",
          "Tambahkan nomor halaman pada dokumen yang sudah jadi.",
        ],
      },
    ],
    chooser: {
      heading: "Alat PDF mana yang sebaiknya saya pakai?",
      body: "Gunakan Gabung PDF untuk menyatukan file dan Pisah PDF untuk memisahkan setiap halaman. Jika Anda hanya ingin mempertahankan sebagian halaman, mengubah urutannya, atau memperbaiki halaman yang miring, Pengatur Halaman PDF memungkinkan Anda melihat tiap halaman terlebih dahulu. Untuk batas ukuran, Kompres PDF menerapkan satu tingkat standar, sedangkan Kompres PDF ke Ukuran Tertentu bekerja menuju target KB atau MB dan melaporkan ukuran yang dicapai.",
    },
  },
  image: {
    name: "Alat Gambar",
    h1: "Alat gambar: konversi, ubah ukuran, kompres, dan rapikan foto",
    seoTitle: "Alat Gambar Gratis: Konversi, Ubah Ukuran & Kompres Foto | ConvertBrio",
    description:
      "Konversi HEIC, JPG, PNG, WEBP, dan AVIF, ubah ukuran ke piksel yang tepat, kompres ke target KB, potong, putar, dan hapus latar belakang. Alat gambar gratis tanpa daftar.",
    intro: [
      "Kebanyakan masalah gambar bermuara pada tiga hal: format tidak diterima, ukuran piksel salah, atau file terlalu besar. Alat-alat di sini menyelesaikan masing-masing secara langsung, baik saat menyiapkan foto profil, mengisi formulir pendaftaran, maupun menerbitkan gambar di situs web.",
      "Konversi mempertahankan resolusi asli, dan alat kompresi bekerja menuju ukuran yang Anda tentukan. Tidak ada watermark. File asli dihapus segera setelah dibaca, dan hasilnya dibersihkan lewat pembersihan harian, biasanya dalam sekitar 24 jam.",
    ],
    workflows: [
      {
        title: "Siapkan foto untuk formulir pendaftaran",
        steps: [
          "Ubah ukuran ke piksel dan batas KB yang diminta formulir.",
          "Hapus data lokasi dan kamera sebelum mengunggah.",
        ],
      },
      {
        title: "Buka foto iPhone di perangkat mana pun",
        steps: [
          "Konversi foto HEIC menjadi JPG.",
          "Kompres jika file masih terlalu besar untuk dikirim.",
        ],
      },
      {
        title: "Optimalkan sekumpulan gambar untuk situs web",
        steps: [
          "Konversi ke format modern seperti WEBP.",
          "Kompres seluruh kumpulan gambar ke satu ukuran target.",
        ],
      },
    ],
    chooser: {
      heading: "Alat gambar mana yang sebaiknya saya pakai?",
      body: "Gunakan Konverter Gambar saat masalahnya ada pada format, Ubah Ukuran Gambar untuk dimensi piksel, dan Kompres Gambar saat yang penting hanya ukuran file. Ubah Ukuran Foto & Tanda Tangan mengatur piksel yang tepat sekaligus batas KB dalam satu langkah, yang paling dibutuhkan formulir pendaftaran. Untuk banyak file sekaligus, gunakan Kompresor Gambar Massal.",
    },
  },
  document: {
    name: "Alat Dokumen",
    h1: "Alat dokumen: Word, Excel, PowerPoint, PDF, dan teks",
    seoTitle: "Alat Dokumen Gratis: Word, Excel, PowerPoint & PDF | ConvertBrio",
    description:
      "Konversi Word, Excel, dan PowerPoint dari dan ke PDF, kompres file Office, ekstrak teks dari hasil pindai, dan hapus metadata tersembunyi. Alat dokumen gratis tanpa daftar.",
    intro: [
      "Dokumen berpindah di antara orang-orang yang memakai perangkat lunak berbeda. Alat-alat ini menerjemahkan antara Word, Excel, PowerPoint, dan PDF, memperkecil file Office yang terlalu besar untuk dikirim lewat email, mengambil teks dari hasil pindai, dan menghapus keterangan penulis yang diam-diam terbawa di dalam file.",
      "Setiap alat menjelaskan apa yang dipertahankan dan apa yang tidak bisa, misalnya bahwa mengubah PDF kembali ke Word tidak dapat membangun ulang tata letak yang rumit dengan sempurna. File dienkripsi saat dikirim; file asli dihapus segera setelah dibaca, dan hasilnya dibersihkan lewat pembersihan harian, biasanya dalam sekitar 24 jam.",
    ],
    workflows: [
      {
        title: "Kirim dokumen Word yang tidak bisa diedit",
        steps: [
          "Konversi ke PDF agar tata letaknya tetap.",
          "Hapus keterangan penulis dan perusahaan terlebih dahulu jika perlu.",
        ],
      },
      {
        title: "Edit dokumen yang hanya Anda miliki dalam bentuk pindaian",
        steps: [
          "Ubah hasil pindai menjadi file Word yang bisa diedit.",
          "Simpan versi yang sudah dikoreksi sebagai PDF.",
        ],
      },
      {
        title: "Kirim presentasi yang berat lewat email",
        steps: ["Kompres PowerPoint ke ukuran yang muat di email."],
      },
    ],
    chooser: {
      heading: "PDF ke Word atau Pindai ke Word?",
      body: "Jika Anda bisa memilih kata-kata di PDF Anda, gunakan PDF ke Word, yang mempertahankan format sedekat mungkin. Jika PDF-nya berupa gambar sebuah halaman, tidak ada teks untuk dikonversi sampai dikenali, jadi gunakan Pindai ke Word.",
    },
  },
  compress: {
    name: "Alat Kompresi",
    h1: "Alat kompresi: perkecil ukuran file PDF, gambar, dan Office",
    seoTitle: "Alat Kompresi File Gratis: PDF, Gambar & Office | ConvertBrio",
    description:
      "Perkecil PDF, foto, file Word, dan PowerPoint agar muat di email atau batas unggahan, termasuk target ukuran KB dan MB. Gratis, tanpa daftar.",
    intro: [
      "Formulir unggahan, sistem email, dan situs web semuanya menetapkan batas ukuran, dan cara yang tepat untuk memperkecil file bergantung pada isinya. Foto dikompres dengan menurunkan kualitas atau dimensi, PDF mengecil terutama dengan mengodekan ulang gambar di dalamnya, dan file Office menyimpan media tertanam yang bisa dikecilkan secara terpisah.",
      "Jika sebuah alat bekerja menuju target, alat itu mengukur hasil sebenarnya dan memberi tahu ukuran yang dicapai, termasuk saat target tidak bisa dipenuhi tanpa merusak file.",
    ],
    workflows: [
      {
        title: "Muatkan PDF hasil pindai di bawah batas portal",
        steps: [
          "Kompres PDF ke ukuran yang diizinkan portal.",
          "Jika masih terlalu besar, pisahkan menjadi beberapa bagian.",
        ],
      },
      {
        title: "Perkecil banyak foto untuk satu kali unggah",
        steps: ["Kompres seluruh kumpulan foto ke satu target KB."],
      },
    ],
    chooser: {
      heading: "Seberapa kecil file bisa dikompres?",
      body: "Itu tergantung isinya. PDF dan PowerPoint yang banyak foto bisa mengecil banyak, sedangkan PDF yang hanya berisi teks sudah ringkas. Memperkecil ke target yang sangat kecil mengorbankan kualitas, jadi mulailah dari batas yang benar-benar Anda hadapi, bukan angka sekecil mungkin.",
    },
  },
  ocr: {
    name: "Alat OCR",
    h1: "Alat OCR: ekstrak teks dari hasil pindai, foto, dan PDF",
    seoTitle: "Alat OCR Gratis: Gambar ke Teks, Pindai ke Word, OCR PDF | ConvertBrio",
    description:
      "Gunakan OCR untuk menyalin teks dari gambar, mengubah hasil pindai menjadi file Word yang bisa diedit, atau membuat PDF hasil pindai bisa dicari. Gratis, tanpa daftar, dengan catatan akurasi yang jujur.",
    intro: [
      "Hasil pindai atau foto berisi teks hanyalah gambar. Pengenalan karakter optik (OCR) membaca huruf di dalamnya dan memberi Anda teks sungguhan yang bisa dipilih. Alat mana yang dipakai bergantung pada hasil yang Anda inginkan: teks biasa yang bisa disalin, file Word yang bisa diedit, atau PDF yang sama tetapi bisa dicari.",
      "OCR akurat pada teks cetak yang bersih dan beresolusi tinggi, tetapi jauh lebih lemah pada tulisan tangan, hasil pindai berkualitas rendah, dan tabel yang rumit. Setiap halaman alat menjelaskan apa yang bisa diharapkan.",
    ],
    workflows: [
      {
        title: "Ubah surat hasil pindai menjadi dokumen yang bisa diedit",
        steps: [
          "Konversi hasil pindai ke Word.",
          "Periksa teksnya, lalu simpan sebagai PDF.",
        ],
      },
      {
        title: "Buat arsip hasil pindai bisa dicari",
        steps: [
          "Jalankan OCR untuk menambahkan lapisan teks pada setiap PDF.",
          "Perkecil PDF yang bisa dicari itu untuk penyimpanan.",
        ],
      },
    ],
    chooser: {
      heading: "Alat OCR mana yang sebaiknya saya pakai?",
      body: "Gambar ke Teks cocok untuk foto atau tangkapan layar saat Anda hanya ingin kata-katanya, dan teks ditampilkan di halaman untuk disalin. Pindai ke Word menghasilkan DOCX yang bisa diedit dari halaman pindaian atau PDF. OCR PDF mempertahankan halaman asli persis seperti tampilannya dan menambahkan lapisan teks tak terlihat sehingga PDF menjadi bisa dicari.",
    },
  },
  ai: {
    name: "Alat AI",
    h1: "Alat AI: tingkatkan, perbesar, dan potong foto",
    seoTitle: "Alat Foto AI Gratis: Tingkatkan, Perbesar, Hapus Latar | ConvertBrio",
    description:
      "Tingkatkan, perbesar, dan potong objek foto dengan AI, atau buat pas foto paspor. Gratis, tanpa daftar, dengan catatan jujur tentang apa yang bisa dan tidak bisa dilakukan tiap alat.",
    intro: [
      "Alat-alat ini memakai model pembelajaran mesin untuk pekerjaan yang sulit dilakukan manual: mempertajam foto yang kusam, memperbesar gambar kecil tanpa membuatnya pecah, dan memisahkan orang dari latar belakangnya.",
      "Hasil AI bergantung pada masukannya. Foto yang jelas menghasilkan hasil yang jelas, dan tidak ada alat di sini yang bisa memulihkan detail yang memang tidak pernah terekam. Setiap halaman menjelaskan di mana alat bekerja dengan baik dan di mana tidak.",
    ],
    workflows: [
      {
        title: "Perbaiki foto yang kecil dan kusam",
        steps: [
          "Seimbangkan warna dan ketajaman.",
          "Perbesar untuk dicetak atau ditampilkan di layar yang lebih besar.",
        ],
      },
      {
        title: "Buat gambar produk atau profil yang bersih",
        steps: [
          "Hapus latar belakangnya.",
          "Kompres hasilnya untuk web.",
        ],
      },
    ],
    chooser: {
      heading: "Peningkat atau pembesar?",
      body: "Peningkat Gambar AI memperbaiki warna dan ketajaman pada ukuran yang sama. Pembesar Gambar AI menambah dimensi pikselnya. Jika foto Anda kecil sekaligus kusam, tingkatkan dulu, lalu perbesar.",
    },
  },
};

export const hubUiId: HubUiStrings = {
  allTemplate: "Semua {name}",
  workflows: "Alur kerja yang disarankan",
  guides: "Panduan",
  otherCategories: "Kategori alat lainnya",
  allTools: "Semua alat",
  home: "Beranda",
  toolLibrary: "Pustaka alat",
  allToolsIntro: "Semua alat ConvertBrio, dikelompokkan menurut kategori. Alat baru ditambahkan secara berkala.",
  categoriesLabel: "Kategori alat",
  categoryGuide: "Panduan kategori",
  moreTools: "Alat lainnya",
  moreToolsDesc: "Alat pendamping di properti ConvertBrio lainnya.",
  categoryDescs: {
    convert: "Ubah file apa pun dari satu format ke format lain.",
    compress: "Perkecil ukuran file tanpa mengorbankan kualitas.",
    pdf: "Gabung, pisah, edit, dan amankan dokumen PDF.",
    image: "Konversi, ubah ukuran, potong, dan rapikan gambar.",
    document: "Pindahkan konten antara Word, Excel, PowerPoint, dan PDF.",
    ai: "Tingkatkan dan pulihkan gambar dengan model AI.",
  },
};
