import Image from "next/image";     
import style from './mobileImage.module.css';
import Options from "../options/options";
import Model from "../models/models";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageList, imgData } from "../../public/constants/constans";
import Prompt from "../prompt/prompt";
import next from '../../public/assets/next.png';
import prev from '../../public/assets/prev.png';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
      <Image
        src={next}
        alt="next"
        className={className}
        style={{
          ...style,
          display: "block",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
  );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <Image
          src={prev}
          alt="next"
          className={className}
          style={{
            ...style,
            display: "block",
            borderRadius: "50%",
          }}
          onClick={onClick}
        />
    );
  }
const Mobile=({optionOpen})=>{
    

    const key = parseInt(optionOpen);
    const media = useMediaQuery({query:'(min-width: 1224px)'});
    const settings = {
        // dots: true,
        className: "center",
        infinite: true,
        centerPadding: "100px",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
      let showComponent;
      switch (key) {
        case 0:
          showComponent = (
            <>
              
                <div className="container-fluid mt-4">
                  <Slider {...settings} 
                  className={style.slick_slide}
                  >
                    {imgData &&
                      imgData.map((item, index) => (
                        < div key={index}>
                          <Image
                            src={item?.img}
                            alt="GenPicture"
                            className={style.align_image_slide}
                           
                          />
                        </div>
                      ))}
                  </Slider>
                  <Prompt/>
                </div>
            </>
          );
          break;
        case 1:
          showComponent = (<><Options/></>);
          break;
        case 2:
          showComponent = (<><Model/></>);
          break;
        default:
          showComponent = (
            <>
              <Slider {...settings}   className={style.slick_slide}>
                {imageList &&
                  imageList.map((img, index) => (
                    <>
                      <Image
                        src={img}
                        alt="GenPicture"
                        className={style.align_image_slide}
                      />
                    </>
                  ))}
              </Slider>
            </>
          );
      }
      return (
      <>{showComponent}</>
      );
  }
  
  export default Mobile;