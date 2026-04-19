import cn from './styles.module.scss';
import Logo from '@/assets/logo-at.svg';

const Navbar = () => {
  return (
    <div className={cn.main}>
      <div className={cn.content}>
        <div>
          <div className={cn.companyLogo}>
            <Logo className={cn.logo} />
            <div className={cn.companyName}>
              <p className={cn.name}>ANDI TEKNIK</p>
              <p className={cn.desc}>AC SOLUTION</p>
            </div>
          </div>
          <div className={cn.right}>
            <div className={cn.menu}>
              <div className={cn.item}>HOME</div>
              <div className={cn.item}>TENTANG KAMI</div>
              <div className={cn.item}>AREA LAYANAN</div>
              <div className={cn.item}>HARGA</div>
              <div className={cn.item}>KONTAK</div>
            </div>
            <button className={cn.button}>PESAN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
