import type { ToolContentEntry } from "../toolContent";

// Indonesian (id) long-form tool content. Links point to the /id/ tool pages.

export const toolContentId: Record<string, ToolContentEntry> = {
  "compress-pdf": {
    title: "Kompres PDF online: perkecil ukuran untuk email dan portal",
    intro: [
      "PDF besar, apalagi yang penuh halaman hasil scan atau foto resolusi tinggi, melewati batas lampiran email, lambat diunggah, dan ditolak portal yang membatasi ukuran file. Kompresor PDF ConvertBrio mengodekan ulang gambar yang tertanam di dokumen dengan kualitas dan resolusi yang lebih efisien serta menghapus metadata yang tidak perlu, sehingga halaman yang sama kembali dalam file yang lebih kecil.",
      "Gratis, berjalan di browser tanpa daftar dan tanpa watermark. Kompresi bersifat tanpa kehilangan untuk teks dan grafik vektor, keduanya tetap tajam, dan hanya memengaruhi foto serta scan yang tertanam, di mana penurunan kualitas kecil yang hampir selalu tak terlihat menghasilkan penurunan ukuran yang besar.",
    ],
    howTo: [
      { step: "Unggah PDF", detail: "Seret file ke kotak atau klik untuk menjelajah. Satu PDF per proses, hingga 100 MB." },
      {
        step: "Klik Kompres",
        detail:
          "ConvertBrio menemukan gambar yang tertanam, mengodekan ulang tiap gambar dengan kualitas lebih efisien, memperkecil yang lebih besar dari yang dibutuhkan, dan menghapus metadata yang tak terpakai.",
      },
      {
        step: "Unduh dan periksa ukurannya",
        detail:
          "PDF terkompresi terunduh otomatis. Buka untuk memastikan halaman tetap terbaca; jika masih di atas batas, lihat tips di bawah tentang scan dan pemisahan halaman.",
      },
    ],
    sections: [
      {
        heading: "Cara kerja kompresi PDF",
        body: [
          "Ukuran PDF hampir selalu didominasi satu hal: gambar yang tertanam. Teks, font, dan gambar vektor sangat kecil sebagai perbandingan. Karena itu kompresor ConvertBrio bekerja di tempat bebannya: ia menemukan gambar fotografis dalam file, mengodekannya ulang dengan JPEG yang lebih efisien, dan memperkecil skala gambar mana pun yang resolusinya jauh melebihi yang bisa dipakai layar atau printer.",
          "Semua yang bukan foto tetap utuh: teks tetap bisa dipilih dan tajam, logo dan grafik vektor menjaga tepi yang bersih, dan tata letak tidak bergeser. Metadata tanpa fungsi dibuang untuk memulihkan sedikit ruang.",
        ],
      },
      {
        heading: "PDF mana yang paling menyusut",
        body: "Penurunannya sepenuhnya tergantung pada apa yang membuat file Anda besar.",
        table: {
          headers: ["Jenis PDF", "Hasil umum"],
          rows: [
            ["Dokumen hasil scan (foto tiap halaman)", "Penurunan besar: sering 40–70% lebih kecil"],
            ["Laporan dengan foto atau tangkapan layar", "Penurunan sedang, tergantung jumlah gambar"],
            ["Presentasi yang diekspor ke PDF", "Penurunan sedang jika slide berisi foto"],
            ["PDF hanya teks (kontrak, ebook, faktur)", "Sedikit perubahan: sudah ringkas"],
            ["PDF dengan gambar PNG atau CMYK", "Terbatas: jenis gambar itu dilewati agar warna tidak berubah"],
          ],
        },
      },
      {
        heading: "Mengompres PDF tanpa kehilangan kualitas",
        body: "Untuk PDF yang hampir seluruhnya teks, kompresi praktis tanpa kehilangan: Anda tidak kehilangan apa pun yang terlihat. Untuk PDF hasil scan atau padat gambar, gambar-gambar dikodekan ulang, jadi ada kompromi kualitas nyata tapi kecil. Dalam praktik, halaman hasil scan yang dikompres dengan alat ini tetap terbaca di layar dan tercetak baik; perbedaannya hanya tampak saat Anda memperbesar sebuah foto secara kuat.",
      },
      {
        heading: "Membuat PDF di bawah ukuran tertentu (100 KB, 500 KB, 2 MB)",
        body: [
          "Alat ini melakukan satu lintasan kompresi yang efisien, bukan beberapa percobaan hingga angka pasti; jadi tidak menjamin nilai kilobyte yang presisi. Tapi beberapa hal membantu saat batasnya ketat:",
          "Jika PDF Anda dokumen hasil scan, biasanya turun banyak dalam satu lintasan, coba dulu. Jika masih lewat, pisah menjadi lebih sedikit halaman dengan alat Pisah PDF dan kompres tiap bagian, atau ekspor hanya halaman yang dibutuhkan. Jika bebannya berasal dari satu atau dua foto besar, mengompres gambar-gambar itu secara terpisah dengan Kompres Gambar (yang punya target ukuran pasti) sebelum menyusun ulang PDF memberi kontrol terbaik.",
        ],
      },
      {
        heading: "Kompres atau pisah",
        body: "Kompresi mengurangi bobot tiap halaman. Pemisahan mengurangi jumlah halaman. Jika PDF 30 MB Anda berisi 300 halaman teks, kompresi tidak banyak membantu: memisahnya menjadi beberapa bagian dengan Pisah PDF adalah jawabannya. Jika berisi 10 halaman hasil scan masing-masing 3 MB, kompresi adalah alat yang tepat. Keduanya saling melengkapi.",
      },
      {
        heading: "Privasi dan batasan",
        body: "PDF Anda dienkripsi saat diunggah, diproses otomatis di server ConvertBrio tanpa tinjauan manusia, dan baik asli maupun salinan terkompresi dihapus dalam 24 jam. Satu file per proses, hingga 100 MB, gratis, tanpa akun, tanpa watermark.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang cara mengompres ukuran PDF online.",
    faq: [
      {
        question: "Bagaimana cara kompres PDF online gratis?",
        answer:
          "Unggah dokumen ke alat Kompres PDF ConvertBrio dan klik Kompres. Ia mengodekan ulang gambar tertanam dan menghapus metadata yang tidak perlu untuk memperkecil file, yang terunduh otomatis: tanpa akun, tanpa watermark, tanpa email.",
      },
      {
        question: "Bisakah mengompres PDF tanpa kehilangan kualitas?",
        answer:
          "Teks dan konten vektor tidak pernah menurun: tetap tajam sempurna. Hanya foto dan scan yang dikodekan ulang, dengan penurunan kualitas kecil yang biasanya tak terlihat pada ukuran tampilan normal.",
      },
      {
        question: "Bagaimana membuat PDF lebih kecil untuk dikirim lewat email?",
        answer:
          "Jalankan sekali lewat alat ini. Sebagian besar batas email 20–25 MB; dokumen hasil scan atau laporan padat gambar biasanya turun jauh di bawah itu. Jika masih terlalu besar, pisah menjadi beberapa bagian dengan Pisah PDF.",
      },
      {
        question: "Bisakah kompres PDF ke tepat 100 KB atau 300 KB?",
        answer:
          "Alat ini tidak menargetkan ukuran pasti: ia melakukan satu lintasan efisien. Untuk batas ketat, kompres dulu PDF hasil scan di sini, kurangi jumlah halaman dengan Pisah PDF bila perlu, atau kompres gambar tertanam terbesar secara terpisah dengan Kompres Gambar, yang menerima target KB pasti.",
      },
      {
        question: "Kenapa PDF saya nyaris tidak mengecil?",
        answer:
          "Kemungkinan sudah ringkas: PDF yang hampir seluruhnya teks sangat sedikit yang bisa dihapus. File dengan scan resolusi tinggi atau foto tertanam mengalami penurunan terbesar.",
      },
      {
        question: "Apakah kompresi mengubah tata letak atau teks?",
        answer:
          "Tidak. Dimensi halaman, posisi teks, font, dan teks yang bisa dipilih semuanya dipertahankan. Hanya ukuran file yang berubah.",
      },
    ],
  },

  "compress-image": {
    title: "Kompresor gambar: perkecil ukuran tanpa kehilangan kualitas",
    intro: [
      "Entah untuk lolos batas unggah, mempercepat situs web, atau berhenti memenuhi penyimpanan, kompresor gambar ConvertBrio mengurangi ukuran file sambil menjaga gambar tetap tajam. Anda mengendalikan hasilnya: tetapkan tingkat kualitas, atau beri target ukuran pasti dalam kilobyte dan biarkan alat mencapainya.",
      "Mode target ukuran itulah alasan kebanyakan orang tiba di sini. Portal visa, situs seleksi CPNS, pendaftaran kampus, dan formulir pemerintah sering membatasi foto atau scan ke 100 KB, 200 KB, atau 50 KB. Alih-alih mengekspor pada kualitas tebak-tebakan sampai satu pas, Anda ketik batasnya sekali dan mengunduh file di bawahnya.",
    ],
    howTo: [
      { step: "Unggah gambar", detail: "Seret JPG, PNG, WEBP, HEIC, atau AVIF, hingga 100 MB. Foto HEIC dari iPhone diterima langsung." },
      {
        step: "Tetapkan target ukuran atau tingkat kualitas",
        detail:
          "Ketik ukuran maksimum dalam KB (misalnya 100). Kosongkan untuk memakai penggeser kualitas, di mana nilai lebih rendah menghasilkan file lebih kecil.",
      },
      {
        step: "Kompres",
        detail:
          "ConvertBrio mengodekan ulang gambar dan, dalam mode target, menyesuaikan kualitas, lalu dimensi jika kualitas belum cukup, sampai file muat di bawah batas Anda.",
      },
      { step: "Unduh hasilnya", detail: "File terkompresi terunduh otomatis. Periksa apakah dapat diterima; jika terlalu buram, naikkan targetnya dan ulangi." },
    ],
    sections: [
      {
        heading: "Cara kerja kompresi gambar",
        body: [
          "JPG, WEBP, dan AVIF adalah format lossy: mereka memperkecil file dengan membuang data gambar yang paling kecil kemungkinannya dirindukan mata manusia: gradasi warna halus, tekstur halus di area ramai, detail frekuensi tinggi. Menurunkan kualitas menyuruh encoder membuang lebih banyak, menghasilkan file lebih kecil dengan pelunakan dan artefak yang makin terlihat.",
          "PNG bersifat lossless dan mengompres dengan cara berbeda: ia hanya bisa mengemas piksel yang sama secara lebih efisien, jadi foto yang disimpan sebagai PNG nyaris tidak menyusut. Jika Anda mengunggah PNG ke kompresor dan ingin penurunan nyata, mengubahnya lebih dulu ke JPG atau WEBP (dengan Konverter Gambar) jauh lebih berpengaruh daripada kompresi PNG mana pun.",
        ],
      },
      {
        heading: "Memperkecil gambar ke ukuran pasti (seperti 100 KB)",
        body: "Ketik batas Anda di kolom target ukuran dan ConvertBrio bekerja mundur: ia menurunkan kualitas JPG/WEBP bertahap, memeriksa ulang ukuran setelah tiap langkah, dan hanya mengurangi dimensi jika kualitas terendah yang wajar pun masih melebihi. Hasilnya adalah versi terbesar dan tertajam dari gambar Anda yang masih muat di bawah batas.",
        list: [
          "Foto visa atau paspor: sering 100 KB, atau rentang 10 KB hingga 240 KB",
          "Portal pemerintah dan pajak: umumnya 100 KB atau 200 KB per scan",
          "Situs seleksi dan lamaran: sering 50 KB hingga 500 KB untuk foto atau sertifikat",
          "Avatar forum dan marketplace: umumnya sekitar 1–2 MB",
        ],
      },
      {
        heading: "Seberapa jauh bisa dikompres sebelum terlihat?",
        body: "Sebagian besar foto kehilangan 40–60% ukurannya tanpa perbedaan yang terlihat pada ukuran tampilan normal, karena data pertama yang dibuang encoder memang sulit dilihat. Setelah itu, area datar seperti langit mulai membentuk pita, dan tepi teks serta detail halus menjadi kasar. Metode praktisnya: mulai dekat ujung atas rentang kualitas dan turunkan bertahap sambil melihat gambar.",
      },
      {
        heading: "Kompres atau ubah ukuran",
        body: "Kompresi menjaga dimensi piksel yang sama dan mengurangi biaya tiap piksel. Pengubahan ukuran mengurangi jumlah piksel itu sendiri. Untuk foto yang besar baik dimensi maupun bobotnya, mengubah ukuran ke dimensi yang benar-benar dibutuhkan, lalu mengompres, menghasilkan file jauh lebih kecil dengan kehilangan yang lebih sedikit terlihat.",
      },
      {
        heading: "Privasi dan batasan",
        body: "Setiap unggahan dienkripsi dan dihapus otomatis dari server ConvertBrio dalam 24 jam, diunduh atau tidak. Alat ini mengompres satu gambar per proses, hingga 100 MB, gratis, tanpa akun dan tanpa watermark.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang mengompres dan memperkecil ukuran gambar.",
    faq: [
      {
        question: "Bagaimana memperkecil gambar di bawah 100 KB?",
        answer:
          "Unggah gambar ke kompresor ConvertBrio dan tetapkan target ukuran ke 100 KB. Alat menurunkan kualitas, dan dimensi bila perlu, sampai file muat di batas itu, ideal untuk formulir dan unggahan dokumen dengan batas ketat.",
      },
      {
        question: "Apakah mengompres membuat gambar jadi lebih buruk?",
        answer:
          "Pada kompresi sedang, kebanyakan orang tidak melihat perbedaan. Kehilangan kualitas baru terlihat pada pengaturan agresif; sebaiknya periksa hasilnya daripada mengompres ke ukuran sekecil mungkin secara default.",
      },
      {
        question: "PNG saya nyaris tidak mengecil, kenapa?",
        answer:
          "PNG bersifat lossless, jadi sedikit ruang untuk mengompres foto yang tersimpan di dalamnya. Ubah dulu PNG ke JPG atau WEBP dengan Konverter Gambar; itu saja sering memangkas ukuran 70% atau lebih.",
      },
      {
        question: "Apakah kompresor menjaga dimensi gambar?",
        answer:
          "Ya, kecuali Anda memakai mode target ukuran dan file masih belum muat setelah pengurangan kualitas maksimum: dalam hal itu ia juga memperkecil dimensi sebagai langkah terakhir.",
      },
      {
        question: "Bisakah mengompres beberapa gambar sekaligus?",
        answer:
          "Mengompres satu gambar per proses gratis dan tanpa akun. Alat ini belum memproses beberapa gambar dalam satu lintasan.",
      },
    ],
  },

  "merge-pdf": {
    title: "Gabung PDF online: satukan beberapa PDF menjadi satu file",
    intro: [
      "Menyatukan halaman hasil scan, faktur, laporan, atau bab menjadi satu dokumen biasanya butuh software desktop atau langganan berbayar. Alat penggabungan ConvertBrio melakukannya dari browser, tanpa memasang apa pun: unggah beberapa PDF, susun dalam urutan yang Anda mau, dan unduh satu file gabungan dalam hitungan detik.",
      "Setiap halaman tiap file dipertahankan persis apa adanya: tanpa kompresi ulang, tanpa kehilangan kualitas, tanpa watermark. Satu-satunya perubahan: file yang terpisah menjadi satu.",
    ],
    howTo: [
      { step: "Unggah dua PDF atau lebih", detail: "Seret semuanya sekaligus, atau pilih beberapa di penjelajah file. Tiap file bisa hingga 100 MB." },
      {
        step: "Susun urutannya",
        detail: "Dokumen gabungan mengikuti urutan daftar file; susun sesuai bacaan PDF akhir: halaman sampul dulu, lampiran terakhir.",
      },
      { step: "Gabung dan unduh", detail: "Klik Konversi. ConvertBrio menambahkan halaman tiap file secara berurutan dan PDF gabungan terunduh otomatis." },
    ],
    sections: [
      {
        heading: "Alasan umum menggabungkan PDF",
        body: "Ini salah satu operasi PDF yang paling sering dipakai, biasanya untuk salah satu kasus ini:",
        list: [
          "Menyatukan halaman yang dipindai terpisah menjadi satu dokumen",
          "Menyusun laporan, kontrak, atau proposal berbagai bagian",
          "Mengumpulkan beberapa faktur atau kuitansi untuk satu klaim biaya",
          "Menyatukan bab-bab manual, buku, atau modul",
          "Melampirkan surat lamaran ke CV sebagai satu file",
        ],
      },
      {
        heading: "Menyusun urutan halaman dengan benar",
        body: "Urutan file gabungan ditentukan sepenuhnya oleh urutan unggah file; susun daftarnya sebelum mengonversi. Jika salah satu PDF sumber punya halaman yang urutannya salah, perbaiki dulu: pisah menjadi halaman lepas dengan Pisah PDF, lalu gabungkan semuanya dalam urutan yang dibutuhkan.",
      },
      {
        heading: "Setelah menggabungkan",
        body: "Dokumen gabungan sering menjadi saat Anda ingin memperkecil ukuran jika sumber-sumbernya padat gambar (Kompres PDF). Melakukannya pada file akhir memastikan kompresi mencakup seluruh dokumen.",
      },
      {
        heading: "Privasi dan batasan",
        body: "File dienkripsi saat diunggah, digabungkan otomatis tanpa tinjauan manusia, dan semuanya, sumber dan hasil, dihapus dalam 24 jam. Beberapa file per penggabungan, masing-masing hingga 100 MB, gratis, tanpa akun, tanpa watermark.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang menggabungkan beberapa file PDF menjadi satu.",
    faq: [
      {
        question: "Bagaimana menggabungkan file PDF online gratis?",
        answer:
          "Buka alat Gabung PDF ConvertBrio, unggah dua PDF atau lebih, susun dalam urutan yang Anda mau, dan unduh file gabungan: tanpa akun, tanpa memasang software, tanpa watermark.",
      },
      {
        question: "Bisakah saya mengatur urutan halaman di PDF gabungan?",
        answer:
          "Ya: file digabungkan dalam urutan tampilnya di daftar, dengan halaman tiap file muncul berurutan. Susun file sebelum mengonversi.",
      },
      {
        question: "Apakah menggabungkan mengurangi kualitas PDF saya?",
        answer:
          "Tidak. Halaman disalin apa adanya, tanpa kompresi ulang. File gabungan kira-kira seukuran gabungan ukuran aslinya.",
      },
      {
        question: "Bisakah menggabungkan gambar dan PDF?",
        answer:
          "Ubah dulu gambar menjadi PDF dengan JPG ke PDF, lalu gabungkan PDF itu dengan PDF lain di sini.",
      },
      {
        question: "Ada batas berapa banyak PDF yang bisa digabung?",
        answer:
          "Anda bisa menggabungkan beberapa file sekaligus, masing-masing hingga 100 MB. Pekerjaan sangat besar lebih baik dilakukan dalam dua tahap.",
      },
    ],
  },

  "split-pdf": {
    title: "Pisah PDF online: pisahkan dokumen menjadi halaman terpisah",
    intro: [
      "Perlu mengambil satu halaman dari PDF yang lebih besar, atau memecah dokumen banyak halaman menjadi file terpisah? Alat pemisah ConvertBrio memisahkan tiap halaman PDF Anda ke filenya sendiri, siap diunduh dan dipakai secara mandiri.",
      "Gratis, berjalan di browser dan tanpa watermark. Hasilnya berupa ZIP dengan satu halaman per file.",
    ],
    howTo: [
      { step: "Unggah PDF Anda", detail: "Seret ke kotak atau jelajahi. Satu file per proses, hingga 100 MB." },
      { step: "Pisah", detail: "ConvertBrio memecah dokumen menjadi file satu halaman, satu per halaman asli." },
      { step: "Unduh ZIP", detail: "Hasilnya berupa satu ZIP dengan tiap halaman sebagai PDF terpisah, siap diekstrak." },
    ],
    sections: [
      {
        heading: "Kapan pemisahan masuk akal",
        body: "Kasus umum: mengambil halaman tanda tangan dari kontrak, memisahkan bab buku hasil scan, mengisolasi satu faktur dari sebuah batch, atau memecah laporan besar menjadi bagian-bagian kecil untuk dibagikan.",
      },
      {
        heading: "Menyatukan halaman lagi nanti",
        body: "Jika Anda memisah PDF lalu perlu menggabungkan sebagian atau semua halaman ke dokumen baru, alat Gabung PDF ConvertBrio menyatukannya kembali dalam urutan yang Anda pilih.",
      },
      {
        heading: "Privasi dan batasan",
        body: "Unggahan dienkripsi, diproses otomatis tanpa tinjauan manusia, dan baik asli maupun halaman hasil dihapus dari server ConvertBrio dalam 24 jam. Batas 100 MB per file.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang memisahkan PDF menjadi halaman terpisah.",
    faq: [
      {
        question: "Bagaimana memisahkan PDF menjadi halaman terpisah?",
        answer:
          "Unggah PDF Anda ke alat Pisah PDF ConvertBrio, dan ia memisahkan tiap halaman menjadi file tersendiri, semuanya dikemas dalam satu unduhan ZIP.",
      },
      {
        question: "Bisakah mengambil hanya satu halaman dari PDF?",
        answer:
          "Ya: pemisahan memecah dokumen menjadi halaman-halaman terpisah di dalam ZIP, jadi Anda ambil halaman yang dibutuhkan dan abaikan sisanya.",
      },
      {
        question: "Bisakah menyatukan halaman lagi setelahnya?",
        answer:
          "Ya, pakai alat Gabung PDF ConvertBrio untuk menggabungkan kembali halaman-halaman hasil ke dokumen baru dalam urutan yang dibutuhkan.",
      },
    ],
  },

  "pdf-to-word": {
    title: "Konversi PDF ke Word: ubah PDF menjadi dokumen yang bisa diedit",
    intro: [
      "Perlu mengedit teks PDF tapi tidak punya file sumbernya? Konverter PDF ke Word ConvertBrio menyusun ulang PDF Anda sebagai DOCX yang bisa diedit, paragraf, tebal dan miring, judul, tabel sederhana, dan gambar termasuk, yang terbuka di Microsoft Word, Google Docs, atau LibreOffice.",
      "Gratis, tanpa daftar dan tanpa watermark. Dokumen sederhana terkonversi rapi; makin kompleks tampilan halaman aslinya, makin banyak yang Anda rapikan setelahnya.",
    ],
    howTo: [
      {
        step: "Periksa apakah PDF punya teks asli",
        detail:
          "Buka dan coba pilih satu kalimat dengan kursor. Jika bisa, lanjut ke langkah 2. Jika teksnya gambar hasil scan, jalankan dulu lewat OCR PDF.",
      },
      { step: "Unggah PDF", detail: "Seret ke kotak atau jelajahi. Satu file per proses, hingga 100 MB." },
      { step: "Konversi ke DOCX", detail: "ConvertBrio menyusun ulang konten sebagai dokumen Word, teks, judul, tabel dasar, dan gambar, dan terunduh otomatis." },
      { step: "Buka dan edit di Word", detail: "DOCX terbuka di Word, Google Docs, atau editor kompatibel mana pun. Tinjau tata letak dan sesuaikan yang belum ditempatkan sempurna oleh konversi." },
    ],
    sections: [
      {
        heading: "Apa yang dipertahankan dan apa yang perlu dirapikan",
        body: "Mengetahuinya lebih dulu menghemat waktu.",
        table: {
          headers: ["Elemen", "Hasil konversi"],
          rows: [
            ["Paragraf, tebal, miring", "Dipertahankan dengan andal"],
            ["Judul dan daftar dasar", "Dipertahankan di sebagian besar dokumen"],
            ["Tabel sederhana", "Dipertahankan; garis dan spasi mungkin perlu disesuaikan"],
            ["Gambar sebaris dan selebar halaman", "Dipertahankan dan ditempatkan di alur"],
            ["Tata letak banyak kolom", "Diratakan jadi satu kolom: siapkan untuk menata ulang"],
            ["Header, footer, nomor halaman", "Bisa masuk ke isi atau hilang"],
          ],
        },
      },
      {
        heading: "Mengonversi dokumen hasil scan ke Word",
        body: "Jika PDF Anda hasil scan, foto tiap halaman, bukan teks asli, konverter ini tidak punya teks untuk diambil dan akan menghasilkan dokumen kosong atau hanya gambar. Jalankan scan lewat alat OCR PDF dulu: ia mengenali teks tercetak dan menambahkan lapisan teks. Lalu konversi PDF ber-OCR itu di sini untuk mendapat DOCX yang bisa diedit.",
      },
      {
        heading: "Privasi dan batasan",
        body: "PDF dienkripsi saat diunggah, dikonversi otomatis tanpa tinjauan manusia, dan kedua file dihapus dalam 24 jam. Satu dokumen per proses, hingga 100 MB, gratis, tanpa akun, tanpa watermark.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang mengonversi file PDF menjadi dokumen Word yang bisa diedit.",
    faq: [
      {
        question: "Bagaimana mengonversi PDF menjadi dokumen Word yang bisa diedit?",
        answer:
          "Unggah PDF Anda ke alat PDF ke Word ConvertBrio, dan ia menyusun ulang konten, teks, judul, tabel sederhana, dan gambar, menjadi DOCX yang Anda buka dan edit di Microsoft Word atau Google Docs.",
      },
      {
        question: "Bagaimana mengonversi dokumen hasil scan ke Word?",
        answer:
          "Jalankan scan lewat OCR PDF ConvertBrio dulu untuk mengenali teks dan menambahkan lapisan teks. Lalu konversi PDF itu di sini untuk mendapat DOCX yang bisa diedit. Scan mentah tidak punya teks yang bisa diambil alat ini.",
      },
      {
        question: "Apakah tata letak kompleks dan gambar terkonversi dengan benar?",
        answer:
          "Paragraf, tebal dan miring, judul, tabel sederhana, dan gambar dipertahankan. Tata letak banyak kolom dan halaman yang sangat didesain diratakan dan perlu ditata ulang.",
      },
      {
        question: "Apakah file hasil konversi .docx sungguhan?",
        answer:
          "Ya, .docx standar yang terbuka di Microsoft Word, Google Docs, LibreOffice, dan Pages.",
      },
      {
        question: "Apakah Anda menambahkan watermark?",
        answer: "Tidak. DOCX bersih, tanpa watermark, lencana, atau metadata tambahan.",
      },
    ],
  },

  "word-to-pdf": {
    title: "Konversi Word ke PDF: kunci format untuk dibagikan",
    intro: [
      "Dokumen Word bisa tampil berbeda tergantung font, versi Word, atau sistem tempat dibuka: masalah nyata saat CV, kontrak, atau laporan harus tampil sama bagi setiap penerimanya. Konverter Word ke PDF ConvertBrio mengubah DOCX Anda menjadi PDF siap cetak yang tampil sama di mana pun dan tidak bisa diedit tanpa sengaja.",
      "Gratis, berjalan di browser, tidak butuh Microsoft Word terpasang, dan tanpa watermark.",
    ],
    howTo: [
      { step: "Simpan dokumen sebagai .docx", detail: "Di Word, pakai File → Save As dan pilih Word Document (.docx). File .doc lama tidak diterima." },
      { step: "Unggah file", detail: "Seret .docx ke kotak atau jelajahi. Satu file per proses, hingga 100 MB." },
      { step: "Konversi dan unduh", detail: "ConvertBrio menata dokumen dan membuat PDF. File terunduh otomatis, siap dikirim email, dicetak, atau diunggah." },
    ],
    sections: [
      {
        heading: "Kenapa konversi ke PDF sebelum mengirim",
        body: "PDF adalah standar untuk dokumen final karena tampil sama di setiap perangkat, tanpa bergantung penerima punya Word atau font yang tepat. Sebaliknya, file Word bisa mengalirkan ulang paragraf, menggeser pemenggalan halaman, atau mengganti font di mesin orang lain: persis yang tidak Anda inginkan saat perekrut membuka CV Anda.",
      },
      {
        heading: "Cara format ditangani",
        body: "Teks, font, judul, daftar, tabel, gambar sebaris, dan ukuran halaman dipertahankan. Fitur yang sangat khas Word, header dan footer kustom, catatan kaki, pelacakan perubahan, bisa tampil sedikit berbeda karena dokumen ditata ulang, bukan oleh Word sendiri.",
      },
      {
        heading: "Privasi dan batasan",
        body: "Dokumen Anda dienkripsi saat diunggah, dikonversi otomatis tanpa tinjauan manusia, dan kedua file dihapus dalam 24 jam. Satu .docx per proses, hingga 100 MB, gratis, tanpa akun, tanpa watermark.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang mengonversi dokumen Word ke PDF.",
    faq: [
      {
        question: "Bagaimana mengonversi dokumen Word ke PDF gratis?",
        answer:
          "Unggah .docx Anda ke alat Word ke PDF ConvertBrio dan ia membuat PDF berformat siap unduh: tanpa memasang Microsoft Word, tanpa akun, tanpa watermark.",
      },
      {
        question: "Apakah format saya tetap sama setelah konversi?",
        answer:
          "Ya, untuk dokumen standar: tata letak, font, judul, tabel, dan gambar dipertahankan, dan tidak seperti file Word, PDF tampil sama di perangkat apa pun.",
      },
      {
        question: "Apakah berfungsi dengan file .doc?",
        answer:
          "Hanya format modern .docx. Buka .doc lama di Word dan simpan sebagai .docx (File → Save As), lalu konversi.",
      },
      {
        question: "Bisakah mengonversi PDF kembali ke Word setelahnya?",
        answer:
          "Ya, pakai alat PDF ke Word ConvertBrio. Perlu diketahui, mengembalikan PDF bertata letak tetap menjadi teks yang bisa diedit bersifat perkiraan untuk tata letak kompleks.",
      },
    ],
  },

  "pdf-to-jpg": {
    title: "Konversi PDF ke JPG: ekspor tiap halaman sebagai gambar",
    intro: [
      "Kadang Anda butuh halaman PDF sebagai gambar: untuk dimasukkan ke slide, diunggah ke media sosial, dilampirkan di tempat yang tidak menerima PDF, atau mengambil grafik dari laporan panjang. Konverter PDF ke JPG ConvertBrio merender tiap halaman file Anda sebagai JPG terpisah.",
      "Gratis, tanpa daftar dan tanpa watermark. PDF satu halaman mengembalikan satu JPG; PDF banyak halaman mengembalikan sekumpulan gambar, satu per halaman.",
    ],
    howTo: [
      { step: "Unggah PDF Anda", detail: "Seret ke kotak atau jelajahi. Satu file per proses, hingga 100 MB." },
      { step: "Konversi", detail: "ConvertBrio merender tiap halaman menjadi JPG resolusi tinggi. Dokumen lebih panjang butuh waktu sedikit lebih lama karena tiap halaman dirender satu per satu." },
      { step: "Unduh gambar", detail: "Satu halaman terunduh sebagai JPG; beberapa halaman terunduh bersama, jadi Anda punya seluruh dokumen dalam bentuk gambar." },
    ],
    sections: [
      {
        heading: "Penggunaan umum",
        body: "",
        list: [
          "Menyisipkan halaman PDF ke slide PowerPoint atau Google Slides",
          "Mengunggah satu halaman atau sertifikat ke media sosial atau aplikasi pesan",
          "Mengunggah halaman dokumen ke formulir yang hanya menerima gambar",
          "Mengambil diagram, grafik, atau gambar dari laporan untuk dipakai ulang",
        ],
      },
      {
        heading: "JPG atau PNG?",
        body: "Pilih JPG untuk halaman fotografis dan ukuran file terkecil: standar yang tepat untuk dibagikan. Pilih PDF ke PNG saat halaman sebagian besar teks, tabel, atau garis dan Anda ingin sangat tajam, atau saat Anda butuh latar transparan.",
      },
      {
        heading: "Privasi dan batasan",
        body: "PDF Anda dienkripsi saat diunggah, dirender otomatis tanpa tinjauan manusia, dan baik unggahan maupun gambar dihapus dalam 24 jam. Satu file per proses, hingga 100 MB, gratis, tanpa akun.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang mengonversi halaman PDF menjadi gambar JPG.",
    faq: [
      {
        question: "Apakah PDF ke JPG mengonversi semua halaman?",
        answer:
          "Ya: tiap halaman PDF Anda dirender sebagai JPG terpisah, jadi dokumen banyak halaman menghasilkan satu gambar per halaman.",
      },
      {
        question: "Sebaiknya JPG atau PNG untuk halaman dengan teks?",
        answer:
          "PNG menjaga teks dan garis lebih tajam karena lossless; JPG menghasilkan file lebih kecil dengan detail sedikit lebih lembut. Pakai PNG saat ketajaman teks paling penting.",
      },
      {
        question: "Bisakah mengonversi gambar kembali ke PDF setelahnya?",
        answer:
          "Ya, pakai alat JPG ke PDF ConvertBrio untuk menggabungkan kembali gambar menjadi satu PDF kapan pun dibutuhkan.",
      },
    ],
  },

  "jpg-to-pdf": {
    title: "Konversi JPG ke PDF: satukan gambar menjadi satu dokumen",
    intro: [
      "Entah untuk mengirim halaman hasil scan, membuat portofolio sederhana, atau mengubah tumpukan kuitansi menjadi satu file, alat JPG ke PDF ConvertBrio menggabungkan satu atau beberapa gambar menjadi satu PDF, dalam urutan yang Anda pilih, dengan satu gambar per halaman.",
      "Ini cara standar mengubah foto kertas menjadi sesuatu yang bisa dikirim. Sebagian besar portal ingin PDF, bukan folder JPG: ini menyelesaikannya dalam satu langkah, gratis dan tanpa watermark.",
    ],
    howTo: [
      { step: "Foto atau kumpulkan gambar", detail: "Untuk halaman dokumen, foto dari depan dengan cahaya baik agar teks terbaca. JPG dan PNG diterima." },
      { step: "Unggah semuanya sekaligus", detail: "Seret semua gambar ke kotak atau pilih beberapa. Ukuran gabungan hingga 100 MB." },
      { step: "Atur urutan halaman", detail: "PDF mengikuti urutan tampilnya gambar; susun halaman 1, halaman 2, dan seterusnya." },
      { step: "Konversi dan unduh", detail: "ConvertBrio menempatkan tiap gambar di halamannya sendiri dan PDF akhir terunduh otomatis." },
    ],
    sections: [
      {
        heading: "Penggunaan umum",
        body: "",
        list: [
          "Mengirim KTP, paspor, atau sertifikat hasil scan",
          "Menggabungkan beberapa foto kuitansi atau faktur untuk klaim biaya",
          "Mengembalikan kontrak yang ditandatangani tangan sebagai satu file",
          "Mengubah sekumpulan tangkapan layar menjadi dokumen untuk dibagikan",
        ],
      },
      {
        heading: "Dokumen bersih dari foto ponsel",
        body: "Untuk hasil terbaca, penuhi bingkai dengan halaman, jaga kamera sejajar untuk menghindari bentuk trapesium, dan pakai cahaya merata tanpa bayangan di atas teks. Jika foto terputar, perbaiki sebelum mengonversi. Jika PDF hasilnya terlalu besar untuk batas unggah, jalankan lewat Kompres PDF setelahnya.",
      },
      {
        heading: "Privasi dan batasan",
        body: "Gambar dienkripsi saat diunggah, digabungkan otomatis tanpa tinjauan manusia, dan baik sumber maupun PDF akhir dihapus dalam 24 jam. Beberapa gambar per proses, 100 MB gabungan, gratis, tanpa akun, tanpa watermark.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang mengonversi gambar JPG menjadi PDF.",
    faq: [
      {
        question: "Bisakah menggabungkan beberapa gambar menjadi satu PDF?",
        answer:
          "Ya: unggah sebanyak yang Anda butuhkan gambar JPG atau PNG sekaligus, dan ConvertBrio menggabungkannya menjadi satu PDF dengan tiap gambar di halamannya sendiri, dalam urutan yang Anda susun.",
      },
      {
        question: "Bagaimana mengonversi foto dokumen menjadi PDF?",
        answer:
          "Unggah foto ke JPG ke PDF dan ia menjadi PDF satu halaman yang bisa Anda kirim, cetak, atau bagikan. Unggah beberapa foto untuk mengubah dokumen banyak halaman menjadi satu PDF.",
      },
      {
        question: "PDF saya terlalu besar untuk dikirim, apa yang harus dilakukan?",
        answer:
          "Foto ponsel beresolusi tinggi, jadi PDF bisa besar. Jalankan lewat Kompres PDF, yang mengodekan ulang gambar tertanam dan biasanya memangkas ukuran cukup banyak.",
      },
    ],
  },

  "image-converter": {
    title: "Konverter gambar: konversi antar format apa pun secara online",
    intro: [
      "Konverter gambar ConvertBrio memindahkan foto, grafik, atau tangkapan layar antara JPG, PNG, WEBP, AVIF, HEIC, dan GIF dalam satu langkah, langsung di browser. Tidak ada yang perlu dipasang, tidak ada akun yang perlu dibuat: unggah file, pilih format, dan unduh hasilnya dalam hitungan detik.",
      "Alasan paling umum mengonversi gambar adalah kompatibilitas: foto HEIC iPhone yang tidak dibuka Windows, WEBP yang disimpan dari situs yang ditolak editor, atau AVIF yang tidak ditampilkan klien email lama.",
    ],
    howTo: [
      { step: "Unggah gambar Anda", detail: "Seret file JPG, PNG, WEBP, AVIF, HEIC, atau GIF ke kotak, atau klik untuk menjelajah. Hingga 100 MB." },
      { step: "Pilih format keluaran", detail: "Pilih JPG, PNG, WEBP, AVIF, atau GIF. Jika ragu, JPG cocok untuk foto dan PNG untuk grafik dengan transparansi atau teks tajam." },
      { step: "Konversi dan unduh", detail: "Klik Konversi. ConvertBrio mendekode aslinya dan mengodekannya ulang dalam format pilihan Anda, dan file terunduh otomatis." },
    ],
    sections: [
      {
        heading: "Memilih format keluaran yang tepat",
        body: "Tidak ada format gambar terbaik: pilihan yang tepat tergantung ke mana file itu pergi.",
        table: {
          headers: ["Anda perlu…", "Konversi ke", "Alasan"],
          rows: [
            ["Melampirkan foto ke email atau formulir", "JPG", "Terbuka di mana saja, file kecil, tanpa risiko ketidakcocokan"],
            ["Menjaga latar transparan", "PNG atau WEBP", "JPG dan GIF lama meratakan transparansi ke warna solid"],
            ["Mempercepat gambar di situs Anda sendiri", "WEBP atau AVIF", "Jauh lebih kecil dari JPG/PNG pada kualitas visual yang sama"],
            ["Membuka foto iPhone di Windows", "JPG", "Dukungan HEIC di Windows tidak konsisten; JPG terjamin"],
            ["Mengunggah ke situs yang menolak WEBP atau AVIF", "JPG atau PNG", "Dua format yang diterima setiap formulir unggah"],
          ],
        },
      },
      {
        heading: "Apa yang terjadi pada transparansi dan animasi",
        body: "Transparansi dipertahankan bila kedua format mendukung kanal alfa (PNG, WEBP, AVIF). Mengonversi gambar transparan ke JPG mengisi area transparan dengan putih. GIF animasi dikonversi menjadi satu bingkai diam.",
      },
      {
        heading: "Privasi dan batasan",
        body: "Setiap unggahan dienkripsi dan diproses otomatis tanpa tinjauan manusia. Baik asli maupun gambar hasil konversi dihapus dari server ConvertBrio dalam 24 jam. File hingga 100 MB, gratis, tanpa akun dan tanpa watermark.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang konverter gambar ConvertBrio.",
    faq: [
      {
        question: "Antara format gambar apa saja saya bisa mengonversi?",
        answer:
          "Konverter membaca JPG, PNG, WEBP, AVIF, HEIC, dan GIF, serta mengekspor ke JPG, PNG, WEBP, AVIF, atau GIF. Itu mencakup hampir setiap format dari kamera, ponsel, tangkapan layar, dan program desain.",
      },
      {
        question: "Apakah mengonversi akan mengurangi kualitas gambar saya?",
        answer:
          "Mengonversi antar format lossless seperti PNG menjaga tiap piksel. Mengonversi ke format lossy seperti JPG atau WEBP menerapkan kompresi sekali, tapi pada kualitas default perbedaannya jarang terlihat.",
      },
      {
        question: "Apakah mengonversi mengubah dimensi gambar?",
        answer:
          "Tidak. Konverter menjaga lebar dan tinggi persis aslinya. Jika Anda juga perlu mengubah ukuran, pakai alat pengubah ukuran setelahnya.",
      },
      {
        question: "Apakah Anda menambahkan watermark?",
        answer: "Tidak. File hasil konversi bersih, resolusi penuh, tanpa watermark atau lencana.",
      },
    ],
  },

  "ocr-pdf": {
    title: "OCR PDF: buat dokumen hasil scan bisa dicari dan diedit",
    intro: [
      "Halaman hasil scan atau foto dokumen hanyalah gambar bagi komputer: Anda tidak bisa mencari, menyalin teks, atau memindahkan dokumen hasil scan ke Word tanpa mengetik ulang tiap baris. Pengenalan karakter optik (OCR) menyelesaikannya: ia membaca teks di dalam gambar dan mengubahnya menjadi karakter sungguhan yang bisa dipilih.",
      "Ini alat yang orang cari saat mencari cara mengubah dokumen hasil scan menjadi teks yang bisa diedit. Scan atau foto halaman, simpan sebagai PDF, jalankan di sini dan salin teksnya, atau kirim PDF yang bisa dicari ke alat PDF ke Word.",
    ],
    howTo: [
      { step: "Scan atau foto dokumen sebagai PDF", detail: "Pakai pemindai atau aplikasi scan ponsel (yang menyimpan langsung sebagai PDF). Halaman lurus, rata, dan cukup cahaya memberi pengenalan terbaik." },
      { step: "Unggah PDF ke OCR PDF", detail: "Satu file per proses, hingga 100 MB. Dokumen banyak halaman berfungsi: tiap halaman diproses." },
      { step: "Jalankan pengenalan", detail: "ConvertBrio membaca tiap halaman dan menyusun lapisan teks di belakang gambar asli. Dokumen lebih besar butuh waktu lebih lama karena tiap halaman diproses satu per satu." },
      { step: "Pindahkan teks ke Word", detail: "Buka PDF yang dikembalikan, pilih semua (Ctrl/Cmd+A) dan tempel di Word, atau kirim PDF yang bisa dicari ke PDF ke Word untuk DOCX yang mempertahankan format dasar." },
    ],
    sections: [
      {
        heading: "Apa yang dikembalikan OCR PDF",
        body: "PDF yang identik dengan yang Anda unggah, gambar halaman sama, tata letak sama, tapi dengan lapisan teks di belakang gambar. Artinya Anda bisa mencari dengan Ctrl+F, menyorot dan menyalin bagian teks, serta memilih seluruh dokumen untuk memindahkan teks ke tempat yang bisa diedit. Tampilan halaman tidak berubah.",
      },
      {
        heading: "Memindahkan dokumen hasil scan ke Word",
        body: [
          "Ada dua jalur, tergantung berapa banyak format yang perlu Anda pertahankan.",
          "Untuk teks biasa, jalankan OCR pada PDF di sini, buka, dan salin teksnya langsung ke dokumen Word kosong. Cepat, dan berfungsi untuk surat, catatan, dan halaman satu kolom.",
          "Untuk dokumen yang harus mempertahankan judul, paragraf, dan tabel sederhana, jalankan PDF ber-OCR lewat alat PDF ke Word setelahnya. Ia menyusun ulang konten yang dikenali menjadi DOCX yang bisa diedit.",
        ],
      },
      {
        heading: "Mendapatkan akurasi terbaik",
        body: "Kualitas OCR mengikuti kualitas scan. Halaman bersih, kontras tinggi, dipindai pada 300 DPI atau difoto dari depan dengan cahaya baik dikenali nyaris sempurna. Akurasi turun karena kemiringan, bayangan, resolusi rendah, atau font tidak lazim. Tulisan tangan tidak dikenali dengan andal.",
      },
      {
        heading: "Privasi dan batasan",
        body: "Dokumen Anda dienkripsi saat diunggah, diproses otomatis tanpa tinjauan manusia, dan baik unggahan maupun hasil OCR dihapus dalam 24 jam. Satu PDF per proses, hingga 100 MB, gratis, tanpa akun.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang menjalankan OCR pada PDF dan memindahkan teks hasil scan ke Word.",
    faq: [
      {
        question: "Bagaimana memindahkan dokumen hasil scan ke Word?",
        answer:
          "Simpan scan sebagai PDF, jalankan lewat OCR PDF untuk menambahkan lapisan teks, lalu salin teksnya langsung ke Word, atau kirim PDF ber-OCR ke alat PDF ke Word untuk DOCX yang bisa diedit dan mempertahankan format dasar.",
      },
      {
        question: "Bisakah men-scan dokumen menjadi teks yang bisa diedit secara gratis?",
        answer:
          "Ya. OCR PDF gratis dan tanpa akun. Ia mengenali teks tiap halaman hasil scan sehingga Anda bisa memilih, menyalin, dan memakainya kembali.",
      },
      {
        question: "Apakah OCR mengubah tampilan dokumen saya?",
        answer:
          "Tidak. Gambar halaman asli dipertahankan persis; teks yang dikenali ditambahkan sebagai lapisan tak terlihat di atasnya, jadi secara visual tidak ada yang berubah.",
      },
      {
        question: "Apakah mengenali tulisan tangan?",
        answer: "Tidak dengan andal. OCR dibuat untuk teks cetak dan ketik. Catatan tulisan tangan paling banter dikenali sebagian.",
      },
      {
        question: "PDF saya sudah punya teks yang bisa dipilih, apakah masih butuh OCR?",
        answer:
          "Tidak. Jika Anda sudah bisa menyorot teks dengan kursor, PDF punya lapisan teks asli dan Anda bisa langsung ke PDF ke Word.",
      },
    ],
  },

  "compress-powerpoint": {
    title: "Kompres PowerPoint online: perkecil .pptx untuk email",
    intro: [
      "File PowerPoint membesar dengan cepat: beberapa foto ponsel, dua tangkapan layar, satu grafik yang diekspor, dan .pptx melewati 40 MB dan tidak bisa lewat email. Alat Kompres PowerPoint ConvertBrio membuka presentasi, mengodekan ulang gambar di dalamnya dengan kualitas dan resolusi efisien, dan mengembalikan .pptx lebih kecil yang tetap sepenuhnya bisa diedit.",
      "Gratis, berjalan di browser tanpa daftar dan tanpa watermark. Teks slide, tata letak, animasi, grafik, dan catatan tetap utuh: hanya foto dan tangkapan layar tertanam yang dikodekan ulang.",
    ],
    howTo: [
      { step: "Simpan presentasi sebagai .pptx", detail: "Di PowerPoint, File → Save As → PowerPoint Presentation (.pptx). Format .ppt lama tidak diterima." },
      { step: "Unggah", detail: "Seret .pptx ke kotak atau jelajahi. Satu file per proses, hingga 100 MB." },
      { step: "Kompres", detail: "ConvertBrio menemukan tiap gambar tertanam, memperkecil skala yang lebih besar dari yang ditampilkan slide, dan mengodekannya ulang. Teks dan konten vektor dibiarkan utuh." },
      { step: "Unduh .pptx lebih kecil", detail: "Buka di PowerPoint untuk memastikan slide tetap benar, lalu kirim email atau unggah." },
    ],
    sections: [
      {
        heading: "Kenapa file PowerPoint menjadi sangat besar",
        body: "Ponsel modern memotret 12 hingga 48 megapiksel, masing-masing beberapa megabyte. Tempel empat di antara slide dan presentasi membawa ~20 MB data gambar sebelum satu kata teks pun. PowerPoint menyimpan tiap gambar pada resolusi penuh saat disisipkan, meski slide hanya menampilkan versi kecil.",
      },
      {
        heading: "Apa yang diubah alat dan apa yang tidak",
        body: "",
        list: [
          "Dikodekan ulang: gambar JPEG dan PNG tertanam, diperkecil jika lebih dari ~1800px pada sisi panjang",
          "Utuh: semua teks, font, tata letak slide, animasi, transisi, dan catatan",
          "Utuh: grafik, tabel, SmartArt, dan bentuk vektor",
          "File tetap .pptx normal dan bisa diedit: tidak ada yang diratakan",
        ],
      },
      {
        heading: "Seberapa kecil hasilnya?",
        body: "Tergantung seberapa banyak gambar dalam presentasi. Presentasi yang dibangun di sekitar foto dan tangkapan layar resolusi tinggi sering turun 40–70%. Yang hampir seluruhnya teks, dengan logo dan beberapa gambar kecil, tidak banyak berubah.",
      },
      {
        heading: "Untuk file lebih kecil lagi: konversi ke PDF",
        body: "Jika presentasi sudah final dan penerima tidak perlu mengeditnya, mengonversi ke PDF lalu mengompres PDF itu biasanya menghasilkan file terkecil dari semuanya, dan terbuka di perangkat apa pun tanpa PowerPoint. Kompromi: itu bukan lagi presentasi yang bisa diedit.",
      },
      {
        heading: "Privasi dan batasan",
        body: "Presentasi Anda dienkripsi saat diunggah, diproses otomatis di server ConvertBrio tanpa tinjauan manusia, dan baik unggahan maupun salinan terkompresi dihapus dalam 24 jam. Satu .pptx per proses, hingga 100 MB, gratis, tanpa akun, tanpa watermark.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang memperkecil ukuran presentasi PowerPoint.",
    faq: [
      {
        question: "Bagaimana kompres PowerPoint untuk email?",
        answer:
          "Unggah .pptx ke alat Kompres PowerPoint ConvertBrio. Ia mengodekan ulang gambar tertanam dan mengembalikan presentasi lebih kecil yang tetap bisa diedit: gratis, tanpa daftar, tanpa watermark.",
      },
      {
        question: "Apakah file terkompresi tetap bisa diedit?",
        answer:
          "Ya. Keluarannya .pptx normal yang Anda buka dan edit di PowerPoint. Hanya gambar tertanam yang dikodekan ulang; teks, tata letak, animasi, dan catatan tidak berubah.",
      },
      {
        question: "Apakah kompresi menurunkan kualitas slide saya?",
        answer:
          "Teks dan bentuk vektor tetap tajam sempurna. Foto dikodekan ulang dengan penurunan kualitas kecil, hampir selalu tak terlihat; perbedaannya hanya tampak saat memperbesar gambar secara kuat di layar besar.",
      },
      {
        question: "Presentasi saya nyaris tidak mengecil, kenapa?",
        answer:
          "Kemungkinan sudah ramping: presentasi yang hampir seluruhnya teks punya sedikit data gambar untuk dihapus.",
      },
      {
        question: "Apakah berfungsi dengan file .ppt?",
        answer:
          "Hanya format modern .pptx. Buka .ppt lama di PowerPoint dan simpan sebagai .pptx (File → Save As), lalu kompres.",
      },
    ],
  },

  "compress-word": {
    title: "Kompres dokumen Word online: perkecil .docx untuk email",
    intro: [
      "Dokumen Word yang tidak bisa lewat email hampir selalu membawa gambar resolusi penuh. Satu foto ponsel yang ditempel di laporan bisa 5 MB sendiri; beberapa dan .docx yang hampir seluruhnya teks melewati 30 MB. Alat Kompres Dokumen Word ConvertBrio membuka dokumen, mengodekan ulang gambar di dalamnya dengan kualitas dan resolusi efisien, dan mengembalikan .docx lebih kecil yang tetap sepenuhnya bisa diedit.",
      "Gratis, berjalan di browser tanpa daftar dan tanpa watermark. Teks, judul, tabel, gaya, dan tata letak tetap utuh: hanya foto dan tangkapan layar tertanam yang dikodekan ulang.",
    ],
    howTo: [
      { step: "Simpan dokumen sebagai .docx", detail: "Di Word, File → Save As → Word Document (.docx). Format .doc lama tidak diterima." },
      { step: "Unggah", detail: "Seret .docx ke kotak atau jelajahi. Satu file per proses, hingga 100 MB." },
      { step: "Kompres", detail: "ConvertBrio menemukan tiap gambar tertanam, memperkecil skala yang lebih besar dari yang ditampilkan halaman, dan mengodekannya ulang. Teks dan konten vektor dibiarkan utuh." },
      { step: "Unduh .docx lebih kecil", detail: "Buka di Word untuk memastikan tetap benar, lalu kirim email atau unggah." },
    ],
    sections: [
      {
        heading: "Kenapa file Word menjadi sangat besar",
        body: "Word menanamkan tiap gambar pada resolusi saat ditambahkan: foto 24 megapiksel tetap 24 megapiksel meski halaman menampilkannya selebar dua sentimeter. Teks, sebagai perbandingan, sangat kecil. Jadi mengompres dokumen Word sebenarnya mengodekan ulang dan memperkecil skala gambar di dalamnya.",
      },
      {
        heading: "Apa yang diubah alat dan apa yang tidak",
        body: "",
        list: [
          "Dikodekan ulang: gambar JPEG dan PNG tertanam, diperkecil jika lebih dari ~1800px pada sisi panjang",
          "Utuh: semua teks isi, judul, gaya, daftar, dan tabel",
          "Utuh: tata letak halaman, header dan footer, catatan kaki, dan field",
          "File tetap .docx normal dan bisa diedit",
        ],
      },
      {
        heading: "Jika masih terlalu besar",
        body: [
          "Untuk dokumen final yang akan Anda kirim, Word ke PDF diikuti Kompres PDF biasanya menghasilkan file terkecil, dan tidak bisa diedit tanpa sengaja.",
          "Dokumen besar meski sedikit gambar bisa membawa pelacakan perubahan dan riwayat revisi (terima atau tolak semua perubahan dan matikan pelacakan), font tertanam (File → Options → Save → hapus centang «Embed fonts in the file»), atau konten yang ditempel sebagai objek Excel atau web.",
        ],
      },
      {
        heading: "Privasi dan batasan",
        body: "Dokumen Anda dienkripsi saat diunggah, diproses otomatis di server ConvertBrio tanpa tinjauan manusia, dan baik unggahan maupun salinan terkompresi dihapus dalam 24 jam. Satu .docx per proses, hingga 100 MB, gratis, tanpa akun, tanpa watermark.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang memperkecil ukuran dokumen Word.",
    faq: [
      {
        question: "Bagaimana membuat dokumen Word lebih kecil untuk email?",
        answer:
          "Unggah .docx ke alat Kompres Dokumen Word ConvertBrio. Ia mengodekan ulang gambar tertanam dan mengembalikan dokumen lebih kecil yang tetap bisa diedit: gratis, tanpa daftar, tanpa watermark. Untuk file terkecil, konversi ke PDF dan kompres PDF itu.",
      },
      {
        question: "Apakah file terkompresi tetap bisa diedit?",
        answer:
          "Ya. Keluarannya .docx normal yang Anda buka dan edit di Word, Google Docs, atau LibreOffice. Hanya gambar tertanam yang dikodekan ulang.",
      },
      {
        question: "Apakah kompresi mengubah teks atau format saya?",
        answer: "Tidak. Hanya gambar yang terpengaruh. Teks, judul, tabel, gaya, dan tata letak halaman tidak berubah.",
      },
      {
        question: "Dokumen saya hampir seluruhnya teks tapi masih besar, kenapa?",
        answer:
          "Periksa pelacakan perubahan dan riwayat revisi, font tertanam, atau konten yang ditempel sebagai objek Excel/web lengkap. Masing-masing bisa menambah beberapa megabyte terlepas dari gambar.",
      },
      {
        question: "Apakah berfungsi dengan file .doc lama?",
        answer: "Hanya format modern .docx. Buka .doc di Word dan simpan sebagai .docx (File → Save As), lalu kompres.",
      },
    ],
  },
};
