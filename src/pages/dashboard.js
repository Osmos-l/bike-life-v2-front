import React, {useEffect, useState} from 'react';
import {Button, Spinner} from "react-bootstrap";
import Tracks from "../components/Tracks";
import Bikes from "../components/Bikes";
import {getUser, logout} from "../Services/AuthService";

const Dashboard = () => {
    const [spinner, setSpinner] = useState(true);
    const [user, setUser] = useState({ username: '' });

    useEffect(async () => {
        setUser(await getUser());
        setSpinner(false);
    }, []);


    const handleLogout = () => {
        logout();
    }

    return !spinner ? (
        <div id="dashboard">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Welcome {user.username} <span>👋</span></h1>
                    </div>
                    <div className="col-12 text-center">
                        <Button variant="primary" onClick={handleLogout}>
                            Logout
                        </Button>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row mb-5">
                        {/* <Tracks /> */}
                    </div>
                    <div className="row mb-5">
                        <Bikes />
                    </div>
                    <div className="row mb-5">

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
