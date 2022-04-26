import React from 'react';
import style from './Repository.module.css'

type repoPropsType = {
repo:{
    name: string
    description: string
    html_url: string
}
}

const Repository = (props:repoPropsType) => {
    const repo = props.repo
    console.log("repos", props)
    return (

        <div className={style.repo}>
            <div className={style.repo_name}><span>{repo.name}</span></div>
            <div className={style.repo_desc}><span>{repo.description}</span></div>
        </div>
    );
};

export default Repository;