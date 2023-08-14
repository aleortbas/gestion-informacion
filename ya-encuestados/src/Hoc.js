import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component }) => {
    const accessToken = localStorage.getItem("accessToken");
    const isAuthenticated = accessToken !== null;

    return isAuthenticated ? <Component /> : <Navigate to="/" />;
};

export default ProtectedRoute;
