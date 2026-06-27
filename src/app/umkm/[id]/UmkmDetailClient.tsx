'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QRModal from '@/components/QRModal';
import { UMKM } from '@/lib/db';
import styles from './page.module.css';

interface UmkmDetailClientProps {
  umkm: UMKM;
}

export default function UmkmDetailClient({ umkm }: UmkmDetailClientProps) {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  // Dapatkan URL saat ini di client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getVillageBadgeClass = (village: string) => {
    return village === 'Lembar' ? 'badge-village-lembar' : 'badge-village-lembar-selatan';
  };

  return (
    <>
      <Navbar />
      
      <main className={styles.main}>
        <div className="container">
          {/* Breadcrumbs & Back Button */}
          <div className={styles.navigation}>
            <Link href="/" className={styles.backLink}>
              ← Kembali ke Direktori
            </Link>
            <div className={styles.breadcrumbs}>
              <Link href="/">Beranda</Link>
              <span className={styles.separator}>/</span>
              <span>Detail UMKM</span>
              <span className={styles.separator}>/</span>
              <span className={styles.activeBreadcrumb}>{umkm.name}</span>
            </div>
          </div>

          {/* Header Card */}
          <div className={styles.headerCard}>
            <div className={styles.headerImageWrapper}>
              <img 
                src={umkm.imageUrl} 
                alt={umkm.name} 
                className={styles.headerImage}
              />
              <div className={styles.badges}>
                <span className={`badge ${getVillageBadgeClass(umkm.village)}`}>
                  {umkm.village}
                </span>
                <span className={`badge badge-category`}>
                  {umkm.categoryLabel}
                </span>
              </div>
            </div>
            <div className={styles.headerContent}>
              <h1 className={styles.name}>{umkm.name}</h1>
              <p className={styles.owner}>Pemilik: {umkm.owner}</p>
              <p className={styles.description}>{umkm.description}</p>
            </div>
          </div>

          {/* Content Layout */}
          <div className={styles.contentGrid}>
            {/* Left Column: Product Catalog */}
            <div className={styles.leftColumn}>
              <h2 className={styles.columnTitle}>Daftar Produk & Harga</h2>
              <p className={styles.columnSubtitle}>
                Berikut adalah produk-produk unggulan beserta daftar harga resmi dari {umkm.name}.
              </p>

              <div className={styles.productsList}>
                {umkm.products && umkm.products.length > 0 ? (
                  umkm.products.map((product, idx) => (
                    <div key={idx} className={styles.productCard}>
                      <div className={styles.productHeader}>
                        <h3 className={styles.productName}>{product.name}</h3>
                        <span className={styles.productPrice}>
                          {formatPrice(product.price)}
                        </span>
                      </div>
                      {product.description && (
                        <p className={styles.productDesc}>{product.description}</p>
                      )}
                    </div>
                  ))
                ) : (
                  <p className={styles.emptyProducts}>
                    Katalog produk belum diisi. Silakan hubungi pemilik untuk daftar harga lengkap.
                  </p>
                )}
              </div>
            </div>

            {/* Right Column: Contact & Location */}
            <div className={styles.rightColumn}>
              <div className={`${styles.actionCard} glass`}>
                <h3 className={styles.actionCardTitle}>Informasi Operasional</h3>
                
                <div className={styles.operationalInfo}>
                  <div className={styles.infoRow}>
                    <span className={styles.infoIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </span>
                    <div>
                      <p className={styles.infoLabel}>Jam Buka</p>
                      <p className={styles.infoValue}>{umkm.operationalHours}</p>
                    </div>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.infoIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </span>
                    <div>
                      <p className={styles.infoLabel}>Alamat Lengkap</p>
                      <p className={styles.infoValue}>{umkm.address}</p>
                    </div>
                  </div>
                </div>

                <div className={styles.actionButtons}>
                  <a
                    href={`https://wa.me/${umkm.phone}?text=Halo%20${encodeURIComponent(umkm.owner)},%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(umkm.name)}%20dan%20ingin%20memesan.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ width: '100%', gap: '10px' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                    Hubungi via WhatsApp
                  </a>

                  <a
                    href={umkm.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ width: '100%', gap: '10px' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
                      <line x1="9" y1="3" x2="9" y2="18"/>
                      <line x1="15" y1="6" x2="15" y2="21"/>
                    </svg>
                    Petunjuk Arah (Maps)
                  </a>

                  <button
                    onClick={() => setIsQRModalOpen(true)}
                    className="btn btn-outline"
                    style={{ width: '100%', gap: '10px', marginTop: '10px' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <rect x="7" y="7" width="4" height="4"/>
                      <rect x="13" y="7" width="4" height="4"/>
                      <rect x="7" y="13" width="4" height="4"/>
                      <rect x="13" y="13" width="4" height="4"/>
                    </svg>
                    Tampilkan Poster QR Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <QRModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
        umkmName={umkm.name}
        umkmVillage={`Desa ${umkm.village}, Kec. Lembar`}
        urlToEncode={currentUrl}
      />

      <Footer />
    </>
  );
}
