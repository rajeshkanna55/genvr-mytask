import { Dialog, DialogActions, DialogTitle } from "@mui/material";




export default function Info({info,infoPop,handleCloseInfo}){
    return(
      <div>
      <Dialog
        open={infoPop}
        onClose={handleCloseInfo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ textAlign: "center" }}>
          {"Add zerotwo_offset Model"}
        </DialogTitle>
        {/* <DialogContent> */}
        <div className="container">
          <div className={style.model_lora}>
            <label>Positve</label>
            <input type="checkbox" />
          </div>
          <br></br>
          <div className={style.model_lora}>
            <label>Negative</label>
            <input type="checkbox" />
          </div>
          <br></br>
          <div className={style.model_lora}>
            <label>Strength</label>
            <input type="text" className={style.input_seed_field} />
          </div>
        </div>
        {/* </DialogContent> */}
        <DialogActions>
          <button className={style.button_aesthetic} onClick={handleClose}>
            Cancel
          </button>
          <button className={style.button_aesthetic} onClick={handleClose}>
            Select
          </button>
        </DialogActions>
      </Dialog>
    </div>
    )
}