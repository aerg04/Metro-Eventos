// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../models/user';

const PrivateRoute = ({ children }) => {
    const token = getToken();
    return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;