'use client';

import cn from './styles.module.scss';
import { CheckIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/utils/animations';
import { whatsappNumber } from '@/utils/constants';

const packages = [
  {
    name: 'Service AC',
    tagline: 'Perawatan & Perbaikan',
    price: '100.000',
    unit: 'per unit',
    color: '#0284c7',
    features: ['Diagnosa kerusakan', 'Pembersihan filter', 'Cek tekanan freon', 'Cek kelistrikan', 'Garansi 14 hari'],
    popular: false,
  },
  {
    name: 'Cuci AC',
    tagline: 'Steam Cleaning',
    price: '80.000',
    unit: 'per unit',
    color: '#16a34a',
    features: ['Cuci evaporator', 'Cuci kondensor', 'Pembersihan drain pan', 'Disinfektan anti jamur', 'Garansi kebersihan 30 hari'],
    popular: true,
  },
  {
    name: 'Bongkar Pasang',
    tagline: 'Instalasi AC',
    price: '300.000',
    unit: 'per unit',
    color: '#ea580c',
    features: [
      'Pasang unit indoor & outdoor',
      'Pipa instalasi standar 3m',
      'Pengkabelan listrik',
      'Setting remote & uji coba',
      'Garansi instalasi 30 hari',
    ],
    popular: false,
  },
];

const SectionHarga = () => {
  const openWhatsapp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Halo%20Andi%20Teknik%2C%20saya%20ingin%20tanya%20tentang%20harga`, '_blank');
  };

  return (
    <div className={cn.main} id="harga">
      <motion.div className={cn.header} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}>
        <motion.p className={cn.subtitle} variants={fadeInUp}>
          HARGA TRANSPARAN
        </motion.p>
        <motion.h2 className={cn.title} variants={fadeInUp}>
          Paket Layanan
        </motion.h2>
        <motion.div className={cn.line} variants={fadeInUp} />
        <motion.p className={cn.desc} variants={fadeInUp}>
          Harga yang jelas dan transparan tanpa biaya tersembunyi. Dapatkan estimasi harga sebelum pekerjaan dimulai.
        </motion.p>
      </motion.div>

      <motion.div
        className={cn.grid}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        {packages.map((pkg, i) => (
          <motion.div
            key={i}
            className={`${cn.card} ${pkg.popular ? cn.popular : ''}`}
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.95 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            whileHover={{
              y: pkg.popular ? -4 : -8,
              transition: { duration: 0.25 },
            }}
          >
            {pkg.popular && <div className={cn.badge}>Paling Diminati</div>}
            <div className={cn.cardTop} style={{ borderTop: `4px solid ${pkg.color}` }}>
              <p className={cn.pkgName}>{pkg.name}</p>
              <p className={cn.pkgTagline}>{pkg.tagline}</p>
              <div className={cn.priceRow}>
                <span className={cn.curr}>Rp</span>
                <motion.span
                  className={cn.priceNum}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={viewportOptions}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                >
                  {pkg.price}
                </motion.span>
              </div>
              <p className={cn.unit}>{pkg.unit}</p>
            </div>
            <ul className={cn.features}>
              {pkg.features.map((f, j) => (
                <motion.li
                  key={j}
                  className={cn.feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOptions}
                  transition={{ duration: 0.3, delay: 0.4 + j * 0.07 }}
                >
                  <span className={cn.checkWrap} style={{ backgroundColor: pkg.color }}>
                    <CheckIcon className={cn.checkIcon} />
                  </span>
                  {f}
                </motion.li>
              ))}
            </ul>
            <motion.button
              className={cn.orderBtn}
              style={{ backgroundColor: pkg.color }}
              onClick={openWhatsapp}
              whileHover={{ scale: 1.04, filter: 'brightness(1.1)' }}
              whileTap={{ scale: 0.97 }}
            >
              Pesan Sekarang
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className={cn.note}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOptions}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span>* Harga belum termasuk spare part tambahan jika diperlukan.</span>
        <span>Hubungi kami untuk estimasi biaya lengkap.</span>
      </motion.div>
    </div>
  );
};

export default SectionHarga;
