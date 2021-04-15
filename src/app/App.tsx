import React from "react";
import '../static/App.css';
import {NavBar, Sidebar, StepRouter} from '../features/index'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar />
          <Sidebar />
          <StepRouter />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

