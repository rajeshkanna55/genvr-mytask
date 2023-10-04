import { Grid } from "@mui/material";

import style from './index.module.css';
import Navbar from "../../../component/navbar/navbar";
import ExploreArtistStyles from "../../../component/exploreArtistStyles/exploreArtistStyles";
import Loader from "../../../component/loader/loader";
import { useEffect, useState } from "react";



export default function Explore(){
    const [loading,setLoading] = useState(true),
          [mounted,setMounted] = useState(false);
    setTimeout(()=>{
      setLoading(false);
   },4000)
   useEffect(()=>{
       setMounted(true);
   },[])
    return (
      <>
        {mounted && (
          <>
            <Loader loading={loading} />
            <div className={style.fullpage_generation}>
              <Navbar
              //   setOptionOpen={setOptionOpen}
              />
              <div className="container-fluid">
                <Grid container spacing={3} style={{ marginTop: "20px" }}>
                  <ExploreArtistStyles />
                </Grid>
              </div>
            </div>
          </>
        )}
      </>
    );
}