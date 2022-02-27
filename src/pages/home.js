import React from 'react';
import Auth from '../components/Auth';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-center">Bike's Life V2</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Auth />
                </Col>
            </Row>

        </Container>
    );
};

export default Home;
