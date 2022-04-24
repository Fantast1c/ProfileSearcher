import React from 'react';
import style from './Profile.module.css'
import followersIcon from '../../../icons/followers.svg'
import followingIcon from '../../../icons/following.svg'

const Profile = () => {
    return (
        <div className={style.profile_container}>
            <div className={style.profile}>
                <div className={style.profile_photo}><img src="" alt="photo"/></div>
                <div className={style.profile_info}>
                    <div className={style.profile_info_name}><span></span></div>
                    <div className={style.profile_info_nick}><span></span></div>
                    <div className={style.profile_info_follow}>
                        <div className={style.profile_info_follow_followers}>
                            <img src={followersIcon} alt="followers"/><span></span>
                        </div>
                        <div className={style.profile_info_follow_following}>
                            <img src={followingIcon} alt="following"/><span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;