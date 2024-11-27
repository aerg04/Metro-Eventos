import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getToken, getUserInfo } from '../models/user';

const PrivateRoute = ({ children, requiredRole, restrictedPaths = [] }) => {
    const token = getToken();
    const userInfo = getUserInfo();
    const location = useLocation();

    console.log("Ruta actual:", location.pathname);
    console.log("Usuario:", userInfo);
    console.log("Token:", token);

    // Redirigir si el usuario no está autenticado
    if (!token) {
        console.log("No hay token. Redirigiendo a login.");
        return <Navigate to="/login" />;
    }

    // Si se requiere un rol específico y el usuario no cumple, redirige
    if (requiredRole && userInfo.role !== requiredRole) {
        console.log("Rol no autorizado. Redirigiendo a /events.");
        return <Navigate to="/events" />;
    }

    // Redirigir si la ruta está restringida para el rol del usuario
    if (restrictedPaths.includes(location.pathname)) {
        console.log("Ruta restringida. Redirigiendo a /events.");
        return <Navigate to="/events" />;
    }

    return children;
};

export default PrivateRoute;
