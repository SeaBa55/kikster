import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from "react-router-dom";
import LoginPortal from "./components/login-portal"
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { adminPattern } from "./portfolio";
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [listening, setListening] = useState(false);
  const [enabled, setEnabled] = useState(false);
  // const [clickProgression, setClickProgression] = useState("terst");

  let clickProgression = [];
  let timeoutID;

  useEffect(() => {
    window.addEventListener('load', handleResize);
    window.addEventListener("resize", handleResize);
    window.addEventListener("click", handleClick);
  }, []);

  // useEffect(() => {

  // },[clickProgression && listening]);

  // useEffect(() => {
  //   if(!listening){
  //     setClickProgression([]);
  //     console.log("click progression reset");
  //   }
  // },[listening])

  const openAdminPortal = () => {
    console.log("in admin mode");
    setEnabled(true);
  };

  const reset = () => {
    setListening(false);
    console.log("listening is off");
    clickProgression = [];
    console.log("click progression reset");
  };

  const startTimer = () => {
    timeoutID = setTimeout(() => {
      console.log("timeout");
      reset();
    }, 10000)
  };

  const handleClick = (event) => {
    const currentId = event.target.id;
    if (clickProgression.length === 0) {
      console.log("listening is on")
      setListening(true);
      startTimer();
    }
    clickProgression.push(currentId);
    console.log(clickProgression);
    if (clickProgression.length === 5) {
      const checKey = clickProgression.every((item, index) => item === adminPattern[index]);
      if (checKey) {
        console.log("its a match!");
        openAdminPortal();
      }else {
        console.log("its not a match");
      };
      reset();
      clearTimeout(timeoutID);
    }
  };

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
        {enabled && <LoginPortal />}
        <Outlet context={[isMobile, setIsMobile]}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
