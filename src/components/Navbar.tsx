import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoBadge}>KKN UGM</div>
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>UMKM Lembar</span>
            <span className={styles.logoSubtitle}>Kec. Lembar, Lombok Barat</span>
          </div>
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            Beranda
          </Link>
          <a href="#direktori" className={styles.navLink}>
            Jelajah UMKM
          </a>
        </nav>
      </div>
    </header>
  );
}
