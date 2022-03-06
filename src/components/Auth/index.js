import React, {useState} from 'react';
import Login from "./login";
import Register from "./register";

const Index = () => {
    const [showModal, setShowModal] = useState('login'); // login or register

    return (
        <div >
            <div>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className={`nav-link ${showModal == 'login' && 'active'}`}
                           href="#"
                           onClick={() => setShowModal('login')}
                        >Login</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${showModal == 'register' && 'active'}`}
                           href="#"
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
