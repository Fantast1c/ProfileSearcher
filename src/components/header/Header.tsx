import React from 'react';
import style from './Header.module.css'
import logoIcon from '../../icons/logo.svg'
import Search from "../common/search/Search";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.logo_icon}><img src={logoIcon} alt="logo"/></div>
            <Search/>
        </header>
    );
};

export default Header;