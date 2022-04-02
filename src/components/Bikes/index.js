import React, {useEffect, useState} from 'react';
import UserService from '../../Services/UserService';
import {Spinner} from "react-bootstrap";
import {useAuth} from "../../Provider/AuthProvider";

const Index = () => {
    const [spinner, setSpinner] = useState(true);
    const [bikes, setBikes] = useState([]);

    const authContext = useAuth();
    const userService = UserService(authContext);

    useEffect(() => {
        userService.getBikes()
            .then(res =>  {
               setBikes(res);
               setSpinner(false);
            });
    }, []);

    return (
        <div className="col-12">
            <div className="row">
                <div className="col-12">
                    <h2>My bikes</h2>
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

/* export default class Index extends React.Component {
    AuthProvider = useAuth();
    userService = UserService(this.AuthProvider);

    state = {
        bikes: [],
        spinner: true
    };

    componentDidMount() {
        this.userService.getBikes()
            .then(bikes => {
                console.log("hi bro");
                this.setState({ bikes, spinner: false });
            });
    }

    render() {
        return (
        <div className="col-12">
            <div className="row">
                <div className="col-12">
                    <h2>My bikes</h2>
                    <hr className="w-50" />
                </div>
            </div>
            <div className="row bg-dark text-white">
                <div className="col-12">
                    { this.state.spinner && ( <Spinner animation="border" role="status" >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner> ) }
                    <ul>
                        { this.state.bikes.map(bike => <li id={bike._id}>{bike.name} - {bike._id}</li>)}
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}*/
