import { useMediaQuery } from "react-responsive";
import style from './models.module.css';
import { Grid } from "@mui/material";

import { useState } from "react";
import OptionBar from "../optionBar/optionBar";

export default function Model(){
  const [pattern,setPattern] = useState(0);
    const media = useMediaQuery({query:'(min-width: 1224px)'});
    return (
      <>
        <div className="container">
          <div className={style.search_option}>
            <select
              name="sampling"
              className={style.sampling_select_option}
              onChange={(e) => {
                setPattern(e.target.value);
              }}
            >
              <option value={0}>Selected Items</option>
              <option value={1}>Base Models</option>
              <option value={2}>Lora</option>
              <option value={3}>Styles</option>
              <option value={4}>Artist Styles</option>
              <option value={5}>Textual Inversion</option>
              <option value={6}>Aesthetic Embedding</option>
            </select>
          </div>
          <br></br>
          <div className={style.scrollbar_align}>
            <div className={style.empty_cards}>
              <Grid container columnGap={3} rowGap={2}>
                <OptionBar pattern={pattern} />
              </Grid>
            </div>
          </div>
        </div>
      </>
    );
} 