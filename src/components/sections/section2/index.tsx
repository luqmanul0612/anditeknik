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

const Section2 = () => {
  const images = [Changhong, Daikin, Sharp, Samsung, Toshiba, Panasonic, Lg, Polytron];
  return (
    <>
      <div className={cn.main}>
        <div className={cn.content}>
          <div className={cn.left}>
            <div className={cn.line} />
            <p className={cn.text}>Kenapa Pilih Andi Teknik?</p>
            <div className={cn.textPointContainer}>
              <div className={cn.textPointItem}>
                <Check />
                <p className={cn.textPoint}>
                  <span className={cn.bold}>Wilayah Layanan</span> di setiap kota Jabodetabek untuk respons cepat.
                </p>
              </div>
              <div className={cn.textPointItem}>
                <Check />
                <p className={cn.textPoint}>
                  <span className={cn.bold}>Teknisi Bersertifikat</span>, berpengalaman, dan profesional.
                </p>
              </div>
              <div className={cn.textPointItem}>
                <Check />
                <p className={cn.textPoint}>
                  <span className={cn.bold}>Transparansi Harga</span> dengan garansi kepuasan.
                </p>
              </div>
              <div className={cn.textPointItem}>
                <Check />
                <p className={cn.textPoint}>
                  <span className={cn.bold}>Biaya Terjangkau</span> dengan sparepart berkualitas sesuai merek AC.
                </p>
              </div>
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
      <div className={cn.slider}>
        <div className={cn.content}>
          <ImageSlider imgs={[...images, ...images]} />
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
