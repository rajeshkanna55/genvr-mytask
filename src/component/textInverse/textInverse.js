import { Card, CardActions, Chip, Grid, Stack } from "@mui/material"
import Image from "next/image"
import { lora } from "../../public/constants/constans"
import style from './textInverse.module.css';
export const TextInverse = () => {
      
    return (
      <>
        {lora &&
          lora.map((item, index) => (
            <Grid xs={3} item key={index}>
              <Card className={style.card_inverse}>
                <Image
                  src={item?.image}
                  alt="styles"
                  className={style.tab_image_inverse}
                />

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
                      <div className={style.chip_inverse} style={{backgroundColor:'#FFF7DD'}}>Anime</div>
                    </Grid>
                    <Grid xs={6} item>
                      <div className={style.chip_inverse} style={{backgroundColor:'#FACECE'}}>Anime</div>
                    </Grid>
                    <Grid xs={6} item>
                      <div className={style.chip_inverse} style={{backgroundColor:'#C6C6C6'}}>Anime</div>
                    </Grid>
                  </Grid>
                </div>
              </Card>
            </Grid>
          ))}
      </>
    );
}