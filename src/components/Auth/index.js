import React from 'react';
import Login from "./login";
import Register from "./register";

const Index = (props) => {

    return (
        <div id="auth">
            <div>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className={`nav-link ${props.authForm == 'login' && 'active'}`}
                           onClick={() => props.setAuthForm('login')}
                        >Login</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${props.authForm == 'register' && 'active'}`}
                           onClick={() => props.setAuthForm('register')}
                        >Register</a>
                    </li>
                </ul>
            </div>
            <div id="auth-form-container" className="mt-3">
                { props.authForm == 'login' && <Login /> }
                { props.authForm == 'register' && <Register /> }
            </div>
        </div>
    );
};

export default Index;
