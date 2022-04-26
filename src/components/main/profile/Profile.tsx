import style from './Profile.module.css'
import followersIcon from '../../../icons/followers.svg'
import followingIcon from '../../../icons/following.svg'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {InitStateType} from "../../../redux/profile-reducer";

const Profile = () => {
    const state = useSelector<AppRootStateType,InitStateType>((state)=>state.profile)
    return (
        <div className={style.profile_container}>
            <div className={style.profile}>
                <div className={style.profile_photo}><img width="280" height="280" src={state.profile.avatar_url} alt="photo"/></div>
                <div className={style.profile_info}>
                    <div className={style.profile_info_name}><span>{state.profile.name}</span></div>
                    <div className={style.profile_info_nick}><span>{state.profile.login}</span></div>
                    <div className={style.profile_info_follow}>
                        <div className={style.profile_info_follow_followers}>
                            <img src={followersIcon} alt="followers"/><span>{state.profile.followers} followers</span>
                        </div>
                        <div className={style.profile_info_follow_following}>
                            <img src={followingIcon} alt="following"/><span>{state.profile.following} following</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;