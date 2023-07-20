import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider01 from '../assets/slide01.png';
import Slider02 from '../assets/slide02.png';
import Slider03 from '../assets/slide03.png';
import Slider04 from '../assets/slide04.png';
import './Home.css';



export default function Swipper() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  return (
    <>
   
<div className="row">
  <div className="col">
  <Carousel responsive={responsive}>
    <img src={Slider01} alt="slider1" className="img-fluid"/>
    <img src={Slider02} alt="slider2" className="img-fluid"/>
    <img src={Slider03} alt="slider3" className="img-fluid"/>
    <img src={Slider04} alt="slider4" className="img-fluid"/>
    <img src={Slider03} alt="slider3" className="img-fluid"/>
</Carousel>

  </div>
</div>


    </>
  );
}
