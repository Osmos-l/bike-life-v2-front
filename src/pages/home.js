import React from 'react';
import Auth from '../components/Auth';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tree from '../components/Tree';

const Home = () => {
    return (
        <div id="home">
            <section id="landing" className="text-center"> {/* First page */}
                <h1>BIKE'S LIFE</h1>
                <div className="content">
                    <a className="btn">
                        Découvrir
                    </a>
                    <p>
                        <span className="text-center" >ou</span><br />
                        Déjà utilisateur ? <span><a href="#">connexion</a></span> - <span><a href="#">inscription</a></span>
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
                <Auth />
            </section>
        </div>
    );
};

export default Home;
