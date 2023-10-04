import { Card, Grid, Tooltip, Typography} from "@mui/material"
import style from './exploreStyles.module.css';
import Image from "next/image";
import loraData from '../../public/data/loras.json';
import { categories, combinedArray, fixedColors, greekGods, imageList, loraImg } from "../../public/constants/constans";
import  MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import { makeStyles } from "@mui/styles";
import { lora } from "../../public/constants/constans";
const useStyles = makeStyles((theme) => ({
  customTooltip: {
    backgroundColor: "White",
    color: "black", 
  },
}));
export default function ExploreStyles() {
    const [val,setVal] = useState(null);
    const classes = useStyles();
    const data = loraData;
    const handleSelect=(index)=>{
      setVal(index);
    }
    return (
      <>
        <div className="container-fluid mx-4">
          {/* <div className="container-fluid"> */} 
            <div className={style.search_options}>
              <input
                type="search"
                placeholder="Search..."
                className={style.search_input}
              />
              {/* <select name="sampling" className={style.sampling_select_option}>
                <option value="Euler a" disabled selected>
                  Categaory
                </option>
                {categories &&
                  categories.map((items, index) => (
                    <option key={items} value={items}>
                      {items}
                    </option>
                  ))}
              </select> */}
            </div>
          {/* </div> */}
        </div>
        {combinedArray &&
          combinedArray.map((items, index) => {
            // var name = items?.split(".");
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
                        {/* <div className={style.info_place}>
                          <Tooltip
                            classes={{ tooltip: classes.customTooltip }}
                            title={
                              <div>
                                <p style={{ margin: "0" }}>
                                  <strong>name :</strong>
                                  {name[0]}
                                </p>
                                <p style={{ margin: "0" }}>
                                  <strong>downloadurl:</strong>
                                  {" " + items?.downloadUrl}
                                </p>
                                <p style={{ margin: "0" }}>
                                  <strong>Base Model :</strong>
                                  {items?.baseModel}
                                </p>
                                <p style={{ margin: "0" }}>
                                  <strong>Tags :</strong>
                                </p>
                                <Grid container>
                                  {items?.tags.map((data, index) => (
                                    <div
                                      key={index}
                                      style={{
                                        backgroundColor: fixedColors[index],
                                      }}
                                      className={style.chip_embedd}
                                    >
                                      {data}
                                    </div>
                                  ))}
                                </Grid>
                                <p style={{ margin: "0" }}>
                                  <strong>TrainedWords :</strong>
                                </p>
                                <Grid container>
                                  {items?.trainedWords.map((data, index) => (
                                    <div
                                      key={index}
                                      style={{
                                        backgroundColor: fixedColors[index],
                                      }}
                                      className={style.chip_embedd}
                                    >
                                      {data}
                                    </div>
                                  ))}
                                </Grid>
                              </div>
                            }
                            placement="left"
                          >
                            <InfoIcon className={style.info_button} />
                          </Tooltip>
                        </div> */}
                      </div>
                       )} 
                       <br></br>
                    <Typography
                      style={{ wordWrap: "break-word", fontSize: "13px",textAlign:'center' }}
                    >
                      <strong>{items?.name}</strong>
                    </Typography>
                    {/* <Typography style={{ fontSize: "14px" }}>
                      {"Base Model" + items?.baseModel}{" "}
                    </Typography> */}
                    {/* <Grid container>
                      {items?.tags.map((data, index) => {
                        return 4 > index ? (
                          <div
                            key={index}
                            style={{
                              backgroundColor: fixedColors[index],
                            }}
                            className={style.chip_embedd}
                          >
                            {data}
                          </div>
                        ) : null;
                      })}
                    </Grid> */}
                  </div>
                </Card>
              </Grid>
            );
          })}
      </>
    );
}