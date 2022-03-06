import React, {useState} from 'react';
import {Button, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import AuthService from '../../Services/AuthService';
import {useNavigate} from "react-router-dom";

const emailRegex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
const isValidEmail = (email) => {
    return emailRegex.test(email);
};

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState({ value: '', error: ''});
    const [email, setEmail] = useState({ value: '', error: ''});
    const [password, setPassword] = useState({ value: '', error: ''});

    const handleSubmit = (event) => {
        let isValidForm = true;

        if (!username.value) {
            setUsername({value: '', error: 'Username is required !'});
            isValidForm = false;
        }
        if (!email.value) {
            setEmail({value: '', error: 'Email is required !'});
            isValidForm = false;
        } else if (!isValidEmail(email.value)) {
            setEmail({value: email.value, error: 'Please enter a valid email'});
            isValidForm = false;
        }

        if (!password.value) {
            setPassword({value: '', error: 'Password is required !'});
            isValidForm = false;
        } else if (password.value.length < 5 || password.value.length > 500) {
            setPassword({value: password.value, error: 'Password must be 5 to 500 characters length !'});
            isValidForm = false;
        }

        if (!isValidForm) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        AuthService.register(username.value, email.value, password.value)
            .then(res => {
                if (res.errors) {
                    event.preventDefault();
                    event.stopPropagation();

                    res.errors.forEach( ({param, msg}) => {
                        switch (param) {
                            case "username":
                                setUsername({ value: username.value, error: msg});
                                break;
                            case "email":
                                setEmail({ value: email.value, error: msg});
                                break;
                            case "password":
                                setPassword({ value: password.value, error: msg});
                                break;
                        }
                    });
                } else {
                    navigate('/dashboard');
                }
            })

        event.preventDefault();
        event.stopPropagation();
    }

    return (
        <div>
            <Form noValidate onSubmit={handleSubmit}>
                <FormGroup>
                    <FormLabel>Username</FormLabel>
                    <FormControl
                        onChange={(e) =>
                            setUsername({value: e.target.value, error: '' })
                        }
                        isInvalid={!!username.error}
                        placeholder="Enter username"/>
                    <Form.Control.Feedback type="invalid">
                        {username.error}
                    </Form.Control.Feedback>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormControl
                        onChange={(e) =>
                            setEmail({value: e.target.value, error: '' })
                        }
                        type="email"
                        isInvalid={!!email.error}
                        placeholder="Enter email"/>
                    <Form.Control.Feedback type="invalid">
                        {email.error}
                    </Form.Control.Feedback>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        onChange={(e) =>
                            setPassword({value: e.target.value, error: '' })
                        }
                        required
                        minLength="5"
                        maxLength="500"
                        isInvalid={!!password.error}
                        type="password"
                        placeholder="password" />
                    <Form.Control.Feedback type="invalid">
                        {password.error}
                    </Form.Control.Feedback>
                </FormGroup>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;
