import React from 'react';
import Navbar from './Navbar'; // Import komponen Navbar
import Footer from './Footer'; // Import komponen Footer
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Styles/DetailPage.css'; // Import file CSS sesuai kebutuhan

const DetailPage = () => {
    return (
        <div className="detail-page">
            <Navbar />

            <Container className="main-content">
                <Row>
                    <Col md={6} className="image-gallery">
                        <img src="car1.jpg" alt="Car 1" className="img-fluid mb-2" />
                        <img src="car2.jpg" alt="Car 2" className="img-fluid mb-2" />
                        <img src="car3.jpg" alt="Car 3" className="img-fluid mb-2" />
                    </Col>

                    <Col md={6} className="details">
                        <h1>Transmart Buah Batu</h1>
                        <p className="location">AT. Transmart Buah Batu No.1A</p>

                        <div className="slot-info">
                            <span className="slot"><i className="fas fa-parking"></i> 10 Slots</span>
                            <span className="rating"><i className="fas fa-star"></i> 4.7 (240 reviews)</span>
                            <span className="price">Rp 3K - 5K / hour</span>
                        </div>

                        <Button className="book-now-btn">Book Now</Button>
                    </Col>
                </Row>

                <Row className="description-section mt-4">
                    <Col>
                        <h2>Description</h2>
                        <p>
                            The parking spot is well-designed, with easy access to facilities and online reservations.
                            There are also several services such as cleaning and maintenance, ensuring that your parking
                            experience is hassle-free.
                        </p>
                    </Col>
                </Row>

                <Row className="map-section mt-4">
                    <Col>
                        <h2>Location</h2>
                        <img src="map-image.jpg" alt="Map" className="img-fluid" />
                        <Button variant="outline-light" className="mt-2">Open on Google Maps</Button>
                    </Col>
                </Row>

                <Row className="comments-section mt-4">
                    <Col>
                        <h2>Comments</h2>
                        <div className="comment">
                            <p><strong>John Doe:</strong> Great parking location! The space is large and well-organized, making it easy to park even during busy hours. Highly recommended!</p>
                        </div>
                        <div className="comment">
                            <p><strong>Jane Doe:</strong> A well-maintained parking lot with a convenient entrance and exit. Great value for the price, and I always feel secure leaving my car here.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
};

export default DetailPage;
