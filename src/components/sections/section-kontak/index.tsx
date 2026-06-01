'use client';
import cn from './styles.module.scss';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import WhatsappIcon from '@/assets/icons/whatsapp-icon.svg';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer, viewportOptions } from '@/utils/animations';
import { phoneNumberLabel, whatsappNumber } from '@/utils/constants';

const contactInfos = [
  {
    icon: PhoneIcon,
    label: 'Telepon',
    value: phoneNumberLabel,
    link: `tel:+${whatsappNumber}`,
  },
  {
    icon: EnvelopeIcon,
    label: 'Email',
    value: 'info@anditeknik.com',
    link: 'mailto:info@anditeknik.com',
  },
  {
    icon: MapPinIcon,
    label: 'Alamat',
    value: 'Jl. Raya Bekasi No. 123, Bekasi Selatan, Jawa Barat',
    link: '#',
  },
  {
    icon: ClockIcon,
    label: 'Jam Operasional',
    value: 'Senin – Minggu: 08.00 – 21.00 WIB',
    link: '#',
  },
];

const SectionKontak = () => {
  const openWhatsapp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Halo%20Andi%20Teknik%2C%20saya%20ingin%20memesan%20layanan%20AC`, '_blank');
  };

  return (
    <div className={cn.main} id="kontak">
      <div className={cn.inner}>
        <motion.div className={cn.left} variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportOptions}>
          <p className={cn.subtitle}>HUBUNGI KAMI</p>
          <h2 className={cn.title}>Siap Melayani Anda</h2>
          <div className={cn.line} />
          <p className={cn.desc}>
            Jangan biarkan AC bermasalah mengganggu kenyamanan Anda. Hubungi kami sekarang dan teknisi berpengalaman kami siap membantu.
          </p>
          <motion.div className={cn.infos} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}>
            {contactInfos.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={i}
                  href={info.link}
                  className={cn.infoItem}
                  variants={fadeInUp}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <motion.div className={cn.infoIcon} whileHover={{ scale: 1.15, rotate: 5 }} transition={{ duration: 0.2 }}>
                    <Icon />
                  </motion.div>
                  <div>
                    <p className={cn.infoLabel}>{info.label}</p>
                    <p className={cn.infoValue}>{info.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div className={cn.right} variants={fadeInRight} initial="hidden" whileInView="visible" viewport={viewportOptions}>
          <motion.div className={cn.ctaCard} whileHover={{ y: -4, transition: { duration: 0.25 } }}>
            <motion.div
              className={cn.waIcon}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            >
              <WhatsappIcon />
            </motion.div>
            <h3 className={cn.ctaTitle}>Chat via WhatsApp</h3>
            <p className={cn.ctaDesc}>
              Cara tercepat untuk menghubungi kami. Tim kami siap merespons pertanyaan dan pemesanan Anda melalui WhatsApp 7 hari seminggu.
            </p>
            <motion.button className={cn.waButton} onClick={openWhatsapp} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              Mulai Chat Sekarang
            </motion.button>
            <div className={cn.responseTime}>
              <span className={cn.dot} />
              Rata-rata respons dalam 5 menit
            </div>
          </motion.div>

          <motion.div
            className={cn.sosmedCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className={cn.sosmedTitle}>Ikuti Kami</p>
            <div className={cn.sosmedLinks}>
              {['Instagram', 'Facebook', 'TikTok'].map((s) => (
                <motion.a key={s} href="#" className={cn.sosmedItem} whileHover={{ scale: 1.07, y: -2 }} whileTap={{ scale: 0.95 }}>
                  {s}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionKontak;
