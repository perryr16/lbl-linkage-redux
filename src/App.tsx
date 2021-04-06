import React from "react";
import './App.css';
import {NavBar} from '../src/components/index'

function App(props:any) {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
    </div>
  );
}

export default App;

