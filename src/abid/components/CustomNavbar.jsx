// components/Navbar.jsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Styles/Navbar.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import logo from '../assets/LogoSpotify.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



import {Col} from "react-bootstrap";

const CustomNavbar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary Pembungkus">
            <Container className="no">
                <Navbar.Brand href="/" className="text-white textkebungkus"><Image src={logo} style={{ width: '100px', height: 'auto' }} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto textkebungkus">
                        <Nav.Link className="txt1" as={Link} to="/about-us">About</Nav.Link>
                        <Nav.Link className="txt2" as={Link} to="/promo">Promo</Nav.Link>
                        <Nav.Link className="txt3" href="#home">Booking</Nav.Link>
                        <Nav.Link href="#link">Location</Nav.Link>
                    </Nav>

                    {/* Tombol Sign Up dan Login */}
                    <div className="d-flex gap-3">
                        <Button variant="link" className="text-white textkebungkus" href="#SignUp">Sign Up</Button>
                        <Button  className={"rounded-pill log textkebungkus"} href="#Login">Login</Button>
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>



    );
};

export default CustomNavbar;