import { Card, CardContent, Grid, Pagination, Paper, Stack, Tooltip } from '@mui/material';
import style from './artistStyles.module.css';
import Image from 'next/image';
import { lora } from '../../public/constants/constans';
import { useEffect, useState } from 'react';
import artist from '../../public/data/artist_styles.json';
import Loader from '../loader/loader';
import pic from '../../public/assets/pic9.jpg';
import InfoIcon from '@mui/icons-material/Info';
import  MoreVertIcon from '@mui/icons-material/MoreVert';
import { Search } from '../search/search';

export const  ArtistStyle = () => {
     const [subValue,setSubValue] = useState(''),
           [loading,setLoading] = useState(true),
           [data,setData] = useState(artist),
           [seckey,setSeckey] = useState(''), 
           [val,setVal] = useState();
         
      // const handleFirst = (e) => {
      //    var one = e.target.value; 
      //    setSubValue(one);
      //    for(let key in data)
      //    {
      //       if(key === one)
      //       {
      //           for(let subkey in data[one])
      //           {
      //             if(isNaN(subkey))
      //             {
      //               console.log(subkey)
      //             }
      //             else{
      //                  console.log(data[one]);
      //                  break;
      //             }
      //           }
      //       }
      //    }
      // }
      const handleSelect=(index)=>{
        setVal(index);
       }
       const handleDrag = (e) => {
          console.log('clicked');
       }   
     setTimeout(()=>{
        setLoading(false);
     },4000)
    return (
      <>
        <Loader loading={loading} />
        <Grid item xs={12}>
          <Paper className={style.artist_style_heading}>
            <div>
              <label style={{ fontSize: "14px" }}>Category</label>
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
                  <option key={index} style={{ fontSize: "14px" }} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label style={{ fontSize: "14px" }}>Sub Category</label>
              <br></br>
              <select
                name="control"
                className={style.no_artist}
                onChange={(e) => {
                  setSeckey(e.target.value);
                }}
              >
                <option value="" selected disabled>
                  Sub Category
                </option>
                {Object.keys(data).map((item, index) => {
                  return item === subValue
                    ? Object.keys(data[item]).map((val, subIndex) =>
                        isNaN(val) ? (
                          <option
                            style={{ fontSize: "14px" }}
                            key={subIndex}
                            value={val}
                            onClick={handleDrag}
                          >
                            {val}
                          </option>
                        ) : null
                      )
                    : null;
                })}
              </select>
            </div>
          </Paper>
          <Paper>
            <label>
              <strong>Search ArtistStyle</strong>
            </label>
            <input
              type="text"
              className={style.variation_seed}
              placeholder="Search..."
            />
          </Paper>
        </Grid>
        {lora &&
          lora.map((item, index) => {
            var pro = item?.name?.split('.');
            return index < 15 ? (
              <Grid xs={3} item key={index}>
                <Card className={style.card_artist}>
                  <div className={style.image_like}>
                    <Image
                      src={pic}
                      alt="styles"
                      className={style.card_artist_image}
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
                    {/* <div className={style.info_place}>
                    <Tooltip title={`downloadUrl:${item?.downloadUrl}.TrainedWords:${item?.trainedWords.map((item)=>item)}.BaseModel:${item?.baseModel}.Tags:${item?.tags.map((item)=>item)}`} placement='left'>
                        <InfoIcon className={style.info_button} />
                      </Tooltip>
                    </div> */}
                  </div>
                  <p className="text-center" style={{ fontSize: "12px" }}>
                    <strong>{item?.name}</strong>{" "}
                  </p>
                </Card>
              </Grid>
            ) : null;
          })}
           <Pagination count={20} siblingCount={0} />
      </>
    );
}

