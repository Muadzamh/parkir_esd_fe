// components/card.jsx
import React from 'react';
import '../Styles/Card.css'; // Mengimpor file CSS untuk card
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


const CustomCard = ({ imgSrc, title, description, role }) => {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
        <Card className="mx-auto warnakartu">
            <Card.Img variant="top" src={imgSrc}/> {/* Pastikan sumber gambar valid */}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    <small>{role}</small> {/* Menggunakan role dari props */}
                </Card.Text>
            </Card.Body>
        </Card>
        </Container>
    );
};

export default CustomCard; // Ekspor sebagai CustomCard
