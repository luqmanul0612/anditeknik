'use client';
import cn from './styles.module.scss';
import ImageSlider from '@/components/image-slider';
import Changhong from '@/assets/images/changhong.svg';
import Daikin from '@/assets/images/daikin.svg';
import Samsung from '@/assets/images/samsung.svg';
import Panasonic from '@/assets/images/panasonic.svg';
import Sharp from '@/assets/images/sharp.svg';
import Toshiba from '@/assets/images/toshiba.svg';
import Lg from '@/assets/images/lg.svg';
import Polytron from '@/assets/images/polytron.svg';
import Image from 'next/image';
import image2 from '@/assets/images/image2.webp';
import { CheckIcon } from '@heroicons/react/24/outline';
import technicianIllustration from '@/assets/images/technician-illustration.webp';
import deliverIllustration from '@/assets/images/deliver-illustration.webp';
import priceIllustration from '@/assets/images/price-illustration.webp';
import warrantyIllustration from '@/assets/images/warranty-illustration.webp';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer, scaleIn, viewportOptions } from '@/utils/animations';

const companyImages = [Changhong, Daikin, Sharp, Samsung, Toshiba, Panasonic, Lg, Polytron];
const cardsData = [
  {
    image: technicianIllustration,
    title: 'Teknisi Profesional dan Berpengalaman',
    desc: 'Tim kami adalah para ahli AC senior yang terlatih dan berpengalaman, siap menangani segala jenis dan ukuran AC. Dengan pengetahuan mendalam, mereka mampu menyelesaikan masalah AC Anda dengan cepat, efisien, dan hasil optimal.',
  },
  {
    image: deliverIllustration,
    title: 'Pelayanan Cepat dan Tepat Waktu',
    desc: 'Kami paham betapa berharganya waktu Anda! Dengan pelayanan yang cepat dan selalu tepat waktu, tim kami memastikan AC Anda kembali berfungsi normal dalam sekejap.',
  },
  {
    image: priceIllustration,
    title: 'Bergaransi & Terjamin',
    desc: 'Kami berkomitmen memberikan lebih dari sekadar perbaikan dan perawatan AC berkualitas. Setiap layanan dari Andi Teknik dilengkapi garansi resmi dan jaminan keamanan, memastikan Anda mendapatkan nilai terbaik dan ketenangan pikiran.',
  },
  {
    image: warrantyIllustration,
    title: 'Transparansi Harga',
    desc: 'Kami tahu betapa pentingnya kejelasan biaya untuk Anda. Sebelum memulai, kami menyediakan estimasi biaya yang transparan, sehingga Anda terbebas dari kejutan tak terduga.',
  },
];

const Section2 = () => {
  return (
    <>
      <div className={cn.main} id="tentang">
        <div className={cn.content}>
          <motion.div className={cn.left} variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportOptions}>
            <p className={cn.text}>Kenapa Pilih Andi Teknik?</p>
            <div className={cn.line} />
            <motion.div
              className={cn.textPointContainer}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <motion.p className={cn.textBody} variants={fadeInUp}>
                Kami adalah <span className={cn.bold}>jasa service AC panggilan terbaik di Jabodetabek,</span> dipercaya masyarakat karena:
              </motion.p>
              {[
                { bold: 'Wilayah Layanan', text: ' di setiap kota Jabodetabek untuk respons cepat.' },
                { bold: 'Teknisi Bersertifikat', text: ', berpengalaman, dan profesional.' },
                { bold: 'Transparansi Harga', text: ' dengan garansi kepuasan.' },
                { bold: 'Biaya Terjangkau', text: ' dengan sparepart berkualitas sesuai merek AC.' },
              ].map((item, i) => (
                <motion.div key={i} className={cn.textPointItem} variants={fadeInUp}>
                  <Check />
                  <p className={cn.textBody}>
                    <span className={cn.bold}>{item.bold}</span>
                    {item.text}
                  </p>
                </motion.div>
              ))}
              <motion.p className={cn.textBody} variants={fadeInUp}>
                Percayakan kenyamanan AC Anda kepada kami! <span className={cn.bold}>Hubungi sekarang</span> untuk layanan terbaik!
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div className={cn.right} variants={fadeInRight} initial="hidden" whileInView="visible" viewport={viewportOptions}>
            <div className={cn.image}>
              <Image
                src={image2}
                alt="image"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className={cn.cardContainer}>
        <motion.div className={cn.cards} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}>
          {cardsData.map((card, i) => (
            <motion.div key={i} className={cn.card} variants={scaleIn} whileHover={{ y: -6, transition: { duration: 0.25 } }}>
              <div className={cn.image}>
                <Image src={card.image} alt="image" fill style={{ objectFit: 'cover', objectPosition: 'center' }} sizes="250px" />
              </div>
              <div className={cn.content}>
                <p className={cn.title}>{card.title}</p>
                <p className={cn.desc}>{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className={cn.slider}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOptions}
        transition={{ duration: 0.8 }}
      >
        <div className={cn.content}>
          <ImageSlider imgs={[...companyImages, ...companyImages]} />
        </div>
      </motion.div>
    </>
  );
};

export default Section2;

const Check = () => {
  return (
    <div className={cn.check}>
      <CheckIcon />
    </div>
  );
};
