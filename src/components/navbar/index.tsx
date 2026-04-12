import cn from './styles.module.scss';
import Logo from '@/assets/logo-at.svg';
import WhatsappIcon from '@/assets/icons/whatsapp-icon.svg';

const Navbar = () => {
  return (
    <div className={cn.main}>
      <div className={cn.top}>
        <div>
          <div className={cn.whatsapp}>
            <WhatsappIcon className={cn.icon} />
            <span className={cn.bold}>Whatsapp:</span> 0812-3456-7890
          </div>
        </div>
      </div>
      <div className={cn.content}>
        <div>
          <div className={cn.companyLogo}>
            <Logo className={cn.logo} />
            <div className={cn.companyName}>
              <p className={cn.name}>ANDI TEKNIK</p>
              <p className={cn.desc}>YOUR AC SOLUTION</p>
            </div>
          </div>
          <div className={cn.menu}>
            <div className={cn.item}>HOME</div>
            <div className={cn.item}>TENTANG KAMI</div>
            <div className={cn.item}>AREA LAYANAN</div>
            <div className={cn.item}>HARGA</div>
            <div className={cn.item}>KONTAK</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
