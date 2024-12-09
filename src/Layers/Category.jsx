import React, { useState } from 'react'
import { GoPlus } from 'react-icons/go'
import { TiArrowSortedUp } from 'react-icons/ti'


const FilterLi = ({ DDMIcon, children, typeName }) => {
    let [showSubCategory, setShowSubCategory] = useState(false)
    let [showDDMIcon, setShowDDMIcon] = useState(DDMIcon)

    let SubCategory = [
        {
            id: 11,
            name: 'Sub Category 1',
            icon: <GoPlus />,
        },
        {
            id: 22,
            name: 'Sub Category 2',
            icon: <GoPlus />,
        },
        {
            id: 33,
            name: 'Sub Category 3',
            icon: <GoPlus />,
        },
        {
            id: 44,
            name: 'Sub Category 4',
            icon: <GoPlus />,
        },
        {
            id: 55,
            name: 'Sub Category 5',
            icon: <GoPlus />,
        },
        {
            id: 77,
            name: 'Sub Category 7',
            icon: <GoPlus />,
        },
        {
            id: 88,
            name: 'Sub Category 8',
            icon: <GoPlus />,
        },
        {
            id: 99,
            name: 'Sub Category 9',
            icon: <GoPlus />,
        },
        {
            id: 1010,
            name: 'Sub Category 10',
            icon: <GoPlus />,
        },
    ]

    return (
        <li className="categoryLi">
            <span onClick={() => setShowSubCategory(!showSubCategory)} className='flex justify-between items-center'>
                {typeName} <GoPlus className={` text-lg ${showSubCategory ? 'rotate-45 text-[#262626]' : 'rotate-0'} ${showDDMIcon ? 'block' : 'hidden'}`} />
            </span>
            {
                showDDMIcon && (
                    <ul className={`px-4 bg-[#F5F5F3] ${showSubCategory ? 'h-auto opacity-100 visible' : 'h-0 invisible opacity-0'}`}>
                        {children}
                    </ul>
                )
            }
        </li>
    )
}

const Category = ({type, className}) => {
    let [showCategory, setShowCategory] = useState(false)
    let [showColor, setShowColor] = useState(false)
    let [showBrand, setShowBrand] = useState(false)
    let [showPrice, setShowPrice] = useState(false)


    return (
        <>
            <div className='child border-b'>
                <h3 onClick={() => setShowCategory(!showCategory)} className='md:text-[20px] text-lg text-[#262626] font-semibold md:font-bold flex items-center justify-between md:mb-9 mb-3 cursor-pointer'>
                    Shop by Category
                    <TiArrowSortedUp className={`${showCategory ? 'rotate-0' : 'rotate-90'}`} />
                </h3>
                <ul className={`flex flex-col md:gap-5 gap-2 ${showCategory ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0'}`}>
                    <FilterLi DDMIcon={true} typeName={'Category 1'}>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                    </FilterLi>
                    <FilterLi DDMIcon={false} typeName={'Category 2'}/>
                    <FilterLi DDMIcon={true} typeName={'Category 3'}>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                    </FilterLi>
                    <FilterLi DDMIcon={false} typeName={'Category 4'}/>
                    <FilterLi DDMIcon={false} typeName={'Category 5'}/>
                </ul>
            </div>
            <div className='child border-b md:mt-[23px] mt-4'>
                <h3 onClick={() => setShowColor(!showColor)} className='md:text-[20px] text-lg text-[#262626] font-semibold md:font-bold flex items-center justify-between md:mb-9 mb-3 cursor-pointer'>
                    Shop by Color
                    <TiArrowSortedUp className={`${showColor ? 'rotate-0' : 'rotate-90'}`} />
                </h3>
                <ul className={`flex flex-col md:gap-5 gap-2 ${showColor ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0'}`}>
                    <FilterLi DDMIcon={true} typeName={'Color 1'}>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                    </FilterLi>
                    <FilterLi DDMIcon={false} typeName={'Color 2'}/>
                    <FilterLi DDMIcon={true} typeName={'Color 3'}>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                    </FilterLi>
                    <FilterLi DDMIcon={false} typeName={'Color 4'}/>
                    <FilterLi DDMIcon={false} typeName={'Color 5'}/>
                </ul>
            </div>
            <div className='child border-b md:mt-[23px] mt-4'>
                <h3 onClick={() => setShowBrand(!showBrand)} className='md:text-[20px] text-lg text-[#262626] font-semibold md:font-bold flex items-center justify-between md:mb-9 mb-3 cursor-pointer'>
                    Shop by Brand
                    <TiArrowSortedUp className={`${showBrand ? 'rotate-0' : 'rotate-90'}`} />
                </h3>
                <ul className={`flex flex-col md:gap-5 gap-2 ${showBrand ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0'}`}>
                    <FilterLi DDMIcon={true} typeName={'Brand 1'}>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                    </FilterLi>
                    <FilterLi DDMIcon={false} typeName={'Brand 2'}/>
                    <FilterLi DDMIcon={true} typeName={'Brand 3'}>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                    </FilterLi>
                    <FilterLi DDMIcon={false} typeName={'Brand 4'}/>
                    <FilterLi DDMIcon={false} typeName={'Brand 5'}/>
                </ul>
            </div>
            <div className='child border-b md:mt-[23px] mt-4'>
                <h3 onClick={() => setShowPrice(!showPrice)} className='md:text-[20px] text-lg text-[#262626] font-semibold md:font-bold flex items-center justify-between md:mb-9 mb-3 cursor-pointer'>
                    Shop by Brand
                    <TiArrowSortedUp className={`${showPrice ? 'rotate-0' : 'rotate-90'}`} />
                </h3>
                <ul className={`flex flex-col md:gap-5 gap-2 ${showPrice ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0'}`}>
                    <FilterLi DDMIcon={true} typeName={'Brand 1'}>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                    </FilterLi>
                    <FilterLi DDMIcon={false} typeName={'Brand 2'}/>
                    <FilterLi DDMIcon={true} typeName={'Brand 3'}>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                        <li className='categoryLi'>
                            Sub Category 1
                        </li>
                    </FilterLi>
                    <FilterLi DDMIcon={false} typeName={'Brand 4'}/>
                    <FilterLi DDMIcon={false} typeName={'Brand 5'}/>
                </ul>
            </div>
        </>
    )
}

export default Category