import React from "react";
import '../static/App.css';
import {NavBar, Sidebar} from '../components/index'
import 'bootstrap/dist/css/bootstrap.min.css'



function App(props:any) {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Sidebar />
      </header>
    </div>
  );
}

export default App;

