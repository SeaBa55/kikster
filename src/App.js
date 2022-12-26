import React, { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import './App.css';

function App() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('load', handleResize);
    window.addEventListener("resize", handleResize);
  }, [])

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  };

  return (
    <div className="App">
      <NavBar />
      <div className="page-content">
        <Outlet context={[isMobile, setIsMobile]}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
