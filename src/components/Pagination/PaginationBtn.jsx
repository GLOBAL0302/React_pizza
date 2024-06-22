import React from 'react';
import style from "./PaginationBtn.module.scss"
import ReactPaginate from "react-paginate";

const PaginationBtn = ({onChangePage, currentPage}) => {
    return <ReactPaginate

        className= {style.root}
        breakLabel="..."
        previousLabel="<"
        nextLabel=">"
        onPageChange={(event) =>onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
    />
};

export default PaginationBtn;