import React from 'react';
import style from './Repository.module.css'

const Repository = () => {
    return (
        <div className={style.repo}>
            <div className={style.repo_name}><span></span></div>
            <div className={style.repo_desc}><span></span></div>
        </div>
    );
};

export default Repository;