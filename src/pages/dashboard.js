import React from 'react';
import {Button} from "react-bootstrap";
import Tracks from "../components/Tracks";
import Bikes from "../components/Bikes";
import {logout} from "../Services/AuthService";

const Dashboard = () => {
    const user = {username: "stub"};

    const handleLogout = () => {
        logout();
    }

    return (
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
    );
};

export default Dashboard;
