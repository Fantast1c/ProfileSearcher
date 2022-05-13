import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from "./Search.module.css";
import searchIcon from "../../../icons/search.svg";
import {getProfileTC, ProfileStateType} from "../../../redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {getReposTC, ReposStateType} from "../../../redux/repos-reducer";
import {AppRootStateType} from "../../../redux/store";
import {useNavigate} from "react-router-dom";

const Search = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const reposState = useSelector<AppRootStateType, ReposStateType>((state) => state.repos)
    const profileState = useSelector<AppRootStateType, ProfileStateType>((state) => state.profile)

    const [title, setTitle] = useState("")

    const getInfo = () => {
        if (title.trim() !== "") {
            // @ts-ignore
            dispatch(getProfileTC(title));
            console.log("isEx:", profileState.isExist)
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

    return (
        <div className={style.input_wrapper}>
            <div className={style.input_wrapper_elements}>
                <div className={style.search_icon}><img src={searchIcon} alt="search"/></div>
                <div className={style.input}><input onChange={onChangeHandler} value={title}
                                                    onKeyPress={onKeyPressHandler} placeholder="Enter Github username"
                                                    type="text"/></div>
            </div>
        </div>
    );
};

export default Search;