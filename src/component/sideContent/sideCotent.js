import { Card, Divider, Grid } from '@mui/material';
import style from './sideContent.module.css';
import aipic from '../../public/assets/aipic.jpg';
import girl from '../../public/assets/aipic.jpg';
import pic1 from '../../public/assets/pic1.jpg';
import pic2 from '../../public/assets/pic2.jpg';
import pic3 from '../../public/assets/pic3.jpg';
import pic4 from '../../public/assets/pic4.jpg';
import pic18 from '../../public/assets/pic18.jpg';
import Image from 'next/image';
import { useState } from 'react';
import { lora } from '../../public/constants/constans';
import GenOption from '../genOption/genOption';
import OptionBar from '../optionBar/optionBar';


export default function SideContent(){
    const [selectedItem, setSelectedItem] = useState(0),
          [selectedstyle,setSelectedstyle] = useState(0);
    const items = ['Basic', 'Advance', 'Control','Image'];
    const ta = ['Styles','Artist Styles', 'Aesthetic Embeddings','Textual Inversion','Lora','Base Models','Selected Items'];
       console.log(selectedstyle);
    const handleItemClick = (e) => {
        setSelectedItem(e.target.value);
      };

      const handleStyleClick= (e) => {
        setSelectedstyle(e.target.value);
      };
    return (
      <>
        <div className="container-fluid">
          <div className={style.side_content}>
            <div className={style.cont}>
              <Grid container>
                <Grid item xs={3}>
                  <div className={style.side_textgen}>
                    <div className="container-fluid">
                      <div className={style.side_text_gen1}>
                        <p>
                          <strong>Prompt</strong>
                        </p>
                        <p style={{ fontSize: "14px" }}>
                          What do you want to see? You can use a single word or
                          a full sentence.
                        </p>
                        {/* <input type='text' className={style.text_field} placeholder='Describe your idea...'/> */}
                        <textarea
                          className={style.text_field}
                          placeholder="Describe your idea..."
                        />
                        <div className={style.option_list}>
                          <ul className={style.option_ul_list}>
                            {items &&
                              items.map((item, index) => (
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
                                  {item}
                                </li>
                              ))}
                          </ul>
                        </div>
                        <div className={style.checkbox}>
                          <Grid container>
                            <Grid item xs={12}>
                              <GenOption
                                option={selectedItem}
                                // handlePattern={handlePattern}
                              />
                            </Grid>
                          </Grid>
                        </div>
                        <div className={style.button}>
                          <button className={style.button_field}>
                            Generate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className={style.image_cont}>
                    <div className={style.side_image}>
                      <Image
                        src={pic18}
                        alt="GenPicture"
                        className={style.align_image}
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className={style.side_option}>
                    <div className="container-fluid">
                      <div className={style.side_text_gen2}>
                          <div className={style.option_sty_list}>
                            <ul className={style.option_style_list}>
                              <Grid container>
                                {ta &&
                                  ta.map((item, index) => (
                                    <Grid item xs={4} key={index}>
                                      <li
                                        key={index}
                                        value={index}
                                        className={
                                          index === selectedstyle
                                            ? style.option_li_list_active_right
                                            : style.option_li_list_right
                                        }
                                        onClick={handleStyleClick}
                                      >
                                        {/* <div className={style.right_list}> */}
                                        {item}
                                        {/* </div> */}
                                      </li>
                                      <Divider
                                        sx={{
                                          backgroundColor: "gray",
                                          marginTop: "10px",
                                        }}
                                      />
                                    </Grid>
                                  ))}
                              </Grid>
                            </ul>
                          </div>
                        <div className={style.scrollbar_align}>
                          <div className={style.empty_cards}>
                              <Grid container 
                              columnGap={3} 
                              rowGap={2}>
                               <OptionBar pattern={selectedstyle}/>
                              </Grid>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </>
    );
}