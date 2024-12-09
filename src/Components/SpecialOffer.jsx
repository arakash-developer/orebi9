import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../Layers/ProductCard";

const SpecialOffer = () => {
  const [specialOffer, setSpecialOffer] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get("https://dummyjson.com/products");
      setSpecialOffer(response.data.products);
    };
    getData();
  }, []);

  return (
    <div
      id="Products"
      className="md:mt-12 mt-7 flex justify-between md:flex-nowrap flex-wrap gap-y-8 items-center"
    >
      {specialOffer
        .filter((item, index) => index > 25 && index <= 29)
        .map((item, index) => (
          <ProductCard
            key={index}
            src={item.thumbnail}
            productName={item.title}
            price={item.price}
            color={item.brand}
            tag={item.discountPercentage}
          />
        ))}
    </div>
  );
};

export default SpecialOffer;
