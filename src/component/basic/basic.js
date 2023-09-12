
import style from './basic.module.css';
import { Chip, Slider } from '@mui/material';
import { useState } from 'react';
export const Basic=({handlePattern})=>{
  const [height,setHeight] = useState(512),
        [width,setWidth] = useState(512),
        [images,setImages] =useState(1),
        [sampStep,setSampStep] =useState(1),
        [cfg,setCfg] = useState(7),
        [pattern,setPattern] = useState(0);
  
        const handleChip=(pat)=>{
             setPattern(pat);
             handlePattern(pat);
            }
    return (
      <>
        <div className="container-fluid">
          <label>Negative Prompt</label>
          <textarea
            className={style.text_field_negative}
            placeholder="Describe your idea..."
          />
          <div className={style.range_align}>
            <label>Height</label>
            <input
              type="text"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
              }}
              className={style.input_range_field}
            />
          </div>
          <input
            type="range"
            min="0"
            max="1024"
            step="128"
            value={height}
            className={style.input_range}
            onChange={(e) => {
              setHeight(e.target.value);
            }}
          />
          <div className={style.range_align}>
            <label>Width</label>
            <input
              type="text"
              className={style.input_range_field}
              value={width}
              onChange={(e) => {
                setWidth(e.target.value);
              }}
            />
          </div>
          <input
            type="range"
            min="0"
            max="1024"
            step="128"
            value={width}
            className={style.input_range}
            onChange={(e) => {
              setWidth(e.target.value);
            }}
          />
          <div className={style.range_align}>
            <label>CFG Scale</label>
            <input
              type="text"
              className={style.input_range_field}
              value={images}
              onChange={(e) => {
                setImages(e.target.value);
              }}
            />
          </div>
          <input
            type="range"
            min="1"
            max="10"
            value={images}
            className={style.input_range}
            onChange={(e) => {
              setImages(e.target.value);
            }}
          />
          <div className={style.range_align}>
            <label>Sampling Steps</label>
            <input
              type="text"
              className={style.input_range_field}
              value={sampStep}
              onChange={(e) => {
                setSampStep(e.target.value);
              }}
            />
          </div>
          <input
            type="range"
            min="1"
            max="150"
            value={sampStep}
            className={style.input_range}
            onChange={(e) => {
              setSampStep(e.target.value);
            }}
          />
          <div className={style.range_align}>
            <label>No.of Images</label>
            <input
              type="text"
              className={style.input_range_field}
              value={cfg}
              onChange={(e) => {
                setCfg(e.target.value);
              }}
            />
          </div>
          <input
            type="range"
            min="0"
            max="30"
            value={cfg}
            className={style.input_range}
            onChange={(e) => {
              setCfg(e.target.value);
            }}
          />
          <div className={style.range_align}>
            <label>Seed</label>
            <input
              type="text"
              className={style.input_seed_field}
              defaultValue="-1"
            />
          </div>
          <br />
          <div>
            <select
              name="resize"
              id="resize"
              className={style.select_field_resize}
            >
              <option disabled selected>
                Resize And fill
              </option>
              <option>vertical</option>
              <option>Horizontal</option>
              <option>Align</option>
            </select>
          </div>
          <br></br>
          {/* <div className={style.range_align}>
            <Chip label='Models'  onClick={()=>handleChip(1)}/>
            <Chip label='Styles' onClick={()=>handleChip(2)}/>
            <Chip label='Artistic Styles' onClick={()=>handleChip(3)}/>
          </div> */}
          <div className={style.range_align}>
            <button className={style.button_basic}>Reset</button>
            <button className={style.button_basic}>Save</button>
          </div>
        </div>
      </>
    );
}