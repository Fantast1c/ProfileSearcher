import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from "./Search.module.css";
import searchIcon from "../../../icons/search.svg";
import {getProfileTC} from "../../../redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {getReposTC, ReposStateType} from "../../../redux/repos-reducer";
import {AppRootStateType} from "../../../redux/store";
import {useNavigate} from "react-router-dom";

const Search = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const reposState = useSelector<AppRootStateType, ReposStateType>((state) => state.repos)

    const [title, setTitle] = useState("")

    const getInfo = () => {
        if (title.trim() !== "") {
            // @ts-ignore
            dispatch(getProfileTC(title));
            // @ts-ignore
            dispatch(getReposTC(title, reposState.pageNumber))
            setTitle("");
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            navigate("/main")
            getInfo()
        }
    }
    const onSearchHandler = () =>{
        navigate("/main")
        getInfo()
    }

    return (
        <div className={style.input_wrapper}>
            <div onClick={onSearchHandler} className={style.search_icon}><img src={searchIcon} alt="search"/></div>
            <div className={style.input_wrapper_element}>
                <div className={style.input}><input  onChange={onChangeHandler} value={title}
                                                    onKeyPress={onKeyPressHandler} placeholder="Enter Github username"
                                                     onBlur={onSearchHandler}
                                                    type="text"/></div>
            </div>
        </div>
    );
};

export default Search;