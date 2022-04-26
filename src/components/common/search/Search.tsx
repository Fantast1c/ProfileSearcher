import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from "./Search.module.css";
import searchIcon from "../../../icons/search.svg";
import { getProfileTC} from "../../../redux/profile-reducer";
import {useDispatch} from "react-redux";
import {getReposTC} from "../../../redux/repos-reducer";



const Search = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState("")

            const getProfile = () => {
                if (title.trim() !== "") {
                    // @ts-ignore
                    dispatch(getProfileTC(title));
                    // @ts-ignore
                    dispatch(getReposTC(title))
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