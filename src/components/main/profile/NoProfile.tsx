import React from 'react';
import style from './NoProfile.module.css';
import noUserIcon from "../../../icons/noUser.svg";

const NoProfile = () => {
    return (
        <main className={style.no_profile}>
            <div className={style.no_profile_element}>
                <div className={style.no_user_icon}><img src={noUserIcon} alt="noUser"/></div>
                <div className={style.text_style}><span >User not found</span></div>
            </div>
        </main>
    );
};

export default NoProfile;