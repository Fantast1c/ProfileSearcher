import React from 'react';
import style from './NoRepositories.module.css'
import noRepoIcon from "../../../icons/noRepo.svg";

const NoRepositories = () => {
    return (
        <div className={style.no_repo}>
                <div className={style.no_repo_element}>
                    <div className={style.no_repo_icon}><img src={noRepoIcon} alt="noRepoIcon"/></div>
                    <div className={style.text_style}><span >Repository list is empty</span></div>
                </div>
        </div>
    );
};

export default NoRepositories;