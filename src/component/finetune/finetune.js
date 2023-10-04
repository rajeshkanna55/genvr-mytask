import { Tooltip } from '@mui/material';
import style from './finetune.module.css';

export default function Finetune({contrast,setContrast,saturate,setSaturate,brightness,setBrightness}){
   const handleContrast = (e) => {
       setContrast(e.target.value)   
   }
    return (
      <>
        <div className="container-fluid">
           <label><strong>FineTune</strong></label>
          <div className={style.filter_option} style={{marginTop:'10px'}}>
            <label>Contrast</label>
            <br></br>
            <Tooltip title={contrast/2} >
            <input
              type="range"
              min={0}
              max={200}
              value={contrast}
              className={style.advanced_range}
              onChange={handleContrast}
            />
           </Tooltip> 
          </div>
          <div className={style.filter_option}>
            <label>Saturate</label>
            <br></br>
            <Tooltip title={saturate/2} >
            <input
              type="range"
              min={0}
              max={200}
              value={saturate}
              className={style.advanced_range}
              onChange={(e)=>setSaturate(e.target.value)}
            />
            </Tooltip>
          </div>
          <div className={style.filter_option}>
            <label>Brightness</label>
            <br></br>
            <Tooltip title={brightness/2} >
            <input
              type="range"
              min={0}
              max={200}
              value={brightness}
              className={style.advanced_range}
              onChange={(e)=>setBrightness(e.target.value)}
            />
            </Tooltip>
          </div>
        </div>
      </>
    );
}