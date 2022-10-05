import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ isAllowed, children, redirectPath = "/iniciar-sesion" }) => {
    if (!isAllowed || null) {   //El valor se le pasa por props en el route
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />; 
}