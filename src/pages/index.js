import { useEffect, useState } from 'react';
import Navbar from '../component/navbar/navbar';
import SideContent from '../component/sideContent/sideCotent';
import style from './index.module.css';
import { Box, Grid} from '@mui/material';
import CardPanels from '../component/card/card';
import Generation from '../component/generation/generation';
import Image from 'next/image';
import RightPanel from '../component/rightPanel/rightPanel';
import { useMediaQuery } from 'react-responsive';
import Mobile from '../component/mobileImage/mobileImage';
import { imgData } from '../public/constants/constans';
export default function ImageEditing(){
    const media = useMediaQuery({query:'(min-width: 1224px)'});
     const [selectedItem, setSelectedItem] = useState(0),
       [optionOpen, setOptionOpen] = useState(0);
       const handleItemClick = (e) => {
        setSelectedItem(e.target.value);
      };
    
    return (
      <>
        <div className={style.fullpage_generation}>
          <Navbar setOptionOpen={setOptionOpen} />
          <SideContent
            content={() => (
              <>
                <Grid container>
                  <Grid item xs={0} sm={0} md={2} lg={3}>
                    {media ? (
                      <CardPanels details={() => <Generation />} />
                    ) : null}
                  </Grid>
                  <Grid item xs={12} sm={12} md={9} lg={6}>
                    {media ? (
                      <>
                      {/* <Box sx={{display:}}> */}
                        <div className={style.image_cont}>
                          <div className={style.side_image}>
                            <div className={style.option_list}>
                              <ul className={style.option_ul_list}>
                                {imgData &&
                                  imgData.map((item, index) => (
                                    <li
                                      key={index}
                                      value={index}
                                      className={
                                        index === selectedItem
                                          ? style.option_li_list_active
                                          : style.option_li_list
                                      }
                                      onClick={handleItemClick}
                                    >
                                      {`Img${item?.id}`}
                                    </li>
                                  ))}
                              </ul>
                            </div>
                            <Image
                              src={imgData[selectedItem].img}
                              alt="GenPicture"
                              className={style.align_image}
                            />
                          </div>
                        </div>
                        {/* </Box> */}
                      </>
                    ) : (
                      <Mobile optionOpen={optionOpen} />
                    )}
                  </Grid>
                  <Grid item xs={0} sm={0} md={2} lg={3}>
                    {media ? (
                      <CardPanels details={() => <RightPanel />} />
                    ) : null}
                  </Grid>
                </Grid>
              </>
            )}
          />
        </div>
      </>
    );
}