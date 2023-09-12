import { Card, Grid } from "@mui/material"
import Image from "next/image"
import { lora } from "../../public/constants/constans"
import style from './lora.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export const Lora = () => {
    return (
      <>
        {lora &&
          lora.map((item, index) => (
            <Grid xs={3} item key={index}>
              <Card className={style.card_lora}>
                <div className={style.image_like}>
                <Image
                  src={item?.image}
                  alt="styles"
                  className={style.tab_image_lora}
                />
                <div className={style.like_button}>
                  <button className={style.like_button_place}><FavoriteBorderIcon sx={{color:'white'}}/></button>
                </div>
                </div>
                <div>
                  <p
                    className="text-center"
                    style={{ margin: "0", fontSize: "10px" }}
                  >
                    <strong>{item?.name}</strong>
                  </p>
                  <p style={{ fontSize: "11px", margin: "0" }}>
                    Base Model SD 1.5
                  </p>
                  <Grid container>
                    <Grid xs={6} item>
                      <div
                        className={style.chip_lora}
                        style={{ backgroundColor: "#FFF7DD" }}
                      >
                        Anime
                      </div>
                    </Grid>
                    <Grid xs={6} item>
                      <div
                        className={style.chip_lora}
                        style={{ backgroundColor: "#FACECE" }}
                      >
                        Anime
                      </div>
                    </Grid>
                    <Grid xs={6} item>
                      <div
                        className={style.chip_lora}
                        style={{ backgroundColor: "#C6C6C6" }}
                      >
                        Anime
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Card>
            </Grid>
          ))}
      </>
    );
}