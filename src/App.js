import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="page-content">
        <Outlet />
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
