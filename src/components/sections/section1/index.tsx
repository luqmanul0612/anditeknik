'use client';
import Image from 'next/image';
import mainAsset from '@/assets/images/main-banner.webp';
import cn from './styles.module.scss';
import { motion } from 'framer-motion';
import { whatsappNumber } from '@/utils/constants';

const openWhatsapp = () => {
  window.open(`https://wa.me/${whatsappNumber}?text=Halo%20Andi%20Teknik%2C%20saya%20ingin%20memesan%20layanan%20AC`, '_blank');
};

const Section1 = () => {
  const scrollToLayanan = () => {
    document.querySelector('#layanan')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={cn.main} id="home">
      <Image src={mainAsset} alt="main-banner" loading="eager" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
      <div className={cn.content}>
        <div className={cn.textContainer}>
          <motion.div
            className={cn.badge}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className={cn.dot} />
            Tersedia 7 Hari Seminggu
          </motion.div>

          <div className={cn.titleContainer}>
            <motion.p
              className={cn.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Ahli Teknik AC Profesional
            </motion.p>
          </div>

          <div className={cn.descContainer}>
            <motion.p
              className={cn.desc}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              SERVICE, CUCI, DAN BONGKAR PASANG AC
            </motion.p>
          </div>

          <motion.div
            className={cn.buttonRow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            <motion.button className={cn.button} onClick={openWhatsapp} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              PESAN SEKARANG
            </motion.button>
            <motion.button className={cn.buttonOutline} onClick={scrollToLayanan} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              LIHAT LAYANAN
            </motion.button>
          </motion.div>

          <motion.div
            className={cn.statsRow}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
          >
            {[
              { num: '500+', label: 'Pelanggan Puas' },
              { num: '8+', label: 'Tahun Pengalaman' },
              { num: '10+', label: 'Kota Dilayani' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                style={{ display: 'contents' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + i * 0.12 }}
              >
                <div className={cn.stat}>
                  <span className={cn.statNum}>{stat.num}</span>
                  <span className={cn.statLabel}>{stat.label}</span>
                </div>
                {i < 2 && <div className={cn.statDivider} />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
