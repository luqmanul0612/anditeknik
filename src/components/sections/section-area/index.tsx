'use client';
import cn from './styles.module.scss';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn, viewportOptions } from '@/utils/animations';
import { whatsappNumber } from '@/utils/constants';

const areas = [
  {
    city: 'Jakarta Pusat',
    areas: ['Gambir', 'Sawah Besar', 'Kemayoran', 'Senen', 'Cempaka Putih'],
  },
  {
    city: 'Jakarta Utara',
    areas: ['Penjaringan', 'Pademangan', 'Tanjung Priok', 'Koja', 'Kelapa Gading'],
  },
  {
    city: 'Jakarta Barat',
    areas: ['Grogol', 'Tamansari', 'Palmerah', 'Kebon Jeruk', 'Cengkareng'],
  },
  {
    city: 'Jakarta Selatan',
    areas: ['Kebayoran Baru', 'Mampang', 'Cilandak', 'Jagakarsa', 'Pesanggrahan'],
  },
  {
    city: 'Jakarta Timur',
    areas: ['Matraman', 'Jatinegara', 'Kramat Jati', 'Duren Sawit', 'Cipayung'],
  },
  {
    city: 'Bekasi',
    areas: ['Bekasi Selatan', 'Bekasi Utara', 'Bekasi Timur', 'Bekasi Barat', 'Mustikajaya'],
  },
  {
    city: 'Depok',
    areas: ['Beji', 'Sukmajaya', 'Pancoran Mas', 'Sawangan', 'Cimanggis'],
  },
  {
    city: 'Tangerang',
    areas: ['Tangerang Kota', 'Ciputat', 'Serpong', 'Pamulang', 'Pondok Aren'],
  },
  {
    city: 'Bogor',
    areas: ['Bogor Kota', 'Cibinong', 'Depok (Bogor)', 'Gunung Putri', 'Citeureup'],
  },
];

const SectionArea = () => {
  const openWhatsapp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Halo%20Andi%20Teknik%2C%20saya%20ingin%20tanya%20area%20layanan`, '_blank');
  };

  return (
    <div className={cn.main} id="area">
      <motion.div className={cn.header} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}>
        <motion.p className={cn.subtitle} variants={fadeInUp}>
          JANGKAUAN KAMI
        </motion.p>
        <motion.h2 className={cn.title} variants={fadeInUp}>
          Area Layanan
        </motion.h2>
        <motion.div className={cn.line} variants={fadeInUp} />
        <motion.p className={cn.desc} variants={fadeInUp}>
          Kami melayani seluruh wilayah Jabodetabek. Teknisi kami siap datang ke lokasi Anda dalam waktu singkat untuk menyelesaikan masalah
          AC.
        </motion.p>
      </motion.div>

      <motion.div className={cn.grid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}>
        {areas.map((a, i) => (
          <motion.div key={i} className={cn.card} variants={scaleIn} whileHover={{ y: -4, transition: { duration: 0.2 } }}>
            <div className={cn.cityHeader}>
              <motion.div whileHover={{ rotate: 15, scale: 1.2 }} transition={{ duration: 0.2 }} style={{ display: 'inline-block' }}>
                <MapPinIcon className={cn.pin} />
              </motion.div>
              <h3 className={cn.city}>{a.city}</h3>
            </div>
            <ul className={cn.areaList}>
              {a.areas.map((area, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOptions}
                  transition={{ duration: 0.3, delay: j * 0.06 }}
                >
                  {area}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className={cn.notInList}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOptions}
        transition={{ duration: 0.6 }}
      >
        <div className={cn.notInListCard}>
          <p className={cn.notInListTitle}>Kota Anda Tidak Terdaftar?</p>
          <p className={cn.notInListDesc}>
            Hubungi kami untuk mengetahui apakah area Anda masuk dalam jangkauan layanan kami. Kami terus memperluas area layanan.
          </p>
          <motion.button className={cn.notInListBtn} onClick={openWhatsapp} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            Tanya Ketersediaan Area
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionArea;
