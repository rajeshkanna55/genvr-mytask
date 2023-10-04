import { Card, Grid, Typography} from "@mui/material"
import style from './exploreArtistStyles.module.css';
import Image from "next/image";
import { categories, imageArtist } from "../../public/constants/constans";
import  MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";


export default function ExploreArtistStyles() {
    const [val,setVal] = useState(null);


    const handleSelect=(index)=>{
      setVal(index);
    }
    return (
      <>
        {/* <div className="container-fluid mx-1"> */}
            <div className={style.search_options}>
              <input
                type="search"
                placeholder="Search..."
                className={style.search_input}
              />
              <div className={style.artist_drop}>
              <select name="sampling" className={style.sampling_select_option}>
                <option value="Euler a" disabled selected>
                  Categaory
                </option>
                {categories &&
                  categories.map((items, index) => (
                    <option key={items} value={items}>
                      {items}
                    </option>
                  ))}
              </select>
               <select name="sampling" className={style.sampling_select_option}>
                <option value="Euler a" disabled selected>
                  SubCategaory
                </option>
                {categories &&
                  categories.map((items, index) => (
                    <option key={items} value={items}>
                      {items}
                    </option>
                  ))}
              </select>
              </div>
            </div>
       
        {/* </div> */}
        {imageArtist &&
          imageArtist.map((items, index) => {
           
            return (
              <Grid item lg={2} md={3} key={index}>
                <Card className={style.explore_card}>
                  <div className="container-fluid">
                    {items?.image && (
                      <div className={style.image_icons}>
                        <Image
                          src={items?.image}
                          alt={`${items?.name}`}
                          className={style.explore_image}
                        />
                        <div
                          className={style.like_button}
                          onClick={() => handleSelect(index)}
                        >
                          <MoreVertIcon
                            sx={{
                              color: "white",
                              width: "20px",
                              height: "20px",
                              backgroundColor: "gray",
                              borderRadius: "50%",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                        {val === index ? (
                          <div className={style.chip_select}>
                            <button className={style.select_btn}>Select</button>
                          </div>
                        ) : null}
                      </div>
                       )} 
                       <br></br>
                    <Typography
                      style={{ wordWrap: "break-word", fontSize: "13px",textAlign:'center' }}
                    >
                      <strong>{items?.name}</strong>
                    </Typography>
                  </div>
                </Card>
              </Grid>
            );
          })}
      </>
    );
}