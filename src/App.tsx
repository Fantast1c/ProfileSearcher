import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import InitialMain from "./components/main/InitialMain";
import NoProfile from "./components/main/profile/NoProfile";

function App() {
  return (
    <div className="App">
      <Header/>
        <Main/>
    </div>
  );
}

export default App;
