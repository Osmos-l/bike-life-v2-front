import React, {useEffect, useState} from 'react';
import {Spinner} from "react-bootstrap";
import {getBikes} from "../../Services/UserService";

const Index = () => {
    const [spinner, setSpinner] = useState(true);
    const [bikes, setBikes] = useState([]);

    const loadBikes = async () => {
        setSpinner(true);
       const response = await getBikes();
       setBikes(response);
       setSpinner(false);
    }

    useEffect(() => {
        loadBikes();
    }, []);

    const reloadBikes = () => {
        loadBikes();
    }

    return (
        <div id="bikes" className="col-12">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-between">
                        <h2>Mes vélos</h2>
                        <div>
                            <button className="fill-green">+</button>
                        </div>

                    </div>

                    <hr className="w-50" />
                </div>
            </div>
            <div className="row bg-dark text-white">
                <div className="col-12">
                    { spinner && ( <Spinner animation="border" role="status" >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner> ) }
                    <ul>
                        { bikes.map(bike => <li id={bike._id}>{bike.name} - {bike._id}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Index;
