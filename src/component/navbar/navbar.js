import 'bootstrap/dist/css/bootstrap.css'
import logo from '../../public/assets/logo.png';
import style from './navbar.module.css'
import Image from 'next/image';
export default function Navbar(){
    
    return (
      <>
        <div className="container-fluid">
          <div className={style.logo}>
             <Image src={logo} alt='logo' className={style.logo_image}/>
          </div>
        </div>
      </>
    );
}