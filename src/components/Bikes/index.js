import React, {useEffect, useState} from 'react';
import {Card, Spinner, Button} from "react-bootstrap";
import {getBikes} from "../../Services/UserService";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import bicycleLogo from "../../images/bicycle.png";
import bikeLogo from "../../images/bike.png"


const Index = () => {
    const [spinner, setSpinner] = useState(true);
    const [bikes, setBikes] = useState([]);

    const loadBikes = async () => {
        setSpinner(true);
       const response = await getBikes();
       setBikes(response);
       setSpinner(false);
    }

    useEffect(() => {
        loadBikes();
    }, []);

    const reloadBikes = () => {
        loadBikes();
    }

    const getCardsForRow = () => {
        const bikesIcon = [bicycleLogo, bikeLogo];
        const items = bikes.map((bike, index) => {
            bike.icon = bikesIcon[Math.floor(Math.random() * bikesIcon.length)]
            return (
                <Col>
                    <Card key={bike.id} className="mb-3">
                        <Card.Img variant="top" src={bike.icon} />
                        <Card.Body>
                            <Card.Title>{bike.name}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>
                </Col>
            );

        });
        return items;
    }

    return (
        <div id="bikes" className="col-12">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-between">
                        <h2>Mes vélos</h2>
                        <div>
                            <button className="fill-green">+</button>
                        </div>

                    </div>

                    <hr className="w-50" />
                </div>
            </div>
            <div className="row bg-dark">
                <div className="col-12">
                    { spinner && ( <Spinner animation="border" role="status" >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner> ) }
                    <Row xs={1} md={3} className="pt-3 g-4">
                        {getCardsForRow()}
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Index;
