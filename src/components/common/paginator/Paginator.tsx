import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import style from './Paginator.module.css'
import prevIcon from '../../../icons/left.svg'
import nextIcon from '../../../icons/right.svg'

const Paginator = (reposCount:any) => {

    const pageCount =   Math.ceil((reposCount.reposCount+1)/4)

    console.log('pageC',pageCount)
    const handlePageClick = (data:any) =>{
        console.log(data.selected)
    }

    return (
        <div className={style.paginator}>
            <ReactPaginate
                pageCount={pageCount}
                onPageChange={handlePageClick}
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                marginPagesDisplayed={1}
                containerClassName={style.paginator_container}
                pageClassName={style.paginator_container_number}
                pageLinkClassName={style.paginator_container_link}
                activeLinkClassName={style.paginator_container_active}
                nextLinkClassName={style.paginator_container_next}
                previousLinkClassName={style.paginator_container_prev}
                breakClassName={style.paginator_container_dotes}
            />
        </div>
    );
};

export default Paginator;