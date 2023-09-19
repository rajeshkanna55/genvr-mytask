import { Accordion, AccordionDetails, AccordionSummary, Card, Grid, Pagination, Tooltip, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import style from './aestheticEmbedding.module.css';
import embedd from '../../public/data/embeddings.json';
import pic from '../../public/assets/pic16.png';
import Image from "next/image";
import Loader from "../loader/loader";
import { useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import  MoreVertIcon from '@mui/icons-material/MoreVert';
import { Search } from "../search/search";
import { makeStyles } from "@mui/styles";
import { fixedColors } from "../../public/constants/constans";

 const useStyles = makeStyles((theme) => ({
    customTooltip: {
      backgroundColor: "White",
      color: "black", 
    },
  }));
export const Aesthetic=() => {
  const [loading,setLoading] = useState(true),
        [val,setVal] = useState();
        const handleSelect=(index)=>{
          setVal(index);
        }
  const data = embedd;
   setTimeout(()=>{
      setLoading(false);
   },4000);
   const classes = useStyles();
   
    return (
      <>
        <Loader loading={loading} />
        <Search title="AestheticEmbbedding Search" />
        {data &&
          data.map((item, index) => {
            var pro = item?.name.split(".");
            return index < 15 ? (
              <Grid xs={3} item key={index}>
                <Card className={style.card_embedd}>
                  <div className={style.image_like}>
                    <Image
                      src={pic}
                      alt="styles"
                      className={style.tab_image_embedd}
                    />
                    <div className={style.like_button} onClick={()=>handleSelect(index)}>
                      <MoreVertIcon
                        sx={{
                          color: "white",
                          width: "20px",
                          height: "20px",
                          backgroundColor: "gray",
                          borderRadius: "50%",
                          cursor:'pointer',
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
                              {pro[0]}
                            </p>
                            <p style={{ margin: "0" }}>
                              <strong>downloadurl:</strong>
                              {" " + item?.downloadUrl}
                            </p>
                            <p style={{ margin: "0" }}>
                              <strong>Base Model :</strong>
                              {item?.baseModel}
                            </p>
                            <p style={{ margin: "0" }}>
                              <strong>Tags :</strong>
                            </p>
                            <Grid container>
                              {item?.tags.map((data, index) => (
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
                              {item?.trainedWords.map((data, index) => (
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
                  <div>
                    <p style={{ margin: "0", fontSize: "10px" }}>
                      <strong>
                        {item?.name.length > 15
                          ? item?.name.slice(0, 15) + "..."
                          : item?.name}
                      </strong>
                    </p>
                    <p style={{ fontSize: "11px", margin: "0" }}>
                      Base Model {item?.baseModel}
                    </p>
                    <Grid container>
                      {item?.tags.map((subItem, subIndex) =>
                        subIndex <= 3 ? (
                          <Grid xs={6} item key={subItem}>
                            <div
                              style={{
                                backgroundColor:
                                fixedColors[subIndex]
                              }}
                              className={style.chip_embedd}
                            >
                              {subItem.length > 7
                                ? subItem.slice(0, 7) + "..."
                                : subItem}
                            </div>
                          </Grid>
                        ) : null
                      )}
                    </Grid>
                  </div>
                </Card>
              </Grid>
            ) : null;
          })}
        <Pagination count={20} siblingCount={0} />
      </>
    );
}