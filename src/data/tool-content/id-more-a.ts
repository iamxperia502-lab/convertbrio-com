import type { ToolContentEntry } from "../toolContent";

// Indonesian (id) long-form tool content, slice A. Links point to the /id/ tool pages.

export const toolContentIdMoreA: Record<string, ToolContentEntry> = {
  "heic-to-jpg": {
    title: "Konverter HEIC ke JPG: Buka Foto iPhone di Mana Saja",
    intro: [
      "iPhone dan iPad menyimpan foto sebagai HEIC secara bawaan: format yang kompresinya sangat efisien, tetapi gagal dibuka di banyak perangkat lunak sehari-hari, mulai dari PC Windows lama hingga formulir unggahan tertentu dan aplikasi penyunting foto. Konverter HEIC ke JPG dari ConvertBrio mengatasinya dalam sekejap: unggah fotonya, lalu Anda menerimanya kembali sebagai JPG standar yang bisa dibuka di browser, aplikasi, atau perangkat apa pun tanpa plugin maupun paket codec.",
      "Anda tidak perlu mengubah pengaturan di ponsel atau memasang apa pun. Proses konversi berjalan di server kami, mempertahankan resolusi asli foto, dan menjaga orientasinya sehingga foto potret tidak keluar dalam posisi miring. Hasilnya adalah JPG biasa yang bisa Anda kirim lewat email, unggah ke portal pemerintah atau lowongan kerja, sisipkan ke dokumen, atau buka di penyunting foto mana pun.",
    ],
    howTo: [
      {
        step: "Pindahkan file HEIC ke perangkat Anda",
        detail:
          "Kirim foto dari iPhone lewat AirDrop, email, atau kabel, atau unduh dari iCloud. Nama file akan berakhiran .heic atau .heif.",
      },
      {
        step: "Unggah ke konverter",
        detail: "Seret file ke kotak unggah atau klik untuk memilihnya. Satu foto per konversi, hingga 100 MB.",
      },
      {
        step: "Klik Konversi",
        detail:
          "ConvertBrio mendekode gambar HEIC lalu mengodekannya ulang sebagai JPG dengan resolusi penuh, dengan koreksi rotasi berdasarkan tag orientasi yang tertanam.",
      },
      {
        step: "Unduh JPG-nya",
        detail: "File hasil konversi terunduh otomatis dan bisa dibuka di browser, penampil gambar, klien email, atau formulir unggahan mana pun.",
      },
    ],
    sections: [
      {
        heading: "Mengapa file HEIC sering bermasalah",
        body: [
          "HEIC (High Efficiency Image Container) menyimpan foto dengan ukuran sekitar separuh dari JPG setara pada kualitas yang sama, itulah sebabnya Apple menjadikannya format bawaan iOS pada 2017. Konsekuensinya adalah jangkauan: HEIC bergantung pada codec HEVC, yang tidak bisa didekode, atau ditangani secara tidak konsisten, oleh banyak situs web, Windows versi lama, perangkat Android, dan aplikasi pihak ketiga.",
          "Jika Anda pernah mengunggah foto iPhone ke sebuah formulir lalu muncul pesan «jenis file tidak didukung», melihat gambar mini yang kosong, atau ditegur rekan karena gambarnya tidak bisa dibuka, hampir pasti penyebabnya HEIC. Mengonversinya ke JPG menghilangkan ketergantungan itu sepenuhnya.",
        ],
      },
      {
        heading: "HEIC dan JPG sekilas",
        body: "Keduanya adalah format lossy, tetapi dirancang berselang seperempat abad dan berbeda dalam hal fitur yang didukung.",
        table: {
          headers: ["", "HEIC", "JPG"],
          rows: [
            ["Ukuran file", "~50% lebih kecil pada kualitas setara", "Lebih besar, tetapi dikenali di mana saja"],
            ["Kompatibilitas", "Hanya perangkat Apple dan browser/OS terbaru", "Semua perangkat, browser, aplikasi, dan formulir"],
            ["Transparansi", "Didukung", "Tidak didukung"],
            ["Banyak gambar / data kedalaman", "Didukung (Live Photos, kedalaman potret)", "Hanya satu gambar datar"],
            ["Paling cocok untuk", "Penyimpanan di perangkat Apple", "Berbagi, mengunggah, menyunting di mana saja"],
          ],
        },
      },
      {
        heading: "Apakah konversi menurunkan kualitas?",
        body: "Ada satu kali kompresi ulang, karena HEIC dan JPG memakai perhitungan yang berbeda, tetapi pada kualitas JPG bawaan ConvertBrio perbedaannya tidak terlihat pada ukuran tampilan normal maupun saat dicetak. Resolusi foto (jumlah megapiksel) tidak berubah. Jika Anda berencana menyunting foto secara intensif setelahnya, konversikan ke PNG dengan Konverter Gambar agar tidak menumpuk lapisan kompresi lossy kedua di kemudian hari.",
      },
      {
        heading: "Mengonversi beberapa foto iPhone",
        body: "Alat ini mengonversi satu file HEIC per unggahan. Untuk banyak foto, cara tercepat adalah mengubah kamera iPhone Anda agar memotret dalam JPG mulai sekarang (Pengaturan → Kamera → Format → Paling Kompatibel), lalu gunakan konverter ini untuk foto HEIC yang sudah ada di pustaka Anda. Untuk menggabungkan beberapa foto iPhone menjadi satu file setelah dikonversi, Gambar ke PDF menerima HEIC secara langsung dan menyatukan beberapa gambar menjadi satu PDF.",
      },
      {
        heading: "Privasi",
        body: "Foto Anda dienkripsi saat dikirim. File asli Anda dihapus segera setelah dibaca untuk konversi. Hasil konversi dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam. File diproses secara otomatis di server penyedia hosting kami (Vercel dan Supabase), tanpa tinjauan manusia.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang cara mengonversi foto HEIC iPhone ke JPG.",
    faq: [
      {
        question: "Mengapa foto iPhone saya tidak bisa dibuka di komputer?",
        answer:
          "Kemungkinan besar fotonya tersimpan sebagai HEIC, format foto bawaan Apple sejak iOS 11. Banyak PC Windows, ponsel Android, aplikasi lama, dan situs web tidak mendukung HEIC. Dengan mengonversinya ke JPG lewat ConvertBrio, foto itu bisa dibuka di mana saja.",
      },
      {
        question: "Apakah mengonversi HEIC ke JPG menurunkan kualitas?",
        answer:
          "Ada sedikit kompresi ulang saat dikodekan ke JPG, karena HEIC dan JPG memakai metode kompresi yang berbeda. Namun pada kualitas bawaan ConvertBrio, perbedaannya tidak terlihat mata pada tampilan normal, dan resolusinya tidak berubah.",
      },
      {
        question: "Apakah foto saya akan terputar atau miring?",
        answer:
          "Tidak. ConvertBrio membaca tag orientasi dari file HEIC dan menerapkan rotasi yang benar ke dalam JPG, sehingga foto potret dan lanskap keluar dengan posisi yang tepat.",
      },
      {
        question: "Bisakah saya mengonversi HEIC ke PNG, bukan JPG?",
        answer:
          "Bisa. Gunakan alat Konverter Gambar dan pilih PNG sebagai format keluaran jika Anda butuh file tanpa kehilangan kualitas, atau jika berencana menyunting gambar berulang kali dan ingin menghindari kompresi lossy tambahan.",
      },
      {
        question: "Bagaimana cara menghentikan iPhone memotret dalam HEIC?",
        answer:
          "Di iPhone, buka Pengaturan → Kamera → Format lalu pilih «Paling Kompatibel». Foto baru akan disimpan sebagai JPG. Foto yang sudah ada di pustaka tetap berformat HEIC dan masih perlu dikonversi.",
      },
      {
        question: "Apakah HEIF sama dengan HEIC?",
        answer:
          "Untuk keperluan ini, pada dasarnya ya. HEIF adalah standar kontainernya; HEIC adalah implementasi Apple dengan kompresi HEVC. Alat ini menerima file .heic maupun .heif.",
      },
    ],
  },

  "jpg-to-png": {
    title: "Konverter JPG ke PNG: Tambahkan Transparansi dan Detail Tanpa Kehilangan Kualitas",
    intro:
      "JPG cocok untuk foto kecil yang mudah dibagikan, tetapi tidak bisa menyimpan transparansi dan kualitasnya turun sedikit setiap kali disimpan ulang. Konverter JPG ke PNG dari ConvertBrio mengubah JPG Anda menjadi PNG tanpa kehilangan kualitas dalam hitungan detik. Itulah format yang Anda butuhkan sebelum menyunting gambar lebih lanjut, menempatkannya di latar berwarna, atau memakainya sebagai logo atau ikon.",
    sections: [
      {
        heading: "Kapan Perlu Mengonversi JPG ke PNG",
        body: "Konversikan ke PNG kapan pun Anda memerlukan kanal alfa (transparansi), misalnya untuk memotong logo dari latarnya, atau saat Anda akan menyunting gambar berulang kali dan ingin menghindari penurunan kualitas akibat menyimpan ulang JPG. PNG juga pilihan yang lebih aman untuk tangkapan layar, diagram, dan apa pun yang berisi teks tajam atau tepi tegas, karena kompresi JPG bisa menimbulkan keburaman dan artefak di sekitar detail halus.",
      },
      {
        heading: "Cara Kerja Konversi",
        body: "Unggah JPG Anda, lalu ConvertBrio mendekode dan mengodekannya ulang sebagai PNG, dengan mempertahankan setiap piksel secara persis. Karena JPG memang tidak menyimpan transparansi, PNG hasilnya akan memiliki latar yang tidak transparan kecuali Anda menghapusnya secara terpisah: konversi ini berurusan dengan format dan kualitas, bukan penghapusan latar otomatis.",
      },
      {
        heading: "Ukuran File yang Perlu Diperkirakan",
        body: "File PNG biasanya lebih besar daripada JPG asalnya, karena PNG tidak membuang data seperti kompresi lossy pada JPG. Untuk foto dengan banyak detail atau tekstur, perkirakan PNG berukuran beberapa kali lipat dari JPG aslinya: itu timbal balik yang wajar untuk kualitas tanpa kehilangan data.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang cara mengonversi gambar JPG ke PNG.",
    faq: [
      {
        question: "Apakah JPG ke PNG menambahkan transparansi secara otomatis?",
        answer:
          "Tidak. File JPG tidak menyimpan transparansi, jadi hasil konversi ke PNG adalah gambar tidak transparan dengan tampilan yang sama. PNG hanya memberi Anda format tanpa kehilangan kualitas sebagai dasar, misalnya sebelum menyunting atau menambahkan transparansi di penyunting gambar.",
      },
      {
        question: "Mengapa PNG saya jauh lebih besar daripada JPG aslinya?",
        answer:
          "PNG memakai kompresi tanpa kehilangan data, yang mempertahankan setiap piksel alih-alih membuang detail seperti JPG. Akurasi itu harus dibayar dengan file yang lebih besar: ini wajar, bukan tanda ada masalah.",
      },
      {
        question: "Apakah PNG lebih baik daripada JPG?",
        answer:
          "Tidak ada yang lebih baik secara mutlak: PNG paling cocok untuk grafik, logo, dan apa pun yang membutuhkan transparansi atau detail tanpa kehilangan data, sedangkan JPG lebih baik untuk foto yang mengutamakan ukuran file kecil daripada akurasi piksel yang sempurna.",
      },
    ],
  },

  "jpg-to-webp": {
    title: "Konverter JPG ke WEBP: File Lebih Kecil untuk Situs Web Lebih Cepat",
    intro:
      "WEBP dibuat oleh Google khusus agar halaman web termuat lebih cepat, dengan file yang biasanya 25-35% lebih kecil daripada JPG setara pada kualitas visual yang sama. Konverter JPG ke WEBP dari ConvertBrio mengodekan ulang foto Anda dalam hitungan detik, sehingga jadi cara cepat bagi siapa pun yang mengoptimalkan gambar untuk situs web, buletin email, atau aplikasi.",
    sections: [
      {
        heading: "Mengapa Perlu Beralih ke WEBP",
        body: "Jika kecepatan muat halaman penting, demi SEO, pengguna ponsel, atau sekadar situs yang terasa lebih gesit, WEBP adalah salah satu peningkatan termudah. Ia mendukung rentang kualitas yang sama dengan JPG tetapi menghasilkan file yang jauh lebih kecil, dan browser modern (Chrome, Firefox, Safari, Edge) semuanya menampilkannya secara bawaan, sehingga bagi sebagian besar audiens saat ini tidak ada masalah kompatibilitas.",
      },
      {
        heading: "Cara Kerja Konversi",
        body: "Unggah JPG Anda dan ConvertBrio akan mengonversinya ke WEBP secara otomatis, dengan resolusi yang sama dan algoritma kompresi WEBP sebagai pengganti JPG. Unduhan siap dalam hitungan detik dan bisa langsung ditaruh di folder gambar situs web atau sistem pengelola konten Anda.",
      },
      {
        heading: "Kapan JPG Masih Pilihan yang Lebih Baik",
        body: "Jika gambar Anda harus berfungsi di perangkat lunak atau konteks yang tidak mendukung WEBP, seperti beberapa klien email lama, alat desain tertentu, atau alur kerja cetak, simpan juga versi JPG-nya. Namun untuk penggunaan web secara umum, WEBP adalah pilihan bawaan yang lebih efisien.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang cara mengonversi gambar JPG ke WEBP.",
    faq: [
      {
        question: "Seberapa kecil WEBP dibandingkan JPG?",
        answer:
          "File WEBP biasanya 25-35% lebih kecil daripada JPG yang tampak setara, itulah sebabnya WEBP menjadi pilihan standar untuk gambar situs web yang mengutamakan kecepatan muat.",
      },
      {
        question: "Apakah semua browser mendukung WEBP?",
        answer:
          "Ya, semua browser modern utama, termasuk Chrome, Firefox, Safari, dan Edge, menampilkan WEBP secara bawaan. Aman dipakai untuk publikasi web secara umum saat ini.",
      },
      {
        question: "Apakah gambar saya akan tampak berbeda setelah dikonversi ke WEBP?",
        answer:
          "Pada pengaturan bawaan ConvertBrio, perbedaan visualnya dapat diabaikan untuk sebagian besar foto. Kompresi WEBP lebih efisien daripada JPG, sehingga bisa mencapai kualitas yang sama dengan ukuran file lebih kecil.",
      },
    ],
  },

  "jpg-to-avif": {
    title: "Konverter JPG ke AVIF: Kompresi Gambar Generasi Berikutnya",
    intro:
      "AVIF adalah format gambar paling efisien yang didukung luas saat ini, sering kali memperkecil JPG hingga 50% atau lebih pada kualitas visual yang sama. Konverter JPG ke AVIF dari ConvertBrio menangani proses pengodeannya untuk Anda, memberi pemilik situs dan pengembang cara mudah untuk mulai memakai format ini tanpa alat baris perintah atau pipeline build.",
    sections: [
      {
        heading: "Apa yang Membuat AVIF Berbeda",
        body: "AVIF berbasis teknologi kompresi gambar dari codec video AV1, yang jauh lebih canggih daripada kompresi yang dipakai JPG. Dalam praktik, file AVIF bisa jauh lebih kecil daripada JPG dengan tampilan yang sama bagusnya, yang berharga bagi situs mana pun yang ingin menekan bobot halaman dan mempercepat waktu muat.",
      },
      {
        heading: "Cara Mengonversi JPG ke AVIF",
        body: "Unggah file JPG Anda dan ConvertBrio akan menghasilkan versi AVIF dengan resolusi yang sama. Konversi berjalan sepenuhnya di browser, tanpa perangkat lunak yang perlu dipasang, dan hasilnya terunduh otomatis setelah proses selesai.",
      },
      {
        heading: "Dukungan Browser dan Perangkat Lunak",
        body: "Semua browser modern utama mendukung penampilan AVIF, tetapi beberapa perangkat lunak lama, penyunting gambar, dan platform sosial belum menerimanya untuk diunggah. Jika Anda memublikasikan ke situs web sendiri, AVIF umumnya aman; jika Anda mengunggah ke tempat yang kompatibilitasnya tidak diketahui, siapkan cadangan berupa JPG atau WEBP.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang cara mengonversi gambar JPG ke AVIF.",
    faq: [
      {
        question: "Apakah AVIF lebih baik daripada WEBP?",
        answer:
          "AVIF umumnya mengompresi lebih efisien daripada WEBP, sering menghasilkan file lebih kecil pada kualitas yang sama. WEBP memiliki dukungan lama yang sedikit lebih luas, tetapi untuk browser modern AVIF biasanya pilihan yang lebih baik dari sisi ukuran file.",
      },
      {
        question: "Bisakah semua situs web memakai gambar AVIF?",
        answer:
          "Semua browser modern utama mendukung penampilan AVIF, tetapi beberapa sistem pengelola konten, jaringan iklan, dan alat lama belum menerima unggahan AVIF. Periksa persyaratan platform Anda jika menemui masalah saat mengunggah.",
      },
      {
        question: "Seberapa kecil file saya nantinya?",
        answer:
          "Hasilnya bervariasi tergantung gambar, tetapi AVIF umumnya memangkas ukuran file hingga 50% atau lebih dibandingkan JPG berkualitas sama, menjadikannya salah satu format paling efektif untuk mengurangi bobot halaman.",
      },
    ],
  },

  "png-to-jpg": {
    title: "Konverter PNG ke JPG: Perkecil Gambar untuk Web dan Email",
    intro:
      "File PNG mempertahankan setiap piksel, yang bagus untuk grafik tetapi sering berlebihan untuk foto: hasilnya file yang jauh lebih besar dari yang diperlukan. Konverter PNG ke JPG dari ConvertBrio memampatkan gambar Anda menjadi JPG yang lebih kecil dan mudah dibagikan, ideal untuk lampiran email, halaman web, dan di mana pun batas ukuran unggahan berlaku.",
    sections: [
      {
        heading: "Kapan Perlu Mengonversi PNG ke JPG",
        body: "Jika PNG Anda berupa foto (bukan grafik bertransparansi atau teks bertepi tegas), mengonversinya ke JPG hampir selalu memperkecil file secara signifikan tanpa penurunan kualitas yang terlihat. Ini sangat berguna untuk lampiran email yang dibatasi ukurannya, halaman web yang mengutamakan kecepatan muat, atau formulir unggahan yang menolak file besar.",
      },
      {
        heading: "Cara Kerja Konversi",
        body: "Unggah PNG dan ConvertBrio akan mengodekannya ulang sebagai JPG pada kualitas bawaan, yang menyeimbangkan ukuran file kecil dengan ketajaman visual. Karena JPG tidak mendukung transparansi, area transparan pada PNG asli akan diisi dengan latar polos pada hasilnya.",
      },
      {
        heading: "Apa yang Hilang (dan yang Tidak)",
        body: "Mengonversi ke JPG membuang transparansi dan menerapkan kompresi lossy, jadi ini bukan pilihan yang tepat untuk logo atau grafik yang membutuhkan latar transparan. Untuk foto biasa, kompresinya nyaris tidak terasa, dan pengurangan ukuran file biasanya besar, sering 50-80% lebih kecil daripada PNG aslinya.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang cara mengonversi gambar PNG ke JPG.",
    faq: [
      {
        question: "Mengapa file PNG saya begitu besar?",
        answer:
          "PNG memakai kompresi tanpa kehilangan data, artinya ia menyimpan setiap piksel secara persis alih-alih membuang detail seperti JPG. Itu membuat PNG ideal untuk grafik, tetapi sering jauh lebih besar dari yang dibutuhkan untuk foto biasa.",
      },
      {
        question: "Apa yang terjadi pada area transparan saat dikonversi ke JPG?",
        answer:
          "JPG tidak mendukung transparansi, sehingga bagian PNG yang transparan akan diisi dengan warna polos (biasanya putih) pada file hasil konversi.",
      },
      {
        question: "Seberapa kecil JPG yang dihasilkan?",
        answer:
          "Tergantung gambarnya, tetapi foto biasanya menyusut 50-80% saat dikonversi dari PNG ke JPG pada kualitas bawaan, karena kompresi JPG memang disetel khusus untuk konten fotografis.",
      },
    ],
  },

  "png-to-webp": {
    title: "Konverter PNG ke WEBP: Kompresi Ramah Kualitas untuk Web",
    intro:
      "WEBP mendukung kompresi lossy maupun tanpa kehilangan data, sehingga bisa menggantikan PNG untuk grafik yang membutuhkan transparansi sambil tetap memangkas ukuran file secara signifikan. Konverter PNG ke WEBP dari ConvertBrio mengodekan ulang gambar Anda dalam hitungan detik, dengan transparansi tetap utuh jika PNG aslinya memilikinya.",
    sections: [
      {
        heading: "Mengapa WEBP Mengalahkan PNG dalam Ukuran File",
        body: "Bahkan dalam mode tanpa kehilangan data, WEBP biasanya mengompresi lebih efisien daripada PNG, menghasilkan file yang lebih kecil dari gambar sumber yang sama. Untuk grafik, ikon, dan tangkapan layar yang akan dipakai di situs web, itu langsung berarti halaman termuat lebih cepat tanpa mengorbankan transparansi atau detail yang presisi.",
      },
      {
        heading: "Cara Kerja Konversi",
        body: "Unggah PNG Anda dan ConvertBrio akan mengonversinya ke WEBP secara otomatis. Area transparan pada file asli dipertahankan di hasil WEBP, sehingga logo dan ikon dengan kanal alfa terkonversi dengan rapi tanpa perlu disunting ulang secara manual.",
      },
      {
        heading: "Di Mana Hasilnya Bisa Dipakai",
        body: "WEBP didukung secara bawaan oleh semua browser modern utama, menjadikannya pilihan bawaan yang aman untuk gambar situs web, favicon, dan grafik antarmuka. Jika Anda membutuhkan file untuk cetak, perangkat lunak lama, atau platform yang dukungan WEBP-nya belum jelas, simpan PNG aslinya sebagai cadangan.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang cara mengonversi gambar PNG ke WEBP.",
    faq: [
      {
        question: "Apakah konversi PNG ke WEBP mempertahankan transparansi?",
        answer:
          "Ya. WEBP mendukung kanal alfa seperti PNG, sehingga latar transparan di file asli Anda ikut terbawa ke gambar WEBP hasil konversi.",
      },
      {
        question: "Apakah WEBP selalu lebih kecil daripada PNG?",
        answer:
          "Biasanya ya. Bahkan dalam mode tanpa kehilangan data, kompresi WEBP umumnya lebih efisien daripada PNG, sehingga sebagian besar gambar menyusut nyata setelah dikonversi.",
      },
      {
        question: "Bisakah saya mengonversi WEBP kembali ke PNG nanti?",
        answer:
          "Bisa. Gunakan konverter WEBP ke PNG dari ConvertBrio kapan pun Anda membutuhkan file dalam format PNG untuk perangkat lunak yang tidak mendukung WEBP.",
      },
    ],
  },

  "png-to-avif": {
    title: "Konverter PNG ke AVIF: Kompresi Maksimal untuk Grafik",
    intro:
      "AVIF dapat memampatkan grafik dan foto jauh lebih agresif daripada PNG sambil tetap mendukung transparansi, menjadikannya salah satu format paling hemat ruang untuk gambar web saat ini. Konverter PNG ke AVIF dari ConvertBrio menangani konversinya seketika, tanpa perangkat lunak pengodean.",
    sections: [
      {
        heading: "Mengapa Memilih AVIF Dibanding PNG",
        body: "Kompresi PNG yang tanpa kehilangan data membuat file lebih besar dari yang diperlukan untuk banyak keperluan. AVIF, yang dibangun di atas teknologi kompresi codec video modern, bisa memperkecil gambar yang sama secara drastis, kadang 80% atau lebih, sambil menjaga transparansi dan kualitas visual tetap utuh, dan ini keuntungan besar bagi performa situs.",
      },
      {
        heading: "Cara Kerja Konversi",
        body: "Unggah file PNG Anda dan ConvertBrio menghasilkan versi AVIF dengan transparansi dan resolusi yang terjaga. Konversi berjalan di server kami dan selesai dalam hitungan detik untuk ukuran gambar yang umum.",
      },
      {
        heading: "Catatan Kompatibilitas",
        body: "AVIF tampil dengan benar di semua versi terbaru Chrome, Firefox, Safari, dan Edge. Beberapa alat lama, klien email, dan perangkat lunak desain mungkin belum mendukungnya, jadi format ini paling cocok untuk dipakai langsung di situs web, bukan untuk file yang akan Anda serahkan ke sistem pihak ketiga dengan kompatibilitas yang tidak diketahui.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang cara mengonversi gambar PNG ke AVIF.",
    faq: [
      {
        question: "Apakah AVIF mendukung latar transparan?",
        answer:
          "Ya, AVIF mendukung kanal alfa, sehingga transparansi di PNG asli Anda terbawa dengan benar ke file AVIF hasil konversi.",
      },
      {
        question: "Seberapa kecil file AVIF saya nantinya?",
        answer:
          "Hasilnya bervariasi tergantung isi gambar, tetapi AVIF sering memperkecil file PNG sebesar 70-80% atau lebih, menjadikannya salah satu format paling efisien untuk web saat ini.",
      },
      {
        question: "Sebaiknya saya memakai AVIF atau WEBP untuk situs web saya?",
        answer:
          "AVIF biasanya mengompresi lebih baik, jadi layak dipakai di tempat yang didukung platform Anda. WEBP tetap alternatif yang solid dan sedikit lebih kompatibel jika Anda menemui batasan unggahan dengan AVIF.",
      },
    ],
  },

  "webp-to-jpg": {
    title: "Konverter WEBP ke JPG: Buka Gambar WEBP di Mana Saja",
    intro:
      "Gambar WEBP yang diunduh dari situs web tidak selalu bisa dibuka dengan baik di penampil foto lama, beberapa alat desain, atau aplikasi yang mengharapkan format standar. Konverter WEBP ke JPG dari ConvertBrio mengubah file WEBP apa pun menjadi JPG yang bisa dibuka di mana saja: tanpa perlu menebak-nebak soal kompatibilitas.",
    sections: [
      {
        heading: "Mengapa File WEBP Kadang Tidak Bisa Dibuka",
        body: "WEBP tergolong format yang relatif baru, dan meski browser mendukungnya secara universal, sebagian penampil foto desktop, penyunting gambar versi lama, dan aplikasi tertentu masih belum mengenalinya. Jika Anda menyimpan gambar dari situs web dan gambar itu tidak bisa dibuka di tempat yang Anda harapkan, mengonversinya ke JPG adalah solusi tercepat.",
      },
      {
        heading: "Cara Kerja Konversi",
        body: "Unggah file WEBP Anda dan ConvertBrio akan mendekodenya lalu mengodekannya ulang sebagai JPG. Hasilnya bisa dibuka di semua browser, penampil foto, dan alat penyunting, menjadikannya format paling aman untuk dibagikan secara luas atau dilampirkan ke email.",
      },
      {
        heading: "Apa yang Perlu Diharapkan",
        body: "Jika WEBP aslinya berlatar transparan, transparansi itu akan diisi dengan warna polos pada hasil JPG, karena JPG tidak mendukung kanal alfa. Untuk foto biasa dan gambar web tanpa transparansi, konversinya mulus secara visual.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang cara mengonversi gambar WEBP ke JPG.",
    faq: [
      {
        question: "Mengapa saya tidak bisa membuka file WEBP di komputer?",
        answer:
          "Beberapa penampil foto lama, penyunting gambar, dan versi sistem operasi tidak mendukung WEBP secara bawaan, meskipun semua browser modern mendukungnya. Mengonversi ke JPG langsung menyelesaikan masalah itu.",
      },
      {
        question: "Apakah transparansi hilang saat WEBP dikonversi ke JPG?",
        answer:
          "Ya, JPG tidak mendukung transparansi, sehingga area transparan di WEBP asli akan tampak sebagai warna polos pada file hasil konversi. Gunakan WEBP ke PNG jika Anda perlu mempertahankan transparansi.",
      },
      {
        question: "Apakah JPG hasil konversi aman dibagikan atau diunggah?",
        answer:
          "Ya, JPG adalah format gambar yang paling universal kompatibilitasnya, sehingga file hasil konversi akan terbuka dengan benar di hampir semua aplikasi, perangkat, atau formulir unggahan.",
      },
    ],
  },

  "webp-to-png": {
    title: "Konverter WEBP ke PNG: Pertahankan Transparansi dan Kualitas",
    intro:
      "Ketika gambar WEBP memiliki latar transparan, seperti logo, ikon, atau grafik hasil ekspor, mengonversinya ke JPG bukan pilihan. Konverter WEBP ke PNG dari ConvertBrio mempertahankan transparansi itu dan menghasilkan file tanpa kehilangan kualitas yang berfungsi di alat desain, perangkat lunak lama, dan di mana pun PNG menjadi format yang diharapkan.",
    sections: [
      {
        heading: "Kapan Memilih PNG Dibanding JPG",
        body: "Jika file WEBP Anda memiliki piksel transparan atau semi-transparan, mengonversi ke PNG adalah langkah yang tepat: di antara keduanya, hanya PNG yang menjaga kanal alfa tetap utuh. PNG juga pilihan yang lebih aman jika Anda berencana menyunting gambar lebih lanjut, karena tidak menimbulkan artefak kompresi.",
      },
      {
        heading: "Cara Kerja Konversi",
        body: "Unggah file WEBP dan ConvertBrio akan mengonversinya menjadi PNG tanpa kehilangan kualitas, dengan transparansi dan resolusi persis seperti semula. Ini berlaku baik WEBP-nya berjenis lossy maupun tanpa kehilangan data: PNG hasilnya selalu mempertahankan seluruh detail dari gambar yang didekode.",
      },
      {
        heading: "Pertimbangan Ukuran File",
        body: "File PNG umumnya lebih besar daripada WEBP, karena kompresi WEBP lebih efisien. Untuk grafik dan ikon perbedaannya biasanya kecil; untuk foto besar PNG bisa jauh lebih besar, timbal balik yang masuk akal ketika transparansi atau kualitas tanpa kehilangan data menjadi prioritas.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang cara mengonversi gambar WEBP ke PNG.",
    faq: [
      {
        question: "Apakah WEBP ke PNG mempertahankan latar transparan?",
        answer:
          "Ya. Jika file WEBP Anda memiliki transparansi, ConvertBrio mempertahankannya persis di PNG hasil konversi, karena kedua format mendukung kanal alfa.",
      },
      {
        question: "Sebaiknya saya memakai PNG atau JPG untuk file WEBP saya?",
        answer:
          "Pilih PNG jika gambar memiliki transparansi atau Anda berencana menyuntingnya lebih lanjut. Pilih JPG jika berupa foto biasa dan Anda menginginkan file sekecil mungkin untuk dibagikan.",
      },
      {
        question: "Apakah kualitas gambar akan berubah?",
        answer:
          "Tidak, PNG adalah format tanpa kehilangan data, jadi konversi dari WEBP ke PNG tidak membuang detail tambahan di luar yang memang sudah ada di file WEBP aslinya.",
      },
    ],
  },

  "webp-to-avif": {
    title: "Konverter WEBP ke AVIF: Peras Kompresi Lebih Jauh Lagi",
    intro:
      "AVIF sering mengungguli WEBP dalam efisiensi kompresi, sehingga mengodekan ulang gambar WEBP yang ada sebagai AVIF bisa memperkecilnya lebih jauh tanpa penurunan kualitas yang terlihat. Konverter WEBP ke AVIF dari ConvertBrio melakukan peralihan itu dalam satu langkah.",
    sections: [
      {
        heading: "Mengapa Mengodekan Ulang WEBP sebagai AVIF",
        body: "Jika Anda sudah memakai WEBP demi performa web, AVIF layak dicoba sebagai langkah berikutnya: ia biasanya mengompresi lebih baik pada gambar sumber yang sama, terutama untuk foto dan grafik yang kompleks. Perbedaannya paling terasa pada gambar yang lebih besar dan kaya detail.",
      },
      {
        heading: "Cara Kerja Konversi",
        body: "Unggah file WEBP Anda dan ConvertBrio akan mendekodenya lalu mengodekannya ulang sebagai AVIF, dengan mempertahankan transparansi jika ada. Hasilnya terunduh otomatis dan bisa dipakai di mana pun platform Anda menerima gambar AVIF.",
      },
      {
        heading: "Hal yang Perlu Diperiksa Sebelum Beralih",
        body: "AVIF didukung oleh semua browser utama terkini, tetapi pastikan sistem pengelola konten dan alat pihak ketiga dalam alur kerja Anda menerima unggahan AVIF sebelum mengganti WEBP di seluruh situs. Untuk proyek pribadi dan situs web modern, peralihannya biasanya mulus.",
      },
      {
        heading: "Batas dan Privasi",
        body: "Unggahan dibatasi hingga 100 MB. File Anda dienkripsi saat dikirim. File asli Anda dihapus segera setelah dibaca untuk konversi. Hasil konversi dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam. File diproses secara otomatis di server penyedia hosting kami (Vercel dan Supabase), tanpa tinjauan manusia.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang cara mengonversi gambar WEBP ke AVIF.",
    faq: [
      {
        question: "Apakah layak mengonversi WEBP ke AVIF?",
        answer:
          "Jika tujuan Anda adalah ukuran file sekecil mungkin dan platform Anda mendukung AVIF, ya. AVIF sering mengompresi lebih baik daripada WEBP pada gambar yang sama, terutama untuk foto.",
      },
      {
        question: "Apakah konversi mempertahankan transparansi?",
        answer:
          "Ya, AVIF mendukung transparansi seperti WEBP, sehingga kanal alfa apa pun di file asli Anda dipertahankan di gambar hasil konversi.",
      },
      {
        question: "Bisakah saya mengonversi kembali ke WEBP jika perlu?",
        answer:
          "Bisa, gunakan Konverter Gambar dari ConvertBrio untuk berpindah dari AVIF kembali ke WEBP atau format lain yang didukung kapan saja.",
      },
    ],
  },

  "avif-to-jpg": {
    title: "Konverter AVIF ke JPG: Buat Gambar AVIF Bisa Dibuka di Mana Saja",
    intro:
      "Kompresi AVIF yang efisien membuatnya bagus untuk situs web modern, tetapi banyak aplikasi, perangkat lama, dan alat foto masih belum bisa membukanya. Konverter AVIF ke JPG dari ConvertBrio mendekode gambar dan menyimpannya kembali sebagai JPG yang berfungsi di hampir semua perangkat lunak yang akan Anda temui.",
    sections: [
      {
        heading: "Mengapa Mengonversi AVIF ke JPG",
        body: "Jika file AVIF tidak bisa dibuka di penampil foto, perangkat lunak penyunting, atau formulir unggahan sebuah situs, JPG adalah pilihan cadangan yang paling aman: didukung hampir di mana-mana, dari perangkat lunak berusia puluhan tahun hingga perangkat terbaru. Inilah alasan paling umum orang beralih dari AVIF.",
      },
      {
        heading: "Cara Kerja Konversi",
        body: "Unggah file AVIF dan ConvertBrio akan mendekodenya, lalu mengodekan ulang gambar sebagai JPG dengan resolusi penuh. Unduhan siap dalam hitungan detik dan langsung bisa dibuka di browser, penampil, atau aplikasi penyunting mana pun.",
      },
      {
        heading: "Apa yang Berubah dalam Konversi",
        body: "JPG tidak mendukung transparansi, jadi jika file AVIF berlatar transparan, latar itu akan diisi dengan warna polos pada hasilnya. Untuk foto standar tanpa transparansi, hasil visualnya pada dasarnya identik dengan aslinya.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang cara mengonversi gambar AVIF ke JPG.",
    faq: [
      {
        question: "Mengapa file AVIF saya tidak bisa dibuka?",
        answer:
          "AVIF adalah format yang lebih baru, dan meski browser modern mendukungnya, banyak aplikasi lama, penampil foto, dan beberapa alat penyunting belum mendukungnya. Mengonversi ke JPG membuat file langsung bisa dibuka di mana saja.",
      },
      {
        question: "Apakah mengonversi ke JPG menurunkan kualitas gambar?",
        answer:
          "Ada sedikit kompresi ulang karena AVIF dan JPG memakai algoritma yang berbeda, tetapi pada kualitas bawaan ConvertBrio hal itu tidak terlihat dalam pemakaian normal.",
      },
      {
        question: "Bisakah saya mengonversi AVIF ke PNG saja?",
        answer:
          "Bisa, gunakan konverter AVIF ke PNG jika Anda membutuhkan file tanpa kehilangan kualitas atau perlu mempertahankan transparansi, yang tidak bisa disimpan JPG.",
      },
    ],
  },

  "avif-to-png": {
    title: "Konverter AVIF ke PNG: Hasil Tanpa Kehilangan Kualitas dengan Transparansi Terjaga",
    intro:
      "Ketika gambar AVIF memiliki latar transparan atau Anda membutuhkan akurasi piksel yang sempurna untuk penyuntingan lebih lanjut, PNG adalah format tujuan yang tepat. Konverter AVIF ke PNG dari ConvertBrio mendekode file Anda dan menghasilkan PNG tanpa kehilangan kualitas dalam hitungan detik, dengan seluruh transparansi tetap utuh.",
    sections: [
      {
        heading: "Kapan PNG Lebih Baik",
        body: "Pilih PNG dibanding JPG kapan pun AVIF sumber memiliki transparansi, teks tajam, atau detail halus yang tidak ingin Anda lembutkan dengan kompresi lossy. PNG juga format perantara yang lebih aman jika Anda berencana membuka gambar di alat desain untuk disunting lebih lanjut.",
      },
      {
        heading: "Cara Kerja Konversi",
        body: "Unggah file AVIF Anda dan ConvertBrio akan mendekodenya lalu mengodekannya ulang sebagai PNG tanpa kehilangan kualitas, dengan resolusi, warna, dan transparansi persis seperti pada file aslinya.",
      },
      {
        heading: "Perkiraan Ukuran File",
        body: "Karena PNG tidak mengompresi seagresif AVIF, file hasil konversi biasanya jauh lebih besar daripada aslinya, sering beberapa kali lipat. Itu timbal balik yang wajar dan datang bersama keuntungan berupa keluaran tanpa kehilangan kualitas yang kompatibel secara luas.",
      },
      {
        heading: "Batas dan Privasi",
        body: "Unggahan dibatasi hingga 100 MB. File Anda dienkripsi saat dikirim. File asli Anda dihapus segera setelah dibaca untuk konversi. Hasil konversi dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam. File diproses secara otomatis di server penyedia hosting kami (Vercel dan Supabase), tanpa tinjauan manusia.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang cara mengonversi gambar AVIF ke PNG.",
    faq: [
      {
        question: "Apakah AVIF ke PNG mempertahankan transparansi?",
        answer:
          "Ya. Jika file AVIF Anda memiliki kanal alfa, ConvertBrio membawa transparansi itu persis ke PNG hasil konversi.",
      },
      {
        question: "Mengapa file PNG saya jauh lebih besar daripada AVIF?",
        answer:
          "PNG adalah format tanpa kehilangan data dan tidak mengompresi seefisien AVIF, sehingga ukuran yang membesar setelah konversi itu normal dan wajar.",
      },
      {
        question: "Apakah PNG format yang baik untuk menyunting gambar lebih lanjut?",
        answer:
          "Ya, karena PNG tidak menerapkan kompresi lossy, ia format perantara yang lebih aman daripada JPG atau AVIF ketika Anda berencana membuka file di penyunting dan menyimpannya ulang berkali-kali.",
      },
    ],
  },

  "avif-to-webp": {
    title: "Konverter AVIF ke WEBP: Perluas Kompatibilitas Tanpa Kehilangan Efisiensi",
    intro:
      "WEBP memiliki dukungan yang sedikit lebih luas daripada AVIF di berbagai alat dan platform lama sambil tetap menawarkan kompresi yang kuat, sehingga menjadi jalan tengah yang praktis ketika AVIF belum sepenuhnya didukung. Konverter AVIF ke WEBP dari ConvertBrio melakukan peralihan itu seketika.",
    sections: [
      {
        heading: "Mengapa Mengonversi AVIF ke WEBP",
        body: "Jika sebuah platform, plugin, atau perangkat lunak menolak unggahan AVIF tetapi menerima WEBP, mengonversi adalah solusi tercepat: Anda tetap mendapat sebagian besar manfaat efisiensi AVIF sambil memperoleh kompatibilitas yang lebih luas. Ini sering terjadi saat bekerja dengan sistem pengelola konten lama atau integrasi pihak ketiga.",
      },
      {
        heading: "Cara Kerja Konversi",
        body: "Unggah file AVIF Anda dan ConvertBrio akan mendekodenya lalu mengodekannya ulang sebagai WEBP, dengan transparansi dan resolusi yang terjaga. Prosesnya selesai dalam hitungan detik dan file terunduh otomatis.",
      },
      {
        heading: "Timbal Balik Kompresi",
        body: "File WEBP biasanya sedikit lebih besar daripada AVIF setara pada kualitas visual yang sama, karena kompresi AVIF umumnya lebih canggih. Selisihnya biasanya cukup kecil sehingga keuntungan kompatibilitasnya sepadan untuk sebagian besar keperluan.",
      },
      {
        heading: "Batas dan Privasi",
        body: "Unggahan dibatasi hingga 100 MB. File Anda dienkripsi saat dikirim. File asli Anda dihapus segera setelah dibaca untuk konversi. Hasil konversi dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam. File diproses secara otomatis di server penyedia hosting kami (Vercel dan Supabase), tanpa tinjauan manusia.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang cara mengonversi gambar AVIF ke WEBP.",
    faq: [
      {
        question: "Mengapa saya perlu mengonversi AVIF ke WEBP, bukan tetap memakai AVIF?",
        answer:
          "Beberapa platform dan alat lama menerima WEBP tetapi tidak AVIF. Konversi memberi Anda kompatibilitas yang lebih luas sambil mempertahankan sebagian besar keuntungan ukuran file yang semula diberikan AVIF.",
      },
      {
        question: "Apakah ukuran file akan bertambah setelah konversi?",
        answer:
          "Sedikit, pada sebagian besar kasus. Kompresi WEBP sedikit kurang efisien daripada AVIF, jadi perkirakan kenaikan ukuran yang moderat, bukan yang drastis.",
      },
      {
        question: "Apakah transparansi terbawa dari AVIF ke WEBP?",
        answer:
          "Ya, kedua format mendukung kanal alfa, sehingga transparansi apa pun di file AVIF asli Anda dipertahankan di WEBP hasil konversi.",
      },
    ],
  },

  "resize-image": {
    title: "Bagaimana cara memperkecil ukuran piksel sebuah foto?",
    intro: [
      "Masukkan lebar dan tinggi maksimum yang Anda inginkan, dalam piksel, dan ConvertBrio akan menskalakan foto ke bawah agar muat di dalamnya. Ukuran piksel adalah jumlah piksel ke samping dan ke bawah pada sebuah gambar (misalnya 4000 × 3000). Memperkecilnya membuat gambar tampil lebih kecil di layar dan sekaligus memangkas ukuran file, tanpa perlu perangkat lunak desain.",
      "Alat ini menjaga proporsi foto, sehingga gambar tidak akan melar atau gepeng, dan hanya memperkecil gambar: ia tidak akan memperbesar foto melebihi ukuran aslinya. Jika Anda membutuhkan lebar dan tinggi persis yang berbeda dari bentuk foto, atau ukuran maksimum dalam KB, gunakan Ubah Ukuran Foto & Tanda Tangan. Untuk memperbesar foto kecil, gunakan Pembesar Gambar AI.",
    ],
    howTo: [
      {
        step: "Unggah gambar Anda",
        detail: "JPG, PNG, WEBP, HEIC, AVIF, atau GIF, hingga 100 MB.",
      },
      {
        step: "Masukkan lebar, tinggi, atau keduanya",
        detail:
          "Ketik ukuran piksel yang Anda inginkan. Anda boleh mengisi salah satu saja: kosongkan yang lain dan nilainya dihitung dari proporsi foto. Jika Anda mengisi keduanya, foto diskalakan agar muat di dalam kotak tersebut.",
      },
      {
        step: "Ubah ukuran dan unduh",
        detail: "ConvertBrio menskalakan gambar ke bawah dan file terunduh otomatis.",
      },
      {
        step: "Periksa hasilnya",
        detail:
          "Buka file yang diunduh dan lihat dimensinya (klik kanan > Properties di Windows, Get Info di Mac). Perbesar ke 100% untuk memastikan gambar masih tampak tajam.",
      },
    ],
    sections: [
      {
        heading: "Dimensi umum yang sering dicari",
        body: "Jika Anda belum yakin ukuran apa yang dibutuhkan, berikut spesifikasi yang paling sering dicari orang di sini.",
        table: {
          headers: ["Keperluan", "Ukuran umum (px)"],
          rows: [
            ["Postingan Instagram (persegi)", "1080 × 1080"],
            ["Story / reel Instagram", "1080 × 1920"],
            ["Gambar yang dibagikan di Facebook / LinkedIn", "1200 × 630"],
            ["Thumbnail YouTube", "1280 × 720"],
            ["Foto profil LinkedIn", "400 × 400 (minimum)"],
            ["Pas foto paspor (2 × 2 inci pada 300 DPI)", "600 × 600"],
          ],
        },
      },
      {
        heading: "Contoh: 4000 × 3000 menjadi 1200 × 900",
        body: "Foto ponsel yang umum berukuran 4000 × 3000 piksel (bentuk 4:3). Untuk menjadikannya selebar 1200 piksel, isi 1200 di kolom lebar dan biarkan tinggi kosong: tingginya dihitung menjadi 900, sehingga hasilnya 1200 × 900. Jika Anda memasukkan 1200 × 1200, foto diskalakan agar muat di dalam persegi itu, yang lagi-lagi menghasilkan 1200 × 900, bukan persegi yang melar. File barunya memiliki piksel 9 kali lebih sedikit, jadi jauh lebih ringan untuk disimpan dan dikirim.",
      },
      {
        heading: "Bagaimana cara mengubah ukuran gambar tanpa membuatnya melar?",
        body: [
          "Gambar melar terjadi saat sebuah alat memaksa foto masuk ke kotak dengan bentuk yang berbeda, sehingga wajah atau lingkaran berubah menjadi lonjong. Alat ini menghindarinya dengan mempertahankan rasio aspek asli (perbandingan lebar terhadap tinggi): hasilnya muat di dalam lebar dan tinggi yang Anda masukkan, dan dimensi sisanya dihitung untuk Anda.",
          "Artinya, hasilnya bisa lebih kecil daripada kotak yang Anda ketik pada salah satu arah. Jika sebuah formulir menuntut bentuk persis seperti 600 × 600, potong dulu foto menjadi persegi dengan alat Potong Gambar, lalu ubah ukurannya. Pemotongan membuang bagian tepi; mengubah ukuran saja tidak pernah melakukannya. Untuk lebar dan tinggi persis dalam satu langkah, dengan pemotongan atau margin putih, gunakan Ubah Ukuran Foto & Tanda Tangan.",
        ],
        table: {
          headers: ["Mulai dari 4000 × 3000", "Hasil yang didapat", "Tampak benar?"],
          rows: [
            ["Lebar 1200, tinggi dikosongkan", "1200 × 900", "Ya: proporsi terjaga"],
            ["Lebar 1200, tinggi 1200", "1200 × 900", "Ya: muat di dalam kotak, tidak melar"],
            ["Potong menjadi persegi, lalu ubah ukuran ke 1200 × 1200", "1200 × 1200", "Ya: tepi terpotong, tidak ada yang terdistorsi"],
            ["Memaksa 1200 × 1200 tanpa memotong (alat lain)", "1200 × 1200", "Tidak: gambar menjadi gepeng"],
          ],
        },
      },
      {
        heading: "Apakah memperkecil piksel sama dengan memperkecil ukuran file?",
        body: [
          "Keduanya berkaitan tetapi tidak sama. Ukuran piksel adalah jumlah piksel pada gambar. Ukuran file adalah jumlah byte yang dipakainya, dan bergantung pada jumlah piksel serta seberapa kuat gambar dikompresi. Piksel yang lebih sedikit biasanya berarti file lebih kecil, tetapi menyusutkan kedua dimensi hingga separuh tidak persis membuat file menjadi seperempatnya, karena kompresi dan isi gambar juga berpengaruh.",
          "Pilih sesuai tujuan: untuk menyesuaikan ukuran di halaman atau dimensi yang diminta suatu platform, ubah ukuran. Untuk berada di bawah batas unggahan dalam KB atau MB, kompres, atau ubah ukuran dulu lalu jalankan lewat Kompres Gambar untuk pemadatan akhir. Mengubah ukuran lebih dulu membuat kompresor tidak perlu bekerja sekeras itu, sehingga kualitas lebih terjaga. Untuk mencapai ukuran piksel persis dan batas KB sekaligus, gunakan Ubah Ukuran Foto & Tanda Tangan.",
        ],
      },
      {
        heading: "Pemecahan masalah",
        list: [
          "Foto tidak menjadi lebih besar: alat ini hanya memperkecil. Gunakan Pembesar Gambar AI untuk memperbesar.",
          "Hasilnya bukan ukuran persis yang saya ketik: foto diskalakan agar muat di dalam kotak Anda tanpa mengubah bentuknya. Potong dulu, atau gunakan Ubah Ukuran Foto & Tanda Tangan untuk dimensi yang persis.",
          "Ukuran file masih terlalu besar dalam KB: kompres setelah mengubah ukuran, atau tetapkan target di Ubah Ukuran Foto & Tanda Tangan.",
          "Foto HEIC kembali sebagai JPG: HEIC tidak bisa disimpan oleh alat ini, jadi dikembalikan sebagai JPG. Foto dari kamera atau ponsel tetap dalam orientasi tegaknya.",
          "Foto tampak buram: memperkecil foto sangat jauh lalu melihatnya dalam ukuran diperbesar akan tampak buram. Ubah ukuran ke ukuran yang benar-benar akan Anda tampilkan.",
        ],
        body: "Jika hasilnya tidak sesuai harapan, periksa hal-hal berikut lebih dulu.",
      },
      {
        heading: "Privasi dan batasan",
        body: "Unggahan dienkripsi saat dikirim. File asli Anda dihapus segera setelah dibaca untuk konversi. Hasilnya dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam. File diproses secara otomatis di server penyedia hosting kami (Vercel dan Supabase), tanpa tinjauan manusia. Satu gambar per unggahan, hingga 100 MB, gratis, tanpa akun.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang cara mengubah ukuran gambar ke dimensi yang tepat.",
    faq: [
      {
        question: "Bagaimana cara mengubah ukuran gambar ke dimensi piksel yang persis?",
        answer:
          "Unggah gambar Anda ke alat ubah ukuran ConvertBrio, masukkan lebar dan tinggi yang Anda butuhkan dalam piksel, lalu unduh file hasilnya. Alat ini bekerja untuk format gambar apa pun yang diterimanya.",
      },
      {
        question: "Apakah mengubah ukuran akan mendistorsi gambar saya?",
        answer:
          "Hanya jika lebar dan tinggi baru tidak sesuai dengan rasio aspek aslinya. Untuk menghindari gambar melar, pertahankan perbandingan lebar terhadap tinggi yang sama dengan gambar sumber, atau potong gambar ke bentuk yang Anda butuhkan terlebih dahulu.",
      },
      {
        question: "Apakah mengubah ukuran juga mengurangi ukuran file?",
        answer:
          "Ya, piksel yang lebih sedikit berarti data yang lebih sedikit untuk disimpan, jadi memperkecil biasanya menyusutkan file secara substansial. Untuk hasil sekecil mungkin, lanjutkan dengan alat Kompres Gambar setelah mengubah ukuran.",
      },
      {
        question: "Bisakah saya memperbesar gambar kecil tanpa tampak buram?",
        answer:
          "Tidak dengan pengubahan ukuran biasa: memperbesar hanya merentangkan piksel yang ada dan melembutkan gambar. Gunakan Pembesar Gambar AI, yang merekonstruksi detail dengan model terlatih dan menghasilkan pembesaran yang jauh lebih tajam.",
      },
      {
        question: "Apakah format file berubah saat saya mengubah ukuran?",
        answer:
          "Alat ini mengembalikan gambar dalam format web standar. Jika Anda membutuhkan format keluaran tertentu, jalankan file hasil ubah ukuran lewat Konverter Gambar setelahnya.",
      },
    ],
  },

  "crop-image": {
    title: "Pemotong Gambar: Potong Gambar ke Area yang Anda Butuhkan",
    intro:
      "Terkadang Anda tidak perlu memperkecil seluruh gambar: Anda perlu membuang semua yang berada di luar area tertentu, entah untuk memotong sebuah objek, menghapus latar yang tidak diinginkan, atau menyesuaikan rasio aspek yang diminta sebuah platform. Alat potong ConvertBrio memungkinkan Anda menentukan area persis lewat koordinat piksel dan mendapatkan kembali bagian itu saja.",
    sections: [
      {
        heading: "Cara Memotong Gambar",
        body: "Unggah gambar Anda lalu masukkan koordinat kiri dan atas tempat pemotongan dimulai, beserta lebar dan tinggi area yang ingin Anda pertahankan. ConvertBrio memotong gambar tepat pada persegi panjang itu dan membuang semua yang berada di luarnya.",
      },
      {
        heading: "Menemukan Koordinat yang Tepat",
        body: "Koordinat diukur dalam piksel dari sudut kiri atas gambar, sehingga penyunting gambar atau alat pratinjau yang menampilkan posisi piksel dapat membantu Anda menentukan area persisnya sebelum mengunggah. Jika Anda hanya ingin menskalakan seluruh gambar, bukan memotong sebagian, gunakan Ubah Ukuran Gambar.",
      },
      {
        heading: "Kegunaan Umum Pemotongan",
        body: "Pemotongan berguna untuk menghapus latar yang tidak diinginkan dari foto, mengisolasi objek, menyesuaikan rasio aspek yang dibutuhkan untuk foto profil atau banner, atau memangkas dokumen hasil pindai hingga hanya area isinya. Ini alternatif yang presisi dibanding mengubah ukuran ketika tujuannya mengurangi, bukan menskalakan.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang cara memotong gambar ke area tertentu.",
    faq: [
      {
        question: "Bagaimana cara memotong gambar ke area tertentu?",
        answer:
          "Unggah gambar Anda ke alat potong ConvertBrio lalu masukkan koordinat awal kiri dan atas serta lebar dan tinggi area yang ingin Anda pertahankan, diukur dalam piksel dari sudut kiri atas.",
      },
      {
        question: "Apa bedanya memotong dan mengubah ukuran?",
        answer:
          "Mengubah ukuran menskalakan seluruh gambar ke dimensi baru, sedangkan memotong menggunting dan hanya mempertahankan satu area persegi panjang tertentu, membuang sisanya. Gunakan pemotongan ketika Anda ingin menghilangkan sebagian gambar, bukan memperkecil seluruhnya.",
      },
      {
        question: "Bagaimana saya tahu koordinat piksel yang tepat untuk dimasukkan?",
        answer:
          "Buka gambar di alat pratinjau atau penyunting yang menampilkan posisi piksel saat kursor diarahkan ke atasnya, sehingga Anda bisa menentukan koordinat area yang ingin dipertahankan sebelum memasukkannya ke ConvertBrio.",
      },
    ],
  },

  "rotate-image": {
    title: "Pemutar Gambar: Perbaiki Foto yang Miring atau Terbalik",
    intro:
      "Foto yang diambil dengan ponsel atau dipindai dari printer terkadang berakhir dalam posisi yang salah. Alat putar ConvertBrio memutar gambar 90, 180, atau 270 derajat hanya dengan satu klik, memperbaiki masalah orientasi tanpa perlu membuka penyunting foto lengkap.",
    sections: [
      {
        heading: "Cara Memutar Gambar",
        body: "Unggah gambar, pilih 90, 180, atau 270 derajat dari menu tarik-turun, dan ConvertBrio menerapkan rotasi lalu mengembalikan file yang sudah benar. Rotasi 90 derajat memperbaiki gambar yang miring, sedangkan 180 derajat membalikkan gambar yang terbalik agar tegak kembali.",
      },
      {
        heading: "Mengapa Foto Bisa Berakhir dalam Posisi yang Salah",
        body: "Biasanya ini terjadi ketika kamera atau pemindai tidak menyematkan metadata orientasi yang benar, atau ketika metadata itu terhapus saat diunggah atau dipindahkan. Data gambarnya sendiri tidak terpengaruh: gambar hanya tampil ke arah yang salah sampai diputar.",
      },
      {
        heading: "Memutar Dokumen Hasil Pindai",
        body: "Halaman yang dimasukkan ke pemindai dalam posisi miring atau terbalik adalah salah satu kasus paling umum untuk alat ini. Memutar gambar sebelum diproses lebih lanjut, seperti dikonversi ke PDF atau dijalankan lewat OCR, memastikan dokumen akhir terbaca dengan benar.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang cara memutar gambar online.",
    faq: [
      {
        question: "Bagaimana cara memutar foto yang miring?",
        answer:
          "Unggah gambar ke alat putar ConvertBrio dan pilih 90 atau 270 derajat, tergantung ke arah mana gambar perlu diputar agar tampil dengan benar.",
      },
      {
        question: "Mengapa foto saya terbalik atau miring sejak awal?",
        answer:
          "Biasanya karena metadata orientasi dari kamera atau pemindai yang menangkapnya hilang atau salah: isi gambarnya baik-baik saja, hanya perlu diputar agar tampil dengan benar.",
      },
      {
        question: "Bisakah saya memutar gambar dokumen hasil pindai sebelum mengonversinya ke PDF?",
        answer:
          "Bisa, putar dulu gambarnya dengan alat ini, lalu gunakan JPG ke PDF untuk menggabungkannya menjadi dokumen PDF dengan orientasi yang benar.",
      },
    ],
  },

  "rotate-pdf": {
    title: "Putar PDF Online: Perbaiki Halaman Miring di Dokumen Apa Pun",
    intro:
      "Dokumen yang dimasukkan ke pemindai dengan arah yang salah sering keluar dalam posisi miring atau terbalik. Alat Putar PDF dari ConvertBrio memutar setiap halaman dokumen 90, 180, atau 270 derajat sekaligus, memperbaiki orientasi di seluruh file dalam satu kali proses.",
    sections: [
      {
        heading: "Cara Memutar PDF",
        body: "Unggah PDF Anda, pilih sudut rotasi, 90, 180, atau 270 derajat, dan ConvertBrio menerapkannya ke setiap halaman dalam dokumen. Hasilnya terunduh sebagai PDF yang sudah diperbaiki dengan isi yang sama, hanya orientasinya yang sudah benar.",
      },
      {
        heading: "Mengapa Ini Terjadi pada Dokumen Hasil Pindai",
        body: "Halaman miring atau terbalik adalah efek samping yang umum saat memindai dokumen kertas, terutama ketika halaman dimasukkan ke pemindai dengan orientasi yang berbeda dari yang dimaksudkan. Memutar PDF yang sudah jadi lebih cepat daripada memindai ulang halaman aslinya.",
      },
      {
        heading: "Memutar Hanya Sebagian Halaman",
        body: "Alat putar ConvertBrio menerapkan rotasi yang sama ke setiap halaman dalam file. Jika hanya sebagian halaman yang perlu diperbaiki, pisahkan PDF terlebih dahulu dengan Pisah PDF, putar halaman yang bermasalah satu per satu, lalu gabungkan kembali semuanya dengan Gabung PDF.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang cara memutar halaman PDF online.",
    faq: [
      {
        question: "Bagaimana cara memutar semua halaman dalam PDF?",
        answer:
          "Unggah dokumen Anda ke alat Putar PDF ConvertBrio, pilih sudut rotasi, dan setiap halaman dalam file akan diputar dengan besar yang sama pada hasil unduhan.",
      },
      {
        question: "Bisakah saya memutar satu halaman saja, bukan seluruh dokumen?",
        answer:
          "Tidak secara langsung dengan alat ini, karena ia memutar semua halaman secara seragam. Untuk memutar halaman tertentu saja, pisahkan PDF terlebih dahulu, putar halaman yang Anda butuhkan, lalu gabungkan kembali filenya.",
      },
      {
        question: "Mengapa halaman hasil pindai saya keluar miring?",
        answer:
          "Biasanya karena halaman dimasukkan ke pemindai dengan orientasi yang berbeda dari yang dimaksudkan. Memutar PDF hasilnya lebih cepat daripada memindai ulang dokumen aslinya.",
      },
    ],
  },

  "unlock-pdf": {
    title: "Buka Kunci PDF: Hapus Pembatasan Kata Sandi Pemilik",
    intro:
      "Sebagian PDF dikunci dengan kata sandi pemilik yang membatasi pencetakan, penyalinan, atau penyuntingan, padahal Anda berhak penuh mengubah dokumen tersebut. Alat Buka Kunci PDF dari ConvertBrio menghapus pembatasan itu dari file yang memang berwenang Anda sunting, sehingga kendali penuh kembali ke tangan Anda.",
    sections: [
      {
        heading: "Cara Membuka Kunci PDF",
        body: "Unggah PDF yang dibatasi dan ConvertBrio akan menghapus pembatasan tingkat pemilik yang menghalangi pencetakan, penyalinan, dan penyuntingan. File yang sudah dibuka kuncinya terunduh dengan isi yang sama, tanpa pembatasan izin.",
      },
      {
        heading: "Kata Sandi Pemilik vs. Kata Sandi Buka",
        body: "Alat ini menghapus pembatasan kata sandi pemilik: jenis yang mengunci apa yang bisa Anda lakukan terhadap file yang sudah bisa Anda buka. Alat ini tidak berusaha menembus kata sandi buka (pengguna) yang mencegah PDF dilihat sama sekali; untuk itu Anda memerlukan kata sandi yang sebenarnya dari pembuat file.",
      },
      {
        heading: "Kapan Menggunakan Alat Ini",
        body: "Membuka kunci berguna untuk dokumen yang Anda buat atau berhak Anda ubah secara eksplisit tetapi diekspor dengan pembatasan yang aktif secara bawaan, seperti laporan dari perangkat lunak tertentu atau formulir yang tanpa sengaja mengunci penyuntingan. Buka kunci hanya file yang secara hukum berhak Anda ubah.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang cara menghapus pembatasan kata sandi PDF.",
    faq: [
      {
        question: "Apa bedanya membuka kunci dan mendekripsi PDF?",
        answer:
          "Membuka kunci menghapus pembatasan tingkat pemilik pada pencetakan, penyalinan, atau penyuntingan dari file yang sudah bisa Anda buka. Ia tidak menembus kata sandi yang diperlukan hanya untuk melihat dokumen: untuk itu Anda perlu kata sandi yang sebenarnya.",
      },
      {
        question: "Apakah legal membuka kunci PDF?",
        answer:
          "Menghapus pembatasan dari dokumen milik Anda atau yang Anda miliki izin eksplisit untuk menyuntingnya tidak masalah. Gunakan alat ini hanya pada file yang secara hukum berhak Anda ubah.",
      },
      {
        question: "Apakah membuka kunci mengubah isi PDF saya?",
        answer:
          "Tidak, alat ini hanya menghapus pembatasan izin. Teks, gambar, dan tata letak dokumen tetap persis sama.",
      },
    ],
  },

  "add-page-numbers": {
    title: "Tambah Nomor Halaman ke PDF Online",
    intro:
      "Laporan, buku panduan, dan kontrak sering memerlukan nomor halaman berurutan untuk rujukan dan navigasi. Alat Tambah Nomor Halaman dari ConvertBrio membubuhkannya ke setiap halaman PDF Anda secara otomatis, tanpa perlu perangkat lunak penerbitan desktop.",
    sections: [
      {
        heading: "Cara Menambahkan Nomor Halaman",
        body: "Unggah PDF Anda dan ConvertBrio membubuhkan nomor berurutan di setiap halaman, mulai dari halaman pertama dokumen. File bernomor itu terunduh dan siap dicetak, dibagikan, atau diserahkan.",
      },
      {
        heading: "Mengapa Nomor Halaman Penting",
        body: "Halaman bernomor membuat pembaca jauh lebih mudah merujuk bagian tertentu, terutama pada kontrak yang panjang, makalah akademik, atau buku panduan yang mengharuskan orang menyebut ‘halaman 14’ atau langsung menuju bagian tertentu dari dokumen.",
      },
      {
        heading: "Menggabungkan dengan Alat PDF Lain",
        body: "Jika Anda menyusun dokumen dari beberapa sumber, gabungkan dulu file-filenya dengan Gabung PDF, lalu tambahkan nomor halaman pada hasil gabungan agar penomoran mencerminkan struktur dokumen akhir, bukan tiap bagian secara terpisah.",
      },
      {
        heading: "Gaya Penomoran dan Batasan",
        body: "Nomor dibubuhkan di tengah bawah setiap halaman dengan gaya sans-serif polos, dimulai dari 1: saat ini belum ada opsi untuk mengubah posisi, nomor awal, atau format seperti «Halaman X dari Y». Unggahan dibatasi hingga 100 MB. File asli Anda dihapus segera setelah dibaca untuk diproses. Hasilnya dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam. File diproses secara otomatis di server penyedia hosting kami (Vercel dan Supabase), tanpa tinjauan manusia.",
      },
    ],
    faqDescription: "Pertanyaan umum tentang cara menambahkan nomor halaman ke PDF.",
    faq: [
      {
        question: "Bagaimana cara menambahkan nomor halaman ke PDF?",
        answer:
          "Unggah dokumen Anda ke alat Tambah Nomor Halaman ConvertBrio, dan alat ini akan membubuhkan nomor berurutan di setiap halaman secara otomatis sebelum Anda mengunduh hasilnya.",
      },
      {
        question: "Bisakah saya mengubah posisi atau nomor awal?",
        answer:
          "Saat ini belum, nomor selalu ditempatkan di tengah bawah, dimulai dari 1. Jika Anda membutuhkan posisi, nomor awal, atau format «Halaman X dari Y» yang berbeda, gunakan perangkat lunak penyunting PDF untuk kendali penuh.",
      },
      {
        question: "Apakah alat ini menomori ulang halaman yang sudah bernomor?",
        answer:
          "Alat ini membubuhkan nomor berurutan yang baru di setiap halaman. Jika dokumen Anda sudah memiliki nomor yang tercetak di dalam isinya, keduanya akan muncul, jadi alat ini paling cocok untuk dokumen tanpa nomor halaman.",
      },
    ],
  },
};
