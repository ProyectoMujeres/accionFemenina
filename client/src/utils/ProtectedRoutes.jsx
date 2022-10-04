import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ isAllowed, children, redirectPath = "/iniciar-sesion" }) => {
    if (!isAllowed || null) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />; 
}