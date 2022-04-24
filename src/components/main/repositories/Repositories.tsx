import React from 'react';
import style from './Repositories.module.css'
import Repository from "./repository/Repository";
import Paginator from "../../common/paginator/Paginator";

const Repositories = () => {
    return (
        <div className={style.repo_container}>
            <div className={style.repo_header}><span>Repositories ()</span></div>
            <div className={style.repository_container}>
                <Repository/>
                <Repository/>
                <Repository/>
                <Repository/>
            </div>
                <Paginator/>
        </div>
    );
};

export default Repositories;