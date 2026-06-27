import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.infoSection}>
          <h4 className={styles.title}>KKN PPM UGM Lembar</h4>
          <p className={styles.description}>
            Program kerja pendataan, digitalisasi pemasaran, dan penguatan UMKM lokal di Desa Lembar & Desa Lembar Selatan, Kecamatan Lembar, Lombok Barat.
          </p>
        </div>
        <div className={styles.metaSection}>
          <p className={styles.copyright}>
            &copy; {currentYear} KKN UGM Lembar. Dibuat dengan dedikasi untuk pemberdayaan masyarakat pesisir Lombok.
          </p>
          <p className={styles.version}>Bagian Sub-Katalog UMKM Lembar</p>
        </div>
      </div>
    </footer>
  );
}
