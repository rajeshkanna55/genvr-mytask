import { Divider, Grid } from "@mui/material";
import OptionBar from "../optionBar/optionBar";
import style from  './rightPanel.module.css';
import { useState } from "react";
export default function RightPanel(){
    const [selectedstyle,setSelectedstyle] = useState(0);

    const ta = ['Selected Items','Base Models','Lora','Styles','Artist Styles','Textual Inversion','Aesthetic Embeddings'];

    const handleStyleClick= (e) => {
        setSelectedstyle(e.target.value);
      };

    return(
        <>
        <div className="container-fluid">
                      <div className={style.side_text_gen2}>
                        <div className={style.option_sty_list}>
                          <ul className={style.option_style_list}>
                            <Grid container>
                              {ta &&
                                ta.map((item, index) => (
                                  <Grid item xs={index > 2 ? 3 : 4} key={index}>
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
                                      {item}
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
                            <Grid container columnGap={3} rowGap={2}>
                              <OptionBar pattern={selectedstyle} />
                            </Grid>
                          </div>
                        </div>
                      </div>
                    </div>
        </>
    )
} 