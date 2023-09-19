import { Accordion, AccordionDetails, AccordionSummary, Chip, Divider, Typography } from '@mui/material';
import style from './advanced.module.css'
export const Advanced = () => {
    
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
        <input
          type="range"
          min={0}
          max={1}
          defaultValue={0}
          className={style.advanced_range}
        />
        <div className={style.range_variation}>
          <label>
            Resize seed from width
            <span title="This is a hint or tooltip"></span>
          </label>
          <input type="text" className={style.input_range_variation} />
        </div>
        <input
          type="range"
          min={0}
          max={1}
          defaultValue={0}
          className={style.advanced_range}
        />
        <div className={style.range_variation}>
          <label>
            Resize seed from height
            <span title="This is a hint or tooltip"></span>
          </label>
          <input
            type="text"
            min={0}
            max={1}
            defaultValue={0}
            className={style.input_range_variation}
          />
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
        {/* <label>Image Embedders</label> */}
        {/* <Accordion sx={{ borderRadius: "5px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ height: "40px" }}
          >
            <Typography>Select Embeddings!</Typography>
          </AccordionSummary>
          <AccordionDetails>
           <p>This Is The Select Embedding Part</p>
          </AccordionDetails>
        </Accordion> */}
        <Divider sx={{backgroundColor:'black',height:'2px'}}/>
        <label ><strong>Aesthetic Embeddings Options</strong></label>
        <br></br>
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
          <input
            type="text"
            className={style.input_range_variation}
            defaultValue={0.9}
          />
        </div>
        <input
          type="range"
          min={0.0}
          max={1.0}
          defaultValue={0.9}
          className={style.advanced_range}
        />
        <div className={style.range_variation}>
          <label>
            Aesthetic Steps
            <span title="This is a hint or tooltip"></span>
          </label>
          <input
            type="text"
            className={style.input_range_variation}
            value={5}
          />
        </div>
        <input
          type="range"
          min={0}
          max={50}
          defaultValue={5}
          className={style.advanced_range}
        />
        <label>
          <strong>Learning Rate</strong>
        </label>
        <input type="text" className={style.variation_seed} defaultValue={0.0001} />
        <div className={style.range_variation}>
          <label>
            Slerp Angle
            <span title="This is a hint or tooltip"></span>
          </label>
          <input
            type="text"
            className={style.input_range_variation}
            defaultValue={0.1}
          />
        </div>
        <input
          type="range"
          min={0.0}
          max={1.0}
          defaultValue={0.1}
          className={style.advanced_range}
        />
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
      </div>
    </>
  );
}