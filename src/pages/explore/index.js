import { Grid } from "@mui/material";
import Navbar from "../../component/navbar/navbar";
import style from './index.module.css';
import ExploreBaseModel, { exploreBaseModel } from "../../component/exploreBasemodel/exploreBasemodel";

export default function Explore(){
    return(
        <>
        <div className={style.fullpage_generation}>
          <Navbar 
        //   setOptionOpen={setOptionOpen} 
          />
           <Grid container spacing={3} style={{marginTop:'20px'}}>
             <ExploreBaseModel/>
           </Grid>
          </div>
        </>
    )
}