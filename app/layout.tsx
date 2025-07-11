import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tugas Next.js Rahma",
  description: "Halaman statis, dinamis, dan 404",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="max-w-4xl mx-auto px-4 py-3 flex justify-center space-x-6">
            <Link
              href="/"
              className="text-purple-700 font-medium hover:underline"
            >
              Beranda
            </Link>
            <Link
              href="/about"
              className="text-purple-700 font-medium hover:underline"
            >
              Tentang
            </Link>
            <Link
              href="/profile"
              className="text-purple-700 font-medium hover:underline"
            >
              Profil
            </Link>
            <Link
              href="/products"
              className="text-purple-700 font-medium hover:underline"
            >
              Produk
            </Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
