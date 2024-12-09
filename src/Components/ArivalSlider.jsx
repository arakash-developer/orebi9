import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ProductCard from "../Layers/ProductCard";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import axios from "axios";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="md:w-[65px] md:h-[65px] w-[40px] h-[40px] md:top-[153px] md:left-5 top-[70px] left-1 items-center justify-center"
      style={{
        ...style,
        display: "flex",
        background: "#00000033",
        cursor: "pointer",
        borderRadius: "50%",
        position: "absolute",
        zIndex: "111",
      }}
      onClick={onClick}
    >
      <FaLongArrowAltLeft className="text-white md:text-xl text-sm" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="md:w-[65px] md:h-[65px] w-[40px] h-[40px] md:top-[153px] md:right-5 top-[70px] right-1 items-center justify-center"
      style={{
        ...style,
        display: "flex",
        background: "#00000033",
        cursor: "pointer",
        borderRadius: "50%",
        position: "absolute",
        zIndex: "111",
      }}
      onClick={onClick}
    >
      <FaLongArrowAltRight className="text-white md:text-xl text-sm" />
    </div>
  );
}

function ArivalSlider({ className }) {
  const settings = {
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://dummyjson.com/products");
      setAllProducts(response.data.products);
    };
    getData();
  }, []);

  return (
    <div className={`slider-container w-full ${className}`}>
      <Slider {...settings}>
        {allProducts.map((item, index) => (
          <div key={index}>
            <ProductCard
              className="w-full md:w-full md:px-5 px-1"
              src={item.thumbnail}
              productName={item.title}
              price={item.price}
              color={item.brand}
              tag={item.discountPercentage}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ArivalSlider;
