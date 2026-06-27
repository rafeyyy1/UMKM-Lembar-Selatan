import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Direktori UMKM Lembar & Lembar Selatan",
  description: "Direktori Usaha Mikro, Kecil, dan Menengah (UMKM) Desa Lembar & Desa Lembar Selatan, Kecamatan Lembar, Lombok Barat. Program KKN PPM UGM Lembar.",
  keywords: ["UMKM", "Lembar", "Lombok Barat", "Lembar Selatan", "KKN", "UGM", "Kuliner Lombok", "Wisata Lembar", "Katalog UMKM"],
  authors: [{ name: "KKN PPM UGM Lembar" }],
  openGraph: {
    title: "Direktori UMKM Desa Lembar & Lembar Selatan",
    description: "Katalog produk, lokasi Google Maps, kontak WhatsApp, dan informasi operasional UMKM Lembar.",
    type: "website",
    locale: "id_ID",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D9488",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}
