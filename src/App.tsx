import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {Navigate, Route, Routes} from "react-router-dom";
import InitialMain from "./components/main/InitialMain";
import NoProfile from "./components/main/profile/NoProfile";
import NoRepositories from "./components/main/repositories/NoRepositories";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {ProfileStateType} from "./redux/profile-reducer";
import Profile from "./components/main/profile/Profile";

const App = () =>{
    const profileState = useSelector<AppRootStateType,ProfileStateType>((state)=>state.profile)

    return (
        <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<InitialMain/>}/>
            <Route path="/main" element={profileState.isExist ? <Main/>:<NoProfile/>}/>
        </Routes>
    </div>
    )
}

export default App;
