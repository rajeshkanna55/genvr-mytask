import { useRef, useState } from 'react';
import style from './control.module.css';
import Image from 'next/image';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CloseIcon from '@mui/icons-material/Close';

export const Control=()=>{
    const [show, setShow] = useState(null),
          [selectedImage,setSelectedImage] = useState(null);
    const control = [
      "All",
      "Canny",
      "Depth",
      "Normal",
      "Depth",
      "OpenPose",
      "MLSD",
      "Lineart",
      "SoftEdge",
      "Scribble",
      "Seg",
      "Shuffle",
      "Tile",
      "Inpaint",
      "IP2P",
      "Reference",
      "T2lA"
    ];
    const imgRef = useRef();
   
    const handleFileDrop = (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if(file)
      {
        setSelectedImage(file);
        const imageDrag = URL.createObjectURL(file);
        setShow(imageDrag);
      }
      
    };
    const handleFile = (e) => {
      e.preventDefault();
      const file_show= e.target.files[0];
      if(file_show)
      {
        const imageUpload = URL.createObjectURL(file_show);
        setSelectedImage(file_show);
        setShow(imageUpload);
      }
    };
  const  handleDragOver= (e) =>{
        e.preventDefault();
  }
   
    return (
      <>
        <div className="container-fluid">
          <div className={style.control_models}>
            <label>No.of Control Models</label>
            <select name="control" className={style.no_of_control}>
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
            </select>
          </div>
          <select name="control" className={style.no_of_control_unit}>
            <option value="1">control Unit 0</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
          </select>

          <div
            onDrop={handleFileDrop}
            onDragOver={handleDragOver}
            className={style.file_upload}
          >
            {show ? (
              <>
                <Image src={show} alt="Image" width={190} height={180} className={style.curve_image_control}/>
                <div className={style.like_button_control}>
                  <button
                    className={style.like_button_place_control}
                    onClick={() => {
                      setSelectedImage(null);
                      setShow(null);
                    }}
                  >
                    <CloseIcon sx={{ color: "white" }} />
                  </button>
                </div>
              </>
            ) : (
              <>
                <input type="file" onChange={handleFile} ref={imgRef} hidden />
                <div
                  className="text-center"
                  onClick={() => imgRef.current.click()}
                  style={{ cursor: "pointer" }}
                >
                  <label>Drop files Here</label>
                  <br></br>
                  <FileUploadIcon sx={{ width: "40px", height: "40px" }} />
                </div>
              </>
            )}
          </div>
          <br></br>
          <div className={style.control_models}>
            <div>
              <label>Enable</label>&nbsp;
              <input type="checkbox" />
            </div>
            <div>
              <label>Pixel Perfect</label>&nbsp;
              <input type="checkbox" />
            </div>
          </div>
          <br></br>
          <div className={style.control_models}>
            <div>
              <label>Allow Preview</label>&nbsp;
              <input type="checkbox" />
            </div>
            <div>
              <label>Low Vram</label>&nbsp;
              <input type="checkbox" />
            </div>
          </div>
          <br></br>
          <label>Control Types</label>
          <select name="control" className={style.no_of_control_unit}>
         
           {control &&
            control.map((item)=>(
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
          <div className={style.control_models}>
            <div>
              <label>Preprocessor</label>
              <br></br>
              <select name="control" className={style.no_control}>
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
              </select>
            </div>
            <div>
              <label>Model</label>
              <br></br>
              <select name="control" className={style.no_control}>
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
              </select>
            </div>
          </div>
          <div className={style.range_variation}>
            <label>
              Control Weight
              <span title="This is a hint or tooltip"></span>
            </label>
            <input type="text" className={style.input_range_variation} />
          </div>
          <input type="range" className={style.advanced_range} />
          <div className={style.range_variation}>
            <label>
              Starting Control Step
              <span title="This is a hint or tooltip"></span>
            </label>
            <input type="text" className={style.input_range_variation} />
          </div>
          <input type="range" className={style.advanced_range} />
          <div className={style.range_variation}>
            <label>
              Ending Control Step
              <span title="This is a hint or tooltip"></span>
            </label>
            <input type="text" className={style.input_range_variation} />
          </div>
          <input type="range" className={style.advanced_range} />
          <div className={style.range_variation}>
            <label>
              Preprocessor Resolution
              <span title="This is a hint or tooltip"></span>
            </label>
            <input type="text" className={style.input_range_variation} />
          </div>
          <input type="range" className={style.advanced_range} />
          <br></br>
          <div className={style.control_models}>
            <div>
              <label>Control Mode</label>
              <br></br>
              <select name="control" className={style.no_control}>
                <option value="1">Balanced</option>
                <option value="1">My prompt</option>
                <option value="1">Controlnet</option>              
              </select>
            </div>
            <div>
              <label>Resize Mode</label>
              <br></br>
              <select name="control" className={style.no_control}>
                <option value="1">Just Resie</option>
                <option value="1">Crop and Resize</option>
                <option value="1">Resize and Fill</option>
              </select>
            </div>
          </div>
          <br></br>
          <div className={style.control_models}>
            <button className={style.button_control}>Reset</button>
            <button className={style.button_control}>Save</button>
          </div>
        </div>
      </>
    );
}