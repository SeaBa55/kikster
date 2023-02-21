import React, { useEffect, useRef, useState } from 'react';
import './style.css';

const LoginPortal = (ref) => {
    const myRef = useRef(null);

    useEffect(() => {
        myRef.current.classList.add('animate-border');
    },[]);

    const myRef2 = useRef(null);

    useEffect(() => {
        myRef2.current.classList.add('door-open');
    },[]);

    return (
        <>
            {/* <div className="login">
                <div className="svg-wrapper">
                    <svg height="300" width="320" xmlns="http://www.w3.org/2000/svg">
                        <rect ref={myRef} className="shape" height="300" width="320"/>
                        <div className="text">ZACH SAUCIER</div>
                    </svg>
                </div>
            </div> */}

            <div className="back-drop"/>
            <div className="login-wrapper">
                {/* <div className="login">
                </div> */}
                <div className="svg-wrapper">
                    <div className="back-door">
                        <form>
                            <label htmlFor="fname">First name:</label>
                            <br/>
                            <input type="text" id="fname" name="fname"/>
                            <br/>
                            <label htmlFor="lname">Last name:</label>
                            <br/>
                            <input type="text" id="lname" name="lname"/>
                        </form>
                        <div ref={myRef2} className="door">
                        </div>
                    </div>
                    <svg height="300" width="320" >
                        <rect ref={myRef} className="shape" height="300" width="320"/>
                    </svg>
                    <div className="text2">
                        <form>
                            <label htmlFor="user">user name</label>
                            <br/>
                            <input type="text" id="user" name="user"/>
                            <br/>
                            <label htmlFor="pass">password</label>
                            <br/>
                            <input type="text" id="pass" name="pass"/>
                        </form>
                    </div>
                </div>
            </div>


        </>
    );
}

export default LoginPortal;