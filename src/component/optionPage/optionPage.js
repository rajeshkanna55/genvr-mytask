import 'bootstrap/dist/css/bootstrap.min.css';
import style from './optionPage.module.css';
import { Grid } from '@mui/material';
import { select } from '../../public/constants/constans';
import { useRouter } from 'next/router';
export default function OptionPage({setOptionPage}){
  const router = useRouter();
  const handlePage = (e) => {
      var page = e.target.value;
      var index = e.target.selectedIndex;

      if(  page === "Text Based" || page === "Image Based" || page === "Controlled Generation" || page === "By reference" || page === "Variations")
      {
        router.push('/');
      }
      else if(page === 'Free style paint' || page === 'Image filters' || page === 'Finetune' || page === 'Resize and crop' || page === 'Inpainting')
      {
        router.push('/editing');
      }
      else if(page === "Upscaling" || page === "Style transfer" || page === "Face swap" || page ===  "Relighting" || page === "Object removal" || page ===  "Foreground change" || page === "Background change" || page ===  "Product photography" || page === "Change by prompt" ||  page === "Click and change" || page === "T-shirt generator")
      {
        alert('Extra Page'+' '+ e.target.selectedIndex);
      }
      else if(page === "Base models" || page === "Loras" || page === "Textual Inversions" || page === "Styles" || page === "Artist styles" || page === "Aesthetic embeddings" )
      {
        let comb = page.split(' ');
        let text = '';
       comb.forEach((item) => (text += item));
        let path = text.toLowerCase();
        router.push(`/explore/${path}`);
      }
      else
      {
        alert('Lora model Page' + " " + e.target.selectedIndex)
      }
  } 

  return (
    <>
      <div className={style.color}>
        <div className="container-fluid">
          {/* <div className={style.option_div}> */}
            <div className={style.select_align}>
              <Grid container gap={{sm:2,md:3,lg:5}}>
                {select &&
                  Object.keys(select).map((data, index) => (
                    <Grid item key={index} xs={2}>
                      <select name={data} className={style.choose_option} onChange={handlePage}>
                        <option value={data} disabled selected>
                          {data}
                        </option>
                        {select[data].map((option,index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </Grid>
                  ))}
              </Grid>
            </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}