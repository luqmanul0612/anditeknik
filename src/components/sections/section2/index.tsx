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
      <div className={cn.main}>
        <div className={cn.content}>
          <div className={cn.left}>
            <p className={cn.text}>Kenapa Pilih Andi Teknik?</p>
            <div className={cn.line} />
            <div className={cn.textPointContainer}>
              <p className={cn.textBody}>
                Kami adalah <span className={cn.bold}>jasa service AC panggilan terbaik di Jabodetabek,</span> dipercaya masyarakat karena:
              </p>
              <div className={cn.textPointItem}>
                <Check />
                <p className={cn.textBody}>
                  <span className={cn.bold}>Wilayah Layanan</span> di setiap kota Jabodetabek untuk respons cepat.
                </p>
              </div>
              <div className={cn.textPointItem}>
                <Check />
                <p className={cn.textBody}>
                  <span className={cn.bold}>Teknisi Bersertifikat</span>, berpengalaman, dan profesional.
                </p>
              </div>
              <div className={cn.textPointItem}>
                <Check />
                <p className={cn.textBody}>
                  <span className={cn.bold}>Transparansi Harga</span> dengan garansi kepuasan.
                </p>
              </div>
              <div className={cn.textPointItem}>
                <Check />
                <p className={cn.textBody}>
                  <span className={cn.bold}>Biaya Terjangkau</span> dengan sparepart berkualitas sesuai merek AC.
                </p>
              </div>
              <p className={cn.textBody}>
                Percayakan kenyamanan AC Anda kepada kami! <span className={cn.bold}>Hubungi sekarang</span> untuk layanan terbaik!
              </p>
            </div>
          </div>
          <div className={cn.right}>
            <div className={cn.image}>
              <Image
                src={image2}
                alt="image"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={cn.cardContainer}>
        <div className={cn.cards}>
          {cardsData.map((card, i) => (
            <div key={i} className={cn.card}>
              <div className={cn.image}>
                <Image src={card.image} alt="image" fill style={{ objectFit: 'cover', objectPosition: 'center' }} sizes="250px" />
              </div>
              <div className={cn.content}>
                <p className={cn.title}>{card.title}</p>
                <p className={cn.desc}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={cn.slider}>
        <div className={cn.content}>
          <ImageSlider imgs={[...companyImages, ...companyImages]} />
        </div>
      </div>
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
