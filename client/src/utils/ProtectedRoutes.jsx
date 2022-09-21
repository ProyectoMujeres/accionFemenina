import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ children, redirectPath = "/iniciar-sesion"}) => {
    if (!localStorage.getItem("user") || null) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />; 
}