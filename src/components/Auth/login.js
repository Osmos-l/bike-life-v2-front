import React, {useState} from 'react';
import {Button, Form, FormControl, FormGroup, FormLabel, Alert} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {login} from "../../Services/AuthService";

const Login = () => {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(false);

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();

            setValidated(true);
            return;
        }

        const response = await login(username, password, rememberMe);
        if (response.errors) {
            setError(true);
            return;
        } else {
            navigate("/dashboard");
        }


        event.preventDefault();
        event.stopPropagation();
    }

    return (
        <div id="login">
            { error && ( <Alert variant="danger">
                Invalid credentials !
            </Alert> ) }
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <FormGroup>
                    <FormLabel className="required">Username</FormLabel>
                    <FormControl
                        onChange={(e) =>
                            setUsername(e.target.value)
                        }
                        required
                        placeholder="Enter username"/>
                    <Form.Control.Feedback type="invalid">
                        Username is required.
                    </Form.Control.Feedback>
                </FormGroup>
                <FormGroup>
                    <FormLabel className="required">Password</FormLabel>
                    <FormControl
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        required
                        type="password"
                        placeholder="password" />
                    <Form.Control.Feedback type="invalid">
                        Password is required.
                    </Form.Control.Feedback>
                </FormGroup>
                <FormGroup>
                    <Form.Check
                        onChange={(e) => {
                            setRememberMe(!rememberMe);
                        }}
                        type="switch"
                        label="Maintenir la connexion"
                    />
                </FormGroup>
                <div className="w-100 text-center mt-4">

                    <Button variant="primary" type="submit">
                        Connexion
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Login;
