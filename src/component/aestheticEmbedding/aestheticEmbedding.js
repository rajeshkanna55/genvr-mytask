import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import style from './aestheticEmbedding.module.css';
export const Aesthetic=() => {
    return (
      <>
        <div className="container-fluid">
            <label>Image Embedders</label>
            <Accordion sx={{ borderRadius: "5px" }}>
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
        </Accordion>
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
        </div>
      </>
    );
}