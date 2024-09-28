// Pages/HomePage.jsx
import React from 'react';
import Button from '../components/button.jsx';
import CustomCard from "../components/card.jsx"
import '../Styles/Style.css';
import '../Styles/Navbar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import loctLogo from '../assets/LocationLogo.png';
import logo from "../assets/LogoSpotify.png";
import Image from "react-bootstrap/Image";
import gambar from "../assets/unsplash.png";
import parkiingarea from "../assets/Img.png"
import ajamImg from "../assets/ajamfe1.png"
import abidImg from "../assets/abidfe2.png"
import ricoImg from "../assets/ricoentrep.png"
import rafieImg from "../assets/rafiebe.png"
import galangImg from "../assets/galanguiux.png"
import atharImg from "../assets/atharuiux.png"
import line from "../assets/dividingline.png"
import Footer from "../components/Footer.jsx";
import CustomNavbar from '../components/CustomNavbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
    return (
        <div className='about-us-page'>
            <div className="gradient"></div>
            <div className="circle"></div>


            <CustomNavbar/>
            <div className="jumbutron">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="jumbutronh1">Welcome To Slotify</h1>
                            <p className="jumbutronp">We're Here To Simplify Your Parking Experience By Offering A Fast And Convenient Way To Find <br/>And Book Parking Spots Online. Our Goal is To Make Parking Stress-Free So You Can Focus On What <br/> Matters Most. Thank You For Choosing Us To Be Your Parking Solutioni.</p>
                        </Col>
                    </Row>
                </Container>

                <Container className="container2">
                    <Row>
                        <Col><Image src={gambar} style={{ width: '500px', height: 'auto' }} /></Col>
                        <Col><h3 className="jumbutronh3"> Effortless Parking Solutions</h3>
                            <p className="jumbutronp1">At Slotify, We Believe That Finding And Booking Parking Should Be As Effortless As A Click Of A Button. Our Mission Is To Transform The Way You Approach Parking By Offering A Streamlined, User-Friendly Platform That Takes The Stress Out Of Parking In Busy Urban Environments</p>
                        </Col>
                    </Row>
                </Container>

                <Container className="container3">
                    <Row>
                        <Col><h3 className="jumbutronh3">Our Story</h3>
                            <p className="jumbutronp2">At Slotify, We Believe That Finding And Booking Parking Should Be As Effortless As A Click Of A Button. Our Mission Is To Transform The Way You Approach Parking By Offering A Streamlined, User-Friendly Platform That Takes The Stress Out Of Parking In Busy Urban Environments</p>
                        </Col>
                        <Col><Image src={parkiingarea} style={{ width: '500px', height: 'auto' }} /></Col>
                    </Row>
                </Container>

                <Container className="container3">
                    <Row>
                        <Col>
                            <h3 className="jumbutronh3">Our Teams</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CustomCard
                                imgSrc={ricoImg}
                                title="Rico"
                                description="Entrepreneur"
                                role="Entrepreneur"
                            />
                        </Col>
                    </Row>
                    <Row>
                            <Col xs={6} md={3}>
                                <CustomCard
                                    imgSrc={ajamImg}
                                    title="Ajam"
                                    description="Frontend #01"
                                    role="Frontend Developer"
                                />
                            </Col>
                            <Col xs={6} md={3}>
                                <CustomCard
                                    imgSrc={abidImg}
                                    title="Abid"
                                    description="Frontend #02"
                                    role="Frontend Developer"
                                />
                            </Col>
                            <Col xs={6} md={3}>
                                <CustomCard
                                    imgSrc={atharImg}
                                    title="Athar"
                                    description="UI/UX #01"
                                    role="Desain"
                                />
                            </Col>
                            <Col xs={6} md={3}>
                                <CustomCard
                                    imgSrc={galangImg}
                                    title="Galang"
                                    description="UI/UX #02"
                                    role="Desain"
                                />
                            </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CustomCard
                                imgSrc={rafieImg}
                                title="Rafie"
                                description="Backend"
                                role="Backend"
                            />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Col><Image src={line} style={{ width: '700px', height: '3px'}} /></Col>
                </Container>

                <Footer/>
            </div>
        </div>
    );
};

export default AboutUs;