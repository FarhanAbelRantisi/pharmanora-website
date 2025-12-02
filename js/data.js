const productsData = {
    otc: [
        {
            id: 'otc-1',
            name: 'Tablet Paracetamol',
            image: 'tablet_paracetamol.jpg',
            netto: '10 tablet x 10 strip',
            kandungan: 'Paracetamol 500 mg',
            kategori: 'Obat Jual Bebas (OTC)',
            deskripsi: 'Digunakan sebagai antipiretik dan analgesik untuk membantu meredakan demam serta mengurangi nyeri ringan hingga sedang, seperti sakit kepala, nyeri otot, dan nyeri akibat flu. Dapat digunakan sesuai anjuran dosis yang dianjurkan.'
        },
        {
            id: 'otc-2',
            name: 'Sirup difenhidramin',
            image: 'sirup_difenhidramin.png',
            netto: '60ml',
            kandungan: 'Diphenhydramine HCl 12.5 mg, Ammonium Chloride 100 mg, Sulfogaiacol Potassium 30 mg, Sodium Citrate Dihydrate 50 mg (per 5 mL)',
            kategori: 'Obat Jual Bebas (OTC)',
            deskripsi: 'Digunakan sebagai obat ekspektoran untuk membantu meredakan batuk dengan dahak, sekaligus memberikan efek antihistamin untuk mengurangi gejala alergi yang menyertai. Membantu mengencerkan dahak sehingga lebih mudah dikeluarkan. Gunakan sesuai dosis anjuran.'
        },
        {
            id: 'otc-3',
            name: 'Tablet Antasida',
            image: 'tablet_antasida.png',
            netto: '10 tablet kunyah x 10 blister',
            kandungan: 'Setiap tablet kunyah mengandung: Aluminium hidroksida 200 mg, Magnesium hidroksida 200 mg',
            kategori: 'Obat Jual Bebas (OTC)',
            deskripsi: 'Digunakan untuk meredakan gejala kelebihan asam lambung seperti nyeri ulu hati, perut kembung, rasa panas di dada, dan gangguan pencernaan ringan. Tablet kunyah rasa mint, praktis dikonsumsi tanpa air.'
        },
        {
            id: 'otc-4',
            name: 'Vitamin Effervescent',
            image: 'vitamin_effervescent.png',
            netto: '20 orange flavour tablet',
            kandungan: 'Vitamin C 500 mg, Zinc Picolinate 10 mg',
            kategori: 'Obat Jual Bebas (OTC)',
            deskripsi: 'Digunakan untuk membantu meningkatkan daya tahan tubuh, mendukung fungsi sistem imun, serta memberikan kesegaran dengan rasa jeruk. Formula ini bebas gula (sugar free) dan tidak mengandung perisa buatan, sehingga aman dikonsumsi sehari-hari sesuai anjuran.'
        },
        {
            id: 'otc-5',
            name: 'Sirup Ibuprofen',
            image: 'sirup_ibuprofen.png',
            netto: '60 mL',
            kandungan: 'Dalam setiap 5 mL sirup: Ibuprofen 100 mg',
            kategori: 'Obat Jual Bebas (OTC)',
            deskripsi: 'Digunakan untuk meredakan demam dan nyeri pada anak, termasuk nyeri ringan hingga sedang seperti sakit gigi, sakit kepala, dan nyeri otot. Memiliki rasa blueberry sehingga lebih mudah diterima oleh anak. Diformulasikan dalam bentuk sirup sehingga nyaman dikonsumsi dan memudahkan penyesuaian dosis sesuai usia dan berat badan.'
        },
    ],
    resep: [
        {
            id: 'resep-1',
            name: 'Salep Hidrokortison',
            image: 'salep_hidrokortison.jpg',
            netto: '5 gram',
            kandungan: 'Hidrokortison asetat 2,5%',
            kategori: 'Obat Resep Bermerk dan Generik',
            deskripsi: 'Digunakan untuk mengatasi peradangan seperti kemerahan, gatal, bengkak, iritasi, serta rasa tidak nyaman yang timbul akibat dermatitis ataupun penyakit kulit lainnya.'
        },
        {
            id: 'resep-2',
            name: 'Krim Ketokonazol',
            image: 'Krim_ketokonazol.png',
            netto: '10 gram',
            kandungan: 'Ketokonazol 20 mg',
            kategori: 'Obat Resep Bermerk dan Generik',
            deskripsi: 'Digunakan untuk pengobatan berbagai infeksi jamu pada kulit, seperti panu, dermatofitosis, kandidiasis kulit, dan dermatitis seboroik.'
        },
        {
            id: 'resep-3',
            name: 'Tablet Amoxicillin',
            image: 'tablet_amoxicillin.png',
            netto: '500 mg',
            kandungan: '500 mg Amoxicillin @1tablet',
            kategori: 'Obat Resep Bermerk dan Generik',
            deskripsi: 'Digunakan untuk membantu mengobati infeksi bakteri, khususnya pada saluran pernapasan, saluran kemih, kulit, serta jaringan lunak.'
        },
        {
            id: 'resep-4',
            name: 'Tablet Metformin',
            image: 'tablet_metformin.png',
            netto: '10 strips × 10 tablet',
            kandungan: 'Metformin HCl 500 mg @1tablet',
            kategori: 'Obat Resep Bermerk dan Generik',
            deskripsi: 'Digunakan untuk membantu mengontrol kadar gula darah pada pasien dengan diabetes melitus tipe 2. Bekerja dengan meningkatkan sensitivitas tubuh terhadap insulin serta menurunkan produksi glukosa di hati. Obat ini merupakan obat keras dan harus digunakan berdasarkan resep dokter untuk memastikan penggunaan yang aman dan sesuai kondisi pasien.'
        },
        {
            id: 'resep-5',
            name: 'Kapsul Omeprazole',
            image: 'kapsul_omeprazole.png',
            netto: '10 kapsul x 10 strip',
            kandungan: 'Omeprazole 20 mg',
            kategori: 'Obat Resep Bermerk dan Generik',
            deskripsi: 'Digunakan untuk membantu mengurangi produksi asam lambung dan mengobati kondisi seperti tukak lambung, tukak usus dua belas jari, refluks asam (GERD), serta gangguan lambung lainnya yang terkait kelebihan asam. Obat ini hanya dapat digunakan dengan resep dokter.'
        },
        {
            id: 'resep-6',
            name: 'Tetes Mata Kloramfenikol',
            image: 'tetes_mata_kloramfenikol.png',
            netto: '20 ml',
            kandungan: 'Kloramfenikol 100 mg',
            kategori: 'Obat Resep Bermerk dan Generik',
            deskripsi: 'Digunakan untuk memebantu mengatasi infeksi bakteri pada mata, seperti konjungtivitis dan blefaritis.'
        },
        {
            id: 'resep-7',
            name: 'Injeksi Fenitoin',
            image: 'injeksi_fenitoin.png',
            netto: '100 mg Natrium Fenitoin (50 mg/ml)',
            kandungan: 'Kloramfenikol 100 mg',
            kategori: 'Obat Resep Bermerk dan Generik',
            deskripsi: 'Digunakan untuk membantu mengatasi kejang, termasuk status epileptikus, serta mencegah kejang selama atau setelah prosedur bedah saraf.'
        },
        {
            id: 'resep-8',
            name: 'Injeksi Ranitidine',
            image: 'injeksi_ranitidine.png',
            netto: '2 ml',
            kandungan: 'Ranitidin HCl 25 mg/ml',
            kategori: 'Obat Resep Bermerk dan Generik',
            deskripsi: 'Digunakan untuk membantu menurunkan sekresi asam lambung pada kondisi seperti tukak lambung, gastritis akut, dan refluks asam, serta untuk pencegahan perdarahan gastrointestinal pada pasien rawat inap.'
        },
        {
            id: 'resep-9',
            name: 'Serbuk Injeksi Cefazolin',
            image: 'serbuk_injeksi_cefazolin.png',
            netto: '1 gram',
            kandungan: '45 mg Cefazolin/ml',
            kategori: 'Obat Resep Bermerk dan Generik',
            deskripsi: 'Digunakan untuk membantu mengobati berbagai infeksi bakteri, termasuk infeksi kulit, saluran pernapasan, saluran kemih, serta infeksi pascaoperasi.'
        },
        {
            id: 'resep-10',
            name: 'Nasal Spray Fluticasone',
            image: 'nasal_spray_fluticasone.png',
            netto: '10 mL',
            kandungan: '5 mcg fluticasone propionat @1 spray',
            kategori: 'Obat Resep Bermerk dan Generik',
            deskripsi: 'Digunakan untuk membantu meredakan gejala rinitis alergi, seperti bersin, hidung tersumbat, dan gatal, dengan mengurangi peradangan pada mukosa hidung.'
        },
        {
            id: 'resep-11',
            name: 'Infus Dekstrosa 5%',
            image: 'infus_dekstrosa.png',
            netto: '500 mL',
            kandungan: 'Dextrose anhydrous 25 g per 500 mL',
            kategori: 'Obat Resep Bermerk dan Generik',
            deskripsi: 'Digunakan sebagai terapi cairan dan sumber kalori pada pasien yang memerlukan pemberian cairan secara intravena. Pemberian harus dilakukan oleh tenaga kesehatan dan sesuai petunjuk dokter. Obat ini hanya dapat digunakan dengan resep dokter.'
        },
        {
            id: 'resep-12',
            name: 'Infus NaCl 0,9%',
            image: 'infus_nacl.png',
            netto: '500 mL',
            kandungan: 'Sodium Chloride (NaCl) 4,5 g per 500 mL',
            kategori: 'Obat Resep Bermerk dan Generik',
            deskripsi: 'Digunakan sebagai terapi cairan untuk membantu menggantikan kehilangan elektrolit dan menjaga keseimbangan cairan tubuh pada pasien yang membutuhkan pemberian secara intravena. Pemberian harus dilakukan oleh tenaga kesehatan sesuai petunjuk dokter. Obat ini hanya dapat digunakan dengan resep dokter.'
        },
        {
            id: 'resep-13',
            name: 'Injeksi Ceftriaxone',
            image: 'injeksi_ceftriaxone.png',
            netto: '1.0 g x 10 vial',
            kandungan: 'Ceftriaxone Sodium 1.0 g per vial',
            kategori: 'Obat Resep Bermerk dan Generik',
            deskripsi: 'Merupakan serbuk untuk injeksi yang digunakan dalam pengobatan infeksi bakteri, seperti infeksi saluran pernapasan, infeksi saluran kemih, infeksi kulit, infeksi intra-abdomen, serta infeksi lain yang sensitif terhadap ceftriaxone. Diberikan melalui injeksi intravena (I.V.) atau intramuskular (I.M.) oleh tenaga kesehatan. Obat ini hanya dapat digunakan dengan resep dokter.'
        },
        {
            id: 'resep-14',
            name: 'Injeksi Furosemide',
            image: 'injeksi_furosemide.png',
            netto: '10 ampul @ 2 mL',
            kandungan: 'Furosemide 10 mg/mL',
            kategori: 'Obat Resep Bermerk dan Generik',
            deskripsi: 'Digunakan untuk membantu mengatasi kondisi edema (penumpukan cairan) akibat gagal jantung, gangguan liver, atau gangguan ginjal. Dapat diberikan melalui injeksi intravena (I.V.) atau intramuskular (I.M.). Penggunaan harus dengan resep dan pengawasan dokter.'
        },
        {
            id: 'resep-15',
            name: 'Injeksi Metoklopramid',
            image: 'injeksi_metoklopramid.png',
            netto: '10 ampul @ 2 mL',
            kandungan: 'Metoclopramide HCL 5 mg/mL',
            kategori: 'Obat Resep Bermerk dan Generik',
            deskripsi: 'Digunakan untuk membantu meredakan mual dan muntah, termasuk yang disebabkan oleh operasi, migrain, atau efek obat tertentu. Dapat diberikan melalui injeksi intravena (I.V.) maupun intramuskular (I.M.). Penggunaan harus dengan resep dan pengawasan dokter.'
        },
    ]
};

const csrActivities = [
    {
        id: 'csr-1',
        title: 'Sekolah Gizi Seimbang bersama Pharmanora',
        mainImage: 'kegiatan1.JPG', // Gambar yang ditampilkan di halaman daftar
        detailImages: ['kegiatan1.2.JPG', 'kegiatan1.3.JPG'], // Gambar pendukung
        description: 'Sekolah Gizi Seimbang bersama Pharmanora Adalah kegiatan edukasi di TK sekitar Palembang yang diselenggarakan oleh Pharmanora untuk memperkenalkan konsep gizi seimbang dan kebiasaan makan sehat sejak dini. Tim Pharmanora bersama tenaga kesehatan memberikan penyuluhan sederhana tentang isi piring seimbang, pentingnya sarapan, dan memilih jajanan yang aman. Edukasi dikemas melalui permainan, poster bergambar, dan booklet yang memuat informasi gizi sekaligus edukasi konsumsi obat yang baik pada anak.'
    },
    {
        id: 'csr-2',
        title: 'Gerakan Lansia Aktif dan Sehat bersama Pharmanora',
        mainImage: 'kegiatan2.JPG',
        detailImages: ['kegiatan2.2.JPG', 'kegiatan2.3.JPG'],
        description: 'Kegiatan komunitas yang menggabungkan cek kesehatan dengan edukasi dan aktivitas fisik ringan untuk lansia. Kegiatan dimulai dengan pemeriksaan kesehatan dasar, meliputi pengukuran tekanan darah, nadi, berat badan, serta pemeriksaan gula darah dan kolesterol menggunakan strip test. Setelah pemeriksaan, lansia diajak mengikuti senam lansia ringan dan sesi edukasi mengenai pola hidup sehat pada usia lanjut. Pharmanora berperan menyediakan fasilitas pemeriksaan (termasuk alat dan strip test), materi edukasi, serta informasi mengenai penggunaan obat dan suplemen yang sesuai dan aman untuk lansia.'
    },
    {
        id: 'csr-3',
        title: 'Eco Desa Sehat bersama Pharmanora',
        mainImage: 'kegiatan3.JPG',
        detailImages: ['kegiatan3.2.JPG', 'kegiatan3.3.JPG'],
        description: 'Program komunitas untuk mengajak warga desa menerapkan hidup sehat dan ramah lingkungan. Kegiatan mencakup edukasi pengelolaan sampah, pembuatan taman toga, dan sosialisasi penggunaan obat yang aman. Pharmanora mendukung dengan penyediaan materi edukasi, pendampingan sederhana, serta informasi kesehatan yang tepat bagi masyarakat desa.'
    }
];
