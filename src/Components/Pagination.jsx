import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import ProductCard from '../Layers/ProductCard';



const Pagination = ({itemsPerPage}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        setItems(data.products)
      } catch (error) {
        console.error('product not found', error);
      }
    }
    getData()
  },[])

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
        <div>
            <div className='md:mt-[60px] mt-5 flex justify-between md:justify-normal md:gap-x-10 md:gap-y-[50px] gap-y-6 flex-wrap'>
            <Items currentItems={currentItems} />
            </div>
            <div className='flex items-end justify-between'>
              <ReactPaginate
                  breakLabel="..."
                  nextLabel="< next"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={4}
                  pageCount={pageCount}
                  previousLabel="< previous"
                  renderOnZeroPageCount={null}
                  pageClassName="Li border md:w-9 md:h-9 w-5 h-5 text-[#767676]"
                  pageLinkClassName="a md:text-sm text-xs flex justify-center items-center w-full h-full"
                  previousClassName="hidden"
                  nextClassName="hidden"
                  containerClassName="pagination-ul flex md:gap-[15px] gap-2 md:mt-[50px] mt-7"
                  activeClassName="active bg-[#262626] text-white"
              />
              <p className='md:text-base text-xs text-[#767676] leading-[30px]'>
                  Products from {itemOffset+1} to {endOffset > items.length ? items.length : endOffset} of {items.length}
              </p>
            </div>
        </div>
    </>
  );
}

let Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <ProductCard key={index} src={item.thumbnail} productName={item.title} price={item.price} color={item.brand} tag={item.discountPercentage}/>
        ))}
    </>
  );
}

export default Pagination