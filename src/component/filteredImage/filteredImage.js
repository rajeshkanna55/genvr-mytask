import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { filterObjects } from "../../public/constants/constans";
import  MoreVertIcon from '@mui/icons-material/MoreVert';
import DownloadIcon from '@mui/icons-material/Download';
import style from './filteredImage.module.css';
export default function FilteredImage({picture,filter}){
    const media = useMediaQuery({query:'(min-width: 1224px)'});
     const [openFilter,setOpenFilter] = useState(false);
    const canvasRef = useRef(null);
    useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        const image = new Image();
        image.src = `http://localhost:3000${picture.src}`; 
           image.onload = () => {
            ctx.drawImage(image, 0, 0,image.width,image.height);
            const ImgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            let newImgData = pixelsJS.filterImgData(ImgData, filter === null ? ' ' : filterObjects[filter].filter);
            ctx.putImageData(ImgData, 0, 0);
           }
       },[picture,filter]);
    const handleDownload = () => {
        const canvas = canvasRef.current;
        const canvasDataUrl = canvas.toDataURL();
        const downloadLink = document.createElement('a');
        downloadLink.href = canvasDataUrl;
        downloadLink.download = 'canvas_image.png'; 
        downloadLink.click();
      };
    return (
      <>
        <div style={{ position: "relative" }}>
          <canvas
            ref={canvasRef}
            width={picture.width}
            height={picture.height}
            style={{
              display: "block",
              margin: "auto",
              width: "auto",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: "8px",
            }}
          ></canvas>
          <div
            className={style.download_option}
            onClick={() => setOpenFilter(!openFilter)}
          >
            <MoreVertIcon
              sx={{
                color: "black",
                width: "25px",
                height: "25px",
                backgroundColor: "white",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
            {openFilter ? (
              <div className={style.chip_select}>
                <div style={{ width: "100px" }}>
                  <p
                    style={{
                      backgroundColor: "white",
                      cursor: "pointer",
                    }}
                    onClick={handleDownload}
                  >
                    Downoad
                    <DownloadIcon />
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </>
    );
}