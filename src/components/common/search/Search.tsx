import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import style from "./Search.module.css";
import searchIcon from "../../../icons/search.svg";
import { getProfileTC, InitStateType} from "../../../redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";



const Search = () => {
    const dispatch = useDispatch()
    const state = useSelector<AppRootStateType,InitStateType>((state)=>state.profile)
    console.log(state.profile.followers)

    const [title, setTitle] = useState("")

            const getProfile = () => {
                if (title.trim() !== "") {
                    // @ts-ignore
                    dispatch(getProfileTC(title));
                    setTitle("");
                }
            }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            getProfile()
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