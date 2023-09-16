import 'bootstrap/dist/css/bootstrap.min.css';
import style from './optionPage.module.css';
import { Grid } from '@mui/material';
import { select } from '../../public/constants/constans';
export default function OptionPage(){

  return (
    <>
      <div className={style.color}>
        <div className="container">
          <div className={style.option_div}>
            <div className={style.select_align}>
              <Grid container gap={{sm:2,md:3,lg:5}}>
                {select &&
                  Object.keys(select).map((data, index) => (
                    <Grid item key={index} xs={2}>
                      <select name={data} className={style.choose_option}>
                        <option value={data} disabled selected>
                          {data}
                        </option>
                        {select[data].map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </Grid>
                  ))}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}