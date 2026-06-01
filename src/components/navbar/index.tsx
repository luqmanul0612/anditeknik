'use client';
import { useState, useEffect } from 'react';
import cn from './styles.module.scss';
import Logo from '@/assets/logo-at.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { whatsappNumber } from '@/utils/constants';

const menuItems = [
  { label: 'HOME', anchor: '#home' },
  { label: 'TENTANG KAMI', anchor: '#tentang' },
  { label: 'LAYANAN', anchor: '#layanan' },
  { label: 'HARGA', anchor: '#harga' },
  { label: 'AREA LAYANAN', anchor: '#area' },
  { label: 'KONTAK', anchor: '#kontak' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (anchor: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const openWhatsapp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Halo%20Andi%20Teknik%2C%20saya%20ingin%20memesan%20layanan%20AC`, '_blank');
  };

  return (
    <motion.div
      className={`${cn.main} ${scrolled ? cn.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={cn.content}>
        <div>
          <div className={cn.companyLogo} onClick={() => scrollTo('#home')}>
            <Logo className={cn.logo} />
            <div className={cn.companyName}>
              <p className={cn.name}>ANDI TEKNIK</p>
              <p className={cn.desc}>AC SOLUTION</p>
            </div>
          </div>
          <div className={cn.right}>
            <div className={cn.menu}>
              {menuItems.map((item) => (
                <motion.div
                  key={item.label}
                  className={cn.item}
                  onClick={() => scrollTo(item.anchor)}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.15 }}
                >
                  {item.label}
                </motion.div>
              ))}
            </div>
            <motion.button className={cn.button} onClick={openWhatsapp} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              PESAN SEKARANG
            </motion.button>
            <button className={`${cn.hamburger} ${open ? cn.open : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      {/* Wrapper clip untuk animasi height, terpisah dari konten yang clickable */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className={cn.mobileMenuWrapper}
            key="mobile-menu"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className={cn.mobileMenu}>
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  className={cn.mobileItem}
                  onClick={() => scrollTo(item.anchor)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item.label}
                </motion.div>
              ))}
              <motion.button
                className={cn.mobileButton}
                onClick={openWhatsapp}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: menuItems.length * 0.05 }}
                whileTap={{ scale: 0.97 }}
              >
                PESAN SEKARANG
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
