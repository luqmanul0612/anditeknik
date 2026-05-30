'use client';
import cn from './styles.module.scss';
import Logo from '@/assets/logo-at.svg';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, viewportOptions } from '@/utils/animations';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={cn.main}>
      <motion.div
        className={cn.inner}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        <motion.div className={cn.brand} variants={fadeInUp}>
          <div className={cn.logoRow}>
            <Logo className={cn.logo} />
            <div>
              <p className={cn.name}>ANDI TEKNIK</p>
              <p className={cn.tagline}>AC SOLUTION</p>
            </div>
          </div>
          <p className={cn.brandDesc}>
            Jasa service AC panggilan profesional dan terpercaya di wilayah Jabodetabek.
            Teknisi bersertifikat, harga transparan, bergaransi.
          </p>
        </motion.div>
        <motion.div className={cn.linksGroup} variants={fadeInUp}>
          <p className={cn.groupTitle}>Layanan</p>
          <ul>
            <li>Service AC</li>
            <li>Cuci AC</li>
            <li>Bongkar Pasang AC</li>
            <li>Isi Freon</li>
            <li>Ganti Spare Part</li>
          </ul>
        </motion.div>
        <motion.div className={cn.linksGroup} variants={fadeInUp}>
          <p className={cn.groupTitle}>Perusahaan</p>
          <ul>
            <li>Tentang Kami</li>
            <li>Area Layanan</li>
            <li>Harga</li>
            <li>Kontak</li>
          </ul>
        </motion.div>
        <motion.div className={cn.linksGroup} variants={fadeInUp}>
          <p className={cn.groupTitle}>Kontak</p>
          <ul>
            <li>+62 812-3456-7890</li>
            <li>info@anditeknik.com</li>
            <li>Bekasi, Jawa Barat</li>
            <li>Senin–Minggu, 08.00–21.00</li>
          </ul>
        </motion.div>
      </motion.div>
      <div className={cn.bottom}>
        <p>© {year} Andi Teknik. Semua hak dilindungi.</p>
        <p>Dibuat dengan ❤ untuk kenyamanan Anda</p>
      </div>
    </footer>
  );
};

export default Footer;
