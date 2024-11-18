// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate,useLocation } from 'react-router-dom';
import { getToken,getUserInfo } from '../models/user';


const PrivateRoute = ({ children }) => {
    const token = getToken();
    const userInfo = getUserInfo();
    const location = useLocation();
    if(userInfo.role==='ROLE_REGULAR' &&( location.pathname === '/myevents' || location.pathname === '/createevent' || location.pathname === '/editevent')){
        return <Navigate to="/events" />;
    }
    return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;