import style from './Repository.module.css'

type reposPropsType = {
    repo: {
        name: string
        description: string
        html_url: string
    }
}

const Repository = (props: reposPropsType) => {
    const repo = props.repo
    return (
        <div className={style.repo}>
            <div className={style.repo_name}><a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a></div>
            <div className={style.repo_desc}><span>{repo.description}</span></div>
        </div>
    );
};

export default Repository;