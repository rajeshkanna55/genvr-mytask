import { Grid } from "@mui/material";
import { filterObjects } from "../../public/constants/constans"
import style from './filters.module.css';
import React, { useEffect, useRef, useState } from "react";


export default function Filters({picture,setFilter}){
    const [filterImg,setFilterImg] = useState(null);
    const filters = filterObjects;
    const canvasRefs = useRef(filterObjects.map(() => React.createRef()))
  
    useEffect(()=>{
      canvasRefs.current.forEach((canvasRef,index) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        const image = new Image();
           image.src = `http://localhost:3000${picture.src}`; 
           image.onload = () => {
            ctx.drawImage(image, 0, 0,80,80);
            const ImgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            let newImgData = pixelsJS.filterImgData(ImgData, filterObjects[index].filter);
            ctx.putImageData(ImgData, 0, 0);
           }
      });
    },[picture]);
    const handleFilter =(index) =>
    {
        setFilter(index);
        setFilterImg(index);
    }
    return (
      <>
        <div className="container-fluid">
          <label>
            <strong>Filters</strong>
          </label>
          <br></br>
          <div className={style.filter_class}>
            <Grid container spacing={1}>
              {filters &&
                filters.map((filter, index) => (
                  <Grid key={index} item xs={4}>
                    {/*  */}
                    <div className={style.image_filters}>
                      {/* <Image
                        src={picture}
                        //   alt='image'
                        alt={filter?.filter}
                        className={style.filter_image_category}
                        // onLoad={handleImageLoad}
                      />
                        <p style={{ fontSize: "13px" }}>{filter?.filter}</p> */}
                      <canvas
                        ref={canvasRefs.current[index]}
                        width={80}
                        height={80}
                        style={{
                          borderRadius: "8px",
                          boxShadow:
                            filterImg === index ? "0px 0px 15px 5px gray" : "",
                        }}
                        onClick={() => handleFilter(index)}
                      ></canvas>
                    </div>
                    <p style={{ fontSize: "13px",margi:'0' }}>{filter?.filter}</p>
                  </Grid>
                ))}
            </Grid>
          </div>
        </div>
      </>
    );
}