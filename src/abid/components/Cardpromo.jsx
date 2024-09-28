// components/card.jsx
import React from 'react';
import '../Styles/Cardpromo.css'; // Mengimpor file CSS untuk card
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';


const CustomCard = ({ imgSrc, title, description }) => {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
            <Card className="mx-auto warnakartu">
                <Card.Img variant="top" src={imgSrc}/> {/* Pastikan sumber gambar valid */}
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="deskripsicard">
                        {description}
                    </Card.Text>
                    <Link to="/promo-detail"> {/* Menggunakan Link untuk navigasi */}
                        <Button className={"rounded-pill log textkebungkus2"}>More</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CustomCard; // Ekspor sebagai CustomCard
