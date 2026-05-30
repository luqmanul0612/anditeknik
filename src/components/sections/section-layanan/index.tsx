'use client';

import cn from './styles.module.scss';
import { WrenchScrewdriverIcon, SparklesIcon, ArrowPathIcon, BoltIcon, CogIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn, viewportOptions } from '@/utils/animations';

const services = [
  {
    icon: WrenchScrewdriverIcon,
    title: 'Service AC',
    desc: 'Perawatan dan perbaikan menyeluruh untuk semua jenis kerusakan AC. Teknisi kami siap mendiagnosa dan memperbaiki masalah AC Anda dengan cepat.',
    price: 'Mulai Rp 100.000',
    color: '#0284c7',
    bg: '#e0f2fe',
  },
  {
    icon: SparklesIcon,
    title: 'Cuci AC',
    desc: 'Pembersihan AC secara menyeluruh menggunakan teknik steam cleaning untuk menghilangkan debu, jamur, dan kotoran yang menempel.',
    price: 'Mulai Rp 80.000',
    color: '#16a34a',
    bg: '#dcfce7',
  },
  {
    icon: ArrowPathIcon,
    title: 'Bongkar Pasang AC',
    desc: 'Proses instalasi dan pemasangan AC baru maupun pemindahan unit AC yang sudah ada ke lokasi baru dengan rapi dan aman.',
    price: 'Mulai Rp 300.000',
    color: '#ea580c',
    bg: '#ffedd5',
  },
  {
    icon: BoltIcon,
    title: 'Isi Freon AC',
    desc: 'Pengisian freon AC yang habis atau berkurang sehingga AC kembali dingin optimal. Menggunakan freon berkualitas sesuai spesifikasi unit AC Anda.',
    price: 'Mulai Rp 150.000',
    color: '#7c3aed',
    bg: '#ede9fe',
  },
  {
    icon: CogIcon,
    title: 'Ganti Spare Part',
    desc: 'Penggantian komponen AC yang rusak seperti kapasitor, PCB, motor fan, kompresor, dan spare part lainnya dengan produk original berkualitas.',
    price: 'Sesuai Part',
    color: '#b45309',
    bg: '#fef3c7',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Garansi Service',
    desc: 'Setiap layanan service dilengkapi dengan garansi resmi. Jika AC bermasalah kembali dalam periode garansi, kami siap kunjungi tanpa biaya tambahan.',
    price: 'Garansi 30 Hari',
    color: '#0f766e',
    bg: '#ccfbf1',
  },
];

const SectionLayanan = () => {
  const openWhatsapp = () => {
    window.open('https://wa.me/6281234567890?text=Halo%20Andi%20Teknik%2C%20saya%20ingin%20memesan%20layanan%20AC', '_blank');
  };

  return (
    <div className={cn.main} id="layanan">
      <motion.div className={cn.header} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}>
        <motion.p className={cn.subtitle} variants={fadeInUp}>
          APA YANG KAMI LAKUKAN
        </motion.p>
        <motion.h2 className={cn.title} variants={fadeInUp}>
          Layanan Kami
        </motion.h2>
        <motion.div className={cn.line} variants={fadeInUp} />
        <motion.p className={cn.desc} variants={fadeInUp}>
          Kami menyediakan solusi lengkap untuk semua kebutuhan AC Anda — dari service rutin, cuci AC, hingga instalasi baru. Semua
          dikerjakan oleh teknisi bersertifikat.
        </motion.p>
      </motion.div>

      <motion.div className={cn.grid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}>
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={i}
              className={cn.card}
              variants={scaleIn}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                transition: { duration: 0.25 },
              }}
            >
              <motion.div
                className={cn.iconWrap}
                style={{ backgroundColor: s.bg }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Icon className={cn.icon} style={{ color: s.color }} />
              </motion.div>
              <div className={cn.cardBody}>
                <h3 className={cn.cardTitle}>{s.title}</h3>
                <p className={cn.cardDesc}>{s.desc}</p>
                <span className={cn.price} style={{ color: s.color }}>
                  {s.price}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className={cn.cta}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOptions}
        transition={{ duration: 0.6 }}
      >
        <p className={cn.ctaText}>Tidak menemukan layanan yang Anda cari?</p>
        <motion.button className={cn.ctaButton} onClick={openWhatsapp} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          Hubungi Kami via WhatsApp
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SectionLayanan;
