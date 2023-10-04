
import logo from '../../public/assets/logo.png';
import style from './navbar.module.css';
import girl from '../../public/assets/girl.png';
import Image from 'next/image';
import OptionPage from '../optionPage/optionPage';
import { Grid } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import LeftSideBar from '../barMobile/barMobile';
import { useState } from 'react';
import { useRouter } from 'next/router';
function Navbar({setOptionOpen,setModelOpen}){
     const [option,setOption] = useState('TextBased'),
          [pageName,setPageName] = useState('Text Based');
    const media = useMediaQuery({query:'(min-width: 1224px)'});
      const router = useRouter(); 
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
                      src={girl}
                      alt="profile"
                      className={style.profile_image}
                    />
                  </div>
                </div>
                <div className={style.username}>
                  <p>
                    <strong>James B.</strong>
                  </p>
                  <a href="" style={{ color: "gray",margin:'0' }}>
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {media ? (
          <>
            <OptionPage setPageName={setPageName} />
          </>
        ) : (
          <>
            <div className={style.ismobile_fullwidth}>
              <div className={style.isMobile}>
                <LeftSideBar setOption={setOption} />
                {/* {pageName === "Text Based" ||
                pageName === "Image Based" ||
                pageName === "Controlled Generation" ||
                pageName === "By reference" ||
                pageName === "Variations" ? ( */}

                  <button
                    className={style.mobile_button}
                    onClick={() => setOptionOpen(1)}
                  >
                    Options
                  </button>

                {/* ) : null} */}
                  {/* {pageName === "Text Based" ||
                pageName === "Image Based" ||
                pageName === "Controlled Generation" ||
                pageName === "By reference" ||
                pageName === "Variations" ? ( */}

                  {/* <button
                  className={style.mobile_button}
                  onClick={() => setOptionOpen(2)}
                >
                  Models
                </button> */}

             {/* ) : null} */}
               
              </div>
            </div>
          </>
        )}
      </>
    );
}

export default Navbar;