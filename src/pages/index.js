import Navbar from '../component/navbar/navbar';
import SideContent from '../component/sideContent/sideCotent';
import style from './index.module.css';
import 'bootstrap/dist/css/bootstrap.css';
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