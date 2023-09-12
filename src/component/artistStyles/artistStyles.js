import { Card, CardContent, Grid, Paper, Stack } from '@mui/material';
import style from './artistStyles.module.css';
import Image from 'next/image';
import { lora } from '../../public/constants/constans';
import { useEffect, useState } from 'react';
import data from '../../public/data/artist_styles.json';

export const  ArtistStyle = () => {
     const [subValue,setSubValue] = useState('');
      
    return (
      <>
        <Grid item xs={12}>
          <Paper className={style.artist_style_heading}>
            <div>
              <label>Category</label>
              <br></br>
              <select
                name="control"
                className={style.no_artist}
                onChange={(e) => {
                  setSubValue(e.target.value);
                }}
              >
                <option value="" selected disabled>
                  category
                </option>
                {Object.keys(data).map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Sub Category</label>
              <br></br>
              <select name="control" className={style.no_artist}>
                <option value="" selected disabled>
                  Sub Category
                </option>
                {Object.keys(data).map((item, index) => {
                  return item === subValue
                    ? (data[item].map((val, subIndex) => (
                        <option key={subIndex} value={val}>
                          {val}
                        </option>
                      )))
                    : null;
                })}
              </select>
            </div>
          </Paper>
        </Grid>
        {lora &&
          lora.map((item, index) => (
            <Grid xs={3} item key={index}>
              <Card className={style.card_artist}>
                <Image
                  src={item?.image}
                  alt="styles"
                  className={style.card_artist_image}
                />
              <p className='text-center'> {item?.name}</p>
              </Card>
            </Grid>
          ))}
      </>
    );
}