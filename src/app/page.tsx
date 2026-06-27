'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UmkmCard from '@/components/UmkmCard';
import { UMKM, CATEGORIES, VILLAGES } from '@/lib/db';
import styles from './page.module.css';

export default function Home() {
  const [umkmList, setUmkmList] = useState<UMKM[]>([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedVillage, setSelectedVillage] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data UMKM dengan filter
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const queryParams = new URLSearchParams();
        if (search) queryParams.append('search', search);
        if (selectedCategory && selectedCategory !== 'all') {
          queryParams.append('category', selectedCategory);
        }
        if (selectedVillage && selectedVillage !== 'all') {
          queryParams.append('village', selectedVillage);
        }

        const res = await fetch(`/api/umkm?${queryParams.toString()}`);
        if (res.ok) {
          const data = await res.json();
          setUmkmList(data);
        }
      } catch (err) {
        console.error('Gagal mengambil data UMKM:', err);
      } finally {
        setIsLoading(false);
      }
    };

    // Debounce search agar tidak spam request API
    const timer = setTimeout(() => {
      fetchData();
    }, 200);

    return () => clearTimeout(timer);
  }, [search, selectedCategory, selectedVillage]);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer} animate-fade-in`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>Katalog UMKM Digital</div>
            <h1 className={styles.heroTitle}>
              Pemberdayaan Ekonomi Pesisir & Ekologis Lembar
            </h1>
            <p className={styles.heroSubtitle}>
              Selamat datang di portal direktori UMKM Desa Lembar dan Desa Lembar Selatan. 
              Temukan kuliner khas Sasak, olahan laut segar, kerajinan anyaman ketak, 
              serta layanan wisata penyeberangan gili lokal.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>2</span>
                <span className={styles.statLabel}>Desa Mitra</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNumber}>8+</span>
                <span className={styles.statLabel}>UMKM Unggulan</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNumber}>5</span>
                <span className={styles.statLabel}>Sektor Usaha</span>
              </div>
            </div>
            <a href="#direktori" className={`btn btn-primary ${styles.heroBtn}`}>
              Mulai Menjelajah
            </a>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.imageOverlay} />
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" 
              alt="Hutan Mangrove Lembar Lombok"
              className={styles.heroImg}
            />
            <div className={styles.visualCard}>
              <span className={styles.visualIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 22h20L12 2z"/>
                </svg>
              </span>
              <div>
                <p className={styles.visualCardTitle}>Ekowisata & Lokalitas</p>
                <p className={styles.visualCardText}>Pelabuhan Gerbang Lombok-Bali</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Section */}
      <section id="direktori" className={styles.directory}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Direktori UMKM Lembar</h2>
            <p className={styles.sectionSubtitle}>
              Gunakan pencarian dan filter di bawah untuk menemukan produk, harga, lokasi maps, dan kontak pemesanan langsung dari pelaku UMKM.
            </p>
          </div>

          {/* Search & Filter Controls (Glassmorphism layout) */}
          <div className={`${styles.filterBar} glass`}>
            {/* Search Input */}
            <div className={styles.searchWrapper}>
              <span className={styles.searchIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Cari nama usaha, produk (misal: cumi, sate, mete)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.searchInput}
              />
              {search && (
                <button 
                  className={styles.clearBtn} 
                  onClick={() => setSearch('')}
                  aria-label="Bersihkan pencarian"
                >
                  &times;
                </button>
              )}
            </div>

            {/* Select Village Dropdown */}
            <div className={styles.selectWrapper}>
              <span className={styles.selectIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              <select
                value={selectedVillage}
                onChange={(e) => setSelectedVillage(e.target.value)}
                className={styles.selectInput}
                aria-label="Filter berdasarkan Desa"
              >
                {VILLAGES.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Quick Filter (Horizontal Scroll) */}
          <div className={styles.categoriesContainer}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`${styles.catButton} ${
                  selectedCategory === cat.id ? styles.catButtonActive : ''
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Directory Grid */}
          {isLoading ? (
            <div className={styles.loaderContainer}>
              <div className={styles.spinner} />
              <p>Memuat direktori UMKM...</p>
            </div>
          ) : umkmList.length > 0 ? (
            <div className={styles.grid}>
              {umkmList.map((umkm) => (
                <div key={umkm.id} className="animate-fade-in">
                  <UmkmCard umkm={umkm} />
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <div className={styles.noResultsIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  <line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
              </div>
              <h3>UMKM Tidak Ditemukan</h3>
              <p>
                Tidak ada pelaku UMKM yang cocok dengan pencarian &ldquo;{search}&rdquo; 
                {selectedCategory !== 'all' && ` di kategori ${CATEGORIES.find(c => c.id === selectedCategory)?.label}`}
                {selectedVillage !== 'all' && ` di wilayah ${selectedVillage}`}.
              </p>
              <button
                className="btn btn-outline"
                onClick={() => {
                  setSearch('');
                  setSelectedCategory('all');
                  setSelectedVillage('all');
                }}
                style={{ marginTop: '16px' }}
              >
                Reset Semua Filter
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
