import { Card, Grid } from '@mui/material';
import style from './sideContent.module.css';
import girl from '../../public/assets/aipic.jpg';
import Image from 'next/image';
import { useState } from 'react';

export default function SideContent(){
    const [selectedItem, setSelectedItem] = useState(0);
    const [selectedstyle,setSelectedstyle] = useState(0)
    const items = ['Basic', 'Advance', 'Control','Image'];
    const ta = ['Style','Models','Lora','Embedded','Texture','Inverse'];
    const tab =[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6]
    const handleItemClick = (e) => {
        setSelectedItem(e.target.value);
        // console.log(e.target.value);
      };

      const handleStyleClick= (e) => {
        setSelectedstyle(e.target.value);
        // console.log(e.target.value);
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
                      <div className={style.side_text_gen}>
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
                            <Grid item xs={6}>
                              <label>Enable</label>{" "}
                              <input
                                type="checkbox"
                                className={style.check_background}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <label>Pixel Perfect</label>{" "}
                              <input type="checkbox" />
                            </Grid>
                            <Grid item xs={6}>
                              <label>Allow Preview</label>{" "}
                              <input type="checkbox" />
                            </Grid>
                            <Grid item xs={6}>
                              {" "}
                              <label>Low Vram</label> <input type="checkbox" />
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
                        src={girl}
                        alt="GenPicture"
                        className={style.align_image}
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className={style.side_option}>
                    <div className="container-fluid">
                      <div className={style.side_text_gen}>
                        <div className={style.option_sty_list}>
                          <ul className={style.option_style_list}>
                             <Grid container>
                            {ta &&
                              ta.map((item, index) => (
                                <Grid xs={4} item key={index}>
                                  <li
                                    key={index}
                                    value={index}
                                    className={
                                      index === selectedstyle
                                        ? style.option_li_list_active
                                        : style.option_li_list
                                    }
                                    onClick={handleStyleClick}
                                  >
                                    {item}
                                  </li>
                                </Grid>
                              ))}
                            </Grid> 
                          </ul>
                        </div>
                        <div className={style.empty_cards}>
                          <Grid container columnGap={2}>
                            {tab &&
                              tab.map((item, index) => (
                                <Grid xs={3} key={index}>
                                  <Card className={style.card}>
                                    <p>{item}</p>
                                  </Card>
                                  <p>Desc</p>
                                </Grid>
                              ))}
                          </Grid>
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