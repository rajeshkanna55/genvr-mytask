import { Card, Grid, Pagination, Tooltip } from "@mui/material"
import Image from "next/image"
import { lora } from "../../public/constants/constans"
import style from './styles.module.css'
import Loader from "../loader/loader"
import { useState } from "react"
import InfoIcon from '@mui/icons-material/Info';
import  MoreVertIcon from '@mui/icons-material/MoreVert';
export const Styles =() =>{
  const [loading,setLoading] = useState(true);
  setTimeout(()=>{
     setLoading(false);
  },4000)
    return (
      <>
        <Loader loading={loading} />
        {lora &&
          lora.map((item, index) => {
            var pro = item?.name?.split('.');
            return index < 15 ? (
              <Grid xs={3} item key={index}>
                <Card className={style.card_model}>
                  <div className={style.image_like}>
                    <Image
                      src={item?.image}
                      alt="styles"
                      className={style.tab_image_model}
                    />
                    <div className={style.like_button}>
                      <MoreVertIcon
                        sx={{
                          color: "white",
                          width: "20px",
                          height: "20px",
                          backgroundColor: "gray",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    {/* <div className={style.info_place}>
                      <Tooltip title={`name:${pro[0]}`}>
                        <InfoIcon className={style.info_button} />
                      </Tooltip>
                    </div> */}
                  </div>
                  <p className="text-center" style={{ fontSize: "12px" }}>
                    <strong>{item?.name}</strong>
                  </p>
                </Card>
              </Grid>
            ) : null;
          })}
        <Pagination count={20} siblingCount={0} />
      </>
    );
}
