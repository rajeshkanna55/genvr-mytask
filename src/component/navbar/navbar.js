import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../public/assets/logo.png';
import style from './navbar.module.css';
import profile from '../../public/assets/profile.png';
import Image from 'next/image';
import OptionPage from '../optionPage/optionPage';
import { Grid } from '@mui/material';
export default function Navbar(){
    
    return (
      <>
        <div className={style.color}>
          <div className="container-fluid">
            <div className={style.navbar_base}>
              <div className={style.logo}>
                <Image src={logo} alt="logo" className={style.logo_image} />
              </div>
              <div className={style.navbar_profile}>
                <div className={style.profile_ring}>
                  <div className={style.profile_ring_gape}>
                    <Image
                      src={profile}
                      alt="profile"
                      className={style.profile_image}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OptionPage />
      </>
    );
}