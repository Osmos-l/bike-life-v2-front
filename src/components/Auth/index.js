import React, {useState} from 'react';
import Login from "./login";
import Register from "./register";
import AuthService from "../../Services/AuthService";
import {Navigate} from "react-router-dom";

const Index = () => {
    const [showModal, setShowModal] = useState('login'); // login or register

    if (AuthService.isAuthenticated()) {
        return <Navigate to="/dashboard" />
    }

    return (
        <div id="auth">
            <div>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className={`nav-link ${showModal == 'login' && 'active'}`}
                           onClick={() => setShowModal('login')}
                        >Login</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${showModal == 'register' && 'active'}`}
                           onClick={() => setShowModal('register')}
                        >Register</a>
                    </li>
                </ul>
            </div>
            <div className="mt-3">
                { showModal == 'login' && <Login /> }
                { showModal == 'register' && <Register /> }
            </div>
        </div>
    );
};

export default Index;
