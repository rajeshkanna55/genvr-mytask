import { useRef, useState } from 'react';
import style from './control.module.css';
import Image from 'next/image';
import FileUploadIcon from '@mui/icons-material/FileUpload';
export const Control=()=>{
    const [selectedFile, setSelectedFile] = useState(null),
          [selectedImage,setSelectedImage] = useState(null);
    const imgRef = useRef();
    console.log(selectedFile);
    const handleFileDrop = (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      if (selectedFile) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setSelectedImage(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    };
    const handleDragOver = (e) => {
      e.preventDefault();
    };
   
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
            {selectedFile ? (
              <div>
                {/* <Image
                  src={selectedImage}
                  alt="Image"
                  width={80}
                  height={80}
                /> */}
                <h1>{selectedFile.name}</h1>
              </div>
            ) : (
              <>
                <input
                  type="file"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                  ref={imgRef}
                  hidden
                />
                <div
                  className="text-center"
                  onClick={() => imgRef.current.click()}
                  style={{ cursor: "pointer" }}
                >
                  <p>Drop files Here</p>
                  <dr></dr>
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
            <option value="1">All</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
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
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
              </select>
            </div>
            <div>
              <label>Resize Mode</label>
              <br></br>
              <select name="control" className={style.no_control}>
                <option value="1">Crop and Resize</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
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