import cn from './image-slider.module.scss';
import { FC, SVGProps } from 'react';

interface Props {
  imgs: FC<SVGProps<SVGElement>>[];
}

const ImageSlider = ({ imgs }: Props) => {
  return (
    <div className={cn.logos}>
      <div className={cn['logos-slide']}>
        {imgs.map((Component, i) => (
          <Component key={i} />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
