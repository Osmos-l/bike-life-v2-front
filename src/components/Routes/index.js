import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Home from "../../pages/home";
import NotFound from "../../pages/not_found";
import Dashboard from "../../pages/dashboard";
import {isAuthenticated} from "../../Libs/Store";

const ProtectedRoute = ({ children }) => {
    if (isAuthenticated()) {
        console.log("is authenticated");
        return children;
    }
    console.log("is not authenticated");
    return <Navigate to="/" replace />;
}

const Index = () => {
    return (
        <Router>
            <Routes>
                <Route path ="/" >
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default Index;
