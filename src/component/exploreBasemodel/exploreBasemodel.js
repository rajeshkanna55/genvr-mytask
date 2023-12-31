import { Card, CardActions, Chip, Grid, Tooltip, Typography} from "@mui/material"
import style from './exploreBasemodel.module.css';
import Image from "next/image";
import base from '../../public/data/base_models.json';
import { fixedColors, loraImg } from "../../public/constants/constans";
import  MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  customTooltip: {
    backgroundColor: "White",
    color: "black", 
  },
}));
export default function ExploreBaseModel () {
    const [val,setVal] = useState(null);
    const classes = useStyles();
    const data = base;
    const handleSelect=(index)=>{
      setVal(index);
    }
    return (
      <>
        {data &&
          data.map((items, index) => {
            var name= items?.name.split('.');
            return (
              <Grid item lg={2} md={3} key={index}>
                <Card className={style.explore_card}>
                  <div className="container-fluid">
                    {loraImg[index] && (
                      <div className={style.image_icons}>
                        <Image
                          src={loraImg[index].img}
                          alt={`BaseModel${name[0]}`}
                          className={style.explore_image}
                        />
                        <div
                          className={style.like_button}
                          onClick={()=>handleSelect(index)}
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
                     <div className={style.info_place}>
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
                                    backgroundColor:
                                      fixedColors[index]
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
                                    backgroundColor:
                                    fixedColors[index]
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
                    </div>
                      </div>
                    )}
                    <Typography
                      style={{ wordWrap: "break-word", fontSize: "13px" }}
                    >
                      <strong>{name[0]}</strong>
                    </Typography>
                    <Typography style={{fontSize: "14px"}}>{"Base Model" + items?.baseModel} </Typography>
                    <Grid container>
                      {items?.tags.map((data, index) => {
                        return 6 > index ? (
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
                    </Grid>
                  </div>
                </Card>
              </Grid>
            );})}
      </>
    );
}
