import React from "react";
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import './Slider.scss';
import { useState } from "react";

function Slider() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.unsplash.com/photo-1619171208124-8f48db33d893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1630694892076-e3b924bbe017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    "https://images.unsplash.com/flagged/photo-1568988041298-26931e97a28e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide-1);
  } 
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide+1);
  }

  return (
    <div className="slider">
      <div className="container" style={{transform: `translateX(-${currentSlide*100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestRoundedIcon/>
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastRoundedIcon/>
        </div>
      </div>
    </div>
  );
}

export default Slider;
