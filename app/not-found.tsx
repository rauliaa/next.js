export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full text-center">
        <h1 className="text-6xl font-extrabold text-purple-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Ups! Halaman Tidak Ditemukan</h2>
        <p className="text-gray-700 mb-6">
          Sepertinya kamu nyasar ke jalur yang tidak tersedia. Coba kembali ke halaman yang benar ya~
        </p>
        <a
          href="/"
          className="inline-block bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition"
        >
          Kembali ke Beranda
        </a>
      </div>
    </main>
  );
}
