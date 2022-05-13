import React from 'react';
import style from './Main.module.css'
import Profile from "./profile/Profile";
import Repositories from "./repositories/Repositories";
import NoRepositories from "../additional/noRepositories/NoRepositories";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {ProfileStateType} from "../../redux/profile-reducer";

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