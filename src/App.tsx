import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {Route, Routes} from "react-router-dom";
import InitialMain from "./components/additional/initialMain/InitialMain";
import NoProfile from "./components/additional/noProfile/NoProfile";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {ProfileStateType} from "./redux/profile-reducer";
import Loader from "./components/common/loader/Loader";

const App = () =>{
    const profileState = useSelector<AppRootStateType,ProfileStateType>((state)=>state.profile)

    return (
        <div className="App">
            {profileState.isFetching ? <Loader/> : ""}
        <Header/>
        <Routes>
            <Route path="/" element={<InitialMain/>}/>
            <Route path="/main" element={profileState.isExist ? <Main/>:<NoProfile/>}/>
        </Routes>
    </div>
    )
}

export default App;
