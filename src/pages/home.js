import React, {useEffect, useState} from 'react';
import Auth from '../components/Auth';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tree from '../components/Tree';
import { Link } from "react-scroll";
import {getRefreshToken, isAuthenticated, setAccessToken, setAuthenticated} from "../Libs/Store";
import {useNavigate} from "react-router-dom";
import {tryRefreshAccessToken} from "../Services/AuthService";

const Home = () => {
    const navigate = useNavigate();

    const navigateToDashboard = () => {
        navigate("/dashboard");
    }

    const tryRememberMe = async () => {
        const refreshToken = getRefreshToken();
        if (!refreshToken) {
            return;
        }

        const accessToken = await tryRefreshAccessToken();
        if (!accessToken) {
            return;
        }

        setAccessToken(accessToken);
        setAuthenticated(true);
        navigateToDashboard();
    }

    useEffect(() => {
        isAuthenticated() ? navigateToDashboard() : tryRememberMe();
    });

    const [authForm, setAuthForm] = useState('login'); // Login or register
    return (
        <div id="home">
            <section id="landing" className="text-center"> {/* First page */}
                <h1>BIKE'S LIFE</h1>
                <div className="content">
                    <Link
                          className="btn"
                          to="info"
                          smooth={true}>
                        Découvrir
                    </Link>
                    <p>
                        <span className="text-center" >ou</span><br />
                        Déjà utilisateur ? <span><
                                                Link to="auth"
                                                       smooth={true}
                                                        onClick={() => setAuthForm('login')}>connexion
                                                </Link>
                                            </span> -
                                            <span>
                                                <Link to="auth"
                                                      smooth={true}
                                                      onClick={() => setAuthForm('register')}>inscription
                                                </Link>
                                            </span>
                    </p>
                </div>
            </section>
            <section id="info"> {/* Second page */}
                <Tree />
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-center mb-5">A propos</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et sem leo. Ut eros libero, aliquam quis maximus ac, tristique sed orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum auctor neque in porta dictum. Suspendisse luctus ipsum eu imperdiet viverra. Aenean sit amet dui pharetra, accumsan nulla sed, finibus ligula. Quisque bibendum dignissim erat, a elementum libero iaculis ut. Nunc bibendum turpis urna, a ullamcorper turpis lacinia eget. Nullam ac bibendum ligula. Integer pharetra, ligula sed luctus ultrices, augue enim consectetur lacus, at faucibus nisi risus eget arcu. Suspendisse efficitur urna et tortor egestas, in pulvinar est elementum. Nam rutrum nisl a ex aliquam, in consequat metus finibus. Aliquam hendrerit ante metus, eget semper nisi pharetra a. In egestas sem semper sollicitudin imperdiet. Duis dignissim in arcu ac imperdiet. Mauris dictum sem eu sodales posuere.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id="auth"> {/* Third page */}
                <Auth authForm={authForm} setAuthForm={setAuthForm}/>
            </section>
        </div>
    );
};

export default Home;
