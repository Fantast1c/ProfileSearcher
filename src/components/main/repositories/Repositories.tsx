import React from 'react';
import style from './Repositories.module.css'
import Repository from "./repository/Repository";
import Paginator from "../../common/paginator/Paginator";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {InitStateType} from "../../../redux/repos-reducer";

const Repositories = () => {
    const state = useSelector<AppRootStateType,InitStateType>((state)=>state.repos)
    const reposCount = state.repos.length

    return (
        <div className={style.repo_container}>
            <div className={style.repo_header}><span>Repositories ({reposCount})</span></div>
            <div className={style.repository_container}>
                {state.repos.map((repo)=>
                    <Repository repo = {repo}/>
                )}
            </div>
                <Paginator reposCount={reposCount}/>
        </div>
    );
};

export default Repositories;