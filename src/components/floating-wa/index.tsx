'use client';
import { motion } from 'framer-motion';
import WhatsappIcon from '@/assets/icons/whatsapp-icon.svg';
import styles from './styles.module.scss';
import { whatsappNumber } from '@/utils/constants';

const FloatingWA = () => {
  const openWhatsapp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Halo%20Andi%20Teknik%2C%20saya%20ingin%20memesan%20layanan%20AC`, '_blank');
  };

  return (
    <motion.button
      className={styles.fab}
      onClick={openWhatsapp}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.4, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat WhatsApp"
    >
      <motion.div
        className={styles.ring}
        animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeOut' }}
      />
      <WhatsappIcon className={styles.icon} />
    </motion.button>
  );
};

export default FloatingWA;
