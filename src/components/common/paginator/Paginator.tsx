import ReactPaginate from 'react-paginate';
import style from './Paginator.module.css'
import prevIcon from '../../../icons/left.svg'
import nextIcon from '../../../icons/right.svg'
import {useDispatch, useSelector} from "react-redux";
import {getReposTC, ReposStateType, setPageNumberAC} from "../../../redux/repos-reducer";
import {AppRootStateType} from "../../../redux/store";

const Paginator = (reposCount:any) => {
    const dispatch = useDispatch()
    const state = useSelector<AppRootStateType,ReposStateType>((state)=>state.repos)
    const pageCount =   Math.ceil((reposCount.reposCount+1)/4)
    const startOfPage= (1+state.pageNumber*4) - 4
    const endOfPage= (4+state.pageNumber*4) - 4

    const handlePageClick = (data:any) =>{
        // @ts-ignore
        dispatch(getReposTC(state.userName, data.selected +1))
    }

    return (
        <div className={style.paginator}>
            <div className={style.paginator_items}><span>{startOfPage}-{endOfPage} of {reposCount.reposCount} items</span></div>
            <ReactPaginate
                pageCount={pageCount}
                onPageChange={handlePageClick}
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
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