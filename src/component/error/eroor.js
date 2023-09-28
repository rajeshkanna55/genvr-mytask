import { Divider, Typography } from '@mui/material';
import style from './eroor.module.css';

export default function Eroor(){
    return(
        <>
          <div className={style.show_class}>
            <div className={style.show_div}>
              <div style={{fontSize:'100px',textShadow:'10px 10px 10px gray'}}>500</div>
              {/* <Divider sx={{width:"5px",backgroundColor:'black'}}/> */}
              <div style={{fontSize:'110px',textShadow:'10px 10px 10px gray'}}>Server Error</div>
            </div>
          </div>
        </>
    );

}
