import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import InitialMain from "./components/main/InitialMain";

function App() {
  return (
    <div className="App">
      <Header/>
        <InitialMain/>
    </div>
  );
}

export default App;
