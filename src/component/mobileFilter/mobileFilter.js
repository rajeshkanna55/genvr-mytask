import React, { useEffect, useRef, useState } from 'react';
import style from './mobileFilter.module.css';
import { filterObjects } from '../../public/constants/constans';
import { Grid } from '@mui/material';
export default function MobileFilter({picture,setFilter}){
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
          setFilterImg(index);
          setFilter(index);
      }
      
    return (
      <>
        <div className="container-fluid">
          <div className={style.filter_align}>
            <div className="container-fluid">
              <div className={style.filter_inner_style}>
                {filters &&
                  filters.map((filter, index) => (
                    <Grid key={index} item>
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
                              filterImg === index
                                ? "0px 0px 10px 10px gray"
                                : "",
                                cursor:'pointer'
                          }}
                          onClick={() => handleFilter(index)}
                        ></canvas>
                        <p style={{ fontSize: "13px", margin: "0", wordWrap: 'break-word' }}>
                          {filter?.filter}
                        </p>
                      </div>
                    </Grid>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}