import { useState } from "react";
import Loader from "../loader/loader";
import style from './selectedItems.module.css';
import { lora } from "../../public/constants/constans";
import { Card, Grid, Tooltip } from "@mui/material";
import Image from "next/image";
import InfoIcon from '@mui/icons-material/Info';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import base from '../../public/assets/pic19.png';
import baseData from '../../public/data/base_models.json';
import lorapic from '../../public/assets/aipic.jpg';
import artistpic from '../../public/assets/pic9.jpg';
import loraData from '../../public/data/loras.json';
export default function SelectedItems(){
    const [loading,setLoading] = useState(true);
     setTimeout(()=>{
        setLoading(false);
     },4000)
    return (
      <>
        <Loader loading={loading} />
        <div className="container-fluid">
          <h4>Base Models</h4>
          <div className={style.Selected_item}>
            {baseData &&
              baseData.map((item, index) => {
                return index < 1 ? (
                  <Grid item key={index}>
                    <Card className={style.card_inverse}>
                      <div className={style.image_like}>
                        <Image
                          src={base}
                          alt="styles"
                          className={style.tab_image_inverse}
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
                          <Tooltip
                            title={`downloadUrl:${
                              item?.downloadUrl
                            }.TrainedWords:${item?.trainedWords.map(
                              (item) => item
                            )}.BaseModel:${
                              item?.baseModel
                            }.Tags:${item?.tags.map((item) => item)}`}
                            placement="left"
                          >
                            <InfoIcon className={style.info_button} />
                          </Tooltip>
                        </div>
                      </div>
                      <div>
                        <p style={{ margin: "0", fontSize: "12px" }}>
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
                                  className={style.chip_inverse}
                                >
                                  {subItem.length > 7
                                    ? subItem.slice(0, 10) + "..."
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
          </div>
          <h4>Loras</h4>
          <div className={style.Selected_item}>
            {loraData &&
              loraData.map((item, index) => {
                var pro = item?.name?.split('.');
                return index < 5 ? (
                  <Grid item key={index}>
                    <Card
                      className={style.card_lora}
                      // onClick={handleClickOpen}
                      sx={{ cursor: "pointer" }}
                    >
                      <div className={style.image_like}>
                        <Image
                          src={lorapic}
                          alt="styles"
                          className={style.tab_image_lora}
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
                          <Tooltip
                            title={`downloadUrl:${
                              item?.downloadUrl
                            }.TrainedWords:${item?.trainedWords.map(
                              (item) => item
                            )}.BaseModel:${
                              item?.baseModel
                            }.Tags:${item?.tags.map((item) => item)}`}
                            placement="left"
                          >
                            <InfoIcon className={style.info_button} />
                          </Tooltip>
                        </div>
                      </div>
                      <div>
                        <p
                          className="text-center"
                          style={{ margin: "0", fontSize: "10px" }}
                        >
                          <strong>
                            {pro[0].length > 10
                              ? pro[0].slice(0, 10) + "..."
                              : pro[0]}
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
                                  className={style.chip_lora}
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
          </div>
          <h4>Styles</h4>
          <div className={style.Selected_item_style}>
            {lora &&
              lora.map((item, index) => (
                <Grid item key={index}>
                  <Card className={style.card_model} key={index}>
                  <div className={style.image_like}>
                    <Image
                      src={item?.image}
                      alt="styles"
                      className={style.tab_image_model}
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
                    {/* <div className={style.info_place}>
                      <Tooltip title={`name:${pro[0]}`}>
                        <InfoIcon className={style.info_button} />
                      </Tooltip>
                    </div> */}
                  </div>
                    <p className="text-center" style={{ fontSize: "12px" }}>
                      <strong>{item?.name}</strong>
                    </p>
                  </Card>
                </Grid>
              ))}
          </div>
          <h4>Artist Styles</h4>
          <div className={style.Selected_item_style}>
            {lora &&
              lora.map((item, index) => (
                <Grid item key={index}>
                  <Card className={style.card_model} key={index}>
                    <div className={style.image_like}>
                    <Image
                      src={artistpic}
                      alt="styles"
                      className={style.card_artist_image}
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
                    {/* <div className={style.info_place}>
                    <Tooltip title={`downloadUrl:${item?.downloadUrl}.TrainedWords:${item?.trainedWords.map((item)=>item)}.BaseModel:${item?.baseModel}.Tags:${item?.tags.map((item)=>item)}`} placement='left'>
                        <InfoIcon className={style.info_button} />
                      </Tooltip>
                    </div> */}
                  </div>
                    <p className="text-center" style={{ fontSize: "12px" }}>
                      <strong>{item?.name}</strong>
                    </p>
                  </Card>
                </Grid>
              ))}
          </div>
          <h4>Textual Inversion</h4>
          <div className={style.Selected_item}>
            {lora &&
              lora.map((item, index) => (
                <Grid item key={index}>
                  <Card className={style.card_model} key={index}>
                    <Image
                      src={item?.image}
                      alt="styles"
                      className={style.tab_image_model}
                    />
                    <p className="text-center" style={{ fontSize: "12px" }}>
                      <strong>{item?.name}</strong>
                    </p>
                  </Card>
                </Grid>
              ))}
          </div>
          <h4>Aesthetic Embeddings</h4>
          <div className={style.Selected_item}>
            {lora &&
              lora.map((item, index) => (
                <Grid item key={index}>
                  <Card className={style.card_model} key={index}>
                    <Image
                      src={item?.image}
                      alt="styles"
                      className={style.tab_image_model}
                    />
                    <p className="text-center" style={{ fontSize: "12px" }}>
                      <strong>{item?.name}</strong>
                    </p>
                  </Card>
                </Grid>
              ))}
          </div>
        </div>
      </>
    );
}
