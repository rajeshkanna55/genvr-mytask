import { Grid } from "@mui/material";
import style from './index.module.css';
import Navbar from "../../../component/navbar/navbar";
import ExploreBaseModel from "../../../component/exploreBasemodel/exploreBasemodel";
import { useState } from "react";
import Loader from "../../../component/loader/loader";


export default function Explore(){
  const [loading,setLoading] = useState(true);
  setTimeout(()=>{
    setLoading(false);
 },4000)
    return (
      <>
      <Loader loading={loading}/>
        <div className={style.fullpage_generation}>
          <Navbar
          //   setOptionOpen={setOptionOpen}
          />
          <div className="container-fluid">
            <Grid container spacing={3} style={{ marginTop: "20px" }}>
              <ExploreBaseModel />
            </Grid>
          </div>
        </div>
      </>
    );
}