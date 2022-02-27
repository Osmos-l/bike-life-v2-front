import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../../pages/home";
import NotFound from "../../pages/not_found";
import Dashboard from "../../pages/dashboard";

const Index = () => {
    return (
        <Router>
            <Routes>
                <Route path ="/" >
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default Index;
