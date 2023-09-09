import { Accordion, AccordionDetails, AccordionSummary, Chip, Typography } from '@mui/material';
import style from './advanced.module.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export const Advanced = () => {
    const handleChip=()=>{

    }
  return (
    <>
      <div className="container-fluid">
        <label>
          <strong>Sampling Method</strong>
        </label>
        <select name="sampling" className={style.sampling_select_option}>
          <option value="Euler a">Euler a</option>
          <option value="option 1">option 1</option>
          <option value="option 2">option 2</option>
          <option value="option 3">option 3</option>
        </select>
        <label>
          <strong>Variation Seed</strong>
        </label>
        <input type="text" className={style.variation_seed} />
        <div className={style.range_variation}>
          <label>
            Variation Strength <span title="This is a hint or tooltip"></span>
          </label>
          <input type="text" className={style.input_range_variation} />
        </div>
        <input type="range" className={style.advanced_range} />
        <div className={style.range_variation}>
          <label>
            Resize seed from width
            <span title="This is a hint or tooltip"></span>
          </label>
          <input type="text" className={style.input_range_variation} />
        </div>
        <input type="range" className={style.advanced_range} />
        <div className={style.range_variation}>
          <label>
            Resize seed from height
            <span title="This is a hint or tooltip"></span>
          </label>
          <input type="text" className={style.input_range_variation} />
        </div>
        <input type="range" className={style.advanced_range} />
        {/* <Accordion sx={{ borderRadius: "5px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ height: "40px" }}
          >
            <Typography>Aesthetic Embeddings!</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <label>Aesthetic Text For Imgs</label>
            <textarea
              className={style.text_field_aesthetic}
              placeholder="For roatation of feature space of the imgs embs"
            />
            <div className={style.range_variation}>
              <label>
                Aesthetic Weight
                <span title="This is a hint or tooltip"></span>
              </label>
              <input type="text" className={style.input_range_variation} />
            </div>
            <input type="range" className={style.advanced_range} />
            <div className={style.range_variation}>
              <label>
                Aesthetic Steps
                <span title="This is a hint or tooltip"></span>
              </label>
              <input type="text" className={style.input_range_variation} />
            </div>
            <input type="range" className={style.advanced_range} />
            <label>
              <strong>Learning Rate</strong>
            </label>
            <input type="text" className={style.variation_seed} />
            <div className={style.range_variation}>
              <label>
                Slerp Angle
                <span title="This is a hint or tooltip"></span>
              </label>
              <input type="text" className={style.input_range_variation} />
            </div>
            <input type="range" className={style.advanced_range} />
            <div className={style.range_variation}>
              <div className="d-flex">
                <label style={{ fontSize: "13px", padding: "3px" }}>
                  slerp interpolation
                </label>
                <input type="checkbox" />
              </div>
              <div className="d-flex">
                <label style={{ fontSize: "13px", padding: "3px" }}>
                  Is Negative Text
                </label>
                <input type="checkbox" />
              </div>
            </div>
            <div className={style.range_variation}>
              <button className={style.button_aesthetic}>Reset</button>
              <button className={style.button_aesthetic}>Save</button>
            </div>
          </AccordionDetails>
        </Accordion> */}
        {/* <div className={style.range_variation}>
          <Chip label="Textual version" onClick={handleChip} />
          <Chip label="Lora" onClick={handleChip} />
        </div> */}
        <div className={style.range_variation}>
          <button className={style.button_aesthetic}>Reset</button>
          <button className={style.button_aesthetic}>Save</button>
        </div>
      </div>
    </>
  );
}