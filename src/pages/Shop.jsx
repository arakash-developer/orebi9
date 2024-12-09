import React, { useState } from 'react'
import Container from '../Layers/Container'
import BreadCrumbs from '../Layers/BreadCrumbs'
import { IoGrid } from 'react-icons/io5'
import { MdOutlineStorage } from 'react-icons/md'
import Pagination from '../Components/Pagination'
import { TiArrowSortedUp } from 'react-icons/ti'
import { GoPlus, GoX } from 'react-icons/go'
import Category from '../Layers/Category'

const Shop = () => {

  let [itemsPerPage, setitemsPerPage] = useState(12)

  let manageitemsPerPage = (element) => {
    setitemsPerPage(Number(element.target.value))
  }


  // const [showCategory, setShowCategory] = useState(false);
  // const [openCategory, setOpenCategory] = useState(null);
  // const [openSubCategory, setOpenSubCategory] = useState({})

  // const categories = [
  //   {
  //     id: 1,
  //     name: 'Category 1',
  //     icon: <GoPlus className='rotate-0 text-lg' />,
  //     SubCategory: [
  //       {
  //         id: 11,
  //         name: 'Sub Category 1',
  //         icon: <GoPlus />,
  //       }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     name: 'Category 2',
  //     icon: <GoPlus />,
  //   },
  //   {
  //     id: 3,
  //     name: 'Category 3',
  //     icon: <GoPlus />,
  //     SubCategory: [
  //       {
  //         id: 33,
  //         name: 'Sub Category 3',
  //         icon: <GoPlus />,
  //       }
  //     ]
  //   },
  //   {
  //     id: 4,
  //     name: 'Category 4',
  //     icon: <GoPlus />,
  //   },
  //   {
  //     id: 5,
  //     name: 'Category 5',
  //     icon: <GoPlus />,
  //   },
  // ]

  // const toggleCategory = (index) => {
  //   setOpenCategory(openCategory === index ? null : index);
  // };

  // const toggleSubCategory = (categoryIndex, subIndex) => {
  //   setOpenSubCategory((prev) => ({
  //     ...prev,
  //     [categoryIndex]: prev[categoryIndex] === subIndex ? null : subIndex,
  //   }));
  // }

  return (
    <div className='md:px-0 px-2'>
      <section id="products" className='md:pt-[124px] pt-10'>
        <Container>
          <BreadCrumbs />
          <div className="main md:mt-[130px] mt-10 grid md:grid-cols-4 gap-10">
            <div className="category md:col-span-1">
              <Category />
              {/* <div className="child border-b">
                <h3
                  onClick={() => setShowCategory(!showCategory)}
                  className='md:text-[20px] text-lg text-[#262626] font-semibold md:font-bold flex items-center justify-between md:mb-9 mb-3 cursor-pointer'
                >
                  Shop by Category
                  <TiArrowSortedUp className={`${showCategory ? 'rotate-0' : 'rotate-90'}`} />
                </h3>
                <ul className={`flex flex-col md:gap-5 gap-2 ${showCategory ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0'}`}>
                  {categories.map((item, index) => (
                    <li
                      key={index}
                      className='categoryLi relative z-[1]'
                      onClick={() => toggleCategory(index)}
                    >
                      {item.name}
                      {openCategory === index ? <GoX /> : item.icon}
                      <ul className={`flex flex-col absolute top-full left-0 z-[-1] w-full bg-red-950 md:gap-5 gap-2 ${openCategory === index ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0'}`}>
                        {item.SubCategory && item.SubCategory.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className='categoryLi'
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleSubCategory(index, subIndex);
                            }}
                          >
                            {subItem.name} {openSubCategory[index] === subIndex ? <GoX /> : subItem.icon}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
            <div className="product md:col-span-3 ">
              <div className="heading flex justify-between md:items-center">
                <div className="format flex md:gap-5 gap-2 items-center">
                  <IoGrid className='md:p-1 md:border md:border-[#262626] md:text-white md:text-3xl md:bg-[#262626]' />
                  <MdOutlineStorage className='md:p-1 md:border md:border-[#262626] md:text-white md:text-3xl md:bg-[#262626]' />
                </div>
                <div className="sorting flex items-center md:gap-10 gap-5">
                  <div className="sort flex items-center md:gap-3 gap-2">
                    <p className='md:text-base text-xs text-[#767676] leading-[187.5%]'>
                      Sort by:
                    </p>
                    <select name="" id="" className='py-1 md:px-5 px-2 border border-[#F0F0F0] md:w-[239px] w-[120px] bg-transparent md:text-base text-xs text-[#767676] leading-[187.5%]'>
                      <option value="" className='py-1 px-5'>Featured</option>
                      <option value="" className='py-1 px-5'>Featured</option>
                      <option value="" className='py-1 px-5'>Featured</option>
                    </select>
                  </div>
                  <div className="show flex items-center md:gap-3 gap-2">
                    <p className='md:text-base text-xs text-[#767676] leading-[187.5%]'>
                      Show:
                    </p>
                    <select onChange={manageitemsPerPage} name="" id="" className='py-1 md:px-5 px-2 border border-[#F0F0F0] md:w-[139px] bg-transparent md:text-base text-xs text-[#767676] leading-[187.5%]'>
                      <option value="12" className='py-1 px-5'>12</option>
                      <option value="24" className='py-1 px-5'>24</option>
                      <option value="36" className='py-1 px-5'>36</option>
                      <option value="48" className='py-1 px-5'>48</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="products">
                <Pagination itemsPerPage={itemsPerPage} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Shop