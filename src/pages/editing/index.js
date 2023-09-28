import { Grid } from "@mui/material";
import Navbar from "../../component/navbar/navbar";
import SideContent from "../../component/sideContent/sideCotent";
import CardPanels from "../../component/card/card";
import NextImage from "next/image";
import pic11 from '../../public/assets/digital_art.webp';
import style from './index.module.css';
import Mobile from "../../component/mobileImage/mobileImage";
import RightPanel from "../../component/rightPanel/rightPanel";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";
import Finetune from "../../component/finetune/finetune";
import Filters from "../../component/filters/filters";
import { filterObjects } from "../../public/constants/constans";
import  MoreVertIcon from '@mui/icons-material/MoreVert';
import DownloadIcon from '@mui/icons-material/Download';
import MobileFilter from "../../component/mobileFilter/mobileFilter";
import FilteredImage from "../../component/filteredImage/filteredImage";
import Image from "next/image";
export default function Editing(){
    const media = useMediaQuery({query:'(min-width: 1224px)'});
     const [selectedItem, setSelectedItem] = useState(0),
       [optionOpen, setOptionOpen] = useState(0),
       [contrast,setContrast]= useState(100),
       [saturate,setSaturate]= useState(100),
       [brightness,setBrightness]= useState(100),
       [picture,setPicture] = useState(pic11),
       [filter,setFilter] = useState(null);
      
    return (
      <>
        <div className={style.fullpage_generation}>
          <Navbar setOptionOpen={setOptionOpen} />
          <SideContent
            content={() => (
              <>
                <Grid container>
                  <Grid item xs={0} sm={0} md={0} lg={3}>
                    {media ? (
                      <CardPanels
                        details={() => (
                          <>
                            <Finetune
                              contrast={contrast}
                              setContrast={setContrast}
                              saturate={saturate}
                              setSaturate={setSaturate}
                              brightness={brightness}
                              setBrightness={setBrightness}
                            />
                            {/* <Filters picture={pic11} setFilter={setFilter} /> */}
                          </>
                        )}
                      />
                    ) : null}
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={8}>
                    {/* {media ? ( */}
                    <>
                      <div className={style.image_cont}>
                        <div className={media ? style.side_image : null}>
                          <Image
                              src={picture}
                              alt="GenPicture"
                              className={style.align_image}
                              style={{
                                filter: `contrast(${contrast}%) saturate(${saturate}%) brightness(${brightness}%)`,
                              }}
                            />
                        </div>
                      </div>
                        {/* <div className={style.image_cont}>
                          <div className={style.mobile_adjust}>
                            <FilteredImage picture={pic11} filter={filter} />
                          </div>
                        </div> */}
                    </>
                    {/* ) : (
                      <Mobile optionOpen={optionOpen} />
                    )} */}
                  </Grid>
                  {media ? null : (
                    <MobileFilter picture={pic11} setFilter={setFilter} />
                  )}
                  {/* <Grid item xs={0} sm={0} md={2} lg={3}>
                    {media ? (
                      <CardPanels details={() => <RightPanel />} />
                    ) : null}
                  </Grid> */}
                </Grid>
              </>
            )}
          />
        </div>
      </>
    );
}