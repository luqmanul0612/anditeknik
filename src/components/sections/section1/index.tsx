import Image from 'next/image';
import mainAsset from '@/assets/images/main-banner.webp';
import cn from './styles.module.scss';

const Section1 = () => {
  return (
    <div className={cn.main}>
      <Image src={mainAsset} alt="main-banner" loading="eager" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
      <div className={cn.content}>
        <div className={cn.textContainer}>
          <div className={cn.titleContainer}>
            <p className={cn.title}>Ahli Teknik AC Profesional</p>
          </div>
          <div className={cn.descContainer}>
            <p className={cn.desc}>SERVICE, CUCI, DAN BONGKAR PASANG AC</p>
          </div>
          <button className={cn.button}>PESAN</button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
