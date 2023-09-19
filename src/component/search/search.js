import { Paper } from "@mui/material";
import style from './search.module.css';

export const Search = ({title})=>{
    return (
      <>
        <Paper sx={{width: '100%'}}>
          <label>
            <strong>{title}</strong>
          </label>
          <input
            type="text"
            className={style.variation_seed}
            placeholder="Search..."
          />
        </Paper>
      </>
    );
}