import React from 'react';
import { Metadata } from 'next';
import { getUMKMById } from '@/lib/db';
import UmkmDetailClient from './UmkmDetailClient';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ id: string }>;
}

// Generate dynamic SEO metadata for each UMKM
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const umkm = await getUMKMById(id);

  if (!umkm) {
    return {
      title: "UMKM Tidak Ditemukan - KKN Lembar",
      description: "Halaman UMKM tidak ditemukan di Direktori UMKM Kecamatan Lembar, Lombok Barat.",
    };
  }

  return {
    title: `${umkm.name} - Direktori UMKM Lembar`,
    description: `Katalog produk, daftar harga, kontak WhatsApp, dan lokasi Google Maps ${umkm.name} di Desa ${umkm.village}, Kecamatan Lembar, Lombok Barat.`,
    openGraph: {
      title: `${umkm.name} - Desa ${umkm.village}`,
      description: `Lihat daftar produk, harga, dan kontak pemesanan langsung dari pelaku UMKM di Lombok Barat.`,
      images: [{ url: umkm.imageUrl }],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const umkm = await getUMKMById(id);

  // Jika UMKM tidak ditemukan
  if (!umkm) {
    return (
      <>
        <Navbar />
        <main className={styles.errorContainer}>
          <div className="container">
            <div className={styles.errorCard}>
              <span className={styles.errorIcon}>🏝️</span>
              <h1 className={styles.errorTitle}>UMKM Tidak Ditemukan</h1>
              <p className={styles.errorText}>
                Maaf, profil UMKM yang Anda cari tidak terdaftar atau telah dinonaktifkan.
              </p>
              <Link href="/" className="btn btn-primary">
                Kembali ke Beranda Direktori
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return <UmkmDetailClient umkm={umkm} />;
}
