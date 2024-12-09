import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import introBanner from '/Home Images/IntroBanner.png'
import { useNavigate } from 'react-router-dom';

const IntroBanner = () => {

    let [active, setActive] = useState(0)
    let navigate = useNavigate()

    var settings = {
        arrows:false,
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 500,
            settings: {
              appendDots: dots => (
                <div
                  style={{
                    position: "absolute",
                    bottom: "10%",
                    transform: "translateX(-50%)",
                    left: "50%"
                  }}
                >
                  <ul className='flex items-center justify-center' style={{ margin: "0px" }}> {dots} </ul>
                </div>
              ),
            customPaging: i => (
                <div className={`text-[6px] border-b-2 flex items-center justify-center ${ i == active ? "border-[#262626] text-[#262626]" : "text-transparent border-transparent"}`}
                  style={{
                    width: "20px",
                    height: "14px",
                  }}
                >
                  0{i + 1}
                </div>
              ),
            },
            breakpoint: 1020,
            settings: {
              appendDots: dots => (
                <div
                  style={{
                    position: "absolute",
                    bottom: "10%",
                    transform: "translateX(-50%)",
                    left: "50%"
                  }}
                >
                  <ul className='flex items-center justify-center' style={{ margin: "0px" }}> {dots} </ul>
                </div>
              ),
            customPaging: i => (
                <div className={`text-[8px] border-b-2 flex items-center justify-center ${ i == active ? "border-[#262626] text-[#262626]" : "text-transparent border-transparent"}`}
                  style={{
                    width: "20px",
                    height: "14px",
                  }}
                >
                  0{i + 1}
                </div>
              ),
            },
          },
        ],
        beforeChange: (item, index)=>{
            setActive(index)
        },
        appendDots: dots => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "10%"
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
        customPaging: i => (
            <div className={`text-[10px] border-r-2 flex items-center ${ i == active ? "border-[#262626] text-[#262626]" : "text-transparent border-transparent"}`}
              style={{
                width: "20px",
                height: "30px",
              }}
            >
              0{i + 1}
            </div>
          ),
    };
  return (
    <div>
        <Slider {...settings}>
            <div>
                <img onClick={()=> navigate('/about')} className='w-full' src={introBanner} alt="" />
            </div>
            <div>
                <img onClick={()=> navigate('/about')} className='w-full' src={introBanner} alt="" />
            </div>
            <div>
                <img onClick={()=> navigate('/about')} className='w-full' src={introBanner} alt="" />
            </div>
            <div>
                <img onClick={()=> navigate('/about')} className='w-full' src={introBanner} alt="" />
            </div>
        </Slider>
    </div>
  )
}

export default IntroBanner