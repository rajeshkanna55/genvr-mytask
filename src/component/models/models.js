import { Card, Grid } from "@mui/material"
import Image from "next/image"
import { lora } from "../../public/constants/constans"
import style from './models.module.css'

export const Models =() =>{
    return(
        <>
          <Grid container columnGap={2}>
                              {lora &&
                                lora.map((item, index) => (
                                  <Grid xs={3} item key={index}>
                                    <Card className={style.card_model}>
                                      <Image
                                        src={item?.image}
                                        alt="styles"
                                        className={style.tab_image_model}
                                      />
                                    </Card>
                                    <p>{item?.id}</p>
                                  </Grid>
                  ))}
        </Grid>
        </>
    )
}