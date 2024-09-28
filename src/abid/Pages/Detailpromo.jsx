// Pages/Detailpromotion.jsx
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/Rectangle1.png';
import '../Styles/Detailpromo.css';
import Container from "react-bootstrap/Container"; // Mengimpor gambar dengan benar
import CustomNavbar from '../components/CustomNavbar';

const DetailPromotion = () => {
    return (
        <div>
        <CustomNavbar/>
        <Container>
                <img
                    className="d-block w-100"
                    src={ExampleCarouselImage}
                    alt="First slide"
                />
        </Container>

        <Container className="atasan">
            <h3 className="textbesar">Save 15% on Your First Parking Reservation!
            </h3>
            <p className="text1">Take advantage of our special offer and enjoy a generous 15% discount on your very first parking reservation. This limited-time deal is designed to make your initial experience with our service even more rewarding. Simply use the promo code <span className="textputih">NEW15</span> at checkout to unlock this exclusive savings opportunity. Don’t miss out—book now and discover how affordable and convenient parking can be with us!</p>
            <p className="text1">Available at :</p>
            <ul className="text1">
                <li>Telkom University</li>
                <li>Trans Studi Mall</li>
                <li>Transmart Buah Batu</li>
            </ul>
        </Container>
        </div>
    );
};

export default DetailPromotion;
