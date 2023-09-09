import 'bootstrap/dist/css/bootstrap.min.css';
import style from './optionPage.module.css';
import { Grid } from '@mui/material';
export default function OptionPage(){
    const generation = ['Text Based','Image Based','Controlled Generation','By reference','Variations'];
    const editing =['Free style paint','Image filters','Finetune','Resize and crop','Inpainting'];
    const extra=['Upscaling','Style transfer','Face swap','Relighting','Object removal','Foreground change','Background change','Product photography','Change by prompt','Click and change','T-shirt generator']
    const explore =['Base models','Loras','Textual Inversions','Styles','Artist styles','Aesthetic embeddings']
     const lora =['My models','Saved models','Publicly shared models'];
     const select = ['Generation','Editing','Extra','Explore','Lora Model Gallery'];
    return (
      <>
        <div className={style.color}>
          <div className="container-fluid">
            <div className={style.select_align}>
              <div className=" d-flex">
                <div className={style.option_placing}>
                  <div className={style.select}>
                    <select name="Generation" className={style.choose_option}>
                      <option value="" disabled selected>
                        Generation
                      </option>
                      {generation &&
                        generation.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className={style.option_placing}>
                  <div className={style.select}>
                    <select name="Editing" className={style.choose_option} >
                      <option value="" disabled selected >
                        Editing
                      </option>
                      {editing &&
                        editing.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className={style.option_placing}>
                  <div className={style.select}>
                    <select name="Extra" className={style.choose_option} defaultValue='Extra' >
                      <option value="Extra" disabled >
                        Extra
                      </option>
                      {extra &&
                        extra.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className={style.option_placing}>
                  <div className={style.select}>
                    <select name="Explore" className={style.choose_option}>
                      <option value="" disabled selected>
                        Explore
                      </option>
                      {explore &&
                        explore.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className={style.option_placing}>
                  <div className={style.select}>
                    <select
                      name="Lora Model gallery"
                      className={style.choose_option}
                    >
                      <option value="" disabled selected>
                        Lora Model Gallery
                      </option>
                      {lora &&
                        lora.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}