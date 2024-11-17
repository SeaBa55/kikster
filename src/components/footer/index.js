import React from "react";
import './style.css';
import { Col, Row } from "react-bootstrap";
import {
    faLocationDot,
    faPaperPlane,
    faPhone,
    faPhoneFlip,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                    <p>Si tu comunidad desarrolla proyectos de turismo rural comunitario en destinos de naturaleza y quieres articular su modelo operativo de manera funcional y sostenible, te podemos ayudar.</p>
                    <Row className="justify-content-center">
                        <Col>
                            <Row className="justify-content-center"> 
                                <Col className="justify-content-end"> <FontAwesomeIcon className='fa-fw' icon={faPhone} /></Col>
                                <Col><p>Cel +57 318 3593342</p> </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row> 
                                <FontAwesomeIcon className='fa-fw' icon={faPaperPlane} /><p>hello@kikster.live</p> 
                            </Row>
                        </Col>
                        <Col>
                            <Row> 
                                <FontAwesomeIcon className='fa-fw' icon={faLocationDot} /><p>Cra. 4 # 59-21</p>
                            </Row>
                        </Col>
                    </Row>
                    <p>Bogotá D.C. | Colombia</p>
                </div>
          
        </footer>
    );
}

export default Footer;