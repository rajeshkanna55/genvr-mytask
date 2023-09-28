import { Card, Grid, Pagination, Tooltip } from "@mui/material"
import Image from "next/image"
import { lora } from "../../public/constants/constans"
import style from './styles.module.css'
import Loader from "../loader/loader"
import { useState } from "react"
import InfoIcon from '@mui/icons-material/Info';
import  MoreVertIcon from '@mui/icons-material/MoreVert';
import { Search } from "../search/search"
import { useMediaQuery } from "react-responsive"
export const Styles =() =>{
  const [loading, setLoading] = useState(true),
    [val, setVal] = useState();
    const media = useMediaQuery({ query: "(min-width: 1224px)" });
  const handleSelect=(index)=>{
    setVal(index);
   }
  setTimeout(()=>{
     setLoading(false);
  },4000)
    return (
      <>
        <Loader loading={loading} />
        <Search title='Style Search'/>
        {lora &&
          lora.map((item, index) => {
            return index < 15 ? (
              <Grid xs={4} sm={2} lg={3} item key={index}>
                <Card className={style.card_model}>
                  <div className={style.image_like}>
                    <Image
                      src={item?.image}
                      alt="styles"
                      className={style.tab_image_model}
                    />
                    <div className={style.like_button}  onClick={() => handleSelect(index)}>
                      <MoreVertIcon
                        sx={{
                          color: "white",
                          width: "20px",
                          height: "20px",
                          backgroundColor: "gray",
                          borderRadius: "50%",
                          cursor: 'pointer'
                        }}
                      />
                    </div>
                    {val === index ? (
                      <div className={style.chip_select}>
                        <button className={style.select_btn}>Select</button>
                      </div>
                    ) : null}
                  </div>
                  <p className="text-center" style={{ fontSize: "12px" }}>
                    <strong>{item?.name}</strong>
                  </p>
                </Card>
              </Grid>
            ) : null;
          })}
        <Pagination count={20} siblingCount={0} size={media ?'':'small'} />
      </>
    );
}
