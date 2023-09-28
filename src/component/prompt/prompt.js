import style from './prompt.module.css';
import magic from '../../public/assets/magic.png'
import Image from 'next/image';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
export default function Prompt(){

    return (
      <>
        <div className="container">
          <div className={style.input_box}>
              <input className={style.input_prompt_mobile} placeholder='Describe your idea here...'/>
              <button className={style.prompt_button}><AutoFixHighIcon style={{color:'white',width:'30px',height:'30px'}}/></button>
          </div>
        </div>
      </>
    );
}