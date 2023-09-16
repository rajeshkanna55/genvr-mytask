import { useEffect } from 'react';
import Navbar from '../component/navbar/navbar';
import SideContent from '../component/sideContent/sideCotent';
import style from './index.module.css';
import { Grid } from '@mui/material';
import CardPanels from '../component/card/card';
import Generation from '../component/generation/generation';
import Image from 'next/image';
import RightPanel from '../component/rightPanel/rightPanel';
import pic11 from '../public/assets/pic11.jpg';
export default function ImageEditing(){
    
    return(
    <>
     <div className={style.fullpage}>
      <Navbar/>
      <SideContent
      content={()=>(
        <>
        <Grid container>
                <Grid item xs={3}>
                  <CardPanels details={() => <Generation />} />
                </Grid>
                <Grid item xs={6}>
                  <div className={style.image_cont}>
                    <div className={style.side_image}>
                      <Image
                        src={pic11}
                        alt="GenPicture"
                        className={style.align_image}
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={3}>
                   <CardPanels details={()=><RightPanel />}/> 
                </Grid>
              </Grid>
        </>
      )}/>
     </div>
    </>
    )

}