export interface ProductItem {
  name: string;
  price: number;
  description?: string;
}

export interface UMKM {
  id: string;
  name: string;
  owner: string;
  category: 'kuliner' | 'perikanan' | 'pertanian' | 'kerajinan' | 'jasa';
  categoryLabel: string;
  village: 'Lembar' | 'Lembar Selatan';
  address: string;
  phone: string; // WhatsApp format: 628xxxxxxxx
  operationalHours: string;
  mapsUrl: string;
  imageUrl: string;
  description: string;
  products: ProductItem[];
}

export const CATEGORIES = [
  { id: 'all', label: 'Semua Kategori' },
  { id: 'kuliner', label: 'Kuliner' },
  { id: 'perikanan', label: 'Hasil Laut & Perikanan' },
  { id: 'pertanian', label: 'Pertanian Lahan Kering' },
  { id: 'kerajinan', label: 'Kerajinan Tangan' },
  { id: 'jasa', label: 'Jasa & Transportasi' },
] as const;

export const VILLAGES = [
  { id: 'all', label: 'Semua Desa' },
  { id: 'Lembar', label: 'Desa Lembar' },
  { id: 'Lembar Selatan', label: 'Desa Lembar Selatan' },
] as const;

const MOCK_UMKM: UMKM[] = [
  {
    id: 'sate-bulayak-tanjung',
    name: 'Sate Bulayak Tanjung Batu',
    owner: 'Ibu Hajjah Aminah',
    category: 'kuliner',
    categoryLabel: 'Kuliner',
    village: 'Lembar',
    address: 'Dusun Tanjung Batu, Desa Lembar, Lombok Barat (Dekat Bundaran Pelabuhan)',
    phone: '6281234567890',
    operationalHours: '16:00 - 22:00 WITA',
    mapsUrl: 'https://maps.google.com/?q=Sate+Bulayak+Tanjung+Batu+Lembar',
    imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=600',
    description: 'Sate Bulayak khas Lombok yang legendaris, disajikan dengan bumbu plecing kental berempah dan lontong bulayak tradisional yang dibungkus daun enau. Dibuat dengan resep turun-temurun menggunakan daging sapi dan ayam segar pilihan.',
    products: [
      { name: 'Sate Bulayak Daging Sapi (1 Porsi)', price: 30000, description: '10 tusuk sate sapi empuk + bumbu bulayak + lontong bulayak' },
      { name: 'Sate Bulayak Daging Ayam (1 Porsi)', price: 25000, description: '10 tusuk sate ayam + bumbu bulayak + lontong bulayak' },
      { name: 'Sate Bulayak Campur (Sapi & Ayam)', price: 28000, description: '5 tusuk sate sapi + 5 tusuk sate ayam + lontong bulayak' },
      { name: 'Es Kelapa Muda Gula Merah', price: 10000, description: 'Kelapa muda segar disajikan dengan pemanis gula aren asli' }
    ]
  },
  {
    id: 'anyaman-ketak-cemare',
    name: 'Kerajinan Anyaman Ketak Cemare',
    owner: 'Bapak Wayan Sudiarta',
    category: 'kerajinan',
    categoryLabel: 'Kerajinan Tangan',
    village: 'Lembar Selatan',
    address: 'Dusun Cemare, Desa Lembar Selatan, Lombok Barat',
    phone: '6287865432109',
    operationalHours: '08:00 - 17:00 WITA',
    mapsUrl: 'https://maps.google.com/?q=Kerajinan+Ketak+Lombok',
    imageUrl: 'https://images.unsplash.com/photo-1590736969955-71cb94801759?auto=format&fit=crop&q=80&w=600',
    description: 'Kerajinan anyaman tradisional Lombok berbahan serat tanaman ketak. Menghasilkan berbagai produk dekorasi rumah tangga, tatakan gelas, tas etnik, dan wadah anyaman premium yang tahan lama serta bernilai estetis tinggi.',
    products: [
      { name: 'Tas Rattan Ketak Bundar (Etnik)', price: 150000, description: 'Tas selempang bundar dengan anyaman halus dan lapisan kain batik di dalamnya' },
      { name: 'Tatakan Piring Ketak (Set isi 6)', price: 75000, description: 'Tatakan piring bundar minimalis untuk dekorasi meja makan' },
      { name: 'Wadah Tisu Anyaman Ketak', price: 45000, description: 'Kotak tisu estetik dengan penutup' },
      { name: 'Keranjang Penyimpanan (Size M)', price: 120000, description: 'Keranjang serbaguna dengan handle kayu' }
    ]
  },
  {
    id: 'ikan-asin-cemare',
    name: 'Ikan Asin & Cumi Kering Cemare Segar',
    owner: 'Ibu Fatimah',
    category: 'perikanan',
    categoryLabel: 'Hasil Laut & Perikanan',
    village: 'Lembar Selatan',
    address: 'Kawasan Pesisir Pantai Cemare, Desa Lembar Selatan, Lombok Barat',
    phone: '6281987654321',
    operationalHours: '07:00 - 18:00 WITA',
    mapsUrl: 'https://maps.google.com/?q=Pantai+Cemare+Lombok',
    imageUrl: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&q=80&w=600',
    description: 'Pengolahan hasil laut segar langsung dari tangkapan nelayan Pantai Cemare. Dikeringkan secara tradisional dengan sinar matahari dan garam alami tanpa bahan pengawet kimia berbahaya. Higienis, gurih, dan tahan lama.',
    products: [
      { name: 'Ikan Asin Bulu Ayam Premium (500g)', price: 35000, description: 'Ikan asin tipis renyah dan gurih, sangat cocok digoreng garing' },
      { name: 'Cumi Kering Asin (250g)', price: 45000, description: 'Cumi kering asin ukuran sedang, bersih dari pasir' },
      { name: 'Ikan Asin Jambal Roti (500g)', price: 50000, description: 'Daging ikan jambal tebal, asin pas, bertekstur empuk saat digoreng' },
      { name: 'Teri Nasi Kering Super (250g)', price: 30000, description: 'Teri medan/teri nasi tawar putih bersih kualitas ekspor' }
    ]
  },
  {
    id: 'tour-boat-gili-nanggu',
    name: 'Bakti Gili Mas Boat Tour',
    owner: 'Bapak Ahmad',
    category: 'jasa',
    categoryLabel: 'Jasa & Transportasi',
    village: 'Lembar Selatan',
    address: 'Dermaga Penyeberangan Pantai Tawun / Cemare, Lembar Selatan, Lombok Barat',
    phone: '6285333444555',
    operationalHours: '06:00 - 17:30 WITA',
    mapsUrl: 'https://maps.google.com/?q=Pantai+Tawun+Lombok',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600',
    description: 'Layanan persewaan perahu motor tradisional (outrigger boat) untuk wisata keliling pulau-pulau kecil (Gili Island Hopping) di wilayah Kecamatan Lembar. Tujuan populer meliputi Gili Nanggu yang indah dengan terumbu karang menawan, Gili Sudak, dan Gili Kedis.',
    products: [
      { name: 'Paket Charter Perahu Gili Hopping (1 Perahu)', price: 350000, description: 'Kapasitas s.d 8 orang, rute Pantai Tawun - Gili Nanggu - Gili Sudak - Gili Kedis (Pulang Pergi)' },
      { name: 'Sewa Alat Snorkeling (Set Masker & Snorkel)', price: 40000, description: 'Sewa harian per orang untuk snorkeling di terumbu karang Gili Nanggu' },
      { name: 'Sewa Life Jacket / Pelampung', price: 20000, description: 'Sewa jaket keselamatan per orang' },
      { name: 'Jasa Pemandu Snorkeling Lokal', price: 100000, description: 'Pemandu lokal berpengalaman mendampingi snorkeling dan menunjukkan spot foto bawah air terbaik' }
    ]
  },
  {
    id: 'kacang-mete-bukit',
    name: 'Kacang Mete Bukit Lembar',
    owner: 'Ibu Sri Wahyuni',
    category: 'pertanian',
    categoryLabel: 'Pertanian Lahan Kering',
    village: 'Lembar Selatan',
    address: 'Dusun Labuan Cenik, Desa Lembar Selatan, Lombok Barat',
    phone: '628999888777',
    operationalHours: '08:00 - 20:00 WITA',
    mapsUrl: 'https://maps.google.com/?q=Labuan+Cenik+Lombok',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600',
    description: 'Kacang mete pilihan hasil panen dari perkebunan lahan kering berbukit di perbatasan Desa Lembar Selatan. Diproses secara higienis, disangrai (roasted) dengan resep bumbu bawang putih kelapa tradisional untuk mempertahankan cita rasa mete gurih alami yang khas.',
    products: [
      { name: 'Kacang Mete Asin Bawang (500g)', price: 70000, description: 'Kacang mete sangrai bumbu bawang putih gurih melimpah' },
      { name: 'Kacang Mete Pedas Manis (500g)', price: 75000, description: 'Kacang mete dibalur karamel cabai manis pedas' },
      { name: 'Kacang Mete Mentah Kupas (1kg)', price: 125000, description: 'Kacang mete kupas mentah siap olah' }
    ]
  },
  {
    id: 'seafood-ikan-bakar-segar',
    name: 'Warung Ikan Bakar Pesisir Segara',
    owner: 'Bapak M. Yusuf',
    category: 'kuliner',
    categoryLabel: 'Kuliner',
    village: 'Lembar',
    address: 'Jalan Raya Pelabuhan Lembar, Desa Lembar, Lombok Barat',
    phone: '6287711223344',
    operationalHours: '10:00 - 21:00 WITA',
    mapsUrl: 'https://maps.google.com/?q=Pelabuhan+Lembar+Lombok',
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600',
    description: 'Menikmati sensasi kuliner seafood segar di dekat pelabuhan. Ikan, kepiting, dan cumi-cumi ditangkap segar setiap hari oleh nelayan lokal. Dibakar dengan arang batok kelapa dan disajikan dengan Sambal Plecing Kangkung khas Lombok Barat.',
    products: [
      { name: 'Ikan Bakar Plecing/Kecap (Per Kg)', price: 90000, description: 'Pilihan ikan: Kakap Merah, Kerapu, Baronang + Plecing Kangkung + Nasi' },
      { name: 'Cumi Goreng Tepung Khas Segara', price: 40000, description: 'Cumi segar renyah gurih porsi piring sedang' },
      { name: 'Plecing Kangkung Lombok (1 Porsi)', price: 12000, description: 'Kangkung Lombok khas berbatang besar + sambal tomat terasi segar + parutan kelapa + kacang goreng' },
      { name: 'Kepiting Saus Padang (Per Porsi)', price: 85000, description: 'Kepiting bakau dimasak dengan kuah asam manis pedas gurih' }
    ]
  },
  {
    id: 'madu-hutan-kelulut',
    name: 'Madu Hutan Trigona Kelulut Lembar',
    owner: 'Bapak Herman',
    category: 'pertanian',
    categoryLabel: 'Pertanian Lahan Kering',
    village: 'Lembar',
    address: 'Dusun Serumbung, Desa Lembar, Lombok Barat',
    phone: '6285999000111',
    operationalHours: '08:00 - 18:00 WITA',
    mapsUrl: 'https://maps.google.com/?q=Serumbung+Lombok',
    imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600',
    description: 'Madu murni hasil budidaya lebah tanpa sengat Trigona (Kelulut) yang memanfaatkan nektar tanaman hutan sekunder di wilayah perbukitan Serumbung, Lembar. Rasa cenderung asam-manis segar unik dengan khasiat propolis tinggi yang sangat bagus untuk imun tubuh.',
    products: [
      { name: 'Madu Trigona Kelulut Botol Kaca (250ml)', price: 85000, description: 'Madu Trigona murni kualitas premium' },
      { name: 'Madu Hutan Serumbung Botol Plastik (600ml)', price: 140000, description: 'Madu hutan liar Apis dorsata asli Lombok' },
      { name: 'Bee Pollen Trigona (100g)', price: 50000, description: 'Pollen lebah Trigona berprotein tinggi untuk suplemen alami' }
    ]
  },
  {
    id: 'kerajinan-kerang-gilimas',
    name: 'Kerajinan Kerang & Aksesori Gili Mas',
    owner: 'Ibu Putu Indah',
    category: 'kerajinan',
    categoryLabel: 'Kerajinan Tangan',
    village: 'Lembar',
    address: 'Dusun Labuan Lembar, Desa Lembar, Lombok Barat',
    phone: '6287877665544',
    operationalHours: '09:00 - 18:00 WITA',
    mapsUrl: 'https://maps.google.com/?q=Labuan+Lembar+Lombok',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600',
    description: 'Sentra kerajinan suvenir, aksesori, tirai jendela, dan cermin hias berbingkai kerang laut lokal. Dibuat dengan memanfaatkan sisa cangkang kerang laut pesisir Lembar, disortir dan dibersihkan dengan aman hingga menghasilkan dekorasi estetik ala resort pantai.',
    products: [
      { name: 'Cermin Dinding Bingkai Kerang (D40cm)', price: 120000, description: 'Cermin estetik dengan dekorasi cangkang kerang putih keliling' },
      { name: 'Tirai Angin Cangkang Kerang (Gantung)', price: 45000, description: 'Tirai gantung dekoratif berbunyi gemerincing indah ditiup angin' },
      { name: 'Kalung & Gelang Manik Kerang (Set)', price: 25000, description: 'Aksesori perhiasan bertema pantai' }
    ]
  }
];

export async function getAllUMKM(filters?: {
  search?: string;
  category?: string;
  village?: string;
}): Promise<UMKM[]> {
  // Simulasi pembacaan database async
  let data = [...MOCK_UMKM];

  if (filters) {
    const { search, category, village } = filters;

    if (search && search.trim() !== '') {
      const q = search.toLowerCase();
      data = data.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.owner.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.products.some((p) => p.name.toLowerCase().includes(q))
      );
    }

    if (category && category !== 'all') {
      data = data.filter((item) => item.category === category);
    }

    if (village && village !== 'all') {
      data = data.filter((item) => item.village === village);
    }
  }

  return data;
}

export async function getUMKMById(id: string): Promise<UMKM | null> {
  const item = MOCK_UMKM.find((x) => x.id === id);
  return item || null;
}
