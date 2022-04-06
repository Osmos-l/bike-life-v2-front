import React, {useEffect, useState} from 'react';
import {getTracks} from "../../Services/UserService";

const Index = () => {
    const [tracks , setTracks] = useState([]);

    useEffect( async () => {
        const tracks = await getTracks();
        setTracks(tracks);
    }, []);


    return (
        <div className="col-12">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-between">
                        <h2>Mes parcours</h2>
                        <div>
                            <button className="fill-green">+</button>
                        </div>

                    </div>

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
