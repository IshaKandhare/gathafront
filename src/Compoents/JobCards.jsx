/* eslint-disable react/prop-types */
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import JobCard from "./JobCard";

function JobCards(props) {
  const items = props.apiData;
  const itemsPerPage = 4;

  const [itemOffset, setItemOffset] = useState(props.pagination);
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems.map((item, i) => (
        <JobCard key={i} data={item} pagination={itemOffset} />
      ))}
      <ReactPaginate
        breakLabel={
          <span className="pagination-item" style={{border:'solid black'}}>...</span>
        }
        nextLabel={
          <span className="pagination-item" style={{border:'solid black'}}>
            <BiChevronRight />
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={
          <span className="pagination-item" style={{border:'solid black'}}>
            <BiChevronLeft />
          </span>
        }
        renderOnZeroPageCount={null}
        activeClassName="active"
        containerClassName="d-flex justify-content-end flex-wrap gap-2 mt-8 mb-4 "
        pageClassName="pagination-item"
      />
    </>
  );
}

export default JobCards;
