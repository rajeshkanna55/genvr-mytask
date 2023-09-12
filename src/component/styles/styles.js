import { Card, Grid } from "@mui/material"
import Image from "next/image"
import { lora } from "../../public/constants/constans"
import style from './styles.module.css'

export const Styles =() =>{
    return (
      <>
          {lora &&
            lora.map((item, index) => (
              <Grid xs={3} item key={index}>
                <Card className={style.card_model}>
                  <Image
                    src={item?.image}
                    alt="styles"
                    className={style.tab_image_model}
                  />
                  <p className='text-center'>{item?.name}</p>
                </Card>
              </Grid>
            ))}
      </>
    );
}