import React from "react";
import './style.css';

const Footer = () => {
    return (
        // <footer className="footer bg-light fixed-bottom">
        //     <div className="footer-container d-flex justify-content-center">
        //         {/* <!-- Site version info --> */}
        //         <span className="my-foot-text">© 2022 v1.0 - updated: 09/29</span>
        //     </div>
        // </footer>

        <footer className="footer bg-dark pt-3">
                <div className="d-flex row justify-content-center">
                    <p className="fw-bold ">Contáctanos</p>
                    <p>Cel +57 318 3593342</p>
                    <p>hello@kikster.live</p>
                    <p>Cra. 4 # 59-21</p>
                    <p>Bogotá D.C. | Colombia</p>
                </div>
          
        </footer>
    );
}

export default Footer;

// Cra. 4 # 59-21
// Cel +57 318 3593342
// hello@kikster.live
// Bogotá D.C. | Colombia