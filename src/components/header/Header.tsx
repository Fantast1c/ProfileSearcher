import React from 'react';
import style from './Header.module.css'
import logoIcon from '../../icons/logo.svg'
import searchIcon from '../../icons/search.svg'

const Header = () => {
    return (
        <header className={style.header}>
            <img className={style.logo_icon} src={logoIcon} alt="logo"/>
            <div className={style.input_wrapper}>
                <div className={style.input_wrapper_elements}>
                    <div className={style.search_icon}><img src={searchIcon} alt="search"/></div>
                    <div className={style.input}><input placeholder="Enter Github username" type="text"/></div>
                </div>
                </div>
        </header>
    );
};

export default Header;