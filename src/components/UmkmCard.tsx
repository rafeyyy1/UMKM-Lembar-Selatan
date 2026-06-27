import React from 'react';
import Link from 'next/link';
import { UMKM } from '@/lib/db';
import styles from './UmkmCard.module.css';

interface UmkmCardProps {
  umkm: UMKM;
}

export default function UmkmCard({ umkm }: UmkmCardProps) {
  const getVillageBadgeClass = (village: string) => {
    return village === 'Lembar' ? 'badge-village-lembar' : 'badge-village-lembar-selatan';
  };

  // Potong deskripsi jika terlalu panjang
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {/* Menggunakan tag img standar agar fleksibel dengan berbagai URL mock external tanpa konfigurasi domain next.config */}
        <img
          src={umkm.imageUrl}
          alt={umkm.name}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.badgesRow}>
          <span className={`badge ${getVillageBadgeClass(umkm.village)}`}>
            {umkm.village}
          </span>
          <span className={`badge badge-category`}>
            {umkm.categoryLabel}
          </span>
        </div>
        <h3 className={styles.name}>{umkm.name}</h3>
        <p className={styles.owner}>Pemilik: {umkm.owner}</p>
        <p className={styles.description}>{truncateText(umkm.description, 110)}</p>
        
        <div className={styles.infoList}>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </span>
            <span className={styles.infoText}>{umkm.operationalHours}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </span>
            <span className={styles.infoText}>{truncateText(umkm.address, 45)}</span>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href={`/umkm/${umkm.id}`} className={`btn btn-primary ${styles.detailBtn}`}>
            Lihat Detail
          </Link>
          <div className={styles.quickLinks}>
            <a
              href={`https://wa.me/${umkm.phone}?text=Halo%20${encodeURIComponent(umkm.owner)},%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(umkm.name)}%20di%20Web%20UMKM%20Lembar.`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.quickIcon}
              title="Hubungi via WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </a>
            <a
              href={umkm.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.quickIcon}
              title="Lihat Peta Lokasi"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
                <line x1="9" y1="3" x2="9" y2="18"/>
                <line x1="15" y1="6" x2="15" y2="21"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
