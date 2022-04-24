import React from 'react';
import style from './Main.module.css'
import Profile from "./profile/Profile";
import Repositories from "./repositories/Repositories";
import NoRepositories from "./repositories/NoRepositories";

const Main = () => {
    return (
        <main className={style.main}>
            <Profile/>
            <Repositories/>
        </main>
    );
};

export default Main;