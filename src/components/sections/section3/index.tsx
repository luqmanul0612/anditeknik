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

const Section2 = () => {
  const images = [Changhong, Daikin, Sharp, Samsung, Toshiba, Panasonic, Lg, Polytron];
  return (
    <div className={cn.main}>
      <div className={cn.content}>
        <ImageSlider imgs={[...images, ...images]} />
      </div>
    </div>
  );
};

export default Section2;
