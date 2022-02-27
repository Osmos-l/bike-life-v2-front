import React from 'react';
import AuthService from "../Services/AuthService";
import {Navigate, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

const Dashboard = () => {
    const navigate = useNavigate();

    if (!AuthService.isAuthenticated()) {
        return <Navigate to="/" />
    }

    const logout = () => {
        AuthService.logout();
        navigate("/");
    }

    return (
        <div>
            <h1>Welcome to your protected dashboard</h1>
            <Button variant="primary" onClick={logout}>
                Logout
            </Button>
        </div>
    );
};

export default Dashboard;
