import { useEffect } from 'react';
import Navbar from '../component/navbar/navbar';
import SideContent from '../component/sideContent/sideCotent';
import style from './index.module.css';
export default function ImageEditing(){
    
    return(
    <>
     <div className={style.fullpage}>
      <Navbar/>
      <SideContent/>
     </div>
    </>
    )

}