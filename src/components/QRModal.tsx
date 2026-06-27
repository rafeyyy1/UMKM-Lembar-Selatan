'use client';

import React, { useRef } from 'react';
import styles from './QRModal.module.css';

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
  umkmName: string;
  umkmVillage: string;
  urlToEncode: string;
}

export default function QRModal({ isOpen, onClose, umkmName, umkmVillage, urlToEncode }: QRModalProps) {
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    // Membuka jendela cetak bawaan browser
    const printContent = printRef.current?.innerHTML;
    const originalContent = document.body.innerHTML;

    if (printContent) {
      // Menggunakan iframe tersembunyi atau jendela baru untuk cetak agar gaya cetak terisolasi dengan rapi
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Cetak QR Code - ${umkmName}</title>
              <style>
                body {
                  font-family: 'Plus Jakarta Sans', Arial, sans-serif;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  height: 100vh;
                  margin: 0;
                  background-color: white;
                  color: #0A192F;
                  text-align: center;
                }
                .print-card {
                  border: 4px solid #0D9488;
                  border-radius: 24px;
                  padding: 40px;
                  max-width: 400px;
                  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                }
                .logo-header {
                  background-color: #0D9488;
                  color: white;
                  padding: 8px 16px;
                  font-weight: 800;
                  font-size: 0.8rem;
                  border-radius: 8px;
                  margin-bottom: 20px;
                  letter-spacing: 0.05em;
                }
                .title {
                  font-size: 1.6rem;
                  font-weight: 800;
                  margin: 0 0 8px 0;
                }
                .subtitle {
                  font-size: 1rem;
                  color: #64748B;
                  font-weight: 600;
                  margin: 0 0 30px 0;
                }
                .qr-img {
                  width: 250px;
                  height: 250px;
                  margin-bottom: 30px;
                }
                .instruction {
                  font-size: 0.85rem;
                  color: #334155;
                  line-height: 1.5;
                  font-weight: 500;
                  margin: 0;
                  border-top: 1px solid #E2E8F0;
                  padding-top: 20px;
                  max-width: 320px;
                }
              </style>
            </head>
            <body>
              <div class="print-card">
                <div class="logo-header">KKN UGM LEMBAR 2026</div>
                <h1 class="title">${umkmName}</h1>
                <p class="subtitle">${umkmVillage}</p>
                <img class="qr-img" src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(urlToEncode)}" alt="QR Code" />
                <p class="instruction">Pindai QR Code di atas menggunakan kamera smartphone untuk melihat produk, harga, dan lokasi lengkap.</p>
              </div>
              <script>
                window.onload = function() {
                  window.print();
                  setTimeout(function() { window.close(); }, 500);
                }
              </script>
            </body>
          </html>
        `);
        printWindow.document.close();
      }
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={`${styles.modal} animate-fade-in`} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Tutup modal">
          &times;
        </button>
        
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Cetak QR Code Akses UMKM</h2>
          <p className={styles.modalSubtitle}>Gunakan poster QR ini untuk media promosi fisik di kantor desa atau toko</p>
        </div>

        <div className={styles.modalContent}>
          {/* Bagian yang dirender di layar modal */}
          <div ref={printRef} className={styles.qrCardContainer}>
            <div className={styles.qrCard}>
              <div className={styles.qrHeader}>KKN UGM LEMBAR 2026</div>
              <h3 className={styles.qrTitle}>{umkmName}</h3>
              <p className={styles.qrSubtitle}>{umkmVillage}</p>
              
              <div className={styles.qrImageWrapper}>
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(urlToEncode)}`}
                  alt={`QR Code untuk ${umkmName}`}
                  className={styles.qrImage}
                />
              </div>

              <p className={styles.qrInstruction}>
                Pindai QR Code di atas menggunakan kamera handphone Anda untuk melihat daftar produk, daftar harga, kontak, dan lokasi lengkap.
              </p>
            </div>
          </div>

          <div className={styles.tipsSection}>
            <h4 className={styles.tipsTitle}>Tips Cetak Poster QR:</h4>
            <ul className={styles.tipsList}>
              <li>Gunakan opsi **Cetak Poster** di bawah untuk membuka halaman print ramah kertas A4/A5.</li>
              <li>Tempelkan QR Code ini di kantor desa, spot wisata, atau langsung pada kemasan produk UMKM terkait.</li>
              <li>Pastikan kualitas cetakan bersih (tidak buram) agar mudah dideteksi oleh kamera handphone.</li>
            </ul>
          </div>
        </div>

        <div className={styles.modalActions}>
          <button className="btn btn-outline" onClick={onClose}>
            Batal
          </button>
          <button className="btn btn-secondary" onClick={handlePrint}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
              <polyline points="6 9 6 2 18 2 18 9"/>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
              <rect x="6" y="14" width="12" height="8"/>
            </svg>
            Cetak Poster QR
          </button>
        </div>
      </div>
    </div>
  );
}
