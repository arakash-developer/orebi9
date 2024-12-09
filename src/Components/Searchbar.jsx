import React, { useEffect, useState } from "react";
import Container from "../Layers/Container";
import { MdOutlineShortText } from "react-icons/md";
import { FaCartPlus, FaHeart, FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Lib from "../Layers/Lib";
import { Link } from "react-router-dom";
import { HiPlusSm } from "react-icons/hi";
import axios from "axios";

const Searchbar = () => {
  let [show, setShow] = useState(false);
  let [user, setUser] = useState(false);
  let [cart, setCart] = useState(false);

  let [search, setSearch] = useState("");
  let [allProducts, setAllProducts] = useState([]);
  let [filterSearch, setFilterSearch] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://dummyjson.com/products");
      setAllProducts(response.data.products);
    };
    getData();
  }, []);

  let manageSearch = (element) => {
    let userInput = element.target.value;
    setSearch(userInput);
  };

  useEffect(() => {
    if (search === "") {
      setFilterSearch("");
    } else {
      const filteredData = allProducts.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilterSearch(filteredData);
    }
  }, [allProducts, search]);

  return (
    <section className="search_bar bg-[#F5F5F3] relative z-10">
      <Container className="flex justify-between items-center md:py-[25px] p-2 md:px-0 relative">
        <div
          onClick={() => setShow(!show)}
          className="category flex gap-[10px] items-center hover:cursor-pointer"
        >
          <MdOutlineShortText className="md:text-lg text-xl" />
          <span className="md:block hidden text-sm text-[#262626] font-normal">
            Shop by Category
          </span>
          <div
            className={`dropdown absolute top-full translate-y-[-18px] md:left-0 left-[11px] transition-all duration-300 z-40 ${show ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
          >
            <ul className="bg-[#262626] md:w-[263px] w-[170px] relative">
              <Lib value="Accesories" className="group relative md:static">
                <div className="absolute md:top-0 md:left-full top-full left-0 bg-[#FFF] md:px-10 md:pb-8 md:pt-7 p-1 md:h-[317px] flex md:flex-nowrap flex-wrap items-start md:gap-[50px] gap-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-50">
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Phones
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 7
                    </li>
                  </ul>
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Computers
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 7
                    </li>
                  </ul>
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Smart watches
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 7
                    </li>
                  </ul>
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Cameras
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 7
                    </li>
                  </ul>
                </div>
              </Lib>
              <Lib value="Furniture" className="group relative md:static">
                <div className="absolute md:top-0 md:left-full top-full left-0 bg-[#FFF] md:px-10 md:pb-8 md:pt-7 p-1 md:h-[317px] flex md:flex-nowrap flex-wrap items-start md:gap-[50px] gap-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-50">
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Phones
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 7
                    </li>
                  </ul>
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Computers
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 7
                    </li>
                  </ul>
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Smart watches
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 7
                    </li>
                  </ul>
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Cameras
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 7
                    </li>
                  </ul>
                </div>
              </Lib>
              <Lib value="Electronics" className="group relative md:static">
                <div className="absolute md:top-0 md:left-full top-full left-0 bg-[#FFF] md:px-10 md:pb-8 md:pt-7 p-1 md:h-[317px] flex md:flex-nowrap flex-wrap items-start md:gap-[50px] gap-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-50">
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Phones
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 7
                    </li>
                  </ul>
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Computers
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 7
                    </li>
                  </ul>
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Smart watches
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 7
                    </li>
                  </ul>
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Cameras
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 7
                    </li>
                  </ul>
                </div>
              </Lib>
              <Lib value="Clothes" className="group relative md:static">
                <div className="absolute md:top-0 md:left-full top-full left-0 bg-[#FFF] md:px-10 md:pb-8 md:pt-7 p-1 md:h-[317px] flex md:flex-nowrap flex-wrap items-start md:gap-[50px] gap-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-50">
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Phones
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 7
                    </li>
                  </ul>
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Computers
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 7
                    </li>
                  </ul>
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Smart watches
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 7
                    </li>
                  </ul>
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Cameras
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 7
                    </li>
                  </ul>
                </div>
              </Lib>
              <Lib value="Bags" className="group relative md:static">
                <div className="absolute md:top-0 md:left-full top-full left-0 bg-[#FFF] md:px-10 md:pb-8 md:pt-7 p-1 md:h-[317px] flex md:flex-nowrap flex-wrap items-start md:gap-[50px] gap-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-50">
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Phones
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 7
                    </li>
                  </ul>
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Computers
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 7
                    </li>
                  </ul>
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Smart watches
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 7
                    </li>
                  </ul>
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Cameras
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 7
                    </li>
                  </ul>
                </div>
              </Lib>
              <Lib value="Home Appliances" className="group relative md:static">
                <div className="absolute md:top-0 md:left-full top-full left-0 bg-[#FFF] md:px-10 md:pb-8 md:pt-7 p-1 md:h-[317px] flex md:flex-nowrap flex-wrap items-start md:gap-[50px] gap-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-50">
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Phones
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Phone 7
                    </li>
                  </ul>
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Computers
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Computer 7
                    </li>
                  </ul>
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Smart watches
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Smart watch 7
                    </li>
                  </ul>
                  <ul className="whitespace-nowrap flex flex-col md:gap-3 gap-[6px]">
                    <h3 className="md:text-base text-sm text-[#262626] md:font-bold font-medium md:mb-2 mb-1">
                      Cameras
                    </h3>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 1
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 2
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 3
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 4
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 5
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 6
                    </li>
                    <li className="md:text-sm text-xs text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300">
                      Camera 7
                    </li>
                  </ul>
                </div>
              </Lib>
            </ul>
          </div>
        </div>
        <div className="search md:w-[601px] w-[250px] relative">
          <input
            value={search}
            onChange={manageSearch}
            type="text"
            placeholder="Search Products"
            className="w-full md:py-4 md:px-[21px] p-2 text-sm text-[#262626] placeholder:text-[#C4C4C4] placeholder:font-normal font-medium outline-none"
          />
          <FaSearch className="absolute top-1/2 -translate-y-1/2 md:right-[21px] right-2 md:text-[15px] text-xs text-[#262626] hover:cursor-pointer" />
          <div className="absolute top-full left-0 w-full overflow-y-auto md:h-[432px] h-[241px]">
            {filterSearch && (
              <ul>
                {filterSearch.map((item, index) => (
                  <li>
                    <div className="flex items-start bg-[#F5F5F3] border border-[#ffffff]">
                      <div className="image md:w-36 md:h-[150px] w-24 h-20 bg-[#FFF]">
                        <img
                          src={item.thumbnail}
                          alt=""
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="texts md:p-3 p-1">
                        <h3 className="md:text-xl text-xs md:font-semibold font-medium ">
                          {item.title}
                        </h3>
                        <p className="md:text-lg text-xs text-[#807f7f] my-1">
                          {item.brand}
                        </p>
                        <p className="md:text-base text-xs text-[#807f7f] mt-auto">
                          ${item.price}
                        </p>
                        <div className="md:flex hidden mt-[9px] gap-4">
                          <div className="flex items-center border py-1 px-3 text-sm gap-2 cursor-pointer duration-300 hover:border-[#262626]">
                            <span>
                              Add to Wishlist
                            </span>
                            <FaHeart />
                          </div>
                          <div className="flex items-center border py-1 px-3 text-sm gap-2 cursor-pointer duration-300 hover:border-[#262626]">
                            <span>
                              Add to Cart
                            </span>
                            <FaCartPlus />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="cart-login flex items-center md:gap-x-10 gap-x-2 text-[#262626]">
          <div
            onClick={() => setUser(!user)}
            className="user flex items-center hover:cursor-pointer md:text-base text-xs relative"
          >
            <FaUser />
            <IoMdArrowDropdown className="md:text-xl" />
            <div
              className={`absolute top-full translate-y-4 right-0 bg-[#2B2B2B] md:w-[200px] w-[100px] text-center flex flex-col md:border border-[#F0F0F0] transition-all duration-300 ${user ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            >
              <div className="md:text-sm text-xs text-[#FFF] md:font-bold font-medium md:py-4 py-2 transition-all duration-300 hover:bg-[#FFF] hover:text-[#262626] hover:font-normal border-b border-[#2D2D2D]">
                <Link to="/login">My Account</Link>
              </div>
              <div className="md:text-sm text-xs text-[#FFF] md:font-bold font-medium md:py-4 py-2 transition-all duration-300 hover:bg-[#FFF] hover:text-[#262626] hover:font-normal">
                <Link to="/my/account">Log Out</Link>
              </div>
            </div>
          </div>
          <div
            onClick={() => setCart(!cart)}
            className="cart hover:cursor-pointer md:text-base text-xs relative"
          >
            <FaShoppingCart />
            <div
              className={`absolute top-full translate-y-4 right-0 border border-[#F0F0F0] transition-all duration-300 ${cart ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            >
              <div className="product flex items-center md:gap-5 gap-3 bg-[#F5F5F3] md:p-5 p-3">
                <div className="img md:w-20 w-12 md:h-20 h-12 bg-[#D8D8D8]">
                  <img src="" alt="" />
                </div>
                <div className="text md:text-sm text-xs text-[#262626] md:font-bold font-medium">
                  <p className="whitespace-nowrap md:mb-3 mb-1">
                    Black Smart Watch
                  </p>
                  <p>$44.00</p>
                </div>
                <HiPlusSm className="rotate-45 text-lg md:ml-[58px] ml-[15px]" />
              </div>
              <div className="pay md:px-5 px-3 md:pt-[14px] pt-2 md:pb-5 pb-3 bg-[#FFF]">
                <p className="mb-3">
                  <span className="md:text-base text-xs text-[#767676] leading-[143.75%]">
                    Subtotal:
                  </span>{" "}
                  <span className="md:text-base text-xs text-[#262626] md:font-bold font-medium">
                    $44.00
                  </span>
                </p>
                <div className="btns flex items-center justify-center md:gap-5 gap-3">
                  <button className="md:py-4 py-2 md:px-10 px-5 border border-[#262626] md:text-sm text-xs md:font-bold font-medium text-[#FFF] bg-[#262626] transition-all duration-300 hover:text-[#262626] hover:bg-transparent">
                    <Link to='/cart'>View Cart</Link>
                  </button>
                  <button className="md:py-4 py-2 md:px-10 px-5 border border-[#262626] md:text-sm text-xs md:font-bold font-medium text-[#FFF] bg-[#262626] transition-all duration-300 hover:text-[#262626] hover:bg-transparent">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Searchbar;
