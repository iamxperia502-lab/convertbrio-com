import type { ToolContentEntry } from "../toolContent";

// Indonesian (id) long-form tool content, slice B. Links point to the /id/ tool pages.

export const toolContentIdMoreB: Record<string, ToolContentEntry> = {
  "pdf-to-png": {
    title: "PDF ke PNG: ekspor halaman dengan detail tanpa kehilangan kualitas",
    intro:
      "Saat Anda butuh halaman PDF sebagai gambar tanpa kehilangan ketajaman, misalnya untuk diagram, tangkapan layar, atau halaman yang padat teks, PNG adalah format ekspor yang lebih baik daripada JPG. Konverter PDF ke PNG dari ConvertBrio mengubah setiap halaman menjadi file gambar tanpa kehilangan kualitas.",
    sections: [
      {
        heading: "Cara mengonversi PDF ke PNG",
        body: "Unggah PDF Anda dan ConvertBrio merender tiap halaman sebagai gambar PNG dengan kualitas penuh. PDF multi-halaman menghasilkan satu PNG per halaman, yang diunduh bersama sebagai satu set.",
      },
      {
        heading: "Mengapa memilih PNG dibanding JPG",
        body: "Kompresi PNG yang tanpa kehilangan kualitas menjaga teks halus, gambar garis, dan tepi tajam dari efek melembut yang bisa muncul akibat kompresi JPG. Ini paling terasa pada halaman dengan teks kecil, diagram teknis, atau konten yang akan Anda perbesar atau edit lebih lanjut.",
      },
      {
        heading: "Soal ukuran file",
        body: "Hasil ekspor PNG umumnya lebih besar daripada JPG yang setara, terutama untuk halaman dengan banyak detail visual. Jika ukuran file lebih penting daripada ketajaman sempurna, misalnya untuk berbagi santai atau diunggah ke internet, PDF ke JPG mungkin pilihan yang lebih praktis.",
      },
    ],
    relatedTools: [
      { label: "PDF ke JPG", href: "/id/tools/pdf-to-jpg" },
      { label: "JPG ke PDF", href: "/id/tools/jpg-to-pdf" },
      { label: "OCR PDF", href: "/id/tools/ocr-pdf" },
    ],
    faqDescription: "Pertanyaan umum tentang mengonversi halaman PDF menjadi gambar PNG.",
    faq: [
      {
        question: "Mengapa saya sebaiknya memakai PNG, bukan JPG, untuk halaman PDF?",
        answer:
          "PNG tanpa kehilangan kualitas, jadi teks dan detail halus tampil lebih tajam daripada JPG, yang memakai kompresi sehingga teks kecil dan gambar garis bisa sedikit melembut. Pilih PNG saat kejelasan lebih penting daripada ukuran file.",
      },
      {
        question: "Apakah PDF ke PNG bisa mengonversi dokumen multi-halaman?",
        answer:
          "Bisa. Setiap halaman dalam PDF dirender sebagai gambar PNG tersendiri, sehingga dokumen multi-halaman menghasilkan satu gambar per halaman.",
      },
      {
        question: "Apakah file PNG akan lebih besar daripada hasil ekspor JPG?",
        answer:
          "Umumnya ya, karena PNG tidak membuang detail seperti kompresi JPG yang menghilangkan sebagian data. Untuk berbagi santai di mana ukuran lebih penting, PDF ke JPG mungkin pilihan yang lebih baik.",
      },
    ],
  },

  "image-to-pdf": {
    title: "Gambar ke PDF: gabungkan foto menjadi satu dokumen",
    intro:
      "Entah Anda sedang mengirim halaman hasil scan, menyusun portofolio foto, atau mengubah struk menjadi satu file yang mudah dibagikan, alat Gambar ke PDF dari ConvertBrio menggabungkan satu gambar atau lebih (JPG, PNG, WEBP, HEIC, AVIF, atau GIF) menjadi satu dokumen PDF dengan urutan pilihan Anda.",
    sections: [
      {
        heading: "Cara mengonversi gambar ke PDF",
        body: "Unggah satu gambar atau lebih dalam format umum apa pun, atur sesuai urutan yang Anda inginkan, dan ConvertBrio menggabungkannya menjadi satu PDF dengan satu gambar per halaman. Hasilnya terunduh siap dibagikan, dicetak, atau dikirim.",
      },
      {
        heading: "Penggunaan umum",
        body: "Ini cara standar untuk mengirim dokumen identitas hasil scan, menggabungkan foto HEIC dari iPhone berisi struk atau kontrak menjadi satu file untuk pengajuan, atau mengubah sekumpulan gambar menjadi dokumen sederhana yang mudah dibagikan tanpa perlu perangkat lunak desain atau penyunting PDF.",
      },
      {
        heading: "Menggabungkan banyak gambar sekaligus",
        body: "Anda bisa mengunggah beberapa gambar dalam satu kali proses, gratis, tanpa perlu akun.",
      },
    ],
    relatedTools: [
      { label: "JPG ke PDF", href: "/id/tools/jpg-to-pdf" },
      { label: "PDF ke JPG", href: "/id/tools/pdf-to-jpg" },
      { label: "Gabung PDF", href: "/id/tools/merge-pdf" },
      { label: "Kompres PDF", href: "/id/tools/compress-pdf" },
    ],
    faqDescription: "Pertanyaan umum tentang mengonversi gambar ke PDF.",
    faq: [
      {
        question: "Bisakah saya menggabungkan beberapa gambar menjadi satu PDF?",
        answer:
          "Bisa. Unggah gambar sebanyak yang Anda perlukan dalam satu kali proses, dan ConvertBrio menggabungkannya menjadi satu PDF dengan tiap gambar di halamannya sendiri, sesuai urutan yang Anda atur.",
      },
      {
        question: "Apakah alat ini berfungsi dengan foto HEIC dari iPhone?",
        answer:
          "Ya. Gambar ke PDF menerima foto HEIC dan HEIF secara langsung, bersama JPG, PNG, WEBP, AVIF, dan GIF, jadi Anda tidak perlu mengonversi foto iPhone terlebih dahulu.",
      },
      {
        question: "Format gambar apa saja yang diterima alat ini?",
        answer:
          "Gambar ke PDF menerima gambar JPG, PNG, WEBP, HEIC, HEIF, AVIF, dan GIF, yang semuanya digabung menjadi satu PDF.",
      },
    ],
  },

  "word-to-jpg": {
    title: "Word ke JPG: ekspor halaman dokumen sebagai gambar",
    intro:
      "Kadang Anda memerlukan halaman dokumen Word sebagai gambar, bukan file yang bisa diedit: untuk thumbnail pratinjau, unggahan media sosial, atau disematkan di alat yang tidak mendukung dokumen. Konverter Word ke JPG dari ConvertBrio mengekspor setiap halaman file DOCX Anda sebagai gambar JPG.",
    sections: [
      {
        heading: "Cara mengonversi Word ke JPG",
        body: "Unggah file DOCX Anda dan ConvertBrio merender tiap halaman sebagai gambar JPG, dengan tata letak dan format dokumen seperti saat dicetak. Dokumen multi-halaman menghasilkan satu gambar per halaman.",
      },
      {
        heading: "Penggunaan umum",
        body: "Berguna untuk membuat pratinjau visual cepat sebuah dokumen, membagikan satu halaman sebagai gambar di media sosial atau aplikasi obrolan, atau menyematkan halaman dokumen ke situs web atau presentasi ketika file asli kurang praktis.",
      },
      {
        heading: "PNG untuk teks yang lebih tajam",
        body: "Jika halaman yang Anda ekspor berisi teks kecil atau detail halus yang ingin dijaga tetap tajam, pakai Word ke PNG: format PNG yang tanpa kehilangan kualitas menghindari efek sedikit melembut di tepi teks yang bisa muncul akibat kompresi JPG.",
      },
    ],
    relatedTools: [
      { label: "Word ke PNG", href: "/id/tools/word-to-png" },
      { label: "Word ke PDF", href: "/id/tools/word-to-pdf" },
      { label: "PDF ke JPG", href: "/id/tools/pdf-to-jpg" },
    ],
    faqDescription: "Pertanyaan umum tentang mengonversi dokumen Word menjadi gambar JPG.",
    faq: [
      {
        question: "Bagaimana cara mengubah halaman dokumen Word menjadi gambar?",
        answer:
          "Unggah file DOCX Anda ke alat Word ke JPG dari ConvertBrio, dan alat ini merender tiap halaman dokumen sebagai gambar JPG yang bisa Anda unduh.",
      },
      {
        question: "Apakah ini berfungsi untuk dokumen multi-halaman?",
        answer:
          "Ya. Setiap halaman dalam dokumen diekspor sebagai gambar JPG tersendiri, sehingga file multi-halaman menghasilkan satu set gambar lengkap.",
      },
      {
        question: "Sebaiknya pakai JPG atau PNG untuk dokumen dengan teks kecil?",
        answer:
          "PNG menjaga teks kecil dan detail halus tetap tajam karena tanpa kehilangan kualitas. Pakai Word ke PNG jika teks yang jernih lebih penting daripada ukuran file yang lebih kecil dari JPG.",
      },
    ],
  },

  "word-to-png": {
    title: "Word ke PNG: ekspor halaman dengan kejernihan penuh",
    intro:
      "Saat halaman dokumen Word perlu menjadi gambar tanpa kehilangan ketajaman, misalnya untuk diagram rinci, tabel, atau tulisan kecil, PNG adalah format ekspor yang lebih baik daripada JPG. Konverter Word ke PNG dari ConvertBrio merender setiap halaman file DOCX Anda sebagai gambar PNG tanpa kehilangan kualitas.",
    sections: [
      {
        heading: "Cara mengonversi Word ke PNG",
        body: "Unggah file DOCX Anda dan ConvertBrio merender tiap halaman sebagai gambar PNG dengan kualitas penuh, menjaga detail halus dan ketajaman teks. Dokumen multi-halaman menghasilkan satu PNG per halaman.",
      },
      {
        heading: "Mengapa PNG untuk dokumen yang penuh detail",
        body: "Kompresi PNG yang tanpa kehilangan kualitas menghindari efek melembut di sekitar teks dan garis halus yang bisa muncul akibat kompresi JPG. Ini paling berarti untuk halaman berisi tabel, diagram, tulisan kecil, atau konten yang akan Anda perbesar.",
      },
      {
        heading: "Kapan JPG mungkin lebih baik",
        body: "Jika ukuran file lebih penting daripada ketajaman sempurna, misalnya untuk berbagi cepat atau pratinjau santai, Word ke JPG menghasilkan file yang lebih kecil dengan perbedaan kualitas visual yang hanya kecil untuk sebagian besar dokumen.",
      },
      {
        heading: "Tata letak, unduhan, dan batasan",
        body: [
          "DOCX Anda terlebih dahulu ditata pada halaman A4 standar, sehingga format khas Word yang rumit seperti header/footer, catatan kaki, atau ukuran halaman tidak lazim bisa tampil sedikit berbeda dibanding di Word sendiri. Dokumen satu halaman diunduh sebagai satu PNG; dokumen multi-halaman diunduh sebagai file ZIP berisi satu PNG per halaman. Unggahan dibatasi 100 MB dan dienkripsi saat dikirim.",
          "File asli Anda dihapus segera setelah dibaca untuk konversi. Hasil konversi dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam. File diproses secara otomatis di server penyedia hosting kami (Vercel dan Supabase), tanpa tinjauan manusia.",
        ],
      },
    ],
    relatedTools: [
      { label: "Word ke JPG", href: "/id/tools/word-to-jpg" },
      { label: "Word ke PDF", href: "/id/tools/word-to-pdf" },
      { label: "PDF ke PNG", href: "/id/tools/pdf-to-png" },
    ],
    faqDescription: "Pertanyaan umum tentang mengonversi dokumen Word menjadi gambar PNG.",
    faq: [
      {
        question: "Mengapa memilih PNG, bukan JPG, untuk halaman dokumen?",
        answer:
          "PNG tanpa kehilangan kualitas, jadi teks, tabel, dan diagram tampil lebih tajam daripada JPG, yang memakai kompresi sehingga detail halus bisa sedikit melembut. Pilih PNG saat kejelasan paling penting.",
      },
      {
        question: "Apakah Word ke PNG mendukung dokumen multi-halaman?",
        answer:
          "Ya. Setiap halaman dalam file DOCX Anda dirender sebagai gambar PNG terpisah. Dokumen satu halaman langsung diunduh sebagai PNG; beberapa halaman diunduh bersama sebagai file ZIP.",
      },
      {
        question: "Apakah format dokumen saya akan terjaga persis?",
        answer:
          "Teks, judul, daftar, tabel, dan gambar terbawa, tetapi tata letak khas Word yang sangat rumit (header/footer kustom, ukuran halaman tidak lazim) bisa tampil sedikit berbeda karena halaman disusun ulang pada tata letak A4 standar, bukan dirender oleh Word sendiri.",
      },
    ],
  },

  "excel-to-pdf": {
    title: "Excel ke PDF: kunci tata letak spreadsheet Anda untuk dibagikan",
    intro:
      "Sebuah spreadsheet bisa terlihat berbeda tergantung lebar kolom, font, atau versi perangkat lunak yang membukanya, dan itu masalah ketika laporan keuangan, faktur, atau tabel data harus tampil persis sama di mana saja. Konverter Excel ke PDF dari ConvertBrio mengubah spreadsheet Anda menjadi PDF tetap yang siap cetak dan tampil identik di perangkat atau perangkat lunak apa pun yang membukanya.",
    sections: [
      {
        heading: "Cara mengonversi Excel ke PDF",
        body: "Unggah file .xls atau .xlsx Anda dan ConvertBrio merender tiap sheet sebagai satu halaman (atau beberapa halaman) dalam PDF, dengan data, format sel, dan sel gabungan tetap terjaga. File hasil konversi terunduh otomatis dan siap dikirim lewat email, dicetak, atau diarsipkan.",
      },
      {
        heading: "Mengapa dikonversi ke PDF sebelum dibagikan",
        body: "PDF adalah format standar untuk dokumen jadi karena tampil identik di semua perangkat dan sistem operasi, tidak seperti spreadsheet yang bisa bergeser atau tampak berbeda tergantung apa yang terpasang. Konversi mengunci tata letak Anda sebelum laporan, faktur, atau tabel data dikirim, dan penerima tidak perlu memasang Excel untuk melihatnya.",
      },
      {
        heading: "Kasus penggunaan umum",
        body: "Alat ini sering dipakai untuk membagikan laporan keuangan dan faktur kepada orang yang tidak punya Excel, mengarsipkan cuplikan tetap sebuah spreadsheet sebelum berubah lebih jauh, dan menyiapkan tabel data untuk dicetak atau didistribusikan secara resmi.",
      },
    ],
    relatedTools: [
      { label: "Word ke PDF", href: "/id/tools/word-to-pdf" },
      { label: "PowerPoint ke PDF", href: "/id/tools/powerpoint-to-pdf" },
      { label: "Gabung PDF", href: "/id/tools/merge-pdf" },
    ],
    faqDescription: "Pertanyaan umum tentang mengonversi spreadsheet Excel ke PDF.",
    faq: [
      {
        question: "Bagaimana cara mengonversi file Excel ke PDF?",
        answer:
          "Unggah file .xls atau .xlsx Anda ke alat Excel ke PDF dari ConvertBrio, dan alat ini membuat versi PDF berformat yang siap diunduh, tanpa perlu memasang Microsoft Excel.",
      },
      {
        question: "Apakah format dan rumus spreadsheet saya tetap sama?",
        answer:
          "Format sel, sel gabungan, dan tata letak terjaga. Rumus dikonversi menjadi nilai hasil hitung terakhirnya, bukan rumus yang tetap aktif, karena PDF adalah dokumen statis yang tetap, bukan spreadsheet yang bisa diedit.",
      },
      {
        question: "Bagaimana jika spreadsheet saya punya beberapa sheet?",
        answer:
          "Setiap sheet dalam workbook Anda dikonversi dan ditempatkan di halamannya sendiri (atau beberapa halaman) dalam PDF hasil, dengan urutan yang sama seperti di file asli.",
      },
    ],
  },

  "powerpoint-to-pdf": {
    title: "PowerPoint ke PDF: bagikan slide tanpa perlu PowerPoint",
    intro: [
      "Membagikan presentasi kepada orang yang tidak punya PowerPoint, mengunci versi final sebelum ditinjau, atau memperkecil presentasi besar agar bisa dikirim lewat email: semuanya biasanya dimulai dengan mengonversi .pptx ke PDF. Konverter PowerPoint ke PDF dari ConvertBrio melakukannya di browser, gratis, satu halaman per slide dan tanpa watermark.",
      "PDF terbuka di perangkat apa pun, tidak bisa terubah tanpa sengaja, dan untuk presentasi yang banyak gambar, ukurannya sering jauh lebih kecil daripada .pptx aslinya setelah Anda juga memprosesnya dengan Kompres PDF.",
    ],
    howTo: [
      {
        step: "Simpan presentasi Anda sebagai .pptx",
        detail: "Di PowerPoint, pilih File → Save As → PowerPoint Presentation (.pptx). Format lama .ppt tidak didukung.",
      },
      {
        step: "Unggah file",
        detail: "Seret ke kotak unggah atau klik untuk menjelajah. Satu file per proses, hingga 100 MB.",
      },
      {
        step: "Konversi ke PDF",
        detail: "ConvertBrio merender tiap slide sebagai satu halaman penuh. PDF terunduh otomatis.",
      },
      {
        step: "Kompres bila perlu",
        detail: "Jika presentasi banyak gambar dan PDF masih besar, proses dengan Kompres PDF untuk mengodekan ulang gambar yang tertanam.",
      },
    ],
    sections: [
      {
        heading: "Mengapa dikonversi ke PDF sebelum dibagikan",
        body: "File .pptx memerlukan PowerPoint atau penampil yang kompatibel, dan bisa tampil berbeda tergantung font yang terpasang pada perangkat penerima: poin-poin bergeser, teks keluar dari kotaknya, font khusus diganti font umum. PDF bersifat tetap: apa yang Anda kirim persis yang mereka lihat, di ponsel, Mac, atau laptop kantor terkunci tanpa Office.",
      },
      {
        heading: "Memperkecil ukuran PowerPoint",
        body: [
          "Alat Kompres PowerPoint khusus yang menjaga file tetap bisa diedit masih dalam pengembangan. Sementara itu, cara paling andal untuk memperkecil ukuran presentasi agar bisa dikirim lewat email adalah rute dua langkah ini:",
          "Konversi .pptx ke PDF di sini, lalu proses PDF-nya dengan Kompres PDF. Langkah itu mengodekan ulang setiap foto dan tangkapan layar yang tertanam dengan kualitas efisien dan memperkecil gambar yang terlalu besar, yang merupakan tempat hampir seluruh bobot presentasi berat berada. Hasilnya file yang mudah dibagikan dan bisa dibuka di mana saja, biasanya hanya sebagian kecil dari ukuran asli. Konsekuensinya, hasilnya berupa PDF, bukan presentasi yang bisa diedit.",
        ],
      },
      {
        heading: "Apa yang terbawa dan apa yang tidak",
        body: "Teks, gambar, dan tata letak slide terkonversi dengan bersih. Animasi dan transisi slide tidak ada di PDF statis, jadi dibuang. Grafik, SmartArt, dan tabel tertanam dirender seperti yang tampak di slide tetapi tidak interaktif. Jika presentasi Anda banyak mengandalkan efek bertahap dan animasi, periksa PDF sebelum mengirim agar Anda tahu bagaimana tampilannya tanpa gerakan.",
      },
      {
        heading: "Privasi dan batasan",
        body: "File dienkripsi saat dikirim. File asli Anda dihapus segera setelah dibaca untuk konversi. Hasil konversi dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam. File diproses secara otomatis di server penyedia hosting kami (Vercel dan Supabase), tanpa tinjauan manusia. Satu .pptx per proses, hingga 100 MB, gratis, tanpa akun, tanpa watermark.",
      },
    ],
    relatedTools: [
      { label: "Kompres PDF", href: "/id/tools/compress-pdf" },
      { label: "Word ke PDF", href: "/id/tools/word-to-pdf" },
      { label: "Excel ke PDF", href: "/id/tools/excel-to-pdf" },
      { label: "Gabung PDF", href: "/id/tools/merge-pdf" },
    ],
    faqDescription: "Pertanyaan umum tentang mengonversi presentasi PowerPoint ke PDF.",
    faq: [
      {
        question: "Bagaimana cara mengonversi file PowerPoint ke PDF secara gratis?",
        answer:
          "Unggah .pptx Anda ke alat PowerPoint ke PDF dari ConvertBrio dan alat ini membuat PDF dengan satu halaman per slide, siap diunduh: tanpa memasang PowerPoint, tanpa akun, tanpa watermark.",
      },
      {
        question: "Bagaimana cara memperkecil PowerPoint agar bisa dikirim lewat email?",
        answer:
          "Konversi .pptx ke PDF di sini, lalu proses PDF itu dengan Kompres PDF. Langkah itu mengodekan ulang gambar yang tertanam, yang menjadi sumber sebagian besar ukuran presentasi besar. Hasilnya jauh lebih kecil, meski berupa PDF, bukan presentasi yang bisa diedit.",
      },
      {
        question: "Apakah animasi atau transisi akan terbawa?",
        answer:
          "Tidak. PDF bersifat statis, jadi animasi dan transisi dibuang. Teks, gambar, grafik, dan tata letak slide tetap terjaga seperti yang tampak di setiap slide.",
      },
      {
        question: "Apakah ini berfungsi dengan file .ppt lama?",
        answer:
          "Hanya format modern .pptx. Buka file di PowerPoint dan simpan sebagai .pptx (File → Save As), lalu konversi.",
      },
      {
        question: "Bisakah saya menaruh dua slide per halaman PDF, atau tata letak handout?",
        answer:
          "Saat ini belum bisa. Konverter merender satu slide penuh per halaman. Untuk tata letak gaya handout, ekspor langsung dari PowerPoint.",
      },
    ],
  },

  "merge-documents": {
    title: "Gabung Dokumen: satukan Word, Excel, dan PowerPoint menjadi satu PDF",
    intro:
      "Menggabungkan campuran file Word, Excel, dan PowerPoint menjadi satu PDF biasanya berarti mengonversi tiap file secara terpisah lalu menggabungkannya sendiri. Alat Gabung Dokumen dari ConvertBrio mengerjakan seluruh prosesnya dalam satu langkah.",
    sections: [
      {
        heading: "Cara menggabungkan dokumen",
        body: "Unggah beberapa file, campuran Word, Excel, PowerPoint, dan PDF apa pun, dan ConvertBrio mengonversi masing-masing ke PDF lalu menggabungkannya menjadi satu dokumen yang berurutan. PDF gabungan terunduh otomatis, siap dikirim lewat email, dicetak, atau diarsipkan.",
      },
      {
        heading: "Mengapa digabung menjadi satu PDF",
        body: "Satu PDF lebih mudah dibagikan, ditinjau, dan diarsipkan daripada sekumpulan file terpisah dalam format berbeda, dan memastikan penerima melihat semuanya dalam urutan yang dimaksud tanpa perlu memasang Word, Excel, atau PowerPoint.",
      },
      {
        heading: "Menjaga urutan dokumen",
        body: "File digabung sesuai urutan unggahan, jadi atur pilihan Anda sebelum mengunggah jika dokumen akhir harus berurutan tertentu: misalnya halaman sampul, lalu laporan, lalu data spreadsheet pendukung.",
      },
      {
        heading: "Batasan dan privasi",
        body: [
          "Anda bisa menggabungkan hingga 25 file dengan total ukuran 100 MB dalam satu proses. Setiap file dikonversi dan diproses di server, bukan di browser Anda, dan dienkripsi saat dikirim.",
          "File asli Anda dihapus segera setelah dibaca untuk konversi. Hasil konversi dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam. File diproses secara otomatis di server penyedia hosting kami (Vercel dan Supabase), tanpa tinjauan manusia.",
        ],
      },
    ],
    relatedTools: [
      { label: "Word ke PDF", href: "/id/tools/word-to-pdf" },
      { label: "Excel ke PDF", href: "/id/tools/excel-to-pdf" },
      { label: "PowerPoint ke PDF", href: "/id/tools/powerpoint-to-pdf" },
    ],
    faqDescription: "Pertanyaan umum tentang menggabungkan file Word, Excel, dan PowerPoint menjadi satu PDF.",
    faq: [
      {
        question: "Jenis file apa saja yang bisa saya gabungkan?",
        answer:
          "Campuran file Word (.docx), Excel (.xlsx, .xls), PowerPoint (.pptx), dan PDF apa pun dalam satu unggahan: setiap file non-PDF dikonversi ke PDF terlebih dahulu, lalu semuanya digabung.",
      },
      {
        question: "Dalam urutan apa file saya digabung?",
        answer:
          "File digabung sesuai urutan Anda mengunggahnya. Atur pilihan file Anda terlebih dahulu jika Anda memerlukan urutan tertentu pada dokumen akhir.",
      },
      {
        question: "Apakah ini berfungsi dengan file lama .doc/.ppt/.xls?",
        answer:
          "Format lama .doc dan .ppt tidak didukung: simpan file tersebut sebagai .docx atau .pptx terlebih dahulu. Spreadsheet lama .xls tetap bisa, karena konversi Excel di ConvertBrio membaca format itu secara langsung.",
      },
    ],
  },

  "remove-background": {
    title: "Hapus Latar Belakang dengan AI: potongan transparan otomatis",
    intro: [
      "Memotong subjek dari latar belakangnya biasanya berarti membuka perangkat lunak desain dan menyeleksi manual dengan teliti sampai ke setiap helai rambut. Penghapus latar belakang AI dari ConvertBrio melakukannya secara otomatis: unggah foto, dan dalam hitungan detik Anda mendapat subjek di atas latar transparan, berupa PNG yang siap ditempatkan di latar baru mana pun.",
      "Gratis, tanpa akun, dan tanpa watermark. Model AI-nya open-source dan dijalankan sendiri, bukan lewat layanan AI pihak ketiga, jadi foto Anda tidak dikirim ke API eksternal.",
    ],
    howTo: [
      {
        step: "Unggah foto",
        detail: "JPG, PNG, WEBP, HEIC, atau AVIF, hingga 100 MB. Subjek yang jelas di depan latar yang cukup polos memberi hasil terbaik.",
      },
      {
        step: "Biarkan model memprosesnya",
        detail: "AI mendeteksi subjek utama, baik orang, produk, maupun benda, dan menghapus semua yang lain.",
      },
      {
        step: "Unduh PNG transparan",
        detail: "Hasil potongan terunduh sebagai PNG dengan latar transparan, yang bisa Anda tempatkan di situs web, desain, atau warna solid.",
      },
    ],
    sections: [
      {
        heading: "Yang bisa Anda lakukan dengan hasil potongan",
        body: "",
        list: [
          "Menaruh foto produk di latar putih bersih atau latar bermerek untuk daftar produk toko",
          "Memasukkan pas foto ke halaman tim, kartu identitas, atau slide",
          "Membuat stiker, logo, atau grafik tanpa latar berbentuk kotak",
          "Menggabungkan subjek ke dalam adegan yang berbeda",
          "Membuat foto bergaya paspor, meski Pembuat Pas Foto Paspor mengurus ukuran dan latar putihnya sekaligus dalam satu langkah",
        ],
      },
      {
        heading: "Mendapatkan tepi yang paling bersih",
        body: "Hasil terbaik didapat saat subjek terlihat jelas terpisah dari latar di belakangnya: pencahayaan baik, latar yang cukup polos, dan kontras yang wajar di tepinya. Model bisa kesulitan dengan rambut halus yang menjuntai, benda transparan atau berkaca, batas berkontras rendah (mantel abu-abu di depan tembok abu-abu), dan foto dengan beberapa orang yang saling tumpang tindih. Jika tepinya kasar, foto sumber yang lebih bersih biasanya menyelesaikannya; untuk sentuhan kecil, potong hasilnya dengan alat Potong Gambar.",
      },
      {
        heading: "Privasi",
        body: [
          "Model penghapus latar belakang ini dijalankan sendiri dan bersifat open-source: foto Anda tidak pernah dikirim ke API eksternal maupun dilihat orang. Unggahan dibatasi 100 MB dan dienkripsi saat dikirim.",
          "File asli Anda dihapus segera setelah dibaca untuk konversi. Hasil konversi dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam. File diproses secara otomatis di server penyedia hosting kami (Vercel dan Supabase), tanpa tinjauan manusia.",
        ],
      },
    ],
    relatedTools: [
      { label: "Pembuat Pas Foto Paspor", href: "/id/tools/passport-photo-maker" },
      { label: "Potong Gambar", href: "/id/tools/crop-image" },
      { label: "Konverter Gambar", href: "/id/tools/image-converter" },
      { label: "Kompres Gambar", href: "/id/tools/compress-image" },
    ],
    faqDescription: "Pertanyaan umum tentang penghapus latar belakang AI dari ConvertBrio.",
    faq: [
      {
        question: "Apakah penghapus latar belakang ini gratis?",
        answer:
          "Ya, tanpa akun, tanpa watermark, dan tanpa batas jumlah foto. Unggahan bisa hingga 100 MB.",
      },
      {
        question: "Format apa yang akan saya dapatkan?",
        answer:
          "PNG dengan latar transparan: format standar tanpa kehilangan kualitas untuk gambar tanpa latar solid. Buka di editor mana pun untuk menempatkannya pada latar baru.",
      },
      {
        question: "Apakah berfungsi pada semua jenis foto?",
        answer:
          "Alat ini dirancang untuk subjek umum seperti orang, produk, dan benda di depan latar yang cukup jelas. Adegan yang ramai, benda berkaca, rambut halus, dan tepi berkontras rendah lebih sulit dan mungkin memerlukan foto sumber yang lebih bersih.",
      },
      {
        question: "Apakah berfungsi pada foto dengan beberapa subjek?",
        answer:
          "Alat ini dioptimalkan untuk satu subjek utama yang jelas. Beberapa subjek yang saling tumpang tindih bisa menghasilkan tepi yang kurang presisi.",
      },
      {
        question: "Apakah foto saya dikirim ke layanan AI perusahaan lain?",
        answer:
          "Tidak. Model berjalan dengan perangkat lunak open-source, tanpa layanan AI pihak ketiga. File asli Anda dihapus segera setelah dibaca, dan hasilnya dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam.",
      },
    ],
  },

  "passport-photo-maker": {
    title: "Pembuat Pas Foto Paspor: alat foto ukuran paspor online gratis",
    intro: [
      "Pas foto paspor yang sesuai ketentuan memerlukan latar putih polos, subjek di tengah dengan ukuran yang tepat, dan dimensi fisik yang benar, yang biasanya berarti pergi ke apotek atau studio foto. Pembuat pas foto paspor dari ConvertBrio mengerjakan ketiganya secara otomatis: unggah selfie atau pas foto yang jelas, dan dalam hitungan detik Anda mendapat foto 2×2 inci siap cetak dengan latar putih bersih.",
      "Gratis, tanpa akun dan tanpa watermark. Setiap langkah, yaitu deteksi wajah dan penghapusan latar, memakai model open-source yang dijalankan sendiri, jadi foto Anda tidak dikirim ke layanan luar.",
    ],
    howTo: [
      {
        step: "Ambil pas foto yang polos",
        detail:
          "Menghadap depan, ekspresi netral, pencahayaan merata, kepala dan bahu masuk bingkai dengan ruang di sekelilingnya. Selfie dari ponsel di depan dinding terang sudah cukup.",
      },
      {
        step: "Unggah",
        detail: "Satu orang per foto, hingga 100 MB. Foto kelompok dan close-up yang terpotong terlalu rapat tidak akan diproses.",
      },
      {
        step: "Biarkan alat menyusun fotonya",
        detail:
          "ConvertBrio menemukan wajah Anda, memotong dan menempatkannya di tengah sesuai proporsi paspor, menghapus latar, lalu mengisinya dengan putih solid.",
      },
      {
        step: "Unduh dan cetak dalam ukuran 2×2 inci",
        detail:
          "Anda mendapat gambar 1200×1200 piksel pada 600 DPI: ukuran 2×2 inci yang dipakai untuk foto paspor dan visa AS dan India.",
      },
    ],
    sections: [
      {
        heading: "Cara kerjanya",
        body: "Unggah foto, dan ConvertBrio mendeteksi wajah Anda, memotong dan menempatkannya di tengah sesuai proporsi paspor standar, menghapus latar asli, menggantinya dengan putih solid, lalu menghasilkan foto 2x2 inci pada 600 DPI (1200x1200 piksel), ukuran yang dipakai untuk foto paspor dan visa AS maupun India. Tidak ada yang perlu Anda atur atau sesuaikan secara manual.",
      },
      {
        heading: "Ukuran pas foto paspor menurut negara",
        body: "Alat ini menghasilkan format 2×2 inci (51×51 mm). Itu persis sesuai persyaratan beberapa negara dan menjadi titik awal yang bisa dipangkas untuk negara lain; selalu periksa spesifikasi terbaru dari pemerintah Anda sebelum mengirim.",
        table: {
          headers: ["Negara", "Ukuran yang diwajibkan", "Apakah hasil 2×2 inci cocok?"],
          rows: [
            ["Amerika Serikat", "2 × 2 in (51 × 51 mm)", "Ya, langsung"],
            ["India", "2 × 2 in (51 × 51 mm)", "Ya, langsung"],
            ["Inggris Raya", "35 × 45 mm", "Potong dari hasil 2×2"],
            ["Schengen / UE", "35 × 45 mm", "Potong dari hasil 2×2"],
            ["Kanada", "50 × 70 mm", "Potong ulang; proporsinya berbeda"],
            ["Australia", "35 × 45 mm", "Potong dari hasil 2×2"],
          ],
        },
      },
      {
        heading: "Mendapatkan hasil terbaik",
        body: "Pakai foto yang terang dan menghadap depan, dengan seluruh kepala dan bahu terlihat serta ada ruang di sekelilingnya: selfie ponsel di depan dinding polos sudah bagus. Hindari foto yang kepalanya terpotong rapat di tepi, karena alat memerlukan ruang di atas kepala dan di sekitar bahu untuk menghitung pemotongan dengan proporsi yang benar. Satu orang per foto; foto kelompok atau close-up yang terpotong rapat tidak akan diproses dengan benar.",
      },
      {
        heading: "Yang tidak dijamin alat ini",
        body: "Alat ini menghasilkan foto yang tampak profesional, berukuran benar, dan berada di tengah dengan latar putih asli: bukan pemeriksaan kepatuhan bersertifikat. Alat ini tidak memverifikasi kemerataan cahaya, ekspresi, silau kacamata, atau kriteria lain yang diperiksa manual dalam tinjauan foto resmi ICAO atau pemerintah. Untuk permohonan paspor dengan syarat penerimaan yang ketat, anggap ini titik awal yang kuat dan pastikan sesuai persyaratan foto terbaru negara Anda sebelum mengirim.",
      },
      {
        heading: "Privasi",
        body: [
          "Deteksi wajah dan penghapusan latar sama-sama memakai model open-source yang dijalankan sendiri: foto Anda tidak pernah dikirim ke API pihak ketiga atau ditinjau oleh orang.",
          "File asli Anda dihapus segera setelah dibaca untuk konversi. Hasil konversi dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam. File diproses secara otomatis di server penyedia hosting kami (Vercel dan Supabase), tanpa tinjauan manusia.",
        ],
      },
    ],
    relatedTools: [
      { label: "Hapus Latar Belakang", href: "/id/tools/remove-background" },
      { label: "Potong Gambar", href: "/id/tools/crop-image" },
      { label: "Ubah Ukuran Gambar", href: "/id/tools/resize-image" },
    ],
    faqDescription: "Pertanyaan umum tentang pembuat pas foto paspor dari ConvertBrio.",
    faq: [
      {
        question: "Foto ukuran berapa yang dihasilkan alat ini?",
        answer:
          "Foto 2x2 inci (1200x1200 piksel) pada 600 DPI: ukuran standar untuk foto paspor dan visa AS maupun India.",
      },
      {
        question: "Apakah ini gratis?",
        answer:
          "Ya. Mengunggah foto dan membuat pas foto ukuran paspor dengan latar putih tidak memerlukan akun atau pembayaran.",
      },
      {
        question: "Apakah foto ini pasti diterima untuk permohonan paspor saya?",
        answer:
          "Alat ini menghasilkan foto berukuran benar, berada di tengah, dengan latar putih asli, yang mencakup alasan penolakan paling umum. Alat ini tidak menjalankan pemeriksaan kepatuhan resmi secara penuh (pencahayaan, ekspresi, silau kacamata), jadi pastikan sesuai persyaratan terbaru negara Anda sebelum mengajukan permohonan resmi.",
      },
      {
        question: "Bagaimana jika muncul pesan tidak ada wajah yang ditemukan, atau lebih dari satu wajah?",
        answer:
          "Pakai foto yang jelas, menghadap depan, dan terang, dengan tepat satu orang dalam bingkai. Foto kelompok, tampak samping, atau gambar yang sangat gelap/buram bisa membuat deteksi wajah tidak berjalan dengan benar.",
      },
      {
        question: "Mengapa muncul pesan bahwa ruang di sekitar wajah tidak cukup?",
        answer:
          "Alat memerlukan margin yang terlihat di atas kepala dan di sekitar bahu pada foto asli untuk menghitung pemotongan dengan proporsi yang benar. Jika foto Anda sudah terpotong rapat pada wajah, ambil foto baru dari jarak sedikit lebih jauh.",
      },
    ],
  },

  "ai-image-enhancer": {
    title: "Peningkat Gambar AI",
    intro:
      "Foto yang datar, kurang cahaya, atau agak buram sering kali hanya perlu penyesuaian otomatis yang konsisten, bukan penyuntingan manual. Peningkat gambar dari ConvertBrio menyeimbangkan pencahayaan dan warna serta mempertajam detail dalam satu langkah, tanpa slider.",
    sections: [
      {
        heading: "Yang dilakukan alat ini",
        body: "Peningkat Gambar menerapkan serangkaian penyesuaian otomatis yang tetap pada foto Anda: merentangkan kontras agar memakai seluruh rentang tonal, menaikkan saturasi dan kecerahan sedikit, serta mempertajam detail, sehingga menghasilkan perbaikan yang konsisten tanpa Anda menyetel tiap pengaturan.",
      },
      {
        heading: "Cara kerjanya",
        body: "Unggah gambar dan ConvertBrio menjalankannya melalui alur pemrosesan gambar otomatis (normalisasi kontras, warna, dan penajaman) langsung di server kami: algoritma deterministik, bukan model AI generatif, itulah sebabnya hasilnya konsisten dan pemrosesannya cepat.",
      },
      {
        heading: "Yang tidak bisa diperbaiki",
        body: "Ini adalah proses peningkatan, bukan alat penambah resolusi atau pemulihan: alat ini tidak akan memulihkan detail secara tajam dari gambar beresolusi sangat rendah, memperbaiki blur akibat gerakan atau foto yang tidak fokus, atau merekonstruksi detail yang hilang. Untuk menaikkan resolusi dengan model super-resolusi yang terlatih, pakai Pembesar Gambar AI.",
      },
    ],
    relatedTools: [
      { label: "Pembesar Gambar AI", href: "/id/tools/ai-upscaler" },
      { label: "Kompres Gambar", href: "/id/tools/compress-image" },
    ],
    faqDescription: "Pertanyaan umum tentang peningkat gambar dari ConvertBrio.",
    faq: [
      {
        question: "Perbaikan seperti apa yang dilakukan?",
        answer:
          "Alat ini otomatis merentangkan kontras, menaikkan warna dan kecerahan sedikit, serta mempertajam detail: proses penyesuaian yang tetap dan konsisten, bukan penyuntingan manual per foto.",
      },
      {
        question: "Apa bedanya dengan Pembesar Gambar AI?",
        answer:
          "Peningkat Gambar menerapkan penyesuaian otomatis pada resolusi yang sama dengan alur pemrosesan gambar yang tetap. Pembesar Gambar AI adalah alat terpisah yang memakai model super-resolusi terlatih untuk menaikkan resolusi gambar dan merekonstruksi detail.",
      },
      {
        question: "Apakah ada batas ukuran file?",
        answer:
          "Unggahan dibatasi 100 MB. File asli Anda dihapus segera setelah dibaca, dan hasilnya dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam. File diproses secara otomatis di server penyedia hosting kami (Vercel dan Supabase), tanpa tinjauan manusia.",
      },
    ],
  },

  "ai-upscaler": {
    title: "Pembesar Gambar AI: naikkan resolusi tanpa blur",
    intro: [
      "Memperbesar gambar kecil atau beresolusi rendah dengan pengubahan ukuran biasa hanya merentangkan piksel yang ada ke area lebih luas, sehingga hasilnya buram dan kotak-kotak. Pembesar gambar AI dari ConvertBrio memakai model super-resolusi terlatih untuk menaikkan resolusi sekitar 4×, merekonstruksi detail yang masuk akal (tepi, tekstur, struktur halus) alih-alih meregangkan apa yang sudah ada.",
    ],
    howTo: [
      {
        step: "Unggah gambar yang ingin diperbesar",
        detail: "Foto dunia nyata memberi hasil terbaik. JPG, PNG, WEBP, HEIC, atau AVIF, hingga 100 MB.",
      },
      {
        step: "Jalankan pembesaran",
        detail:
          "Model AI bawaan merekonstruksi detail pada resolusi sekitar 4× dari gambar masukan, bekerja per petak untuk menghemat memori. Ini memakan beberapa detik lebih lama daripada konversi biasa.",
      },
      {
        step: "Unduh PNG",
        detail: "Hasilnya selalu berupa PNG dengan resolusi 4× dari masukan (yang mungkin telah diperkecil lebih dulu).",
      },
    ],
    sections: [
      {
        heading: "Pembesaran AI vs pengubahan ukuran",
        body: "Alat Ubah Ukuran Gambar mengubah dimensi piksel dengan interpolasi standar: pas untuk memperkecil gambar, tetapi tidak bisa menambah detail yang tidak ada di file, sehingga memperbesar menghasilkan gambar buram. Pembesaran AI adalah pendekatan sebaliknya: model telah belajar seperti apa detail foto nyata dan melukiskan versi beresolusi tinggi yang meyakinkan. Pakai ubah ukuran untuk memperkecil, pakai pembesar untuk memperbesar.",
      },
      {
        heading: "Kapan paling membantu",
        body: "",
        list: [
          "Memperbesar foto lama, kecil, atau beresolusi rendah untuk dicetak",
          "Menyiapkan gambar ukuran web untuk layar besar atau layar DPI tinggi",
          "Mendapatkan kembali ukuran yang layak dari foto yang dipotong banyak",
          "Mempertajam gambar yang agak buram (meski Peningkat Gambar AI lebih cocok untuk perbaikan pada ukuran yang sama)",
        ],
      },
      {
        heading: "Yang bisa diharapkan",
        body: "Hasil paling kuat pada foto alami: orang, tempat, benda. Model bisa kesulitan dengan teks padat, gambar garis yang tajam, tangkapan layar, dan grafik yang sangat bergaya, kadang menciptakan tekstur yang sebenarnya tidak ada. Gambar sumber beresolusi sangat tinggi diperkecil lebih dulu sebelum dibesarkan agar pemrosesan tetap wajar, sehingga memasukkan foto yang sudah besar tidak akan menambah banyak. Ini adalah rekonstruksi, bukan pemulihan detail asli yang sebenarnya.",
      },
      {
        heading: "Privasi dan batasan",
        body: [
          "Model dijalankan sendiri, tanpa layanan AI pihak ketiga. Unggahan dibatasi 100 MB dan dienkripsi saat dikirim.",
          "File asli Anda dihapus segera setelah dibaca untuk konversi. Hasil konversi dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam. File diproses secara otomatis di server penyedia hosting kami (Vercel dan Supabase), tanpa tinjauan manusia.",
        ],
      },
    ],
    relatedTools: [
      { label: "Ubah Ukuran Gambar", href: "/id/tools/resize-image" },
      { label: "Peningkat Gambar AI", href: "/id/tools/ai-image-enhancer" },
      { label: "Kompres Gambar", href: "/id/tools/compress-image" },
    ],
    faqDescription: "Pertanyaan umum tentang pembesar gambar AI dari ConvertBrio.",
    faq: [
      {
        question: "Apa bedanya pembesaran AI dengan sekadar memperbesar ukuran gambar?",
        answer:
          "Pengubahan ukuran biasa meregangkan piksel yang ada, sehingga hasilnya buram. Pembesaran AI merekonstruksi detail yang masuk akal dengan model terlatih, menghasilkan pembesaran yang jauh lebih tajam.",
      },
      {
        question: "Seberapa besar gambar diperbesar?",
        answer:
          "Sekitar 4× resolusi masukan (yang diperkecil dulu jika sangat besar). Hasilnya berupa PNG.",
      },
      {
        question: "Apakah berfungsi untuk teks atau tangkapan layar?",
        answer:
          "Alat ini disetel untuk foto. Teks padat, gambar garis, dan tangkapan layar bisa menghasilkan detail yang dikarang atau tercoreng: pengubahan ukuran biasa sering lebih aman untuk jenis itu.",
      },
      {
        question: "Apakah ada batas ukuran file?",
        answer:
          "Unggahan dibatasi 100 MB. File asli Anda dihapus segera setelah dibaca, dan hasilnya dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam.",
      },
      {
        question: "Mengapa pemrosesannya agak lama?",
        answer:
          "Model berjalan di server dan memproses gambar besar per petak untuk menghemat memori, jadi butuh beberapa detik lebih lama daripada konversi format biasa.",
      },
    ],
  },

  "compress-pdf-to-size": {
    title: "Kompres PDF ke Ukuran Tertentu dalam KB atau MB",
    intro: [
      "Portal unggah, lamaran kerja, dan sistem email sering menolak PDF yang melewati batas tegas: 200 KB, 500 KB, 2 MB. Alat ini menerima batas itu sebagai masukan. Isi ukuran maksimum, dan ConvertBrio mengompres PDF Anda bertahap, mengukur ukuran file sebenarnya setelah tiap langkah, sampai pas.",
      "Berbeda dari kompresor umum yang sekadar memperkecil file sejauh mungkin, alat ini bekerja menuju angka Anda dan jujur soal hasilnya. Alat ini menampilkan ukuran yang dicapai, dan jika batas Anda terlalu kecil untuk dicapai tanpa merusak halaman, alat ini mengatakannya, bukan berpura-pura berhasil.",
    ],
    howTo: [
      { step: "Unggah PDF Anda", detail: "Satu file per proses, hingga 100 MB." },
      { step: "Masukkan ukuran maksimum", detail: "Ketik angka dari formulir, lalu pilih KB atau MB." },
      { step: "Kompres", detail: "Kami mencoba pengaturan yang makin kuat secara bertahap dan berhenti pada hasil pertama yang muat di bawah batas Anda." },
      { step: "Periksa ukuran yang dicapai", detail: "Pesan hasil menampilkan ukuran yang dicapai. Unduh file, atau coba batas yang lebih besar jika target belum tercapai." },
    ],
    sections: [
      {
        heading: "Cara kerja pencarian ukuran tepat",
        body: "Satu lintasan jarang mendarat tepat di angka tertentu, jadi alat ini menjalankan tangga pengaturan. Setiap langkah mengodekan ulang foto yang tertanam dari file asli Anda pada resolusi dan kualitas yang lebih rendah daripada langkah sebelumnya, mulai dari yang lembut lalu makin kuat. Setelah setiap langkah, hasil sebenarnya diukur. Hasil pertama yang sama dengan atau di bawah batas Anda adalah yang Anda terima, artinya kualitas terjaga sebanyak yang diizinkan target Anda.",
      },
      {
        heading: "Saat target tidak bisa dicapai",
        body: "Beberapa PDF memang tidak banyak menyusut: file yang terdiri dari grafik vektor atau teks biasa sudah kecil, dan batas 20 KB untuk scan 40 halaman tidak realistis. Jika bahkan pengaturan terkuat membiarkan file di atas batas Anda, alat tidak pernah melaporkan keberhasilan. Alat memberikan versi terkecil yang bisa dibuat, menampilkan ukurannya, dan menyarankan opsi seperti batas yang lebih besar atau memisahkan PDF menjadi beberapa bagian.",
      },
      {
        heading: "Apa yang diubah",
        body: "Gambar JPEG yang tertanam dikompres ulang dan, jika sangat besar, diperkecil skalanya, dan properti dokumen seperti judul dan penulis dikosongkan. Teks, font, dan tata letak halaman dibiarkan. PDF hasil scan yang terdiri dari foto paling diuntungkan, sedangkan ukuran target yang sangat kecil akan membuat gambar tampak lebih lembut.",
      },
      {
        heading: "Privasi dan batasan",
        body: "File dienkripsi saat dikirim. File asli Anda dihapus segera setelah dibaca untuk konversi. Hasil konversi dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam. File diproses secara otomatis di server penyedia hosting kami (Vercel dan Supabase), tanpa tinjauan manusia. PDF yang dilindungi kata sandi tidak dapat diproses.",
      },
    ],
    relatedTools: [
      { label: "Kompres PDF", href: "/id/tools/compress-pdf" },
      { label: "Pisah PDF", href: "/id/tools/split-pdf" },
      { label: "Pengatur Halaman PDF", href: "/id/tools/pdf-page-organizer" },
      { label: "Kompres Gambar", href: "/id/tools/compress-image" },
    ],
    faqDescription: "Pertanyaan umum tentang mengompres PDF ke ukuran maksimum dalam KB atau MB.",
    faq: [
      { question: "Bagaimana cara mengompres PDF hingga di bawah 200 KB?", answer: "Unggah PDF, masukkan 200 dan pilih KB, lalu kompres. Alat mencoba pengaturan yang lebih kuat sampai file muat, atau memberi tahu ukuran terkecil yang bisa dicapai jika 200 KB tidak realistis untuk dokumen itu." },
      { question: "Apakah selalu tepat mencapai ukuran yang saya tentukan?", answer: "Tidak. Alat membuat file sama dengan atau di bawah batas Anda bila itu mungkin tanpa penurunan kualitas yang tidak dapat diterima. Bila tidak mungkin, Anda akan melihat ukuran terkecil yang dicapai, bukan keberhasilan palsu." },
      { question: "Apakah hasilnya persis di batas yang saya tentukan?", answer: "Hasilnya sama dengan atau di bawah batas, biasanya sedikit di bawahnya, karena pengaturan berubah bertahap, bukan terus-menerus." },
      { question: "Mengapa PDF saya nyaris tidak menyusut?", answer: "PDF yang sebagian besar berisi teks dan bentuk vektor sudah ringkas. Penghematan terbesar datang dari PDF yang berisi foto atau halaman hasil scan." },
      { question: "Apakah ada perbedaan kualitas dibanding alat Kompres PDF biasa?", answer: "Kompres PDF menerapkan satu tingkat yang tetap. Alat ini mulai dari tingkat yang sama dan hanya menjadi lebih kuat jika batas Anda menuntutnya." },
      { question: "Apakah dokumen saya disimpan?", answer: "File asli Anda dihapus segera setelah dibaca, dan hasilnya dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam. File diproses secara otomatis dan tidak pernah ditinjau oleh orang." },
    ],
  },

  "photo-signature-resizer": {
    title: "Ubah Ukuran Foto & Tanda Tangan: piksel tepat dan ukuran file maksimum",
    intro: [
      "Formulir pendaftaran jarang menerima foto apa adanya dari ponsel. Mereka meminta lebar dan tinggi tertentu dalam piksel dan file yang tidak lebih besar dari sekian KB. Alat pengubah ukuran ini menghasilkan persis itu: masukkan dimensi dan batas ukuran dari formulir Anda, lalu unduh JPG yang memenuhi keduanya.",
      "Alat ini menangani foto maupun tanda tangan. Pilih rasio aspek atau preset untuk mengisi dimensi, tentukan apakah dipotong atau diberi margin putih saat gambar Anda berbentuk lain, dan atur KB maksimum. Dimensi yang Anda masukkan tidak pernah diubah demi memenuhi ukuran file: hanya kualitas JPEG yang diturunkan.",
    ],
    howTo: [
      { step: "Unggah foto atau tanda tangan Anda", detail: "JPG, PNG, WEBP, HEIC, AVIF, atau GIF." },
      { step: "Atur ukuran", detail: "Pilih preset atau masukkan lebar dan tinggi dalam piksel. Pilih rasio aspek jika formulir Anda menentukannya." },
      { step: "Tambahkan batas ukuran file", detail: "Masukkan KB maksimum, atau biarkan kosong untuk mempertahankan kualitas tinggi." },
      { step: "Pilih potong atau margin", detail: "Potong mengisi ukuran persis; margin putih menjaga seluruh gambar tetap di dalamnya, cocok untuk tanda tangan." },
      { step: "Ubah ukuran dan periksa hasilnya", detail: "Pesan hasil mengonfirmasi piksel yang tepat dan KB akhir." },
    ],
    sections: [
      {
        heading: "Dimensi tepat, baru ukuran file",
        body: "Gambar pertama-tama diubah ukurannya persis ke lebar dan tinggi yang Anda minta. Lalu alat mencari kualitas JPEG tertinggi yang menjaga file tetap di bawah batas Anda, sehingga dimensi tetap tidak berubah. Jika batas terlalu kecil bahkan pada kualitas terendah, alat mengatakannya dan menampilkan ukuran yang dicapai, bukan mengklaim berhasil. Dalam kasus itu, coba dimensi yang sedikit lebih kecil.",
      },
      {
        heading: "Preset dan nilai kustom",
        body: "Preset mencakup ukuran piksel yang bisa direproduksi secara akurat, seperti pas foto paspor 35 × 45 mm pada 300 DPI (413 × 531 px) atau foto 2 × 2 inci pada 300 DPI (600 × 600 px). Setiap portal berbeda, jadi selalu bandingkan dengan petunjuk formulir Anda sendiri dan pakai kolom kustom jika berbeda dengan preset.",
      },
      {
        heading: "Potong atau beri margin",
        body: "Saat bentuk gambar Anda tidak sama dengan target, memotong mengisi bingkai dan memangkas tepinya, dengan fokus pada bagian gambar yang paling menonjol. Margin mempertahankan semuanya dan mengisi ruang sisa dengan warna putih. Pilih margin untuk tanda tangan di atas kertas agar tidak ada goresan tinta yang terpotong.",
      },
      {
        heading: "Tanda tangan",
        body: "Foto atau pindai tanda tangan Anda di atas kertas putih polos dengan cahaya yang baik, unggah, lalu pakai preset tanda tangan 3:1 atau ukuran Anda sendiri. Tinta hitam di atas putih menghasilkan file yang sangat kecil.",
      },
    ],
    relatedTools: [
      { label: "Kompres Gambar", href: "/id/tools/compress-image" },
      { label: "Ubah Ukuran Gambar", href: "/id/tools/resize-image" },
      { label: "Pembuat Pas Foto Paspor", href: "/id/tools/passport-photo-maker" },
      { label: "Kompresor Gambar Massal", href: "/id/tools/batch-image-compressor" },
    ],
    faqDescription: "Pertanyaan umum tentang mengubah ukuran foto atau tanda tangan untuk formulir online.",
    faq: [
      { question: "Bagaimana cara mengubah ukuran foto menjadi 200 × 230 piksel di bawah 20 KB?", answer: "Unggah foto, masukkan 200 untuk lebar, 230 untuk tinggi, dan 20 untuk KB maksimum, lalu ubah ukuran. Pesan hasil mengonfirmasi ukuran yang tepat." },
      { question: "Apakah dimensi diubah demi mencapai batas KB?", answer: "Tidak. Dimensi tetap persis seperti yang dimasukkan dan hanya kualitas JPEG yang diturunkan." },
      { question: "Bagaimana jika batas tidak bisa dicapai?", answer: "Anda akan melihat pesan berisi ukuran terkecil yang dicapai. Coba dimensi yang lebih kecil atau batas yang lebih tinggi." },
      { question: "Apakah hasilnya selalu JPG?", answer: "Ya, karena sebagian besar formulir mewajibkan JPG. File diberi nama berisi dimensinya agar mudah ditemukan." },
      { question: "Bisakah saya mempertahankan bentuk asli foto?", answer: "Bisa. Pilih opsi margin putih dan seluruh gambar muat di dalam ukuran target." },
      { question: "Apakah ini memenuhi aturan portal ujian atau visa saya?", answer: "Alat ini menghasilkan persis piksel dan ukuran maksimum yang Anda masukkan. Persyaratan berbeda di tiap portal dan bisa berubah, jadi pastikan angkanya di portal itu sendiri." },
    ],
  },

  "batch-image-compressor": {
    title: "Kompresor Gambar Massal: kompres banyak foto ke satu ukuran target",
    intro: [
      "Mengompres foto satu per satu itu lambat ketika formulir, daftar produk, atau situs web memerlukan dua puluh foto di bawah batas yang sama. Unggah seluruh set, masukkan satu ukuran target dalam KB, dan ConvertBrio mengompres setiap gambar agar muat.",
      "Setiap file ditangani sendiri-sendiri, jadi satu file bermasalah tidak pernah menghalangi yang lain. Anda mendapat laporan per file, unduhan terpisah untuk tiap gambar, dan ZIP berisi seluruh kumpulan.",
    ],
    howTo: [
      { step: "Pilih gambar Anda", detail: "Taruh hingga 50 gambar sekaligus, total hingga 100 MB." },
      { step: "Masukkan ukuran target", detail: "Satu batas dalam KB berlaku untuk setiap gambar." },
      { step: "Kompres", detail: "Setiap gambar diproses secara independen: kualitas diturunkan lebih dulu, dan dimensi diperkecil hanya jika perlu." },
      { step: "Unduh", detail: "Simpan file satu per satu dari daftar, atau unduh semuanya sebagai ZIP." },
    ],
    sections: [
      {
        heading: "Hasil per file, bukan semua atau tidak sama sekali",
        body: "Daftar hasil menampilkan tiap file, ukuran yang dicapai, dan apakah masih dalam target. Jika sebuah gambar tidak bisa turun di bawah batas tanpa penurunan kualitas ekstrem, gambar itu ditandai di atas target, bukan diloloskan diam-diam. File yang sama sekali tidak bisa dibaca dilaporkan gagal, sementara yang lain selesai seperti biasa.",
      },
      {
        heading: "Cara tiap gambar dikompres",
        body: "Untuk setiap gambar, alat mencari kualitas tertinggi yang memenuhi target Anda dalam format yang sama (JPG tetap JPG, WEBP tetap WEBP). Jika bahkan kualitas terendah masih terlalu besar, alat mengurangi dimensi dalam langkah-langkah kecil. Foto HEIC dari iPhone dikonversi ke JPG karena HEIC bukan format keluaran yang didukung. GIF animasi hanya mempertahankan frame pertamanya.",
      },
      {
        heading: "Kapan memakai massal dan kapan tunggal",
        body: "Pakai alat Kompres Gambar biasa untuk satu file. Pakai versi massal saat banyak gambar punya batas yang sama, misalnya mengunggah set produk, sekumpulan dokumen ke portal, atau foto untuk email.",
      },
    ],
    relatedTools: [
      { label: "Kompres Gambar", href: "/id/tools/compress-image" },
      { label: "Ubah Ukuran Foto & Tanda Tangan", href: "/id/tools/photo-signature-resizer" },
      { label: "Gambar ke PDF", href: "/id/tools/image-to-pdf" },
      { label: "Konverter Gambar", href: "/id/tools/image-converter" },
    ],
    faqDescription: "Pertanyaan umum tentang mengompres beberapa gambar ke ukuran yang sama.",
    faq: [
      { question: "Berapa banyak gambar yang bisa dikompres sekaligus?", answer: "Hingga 50 gambar, selama totalnya di bawah 100 MB." },
      { question: "Apakah semua gambar dijamin mencapai target?", answer: "Tidak. Setiap hasil diukur, dan gambar yang tetap di atas target ditandai agar Anda tahu mana yang perlu perhatian." },
      { question: "Bisakah saya mengunduh file satu per satu?", answer: "Bisa. Setiap gambar yang berhasil punya tautan unduhnya sendiri, dan ZIP juga tersedia." },
      { question: "Apa yang terjadi jika satu file rusak?", answer: "File itu dilaporkan gagal sementara yang lain diproses seperti biasa." },
      { question: "Apakah format gambar saya berubah?", answer: "Tidak, kecuali foto HEIC, yang menjadi JPG." },
      { question: "Apakah gambar saya disimpan?", answer: "File asli Anda dihapus segera setelah dibaca, dan hasilnya dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam. File diproses secara otomatis dan tidak pernah ditinjau oleh orang." },
    ],
  },

  "image-to-text": {
    title: "Gambar ke Teks: ekstrak teks dari foto atau tangkapan layar",
    intro: [
      "Foto dokumen, tangkapan layar, papan tulis, dan papan tanda semuanya memuat teks yang tidak bisa Anda pilih. Gambar ke Teks memakai pengenalan karakter optik (OCR) untuk membaca teks itu dan mengembalikannya sebagai karakter yang bisa disalin, dicari, dan diedit.",
      "Unggah gambar, pilih bahasa teksnya, dan teks yang dikenali muncul di halaman, siap disalin. File .txt biasa terunduh pada saat yang sama.",
    ],
    howTo: [
      { step: "Unggah gambar", detail: "JPG, PNG, WEBP, HEIC, AVIF, atau GIF. Foto yang tajam dan lurus memberi hasil terbaik." },
      { step: "Pilih bahasa", detail: "Pilih bahasa penulisan teks untuk akurasi terbaik." },
      { step: "Ekstrak teks", detail: "Pengenalan teks berjalan otomatis di server penyedia hosting kami." },
      { step: "Salin atau unduh", detail: "Pilih teks di halaman, pakai Salin teks, atau buka file .txt yang terunduh." },
    ],
    sections: [
      {
        heading: "Yang Anda dapatkan",
        body: "Teks yang dikenali sebagai karakter biasa, dalam urutan baca, dengan jeda baris tetap terjaga. Ini teks polos, jadi font, warna, dan tata letak tidak dipertahankan. Jika Anda menginginkan dokumen yang bisa diedit dengan paragraf, pakai Pindai ke Word.",
      },
      {
        heading: "Mendapatkan hasil yang akurat",
        body: "Kualitas pengenalan mengikuti kualitas gambar. Pakai foto teks cetak yang tajam, terang, dan diambil lurus dari depan, pada resolusi di mana huruf terbaca jelas. Potong tepi dan latar belakang, serta pilih bahasa yang benar.",
      },
      {
        heading: "Keterbatasan yang perlu diperhatikan",
        body: "Tulisan tangan tidak dikenali dengan andal. Gambar beresolusi rendah, blur, silau, miring, dan font dekoratif menurunkan akurasi. Tabel dan tata letak multi-kolom bisa keluar dengan urutan acak karena OCR membaca baris demi baris. Selalu periksa hasilnya sebelum Anda mengandalkannya.",
      },
      {
        heading: "Privasi",
        body: "Gambar dienkripsi saat dikirim. File asli Anda dihapus segera setelah dibaca untuk konversi. Hasil konversi dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam. File diproses secara otomatis di server penyedia hosting kami (Vercel dan Supabase), tanpa tinjauan manusia. Teks yang dikenali hanya ditampilkan kepada Anda.",
      },
    ],
    relatedTools: [
      { label: "Pindai ke Word", href: "/id/tools/scan-to-word" },
      { label: "OCR PDF", href: "/id/tools/ocr-pdf" },
      { label: "PDF ke Word", href: "/id/tools/pdf-to-word" },
      { label: "Konverter Gambar", href: "/id/tools/image-converter" },
    ],
    faqDescription: "Pertanyaan umum tentang mengekstrak teks dari gambar dengan OCR.",
    faq: [
      { question: "Bagaimana cara menyalin teks dari gambar?", answer: "Unggah gambar, jalankan ekstraksi, dan pakai Salin teks pada hasilnya. Teks yang sama juga terunduh sebagai file .txt." },
      { question: "Apakah berfungsi pada tangkapan layar?", answer: "Ya. Tangkapan layar berisi teks cetak atau teks di layar biasanya dikenali dengan sangat akurat." },
      { question: "Apakah bisa membaca tulisan tangan?", answer: "Tidak dengan andal. OCR dirancang untuk teks cetak dan ketikan." },
      { question: "Bahasa apa saja yang didukung?", answer: "Inggris, Portugis, Spanyol, Prancis, Jerman, Italia, dan Indonesia." },
      { question: "Mengapa teks saya acak-acakan?", answer: "Tabel dan halaman multi-kolom bisa terbaca dengan urutan yang salah. Potong gambar satu kolom per kali." },
      { question: "Bagaimana dengan PDF?", answer: "Pakai Pindai ke Word untuk PDF hasil scan, atau OCR PDF untuk membuatnya bisa dicari." },
    ],
  },

  "scan-to-word": {
    title: "Bagaimana cara mengonversi dokumen hasil scan menjadi file Word yang bisa diedit?",
    intro: [
      "Gunakan pengenalan karakter optik (OCR). Hasil scan atau foto halaman hanyalah gambar, jadi Word tidak punya teks untuk diedit sampai OCR membaca huruf-huruf di dalam gambar. Pindai ke Word melakukan itu dan membuat dokumen Word (DOCX) sungguhan berisi teks yang dikenali, yang kemudian bisa Anda edit, format, dan simpan.",
      "Unggah foto halaman atau PDF hasil scan, pilih bahasa teksnya, lalu unduh DOCX-nya. Alat ini dimaksudkan untuk mengambil tulisan dari dokumen kertas seperti surat, kontrak, dan formulir cetak. Hasilnya berupa teks, bukan salinan desain halaman, jadi siapkan waktu untuk memeriksa dan menerapkan ulang format yang Anda perlukan.",
    ],
    howTo: [
      { step: "Pindai atau foto halamannya", detail: "Rata, cahaya merata, dan diambil lurus dari depan memberi hasil terbaik. Aplikasi pemindai di ponsel yang menyimpan PDF atau JPG sudah cukup." },
      { step: "Unggah gambar atau PDF", detail: "JPG, PNG, WEBP, HEIC, AVIF, GIF, atau PDF. File hingga 100 MB; PDF hingga 50 halaman." },
      { step: "Pilih bahasa", detail: "Inggris, Portugis, Spanyol, Prancis, Jerman, Italia, atau Indonesia. Pilihan yang tepat membantu aksen dan karakter khusus keluar dengan benar." },
      { step: "Unduh DOCX", detail: "Buka di Word, Google Docs, atau LibreOffice, lalu periksa terhadap aslinya dan perbaiki kata yang salah terbaca." },
    ],
    sections: [
      {
        heading: "Bisakah saya langsung memindai ke Word?",
        body: [
          "Tidak dalam satu langkah di situs ini, dan tidak juga di Word sendiri: ConvertBrio tidak terhubung ke pemindai, jadi Anda lebih dulu membuat hasil scan dengan pemindai atau aplikasi ponsel, lalu mengunggah filenya di sini.",
          "Ada baiknya membedakan dua hal yang berbeda. Menyisipkan hasil scan ke Word (Insert > Pictures) menaruh halaman di dokumen sebagai gambar: tampilannya benar, tetapi kata-katanya tidak bisa diedit. Mengonversi hasil scan dengan OCR, seperti yang dilakukan alat ini, membaca karakternya dan memberi Anda teks yang bisa diedit. Pilih penyisipan jika Anda hanya perlu halaman itu tampil di dokumen; pilih konversi jika Anda perlu mengubah, menyalin, atau mencari kata-katanya.",
        ],
      },
      {
        heading: "Sebelum dan sesudah: apa yang diharapkan",
        body: "Contoh transformasinya, memakai surat hasil scan:",
        table: {
          headers: ["", "Hasil scan Anda (sebelum)", "File Word (sesudah)"],
          rows: [
            ["Apa itu", "Gambar sebuah surat cetak", "DOCX berisi teks surat"],
            ["Memilih sebuah kalimat", "Tidak mungkin", "Bisa seperti teks Word biasa"],
            ["Cari dengan Ctrl+F / Cmd+F", "Tidak menemukan apa pun", "Menemukan setiap kecocokan"],
            ["Tata letak", "Persis seperti yang dicetak", "Paragraf biasa; satu halaman scan disusul halaman berikutnya, dengan pemisah halaman di antaranya"],
            ["Logo kop surat, stempel, foto", "Terlihat", "Tidak disertakan"],
          ],
        },
      },
      {
        heading: "Cara memeriksa dan memperbaiki hasilnya",
        body: "OCR akurat pada teks cetak yang bersih tetapi tidak pernah sempurna, jadi periksa dulu sebelum Anda mengandalkan file ini. Buka DOCX berdampingan dengan hasil scan asli dan baca keduanya.",
        list: [
          "Periksa angka, tanggal, jumlah, dan nama lebih dulu: angka adalah karakter yang paling sering salah terbaca (0 dan O, 1 dan l, 5 dan S).",
          "Cari kata yang terpisah atau menyatu di tempat yang salah, dan simbol nyasar di mana noda atau lipatan melewati teks.",
          "Jalankan pemeriksa ejaan Word: kata tak bermakna sering menandai kata yang salah terbaca.",
          "Terapkan ulang judul, huruf tebal, tabel, dan kolom secara manual di tempat yang Anda perlukan.",
        ],
      },
      {
        heading: "Isi file Word",
        body: "Teks yang dikenali, dipecah menjadi paragraf, dengan satu halaman scan disusul halaman berikutnya. Ini dokumen teks yang bisa diedit, bukan salinan tampilan halaman. Font, kolom, gambar, dan tabel dari aslinya tidak direproduksi.",
      },
      {
        heading: "Mengapa format berubah setelah konversi?",
        body: "Karena alat ini membaca huruf, bukan tata letak. Ia menyusun paragraf dari baris yang ditemukannya dan tidak membangun ulang desain halaman. Itulah sebabnya Anda akan melihat perbedaan berikut:",
        list: [
          "Tabel keluar sebagai baris teks, bukan sel. Buat ulang tabel di Word dan salin nilai-nilainya.",
          "Kolom dibaca baris demi baris, sehingga teks dari dua kolom bisa tercampur. Potong atau pindai satu kolom per kali jika urutan penting.",
          "Font, ukuran, warna, dan spasi diganti dengan bawaan Word. Pilih teksnya dan atur ulang gayanya.",
          "Gambar, logo, dan tanda tangan tidak terbawa. Tambahkan kembali dari file asli.",
          "Hasil scan yang miring, berbayang, atau beresolusi rendah menghasilkan lebih banyak kesalahan. Pindai ulang secara rata pada sekitar 300 DPI daripada mencoba memperbaiki hasil yang buruk.",
          "Halaman yang terbalik atau menyamping terbaca buruk. Foto diluruskan memakai orientasi yang disimpan kamera Anda, tetapi hasil scan tanpa data itu sebaiknya diputar sebelum diunggah.",
        ],
      },
      {
        heading: "Jika muncul kesalahan atau hasil kosong",
        body: "Jika alat tidak menemukan teks yang bisa dibaca, alat mengatakannya, bukan mengembalikan file kosong. Dalam kasus itu, coba gambar teks cetak yang lebih tajam dan beresolusi lebih tinggi, luruskan halaman, dan pastikan bahasanya sesuai dengan dokumen. PDF yang lebih dari 50 halaman ditolak; pisahkan menjadi beberapa bagian dengan alat Pisah PDF terlebih dahulu.",
      },
      {
        heading: "Pindai ke Word vs PDF ke Word",
        body: "PDF ke Word untuk PDF yang sudah berisi teks sungguhan, dan berusaha mempertahankan format. Pindai ke Word untuk gambar berisi teks, yang belum punya teks untuk dikonversi sampai OCR membacanya. Jika Anda bisa memilih kata di PDF Anda, pakai PDF ke Word.",
      },
      {
        heading: "Keterbatasan",
        body: "Akurasi bergantung pada hasil scan. Tulisan tangan, scan beresolusi rendah atau miring, cetakan yang pudar, dan tata letak rumit seperti tabel dan kolom sering dikenali dengan buruk. Siapkan diri untuk memeriksa setiap dokumen. Jika alat tidak menemukan teks yang bisa dibaca, alat memberi tahu Anda, bukan mengembalikan file kosong.",
      },
      {
        heading: "Privasi",
        body: "Unggahan dienkripsi saat dikirim. File asli Anda dihapus segera setelah dibaca untuk konversi. Hasil konversi dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam. File diproses secara otomatis di server penyedia hosting kami (Vercel dan Supabase), tanpa tinjauan manusia.",
      },
    ],
    relatedTools: [
      { label: "Gambar ke Teks", href: "/id/tools/image-to-text" },
      { label: "OCR PDF", href: "/id/tools/ocr-pdf" },
      { label: "PDF ke Word", href: "/id/tools/pdf-to-word" },
      { label: "Gambar ke PDF", href: "/id/tools/image-to-pdf" },
      { label: "Pisah PDF", href: "/id/tools/split-pdf" },
    ],
    faqDescription: "Pertanyaan umum tentang mengonversi hasil scan menjadi dokumen Word yang bisa diedit.",
    faq: [
      { question: "Bagaimana cara mengonversi dokumen hasil scan ke Word?", answer: "Unggah hasil scan sebagai gambar atau PDF, pilih bahasa, lalu unduh DOCX yang dibuat alat ini. Periksa terhadap aslinya, karena OCR bisa salah membaca karakter." },
      { question: "Bisakah saya memindai dokumen langsung ke Word?", answer: "Tidak langsung. Pindai halaman dengan pemindai atau aplikasi ponsel lebih dulu, lalu unggah filenya di sini. Menyisipkan hasil scan ke Word sebagai gambar membuatnya tidak bisa diedit; mengonversinya dengan OCR memberi Anda teks yang bisa diedit." },
      { question: "Bagaimana cara mengonversi beberapa foto halaman menjadi satu file Word?", answer: "Gabungkan foto-foto itu menjadi satu PDF dengan Gambar ke PDF, lalu unggah PDF tersebut di sini. Teks tiap halaman disusul halaman berikutnya, hingga 50 halaman." },
      { question: "Mengapa tabel atau tata letak kolom saya hilang?", answer: "Alat ini mengeluarkan teks yang dikenali sebagai paragraf biasa, jadi tabel dan kolom tidak dibangun ulang. Buat ulang di Word dari teksnya." },
      { question: "Apakah file Word akan terlihat seperti hasil scan saya?", answer: "Tidak. Anda mendapat teks yang dikenali sebagai paragraf yang bisa diedit. Tata letak, font, dan gambar tidak direproduksi." },
      { question: "Apakah bisa menangani PDF multi-halaman?", answer: "Ya, hingga 50 halaman. Teks tiap halaman disusul halaman berikutnya." },
      { question: "Apakah bisa membaca tulisan tangan?", answer: "Tidak dengan andal. Alat ini dibuat untuk teks cetak." },
      { question: "Sebaiknya pakai ini atau PDF ke Word?", answer: "Pakai Pindai ke Word saat PDF-nya berupa hasil scan atau foto. Pakai PDF ke Word saat Anda sudah bisa memilih teksnya." },
      { question: "Apakah gratis?", answer: "Ya, tanpa perlu akun." },
    ],
  },

  "pdf-page-organizer": {
    title: "Pengatur Halaman PDF: susun ulang, putar, dan hapus halaman secara visual",
    intro: [
      "Menata ulang PDF lebih mudah jika Anda bisa melihat halamannya. Unggah file dan setiap halaman muncul sebagai thumbnail. Pindahkan halaman ke urutan baru, putar yang terscan menyamping, buang yang tidak Anda perlukan, dan simpan hasilnya sebagai PDF baru.",
      "Semuanya bekerja dengan tombol maupun seret dan lepas, jadi Anda bisa mengatur halaman dari keyboard atau ponsel.",
    ],
    howTo: [
      { step: "Unggah PDF Anda", detail: "Thumbnail setiap halaman muncul di halaman." },
      { step: "Susun ulang", detail: "Seret halaman ke tempat baru, atau pakai tombol panah di bawahnya." },
      { step: "Putar atau hapus", detail: "Pakai tombol putar untuk memutar halaman searah jarum jam. Pakai tombol hapus untuk membuangnya; Anda bisa memulihkannya sebelum menyimpan." },
      { step: "Buat PDF baru", detail: "Jika Anda menghapus halaman, Anda akan diminta konfirmasi. File asli Anda tidak pernah diubah." },
    ],
    sections: [
      {
        heading: "Pratinjau sebelum memutuskan",
        body: "Thumbnail digambar di browser Anda, jadi Anda melihat dengan tepat halaman mana yang mana sebelum apa pun diunggah untuk diproses. Halaman yang dihapus tetap tampil di layar, diredupkan, dan bisa dipulihkan sampai Anda membuat filenya.",
      },
      {
        heading: "Kontrol yang mudah diakses",
        body: "Setiap aksi punya tombol berlabel: pindah lebih awal, pindah lebih akhir, putar, dan hapus atau pulihkan. Seret dan lepas hanyalah tambahan, bukan keharusan, sehingga alat ini bekerja dengan keyboard dan pembaca layar.",
      },
      {
        heading: "Menghapus halaman dengan aman",
        body: "Sebelum PDF dibuat dengan halaman yang dihapus, alat meminta Anda mengonfirmasi berapa halaman yang akan dibuang. File baru terpisah dari file asli Anda, yang tetap tidak tersentuh di perangkat Anda.",
      },
      {
        heading: "Batasan",
        body: "File hingga 100 MB. PDF yang dilindungi kata sandi tidak bisa dibuka. PDF yang sangat panjang memerlukan waktu lebih lama untuk dipratinjau karena tiap thumbnail dirender bergantian.",
      },
    ],
    relatedTools: [
      { label: "Gabung PDF", href: "/id/tools/merge-pdf" },
      { label: "Pisah PDF", href: "/id/tools/split-pdf" },
      { label: "Putar PDF", href: "/id/tools/rotate-pdf" },
      { label: "Kompres PDF ke Ukuran Tertentu", href: "/id/tools/compress-pdf-to-size" },
    ],
    faqDescription: "Pertanyaan umum tentang menyusun ulang, memutar, dan menghapus halaman PDF.",
    faq: [
      { question: "Bagaimana cara menyusun ulang halaman di PDF?", answer: "Unggah PDF, lalu seret thumbnail ke urutan baru atau pakai tombol lebih awal dan lebih akhir, kemudian buat PDF barunya." },
      { question: "Bisakah saya melakukannya tanpa mouse?", answer: "Bisa. Setiap aksi punya tombol yang dapat dijangkau dan ditekan dengan keyboard." },
      { question: "Bisakah saya membatalkan penghapusan halaman?", answer: "Bisa. Halaman yang dihapus tetap terlihat dengan tombol Pulihkan sampai Anda membuat filenya." },
      { question: "Apakah file asli saya berubah?", answer: "Tidak. Anda mendapat PDF baru, dan file asli tetap seperti semula." },
      { question: "Bisakah saya memutar hanya satu halaman?", answer: "Bisa. Putaran berlaku pada halaman tertentu yang Anda pilih, 90 derajat per klik." },
      { question: "Mengapa PDF saya tidak mau dimuat?", answer: "PDF yang dilindungi kata sandi dan PDF yang rusak tidak bisa dipratinjau. Hapus kata sandinya terlebih dahulu." },
    ],
  },

  "metadata-remover": {
    title: "Penghapus Metadata: bersihkan data tersembunyi dari foto, PDF, dan file Office",
    intro: [
      "File membawa informasi yang tidak Anda lihat. Foto dari ponsel bisa mencatat di mana dan kapan foto diambil serta dengan perangkat apa. PDF atau dokumen Word bisa menyimpan nama penulis, perusahaan, dan perangkat lunak yang dipakai. Penghapus Metadata membersihkan data tersembunyi itu sebelum Anda membagikan file.",
      "Alat ini bekerja pada foto, PDF, serta file Word, Excel, dan PowerPoint, dan tidak pernah mengubah format file: JPG tetap JPG, DOCX tetap DOCX.",
    ],
    howTo: [
      { step: "Unggah file", detail: "JPG, PNG, WEBP, AVIF, TIFF, PDF, DOCX, XLSX, atau PPTX." },
      { step: "Tinjau apa yang akan dihapus", detail: "Kategori untuk setiap jenis file tercantum di halaman." },
      { step: "Bersihkan file", detail: "Metadata dihapus dan pesan hasil merangkum apa yang telah dibersihkan." },
      { step: "Unduh salinan yang bersih", detail: "Nama file Anda dipertahankan dengan tambahan -clean." },
    ],
    sections: [
      {
        heading: "Yang dihapus",
        body: "Untuk foto: detail EXIF seperti model kamera dan ponsel, tanggal pengambilan, dan lokasi GPS, ditambah data XMP dan IPTC. Untuk PDF: judul, penulis, subjek, kata kunci, pembuat, produsen, tanggal, dan metadata XMP. Untuk Word, Excel, dan PowerPoint: penulis, terakhir diubah oleh, judul, perusahaan, tanggal, dan detail aplikasi.",
      },
      {
        heading: "Yang tetap ada",
        body: "Konten yang terlihat tidak tersentuh: gambar, halaman, teks. Sebagian data struktural diperlukan agar file tetap valid dan tetap ada. Konten yang bisa Anda lihat atau yang berada di dalam isi dokumen, seperti komentar, perubahan terlacak, sheet tersembunyi, atau nama yang tertulis di halaman, bukan metadata dan tidak dihapus. Tinjau hal-hal itu secara terpisah.",
      },
      {
        heading: "Foto mempertahankan orientasi dan warnanya",
        body: "Foto diputar ke orientasi yang benar sebelum tag orientasi dihapus, jadi tidak berputar menyamping. Profil warna dipertahankan agar warna tidak bergeser.",
      },
      {
        heading: "Privasi",
        body: "File dienkripsi saat dikirim. File asli Anda dihapus segera setelah dibaca untuk konversi. Hasil konversi dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam. File diproses secara otomatis di server penyedia hosting kami (Vercel dan Supabase), tanpa tinjauan manusia.",
      },
    ],
    relatedTools: [
      { label: "Kompres Gambar", href: "/id/tools/compress-image" },
      { label: "Kompres PDF", href: "/id/tools/compress-pdf" },
      { label: "Konverter Gambar", href: "/id/tools/image-converter" },
      { label: "Kompres Word", href: "/id/tools/compress-word" },
    ],
    faqDescription: "Pertanyaan umum tentang menghapus metadata tersembunyi dari file.",
    faq: [
      { question: "Bagaimana cara menghapus lokasi GPS dari foto?", answer: "Unggah foto. Alat menghapus data EXIF, termasuk koordinat GPS, dan mengembalikan salinan bersih dalam format yang sama." },
      { question: "Apakah menghapus metadata menurunkan kualitas?", answer: "Gambar dikodekan ulang dalam formatnya sendiri, jadi JPG bisa berubah sangat sedikit. Gambar tidak diubah ukurannya atau dikonversi." },
      { question: "Bisakah alat ini menghapus penulis dari dokumen Word?", answer: "Bisa. Alat mengosongkan penulis, terakhir diubah oleh, perusahaan, dan judul yang tersimpan di properti dokumen." },
      { question: "Apakah ada yang tertinggal?", answer: "Data struktural yang diperlukan agar file valid tetap ada, begitu juga konten yang terlihat dan hal-hal seperti komentar atau perubahan terlacak di dalam dokumen." },
      { question: "Format apa saja yang didukung?", answer: "JPG, PNG, WEBP, AVIF, TIFF, PDF, DOCX, XLSX, dan PPTX." },
      { question: "Apakah file asli saya berubah?", answer: "Tidak. Anda mengunduh salinan bersih yang terpisah." },
    ],
  },
};
