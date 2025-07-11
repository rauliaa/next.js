import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center justify-center text-center p-4">
      <p className="text-gray-700 max-w-md mb-6">
        Halaman ini dibuat sebagai bagian dari latihan membangun aplikasi web menggunakan Next.js.
        Di dalamnya berisi informasi sederhana tentang proyek, serta navigasi ke halaman lainnya.
      </p>
      <Link href="/profile">
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full transition">
          Pergi ke Halaman Profil
        </button>
      </Link>
    </main>
  );
}
