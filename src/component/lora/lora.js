import { Card, ClickAwayListener, Grid, Pagination, Paper, Tooltip} from "@mui/material"
import Image from "next/image"
// import { lora } from "../../public/constants/constans"
import style from './lora.module.css';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import loraData from '../../public/data/loras.json';
import pic from '../../public/assets/aipic.jpg'
import { useState } from "react";
import Loader from "../loader/loader";
import AlertDialog from "../loraModel/loraModel";
import InfoIcon from '@mui/icons-material/Info';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Search } from "../search/search";
import { categories, fixedColors } from "../../public/constants/constans";
import Info from "../info/info";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  customTooltip: {
    backgroundColor: "White",
    color: "black", 
  },
}));

export const Lora = () => {
  const [loading, setLoading] = useState(true),
        [open, setOpen] = useState(false),
        [openTool, setOpenTool] = useState(false),
        [infoPop,setInfoPop] = useState(false),
        [val,setVal] = useState();
  const data = loraData;
  const classes = useStyles();
  const handleSelect=(index)=>{
    setVal(index);
   }
const handleInfo = (e) => {
  
  setInfoPop(true);
}
const handleCloseInfo = () => {
  setInfoPop(false);
}
  const handleClickOpen = (e) => {
    console.log(e); 
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  setTimeout(() => {
    setLoading(false);
  }, 4000);
  
  return (
    <>
      <Loader loading={loading} />
      <label>
          <strong>Lora Category</strong>
        </label>
        <select name="sampling" className={style.sampling_select_option}>
          <option value="Euler a" disabled selected>Categaory</option>
          {categories &&
          categories.map((items,index)=>(
            <option key={items} value={items}>{items}</option>
          ))}
        </select>
      <Search title='Lora Search'/>
      {data &&
        data.map((item, index) => {  
          var pro = item?.name?.split(".");
          return index < 15 ? (
            <Grid xs={3} item key={index}>
              <Card
                className={style.card_lora}
                onClick={handleClickOpen}
                sx={{ cursor: "pointer" }}
              >
                <div className={style.image_like}>
                  <Image
                    src={pic}
                    alt="styles"
                    className={style.tab_image_lora}
                  />
                  <div className={style.like_button}  onClick={() => handleSelect(index)} >
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
                  {val === index ? (
                      <div className={style.chip_select}>
                        <button className={style.select_btn}>Select</button>
                      </div>
                    ) : null}
                  {/* <ClickAwayListener onClickAway={true}> */}
                  <div className={style.info_place}
                  //  onClick={handleInfo}
                   >
                    <Tooltip
                      // PopperProps={{
                      //   disablePortal: true,
                      // }}
                      // onClose={handleCloseInfo}
                      // open={infoPop}
                      // disableFocusListener
                      // disableHoverListener
                      // disableTouchListener
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
                                className={style.chip_lora}
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
                                className={style.chip_lora}
                              >
                                {data}
                              </div>
                            ))}
                          </Grid>
                        </div>
                      }
                      classes={{ tooltip: classes.customTooltip }}
                      placement="left"
                    >
                      <InfoIcon className={style.info_button} />
                     
                    </Tooltip>
                  </div>
                  {/* </ClickAwayListener> */}
                  {/* <div className={style.info_card}>
                    <Info info={item}/>
                  </div> */}
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
                              fixedColors[subIndex]
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
        <Pagination count={20}  siblingCount={0}/>
      <AlertDialog open={open} handleClose={handleClose} />
    </>
  );
}