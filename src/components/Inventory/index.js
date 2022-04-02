import React, {useEffect, useState} from 'react';
import UserService from '../../Services/UserService';
import {useAuth} from "../../Provider/AuthProvider";

const Index = () => {
    const [inventory, setInventory] = useState([]);

    const authContext = useAuth();
    const userService = UserService(authContext);

    useEffect(() => {
        const inventory = userService.getTracks();
        setInventory(inventory);
    }, []);

    return (
        <div className="col-12">
            <div className="row">
                <div className="col-12">
                    <h2>My inventory</h2>
                    <hr className="w-50" />
                </div>
            </div>
            <div className="row bg-dark text-white">
                <div className="col-12">
                    <p className="m-0">Contents ...</p>
                </div>
            </div>
        </div>
    );
};

export default Index;
