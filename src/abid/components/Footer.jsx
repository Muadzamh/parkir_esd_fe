// components/Footer.jsx
import React from 'react';
import '../Styles/Footer.css'; // Mengimpor file CSS untuk footer
import logo from "../assets/LogoSpotify.png"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col sm={2}><img src={logo} width="150px"/></Col>
                    <Col>
                        <ul className="foot1">
                            <li className="bolds">Company</li>
                            <li>About us</li>
                            <li>Promo</li>
                            <li>Booking</li>
                            <li>Location</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className="foot1">
                            <li className="bolds">Legal</li>
                            <li>Privacy & policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className="foot1">
                            <li className="bolds">Legal</li>
                            <li>Email:</li>
                            <li>ss@slotify.app</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className="foot1">
                        <li className="bolds">Follow Us!</li>
                        <li className="social-icons">
                            <a href="https://www.instagram.com" className="social-link">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                            <a href="https://www.facebook.com" className="social-link">
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </a>
                        </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
