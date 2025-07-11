interface ProductPageProps {
  params: {
    id: string;
  };
}

// Daftar produk berdasarkan ID
const produkData: Record<string, { nama: string; deskripsi: string; harga: string }> = {
  "1": {
    nama: "Baju Tie-Dye Wanita",
    deskripsi: "Baju modis dengan motif tie-dye yang kekinian dan cocok untuk semua suasana.",
    harga: "Rp 120.000",
  },
  "2": {
    nama: "Sepatu Sneakers Pria",
    deskripsi: "Sneakers ringan dan nyaman, cocok untuk jalan-jalan atau olahraga ringan.",
    harga: "Rp 275.000",
  },
  "3": {
    nama: "Tote Bag Handmade",
    deskripsi: "Tas buatan tangan dari bahan kanvas yang ramah lingkungan dan stylish.",
    harga: "Rp 95.000",
  },
};

export default function ProductPage({ params }: ProductPageProps) {
  const produk = produkData[params.id];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full text-center">
        {produk ? (
          <>
            <h1 className="text-3xl font-bold text-purple-700 mb-2">{produk.nama}</h1>
            <p className="text-gray-700">{produk.deskripsi}</p>
            <p className="text-gray-800 font-semibold mt-4">{produk.harga}</p>
            <button className="mt-6 bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full transition">
              Beli Sekarang
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-red-600 mb-2">Produk tidak ditemukan</h1>
            <p className="text-gray-600">ID produk <strong>{params.id}</strong> tidak tersedia.</p>
          </>
        )}
      </div>
    </main>
  );
}
