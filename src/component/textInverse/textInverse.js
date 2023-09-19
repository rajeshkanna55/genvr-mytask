import { Card, Grid, Pagination, Tooltip } from "@mui/material"
import Image from "next/image"
import { categories, fixedColors, lora } from "../../public/constants/constans"
import style from './textInverse.module.css';
import pic from '../../public/assets/pic10.jpg';
import text from '../../public/data/textual_inversion.json';
import { useState } from "react";
import Loader from "../loader/loader";
import InfoIcon from '@mui/icons-material/Info';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Search } from "../search/search";
import { makeStyles } from "@mui/styles";

 const useStyles = makeStyles((theme) => ({
    customTooltip: {
      backgroundColor: "White",
      color: "black", 
    },
  }));
export const TextInverse = () => {
  const [loading,setLoading] = useState(true),
        [val,setVal] = useState();
  const data = text;
  setTimeout(()=>{
     setLoading(false);
  },4000);
   const handleSelect=(index)=>{
    setVal(index);
   }
  const classes = useStyles();
    return (
      <>
        <Loader loading={loading} />
        <label>
          <strong>TextInverse Category</strong>
        </label>
        <select name="sampling" className={style.sampling_select_option}>
          <option value="Euler a" disabled selected>Categaory</option>
          {categories &&
          categories.map((items,index)=>(
            <option key={items} value={items}>{items}</option>
          ))}
        </select>
        <Search title='TextInverse search'/>
        {data &&
          data.map((item, index) => {
            var pro = item?.name?.split('.');
            return index < 15 ? (
              <Grid xs={3} item key={index}>
                <Card className={style.card_inverse}>
                  <div className={style.image_like}>
                    <Image
                      src={pic}
                      alt="styles"
                      className={style.tab_image_inverse}
                    />
                    <div
                      className={style.like_button}
                      value={index}
                      onClick={() => handleSelect(index)}
                    >
                      <MoreVertIcon
                        sx={{
                          color: "white",
                          width: "20px",
                          height: "20px",
                          backgroundColor: "gray",
                          borderRadius: "50%",
                          cursor: "pointer"
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
                                    backgroundColor: fixedColors[index],
                                  }}
                                  className={style.chip_inverse}
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
                                  className={style.chip_inverse}
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
                    <p
                      className="text-center"
                      style={{ margin: "0", fontSize: "12px" }}
                    >
                      <strong>
                        {item?.name.length > 10
                          ? item?.name.slice(0, 10) + "..."
                          : item?.name}
                      </strong>
                    </p>
                    <p style={{ fontSize: "11px", margin: "0" }}>
                      Base Model {item?.baseModel}
                    </p>
                    <Grid container>
                      {item.tags.map((subItem, subIndex) =>
                        subIndex <= 3 ? (
                          <Grid xs={6} item key={subItem}>
                            <div
                              style={{
                                backgroundColor:
                                fixedColors[subIndex]
                              }}
                              className={style.chip_inverse}
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

