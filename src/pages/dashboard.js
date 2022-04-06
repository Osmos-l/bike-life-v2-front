import React, {useEffect, useState} from 'react';
import {Button, Container, Navbar, Spinner, Row} from "react-bootstrap";
import Tracks from "../components/Tracks";
import Bikes from "../components/Bikes";
import Inventory from "../components/Inventory";
import {getUser, logout} from "../Services/AuthService";

const Dashboard = () => {
    const [spinner, setSpinner] = useState(true);
    const [user, setUser] = useState({ username: '' });

    useEffect( () => {
        const fetchUser = async () => {
            setUser(await getUser());
            setSpinner(false);
        }
        fetchUser();
    }, []);


    const handleLogout = () => {
        logout();
    }

    return !spinner ? (
        <div id="dashboard">
            <Navbar sticky="top">
                <Container fluid>
                    <Row className="text-center w-100">
                        <div className="col-12">
                            <h1>Bonjour, {user.username} <span>👋</span></h1>
                        </div>
                        <div className="col-12">
                            <Button className="edit-profil">Consulter mon profil</Button>
                        </div>
                        <div className="col-12">
                            <Button className="logout" variant="primary" onClick={handleLogout}>
                                Déconnexion
                            </Button>
                        </div>
                    </Row>
                </Container>
            </Navbar>
            <div id="content">
                <div className="container-fluid">
                    <div className="container mt-5">
                        <div className="row mb-5">
                            <Tracks />
                        </div>
                        <div className="row mb-5">
                            <Bikes />
                        </div>
                        <div className="row mb-5">
                            <Inventory />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : ( <div id="dashboard">
        <div className="container-fluid">
            <Spinner animation="border" role="status" >
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    </div>);
};

export default Dashboard;
