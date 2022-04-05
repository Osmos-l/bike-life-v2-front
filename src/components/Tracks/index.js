import React, {useEffect, useState} from 'react';
import UserService from '../../Services/UserService';

const Index = () => {
    const [tracks , setTracks] = useState([]);

    const userService = UserService();

    useEffect(() => {
        const tracks = userService.getTracks();
        setTracks(tracks);
    }, []);


    return (
        <div className="col-12">
            <div className="row">
                <div className="col-12">
                    <h2>My tracks</h2>
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
