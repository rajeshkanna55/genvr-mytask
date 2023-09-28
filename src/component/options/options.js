import { useMediaQuery } from "react-responsive";
import style from './options.module.css';
import { Grid } from "@mui/material";
import { useState } from "react";
import Navbar from "../navbar/navbar";
import GenOption from "../genOption/genOption";

export default function Options() {
    const [option,setOption] = useState(0);
  const media = useMediaQuery({ query: "(min-width: 1224px)" });
  return (
    <>
            <div className="container">
            <div className={style.search_option}>
                <select
                  name="sampling"
                  className={style.sampling_select_option}
                  onChange={(e) => {
                    setOption(e.target.value);
                  }}
                >
                  <option value={0}>Basic</option>
                  <option value={1}>Advanced</option>
                  <option value={2}>Control</option>
                  <option value={3}>Image</option>
                </select>
              </div>
              <div className={style.checkbox}>
                  <Grid container>
                    <Grid item xs={12}>
                      <GenOption
                        option={option}
                      />
                    </Grid>
                  </Grid>
                </div>
            </div>
    </>
  );
}