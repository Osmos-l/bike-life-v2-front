import React, {useState} from 'react';
import Login from "./login";
import Register from "./register";

const Index = () => {
    const [showModal, setShowModal] = useState('login'); // login or register
    const handleChange = (event, newValue) => {
        setShowModal(newValue);
    }

    return (
        <div >
            <div>
                { showModal == 'login' && <Login /> }
                { showModal == 'register' && <Register /> }
            </div>
        </div>
    );
};

export default Index;
