// Pages/Promotion.jsx
import React from 'react';
import '../Styles/Promo.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomCard2 from "../components/Cardpromo.jsx";
import parkiran from "../assets/imgpromo.png";
import ExampleCarouselImage from '../assets/Rectangle1.png';
import CustomNavbar from '../components/CustomNavbar.jsx';
import Footer from '../components/Footer.jsx';

const Promo = () => {
    return (
            <div className='promo-container'>
                <CustomNavbar/>
                <div className="jumbotron"> {/* Perbaikan penamaan class */}
                    
                    <Container>
                        <div className="image-container"><img
                            className="d-block w-100"
                            src={ExampleCarouselImage}
                            alt="First slide"
                        />
                            <div className="text-overlay">
                                <h1>Find Your Best Offer</h1>
                            </div>
                        </div>
                    </Container>

                    <Container className="container3">
                        <Row>
                            <Col>
                            <CustomCard2
                                    imgSrc={parkiran}
                                    title="Save 15% on Your First Parking Reservation!"
                                    description="Until 20 Dec 2024"
                                />
                            </Col>
                            <Col>
                                <CustomCard2
                                    imgSrc={parkiran}
                                    title="Save 15% on Your First Parking Reservation!"
                                    description="Until 20 Dec 2024"
                                />
                            </Col>
                            <Col>
                                <CustomCard2
                                    imgSrc={parkiran}
                                    title="Save 15% on Your First Parking Reservation!"
                                    description="Until 20 Dec 2024"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CustomCard2
                                    imgSrc={parkiran}
                                    title="Save 15% on Your First Parking Reservation!"
                                    description="Until 20 Dec 2024"
                                />
                            </Col>
                            <Col>
                                <CustomCard2
                                    imgSrc={parkiran}
                                    title="Save 15% on Your First Parking Reservation!"
                                    description="Until 20 Dec 2024"
                                />
                            </Col>
                            <Col>
                                <CustomCard2
                                    imgSrc={parkiran}
                                    title="Save 15% on Your First Parking Reservation!"
                                    description="Until 20 Dec 2024"
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
                    <Footer/>
            </div>
            );
            };

            export default Promo;
