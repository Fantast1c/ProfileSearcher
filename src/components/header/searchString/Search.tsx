import React from 'react';
import style from "./Search.module.css";
import searchIcon from "../../../icons/search.svg";

const Search = () => {
    return (
        <div className={style.input_wrapper}>
            <div className={style.input_wrapper_elements}>
                <div className={style.search_icon}><img src={searchIcon} alt="search"/></div>
                <div className={style.input}><input placeholder="Enter Github username" type="text"/></div>
            </div>
        </div>
    );
};

export default Search;