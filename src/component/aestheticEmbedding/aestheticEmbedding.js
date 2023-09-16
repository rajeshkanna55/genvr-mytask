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
export const Aesthetic=() => {
  const [loading,setLoading] = useState(true);
  const data = embedd;
   setTimeout(()=>{
      setLoading(false);
   },4000)
    return (
      <>
        <Loader loading={loading} />
        {data &&
          data.map((item, index) => {
            var pro = item?.name?.split('.');
          return index < 15 ? (
            <Grid xs={3} item key={index}>
              <Card className={style.card_embedd}>
                <div className={style.image_like}>
                  <Image
                    src={pic}
                    alt="styles"
                    className={style.tab_image_embedd}
                  />
                  <div className={style.like_button}>
                    <MoreVertIcon
                      sx={{
                        color: "white",
                        width: "20px",
                          height: "20px",
                        backgroundColor: "gray",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <div className={style.info_place}>
                  <Tooltip title={`downloadUrl:${item?.downloadUrl}.TrainedWords:${item?.trainedWords.map((item)=>item)}.BaseModel:${item?.baseModel}.Tags:${item?.tags.map((item)=>item)}`} placement='left'>
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
                                subIndex === 0
                                  ? "#EDE5FF"
                                  : subIndex === 1
                                  ? "#FBFFD5"
                                  : subIndex === 2
                                  ? "#EAFFF4"
                                  : subIndex === 3
                                  ? "#A7D6D7"
                                  : null,
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