import React, { useEffect, useRef, useState } from 'react';
import './style.css';

const LoginPortal = (ref) => {
    const myRef = useRef(null);

    

    useEffect(() => {
        myRef.current.classList.add('animate-border');
    },[]);

    return (
        <>
            <div className="login">
                <div className="svg-wrapper">
                    <svg height="300" width="320" xmlns="http://www.w3.org/2000/svg">
                        <rect ref={myRef} className="shape" height="300" width="320" />
                    </svg>
                </div>
            </div>
        </>
    );
}

export default LoginPortal;