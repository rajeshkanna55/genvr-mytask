import { Grid } from "@mui/material";
import GenOption from "../genOption/genOption";
import style from './generation.module.css';
import { useState } from "react";


export default function Generation(){
    const [selectedItem, setSelectedItem] = useState(0);
    const items = ['Basic', 'Advance', 'Control','Image'];
    const handleItemClick = (e) => {
        setSelectedItem(e.target.value);
      };
    return (
      <>
       
            <div className="container-fluid">
              <div className={style.side_text_gen1}>
                <p>
                  <strong>Prompt</strong>
                </p>
                <p style={{ fontSize: "14px" }}>
                  What do you want to see? You can use a single word or a full
                  sentence.
                </p>
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
                  <button className={style.button_field}>Generate</button>
                </div>
              </div>
            </div>
      </>
    );
}