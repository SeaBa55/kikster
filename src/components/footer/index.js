import React from "react";
import './style.css';

const Footer = () => {
    return (
        <footer className="footer bg-light">
            <div className="footer-container d-flex justify-content-center">
                {/* <!-- Site version info --> */}
                <span className="my-foot-text">© 2022 v1.0 - updated: 09/29</span>
            </div>
        </footer>
    );
}

export default Footer;