import FileUploadIcon from '@mui/icons-material/FileUpload';
import style from './imageBar.module.css';
import { useRef, useState } from 'react';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
export const ImageBar = () => {
    const [selectedImage, setSelectedImage] = useState(null),
          [show,setShow] = useState(null),
          [denoise,setDenoise] = useState(0.75);
    const imgRef = useRef();
    const handleFileDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        console.log(file);
        if(file)
        {
          setSelectedImage(file);
          const imageDrag = URL.createObjectURL(file);
          setShow(imageDrag);
          console.log(imageDrag);
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
          <label>Add Image</label>
          <div
            onDrop={handleFileDrop}
            onDragOver={handleDragOver}
            className={style.file_upload_image}
          >
            {show ? (
              <>
                
                  <Image
                    src={show}
                    alt="Image"
                    width={190}
                    height={180}
                    className={style.curve_image}
                  />
                
                <div className={style.like_button} >
                  <button className={style.like_button_place} onClick={()=>{
                    setSelectedImage(null);
                    setShow(null)}}>
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
                  <p>Drop files Here</p>
                  <br></br>
                  <FileUploadIcon sx={{ width: "40px", height: "40px" }} />
                </div>
              </>
            )}
          </div>
          <div className={style.image_models}>
            <label>Denoising Strength</label>
            <input
              type="text"
              value={denoise}
              onChange={(e) => {
                setDenoise(e.target.value);
              }}
              className={style.input_range_field_image}
            />
          </div>
          <input
            type="range"
            min={0.0}
            max={1.0}
            step={0.25}
            value={denoise}
            className={style.input_range_image}
            onChange={(e) => {
              setDenoise(e.target.value);
            }}
          />
          <div className={style.image_models}>
            <button className={style.button_image}>Reset</button>
            <button className={style.button_image}>Save</button>
          </div>
        </div>
      </>
    );
}