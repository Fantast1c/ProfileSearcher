import React from 'react';
import style from './Repositories.module.css'
import Repository from "./repository/Repository";
import Paginator from "../../common/paginator/Paginator";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {ReposStateType} from "../../../redux/repos-reducer";
import {ProfileStateType} from "../../../redux/profile-reducer";


const Repositories = () => {
    const reposState = useSelector<AppRootStateType,ReposStateType>((state)=>state.repos)
    const profileState = useSelector<AppRootStateType,ProfileStateType>((state)=>state.profile)
    const reposCount = profileState.profile.public_repos

    return (
        <div className={style.repo_container}>
            <div className={style.repo_header}><span>Repositories ({reposCount})</span></div>
            <div className={style.repository_container}>
                {reposState.repos.map((repo)=>
                    <Repository repo = {repo} key={repo.name}/>
                )}
            </div>
                <Paginator reposCount={reposCount}/>
        </div>
    );
};

export default Repositories;