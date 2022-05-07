import React from 'react';
import style from './Main.module.css'
import Profile from "./profile/Profile";
import Repositories from "./repositories/Repositories";
import NoRepositories from "./repositories/NoRepositories";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {ReposStateType} from "../../redux/repos-reducer";
import {ProfileStateType} from "../../redux/profile-reducer";
import NoProfile from "./profile/NoProfile";

const Main = () => {
    const profileState = useSelector<AppRootStateType,ProfileStateType>((state)=>state.profile)
    return (
        <main className={style.main}>
            <Profile/>
            {profileState.profile.public_repos !== 0 ? <Repositories/>:<NoRepositories/>}
        </main>
    );
};

export default Main;