import React from 'react';
import style from './InitialMain.module.css'
import startIcon from '../../icons/start.svg'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {ProfileStateType} from "../../redux/profile-reducer";

const InitialMain = () => {
    //const state = useSelector<AppRootStateType,ProfileStateType>((state)=>state.profile)

    return (
        <main className={style.initial_main}>
            <div className={style.initial_main_element}>
                <div className={style.start_icon}><img src={startIcon} alt="startIcon"/></div>
                <div className={style.text_style}><span >Start with searching a GitHub user</span></div>
            </div>
        </main>
    );
};

export default InitialMain;